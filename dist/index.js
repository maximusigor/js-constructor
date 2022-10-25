// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"JDu1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;
var model = [{
  type: 'title',
  value: 'Hello World from JS!'
}, {
  type: 'text',
  value: 'here we go with some text'
}, {
  type: 'columns',
  value: ['111111111', '222222222', '333333333']
}, {
  type: 'image',
  value: './assets/image.png'
}];
exports.model = model;
},{}],"ZLZB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columns = columns;
exports.image = image;
exports.text = text;
exports.title = title;
function title(block) {
  return "\n            <div className=\"row\">\n              <div className=\"col-sm\">\n                  <h1>".concat(block.value, "</h1>\n              </div>\n            </div>\n           ");
}
function text(block) {
  return "\n            <div className=\"row\">\n              <div className=\"col-sm\">\n                  <p>".concat(block.value, "</p>\n              </div>\n            </div>\n           ");
}
function columns(block) {
  var html = block.value.map(function (item) {
    return "<div class=\"col-sm\">".concat(item, "</div>");
  });
  return "\n        <div class=\"row\">\n            ".concat(html.join(''), "\n        </div>\n       ");
}
function image(block) {
  return "\n        <div class=\"row\">\n           <img src=\"".concat(block.value, "\"/> \n        </div>\n       ");
}
},{}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";

var _model = require("./model");
var _templates = require("./templates");
require("./styles/main.css");
var site = document.querySelector('#site');
_model.model.forEach(function (block) {
  var html = '';
  if (block.type === 'title') {
    html = (0, _templates.title)(block);
  } else if (block.type === 'text') {
    html = (0, _templates.text)(block);
  } else if (block.type === 'columns') {
    html = (0, _templates.columns)(block);
  } else if (block.type === 'image') {
    html = (0, _templates.image)(block);
  }
  site.insertAdjacentHTML('beforeend', html);
});
},{"./model":"JDu1","./templates":"ZLZB","./styles/main.css":"jExt"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map