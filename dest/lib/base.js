var binary, curry, curry2, flip, ncurry, partial, slice,
  __slice = [].slice;

slice = Array.prototype.slice;

binary = function(fn) {
  return function(a, b) {
    return fn(a, b);
  };
};

ncurry = function() {
  var fn, largs, n;
  n = arguments[0], fn = arguments[1], largs = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
  if (largs.length >= n) {
    return fn.apply(this, largs.slice(0, n));
  } else {
    return function() {
      var args;
      args = largs.concat(slice.call(arguments));
      if (args.length < n) {
        return ncurry.apply(this, [n, fn].concat(args));
      }
      return fn.apply(this, args.slice(0, n));
    };
  }
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

module.exports = {
  "ncurry": ncurry,
  "curry": curry,
  "partial": partial,
  "flip": flip,
  "curry2": curry2,
  "binary": binary
};

/*
//@ sourceMappingURL=base.js.map
*/