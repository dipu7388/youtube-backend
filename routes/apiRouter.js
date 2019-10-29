/* eslint-disable no-param-reassign */
const express = require('express');
const youtubeController = require('../controllers/youtubeController');
function routes(model) {
  const apiRouter = express.Router();
  const controller = youtubeController();
  apiRouter.route('/youtube')
    .post(controller.post)
    .get(controller.get);
  return apiRouter;
}

module.exports = routes;
