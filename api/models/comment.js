const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require("Luxon")

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

CommentSchema.virtual('date_formatted').get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
})

module.exports = mongoose.model('Comment', CommentSchema);