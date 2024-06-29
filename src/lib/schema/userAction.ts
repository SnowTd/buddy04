import { models, model, Schema } from 'mongoose';
type ActionType = {
  SID03: String;
  ACTION: boolean;
  DATE: Date;
};

const ActionSchema = new Schema({
  SID03: String,
  ACTION: Boolean,
  DATE: Date
});

export const actionFind =
  models.opera || model<ActionType>('action', ActionSchema);
