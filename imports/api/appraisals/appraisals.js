import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Appraisals = new Mongo.Collection('appraisals');
export default Appraisals;

const AppraisalSchema = new SimpleSchema({
  name: String,
  user: String,
  commRating: String,
  commComment: String,
  coopRating: String,
  coopComment: String

});



Appraisals.attachSchema(AppraisalSchema);
