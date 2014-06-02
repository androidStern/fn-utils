# base.coffee
#
# EXPORTS:
# 	ncurry, curry, partial, flip, curry2, binary
#

slice = Array.prototype.slice

binary = (fn)-> (a,b)-> fn(a,b)

ncurry = (n, fn, largs...)->
  if largs.length >= n
    fn.apply(this, largs.slice(0, n))
  else
    ->
      args = largs.concat(slice.call(arguments))
      if (args.length < n)
        return ncurry.apply(this, [n, fn].concat(args))
      return fn.apply(this, args.slice(0, n))

curry = (fn, args...)->
  ncurry.apply(this, [fn.length, fn].concat(args))

partial = (f, args...)-> (rest...)->
  f.apply(this, args.concat(rest))

flip = curry (fn, x, y)-> fn(y, x)

curry2 = partial ncurry, 2

module.exports =
  "ncurry":  ncurry
  "curry": 	curry
  "partial": partial
  "flip": 	 flip
  "curry2":  curry2
  "binary":  binary
