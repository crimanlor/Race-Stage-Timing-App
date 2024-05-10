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

// SECOND RIDER
const startBtnSecondRider = document.querySelector("[data-start-1]")
const stopBtnSecondRider = document.querySelector("[data-stop-second-rider-1]")
const startBtnSecondRider2 = document.querySelector("[data-start-2]")
const stopBtnSecondRider2 = document.querySelector("[data-stop-second-rider-2]")
const startBtnSecondRider3 = document.querySelector("[data-start-3]")
const stopBtnSecondRider3 = document.querySelector("[data-stop-second-rider-3]")

const chronometerSecondRider1 = new Chronometer(null, "00:00:00");

startBtnSecondRider.addEventListener("click", function () {
    chronometerSecondRider1.setSelectorUI("[data-ui-time-second-rider-1]");
    chronometerSecondRider1.setRecordsListSelector("[data-records-list-second-rider]");
    chronometerSecondRider1.start();
});

stopBtnSecondRider.addEventListener("click", () => {
    chronometerSecondRider1.record();
});

const chronometerSecondRider2 = new Chronometer(null, "00:00:00");

startBtnSecondRider2.addEventListener("click", function () {
    chronometerSecondRider2.setSelectorUI("[data-ui-time-second-rider-2]");
    chronometerSecondRider2.setRecordsListSelector("[data-records-list-second-rider]");
    chronometerSecondRider2.start();
});

stopBtnSecondRider2.addEventListener("click", () => {
    chronometerSecondRider2.record();
});

const chronometerSecondRider3 = new Chronometer(null, "00:00:00");

startBtnSecondRider3.addEventListener("click", function () {
    chronometerSecondRider3.setSelectorUI("[data-ui-time-second-rider-3]");
    chronometerSecondRider3.setRecordsListSelector("[data-records-list-second-rider]");
    chronometerSecondRider3.start();
});

stopBtnSecondRider3.addEventListener("click", () => {
    chronometerSecondRider3.record();
});

// THIRD RIDER
const startBtnThirdRider = document.querySelector("[data-start-1]")
const stopBtnThirdRider = document.querySelector("[data-stop-third-rider-1]")
const startBtnThirdRider2 = document.querySelector("[data-start-2]")
const stopBtnThirdRider2 = document.querySelector("[data-stop-third-rider-2]")
const startBtnThirdRider3 = document.querySelector("[data-start-3]")
const stopBtnThirdRider3 = document.querySelector("[data-stop-third-rider-3]")

const chronometerThirdRider1 = new Chronometer(null, "00:00:00");

startBtnThirdRider.addEventListener("click", function () {
    chronometerThirdRider1.setSelectorUI("[data-ui-time-third-rider-1]");
    chronometerThirdRider1.setRecordsListSelector("[data-records-list-third-rider]");
    chronometerThirdRider1.start();
});

stopBtnThirdRider.addEventListener("click", () => {
    chronometerThirdRider1.record();
});

const chronometerThirdRider2 = new Chronometer(null, "00:00:00");

startBtnThirdRider2.addEventListener("click", function () {
    chronometerThirdRider2.setSelectorUI("[data-ui-time-third-rider-2]");
    chronometerThirdRider2.setRecordsListSelector("[data-records-list-third-rider]");
    chronometerThirdRider2.start();
});

stopBtnThirdRider2.addEventListener("click", () => {
    chronometerThirdRider2.record();
});

const chronometerThirdRider3 = new Chronometer(null, "00:00:00");

startBtnThirdRider3.addEventListener("click", function () {
    chronometerThirdRider3.setSelectorUI("[data-ui-time-third-rider-3]");
    chronometerThirdRider3.setRecordsListSelector("[data-records-list-third-rider]");
    chronometerThirdRider3.start();
});

stopBtnThirdRider3.addEventListener("click", () => {
    chronometerThirdRider3.record();
});


// FOURTH RIDER
const startBtnFourthRider = document.querySelector("[data-start-1]")
const stopBtnFourthRider = document.querySelector("[data-stop-fourth-rider-1]")
const startBtnFourthRider2 = document.querySelector("[data-start-2]")
const stopBtnFourthRider2 = document.querySelector("[data-stop-fourth-rider-2]")
const startBtnFourthRider3 = document.querySelector("[data-start-3]")
const stopBtnFourthRider3 = document.querySelector("[data-stop-fourth-rider-3]")

const chronometerFourthRider1 = new Chronometer(null, "00:00:00");

startBtnFourthRider.addEventListener("click", function () {
    chronometerFourthRider1.setSelectorUI("[data-ui-time-fourth-rider-1]");
    chronometerFourthRider1.setRecordsListSelector("[data-records-list-fourth-rider]");
    chronometerFourthRider1.start();
});

stopBtnFourthRider.addEventListener("click", () => {
    chronometerFourthRider1.record();
});

const chronometerFourthRider2 = new Chronometer(null, "00:00:00");

startBtnFourthRider2.addEventListener("click", function () {
    chronometerFourthRider2.setSelectorUI("[data-ui-time-fourth-rider-2]");
    chronometerFourthRider2.setRecordsListSelector("[data-records-list-fourth-rider]");
    chronometerFourthRider2.start();
});

stopBtnFourthRider2.addEventListener("click", () => {
    chronometerFourthRider2.record();
});

const chronometerFourthRider3 = new Chronometer(null, "00:00:00");

startBtnFourthRider3.addEventListener("click", function () {
    chronometerFourthRider3.setSelectorUI("[data-ui-time-fourth-rider-3]");
    chronometerFourthRider3.setRecordsListSelector("[data-records-list-fourth-rider]");
    chronometerFourthRider3.start();
});

stopBtnFourthRider3.addEventListener("click", () => {
    chronometerFourthRider3.record();
});