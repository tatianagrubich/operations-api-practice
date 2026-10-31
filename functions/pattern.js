module.exports = (targetVal, opts) => {
  if (targetVal === undefined || targetVal === null) return;
  const { match, notMatch } = opts;
  if (match) {
    const regex = new RegExp(match);
    if (!regex.test(targetVal)) {
      return [{ message: `Value "${targetVal}" does not match pattern ${match}` }];
    }
  }
  if (notMatch) {
    const regex = new RegExp(notMatch);
    if (regex.test(targetVal)) {
      return [{ message: `Value "${targetVal}" matches forbidden pattern ${notMatch}` }];
    }
  }
  return [];
};