// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../../../../../usr/local/lib/node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../usr/local/lib/node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../usr/local/lib/node_modules/parcel/src/builtins/bundle-url.js"}],"assets/fonts/fonts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Lato-Light.woff2":[["Lato-Light.e6823993.woff2","assets/fonts/Lato-Light.woff2"],"assets/fonts/Lato-Light.woff2"],"./Lato-Light.woff":[["Lato-Light.c34725b9.woff","assets/fonts/Lato-Light.woff"],"assets/fonts/Lato-Light.woff"],"./ClearSans-Light.woff2":[["ClearSans-Light.1e8c9dbb.woff2","assets/fonts/ClearSans-Light.woff2"],"assets/fonts/ClearSans-Light.woff2"],"./ClearSans-Light.woff":[["ClearSans-Light.9418192c.woff","assets/fonts/ClearSans-Light.woff"],"assets/fonts/ClearSans-Light.woff"],"./Lato-Regular.woff2":[["Lato-Regular.71d8ef0d.woff2","assets/fonts/Lato-Regular.woff2"],"assets/fonts/Lato-Regular.woff2"],"./Lato-Regular.woff":[["Lato-Regular.1f7777df.woff","assets/fonts/Lato-Regular.woff"],"assets/fonts/Lato-Regular.woff"],"./ClearSans-Bold.woff2":[["ClearSans-Bold.e0e4adec.woff2","assets/fonts/ClearSans-Bold.woff2"],"assets/fonts/ClearSans-Bold.woff2"],"./ClearSans-Bold.woff":[["ClearSans-Bold.8edc0875.woff","assets/fonts/ClearSans-Bold.woff"],"assets/fonts/ClearSans-Bold.woff"],"./ClearSans-Medium.woff2":[["ClearSans-Medium.f1794c8b.woff2","assets/fonts/ClearSans-Medium.woff2"],"assets/fonts/ClearSans-Medium.woff2"],"./ClearSans-Medium.woff":[["ClearSans-Medium.55f65f9f.woff","assets/fonts/ClearSans-Medium.woff"],"assets/fonts/ClearSans-Medium.woff"],"./Lato-Bold.woff2":[["Lato-Bold.f97ac815.woff2","assets/fonts/Lato-Bold.woff2"],"assets/fonts/Lato-Bold.woff2"],"./Lato-Bold.woff":[["Lato-Bold.79cf7465.woff","assets/fonts/Lato-Bold.woff"],"assets/fonts/Lato-Bold.woff"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel/src/builtins/css-loader.js"}],"assets/scss/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"../../assets/fonts/fonts.css":"assets/fonts/fonts.css","./../images/fashion.jpg":[["fashion.25ea31ba.jpg","assets/images/fashion.jpg"],"assets/images/fashion.jpg"],"./../images/jewellery.jpg":[["jewellery.c2edd6a5.jpg","assets/images/jewellery.jpg"],"assets/images/jewellery.jpg"],"./../images/ecommerce.jpg":[["ecommerce.e149610f.jpg","assets/images/ecommerce.jpg"],"assets/images/ecommerce.jpg"],"./../images/Jeweller/jewellery-bg-before-after.jpg":[["jewellery-bg-before-after.e4c13026.jpg","assets/images/Jeweller/jewellery-bg-before-after.jpg"],"assets/images/Jeweller/jewellery-bg-before-after.jpg"],"./../images/Ecommerce/product copy2.jpeg":[["product copy2.bf3df660.jpeg","assets/images/Ecommerce/product copy2.jpeg"],"assets/images/Ecommerce/product copy2.jpeg"],"./../images/Fashion/fashion beauty retouch1 copy2.jpeg":[["fashion beauty retouch1 copy2.9a260390.jpeg","assets/images/Fashion/fashion beauty retouch1 copy2.jpeg"],"assets/images/Fashion/fashion beauty retouch1 copy2.jpeg"],"./../images/one-screen-bg-blue.svg":[["one-screen-bg-blue.55df6866.svg","assets/images/one-screen-bg-blue.svg"],"assets/images/one-screen-bg-blue.svg"],"./../images/one-screen-bg-orange.svg":[["one-screen-bg-orange.ace14554.svg","assets/images/one-screen-bg-orange.svg"],"assets/images/one-screen-bg-orange.svg"],"./../images/one-screen-bg-green.svg":[["one-screen-bg-green.6322daaa.svg","assets/images/one-screen-bg-green.svg"],"assets/images/one-screen-bg-green.svg"],"./../images/Fashion/fashion beauty retouch1 copy og.jpeg":[["fashion beauty retouch1 copy og.62a7636c.jpeg","assets/images/Fashion/fashion beauty retouch1 copy og.jpeg"],"assets/images/Fashion/fashion beauty retouch1 copy og.jpeg"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel/src/builtins/css-loader.js"}],"../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55057" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js"], null)