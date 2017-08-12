var assert = require('assert');
var expect = require('chai').expect;

var Task = require('../api/models/todoListModel');

describe('task', function() {
    it('should be invalid if name is empty', function(done) {
        var t = new Task();

        t.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });

    it('should be able to have a name set on init', function(done) {
        var t = new Task({name: "New Test Task"});
        t.validate(function(err) {
            expect(t.name).to.exist;
            done();
        });
    });

    it('should have a created date', function(done) {
        var t = new Task({name: "New Test Task"});
        expect(t.created_date).to.exist;
        done();
    });
 
    it('should have a type', function (done) {
        var t = new Task({name: "New Test Task"});
        expect(t.type).to.exist;
        done();
    });
});
