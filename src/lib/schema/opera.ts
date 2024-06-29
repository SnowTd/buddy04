import { models, model, Schema } from 'mongoose';
type OperaType = {
  SID: String;
  NAME: String;
  NICK: String;
  CONTACT: String;
  MAIL: String;
  Hints: String;
};

const OperaSchema = new Schema({
  SID: String,
  NAME: String,
  NICK: String,
  CONTACT: String,
  MAIL: String,
  Hints: String
});

export const operaFind = models.opera || model<OperaType>('opera', OperaSchema);
