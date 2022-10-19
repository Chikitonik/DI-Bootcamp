// Use HTML5 and Javascript for this exercise.
// Use everything we learned in class, and use all the resources linked in the course.
// This exercise is a bit tricky, search Google how to work with HTML5 and the navigator’s geolocation.
// Create a button

var button = document.getElementById("button");
var latitude, longitude;
button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    alert(`Latitude: ${latitude}\nLongitude: ${longitude}`);
  });
});
