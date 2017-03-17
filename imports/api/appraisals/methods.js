import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import Appraisals from "./appraisals"

Meteor.methods({
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
  insertSummary(data, targetId, currentId) {
    console.log(targetId, currentId)
    Meteor.users.upsert(id,
    {$set:{
        'currentAppraisal.summary.employee': data,
        stage: 4

      }

    });
  },
  insertManSummary(data,id) {
    console.log(data)
    Meteor.users.upsert(id,
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
