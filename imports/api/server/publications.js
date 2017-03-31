import { Meteor } from 'meteor/meteor';
import Appraisals from '../appraisals/appraisals.js'

FindFromPublication.publish('currentUserAppraisals', function() {
  return Appraisals.find({});
});
FindFromPublication.publish('allUsers', function(skipAmount, sortValue, direction,searchQuery) {

  const sortParam = `profile.${sortValue}`
  let query = {}
  const regex = new RegExp(searchQuery, 'i');
  if (searchQuery != null){
    query = {'profile.lastName': regex}
  }
  let adminUser =  Roles.userIsInRole( this.userId, 'admin')
  if (adminUser){
  return Meteor.users.find(query,{
    fields:{
      'services.google.picture': 1,
      'services.google.given_name': 1,
      'services.google.family_name': 1,
      'competencies': 1,
      'questions': 1,
      'summary': 1,
      'stage': 1,
      'profile': 1,
      'roles': 1
    },
    limit: 10,
    skip: skipAmount


    });
  }
});
FindFromPublication.publish('currentUser', function() {
  return Meteor.users.find({_id: this.userId},{
    fields:{
      'services.google.picture': 1,
      'services.google.given_name': 1,
      'services.google.family_name': 1,
      'competencies': 1,
      'questions': 1,
      'summary': 1,
      'stage': 1,
      'profile': 1,
      'name': 1,
      'roles': 1
    }


    });
});
FindFromPublication.publish('targetUser', function(targetId) {
  return Meteor.users.find({_id: targetId},{
    fields:{
      'services.google.picture': 1,
      'services.google.given_name': 1,
      'services.google.family_name': 1,
      'currentAppraisal': 1,
      'stage': 1,
      'profile': 1,
      'name': 1,
      'roles': 1
    }


    });
});
FindFromPublication.publish('managers', function() {
  return Meteor.users.find({roles: "Manager"},{
    fields:{
      'profile': 1,
      'roles': 1
    },
    sort: {
      'profile.firstName': 1
    }


    });
});
FindFromPublication.publish('leads', function() {
  return Meteor.users.find({roles: "Lead"},{
    fields:{
      'profile': 1,
      'roles': 1
    },
    sort: {
      'profile.firstName': 1
    }


    });
});
FindFromPublication.publish('managerTeam', function(paramId) {
  return Meteor.users.find({ $or: [ {'profile.manager': paramId}, {'profile.lead': paramId} ]},{
    fields:{
      'profile': 1,
      'roles': 1,
      'stage': 1
    }


    });
});
