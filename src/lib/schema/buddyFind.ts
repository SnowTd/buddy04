import { models, model, Schema } from 'mongoose';
type BuddyType = {
  SID: String;
  NAME: String;
  NICK: String;
  CONTACT: String;
  MAIL: String;
  Hints: String;
};

const BuddySchema = new Schema({
  SID: String,
  NAME: String,
  NICK: String,
  CONTACT: String,
  MAIL: String,
  Hints: String
});

export const buddyFind = models.buddy || model<BuddyType>('buddy', BuddySchema);
