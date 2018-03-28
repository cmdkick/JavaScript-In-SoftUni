function timer() {
    let startButton = $('#start-timer');
    let stopButton = $('#stop-timer');

    let seconds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');


    startButton.click(function () {
        clearInterval(timer);
        timer = setInterval(step, 1000);
    })

    stopButton.click(function(){
        clearInterval(timer);
    })


    function step() {
        seconds.text(parseInt(seconds.text()) + 1);

        if (seconds.text() == 60) {
            seconds.text(00);
            minutes.text(parseInt(minutes.text()) + 1);


            if (minutes.text() == 60) {
                minutes.text(00);
                hours.text(parseInt(hours.text()) + 1);
            }

            if (hours.text() == 24) {
                hours.text(00);
                minutes.text(00);
                seconds.text(00);
            }
        }
    }
}
