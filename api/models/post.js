const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require("luxon")

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: [
      'Not Published',
      'Published'
    ],
    default: 'Not Published'
  }
} , {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

PostSchema.virtual('url').get(function () {
  return '/writing/post/' + this._id;
})

PostSchema.virtual('date_formatted').get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
})

module.exports = mongoose.model('Post', PostSchema);