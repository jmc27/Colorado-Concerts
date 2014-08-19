var Event = Parse.Object.extend("Event");
function makeEvent(title, location, date, category) {

     var event = new Event();
     event.set("title", title);
      event.set("address", location);
      event.set("category", category);
      event.set("date", new Date(date));
      event.save(null, {
        success: function(event) {
          $(".success").html("Event successfully saved");
          location.reload();
        },
        error: function(event, error) {
          $(".error").html("Error saving event.");
        }
    }); 
}

var query = new Parse.Query(Event);
var events = "";
var tableheader = "<table id = 'eventtable' style = 'width: 100%''><tr><td>Title</td><td>Date</td><td>Location</td><td>Category</td></tr>";
var tableend = "</table>";

query.find({
  success: function(results) {
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      events = events.concat("<tr><td>", object.get('title'), "</td><td>", object.get('address'), "</td><td>", object.get('date'), "</td><td>", object.get('category'), "</td></tr><br>");
    }
    document.getElementById("eventlist").innerHTML = tableheader.concat(events, tableend);
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
