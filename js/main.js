function calcDays(){
    var age =document.getElementById('number').value;
    var out = document.getElementById('output');
	out.classList.add("output");
    var exactDay = document.getElementById('day');
    age = new Date(age);
    var today = new Date();
    exactDay = age.getFullYear(); 
    var oneDay = 24*60*60*1000; 
    var days = Math.round(Math.abs((age.getTime() - today.getTime())/(oneDay)));
    var years = Math.floor(days / 365.25); 
	
    if (age > today){
        out.innerHTML= "Hello time traveller <br> we do hope you come in peace? ";
    }
    else if (exactDay <=2018 && exactDay > 2016){ 
        out.innerHTML= "You are an infant(a tinny tiny baby), dont disturb mama too much though. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days +"days <br> ";
    }
    if(years == 1){
        out.innerHTML= "You are an infant and you just clocked 1 :)  <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 2016 && exactDay > 2014){
        out.innerHTML= "You are a toddler. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 2014 && exactDay > 2009) {
        out.innerHTML= "You are still a child. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + " days <br> ";
    }
    else if(exactDay <= 2009 && exactDay > 2004){
        out.innerHTML= "You are in early adolescense, have fun. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days +"days <br> <img src=\"https://####\">";
    }
    else if(exactDay <= 2004 && exactDay > 1999){
        out.innerHTML= "You are in later adolescense. Enjoy childhood whilst it lasts. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 1999 && exactDay > 1997 ){
        out.innerHTML= "You are in early adulthood, please dont get it wrong now! <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 1997 && exactDay > 1987){
        out.innerHTML= "You are an adult. I'm curious are you married :) ? <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    if (years == 18 || years == 21){
        out.innerHTML= "Congratulations, you're legal. Yay!! <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days +"days <br> ";
    }
    else if(exactDay <= 1987 && exactDay > 1973){
        out.innerHTML = "You're getting closer to real life, remember life begins at 40 <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days +"days <br> ";
    }
    else if (exactDay <= 1973 && exactDay >1967){
        out.innerHTML= "You're middle aged. Get ready to retire. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if (exactDay <= 1967 && exactDay > 1896){
        out.innerHTML= "You are getting old. Please do good. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if (exactDay <= 1896 && exactDay > 1866){
        out.innerHTML = "You're a little above old are you sure you're really alive? <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> you have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 1866){
        out.innerHTML= "Woah, you're surely immortal. Please get to your grave before its too late. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
}