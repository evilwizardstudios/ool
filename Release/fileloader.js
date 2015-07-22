
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'Builds.data';
    var REMOTE_PACKAGE_BASE = 'Builds.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
    var REMOTE_PACKAGE_SIZE = 39896647;
    var PACKAGE_UUID = 'bf3a1666-2888-4081-a171-031d8fa7b1be';
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'Resources', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 246028, 0, 0).open('GET', '/level0');
    new DataRequest(246028, 342840, 0, 0).open('GET', '/level1');
    new DataRequest(342840, 368460, 0, 0).open('GET', '/level2');
    new DataRequest(368460, 400488, 0, 0).open('GET', '/mainData');
    new DataRequest(400488, 401621, 0, 0).open('GET', '/methods_pointedto_by_uievents.xml');
    new DataRequest(401621, 1111769, 0, 0).open('GET', '/sharedassets0.assets');
    new DataRequest(1111769, 1347442, 0, 0).open('GET', '/sharedassets0.resource');
    new DataRequest(1347442, 34639726, 0, 0).open('GET', '/sharedassets1.assets');
    new DataRequest(34639726, 34937358, 0, 0).open('GET', '/sharedassets1.resource');
    new DataRequest(34937358, 37615778, 0, 0).open('GET', '/sharedassets2.assets');
    new DataRequest(37615778, 37776419, 0, 0).open('GET', '/sharedassets2.resource');
    new DataRequest(37776419, 37781767, 0, 0).open('GET', '/sharedassets3.assets');
    new DataRequest(37781767, 39356803, 0, 0).open('GET', '/Resources/unity_default_resources');
    new DataRequest(39356803, 39896647, 0, 0).open('GET', '/Resources/unity_builtin_extra');

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
      // Reuse the bytearray from the XHR as the source for file reads.
      DataRequest.prototype.byteArray = byteArray;
          DataRequest.prototype.requests["/level0"].onload();
          DataRequest.prototype.requests["/level1"].onload();
          DataRequest.prototype.requests["/level2"].onload();
          DataRequest.prototype.requests["/mainData"].onload();
          DataRequest.prototype.requests["/methods_pointedto_by_uievents.xml"].onload();
          DataRequest.prototype.requests["/sharedassets0.assets"].onload();
          DataRequest.prototype.requests["/sharedassets0.resource"].onload();
          DataRequest.prototype.requests["/sharedassets1.assets"].onload();
          DataRequest.prototype.requests["/sharedassets1.resource"].onload();
          DataRequest.prototype.requests["/sharedassets2.assets"].onload();
          DataRequest.prototype.requests["/sharedassets2.resource"].onload();
          DataRequest.prototype.requests["/sharedassets3.assets"].onload();
          DataRequest.prototype.requests["/Resources/unity_default_resources"].onload();
          DataRequest.prototype.requests["/Resources/unity_builtin_extra"].onload();
          Module['removeRunDependency']('datafile_Builds.data');

    };
    Module['addRunDependency']('datafile_Builds.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();
