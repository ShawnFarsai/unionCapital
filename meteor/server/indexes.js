Meteor.startup(function() {
  console.log("Beginning indexing");

  Transactions._ensureIndex({ "userId": 1, "transactionDate": -1});
  Transactions._ensureIndex({ "eventId": 1  });
  Transactions._ensureIndex({"transactionDate": -1});
  Transactions._ensureIndex({'approved': 1, 'eventId': 1});

  Meteor.users._ensureIndex({"profile.points": 1});

  Events._ensureIndex({"name": 1})
  Events._ensureIndex({"institution": 1});
  Events._ensureIndex({"category": 1});
  Events._ensureIndex({"eventDate": 1, 'adHoc': 1});

  PartnerOrgs._ensureIndex({'name': 1});
  Feedback._ensureIndex({'eventInstitution': 1 });

  console.log("Ending indexing");
});
