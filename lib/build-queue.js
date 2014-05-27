(function() {
  var BuildQueue;

  BuildQueue = (function() {
    function BuildQueue(client) {
      this.client = client;
    }

    BuildQueue.prototype.add = function(build, cb) {
      return this.client._post('/buildQueue', build, cb);
    };

    return BuildQueue;

  })();

  module.exports = BuildQueue;

}).call(this);