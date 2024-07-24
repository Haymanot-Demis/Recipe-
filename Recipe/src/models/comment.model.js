const mongooese = require('mongoose');

const commentSchema = new mongooese.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongooese.Schema.Types.ObjectId,
      ref: 'User',
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongooese.model('Comment', commentSchema);

module.exports = Comment;
