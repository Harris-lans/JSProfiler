import { Timer } from './timer.js';

export class Profiler
{
    constructor()
    {
        this.listOfTimers = {};
    }

    createTimer(nameOfTimer)
    {
        this.listOfTimers[nameOfTimer] = new Timer();
    }

    getTimer(nameOfTimer)
    {
        return this.listOfTimers[nameOfTimer];
    }
}