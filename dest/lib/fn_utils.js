/*
partial
flip
ncurry
curry
curry2
mapWith
pluckWith
filterWith
reduceWith
*/

var curry, curry2, filterWith, flip, get, getWith, getter, mapValuesWith, mapWith, morph, ncurry, partial, pluckWith, reduceWith, slice, sum, _,
  __slice = [].slice;

_ = require('lodash');

slice = Array.prototype.slice;

ncurry = function(n, fn) {
  var largs;
  largs = slice.call(arguments, 2);
  if (largs.length >= n) {
    return fn.apply(this, largs.slice(0, n));
  }
  return function() {
    var args;
    args = largs.concat(slice.call(arguments));
    if (args.length < n) {
      return ncurry.apply(this, [n, fn].concat(args));
    }
    return fn.apply(this, args.slice(0, n));
  };
};

sum = function(a, b) {
  return a + b;
};

curry = function() {
  var args, fn;
  fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  return ncurry.apply(this, [fn.length, fn].concat(args));
};

partial = function() {
  var args, f;
  f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  return function() {
    var rest;
    rest = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return f.apply(this, args.concat(rest));
  };
};

flip = curry(function(fn, x, y) {
  return fn(y, x);
});

curry2 = partial(ncurry, 2);

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

morph = curry2(function(fn, obj) {
  var reducer;
  reducer = function(acc, v, k) {
    acc[k] = fn(v);
    return acc;
  };
  return _.reduce(obj, reducer, {});
});

mapValuesWith = flip(_.mapValues);

module.exports = {
  partial: partial,
  flip: flip,
  ncurry: ncurry,
  curry: curry,
  curry2: curry2,
  mapWith: mapWith,
  pluckWith: pluckWith,
  filterWith: filterWith,
  reduceWith: reduceWith,
  getter: getter,
  getWith: getWith,
  mapValuesWith: mapValuesWith
};

/*
//@ sourceMappingURL=fn_utils.js.map
*/