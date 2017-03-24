import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import Notifications from "./notifications"
import Appraisals from "../appraisals/appraisals.js"

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

  assignManager(manager,userId){
    if (manager === null){
      Meteor.users.update({_id: userId},
      {$set:{
          'profile.manager':  null,
          'currentAppraisal.manager': null,
          'currentAppraisal.managerFirstName':  null,
          'currentAppraisal.managerlastName':  null,
        }

      });
    }
    else {
      Meteor.users.update({_id: userId},
      {$set:{
          'profile.manager': manager._id || null,
          'currentAppraisal.manager': manager._id || null,
          'currentAppraisal.managerFirstName': manager.profile.firstName ?  manager.profile.firstName : null,
          'currentAppraisal.managerLastName': manager.profile.lastName ?  manager.profile.lastName : null,
        }

      });
    }


  },
  assignLead(lead,userId){
    if (lead === null) {
      Meteor.users.update({_id: userId},
      {$set:{
        'profile.lead': null,
        'currentAppraisal.lead': null,
        'currentAppraisal.leadFirstName':null,

        }

      });
    }
    else {
      Meteor.users.update({_id: userId},
      {$set:{
        'profile.lead': lead._id || null,
        'currentAppraisal.lead': lead._id || null,
        'currentAppraisal.leadFirstName': lead.profile.firstName || null,
        'currentAppraisal.leadLastName': lead.profile.lastName || null,

        }

      });
    }


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

    Meteor.users.upsert(id,
    {$set:{

         stage: 8


      }

    });
  },
  insertTargets(data,id) {
    const user= Meteor.user()
    const stageJump = user.currentAppraisal.lead === null ? 10 : 9
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
         stage: stageJump


      }

    });
  },
  managerComment(data,id) {
    const user= Meteor.user()
    Notifications.insert({
      targetUser: id,
      completedUser: user._id,
      completedUserName: `${user.profile.firstName} ${user.profile.lastName}`,
      added: new Date(),
      stage: 9
    })
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.comments.manager': data.managerComment,
         stage: 10


      }

    });
  },
  presidentComment(data,id) {
    const user= Meteor.user()
    Notifications.insert({
      targetUser: id,
      completedUser: user._id,
      completedUserName: `${user.profile.firstName} ${user.profile.lastName}`,
      added: new Date(),
      stage: 10
    })
    const targetUser = Meteor.users.findOne({_id: id})
    const appraisal =targetUser.currentAppraisal

    appraisal.completed = new Date()
    appraisal.user = id
    Appraisals.insert(appraisal)
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.comments.president': data.presidentComment,
         stage: 11,



      }

    });
  },
});
