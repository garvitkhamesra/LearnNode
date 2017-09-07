const request = require('request');
var geocodeAddress =( (address,callback) => {
    var addressURI = encodeURIComponent(address);
    
    request({
        url:'http://maps.googleapis.com/maps/api/geocode/json?address='+addressURI,
        json: true
    },(error,response,body)=>{
        if(error){
            callback("Unable to connect to google servers");
        }
        else if(body.status === "ZERO_RESULTS"){
            callback("Unable to find");
        }
        else if(body.status){
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
        }
    
    });
});

module.exports = {
    geocodeAddress
};

