import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import Notifications from "./notifications"

Meteor.methods({
  addNotification() {
   Notifications.insert({
     targetUser: "test",
     completedUser: "test",
     added: new Date(),
     stage: 3
   })

    return "some return value";
  },
  addRole(role,userId) {
   Roles.addUsersToRoles( userId, role );
  },
  removeRole(role,userId) {
   Roles.removeUsersFromRoles(userId, role);
  },
  assignManager(managerId,userId){
    Meteor.users.update({_id: userId},
    {$set:{
        'profile.manager': managerId,
        'currentAppraisal.manager': managerId,

      }

    });

  },
  assignLead(leadId,userId){
    Meteor.users.update({_id: userId},
    {$set:{
        'profile.lead': leadId,
        'currentAppraisal.lead': leadId,

      }

    });

  },
  insertCompetencies(data, id) {
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.competencies.employee': data,
         stage: 2

      }

    });
  },
  insertManCompetencies(data, id) {
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.competencies.manager': data,
         stage: 5


      }

    });
  },
  insertAchievements(data, id) {
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.achievements.employee': data,
        stage: 3

      }

    });
  },
  insertManAchievements(data, id) {
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.achievements.manager': data,
         stage: 6


      }

    });
  },
  insertQuestions(data, id) {
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.questions.employee': data,
        stage: 3

      }

    });
  },
  insertManQuestions(data,id) {
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.questions.manager': data,
         stage: 6


      }

    });
  },
  insertSummary(data, targetId) {
    const user= Meteor.user()
    console.log(user)
    Notifications.insert({
      targetUser: targetId,
      completedUser: user._id,
      completedUserName: `${user.profile.firstName} ${user.profile.lastName}`,
      added: new Date(),
      stage: 3
    })
    Meteor.users.upsert(targetId,
    {$set:{
        'currentAppraisal.summary.employee': data,
        stage: 4

      }

    });
  },
  insertManSummary(data,targetId) {
    const user= Meteor.user()
    console.log(user)
    Notifications.insert({
      targetUser: targetId,
      completedUser: user._id,
      completedUserName: `${user.profile.firstName} ${user.profile.lastName}`,
      added: new Date(),
      stage: 6
    })
    Meteor.users.upsert(targetId,
    {$set:{
        'currentAppraisal.summary.manager': data,
         stage: 7


      }

    });
  },
  addReview(id) {
    console.log("jgfjhgjh")
    Meteor.users.upsert(id,
    {$set:{

         stage: 8


      }

    });
  },
  insertTargets(data,id) {
    const user= Meteor.user()
    Notifications.insert({
      targetUser: id,
      completedUser: user._id,
      completedUserName: `${user.profile.firstName} ${user.profile.lastName}`,
      added: new Date(),
      stage: 8
    })
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.targets': data,
         stage: 9


      }

    });
  },
  managerComment(data,id) {

    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.comments.manager': data.manager,
         stage: 10


      }

    });
  },
  presidentComment(data,id) {

    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.comments.president': data.president,
         stage: 10


      }

    });
  },
});
