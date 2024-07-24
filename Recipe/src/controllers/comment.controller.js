const { commentService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const createComment = catchAsync(async (req, res) => {
  req.body.user = req.user.id;
  const comment = await commentService.createComment(req.body);
  res.status(201).send(comment);
});

const getComments = catchAsync(async (req, res) => {
  const comments = await commentService.getComments();
  res.send(comments);
});

const getComment = catchAsync(async (req, res) => {
  const comment = await commentService.getComment(req.params.commentId);
  res.send(comment);
});

const updateComment = catchAsync(async (req, res) => {
  const comment = await commentService.updateComment({ _id: req.params.commentId, user: req.user._id.toString() }, req.body);
  res.send(comment);
});

const deleteComment = catchAsync(async (req, res) => {
  await commentService.deleteComment({ _id: req.params.commentId, user: req.user._id });
  res.status(204).send();
});

module.exports = {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
