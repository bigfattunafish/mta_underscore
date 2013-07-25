// Refactor your code with underscore
// Prompt the user
// Please choose a startLine
// Please chooose a startStation
// Please choose an endLine
// Please choose an endStation
// Find the intersection
// Display the number of stops
// Track the total journeys taken
// Calculate total cost of journeys taken at $2.50 per ride.

var tripCounter = 0;
var tripCost = 2.50;
var wannaRide = true;

while (wannaRide === true) {

  function Train(name, stations) {
    this.name = name;
    this.stations = stations;
  }

  Train.prototype.distance = function(board, exit) {
    board = this.stations.indexOf(board);
    exit = this.stations.indexOf(exit);
    return Math.abs(board - exit);
  };

  var lStations = [ "8th ave", "6th", "Union Square", "3rd", "1st" ];
  var nStations = [ "Times Square", "34th", "28th", "23rd-bway", "Union Square", "8th st" ];
  var sixStations = [ "Grand Central", "33rd", "28th-park", "23rd", "Union Square", "Astor Place" ];
  var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

  var lTrain = new Train('The L Train', lStations);
  var nTrain = new Train('The N Train', nStations);
  var sixTrain = new Train('The Six Train', sixStations);
  var gTrain = new Train('The G Train', gStations);

  var trains = [lTrain, nTrain, sixTrain, gTrain];

  function displayLines() {
    var trainList = "";
    _.each(trains, function(train) {trainList += '\n' + train.name;});
    return trainList;
  }

  var msg1 = "Which train would you like you get on?" + displayLines();
  var startTrain = prompt(msg1);
  var startLine = _.find(trains, function(potato) {return startTrain === potato.name;});

  function displayStops() {
    var stopList = "";
    _.each(startLine.stations, function(cucumber) {stopList += '\n' + cucumber;});
    return stopList;
  }

  var msg2 = "Which stop are you at?" + displayStops();
  var startStop = prompt(msg2);

  var msg3 = "Which train would you like to get to?" + displayLines();
  var endTrain = prompt(msg3);
  var endLine = _.find(trains, function(potato) {return endTrain === potato.name;});

  var msg4 = "Which stop are you getting off?" + displayStops();
  var endStop = prompt(msg2);

  function calculateStops() {
    if (startTrain === endTrain) {
      tripCounter += 1;
      return startLine.distance(startStop, endStop);
    } else {
      intersection = _.intersection(startLine, endLine);
      var firstDistance = startLine.distance(startStop, intersection);
      var secondDistance = endLine.distance(endStop, intersection);
      tripCounter += 1;
      return firstDistance + secondDistance;
    }
  }

  msg5 = "You have " + calculateStops() + " stops for this trip.\n" +
    "You've taken " + tripCounter + " trip(s)";
  alert(msg5);

  var answer = prompt("Wanna ride MTA again? yes or no.");

  if (answer === "no"){
    totalCost = tripCounter * tripCost;
    alert("Good bye! Your total cost was $" + totalCost + ".");
    wannaRide = false;
  }
}