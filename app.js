class Chronometer {
    constructor(intervalId, time) {
        this.intervalId = intervalId
        this.time = time
    }

    start() {
        if (!this.intervalId) {
            this.totalSeconds = 0;
            this.intervalId = setInterval(() => { this.updateTime() }, 1000);
        }
    }
    
    updateTime() {
        this.totalSeconds++;
        const hours = Math.floor(this.totalSeconds / 3600).toString().padStart(2, "0");
        const minutes = Math.floor((this.totalSeconds % 3600) / 60).toString().padStart(2, "0");
        const seconds = (this.totalSeconds % 60).toString().padStart(2, "0");
    
        this.time = `${hours}:${minutes}:${seconds}`;
        this.updateDOM();
    }
    
    updateDOM() {
        if (this.selectorUI && this.time) {
            const element = document.querySelector(this.selectorUI);
            if (element) {
                element.innerText = this.time;
            }
        }
        
    }

    record(){
        if (this.timesRecordsUI && this.time) {
            const currentTime = this.time
            const recordsElement = document.querySelector(this.timesRecordsUI);
            if (recordsElement) {
                const newRecord = document.createElement("li")
                recordsElement.appendChild(newRecord).innerText = currentTime
            }
        }
        this.stop()
    }

    setSelectorUI(selector) {
        this.selectorUI = selector;
    }

    setRecordsListSelector(selector) {
        this.timesRecordsUI = selector;
    }

    stop(){
        clearInterval(this.intervalId)
        this.intervalId = null
    }
}

// FIRST RIDER
const startBtnFirstRider = document.querySelector("[data-start-1]")
const stopBtnFirstRider = document.querySelector("[data-stop-first-rider-1]")
const startBtnFirstRider2 = document.querySelector("[data-start-2]")
const stopBtnFirstRider2 = document.querySelector("[data-stop-first-rider-2]")
const startBtnFirstRider3 = document.querySelector("[data-start-3]")
const stopBtnFirstRider3 = document.querySelector("[data-stop-first-rider-3]")

const chronometerFirstRider1 = new Chronometer(null, "00:00:00");

startBtnFirstRider.addEventListener("click", function () {
    chronometerFirstRider1.setSelectorUI("[data-ui-time-first-rider-1]");
    chronometerFirstRider1.setRecordsListSelector("[data-records-list-first-rider]");
    chronometerFirstRider1.start();
});

stopBtnFirstRider.addEventListener("click", () => {
    chronometerFirstRider1.record();
});

const chronometerFirstRider2 = new Chronometer(null, "00:00:00");

startBtnFirstRider2.addEventListener("click", function () {
    chronometerFirstRider2.setSelectorUI("[data-ui-time-first-rider-2]");
    chronometerFirstRider2.setRecordsListSelector("[data-records-list-first-rider]");
    chronometerFirstRider2.start();
});

stopBtnFirstRider2.addEventListener("click", () => {
    chronometerFirstRider2.record();
});

const chronometerFirstRider3 = new Chronometer(null, "00:00:00");

startBtnFirstRider3.addEventListener("click", function () {
    chronometerFirstRider3.setSelectorUI("[data-ui-time-first-rider-3]");
    chronometerFirstRider3.setRecordsListSelector("[data-records-list-first-rider]");
    chronometerFirstRider3.start();
});

stopBtnFirstRider3.addEventListener("click", () => {
    chronometerFirstRider3.record();
});