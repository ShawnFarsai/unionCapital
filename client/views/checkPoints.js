Template.checkPoints.helpers({
  approvedEvents: function() {
    return Meteor.users.transactionsFor(Meteor.userId(), false);
  },
  pendingEvents: function() {
    return Meteor.users.transactionsFor(Meteor.userId(), true);
  },
  eventName: function(){
    return getEvent(this).name;
  },
  eventPoints: function(){
    var event = getEvent(this);
    if(event.isPointsPerHour) {
      return Math.round(event.pointsPerHour * totalHours(this.hoursSpent,this.minutesSpent));
    } else {
      return event.points;
    }
  },
  eventStart: function(){
    return getEvent(this).startDate;
  },
  eventEnd: function(){
    return getEvent(this).endDate;
  },
  totalPoints: function() {
    return Meteor.users.totalPointsFor(Meteor.userId());
  }
});
