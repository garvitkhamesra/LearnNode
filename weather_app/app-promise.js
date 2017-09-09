const yarg = require('yargs');
const geocode = require('./geocode/geocode.js');
const axios = require('axios');

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
    var addressURI = encodeURIComponent(argv.address);    
}
else{
    var addressURI = encodeURIComponent("abode valley chennai");    
}

var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+addressURI;

axios.get(url)
.then((response)=>{
    
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error("Unable to find that address");
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherURL = `https://api.darksky.net/forecast/4961b0bf4df31a5db04c4ab4c79e339e/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherURL);
})
.then((response)=>{
    var temp = response.data.currently.temperature;
    var ApparentTemp = response.data.currently.apparentTemperature; 
    
    console.log('Temperature : ',temp);
    console.log('Apparent Temperature : ', ApparentTemp);
})
.catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log("Unable to connect to the server");
    }
    else{

    }
});