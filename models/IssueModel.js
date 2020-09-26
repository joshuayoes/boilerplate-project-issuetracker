const mongoose = require("mongoose");
const { String, Boolean, Date: DateType } = mongoose.Schema.Types;

const issueSchema = new mongoose.Schema(
  {
    issue_title: { type: String, required: true },
    issue_text: { type: String, required: true },
    created_by: { type: String, required: true },
    assigned_to: { type: String, required: false },
    status_text: { type: String, required: false },
    created_on: { type: DateType, default: Date.now() },
    updated_on: { type: DateType, default: Date.now() },
    open: { type: Boolean, default: true },
  },
  { versionKey: false }
);

const IssueModel = mongoose.model("Issue", issueSchema);

/**
 * Mongoose issue model.
 * @typedef {typeof IssueModel} IssueModelType
 */

module.exports = IssueModel;
