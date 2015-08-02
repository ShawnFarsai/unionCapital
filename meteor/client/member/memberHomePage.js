Template.memberHomePage.rendered = function() {

  //Loads the FB plugin
  _.defer(function() {
    FB.XFBML.parse();
  });
};

Template.memberHomePage.helpers({

  'currentMemberName': function() {
    if(Meteor.user() && Meteor.user().profile) {
      return Meteor.user().profile.firstName || "";
    } else {
      return "";
    }
  },

  totalPoints: function() {
    if (Meteor.user())
      return Meteor.user().profile.points || 0;
    else
      return 'Loading...';
  }
});
