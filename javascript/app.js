let app = {

    init: () => {
        console.log('init');

        $(app.comparingDates);
    },

    setTodayDate: () => {
        const todayDate = new Date();
        console.log(todayDate);

        const mounth = todayDate.getMonth() + 1;
        const day = todayDate.getDate();
        const year = todayDate.getFullYear();
        console.log(day + '/' + mounth + '/' + year);

        return {
            todayDate,
            mounth,
            day,
            year
        };
    },

    setBirthDate: () => {
        var std = app.setTodayDate();

        const birthMounth = '01';
        const birthDay = '21';
        let birthYear = '';
            
        // Déterminer année d'anniversaire 
        if(std.mounth == birthMounth && std.day < birthDay){
            birthYear = std.todayDate.getFullYear();
        } else {
            birthYear = std.todayDate.getFullYear() + 1;
        }
            
        const birthdayDate = new Date(
            birthYear,
            birthMounth,
            birthDay
        );

        return {
            birthdayDate,
            birthMounth,
            birthDay,
            birthYear
        };
    },

    comparingDates: () => {
        var std = app.setTodayDate();
        var sbd = app.setBirthDate();

        console.log(sbd.birthdayDate);

        let todayTime = std.todayDate.getTime();
        let birthdayTime = sbd.birthdayDate.getTime();

        console.log(todayTime);
        console.log(birthdayTime);


        let diff = new Number((birthdayTime - todayTime - 2592000000)/86400000).toFixed(0);

        console.log(diff);

        if (std.mounth == sbd.birthMounth && std.day == sbd.birthDay) {
            $('.container').append('<p>Today is Coralie\'s birthday ! I hope you got her a nice present ?!');
            $('body').addClass('sparkley');
        } else {
            $('.container').append('<p>Today is not Coralie\'s birthday ! Go get her a nice present !<br> You stil have ' + diff+ ' days left' );
        }
    }

};

document.addEventListener('DOMContentLoaded', app.init);