// legacy
var request = new XMLHttpRequest();
request.open('GET', 'url/endpoint', true);

request.onload = function(){
    if (request.status >= 200 && request.status < 400){
        // SUCCESS
        var data = JSON.parse(request.responseText);
    } else {
        // error
        console.log("error");
    }
};

request.onerror = function() {
    // There was a connection error of some sort

};
request.send();