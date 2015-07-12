////////////////////////////////////////////////////////////////////////////////
// Simple Meteor counter example
////////////////////////////////////////////////////////////////////////////////

ElectronMeteor = {
  collections: {
    Counter: new Mongo.Collection('counter')
  }
};

if (Meteor.isServer) {
  Meteor.startup(function() {
    // This console.log has to be here to it to work
    // DO NOT REMOVE IT, YOUR DIST APP WILL BREAK
    console.log('Meteor app started.');

    var counterCount = ElectronMeteor.collections.Counter.find().count();

    if (!counterCount) {
      ElectronMeteor.collections.Counter.insert({
        count: 0
      });
    }
  });
}

if (Meteor.isClient) {

  Template.hello.helpers({
    counter: function() {
      var counter = ElectronMeteor.collections.Counter.findOne();
      return counter && counter.count || 0;
    }
  });

  Template.hello.events({
    'click button': function() {
      var counter = ElectronMeteor.collections.Counter.findOne();
      ElectronMeteor.collections.Counter.update({
        _id: counter && counter._id
      }, {
        $inc: {
          count: 1
        }
      });
    }
  });
}
