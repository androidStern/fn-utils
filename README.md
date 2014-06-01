# fn-utils

Useful functions for writing functions. Inspired by [allong.es](https://github.com/raganwald/allong.es).

## Getting Started
Install the module with: `npm install fn_utils`

```coffeescript
{flip} = require 'fn_utils'
{map} = require 'lodash'

mapWith = flip map      #=> flip returns a curried function with its arguments flipped

inc = (e)-> e + 1

mapInc = mapWith inc

mapInc [1,2,3]    #=> [2,3,4]
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Andrew Stern  
Licensed under the MIT license.
