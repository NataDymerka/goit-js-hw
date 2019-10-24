class CountdownTimer {
    constructor(obj) {
        const selector = obj.selector;
        const targetDate = obj.targetDate;
        this.getSelector = () => selector;
        this.getTargetDate = () => targetDate;
    }
    start() {
        this.timerID = setInterval(() => {
            const currentTime = Date.now();
            const time = this.getTargetDate().getTime() - currentTime;
            if (time < 0) {
                clearInterval(this.timerID);
                document.querySelector(this.getSelector()).innerHTML = 'EXPIRED';
                return;
            }
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);

            document.querySelector(this.getSelector() + " [data-value='days']").innerHTML = days;
            document.querySelector(this.getSelector() + " [data-value='hours']").innerHTML = hours;
            document.querySelector(this.getSelector() + " [data-value='mins']").innerHTML = mins;
            document.querySelector(this.getSelector() + " [data-value='secs']").innerHTML = secs;
        }, 1000);
    }
};
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 11, 2019'),
})
timer.start();