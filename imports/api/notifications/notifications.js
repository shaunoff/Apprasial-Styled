import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'

const Notifications = new Mongo.Collection('notifications');

const NotificationsSchema = new SimpleSchema({
  targetUser: {
    type: String
  },
  completedUser: {
    type: String
  },
  completedUserName: {
    type: String
  },
  added: {
    type: Date
  },
  stage: {
    type: Number
  }
});

Notifications.attachSchema(NotificationsSchema);

export default Notifications;
