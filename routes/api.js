/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;

/**
 *
 * @param {import('../server')} app
 * @param {import('../services/IssuesService')} issuesService
 */
module.exports = function (app, issuesService) {
  app
    .route("/api/issues/:project")

    .get(function (req, res) {
      var project = req.params.project;
    })

    .post(async (req, res) => {
      const project = req.body;
      try {
        const newIssue = await issuesService.addIssue(project);
        res.json(newIssue);
      } catch {
        res.status(400);
        res.json({ error: "bad request" });
      }
    })

    .put(function (req, res) {
      var project = req.params.project;
    })

    .delete(function (req, res) {
      var project = req.params.project;
    });
};
