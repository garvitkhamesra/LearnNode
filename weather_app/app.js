const yarg = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const funcCall = (arg)=>{
    geocode.geocodeAddress(arg,(errorMsg,result) => {
        if(errorMsg){
            console.log(errorMsg);
        }
        else if(result){
            console.log("Address: ",result.address);
            weather.getWeather(result.latitude,result.longitude,(errorMsg,result)=>{
                if(errorMsg){
                    console.log(errorMsg);        
                }
                else if(result){
                    console.log(`Temperature : ${result.temperature}`);  
                    console.log(`Apparent Temperature : ${result.apparentTemperature}`);                
                }
            });
            
        }
    });
};

const argv = yarg
    .options({
        a:{
            demand : false,
            alias : 'address',
            description : "Address to fetch Weather for",
            string : true
        }
}).argv;

if(argv.address){
    funcCall(argv.address);
}
else{
    funcCall("abode valley chennai");
}



