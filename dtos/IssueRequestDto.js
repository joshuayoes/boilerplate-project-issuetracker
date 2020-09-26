// @ts-check
const { required, optional } = require("../utils/validation");

/**
 * 
 * @returns {{  issue_title: string,
  issue_text: string,
  created_by: string,
  assigned_to: string | undefined,
  status_text: string | undefined,
}} IssueRequestDto 
 */
const makeIssueRequestDto = ({
  issue_title,
  issue_text,
  created_by,
  assigned_to,
  status_text,
}) =>
  Object.freeze({
    issue_title: required(issue_title),
    issue_text: required(issue_text),
    created_by: required(created_by),
    assigned_to: optional(assigned_to),
    status_text: optional(status_text),
  });

module.exports = makeIssueRequestDto;
