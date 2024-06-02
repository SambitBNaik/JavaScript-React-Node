var fakecalltoServer= function(){
    setTimeout(function(){
        console.log('Returning from server',new Date().toLocaleTimeString());
    },4000);
}

// fakecalltoServer();

setInterval(function(){
    let insideSetInterval= new Date().toLocaleTimeString();
    console.log('InsideInterval', insideSetInterval);
    fakecalltoServer();
},2000);

//Output
// InsideInterval 3:48:34 pm
// InsideInterval 3:48:36 pm
// InsideInterval 3:48:38 pm
// Returning from server 3:48:38 pm
// InsideInterval 3:48:40 pm
// Returning from server 3:48:40 pm
// InsideInterval 3:48:42 pm
// Returning from server 3:48:42 pm
// InsideInterval 3:48:44 pm
// Returning from server 3:48:44 pm
// Returning from server 3:48:46 pm
// InsideInterval 3:48:46 pm
// Returning from server 3:48:48 pm
// InsideInterval 3:48:48 pm
// Returning from server 3:48:50 pm
// InsideInterval 3:48:50 pm
// Returning from server 3:48:52 pm
// InsideInterval 3:48:52 pm
// Returning from server 3:48:54 pm
// InsideInterval 3:48:54 pm
// Returning from server 3:48:56 pm
// InsideInterval 3:48:56 pm
// InsideInterval 3:48:58 pm
// Returning from server 3:48:58 pm
// Returning from server 3:49:00 pm
// InsideInterval 3:49:00 pm