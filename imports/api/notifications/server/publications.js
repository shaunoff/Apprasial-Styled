import { Meteor } from 'meteor/meteor';
import Notifications from '../notifications';

Meteor.publish('allNotifications', function() {
  return Notifications.find({}, {
    limit: 10,
    sort: { lastUpdated: 1 }
  });
});
