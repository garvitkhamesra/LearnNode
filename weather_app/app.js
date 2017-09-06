const request = require('request');

request({
    url:'http://maps.googleapis.com/maps/api/geocode/json?address=%20abode%20valley%20chennai',
    json: true
},(error,response,body)=>{
    console.log(body);
});