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
    else if (exactDay <=2019 && exactDay > 2017){ 
        out.innerHTML= "You are an infant(a tinny tiny baby), dont disturb mama too much though. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days +"days <br> ";
    }
    if(years == 1){
        out.innerHTML= "You are an infant and you just clocked 1 :)  <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 2017 && exactDay > 2015){
        out.innerHTML= "You are a toddler. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 2015 && exactDay > 2010) {
        out.innerHTML= "You are still a child. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + " days <br> ";
    }
    else if(exactDay <= 2010 && exactDay > 2005){
        out.innerHTML= "You are in early adolescense, have fun. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days +"days <br> <img src=\"https://####\">";
    }
    else if(exactDay <= 2005 && exactDay > 2000){
        out.innerHTML= "You are in later adolescense. Enjoy childhood whilst it lasts. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 2000 && exactDay > 1998 ){
        out.innerHTML= "You are in early adulthood, please dont get it wrong now! <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 1998 && exactDay > 1988){
        out.innerHTML= "You are an adult. I'm curious are you married :) ? <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    if (years == 18 || years == 21){
        out.innerHTML= "Congratulations, you're legal. Yay!! <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days +"days <br> ";
    }
    else if(exactDay <= 1988 && exactDay > 1974){
        out.innerHTML = "You're getting closer to real life, remember life begins at 40 <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days +"days <br> ";
    }
    else if (exactDay <= 1974 && exactDay >1968){
        out.innerHTML= "You're middle aged. Get ready to retire. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if (exactDay <= 1968 && exactDay > 1897){
        out.innerHTML= "You are getting old. Please do good. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
    else if (exactDay <= 1897 && exactDay > 1867){
        out.innerHTML = "You're a little above old are you sure you're really alive? <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> you have lived for exactly " + days + "days <br> ";
    }
    else if(exactDay <= 1867){
        out.innerHTML= "Woah, you're surely immortal. Please get to your grave before its too late. <br> Birth year: " + exactDay + "<br> Age: " + years + "years old. <br> You have lived for exactly " + days + "days <br> ";
    }
}