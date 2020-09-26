const mongoose = require("mongoose");
const { String, Date, Boolean } = mongoose.Schema.Types;

const issueSchema = new mongoose.Schema({
  issue_title: { type: String, required: true },
  issue_text: { type: String, required: true },
  created_by: { type: String, required: true },
  assigned_to: { type: String, required: false },
  status_text: { type: String, required: false },
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date, default: Date.now },
  open: { type: Boolean, default: true },
});

const IssueModel = mongoose.model("Issue", issueSchema);

/**
 * Mongoose issue model.
 * @typedef {typeof IssueModel} IssueModelType
 */

module.exports = IssueModel;
