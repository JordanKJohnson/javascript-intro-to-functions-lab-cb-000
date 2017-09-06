function sayHiToGrandma(string){
  if (string == "I love you, Grandma."){
    return "I love you, too.";
  }

  var uppercaseString = string.toUpperCase();
  if (string == uppercaseString){
    return "YES INDEED!";
  }

  var lowercaseString = string.toLowerCase();
  if (string == lowercaseString){
    return "I can\'t hear you!";
  }
}
