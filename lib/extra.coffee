# fn-utils.coffee
#
# EXPORTS:
#   mapWith, pluckWith, filterWith, reduceWith
{ncurry, curry, partial, flip, curry2, binary} = require './base'

_ = require 'lodash'

slice = Array.prototype.slice

mapWith = flip _.map

pluckWith = flip _.pluck

filterWith = flip _.filter

reduceWith = flip _.reduce

get = (obj, key)-> if _.has(obj,key) then obj[key]

getter = curry2 get

getWith = flip get

mapValuesWith = flip _.mapValues

module.exports =
	"mapWith":  mapWith
	"pluckWith": pluckWith
	"filterWith": filterWith
	"reduceWith": reduceWith
	"getter": getter
	"getWith": getWith
	"mapValuesWith": mapValuesWith
