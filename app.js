'use strict'

var CREW = ['Neil Armstrong', 'Michael Collins', 'Buzz Aldrin']
var MISSION = {'type':'Manned Lunar Landing', 'status':true}
var QUOTE = "That's one small step for man, one giant leap for mankind."
var ROCKET = {'name': 'Saturn V'};

var RocketName = function() {
  return ROCKET.name;
}
 
var CrewSize = function() {
  return CREW.length;
}

var MissionType = function() {
  return MISSION.type;
}

var MissionStatus = function() {
  return MISSION.status;
}

var GetQuote = function() {
  return QUOTE;
}

module.exports = {
  RocketName: RocketName,
  CrewSize: CrewSize,
  MissionType: MissionType,
  MissionStatus: MissionStatus,
  GetQuote: GetQuote
};
