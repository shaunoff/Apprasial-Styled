import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import Notifications from "./notifications"
import Appraisals from "../appraisals/appraisals.js"
import stage3Complete from "../email/stage3Complete.js"
import stage6Complete from "../email/stage6Complete.js"
import stage8Manager from "../email/stage8Manager.js"
import president from "../email/president.js"
import complete from "../email/complete.js"

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
   if(Roles.userIsInRole(this.userId, 'admin')){
     Roles.addUsersToRoles( userId, role );
     return "success"
    }
   else {
     throw new Meteor.Error('Must be an admin!');
   }

  },
  removeRole(role,userId) {
    if(Roles.userIsInRole(this.userId, 'admin')){
      Roles.removeUsersFromRoles(userId, role);
      return "success"
    }
   else {
     throw new Meteor.Error('Must be an admin!');
   }
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

    let appraisor = null;
    if (user.currentAppraisal.lead){
      appraisor = Meteor.users.findOne({_id: user.currentAppraisal.lead})
    }
    else {
      appraisor = Meteor.users.findOne({_id: user.currentAppraisal.manager})
    }

    stage3Complete(user.profile, appraisor.profile)
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
    const targetUser = Meteor.users.findOne({_id: targetId})
    stage6Complete(user.profile, targetUser.profile)
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

    if (stageJump == 9){
      let manager = Meteor.users.findOne({_id: user.currentAppraisal.manager})
      stage8Manager(manager.profile, user.profile)
    }
    if (stageJump == 10){
        president(user.profile)
    }
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
    const targetUser = Meteor.users.findOne({_id: id})
    president(targetUser.profile)
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
    const targetUser = Meteor.users.findOne({_id: id})
    complete(targetUser.profile)
    Notifications.insert({
      targetUser: id,
      completedUser: user._id,
      completedUserName: `${user.profile.firstName} ${user.profile.lastName}`,
      added: new Date(),
      stage: 10
    })

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
