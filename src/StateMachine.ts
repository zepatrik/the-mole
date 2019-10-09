import {assign, Machine} from 'xstate'
import {Person, Role} from "./components/Person";

export enum GameStates {
    ConfigGame = 'config',
    ReadingRoles = 'readingRoles',
    Timer = 'timer',
    Guessing = 'guessing',
    RevealingResult = 'revealing'
}

export enum TimerStates {
    Pending = 'pending',
    Running = 'running',
    Done = 'done'
}

export enum GameEvents {
    TriggerStart = 'start',
    FinishedReading = 'finishedReading',
FinishedGuessing = 'finishedGuessing',
    TriggerConfig = 'triggerConfig'
}

export enum TimerEvents {
    TriggerRun = 'run',
    TimeExpired = 'expired'
}

const TimerConfig = {
    initial: TimerStates.Pending,
    states: {
        [TimerStates.Pending]: {
            on: {
                [TimerEvents.TriggerRun]: TimerStates.Running,
            }
        },
        [TimerStates.Running]: {
            on: {
                [TimerEvents.TimeExpired]: TimerStates.Done
            }
        },
        [TimerStates.Done]: {
            type: 'final'
        }
    }
}

export enum Actions {
    addPlayer = 'addPlayer',
    updatePlayerName = 'updatePlayerName',
    changeSpiesAmount = 'changeSpies',
    assignRoles = 'assignRoles',
}

type ContextType = {
    players: Array<Person>,
    roles: Array<Role>,
    spiesAmount: number,
    timerLength: number,
    room: number
}

const GameMachine = Machine<ContextType>({
    id: 'gameState',
    initial: GameStates.ConfigGame,
    context: {
        players: [],
        roles: [],
        spiesAmount: 1,
        timerLength: 5,
        room: 0
    },
    states: {
        [GameStates.ConfigGame]: {
            on: {
                [GameEvents.TriggerStart]: GameStates.ReadingRoles
            }
        },
        [GameStates.ReadingRoles]: {
            on: {
                [GameEvents.FinishedReading]: GameStates.Timer
            }
        },
        [GameStates.Timer]: {...TimerConfig},
        [GameStates.Guessing]: {
            on: {
                [GameEvents.FinishedGuessing]: GameStates.RevealingResult
            }
        },
        [GameStates.RevealingResult]: {
            on: {
                [GameEvents.TriggerConfig]: GameStates.ConfigGame
            }
        }
    }
}, {
    actions: {
        [Actions.addPlayer]: assign(({ players }) => ({ players: [...players, { id: players.length, name: 'Player' }]})),
        [Actions.changeSpiesAmount]: assign(({ spiesAmount }) => ({ spiesAmount: 1 }))
    }
})

export default GameMachine
