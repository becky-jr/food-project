function timer(id, deadline) {
    // TODO TIMER



    // let leftDay = document.querySelector('#days');
    // let leftSeconds = document.querySelector('#seconds');
    // let leftMinutes = document.querySelector('#minutes');

    function getZero(num){
        if (num == 0){
            return num;
        } else if (num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }
    // const date = '2022-04-30';

    function getRemainingDate(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };

    }



    function setClock(selector, endTime){
        const timer = document.querySelector(selector),
            leftDay = document.querySelector('#days'),
            leftHours = document.querySelector('#hours'),
            leftMin = document.querySelector('#minutes'),
            leftSeconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock(){
            const t = getRemainingDate(endTime);

            leftDay.innerHTML = getZero(t.days);
            leftHours.innerHTML = getZero(t.hours);
            leftMin.innerHTML = getZero(t.minutes);
            leftSeconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0){
                clearInterval(timeInterval);
                leftDay.innerHTML = 0;
                leftHours.innerHTML = 0;
                leftMin.innerHTML = 0;
                leftSeconds.innerHTML = 0;
            }
        }
    }
    setClock(id, deadline);



    // let id = setTimeout( function repeat(){
    //     getRemainingDate();
    //     id = setTimeout(repeat, 1000);
    // }, 1000);
}

export default timer;