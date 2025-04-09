let time = document.getElementById('clock');

// setInterval is a function that keeps calling the function again and again after every given time delay.
// 1st is function() 
// 2nd is time delay

setInterval(function(){
    let date = new Date();
    time.innerText = date.toLocaleTimeString();
}, 1000);