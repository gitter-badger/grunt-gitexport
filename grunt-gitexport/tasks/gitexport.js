/*
 * grunt-gitexport
 * https://github.com/smarkle/grunt-gitexport
 *
 * Copyright (c) 2013 Scott Markley
 * Licensed under the MIT license.
 */

module.exports = function( grunt ) {
  'use strict';
  var log = grunt.log;

  grunt.registerMultiTask( 'gitexport', 'Exports archive file from github.', function(branchOveride) {
    var done = this.async();
    var fullPathToOutput =  this.data.outputPath;
    var targetBranch = branchOveride || this.data.branch || 'master';
log.writeln('targetBranch: '+targetBranch);
    grunt.util.spawn({
      cmd: 'git',
      args: [ 'archive', '--format=zip', '--output=' + fullPathToOutput, targetBranch ]
    }, function( err, result ) {
      if ( err ) {
        grunt.log.error( err );
        return done( false );
      }

      done();
    });
  });
};
