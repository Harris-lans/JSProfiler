/*
** Author : Harish Kumar
** Description: A Test Bed app to test the profiler
** Copyright: All rights belong to Harish Kumar (C)
*/

'use strict';

import { Profiler } from './profiler.js';

class TestBed
{
    constructor()
    {
        this.profiler = new Profiler();

        this.testListDiv = document.getElementById("test-list");
        
        // Initializing event Handler
        document.getElementById("show-results-button").addEventListener("click", () => { this.refreshTestData() });

        // Creating three different timers
        this.profiler.createTimer("while_loop");
        this.profiler.createTimer("looping_through_array");
    }

    runTests()
    {
        console.log("Running tests...");

        // Running Tests for while loop
        this.profiler.getTimer("while_loop").startTimer();
        this.profiler.getTimer("while_loop").setDescription("While loop of 1000 Iterations");
        this.whileLoop(1000);
        this.profiler.getTimer("while_loop").pauseTimer();

        // Re-running the same test
        this.profiler.getTimer("while_loop").startTimer();
        this.profiler.getTimer("while_loop").setDescription("While loop of 1000 Iterations");
        this.whileLoop(1000);
        this.profiler.getTimer("while_loop").pauseTimer();

        // Running Tests for while loop
        this.profiler.getTimer("looping_through_array").startTimer();
        this.profiler.getTimer("looping_through_array").setDescription("Looping through an array");
        this.arrayLoop(new Array(100));
        this.profiler.getTimer("looping_through_array").pauseTimer();
    }

    whileLoop(numberOfIterations)
    {
        let i = 0;
        while ( i < numberOfIterations)
        {
            ++i;
        }
    }

    arrayLoop(array)
    {
        for (let item in array)
        {
            item++;
        }
    }

    refreshTestData()
    {
        this.testListDiv.innerHTML = this.profiler.getRenderedData();
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    
    let app = new TestBed();
    app.runTests();

});