/*
** Author : Harish Kumar
** Description: Timer class to measure performance
** Copyright: All rights belong to Harish Kumar (C)
*/

'use strict';

export class Timer
{
    constructor(timerDescription = "No description given")
    {
        this.recentTimeStamp;
        this.timerDescription = timerDescription;
        this.totalElapsedTime = 0;
        this.numberOfTimesPaused = 0;
        this.paused = false;
    }

    startTimer()
    {
        this.recentTimeStamp = window.performance.now();
        this.paused = false;
    }

    pauseTimer()
    {
        if (!this.paused)
        {
            this.totalElapsedTime += window.performance.now() - this.recentTimeStamp;
            this.paused = true;
            ++this.numberOfTimesPaused;
        }
    }

    setDescription(description)
    {
        this.timerDescription = description;
    }

    getDescription()
    {
        return this.timerDescription;
    }

    getElapsedMilliSeconds()
    {
        return this.totalElapsedTime;
    }

    getNumberOfTimesPaused()
    {
        return this.numberOfTimesPaused;
    }

    resetTimer()
    {
        this.totalElapsedTime = 0;
    }
}
