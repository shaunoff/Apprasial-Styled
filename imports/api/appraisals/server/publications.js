import { Meteor } from 'meteor/meteor';
import Appraisals from '../appraisals';

Meteor.publish('allAppraisals', function() {
  return Appraisals.find({}, {
    limit: 10,
    sort: { lastUpdated: 1 }
  });
});
