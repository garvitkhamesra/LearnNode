const request = require('request');
const yarg = require('yargs');
const argv = yarg
    .options({
        a:{
            demand : true,
            alias : 'address',
            description : "Address to fetch Weather for",
            string : true
        }
}).argv;

var addressURI = encodeURIComponent(argv.a);

request({
    url:'http://maps.googleapis.com/maps/api/geocode/json?address='+addressURI,
    json: true
},(error,response,body)=>{
    console.log(`address : ${body.results[0].formatted_address} `);
    console.log(`latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`longitude : ${body.results[0].geometry.location.lng}`);    
});