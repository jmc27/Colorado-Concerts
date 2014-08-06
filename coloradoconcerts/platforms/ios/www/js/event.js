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
