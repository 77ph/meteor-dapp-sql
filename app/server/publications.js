
Meteor.publish('license', function() {
        return License.find();
});

