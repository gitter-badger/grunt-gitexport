# grunt-gitexport

[![Join the chat at https://gitter.im/smarkle/grunt-gitexport](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/smarkle/grunt-gitexport?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Does an archive export from git.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-gitexport`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-gitexport');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
gitexport: {
    dist: {
        outputPath: '/full/path/to/zipfile.zip',
        branch: 'master'
    }
}

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Scott Markley  
Licensed under the MIT license.
