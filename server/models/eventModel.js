const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  _id: { type: Number},
  name: { type: String, required: true },
  create_time: { type: Date, default: Date.now },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, default: "" },
  participants: [{ type: String, default: [] }],
  author: { type: String, required: true },
  event_image: { type: String, default: "" },
  tags: [{ type: String, default: [] }],
  cur_joined: { type: Number, default: 0 },
  participant_limit: { type: Number, default: 0 }
});

// Apply the auto-increment plugin to the schema, using _id as the increment field.
EventSchema.plugin(AutoIncrement, { inc_field: "_id" });

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;