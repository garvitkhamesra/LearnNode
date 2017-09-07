const yarg = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yarg
    .options({
        a:{
            demand : true,
            alias : 'address',
            description : "Address to fetch Weather for",
            string : true
        }
}).argv;

geocode.geocodeAddress(argv.address,(errorMsg,result) => {
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


//https://api.darksky.net/forecast/4961b0bf4df31a5db04c4ab4c79e339e/[latitude],[longitude]
