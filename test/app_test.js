'use strict';

var assert = require('assert');
var expect = require('chai').expect;
var app = require('../app.js');


describe('ROCKET -- The Rocket\'s name', function() {
	it('should transport the crew to the moon', function() {
		expect(app.RocketName()).to.be.a('string');
		expect(app.RocketName()).to.equal('Saturn V');
	});
});

describe('CREW -- The Crew size', function(){
   it('should be no higher than 4', function() {
    expect(app.CrewSize()).to.be.below(4);
   });
});

describe('MISSION -- The Mission', function(){
   it('should be of type \"Lunar Landing\"', function() {
    expect(app.MissionType()).to.include('Lunar Landing');
   });
    it('should have a positive status', function() {
    expect(app.MissionStatus()).to.be.true;
   });
});

