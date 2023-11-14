//functon with no parameters
var startMyDay = function () {
  return "Time for a run and coffee !";
};
console.log(startMyDay());

//one parameter
var favouriteCookie = function (cookie) {
  return `My favourite cookie is ${cookie}.`;
};
console.log(favouriteCookie("chockChip"));
//remember the argument

//two parameters
var introduce = function (name, occupation) {
  return `Hello my name is ${name} and I am a ${occupation}. Glad to meet you !`;
};
console.log(introduce("Anton", "boss"));
console.log(introduce("Janits", "nurse"));

//prompt and conditional
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today ?")
  );
  if (numGlasses >= 8) {
    console.log("AMAZING ! You must feel GOOD !");
  } else if (numGlasses < 8) {
    console.log("Not bad,not bad ? Lets try for a bit more tomorrow !");
  }
};

hydrationFeedback();
