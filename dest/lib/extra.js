var binary, curry, curry2, filterWith, flip, get, getWith, getter, mapValuesWith, mapWith, ncurry, partial, pluckWith, reduceWith, slice, _, _ref;

_ref = require('./base'), ncurry = _ref.ncurry, curry = _ref.curry, partial = _ref.partial, flip = _ref.flip, curry2 = _ref.curry2, binary = _ref.binary;

_ = require('lodash');

slice = Array.prototype.slice;

mapWith = flip(_.map);

pluckWith = flip(_.pluck);

filterWith = flip(_.filter);

reduceWith = flip(_.reduce);

get = function(obj, key) {
  if (_.has(obj, key)) {
    return obj[key];
  }
};

getter = curry2(get);

getWith = flip(get);

mapValuesWith = flip(_.mapValues);

module.exports = {
  "mapWith": mapWith,
  "pluckWith": pluckWith,
  "filterWith": filterWith,
  "reduceWith": reduceWith,
  "getter": getter,
  "getWith": getWith,
  "mapValuesWith": mapValuesWith
};

/*
//@ sourceMappingURL=extra.js.map
*/