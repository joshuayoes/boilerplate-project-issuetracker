// @ts-check
import { required, optional } from "../utils/validation";

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
    assigned_to: optional(assigned_to) || undefined,
    status_text: optional(status_text),
  });

export default makeIssueRequestDto;
