export class Timer
{
    constructor()
    {
        this.recentTimeStamp;
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
            this.totalElapsedTime += this.recentTimeStamp - window.performance.now();
            this.paused = true;
            ++this.numberOfTimesPaused;
        }
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
