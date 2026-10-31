module.exports = (targetVal, opts) => {
  if (targetVal === undefined || targetVal === null) return;
  const { max, min } = opts;
  let length;
  if (Array.isArray(targetVal)) {
    length = targetVal.length;
  } else if (typeof targetVal === 'string') {
    length = targetVal.length;
  } else if (typeof targetVal === 'object') {
    length = Object.keys(targetVal).length;
  } else {
    return [];
  }
  if (max !== undefined && length > max) {
    return [{ message: `Length ${length} exceeds max ${max}` }];
  }
  if (min !== undefined && length < min) {
    return [{ message: `Length ${length} is less than min ${min}` }];
  }
  return [];
};