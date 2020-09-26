// @ts-check
const makeIssueRequestDto = require("../dtos/IssueRequestDto");

/**
 *
 * @param {{IssueModel: import("../models/IssueModel").IssueModelType}} injections
 */
const makeIssuesService = ({ IssueModel }) => {
  const addIssue = async (dto) => {
    const issue = makeIssueRequestDto(dto);
    const newIssue = new IssueModel(issue);
    return await newIssue.save();
  };

  return Object.freeze({
    addIssue,
  });
};

module.exports = makeIssuesService;
