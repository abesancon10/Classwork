$("button").on("click", function() {
    let zillow = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz17zjcmesyrv_61q4u&address=" +
    address + citystatezip;
    $.ajax({
      url: zillow,
      method: "GET"
    }).then(function(response) {
      
      console.log(response)
    });
});
//need to figure out the XML part of the whole thing
$("button").on("click", function() {
    let map = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAvvwmXICbkoU9Y3Bq5BLyeMGaaqnNnYAI " +
    address + citystatezip;
    $.ajax({
      url: map,
      method: "GET"
    }).then(function(response) {
      
      console.log(response)
    });
});
$("button").on("click", function() {
    let embed = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAvvwmXICbkoU9Y3Bq5BLyeMGaaqnNnYAI " +
    address + citystatezip;
    $.ajax({
      url: embed,
      method: "GET"
    }).then(function(response) {
      
      console.log(response)
    });
});
// $("button").on("click", function() {
//     let locate = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAvvwmXICbkoU9Y3Bq5BLyeMGaaqnNnYAI " +
//     address + citystatezip;
//     $.ajax({
//       url: embed,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response)
//     });
// });
