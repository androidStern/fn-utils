###
partial
flip
ncurry
curry
curry2
mapWith
pluckWith
filterWith
reduceWith
###

_ = require 'lodash'

slice = Array.prototype.slice


ncurry = (n, fn)->
  largs = slice.call(arguments, 2)
  if (largs.length >= n)
    return fn.apply(this, largs.slice(0, n))
  return ->
    args = largs.concat(slice.call(arguments))
    if (args.length < n)
      return ncurry.apply(this, [n, fn].concat(args))
    return fn.apply(this, args.slice(0, n))


sum = (a,b)-> a+b

curry = (fn, args...)->
  ncurry.apply(this, [fn.length, fn].concat(args))

partial = (f, args...)-> (rest...)->
  f.apply(this, args.concat(rest))



flip = curry (fn, x, y)-> fn(y, x)
curry2 = partial ncurry, 2
mapWith = flip _.map
pluckWith = flip _.pluck
filterWith = flip _.filter
reduceWith = flip _.reduce


get = (obj, key)-> if _.has(obj,key) then obj[key]

getter = curry2(get)

getWith = flip(get)

morph = curry2 (fn, obj)->
  reducer = (acc, v, k)-> acc[k] = fn(v); return acc
  _.reduce obj, reducer, {}


mapValuesWith = flip _.mapValues

binary = (fn)-> (a,b)-> fn(a,b)

module.exports =
  partial: partial
  flip: flip
  ncurry: ncurry
  curry: curry
  curry2: curry2
  mapWith:  mapWith
  pluckWith: pluckWith
  filterWith: filterWith
  reduceWith: reduceWith
  getter: getter
  getWith: getWith
  mapValuesWith: mapValuesWith
	binary: binary

