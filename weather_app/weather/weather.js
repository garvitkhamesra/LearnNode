const request = require('request');

var getWeather = ((lat,long,callback) =>{
    request({
        url: `https://api.darksky.net/forecast/4961b0bf4df31a5db04c4ab4c79e339e/${lat},${long}`,
        json:true
    },(error,response,body)=>{
        if(!error && response.statusCode===200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }
        else{
            callback("Unable to fetch data");        
        }
    });
});

module.exports = {
    getWeather
};