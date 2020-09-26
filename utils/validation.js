const required = (input = undefined) => {
  if (typeof input !== "string") {
    throw Error("Input required");
  }

  return input;
};

/**
 *
 * @returns {undefined | string} input
 */
const optional = (input) => {
  if (typeof input === "undefined") {
    return undefined;
  }

  if (typeof input === "string") {
    return input;
  }

  throw Error("Input is not string or undefined");
};

module.exports = {
  optional,
  required,
};
