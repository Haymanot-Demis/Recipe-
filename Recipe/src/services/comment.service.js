const Comment = require('../models/comment.model');

const postComment = async (commentBody) => {
  const comment = await Comment.create(commentBody);
  return comment;
};

const getComments = async () => {
  const comments = await Comment.find({});
  return comments;
};

const getComment = async (commentId) => {
  const comment = await Comment.findById(commentId);
  return comment;
};

const updateComment = async (filter, commentBody) => {
  const comment = await Comment.findOneAndUpdate({ ...filter }, { ...commentBody }, { new: true });
  return comment;
};

const deleteComment = async (filter) => {
  await Comment.findOneAndDelete(filter);
};

module.exports = {
  postComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
