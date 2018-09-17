/*
** Author : Harish Kumar
** Description: A Profiler class to store and manage Timers
** Copyright: All rights belong to Harish Kumar (C)
*/

'use strict'

import { Timer } from './timer.js';

export class Profiler
{
    constructor()
    {
        // Using dictionaries to store timers
        this.listOfTimers = {};
    }

    createTimer(nameOfTimer, timerDescription)
    {
        this.listOfTimers[nameOfTimer] = new Timer(timerDescription);
    }

    getTimer(nameOfTimer)
    {
        return this.listOfTimers[nameOfTimer];
    }

    getRenderedData()
    {
        let markup = '';

        for (let data in this.listOfTimers)
        {
            markup +=  `<div class="result-data-container">
                            <div class="result-data">Description : ${this.listOfTimers[data].getDescription()}</div>
                            <div class="result-data">TimeElapsed : ${this.listOfTimers[data].getElapsedMilliSeconds()} ms</div>
                            <div class="result-data">Pauses      : ${this.listOfTimers[data].getNumberOfTimesPaused()}</div>
                        </div>`
        }
        
        return markup
    }
}