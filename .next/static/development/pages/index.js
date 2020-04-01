(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: getTasks, firestore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasks", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");



var config = {
  apiKey: "AIzaSyDJ1GmtIfb8MeId15e7RYyK2KNVh9dYG-8",
  authDomain: "todoapp-56c16.firebaseapp.com",
  databaseURL: "https://todoapp-56c16.firebaseio.com",
  projectId: "todoapp-56c16",
  storageBucket: "todoapp-56c16.appspot.com",
  messagingSenderId: "856215311931",
  appId: "1:856215311931:web:9ef5b7b87ba3059ba66e1e",
  measurementId: "G-FYF01N4R29"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(config);
}

var getTasks = function getTasks() {
  var lang,
      snapshots,
      posts,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          lang = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'en';
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(firestore.collection("tasks").get());

        case 3:
          snapshots = _context.sent;
          posts = snapshots.docs.map(function (doc) {
            var data = doc.data();
            return data;
          });
          console.log(posts);
          return _context.abrupt("return", posts);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};
var firestore = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.cjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
var component = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
var logger$1 = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

var name$1 = "@firebase/app";
var version = "0.6.0";

var name$2 = "@firebase/analytics";

var name$3 = "@firebase/auth";

var name$4 = "@firebase/database";

var name$5 = "@firebase/functions";

var name$6 = "@firebase/installations";

var name$7 = "@firebase/messaging";

var name$8 = "@firebase/performance";

var name$9 = "@firebase/remote-config";

var name$a = "@firebase/storage";

var name$b = "@firebase/firestore";

var name$c = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$1] = 'fire-core',
    _a$1[name$2] = 'fire-analytics',
    _a$1[name$3] = 'fire-auth',
    _a$1[name$4] = 'fire-rtdb',
    _a$1[name$5] = 'fire-fn',
    _a$1[name$6] = 'fire-iid',
    _a$1[name$7] = 'fire-fcm',
    _a$1[name$8] = 'fire-perf',
    _a$1[name$9] = 'fire-rc',
    _a$1[name$a] = 'fire-gcs',
    _a$1[name$b] = 'fire-fst',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name$c] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.container = new component.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        try {
            // populate ComponentContainer with existing components
            for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component$1 = _c.value;
                this._addComponent(component$1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "7.12.0";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: logger$1.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                util.deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        try {
            // add the component to existing app instances
            for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new component.Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */, {
                appName: name
            });
        }
        logger$1.setUserLogHandler(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name$1, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

exports.default = firebase$1;
exports.firebase = firebase$1;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) {
                    deferred.resolve(instance);
                }
            }
            catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = tslib.__assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) {
                    return null;
                }
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        }
        catch (e) {
            if (optional) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(services
                                .filter(function (service) { return 'INTERNAL' in service; })
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/firestore/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var t = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));
var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var logger = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
var component = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
var webchannelWrapper = __webpack_require__(/*! @firebase/webchannel-wrapper */ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The semver (www.semver.org) version of the SDK. */ var _ = t.SDK_VERSION, I = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.t = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.i = function() {
        return this.t() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, 
    /** A user with a null UID. */
    t.UNAUTHENTICATED = new t(null), 
    // TODO(mikelehen): Look into getting a proper uid-equivalent for
    // non-FirebaseAuth providers.
    t.u = new t("google-credentials-uid"), t.s = new t("first-party-uid"), t;
}(), T = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, E = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this, i) || this;
        return e.code = n, e.message = i, e.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        e.toString = function() {
            return e.name + ": [code=" + e.code + "]: " + e.message;
        }, e;
    }
    return tslib.__extends(i, t), i;
}(Error), D = function(t, n) {
    this.user = n, this.type = "OAuth", this.o = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.o.Authorization = "Bearer " + t;
}, R = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.h = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.l = function() {}, t.prototype.v = function(t) {
        bi(!this.h, "Can only call setChangeListener() once."), this.h = t, 
        // Fire with initial user.
        t(I.UNAUTHENTICATED);
    }, t.prototype.m = function() {
        bi(null !== this.h, "removeChangeListener() when no listener registered"), this.h = null;
    }, t;
}(), S = /** @class */ function() {
    function t(t) {
        var n = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.g = null, 
        /** Tracks the current User. */
        this.currentUser = I.UNAUTHENTICATED, this.p = !1, 
        /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this._ = 0, 
        /** The listener registered with setChangeListener(). */
        this.h = null, this.forceRefresh = !1, this.g = function() {
            n._++, n.currentUser = n.I(), n.p = !0, n.h && n.h(n.currentUser);
        }, this._ = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.g) : (
        // if auth is not available, invoke tokenListener once with null token
        this.g(null), t.get().then((function(t) {
            n.auth = t, n.g && 
            // tokenListener can be removed by removeChangeListener()
            n.auth.addAuthTokenListener(n.g);
        }), (function() {
            /* this.authProvider.get() never rejects */})));
    }
    return t.prototype.getToken = function() {
        var t = this;
        bi(null != this.g, "getToken cannot be called after listener removed.");
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
        var n = this._, i = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(i).then((function(i) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            if (t._ !== n) throw new E(T.ABORTED, "getToken aborted due to token change.");
            return i ? (bi("string" == typeof i.accessToken, "Invalid tokenData returned from getToken():" + i), 
            new D(i.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.l = function() {
        this.forceRefresh = !0;
    }, t.prototype.v = function(t) {
        bi(!this.h, "Can only call setChangeListener() once."), this.h = t, 
        // Fire the initial event
        this.p && t(this.currentUser);
    }, t.prototype.m = function() {
        bi(null != this.g, "removeChangeListener() called twice"), bi(null !== this.h, "removeChangeListener() called when no listener registered"), 
        this.auth && this.auth.removeAuthTokenListener(this.g), this.g = null, this.h = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.I = function() {
        var t = this.auth && this.auth.getUid();
        return bi(null === t || "string" == typeof t, "Received invalid UID: " + t), new I(t);
    }, t;
}(), A = /** @class */ function() {
    function t(t, n) {
        this.T = t, this.D = n, this.type = "FirstParty", this.user = I.s;
    }
    return Object.defineProperty(t.prototype, "o", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.D
            }, n = this.T.auth.R([]);
            return n && (t.Authorization = n), t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), C = /** @class */ function() {
    function t(t, n) {
        this.T = t, this.D = n;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new A(this.T, this.D));
    }, t.prototype.v = function(t) {
        // Fire with initial uid.
        t(I.s);
    }, t.prototype.m = function() {}, t.prototype.l = function() {}, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
function P(t) {
    if (!t) return new R;
    switch (t.type) {
      case "gapi":
        var n = t.S;
        // Make sure this really is a Gapi client.
                return bi(!("object" != typeof n || null === n || !n.auth || !n.auth.getAuthHeaderValueForFirstParty), "unexpected gapi interface"), 
        new C(n, t.D || "0");

      case "provider":
        return t.S;

      default:
        throw new E(T.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper function to prevent instantiation through the constructor.
 *
 * This method creates a new constructor that throws when it's invoked.
 * The prototype of that constructor is then set to the prototype of the hidden
 * "class" to expose all the prototype methods and allow for instanceof
 * checks.
 *
 * To also make all the static methods available, all properties of the
 * original constructor are copied to the new constructor.
 */ function k(t, n) {
    function i() {
        var t = "This constructor is private.";
        throw n && (t += " ", t += n), new E(T.INVALID_ARGUMENT, t);
    }
    // Make sure instanceof checks work and all methods are exposed on the public
    // constructor
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return i.prototype = t.prototype, 
    // Copy any static methods/members
    Object.assign(i, t), i;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function N(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
}

/** Returns the given value if it's defined or the defaultValue otherwise. */ function O(t, n) {
    return void 0 !== t ? t : n;
}

function F(t, n) {
    for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
        var e = Number(i);
        isNaN(e) || n(e, t[i]);
    }
}

function V(t, n) {
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && n(i, t[i]);
}

function U(t) {
    for (var n in bi(null != t && "object" == typeof t, "isEmpty() expects object parameter."), 
    t) if (Object.prototype.hasOwnProperty.call(t, n)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */
function x(t, n) {
    if (0 !== n.length) throw new E(T.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + et(n.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function j(t, n, i) {
    if (n.length !== i) throw new E(T.INVALID_ARGUMENT, "Function " + t + "() requires " + et(i, "argument") + ", but was called with " + et(n.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function L(t, n, i) {
    if (n.length < i) throw new E(T.INVALID_ARGUMENT, "Function " + t + "() requires at least " + et(i, "argument") + ", but was called with " + et(n.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function q(t, n, i, e) {
    if (n.length < i || n.length > e) throw new E(T.INVALID_ARGUMENT, "Function " + t + "() requires between " + i + " and " + e + " arguments, but was called with " + et(n.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */ function B(t, n, i, e) {
    if (!(n instanceof Array) || n.length < e) throw new E(T.INVALID_ARGUMENT, "Function " + t + "() requires its " + i + " argument to be an array with at least " + et(e, "element") + ".");
}

/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function M(t, n, i, e) {
    J(t, n, it(i) + " argument", e);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function Q(t, n, i, e) {
    void 0 !== e && M(t, n, i, e);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function G(t, n, i, e) {
    J(t, n, i + " option", e);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function W(t, n, i, e) {
    void 0 !== e && G(t, n, i, e);
}

function z(t, n, i, e, r) {
    void 0 !== e && function(t, n, i, e, r) {
        if (!(e instanceof Array)) throw new E(T.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " option to be an array, but it was: " + X(e));
        for (var u = 0; u < e.length; ++u) if (!r(e[u])) throw new E(T.INVALID_ARGUMENT, "Function " + t + "() requires all " + n + " elements to be " + i + ", but the value at index " + u + " was: " + X(e[u]));
    }(t, n, i, e, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function K(t, n, i, e, r) {
    void 0 !== e && function(t, n, i, e, r) {
        for (var u = [], s = 0, o = r; s < o.length; s++) {
            var h = o[s];
            if (h === e) return;
            u.push(X(h));
        }
        var c = X(e);
        throw new E(T.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + i + '". Acceptable values: ' + u.join(", "));
    }(t, 0, i, e, r);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Arugment to validate.
 */ function H(t, n, i, e) {
    if (!n.some((function(t) {
        return t === e;
    }))) throw new E(T.INVALID_ARGUMENT, "Invalid value " + X(e) + " provided to function " + t + "() for its " + it(i) + " argument. Acceptable values: " + n.join(", "));
}

/** Helper to validate the type of a provided input. */ function J(t, n, i, e) {
    if (!("object" === n ? Y(e) : "non-empty string" === n ? "string" == typeof e && "" !== e : typeof e === n)) {
        var r = X(e);
        throw new E(T.INVALID_ARGUMENT, "Function " + t + "() requires its " + i + " to be of type " + n + ", but it was: " + r);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function Y(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function X(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var n = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var n = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (n && n.length > 1) return n[1];
            }
            return null;
        }
        /** Validates the provided argument is defined. */ (t);
        return n ? "a custom " + n + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : gi("Unknown wrong type: " + typeof t);
}

function $(t, n, i) {
    if (void 0 === i) throw new E(T.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + it(n) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function Z(t, n, i) {
    V(n, (function(n, e) {
        if (i.indexOf(n) < 0) throw new E(T.INVALID_ARGUMENT, "Unknown option '" + n + "' passed to function " + t + "(). Available options: " + i.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function tt(t, n, i, e) {
    var r = X(e);
    return new E(T.INVALID_ARGUMENT, "Function " + t + "() requires its " + it(i) + " argument to be a " + n + ", but it was: " + r);
}

function nt(t, n, i) {
    if (i <= 0) throw new E(T.INVALID_ARGUMENT, 'Function "' + t + '()" requires its ' + it(n) + " argument to be a positive number, but it was: " + i + ".");
}

/** Converts a number to its english word representation */ function it(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function et(t, n) {
    return t + " " + n + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var rt = /** @class */ function() {
    function t(t) {
        this.A = t;
    }
    return t.fromBase64String = function(n) {
        return new t(ai.C().atob(n));
    }, t.fromUint8Array = function(n) {
        return new t(ut(n));
    }, t.prototype.toBase64 = function() {
        return ai.C().btoa(this.A);
    }, t.prototype.toUint8Array = function() {
        return st(this.A);
    }, t.prototype.P = function() {
        return 2 * this.A.length;
    }, t.prototype.isEqual = function(t) {
        return this.A === t.A;
    }, t.k = new t(""), t;
}();

/**
 * Helper function to convert an Uint8array to a binary string.
 */ function ut(t) {
    for (var n = "", i = 0; i < t.length; ++i) n += String.fromCharCode(t[i]);
    return n;
}

/**
 * Helper function to convert a binary string to an Uint8Array.
 */ function st(t) {
    for (var n = new Uint8Array(t.length), i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
    return n;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function ot() {
    if ("undefined" == typeof Uint8Array) throw new E(T.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function ht() {
    if (!ai.C().N) throw new E(T.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var ct = /** @class */ function() {
    function t(t) {
        ht(), this.A = t;
    }
    return t.fromBase64String = function(n) {
        j("Blob.fromBase64String", arguments, 1), M("Blob.fromBase64String", "string", 1, n), 
        ht();
        try {
            var i = ai.C().atob(n);
            return new t(i);
        } catch (t) {
            throw new E(T.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t);
        }
    }, t.fromUint8Array = function(n) {
        if (j("Blob.fromUint8Array", arguments, 1), ot(), !(n instanceof Uint8Array)) throw tt("Blob.fromUint8Array", "Uint8Array", 1, n);
        var i = ut(n);
        return new t(i);
    }, t.prototype.toBase64 = function() {
        return j("Blob.toBase64", arguments, 0), ht(), ai.C().btoa(this.A);
    }, t.prototype.toUint8Array = function() {
        j("Blob.toUint8Array", arguments, 0), ot();
        var t = st(this.A);
        return t;
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.A === t.A;
    }, t.prototype.O = function() {
        // Assume UTF-16 encoding in memory (see StringValue.approximateByteSize())
        return 2 * this.A.length;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.F = function(t) {
        return yi(this.A, t.A);
    }, t;
}(), at = k(ct, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."), ft = /** @class */ function() {
    function t(t, n) {
        if (j("GeoPoint", arguments, 2), M("GeoPoint", "number", 1, t), M("GeoPoint", "number", 2, n), 
        !isFinite(t) || t < -90 || t > 90) throw new E(T.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(n) || n < -180 || n > 180) throw new E(T.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + n);
        this.V = t, this.U = n;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.V;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.U;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.V === t.V && this.U === t.U;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.F = function(t) {
        return yi(this.V, t.V) || yi(this.U, t.U);
    }, t;
}(), lt = /** @class */ function() {
    function t(t, n) {
        if (this.seconds = t, this.nanoseconds = n, n < 0) throw new E(T.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
        if (n >= 1e9) throw new E(T.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
        if (t < -62135596800) throw new E(T.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new E(T.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(n) {
        return t.fromMillis(n.getTime());
    }, t.fromMillis = function(n) {
        var i = Math.floor(n / 1e3);
        return new t(i, 1e6 * (n - 1e3 * i));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.F = function(t) {
        return this.seconds === t.seconds ? yi(this.nanoseconds, t.nanoseconds) : yi(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), dt = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    // TODO(b/34176344): Once we no longer need to use the old alpha protos,
    // delete this constructor and use a timestamp-backed version everywhere.
        return t.j = function(n) {
        var i = Math.floor(n / 1e6);
        return new t(new lt(i, n % 1e6 * 1e3));
    }, t.L = function(n) {
        return new t(n);
    }, t.q = function() {
        return t.MIN;
    }, t.prototype.B = function(t) {
        return this.timestamp.F(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */
    t.prototype.M = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.G = function() {
        return this.timestamp;
    }, t.MIN = new t(new lt(0, 0)), t;
}(), vt = /** @class */ function() {
    function t(t, n, i) {
        void 0 === n ? n = 0 : n > t.length && gi("offset " + n + " out of range " + t.length), 
        void 0 === i ? i = t.length - n : i > t.length - n && gi("length " + i + " out of range " + (t.length - n)), 
        this.segments = t, this.offset = n, this.len = i;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.len;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(n) {
        return 0 === t.W(this, n);
    }, t.prototype.child = function(n) {
        var i = this.segments.slice(this.offset, this.limit());
        return n instanceof t ? n.forEach((function(t) {
            i.push(t);
        })) : i.push(n), this.K(i);
    }, 
    /** The index of one past the last segment of the path. */
    t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.H = function(t) {
        return t = void 0 === t ? 1 : t, bi(this.length >= t, "Can't call popFirst() with less segments"), 
        this.K(this.segments, this.offset + t, this.length - t);
    }, t.prototype.J = function() {
        return bi(!this.Y(), "Can't call popLast() on empty path"), this.K(this.segments, this.offset, this.length - 1);
    }, t.prototype.X = function() {
        return bi(!this.Y(), "Can't call firstSegment() on empty path"), this.segments[this.offset];
    }, t.prototype.$ = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return bi(t < this.length, "Index out of range"), this.segments[this.offset + t];
    }, t.prototype.Y = function() {
        return 0 === this.length;
    }, t.prototype.Z = function(t) {
        if (t.length < this.length) return !1;
        for (var n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
        return !0;
    }, t.prototype.tt = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var n = this.offset, i = this.limit(); n < i; n++) t(this.segments[n]);
    }, t.prototype.nt = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.W = function(t, n) {
        for (var i = Math.min(t.length, n.length), e = 0; e < i; e++) {
            var r = t.get(e), u = n.get(e);
            if (r < u) return -1;
            if (r > u) return 1;
        }
        return t.length < n.length ? -1 : t.length > n.length ? 1 : 0;
    }, t;
}(), wt = /** @class */ function(t) {
    function i() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return tslib.__extends(i, t), i.prototype.K = function(t, n, e) {
        return new i(t, n, e);
    }, i.prototype.it = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.nt().join("/");
    }, i.prototype.toString = function() {
        return this.it();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    i.et = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new E(T.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new i(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, i.rt = new i([]), i;
}(vt), mt = /^[_a-zA-Z][_a-zA-Z0-9]*$/, gt = /** @class */ function(t) {
    function i() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return tslib.__extends(i, t), i.prototype.K = function(t, n, e) {
        return new i(t, n, e);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    i.ut = function(t) {
        return mt.test(t);
    }, i.prototype.it = function() {
        return this.nt().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), i.ut(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, i.prototype.toString = function() {
        return this.it();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    i.prototype.st = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    i.ot = function() {
        return new i([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    i.ht = function(t) {
        for (var n = [], e = "", r = 0, u = function() {
            if (0 === e.length) throw new E(T.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            n.push(e), e = "";
        }, s = !1; r < t.length; ) {
            var o = t[r];
            if ("\\" === o) {
                if (r + 1 === t.length) throw new E(T.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var h = t[r + 1];
                if ("\\" !== h && "." !== h && "`" !== h) throw new E(T.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                e += h, r += 2;
            } else "`" === o ? (s = !s, r++) : "." !== o || s ? (e += o, r++) : (u(), r++);
        }
        if (u(), s) throw new E(T.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new i(n);
    }, i.rt = new i([]), i;
}(vt), bt = /** @class */ function() {
    function t(n) {
        this.path = n, bi(t.ct(n), "Invalid DocumentKey with an odd number of segments: " + n.nt().join("/"));
    }
    /** Returns true if the document is in the specified collectionId. */    return t.prototype.at = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === wt.W(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.W = function(t, n) {
        return wt.W(t.path, n.path);
    }, t.ct = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param path The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.ft = function(n) {
        return new t(new wt(n.slice()));
    }, 
    /**
     * Creates and returns a new document key using '/' to split the string into
     * segments.
     *
     * @param path The slash-separated path string to the document
     * @return A new instance of DocumentKey
     */
    t.lt = function(n) {
        return new t(wt.et(n));
    }, t.EMPTY = new t(new wt([])), t;
}(), pt = /** @class */ function() {
    function t(t, n) {
        this.W = t, this.root = n || _t.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.dt = function(n, i) {
        return new t(this.W, this.root.dt(n, i, this.W).copy(null, null, _t.vt, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(n) {
        return new t(this.W, this.root.remove(n, this.W).copy(null, null, _t.vt, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var n = this.root; !n.Y(); ) {
            var i = this.W(t, n.key);
            if (0 === i) return n.value;
            i < 0 ? n = n.left : i > 0 && (n = n.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var n = 0, i = this.root; !i.Y(); ) {
            var e = this.W(t, i.key);
            if (0 === e) return n + i.left.size;
            e < 0 ? i = i.left : (
            // Count all nodes left of the node plus the node itself
            n += i.left.size + 1, i = i.right);
        }
        // Node not found
                return -1;
    }, t.prototype.Y = function() {
        return this.root.Y();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.wt = function() {
        return this.root.wt();
    }, 
    // Returns the maximum key in the map.
    t.prototype.gt = function() {
        return this.root.gt();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.bt = function(t) {
        return this.root.bt(t);
    }, t.prototype.forEach = function(t) {
        this.bt((function(n, i) {
            return t(n, i), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.bt((function(n, i) {
            return t.push(n + ":" + i), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.pt = function(t) {
        return this.root.pt(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.yt = function() {
        return new yt(this.root, null, this.W, !1);
    }, t.prototype._t = function(t) {
        return new yt(this.root, t, this.W, !1);
    }, t.prototype.It = function() {
        return new yt(this.root, null, this.W, !0);
    }, t.prototype.Tt = function(t) {
        return new yt(this.root, t, this.W, !0);
    }, t;
}(), yt = /** @class */ function() {
    function t(t, n, i, e) {
        this.Et = e, this.Dt = [];
        for (var r = 1; !t.Y(); ) if (r = n ? i(t.key, n) : 1, 
        // flip the comparison if we're going in reverse
        e && (r *= -1), r < 0) 
        // This node is less than our start key. ignore it
        t = this.Et ? t.left : t.right; else {
            if (0 === r) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Dt.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
            this.Dt.push(t), t = this.Et ? t.right : t.left;
        }
    }
    return t.prototype.Rt = function() {
        bi(this.Dt.length > 0, "getNext() called on iterator when hasNext() is false.");
        var t = this.Dt.pop(), n = {
            key: t.key,
            value: t.value
        };
        if (this.Et) for (t = t.left; !t.Y(); ) this.Dt.push(t), t = t.right; else for (t = t.right; !t.Y(); ) this.Dt.push(t), 
        t = t.left;
        return n;
    }, t.prototype.St = function() {
        return this.Dt.length > 0;
    }, t.prototype.At = function() {
        if (0 === this.Dt.length) return null;
        var t = this.Dt[this.Dt.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), _t = /** @class */ function() {
    function t(n, i, e, r, u) {
        this.key = n, this.value = i, this.color = null != e ? e : t.RED, this.left = null != r ? r : t.EMPTY, 
        this.right = null != u ? u : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(n, i, e, r, u) {
        return new t(null != n ? n : this.key, null != i ? i : this.value, null != e ? e : this.color, null != r ? r : this.left, null != u ? u : this.right);
    }, t.prototype.Y = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.bt = function(t) {
        return this.left.bt(t) || t(this.key, this.value) || this.right.bt(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.pt = function(t) {
        return this.right.pt(t) || t(this.key, this.value) || this.left.pt(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.Y() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.wt = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.gt = function() {
        return this.right.Y() ? this.key : this.right.gt();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.dt = function(t, n, i) {
        var e = this, r = i(t, e.key);
        return (e = r < 0 ? e.copy(null, null, null, e.left.dt(t, n, i), null) : 0 === r ? e.copy(null, n, null, null, null) : e.copy(null, null, null, null, e.right.dt(t, n, i))).Ct();
    }, t.prototype.Pt = function() {
        if (this.left.Y()) return t.EMPTY;
        var n = this;
        return n.left.kt() || n.left.left.kt() || (n = n.Nt()), (n = n.copy(null, null, null, n.left.Pt(), null)).Ct();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(n, i) {
        var e, r = this;
        if (i(n, r.key) < 0) r.left.Y() || r.left.kt() || r.left.left.kt() || (r = r.Nt()), 
        r = r.copy(null, null, null, r.left.remove(n, i), null); else {
            if (r.left.kt() && (r = r.Ot()), r.right.Y() || r.right.kt() || r.right.left.kt() || (r = r.Ft()), 
            0 === i(n, r.key)) {
                if (r.right.Y()) return t.EMPTY;
                e = r.right.min(), r = r.copy(e.key, e.value, null, null, r.right.Pt());
            }
            r = r.copy(null, null, null, null, r.right.remove(n, i));
        }
        return r.Ct();
    }, t.prototype.kt = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.Ct = function() {
        var t = this;
        return t.right.kt() && !t.left.kt() && (t = t.Vt()), t.left.kt() && t.left.left.kt() && (t = t.Ot()), 
        t.left.kt() && t.right.kt() && (t = t.Ut()), t;
    }, t.prototype.Nt = function() {
        var t = this.Ut();
        return t.right.left.kt() && (t = (t = (t = t.copy(null, null, null, null, t.right.Ot())).Vt()).Ut()), 
        t;
    }, t.prototype.Ft = function() {
        var t = this.Ut();
        return t.left.left.kt() && (t = (t = t.Ot()).Ut()), t;
    }, t.prototype.Vt = function() {
        var n = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, n, null);
    }, t.prototype.Ot = function() {
        var n = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, n);
    }, t.prototype.Ut = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), n = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, n);
    }, 
    // For testing.
    t.prototype.xt = function() {
        var t = this.jt();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.jt = function() {
        if (this.kt() && this.left.kt()) throw gi("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.kt()) throw gi("Right child of (" + this.key + "," + this.value + ") is red");
        var t = this.left.jt();
        if (t !== this.right.jt()) throw gi("Black depths differ");
        return t + (this.kt() ? 0 : 1);
    }, 
    // Empty node is shared between all LLRB trees.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.EMPTY = null, t.RED = !0, t.vt = !1, t;
}(), It = /** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw gi("LLRBEmptyNode has no key.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw gi("LLRBEmptyNode has no value.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw gi("LLRBEmptyNode has no color.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw gi("LLRBEmptyNode has no left child.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw gi("LLRBEmptyNode has no right child.");
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, n, i, e, r) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.dt = function(t, n, i) {
        return new _t(t, n);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, n) {
        return this;
    }, t.prototype.Y = function() {
        return !0;
    }, t.prototype.bt = function(t) {
        return !1;
    }, t.prototype.pt = function(t) {
        return !1;
    }, t.prototype.wt = function() {
        return null;
    }, t.prototype.gt = function() {
        return null;
    }, t.prototype.kt = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.xt = function() {
        return !0;
    }, t.prototype.jt = function() {
        return 0;
    }, t;
}();

// Public instance that disallows construction at runtime. This constructor is
// used when exporting Blob on firebase.firestore.Blob and will be called Blob
// publicly. Internally we still use Blob which has a type checked private
// constructor. Note that Blob and PublicBlob can be used interchangeably in
// instanceof checks.
// For our internal TypeScript code PublicBlob doesn't exist as a type, and so
// we need to use Blob as type and export it too.
// end LLRBEmptyNode
_t.EMPTY = new It;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var Tt = /** @class */ function() {
    function t(t) {
        this.W = t, this.data = new pt(this.W);
    }
    /**
     * Creates a SortedSet from the keys of the map.
     * This is currently implemented as an O(n) copy.
     */    return t.Lt = function(n) {
        var i = new t(n.W);
        return n.forEach((function(t) {
            i = i.add(t);
        })), i;
    }, t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.wt();
    }, t.prototype.last = function() {
        return this.data.gt();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */
    t.prototype.forEach = function(t) {
        this.data.bt((function(n, i) {
            return t(n), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
    t.prototype.qt = function(t, n) {
        for (var i = this.data._t(t[0]); i.St(); ) {
            var e = i.Rt();
            if (this.W(e.key, t[1]) >= 0) return;
            n(e.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.Bt = function(t, n) {
        var i;
        for (i = void 0 !== n ? this.data._t(n) : this.data.yt(); i.St(); ) {
            if (!t(i.Rt().key)) return;
        }
    }, 
    /** Finds the least element greater than or equal to `elem`. */
    t.prototype.Mt = function(t) {
        var n = this.data._t(t);
        return n.St() ? n.Rt().key : null;
    }, t.prototype.yt = function() {
        return new Et(this.data.yt());
    }, t.prototype._t = function(t) {
        return new Et(this.data._t(t));
    }, 
    /** Inserts or updates an element */
    t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).dt(t, !0));
    }, 
    /** Deletes an element */
    t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype.Y = function() {
        return this.data.Y();
    }, t.prototype.Qt = function(t) {
        var n = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return n.size < t.size && (n = t, t = this), t.forEach((function(t) {
            n = n.add(t);
        })), n;
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) return !1;
        if (this.size !== n.size) return !1;
        for (var i = this.data.yt(), e = n.data.yt(); i.St(); ) {
            var r = i.Rt().key, u = e.Rt().key;
            if (0 !== this.W(r, u)) return !1;
        }
        return !0;
    }, t.prototype.nt = function() {
        var t = [];
        return this.forEach((function(n) {
            t.push(n);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(n) {
            return t.push(n);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(n) {
        var i = new t(this.W);
        return i.data = n, i;
    }, t;
}(), Et = /** @class */ function() {
    function t(t) {
        this.Gt = t;
    }
    return t.prototype.Rt = function() {
        return this.Gt.Rt().key;
    }, t.prototype.St = function() {
        return this.Gt.St();
    }, t;
}(), Dt = /** @class */ function() {
    function t() {}
    return t.prototype.Wt = function(t, n) {
        return new Yt(n, t);
    }, t.prototype.zt = function(t, n) {
        return n;
    }, t.prototype.Kt = function(t) {
        return null;
 // Server timestamps are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(n) {
        return n instanceof t;
    }, t.instance = new t, t;
}(), Rt = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.Wt = function(t, n) {
        return this.apply(t);
    }, t.prototype.zt = function(t, n) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var n = Ct(t), i = function(t) {
            n.find((function(n) {
                return n.isEqual(t);
            })) || n.push(t);
        }, e = 0, r = this.elements; e < r.length; e++) {
            i(r[e]);
        }
        return new en(n);
    }, t.prototype.Kt = function(t) {
        return null;
 // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(n) {
        return n instanceof t && _i(n.elements, this.elements);
    }, t;
}(), St = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.Wt = function(t, n) {
        return this.apply(t);
    }, t.prototype.zt = function(t, n) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var n = Ct(t), i = function(t) {
            n = n.filter((function(n) {
                return !n.isEqual(t);
            }));
        }, e = 0, r = this.elements; e < r.length; e++) {
            i(r[e]);
        }
        return new en(n);
    }, t.prototype.Kt = function(t) {
        return null;
 // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(n) {
        return n instanceof t && _i(n.elements, this.elements);
    }, t;
}(), At = /** @class */ function() {
    function t(t) {
        this.Ht = t;
    }
    return t.prototype.Wt = function(t, n) {
        var i = this.Kt(t);
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        // Return an integer value iff the previous value and the operand is an
        // integer.
                if (i instanceof zt && this.Ht instanceof zt) {
            var e = i.Jt + this.Ht.Jt;
            return new zt(e);
        }
        e = i.Jt + this.Ht.Jt;
        return new Kt(e);
    }, t.prototype.zt = function(t, n) {
        return bi(null !== n, "Didn't receive transformResult for NUMERIC_ADD transform"), 
        n;
    }, 
    /**
     * Inspects the provided value, returning the provided value if it is already
     * a NumberValue, otherwise returning a coerced IntegerValue of 0.
     */
    t.prototype.Kt = function(t) {
        return t instanceof Gt ? t : new zt(0);
    }, t.prototype.isEqual = function(n) {
        return n instanceof t && this.Ht.isEqual(n.Ht);
    }, t;
}();

function Ct(t) {
    return t instanceof en ? t.Jt.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var Pt = /** @class */ function() {
    function t(t) {
        this.fields = t;
        // TODO(dimond): validation of FieldMask
        }
    return t.Yt = function(n) {
        return new t(n);
    }, t.Xt = function(n) {
        var i = new Tt(gt.W);
        return n.forEach((function(t) {
            return i = i.add(t);
        })), new t(i);
    }, 
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */
    t.prototype.$t = function(t) {
        var n = !1;
        return this.fields.forEach((function(i) {
            i.Z(t) && (n = !0);
        })), n;
    }, t.prototype.isEqual = function(t) {
        return this.fields.isEqual(t.fields);
    }, t;
}(), kt = /** @class */ function() {
    function t(t, n) {
        this.field = t, this.transform = n;
    }
    return t.prototype.isEqual = function(t) {
        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform);
    }, t;
}(), Nt = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
n) {
    this.version = t, this.transformResults = n;
}, Ot = /** @class */ function() {
    function t(t, n) {
        this.updateTime = t, this.exists = n, bi(void 0 === t || void 0 === n, 'Precondition can specify "exists" or "updateTime" but not both');
    }
    /** Creates a new Precondition with an exists flag. */    return t.exists = function(n) {
        return new t(void 0, n);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */
    t.updateTime = function(n) {
        return new t(n);
    }, Object.defineProperty(t.prototype, "Zt", {
        /** Returns whether this Precondition is empty. */
        get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */
    t.prototype.tn = function(t) {
        return void 0 !== this.updateTime ? t instanceof un && t.version.isEqual(this.updateTime) : void 0 !== this.exists ? this.exists === t instanceof un : (bi(this.Zt, "Precondition should be empty"), 
        !0);
    }, t.prototype.isEqual = function(t) {
        return !(n = this.updateTime, i = t.updateTime, (null != n ? !i || !n.isEqual(i) : n !== i) || this.exists !== t.exists);
        /** Helper to compare nullable (or undefined-able) objects using isEqual(). */
        var n, i;
        /** Helper to compare arrays using isEqual(). */    }, t.NONE = new t, t;
}(), Ft = /** @class */ function() {
    function t() {}
    return t.prototype.nn = function(t) {
        null != t && bi(t.key.isEqual(this.key), "Can only apply a mutation to a document with the same key");
    }, 
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.MIN.
     */
    t.in = function(t) {
        return t instanceof un ? t.version : dt.MIN;
    }, t;
}(), Vt = /** @class */ function(t) {
    function i(n, i, e) {
        var r = t.call(this) || this;
        return r.key = n, r.value = i, r.en = e, r.type = 0 /* Set */ , r;
    }
    return tslib.__extends(i, t), i.prototype.zt = function(t, n) {
        this.nn(t), bi(null == n.transformResults, "Transform results received by SetMutation.");
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        var i = n.version;
        return new un(this.key, i, {
            hasCommittedMutations: !0
        }, this.value);
    }, i.prototype.Wt = function(t, n, i) {
        if (this.nn(t), !this.en.tn(t)) return t;
        var e = Ft.in(t);
        return new un(this.key, e, {
            rn: !0
        }, this.value);
    }, i.prototype.un = function(t) {
        return null;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.en.isEqual(t.en);
    }, i;
}(Ft), Ut = /** @class */ function(t) {
    function i(n, i, e, r) {
        var u = t.call(this) || this;
        return u.key = n, u.data = i, u.sn = e, u.en = r, u.type = 1 /* Patch */ , u;
    }
    return tslib.__extends(i, t), i.prototype.zt = function(t, n) {
        if (this.nn(t), bi(null == n.transformResults, "Transform results received by PatchMutation."), 
        !this.en.tn(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new on(this.key, n.version);
        var i = this.on(t);
        return new un(this.key, n.version, {
            hasCommittedMutations: !0
        }, i);
    }, i.prototype.Wt = function(t, n, i) {
        if (this.nn(t), !this.en.tn(t)) return t;
        var e = Ft.in(t), r = this.on(t);
        return new un(this.key, e, {
            rn: !0
        }, r);
    }, i.prototype.un = function(t) {
        return null;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.key.isEqual(t.key) && this.sn.isEqual(t.sn) && this.en.isEqual(t.en);
    }, 
    /**
     * Patches the data of document if available or creates a new document. Note
     * that this does not check whether or not the precondition of this patch
     * holds.
     */
    i.prototype.on = function(t) {
        var n;
        return n = t instanceof un ? t.data() : tn.EMPTY, this.hn(n);
    }, i.prototype.hn = function(t) {
        var n = this, i = t.cn();
        return this.sn.fields.forEach((function(t) {
            if (!t.Y()) {
                var e = n.data.field(t);
                null !== e ? i.set(t, e) : i.delete(t);
            }
        })), i.an();
    }, i;
}(Ft), xt = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this) || this;
        return e.key = n, e.fieldTransforms = i, e.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        e.en = Ot.exists(!0), e;
    }
    return tslib.__extends(i, t), i.prototype.zt = function(t, n) {
        if (this.nn(t), bi(null != n.transformResults, "Transform results missing for TransformMutation."), 
        !this.en.tn(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new on(this.key, n.version);
        var i = this.fn(t), e = this.ln(t, n.transformResults), r = n.version, u = this.dn(i.data(), e);
        return new un(this.key, r, {
            hasCommittedMutations: !0
        }, u);
    }, i.prototype.Wt = function(t, n, i) {
        if (this.nn(t), !this.en.tn(t)) return t;
        var e = this.fn(t), r = this.vn(i, t, n), u = this.dn(e.data(), r);
        return new un(this.key, e.version, {
            rn: !0
        }, u);
    }, i.prototype.un = function(t) {
        for (var n = null, i = 0, e = this.fieldTransforms; i < e.length; i++) {
            var r = e[i], u = t instanceof un ? t.field(r.field) : void 0, s = r.transform.Kt(u || null);
            null != s && (n = null == n ? tn.wn().set(r.field, s) : n.set(r.field, s));
        }
        return n ? n.an() : null;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.key.isEqual(t.key) && _i(this.fieldTransforms, t.fieldTransforms) && this.en.isEqual(t.en);
    }, 
    /**
     * Asserts that the given MaybeDocument is actually a Document and verifies
     * that it matches the key for this mutation. Since we only support
     * transformations with precondition exists this method is guaranteed to be
     * safe.
     */
    i.prototype.fn = function(t) {
        return bi(t instanceof un, "Unknown MaybeDocument type " + t), bi(t.key.isEqual(this.key), "Can only transform a document with the same key"), 
        t;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use after a
     * TransformMutation has been acknowledged by the server.
     *
     * @param baseDoc The document prior to applying this mutation batch.
     * @param serverTransformResults The transform results received by the server.
     * @return The transform results list.
     */
    i.prototype.ln = function(t, n) {
        var i = [];
        bi(this.fieldTransforms.length === n.length, "server transform result count (" + n.length + ") should match field transform count (" + this.fieldTransforms.length + ")");
        for (var e = 0; e < n.length; e++) {
            var r = this.fieldTransforms[e], u = r.transform, s = null;
            t instanceof un && (s = t.field(r.field)), i.push(u.zt(s, n[e]));
        }
        return i;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * TransformMutation locally.
     *
     * @param localWriteTime The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @param maybeDoc The current state of the document after applying all
     *     previous mutations.
     * @param baseDoc The document prior to applying this mutation batch.
     * @return The transform results list.
     */
    i.prototype.vn = function(t, n, i) {
        for (var e = [], r = 0, u = this.fieldTransforms; r < u.length; r++) {
            var s = u[r], o = s.transform, h = null;
            n instanceof un && (h = n.field(s.field)), null === h && i instanceof un && (
            // If the current document does not contain a value for the mutated
            // field, use the value that existed before applying this mutation
            // batch. This solves an edge case where a PatchMutation clears the
            // values in a nested map before the TransformMutation is applied.
            h = i.field(s.field)), e.push(o.Wt(h, t));
        }
        return e;
    }, i.prototype.dn = function(t, n) {
        bi(n.length === this.fieldTransforms.length, "TransformResults length mismatch.");
        for (var i = t.cn(), e = 0; e < this.fieldTransforms.length; e++) {
            var r = this.fieldTransforms[e].field;
            i.set(r, n[e]);
        }
        return i.an();
    }, i;
}(Ft), jt = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this) || this;
        return e.key = n, e.en = i, e.type = 3 /* Delete */ , e;
    }
    return tslib.__extends(i, t), i.prototype.zt = function(t, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return this.nn(t), bi(null == n.transformResults, "Transform results received by DeleteMutation."), 
        new sn(this.key, n.version, {
            hasCommittedMutations: !0
        });
    }, i.prototype.Wt = function(t, n, i) {
        return this.nn(t), this.en.tn(t) ? (t && bi(t.key.isEqual(this.key), "Can only apply mutation to document with same key"), 
        new sn(this.key, dt.q())) : t;
    }, i.prototype.un = function(t) {
        return null;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.key.isEqual(t.key) && this.en.isEqual(t.en);
    }, i;
}(Ft), Lt = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this) || this;
        return e.key = n, e.en = i, e.type = 4 /* Verify */ , e;
    }
    return tslib.__extends(i, t), i.prototype.zt = function(t, n) {
        gi("VerifyMutation should only be used in Transactions.");
    }, i.prototype.Wt = function(t, n, i) {
        gi("VerifyMutation should only be used in Transactions.");
    }, i.prototype.un = function(t) {
        gi("VerifyMutation should only be used in Transactions.");
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.key.isEqual(t.key) && this.en.isEqual(t.en);
    }, i;
}(Ft), qt = /** @class */ function() {
    function t(t, n) {
        this.mn = t, this.timestampsInSnapshots = n;
    }
    return t.gn = function(n, i) {
        switch (n.serverTimestamps) {
          case "estimate":
            return new t(1 /* Estimate */ , i);

          case "previous":
            return new t(2 /* Previous */ , i);

          case "none":
 // Fall-through intended.
                      case void 0:
            return new t(0 /* Default */ , i);

          default:
            return gi("fromSnapshotOptions() called with invalid options.");
        }
    }, t;
}(), Bt = /** @class */ function() {
    function t() {}
    return t.prototype.toString = function() {
        var t = this.value();
        return null === t ? "null" : t.toString();
    }, t.prototype.bn = function(t) {
        return bi(this.pn !== t.pn, "Default compareTo should not be used for values of same type."), 
        yi(this.pn, t.pn);
    }, t;
}(), Mt = /** @class */ function(t) {
    function i() {
        var n = t.call(this) || this;
        return n.pn = 0 /* NullValue */ , 
        // internalValue is unused but we add it to work around
        // https://github.com/Microsoft/TypeScript/issues/15585
        n.Jt = null, n;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return null;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i;
    }, i.prototype.B = function(t) {
        return t instanceof i ? 0 : this.bn(t);
    }, i.prototype.P = function() {
        return 4;
    }, i.yn = new i, i;
}(Bt), Qt = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this) || this;
        return i.Jt = n, i.pn = 1 /* BooleanValue */ , i;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return this.Jt;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.Jt === t.Jt;
    }, i.prototype.B = function(t) {
        return t instanceof i ? yi(this.Jt, t.Jt) : this.bn(t);
    }, i.prototype.P = function() {
        return 4;
    }, i.of = function(t) {
        return t ? i._n : i.In;
    }, i._n = new i(!0), i.In = new i(!1), i;
}(Bt), Gt = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this) || this;
        return i.Jt = n, i.pn = 2 /* NumberValue */ , i;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return this.Jt;
    }, i.prototype.B = function(t) {
        return t instanceof i ? (n = this.Jt, e = t.Jt, n < e ? -1 : n > e ? 1 : n === e ? 0 : 
        // one or both are NaN.
        isNaN(n) ? isNaN(e) ? 0 : -1 : 1) : this.bn(t);
        /** Utility function to compare doubles (using Firestore semantics for NaN). */
        var n, e;
        /**
 * Utility function to check numbers for equality using Firestore semantics
 * (NaN === NaN, -0.0 !== 0.0).
 */    }, i.prototype.P = function() {
        return 8;
    }, i;
}(Bt);

/** A field path and the TransformOperation to perform upon it. */ function Wt(t, n) {
    // Implemented based on Object.is() polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
}

var zt = /** @class */ function(t) {
    function i() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return tslib.__extends(i, t), i.prototype.isEqual = function(t) {
        // NOTE: DoubleValue and IntegerValue instances may compareTo() the same,
        // but that doesn't make them equal via isEqual().
        return t instanceof i && Wt(this.Jt, t.Jt);
    }, i;
}(Gt), Kt = /** @class */ function(t) {
    function i() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return tslib.__extends(i, t), i.prototype.isEqual = function(t) {
        // NOTE: DoubleValue and IntegerValue instances may compareTo() the same,
        // but that doesn't make them equal via isEqual().
        return t instanceof i && Wt(this.Jt, t.Jt);
    }, i.Tn = new i(NaN), i.POSITIVE_INFINITY = new i(1 / 0), i.NEGATIVE_INFINITY = new i(-1 / 0), 
    i;
}(Gt), Ht = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this) || this;
        return i.Jt = n, i.pn = 4 /* StringValue */ , i;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return this.Jt;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.Jt === t.Jt;
    }, i.prototype.B = function(t) {
        return t instanceof i ? yi(this.Jt, t.Jt) : this.bn(t);
    }, i.prototype.P = function() {
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures:
        // "JavaScript's String type is [...] a set of elements of 16-bit unsigned
        // integer values"
        return 2 * this.Jt.length;
    }, i;
}(Bt), Jt = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this) || this;
        return i.Jt = n, i.pn = 3 /* TimestampValue */ , i;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return !t || t.timestampsInSnapshots ? this.Jt : this.Jt.toDate();
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.Jt.isEqual(t.Jt);
    }, i.prototype.B = function(t) {
        return t instanceof i ? this.Jt.F(t.Jt) : t instanceof Yt ? -1 : this.bn(t);
    }, i.prototype.P = function() {
        // Timestamps are made up of two distinct numbers (seconds + nanoseconds)
        return 16;
    }, i;
}(Bt), Yt = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this) || this;
        return e.En = n, e.previousValue = i, e.pn = 3 /* TimestampValue */ , e;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return t && 1 /* Estimate */ === t.mn ? new Jt(this.En).value(t) : t && 2 /* Previous */ === t.mn && this.previousValue ? this.previousValue.value(t) : null;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.En.isEqual(t.En);
    }, i.prototype.B = function(t) {
        return t instanceof i ? this.En.F(t.En) : t instanceof Jt ? 1 : this.bn(t);
    }, i.prototype.toString = function() {
        return "<ServerTimestamp localTime=" + this.En.toString() + ">";
    }, i.prototype.P = function() {
        /* localWriteTime */
        return 16 + (this.previousValue ? this.previousValue.P() : 0);
    }, i;
}(Bt), Xt = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this) || this;
        return i.Jt = n, i.pn = 5 /* BlobValue */ , i;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return this.Jt;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.Jt.isEqual(t.Jt);
    }, i.prototype.B = function(t) {
        return t instanceof i ? this.Jt.F(t.Jt) : this.bn(t);
    }, i.prototype.P = function() {
        return this.Jt.O();
    }, i;
}(Bt), $t = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this) || this;
        return e.Dn = n, e.key = i, e.pn = 6 /* RefValue */ , e;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return this.key;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && (this.key.isEqual(t.key) && this.Dn.isEqual(t.Dn));
    }, i.prototype.B = function(t) {
        if (t instanceof i) {
            var n = this.Dn.B(t.Dn);
            return 0 !== n ? n : bt.W(this.key, t.key);
        }
        return this.bn(t);
    }, i.prototype.P = function() {
        return this.Dn.projectId.length + this.Dn.database.length + this.key.toString().length;
    }, i;
}(Bt), Zt = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this) || this;
        return i.Jt = n, i.pn = 7 /* GeoPointValue */ , i;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return this.Jt;
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.Jt.isEqual(t.Jt);
    }, i.prototype.B = function(t) {
        return t instanceof i ? this.Jt.F(t.Jt) : this.bn(t);
    }, i.prototype.P = function() {
        // GeoPoints are made up of two distinct numbers (latitude + longitude)
        return 16;
    }, i;
}(Bt), tn = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this) || this;
        return i.Jt = n, i.pn = 9 /* ObjectValue */ , i;
    }
    /** Returns a new ObjectValueBuilder instance that is based on an empty object. */    return tslib.__extends(i, t), 
    i.wn = function() {
        return new nn(i.EMPTY.Jt);
    }, i.prototype.value = function(t) {
        var n = {};
        return this.Jt.bt((function(i, e) {
            n[i] = e.value(t);
        })), n;
    }, i.prototype.forEach = function(t) {
        this.Jt.bt(t);
    }, i.prototype.isEqual = function(t) {
        if (t instanceof i) {
            for (var n = this.Jt.yt(), e = t.Jt.yt(); n.St() && e.St(); ) {
                var r = n.Rt(), u = e.Rt();
                if (r.key !== u.key || !r.value.isEqual(u.value)) return !1;
            }
            return !n.St() && !e.St();
        }
        return !1;
    }, i.prototype.B = function(t) {
        if (t instanceof i) {
            for (var n = this.Jt.yt(), e = t.Jt.yt(); n.St() && e.St(); ) {
                var r = n.Rt(), u = e.Rt(), s = yi(r.key, u.key) || r.value.B(u.value);
                if (s) return s;
            }
            // Only equal if both iterators are exhausted
                        return yi(n.St(), e.St());
        }
        return this.bn(t);
    }, i.prototype.contains = function(t) {
        return null !== this.field(t);
    }, i.prototype.field = function(t) {
        bi(!t.Y(), "Can't get field of empty path");
        var n = this;
        return t.forEach((function(t) {
            n = n instanceof i ? n.Jt.get(t) : null;
        })), n;
    }, 
    /**
     * Returns a FieldMask built from all FieldPaths starting from this ObjectValue,
     * including paths from nested objects.
     */
    i.prototype.sn = function() {
        var t = new Tt(gt.W);
        return this.Jt.forEach((function(n, e) {
            var r = new gt([ n ]);
            if (e instanceof i) {
                var u = e.sn().fields;
                u.Y() ? 
                // Preserve the empty map by adding it to the FieldMask.
                t = t.add(r) : 
                // For nested and non-empty ObjectValues, add the FieldPath of the
                // leaf nodes.
                u.forEach((function(n) {
                    t = t.add(r.child(n));
                }));
            } else t = t.add(r);
        })), Pt.Yt(t);
    }, i.prototype.P = function() {
        var t = 0;
        return this.Jt.bt((function(n, i) {
            t += n.length + i.P();
        })), t;
    }, i.prototype.toString = function() {
        return this.Jt.toString();
    }, 
    /** Creates a ObjectValueBuilder instance that is based on the current value. */
    i.prototype.cn = function() {
        return new nn(this.Jt);
    }, i.EMPTY = new i(new pt(yi)), i;
}(Bt), nn = /** @class */ function() {
    function t(t) {
        this.Jt = t;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    return t.prototype.set = function(t, n) {
        bi(!t.Y(), "Cannot set field for empty path on ObjectValue");
        var i = t.X();
        if (1 === t.length) this.Jt = this.Jt.dt(i, n); else {
            // nested field
            var e = this.Jt.get(i), r = (e instanceof tn ? e : tn.EMPTY).cn().set(t.H(), n).an();
            this.Jt = this.Jt.dt(i, r);
        }
        return this;
    }, 
    /**
     * Removes the field at the current path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        bi(!t.Y(), "Cannot delete field for empty path on ObjectValue");
        var n = t.X();
        if (1 === t.length) this.Jt = this.Jt.remove(n); else {
            // nested field
            var i = this.Jt.get(n);
            if (i instanceof tn) {
                var e = i.cn().delete(t.H()).an();
                this.Jt = this.Jt.dt(t.X(), e);
            }
        }
        return this;
    }, t.prototype.an = function() {
        return new tn(this.Jt);
    }, t;
}(), en = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this) || this;
        return i.Jt = n, i.pn = 8 /* ArrayValue */ , i;
    }
    return tslib.__extends(i, t), i.prototype.value = function(t) {
        return this.Jt.map((function(n) {
            return n.value(t);
        }));
    }, 
    /**
     * Returns true if the given value is contained in this array.
     */
    i.prototype.contains = function(t) {
        for (var n = 0, i = this.Jt; n < i.length; n++) {
            if (i[n].isEqual(t)) return !0;
        }
        return !1;
    }, i.prototype.forEach = function(t) {
        this.Jt.forEach(t);
    }, i.prototype.isEqual = function(t) {
        if (t instanceof i) {
            if (this.Jt.length !== t.Jt.length) return !1;
            for (var n = 0; n < this.Jt.length; n++) if (!this.Jt[n].isEqual(t.Jt[n])) return !1;
            return !0;
        }
        return !1;
    }, i.prototype.B = function(t) {
        if (t instanceof i) {
            for (var n = Math.min(this.Jt.length, t.Jt.length), e = 0; e < n; e++) {
                var r = this.Jt[e].B(t.Jt[e]);
                if (r) return r;
            }
            return yi(this.Jt.length, t.Jt.length);
        }
        return this.bn(t);
    }, i.prototype.P = function() {
        return this.Jt.reduce((function(t, n) {
            return t + n.P();
        }), 0);
    }, i.prototype.toString = function() {
        return "[" + this.Jt.map((function(t) {
            return t.toString();
        })).join(",") + "]";
    }, i;
}(Bt), rn = /** @class */ function() {
    function t(t, n) {
        this.key = t, this.version = n;
    }
    return t.Rn = function(t, n) {
        return bt.W(t.key, n.key);
    }, t;
}(), un = /** @class */ function(t) {
    function i(n, i, e, r, u, s) {
        var o = t.call(this, n, i) || this;
        return o.Sn = r, o.proto = u, o.converter = s, bi(void 0 !== o.Sn || void 0 !== o.proto && void 0 !== o.converter, "If objectValue is not defined, proto and converter need to be set."), 
        o.rn = !!e.rn, o.hasCommittedMutations = !!e.hasCommittedMutations, o;
    }
    return tslib.__extends(i, t), i.prototype.field = function(t) {
        if (this.Sn) return this.Sn.field(t);
        this.An || (
        // TODO(b/136090445): Remove the cache when `getField` is no longer
        // called during Query ordering.
        this.An = new Map);
        var n = t.it(), i = this.An.get(n);
        if (void 0 === i) {
            // Instead of deserializing the full Document proto, we only
            // deserialize the value at the requested field path. This speeds up
            // Query execution as query filters can discard documents based on a
            // single field.
            var e = this.Cn(t);
            i = void 0 === e ? null : this.converter(e), this.An.set(n, i);
        }
        return i;
    }, i.prototype.data = function() {
        var t = this;
        if (!this.Sn) {
            var n = tn.wn();
            V(this.proto.fields || {}, (function(i, e) {
                n.set(new gt([ i ]), t.converter(e));
            })), this.Sn = n.an(), 
            // Once objectValue is computed, values inside the fieldValueCache are no
            // longer accessed.
            this.An = void 0;
        }
        return this.Sn;
    }, i.prototype.value = function() {
        return this.data().value();
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.rn === t.rn && this.hasCommittedMutations === t.hasCommittedMutations && this.data().isEqual(t.data());
    }, i.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.data().toString() + ", {hasLocalMutations: " + this.rn + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(i.prototype, "hasPendingWrites", {
        get: function() {
            return this.rn || this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Returns the nested Protobuf value for 'path`. Can only be called if
     * `proto` was provided at construction time.
     */
    i.prototype.Cn = function(t) {
        bi(void 0 !== this.proto, "Can only call getProtoField() when proto is defined");
        for (var n = this.proto.fields ? this.proto.fields[t.X()] : void 0, i = 1; i < t.length; ++i) {
            if (!n || !n.mapValue || !n.mapValue.fields) return;
            n = n.mapValue.fields[t.get(i)];
        }
        return n;
    }, i.Pn = function(t, n, i) {
        var e = n.field(t), r = i.field(t);
        return null !== e && null !== r ? e.B(r) : gi("Trying to compare documents on fields that don't exist");
    }, i;
}(rn), sn = /** @class */ function(t) {
    function i(n, i, e) {
        var r = t.call(this, n, i) || this;
        return r.hasCommittedMutations = !(!e || !e.hasCommittedMutations), r;
    }
    return tslib.__extends(i, t), i.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(i.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.isEqual = function(t) {
        return t instanceof i && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, i;
}(rn), on = /** @class */ function(t) {
    function i() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return tslib.__extends(i, t), i.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(i.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.isEqual = function(t) {
        return t instanceof i && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, i;
}(rn);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns whether a variable is either undefined or null.
 */
function hn(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function cn(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function an(t) {
    return "number" == typeof t && Number.isInteger(t) && !cn(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A Target represents the WatchTarget representation of a Query, which is used
 * by the LocalStore and the RemoteStore to keep track of and to execute
 * backend queries. While a Query can represent multiple Targets, each Targets
 * maps to a single WatchTarget in RemoteStore and a single TargetData entry
 * in persistence.
 */ var fn, ln, dn = /** @class */ function() {
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this constructor, because `Query` provides an implicit `orderBy`
     * property.
     */
    function t(t, n, i, e, r, u, s) {
        void 0 === n && (n = null), void 0 === i && (i = []), void 0 === e && (e = []), 
        void 0 === r && (r = null), void 0 === u && (u = null), void 0 === s && (s = null), 
        this.path = t, this.collectionGroup = n, this.orderBy = i, this.filters = e, this.limit = r, 
        this.startAt = u, this.endAt = s, this.kn = null;
    }
    return t.prototype.canonicalId = function() {
        if (null === this.kn) {
            var t = this.path.it();
            null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:";
            for (var n = 0, i = this.filters; n < i.length; n++) {
                t += i[n].canonicalId(), t += ",";
            }
            t += "|ob:";
            // TODO(dimond): make this collision resistant
            for (var e = 0, r = this.orderBy; e < r.length; e++) {
                t += r[e].canonicalId(), t += ",";
            }
            hn(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), 
            this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.kn = t;
        }
        return this.kn;
    }, t.prototype.toString = function() {
        var t = this.path.it();
        return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 
        this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), 
        hn(this.limit) || (t += ", limit: " + this.limit), this.orderBy.length > 0 && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), 
        this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), 
        "Target(" + t + ")";
    }, t.prototype.isEqual = function(t) {
        if (this.limit !== t.limit) return !1;
        if (this.orderBy.length !== t.orderBy.length) return !1;
        for (var n = 0; n < this.orderBy.length; n++) if (!this.orderBy[n].isEqual(t.orderBy[n])) return !1;
        if (this.filters.length !== t.filters.length) return !1;
        for (n = 0; n < this.filters.length; n++) if (!this.filters[n].isEqual(t.filters[n])) return !1;
        return this.collectionGroup === t.collectionGroup && (!!this.path.isEqual(t.path) && (!!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt)));
    }, t.prototype.Nn = function() {
        return bt.ct(this.path) && null === this.collectionGroup && 0 === this.filters.length;
    }, t;
}(), vn = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, n, i, e, r, u, s, o) {
        void 0 === n && (n = null), void 0 === i && (i = []), void 0 === e && (e = []), 
        void 0 === r && (r = null), void 0 === u && (u = "F" /* First */), void 0 === s && (s = null), 
        void 0 === o && (o = null), this.path = t, this.collectionGroup = n, this.On = i, 
        this.filters = e, this.limit = r, this.Fn = u, this.startAt = s, this.endAt = o, 
        this.Vn = null, 
        // The corresponding `Target` of this `Query` instance.
        this.Un = null, this.startAt && this.xn(this.startAt), this.endAt && this.xn(this.endAt);
    }
    return t.jn = function(n) {
        return new t(n);
    }, Object.defineProperty(t.prototype, "orderBy", {
        get: function() {
            if (null === this.Vn) {
                var t = this.Ln(), n = this.qn();
                if (null !== t && null === n) 
                // In order to implicitly add key ordering, we must also add the
                // inequality filter field for it to be a valid query.
                // Note that the default inequality field and key ordering is ascending.
                t.st() ? this.Vn = [ Rn ] : this.Vn = [ new Dn(t), Rn ]; else {
                    bi(null === t || null !== n && t.isEqual(n), "First orderBy should match inequality field."), 
                    this.Vn = [];
                    for (var i = !1, e = 0, r = this.On; e < r.length; e++) {
                        var u = r[e];
                        this.Vn.push(u), u.field.st() && (i = !0);
                    }
                    if (!i) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var s = this.On.length > 0 ? this.On[this.On.length - 1].dir : Tn.ASCENDING;
                        this.Vn.push(s === Tn.ASCENDING ? Rn : Sn);
                    }
                }
            }
            return this.Vn;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Bn = function(n) {
        bi(null == this.Ln() || !(n instanceof gn) || !n.Mn() || n.field.isEqual(this.Ln()), "Query must only have one inequality field."), 
        bi(!this.Nn(), "No filtering allowed for document query");
        var i = this.filters.concat([ n ]);
        return new t(this.path, this.collectionGroup, this.On.slice(), i, this.limit, this.Fn, this.startAt, this.endAt);
    }, t.prototype.Qn = function(n) {
        bi(!this.startAt && !this.endAt, "Bounds must be set after orderBy");
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var i = this.On.concat([ n ]);
        return new t(this.path, this.collectionGroup, i, this.filters.slice(), this.limit, this.Fn, this.startAt, this.endAt);
    }, t.prototype.Gn = function(n) {
        return new t(this.path, this.collectionGroup, this.On.slice(), this.filters.slice(), n, "F" /* First */ , this.startAt, this.endAt);
    }, t.prototype.Wn = function(n) {
        return new t(this.path, this.collectionGroup, this.On.slice(), this.filters.slice(), n, "L" /* Last */ , this.startAt, this.endAt);
    }, t.prototype.zn = function(n) {
        return new t(this.path, this.collectionGroup, this.On.slice(), this.filters.slice(), this.limit, this.Fn, n, this.endAt);
    }, t.prototype.Kn = function(n) {
        return new t(this.path, this.collectionGroup, this.On.slice(), this.filters.slice(), this.limit, this.Fn, this.startAt, n);
    }, 
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    t.prototype.Hn = function(n) {
        return new t(n, 
        /*collectionGroup=*/ null, this.On.slice(), this.filters.slice(), this.limit, this.Fn, this.startAt, this.endAt);
    }, 
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    t.prototype.Jn = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.On.length || 1 === this.On.length && this.On[0].field.st());
    }, 
    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    t.prototype.canonicalId = function() {
        return this.Yn().canonicalId() + "|lt:" + this.Fn;
    }, t.prototype.toString = function() {
        return "Query(target=" + this.Yn().toString() + "; limitType=" + this.Fn + ")";
    }, t.prototype.isEqual = function(t) {
        return this.Yn().isEqual(t.Yn()) && this.Fn === t.Fn;
    }, t.prototype.Xn = function(t, n) {
        for (var i = !1, e = 0, r = this.orderBy; e < r.length; e++) {
            var u = r[e], s = u.compare(t, n);
            if (0 !== s) return s;
            i = i || u.field.st();
        }
        // Assert that we actually compared by key
                return bi(i, "orderBy used that doesn't compare on key field"), 0;
    }, t.prototype.matches = function(t) {
        return this.$n(t) && this.Zn(t) && this.ti(t) && this.ni(t);
    }, t.prototype.ii = function() {
        return !hn(this.limit) && "F" /* First */ === this.Fn;
    }, t.prototype.ei = function() {
        return !hn(this.limit) && "L" /* Last */ === this.Fn;
    }, t.prototype.qn = function() {
        return this.On.length > 0 ? this.On[0].field : null;
    }, t.prototype.Ln = function() {
        for (var t = 0, n = this.filters; t < n.length; t++) {
            var i = n[t];
            if (i instanceof gn && i.Mn()) return i.field;
        }
        return null;
    }, 
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    t.prototype.ri = function(t) {
        for (var n = 0, i = this.filters; n < i.length; n++) {
            var e = i[n];
            if (e instanceof gn && t.indexOf(e.op) >= 0) return e.op;
        }
        return null;
    }, t.prototype.Nn = function() {
        return this.Yn().Nn();
    }, t.prototype.ui = function() {
        return null !== this.collectionGroup;
    }, 
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    t.prototype.Yn = function() {
        if (!this.Un) if ("F" /* First */ === this.Fn) this.Un = new dn(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            for (
            // Flip the orderBy directions since we want the last results
            var t = [], n = 0, i = this.orderBy; n < i.length; n++) {
                var e = i[n], r = e.dir === Tn.DESCENDING ? Tn.ASCENDING : Tn.DESCENDING;
                t.push(new Dn(e.field, r));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        var u = this.endAt ? new En(this.endAt.position, !this.endAt.before) : null, s = this.startAt ? new En(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
            this.Un = new dn(this.path, this.collectionGroup, t, this.filters, this.limit, u, s);
        }
        return this.Un;
    }, t.prototype.$n = function(t) {
        var n = t.key.path;
        return null !== this.collectionGroup ? t.key.at(this.collectionGroup) && this.path.Z(n) : bt.ct(this.path) ? this.path.isEqual(n) : this.path.tt(n);
    }, 
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    t.prototype.Zn = function(t) {
        for (var n = 0, i = this.On; n < i.length; n++) {
            var e = i[n];
            // order by key always matches
                        if (!e.field.st() && null === t.field(e.field)) return !1;
        }
        return !0;
    }, t.prototype.ti = function(t) {
        for (var n = 0, i = this.filters; n < i.length; n++) {
            if (!i[n].matches(t)) return !1;
        }
        return !0;
    }, 
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    t.prototype.ni = function(t) {
        return !(this.startAt && !this.startAt.si(this.orderBy, t)) && (!this.endAt || !this.endAt.si(this.orderBy, t));
    }, t.prototype.xn = function(t) {
        bi(t.position.length <= this.orderBy.length, "Bound is longer than orderBy");
    }, t;
}(), wn = function() {}, mn = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.et = function(n) {
        switch (n) {
          case "<":
            return t.LESS_THAN;

          case "<=":
            return t.LESS_THAN_OR_EQUAL;

          case "==":
            return t.EQUAL;

          case ">=":
            return t.GREATER_THAN_OR_EQUAL;

          case ">":
            return t.GREATER_THAN;

          case "array-contains":
            return t.ARRAY_CONTAINS;

          case "in":
            return t.IN;

          case "array-contains-any":
            return t.ARRAY_CONTAINS_ANY;

          default:
            return gi("Unknown FieldFilter operator: " + n);
        }
    }, t.prototype.toString = function() {
        return this.name;
    }, t.prototype.isEqual = function(t) {
        return this.name === t.name;
    }, t.LESS_THAN = new t("<"), t.LESS_THAN_OR_EQUAL = new t("<="), t.EQUAL = new t("=="), 
    t.GREATER_THAN = new t(">"), t.GREATER_THAN_OR_EQUAL = new t(">="), t.ARRAY_CONTAINS = new t("array-contains"), 
    t.IN = new t("in"), t.ARRAY_CONTAINS_ANY = new t("array-contains-any"), t;
}(), gn = /** @class */ function(t) {
    function i(n, i, e) {
        var r = t.call(this) || this;
        return r.field = n, r.op = i, r.value = e, r;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return tslib.__extends(i, t), i.create = function(t, n, e) {
        if (t.st()) return n === mn.IN ? (bi(e instanceof en, "Comparing on key with IN, but filter value not an ArrayValue"), 
        bi(e.Jt.every((function(t) {
            return t instanceof $t;
        })), "Comparing on key with IN, but an array value was not a RefValue"), new pn(t, e)) : (bi(e instanceof $t, "Comparing on key, but filter value not a RefValue"), 
        bi(n !== mn.ARRAY_CONTAINS && n !== mn.ARRAY_CONTAINS_ANY, "'" + n.toString() + "' queries don't make sense on document keys."), 
        new bn(t, n, e));
        if (e.isEqual(Mt.yn)) {
            if (n !== mn.EQUAL) throw new E(T.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new i(t, n, e);
        }
        if (e.isEqual(Kt.Tn)) {
            if (n !== mn.EQUAL) throw new E(T.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new i(t, n, e);
        }
        return n === mn.ARRAY_CONTAINS ? new yn(t, e) : n === mn.IN ? (bi(e instanceof en, "IN filter has invalid value: " + e.toString()), 
        new _n(t, e)) : n === mn.ARRAY_CONTAINS_ANY ? (bi(e instanceof en, "ARRAY_CONTAINS_ANY filter has invalid value: " + e.toString()), 
        new In(t, e)) : new i(t, n, e);
    }, i.prototype.matches = function(t) {
        var n = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== n && this.value.pn === n.pn && this.oi(n.B(this.value));
    }, i.prototype.oi = function(t) {
        switch (this.op) {
          case mn.LESS_THAN:
            return t < 0;

          case mn.LESS_THAN_OR_EQUAL:
            return t <= 0;

          case mn.EQUAL:
            return 0 === t;

          case mn.GREATER_THAN:
            return t > 0;

          case mn.GREATER_THAN_OR_EQUAL:
            return t >= 0;

          default:
            return gi("Unknown FieldFilter operator: " + this.op);
        }
    }, i.prototype.Mn = function() {
        return [ mn.LESS_THAN, mn.LESS_THAN_OR_EQUAL, mn.GREATER_THAN, mn.GREATER_THAN_OR_EQUAL ].indexOf(this.op) >= 0;
    }, i.prototype.canonicalId = function() {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return this.field.it() + this.op.toString() + this.value.toString();
    }, i.prototype.isEqual = function(t) {
        return t instanceof i && (this.op.isEqual(t.op) && this.field.isEqual(t.field) && this.value.isEqual(t.value));
    }, i.prototype.toString = function() {
        return this.field.it() + " " + this.op + " " + this.value.value();
    }, i;
}(wn), bn = /** @class */ function(t) {
    function i() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return tslib.__extends(i, t), i.prototype.matches = function(t) {
        var n = this.value, i = bt.W(t.key, n.key);
        return this.oi(i);
    }, i;
}(gn), pn = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this, n, mn.IN, i) || this;
        return e.value = i, e;
    }
    return tslib.__extends(i, t), i.prototype.matches = function(t) {
        return this.value.Jt.some((function(n) {
            return t.key.isEqual(n.key);
        }));
    }, i;
}(gn), yn = /** @class */ function(t) {
    function i(n, i) {
        return t.call(this, n, mn.ARRAY_CONTAINS, i) || this;
    }
    return tslib.__extends(i, t), i.prototype.matches = function(t) {
        var n = t.field(this.field);
        return n instanceof en && n.contains(this.value);
    }, i;
}(gn), _n = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this, n, mn.IN, i) || this;
        return e.value = i, e;
    }
    return tslib.__extends(i, t), i.prototype.matches = function(t) {
        var n = this.value, i = t.field(this.field);
        return null !== i && n.contains(i);
    }, i;
}(gn), In = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this, n, mn.ARRAY_CONTAINS_ANY, i) || this;
        return e.value = i, e;
    }
    return tslib.__extends(i, t), i.prototype.matches = function(t) {
        var n = this, i = t.field(this.field);
        return i instanceof en && i.Jt.some((function(t) {
            return n.value.contains(t);
        }));
    }, i;
}(gn), Tn = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.prototype.toString = function() {
        return this.name;
    }, t.ASCENDING = new t("asc"), t.DESCENDING = new t("desc"), t;
}(), En = /** @class */ function() {
    function t(t, n) {
        this.position = t, this.before = n;
    }
    return t.prototype.canonicalId = function() {
        for (
        // TODO(b/29183165): Make this collision robust.
        var t = this.before ? "b:" : "a:", n = 0, i = this.position; n < i.length; n++) {
            t += i[n].toString();
        }
        return t;
    }, 
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    t.prototype.si = function(t, n) {
        bi(this.position.length <= t.length, "Bound has more components than query's orderBy");
        for (var i = 0, e = 0; e < this.position.length; e++) {
            var r = t[e], u = this.position[e];
            if (r.field.st()) bi(u instanceof $t, "Bound has a non-key value where the key path is being used."), 
            i = bt.W(u.key, n.key); else {
                var s = n.field(r.field);
                bi(null !== s, "Field should exist since document matched the orderBy already."), 
                i = u.B(s);
            }
            if (r.dir === Tn.DESCENDING && (i *= -1), 0 !== i) break;
        }
        return this.before ? i <= 0 : i < 0;
    }, t.prototype.isEqual = function(t) {
        if (null === t) return !1;
        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
        for (var n = 0; n < this.position.length; n++) {
            var i = this.position[n], e = t.position[n];
            if (!i.isEqual(e)) return !1;
        }
        return !0;
    }, t;
}(), Dn = /** @class */ function() {
    function t(t, n) {
        this.field = t, void 0 === n && (n = Tn.ASCENDING), this.dir = n, this.hi = t.st();
    }
    return t.prototype.compare = function(t, n) {
        var i = this.hi ? un.Rn(t, n) : un.Pn(this.field, t, n);
        switch (this.dir) {
          case Tn.ASCENDING:
            return i;

          case Tn.DESCENDING:
            return -1 * i;

          default:
            return gi("Unknown direction: " + this.dir);
        }
    }, t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return this.field.it() + this.dir.toString();
    }, t.prototype.toString = function() {
        return this.field.it() + " (" + this.dir + ")";
    }, t.prototype.isEqual = function(t) {
        return this.dir === t.dir && this.field.isEqual(t.field);
    }, t;
}(), Rn = new Dn(gt.ot(), Tn.ASCENDING), Sn = new Dn(gt.ot(), Tn.DESCENDING), An = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    n, 
    /** The purpose of the target. */
    i, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    e, 
    /** The latest snapshot version seen for this target. */
    r, 
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */
    u, 
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
    s) {
        void 0 === r && (r = dt.MIN), void 0 === u && (u = dt.MIN), void 0 === s && (s = rt.k), 
        this.target = t, this.targetId = n, this.ci = i, this.sequenceNumber = e, this.ai = r, 
        this.lastLimboFreeSnapshotVersion = u, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.fi = function(n) {
        return new t(this.target, this.targetId, this.ci, n, this.ai, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.li = function(n, i) {
        return new t(this.target, this.targetId, this.ci, this.sequenceNumber, i, this.lastLimboFreeSnapshotVersion, n);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.di = function(n) {
        return new t(this.target, this.targetId, this.ci, this.sequenceNumber, this.ai, n, this.resumeToken);
    }, t.prototype.isEqual = function(t) {
        return this.targetId === t.targetId && this.ci === t.ci && this.sequenceNumber === t.sequenceNumber && this.ai.isEqual(t.ai) && this.lastLimboFreeSnapshotVersion.isEqual(t.lastLimboFreeSnapshotVersion) && this.resumeToken.isEqual(t.resumeToken) && this.target.isEqual(t.target);
    }, t;
}(), Cn = /** @class */ function() {
    // TODO(b/33078163): just use simplest form of existence filter for now
    function t(t) {
        this.count = t;
    }
    return t.prototype.isEqual = function(t) {
        return t && t.count === this.count;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function Pn(t) {
    switch (t) {
      case T.OK:
        return gi("Treated status OK as error");

      case T.CANCELLED:
      case T.UNKNOWN:
      case T.DEADLINE_EXCEEDED:
      case T.RESOURCE_EXHAUSTED:
      case T.INTERNAL:
      case T.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case T.UNAUTHENTICATED:
        return !1;

      case T.INVALID_ARGUMENT:
      case T.NOT_FOUND:
      case T.ALREADY_EXISTS:
      case T.PERMISSION_DENIED:
      case T.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case T.ABORTED:
      case T.OUT_OF_RANGE:
      case T.UNIMPLEMENTED:
      case T.DATA_LOSS:
        return !0;

      default:
        return gi("Unknown status code: " + t);
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */
function kn(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return wi("GRPC error has no .code"), T.UNKNOWN;
    switch (t) {
      case fn.OK:
        return T.OK;

      case fn.CANCELLED:
        return T.CANCELLED;

      case fn.UNKNOWN:
        return T.UNKNOWN;

      case fn.DEADLINE_EXCEEDED:
        return T.DEADLINE_EXCEEDED;

      case fn.RESOURCE_EXHAUSTED:
        return T.RESOURCE_EXHAUSTED;

      case fn.INTERNAL:
        return T.INTERNAL;

      case fn.UNAVAILABLE:
        return T.UNAVAILABLE;

      case fn.UNAUTHENTICATED:
        return T.UNAUTHENTICATED;

      case fn.INVALID_ARGUMENT:
        return T.INVALID_ARGUMENT;

      case fn.NOT_FOUND:
        return T.NOT_FOUND;

      case fn.ALREADY_EXISTS:
        return T.ALREADY_EXISTS;

      case fn.PERMISSION_DENIED:
        return T.PERMISSION_DENIED;

      case fn.FAILED_PRECONDITION:
        return T.FAILED_PRECONDITION;

      case fn.ABORTED:
        return T.ABORTED;

      case fn.OUT_OF_RANGE:
        return T.OUT_OF_RANGE;

      case fn.UNIMPLEMENTED:
        return T.UNIMPLEMENTED;

      case fn.DATA_LOSS:
        return T.DATA_LOSS;

      default:
        return gi("Unknown status code: " + t);
    }
}

/**
 * Maps an RPC code from a Code. This is the reverse operation from
 * mapCodeFromRpcCode and should really only be used in tests.
 */ function Nn(t) {
    if (void 0 === t) return fn.OK;
    switch (t) {
      case T.OK:
        return fn.OK;

      case T.CANCELLED:
        return fn.CANCELLED;

      case T.UNKNOWN:
        return fn.UNKNOWN;

      case T.DEADLINE_EXCEEDED:
        return fn.DEADLINE_EXCEEDED;

      case T.RESOURCE_EXHAUSTED:
        return fn.RESOURCE_EXHAUSTED;

      case T.INTERNAL:
        return fn.INTERNAL;

      case T.UNAVAILABLE:
        return fn.UNAVAILABLE;

      case T.UNAUTHENTICATED:
        return fn.UNAUTHENTICATED;

      case T.INVALID_ARGUMENT:
        return fn.INVALID_ARGUMENT;

      case T.NOT_FOUND:
        return fn.NOT_FOUND;

      case T.ALREADY_EXISTS:
        return fn.ALREADY_EXISTS;

      case T.PERMISSION_DENIED:
        return fn.PERMISSION_DENIED;

      case T.FAILED_PRECONDITION:
        return fn.FAILED_PRECONDITION;

      case T.ABORTED:
        return fn.ABORTED;

      case T.OUT_OF_RANGE:
        return fn.OUT_OF_RANGE;

      case T.UNIMPLEMENTED:
        return fn.UNIMPLEMENTED;

      case T.DATA_LOSS:
        return fn.DATA_LOSS;

      default:
        return gi("Unknown status code: " + t);
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (ln = fn || (fn = {}))[ln.OK = 0] = "OK", ln[ln.CANCELLED = 1] = "CANCELLED", 
ln[ln.UNKNOWN = 2] = "UNKNOWN", ln[ln.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
ln[ln.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ln[ln.NOT_FOUND = 5] = "NOT_FOUND", 
ln[ln.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ln[ln.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
ln[ln.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ln[ln.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
ln[ln.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ln[ln.ABORTED = 10] = "ABORTED", 
ln[ln.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ln[ln.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
ln[ln.INTERNAL = 13] = "INTERNAL", ln[ln.UNAVAILABLE = 14] = "UNAVAILABLE", ln[ln.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var On = new pt(bt.W);

function Fn() {
    return On;
}

function Vn() {
    return Fn();
}

var Un = new pt(bt.W);

function xn() {
    return Un;
}

var jn = new pt(bt.W);

function Ln() {
    return jn;
}

var qn = new Tt(bt.W);

function Bn() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var i = qn, e = 0, r = t; e < r.length; e++) {
        var u = r[e];
        i = i.add(u);
    }
    return i;
}

var Mn = new Tt(yi);

function Qn() {
    return Mn;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var Gn = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.W = t ? function(n, i) {
            return t(n, i) || bt.W(n.key, i.key);
        } : function(t, n) {
            return bt.W(t.key, n.key);
        }, this.vi = xn(), this.wi = new pt(this.W);
    }
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */    return t.mi = function(n) {
        return new t(n.W);
    }, t.prototype.has = function(t) {
        return null != this.vi.get(t);
    }, t.prototype.get = function(t) {
        return this.vi.get(t);
    }, t.prototype.first = function() {
        return this.wi.wt();
    }, t.prototype.last = function() {
        return this.wi.gt();
    }, t.prototype.Y = function() {
        return this.wi.Y();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var n = this.vi.get(t);
        return n ? this.wi.indexOf(n) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.wi.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */
    t.prototype.forEach = function(t) {
        this.wi.bt((function(n, i) {
            return t(n), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */
    t.prototype.add = function(t) {
        // First remove the element if we have it.
        var n = this.delete(t.key);
        return n.copy(n.vi.dt(t.key, t), n.wi.dt(t, null));
    }, 
    /** Deletes a document with a given key */
    t.prototype.delete = function(t) {
        var n = this.get(t);
        return n ? this.copy(this.vi.remove(t), this.wi.remove(n)) : this;
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) return !1;
        if (this.size !== n.size) return !1;
        for (var i = this.wi.yt(), e = n.wi.yt(); i.St(); ) {
            var r = i.Rt().key, u = e.Rt().key;
            if (!r.isEqual(u)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(n) {
            t.push(n.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(n, i) {
        var e = new t;
        return e.W = this.W, e.vi = n, e.wi = i, e;
    }, t;
}(), Wn = /** @class */ function() {
    function t() {
        this.gi = new pt(bt.W);
    }
    return t.prototype.track = function(t) {
        var n = t.doc.key, i = this.gi.get(n);
        i ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === i.type ? this.gi = this.gi.dt(n, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== i.type ? this.gi = this.gi.dt(n, {
            type: i.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === i.type ? this.gi = this.gi.dt(n, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === i.type ? this.gi = this.gi.dt(n, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === i.type ? this.gi = this.gi.remove(n) : 1 /* Removed */ === t.type && 2 /* Modified */ === i.type ? this.gi = this.gi.dt(n, {
            type: 1 /* Removed */ ,
            doc: i.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === i.type ? this.gi = this.gi.dt(n, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        gi("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(i)) : this.gi = this.gi.dt(n, t);
    }, t.prototype.bi = function() {
        var t = [];
        return this.gi.bt((function(n, i) {
            t.push(i);
        })), t;
    }, t;
}(), zn = /** @class */ function() {
    function t(t, n, i, e, r, u, s, o) {
        this.query = t, this.docs = n, this.pi = i, this.docChanges = e, this.yi = r, this.fromCache = u, 
        this._i = s, this.Ii = o;
    }
    /** Returns a view snapshot as if all documents in the snapshot were added. */    return t.Ti = function(n, i, e, r) {
        var u = [];
        return i.forEach((function(t) {
            u.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(n, i, Gn.mi(i), u, e, r, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.yi.Y();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this._i === t._i && this.yi.isEqual(t.yi) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.pi.isEqual(t.pi))) return !1;
        var n = this.docChanges, i = t.docChanges;
        if (n.length !== i.length) return !1;
        for (var e = 0; e < n.length; e++) if (n[e].type !== i[e].type || !n[e].doc.isEqual(i[e].doc)) return !1;
        return !0;
    }, t;
}(), Kn = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    n, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    i, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    e, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    r) {
        this.ai = t, this.Ei = n, this.Di = i, this.Ri = e, this.Si = r;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.Ai = function(n, i) {
        var e, r = ((e = {})[n] = Hn.Ci(n, i), e);
        return new t(dt.MIN, r, Qn(), Fn(), Bn());
    }, t;
}(), Hn = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    n, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    i, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    e, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    r) {
        this.resumeToken = t, this.Pi = n, this.ki = i, this.Ni = e, this.Oi = r;
    }
    /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */    return t.Ci = function(n, i) {
        return new t(rt.k, i, Bn(), Bn(), Bn());
    }, t;
}(), Jn = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
n, 
/** The key of the document for this change. */
i, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
e) {
    this.Fi = t, this.removedTargetIds = n, this.key = i, this.Vi = e;
}, Yn = function(t, n) {
    this.targetId = t, this.Ui = n;
}, Xn = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
n, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
i, 
/** An RPC error indicating why the watch failed. */
e) {
    void 0 === i && (i = rt.k), void 0 === e && (e = null), this.state = t, this.targetIds = n, 
    this.resumeToken = i, this.cause = e;
}, $n = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.xi = 0, 
        /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
        this.ji = ni(), 
        /** See public getters for explanations of these fields. */
        this.Li = rt.k, this.qi = !1, 
        /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
        this.Bi = !0;
    }
    return Object.defineProperty(t.prototype, "Pi", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.qi;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */
        get: function() {
            return this.Li;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Mi", {
        /** Whether this target has pending target adds or target removes. */
        get: function() {
            return 0 !== this.xi;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Qi", {
        /** Whether we have modified any state that should trigger a snapshot. */
        get: function() {
            return this.Bi;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.Gi = function(t) {
        t.P() > 0 && (this.Bi = !0, this.Li = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.Wi = function() {
        var t = Bn(), n = Bn(), i = Bn();
        return this.ji.forEach((function(e, r) {
            switch (r) {
              case 0 /* Added */ :
                t = t.add(e);
                break;

              case 2 /* Modified */ :
                n = n.add(e);
                break;

              case 1 /* Removed */ :
                i = i.add(e);
                break;

              default:
                gi("Encountered invalid change type: " + r);
            }
        })), new Hn(this.Li, this.qi, t, n, i);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.zi = function() {
        this.Bi = !1, this.ji = ni();
    }, t.prototype.Ki = function(t, n) {
        this.Bi = !0, this.ji = this.ji.dt(t, n);
    }, t.prototype.Hi = function(t) {
        this.Bi = !0, this.ji = this.ji.remove(t);
    }, t.prototype.Ji = function() {
        this.xi += 1;
    }, t.prototype.Yi = function() {
        this.xi -= 1;
    }, t.prototype.Xi = function() {
        this.Bi = !0, this.qi = !0;
    }, t;
}(), Zn = /** @class */ function() {
    function t(t) {
        this.$i = t, 
        /** The internal state of all tracked targets. */
        this.Zi = {}, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.te = Fn(), 
        /** A mapping of document keys to their set of target IDs. */
        this.ne = ti(), 
        /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
        this.ie = new Tt(yi);
    }
    /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */    return t.prototype.ee = function(t) {
        for (var n = 0, i = t.Fi; n < i.length; n++) {
            var e = i[n];
            t.Vi instanceof un ? this.re(e, t.Vi) : t.Vi instanceof sn && this.ue(e, t.key, t.Vi);
        }
        for (var r = 0, u = t.removedTargetIds; r < u.length; r++) {
            e = u[r];
            this.ue(e, t.key, t.Vi);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */
    t.prototype.se = function(t) {
        var n = this;
        this.oe(t, (function(i) {
            var e = n.he(i);
            switch (t.state) {
              case 0 /* NoChange */ :
                n.ce(i) && e.Gi(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                e.Yi(), e.Mi || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                e.zi(), e.Gi(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                e.Yi(), e.Mi || n.removeTarget(i), bi(!t.cause, "WatchChangeAggregator does not handle errored targets");
                break;

              case 3 /* Current */ :
                n.ce(i) && (e.Xi(), e.Gi(t.resumeToken));
                break;

              case 4 /* Reset */ :
                n.ce(i) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                n.ae(i), e.Gi(t.resumeToken));
                break;

              default:
                gi("Unknown target watch change state: " + t.state);
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.oe = function(t, n) {
        t.targetIds.length > 0 ? t.targetIds.forEach(n) : F(this.Zi, n);
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.fe = function(t) {
        var n = t.targetId, i = t.Ui.count, e = this.le(n);
        if (e) {
            var r = e.target;
            if (r.Nn()) if (0 === i) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var u = new bt(r.path);
                this.ue(n, u, new sn(u, dt.q()));
            } else bi(1 === i, "Single document existence filter with count: " + i); else this.de(n) !== i && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.ae(n), this.ie = this.ie.add(n));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.ve = function(t) {
        var n = this, i = {};
        F(this.Zi, (function(e, r) {
            var u = n.le(e);
            if (u) {
                if (r.Pi && u.target.Nn()) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new bt(u.target.path);
                    null !== n.te.get(s) || n.we(e, s) || n.ue(e, s, new sn(s, t));
                }
                r.Qi && (i[e] = r.Wi(), r.zi());
            }
        }));
        var e = Bn();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.ne.forEach((function(t, i) {
            var r = !0;
            i.Bt((function(t) {
                var i = n.le(t);
                return !i || 2 /* LimboResolution */ === i.ci || (r = !1, !1);
            })), r && (e = e.add(t));
        }));
        var r = new Kn(t, i, this.ie, this.te, e);
        return this.te = Fn(), this.ne = ti(), this.ie = new Tt(yi), r;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.re = function(t, n) {
        if (this.ce(t)) {
            var i = this.we(t, n.key) ? 2 /* Modified */ : 0 /* Added */;
            this.he(t).Ki(n.key, i), this.te = this.te.dt(n.key, n), this.ne = this.ne.dt(n.key, this.me(n.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.ue = function(t, n, i) {
        if (this.ce(t)) {
            var e = this.he(t);
            this.we(t, n) ? e.Ki(n, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            e.Hi(n), this.ne = this.ne.dt(n, this.me(n).delete(t)), i && (this.te = this.te.dt(n, i));
        }
    }, t.prototype.removeTarget = function(t) {
        delete this.Zi[t];
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.de = function(t) {
        var n = this.he(t).Wi();
        return this.$i.ge(t).size + n.ki.size - n.Oi.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.Ji = function(t) {
        this.he(t).Ji();
    }, t.prototype.he = function(t) {
        return this.Zi[t] || (this.Zi[t] = new $n), this.Zi[t];
    }, t.prototype.me = function(t) {
        var n = this.ne.get(t);
        return n || (n = new Tt(yi), this.ne = this.ne.dt(t, n)), n;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.ce = function(t) {
        var n = null !== this.le(t);
        return n || vi("WatchChangeAggregator", "Detected inactive target", t), n;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.le = function(t) {
        var n = this.Zi[t];
        return n && n.Mi ? null : this.$i.be(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.ae = function(t) {
        var n = this;
        bi(!this.Zi[t].Mi, "Should only reset active targets"), this.Zi[t] = new $n, this.$i.ge(t).forEach((function(i) {
            n.ue(t, i, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.we = function(t, n) {
        return this.$i.ge(t).has(n);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function ti() {
    return new pt(bt.W);
}

function ni() {
    return new pt(bt.W);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ii, ei, ri = ((ii = {})[Tn.ASCENDING.name] = "ASCENDING", ii[Tn.DESCENDING.name] = "DESCENDING", 
ii), ui = ((ei = {})[mn.LESS_THAN.name] = "LESS_THAN", ei[mn.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", 
ei[mn.GREATER_THAN.name] = "GREATER_THAN", ei[mn.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", 
ei[mn.EQUAL.name] = "EQUAL", ei[mn.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", ei[mn.IN.name] = "IN", 
ei[mn.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY", ei), si = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

function oi(t, n) {
    bi(!hn(t), n + " is missing");
}

function hi(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : gi("can't parse " + t);
}

/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */ var ci = /** @class */ function() {
    function t(t, n) {
        this.Dn = t, this.options = n;
    }
    return t.prototype.pe = function(t) {
        var n = void 0 === t.code ? T.UNKNOWN : kn(t.code);
        return new E(n, t.message || "");
    }, 
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    t.prototype.ye = function(t) {
        return this.options._e || hn(t) ? t : {
            value: t
        };
    }, 
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as accepting "number" because that's what
     * our generated proto interfaces say Int32Value must be, but it actually
     * accepts { value: number } to match our serialization in toInt32Value().
     */
    t.prototype.Ie = function(t) {
        var n;
        return hn(
        // Use any because we need to match generated Proto types.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        n = "object" == typeof t ? t.value : t) ? null : n;
    }, 
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "string" because that's what
     * our generated proto interfaces say dates must be. But it's easier and safer
     * to actually return a Timestamp proto.
     */
    t.prototype.G = function(t) {
        return this.options._e ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
            seconds: "" + t.seconds,
            nanos: t.nanoseconds
        };
    }, t.prototype.L = function(t) {
        // The json interface (for the browser) will return an iso timestamp string,
        // while the proto js library (for node) will return a
        // google.protobuf.Timestamp instance.
        if ("string" == typeof t) 
        // TODO(b/37282237): Use strings for Proto3 timestamps
        // assert(this.options.useProto3Json,
        //   'The timestamp string format requires Proto3.');
        return this.Te(t);
        bi(!!t, "Cannot deserialize null or undefined timestamp.");
        // TODO(b/37282237): Use strings for Proto3 timestamps
        // assert(!this.options.useProto3Json,
        //   'The timestamp instance format requires Proto JS.');
        var n = hi(t.seconds || "0"), i = t.nanos || 0;
        return new lt(n, i);
    }, t.prototype.Te = function(t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var n = 0, i = si.exec(t);
        if (bi(!!i, "invalid timestamp: " + t), i[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var e = i[1];
            e = (e + "000000000").substr(0, 9), n = Number(e);
        }
        // Parse the date to get the seconds.
                var r = new Date(t), u = Math.floor(r.getTime() / 1e3);
        return new lt(u, n);
    }, 
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "string" because that's what
     * our generated proto interfaces say bytes must be. But it should return
     * an Uint8Array in Node.
     *
     * Visible for testing.
     */
    t.prototype.Ee = function(t) {
        return this.options._e ? t.toBase64() : t.toUint8Array();
    }, 
    /**
     * Returns a ByteString based on the proto string value.
     */
    t.prototype.De = function(t) {
        return this.options._e ? (bi(void 0 === t || "string" == typeof t, "value must be undefined or a string when using proto3 Json"), 
        rt.fromBase64String(t || "")) : (bi(void 0 === t || t instanceof Uint8Array, "value must be undefined or Uint8Array"), 
        rt.fromUint8Array(t || new Uint8Array));
    }, 
    /**
     * Parse the blob from the protos into the internal Blob class. Note that the
     * typings assume all blobs are strings, but they are actually Uint8Arrays
     * on Node.
     */
    t.prototype.Re = function(t) {
        return "string" == typeof t ? (bi(this.options._e, "Expected bytes to be passed in as Uint8Array, but got a string instead."), 
        ct.fromBase64String(t)) : (bi(!this.options._e, "Expected bytes to be passed in as Uint8Array, but got a string instead."), 
        ct.fromUint8Array(t));
    }, t.prototype.toVersion = function(t) {
        return this.G(t.G());
    }, t.prototype.fromVersion = function(t) {
        return bi(!!t, "Trying to deserialize version that isn't set"), dt.L(this.L(t));
    }, t.prototype.Se = function(t, n) {
        return this.Ae(t).child("documents").child(n).it();
    }, t.prototype.Ce = function(t) {
        var n = wt.et(t);
        return bi(this.Pe(n), "Tried to deserialize invalid key " + n.toString()), n;
    }, t.prototype.ke = function(t) {
        return this.Se(this.Dn, t.path);
    }, t.prototype.Ne = function(t) {
        var n = this.Ce(t);
        return bi(n.get(1) === this.Dn.projectId, "Tried to deserialize key from different project: " + n.get(1) + " vs " + this.Dn.projectId), 
        bi(!n.get(3) && !this.Dn.database || n.get(3) === this.Dn.database, "Tried to deserialize key from different database: " + n.get(3) + " vs " + this.Dn.database), 
        new bt(this.Oe(n));
    }, t.prototype.Fe = function(t) {
        return this.Se(this.Dn, t);
    }, t.prototype.Ve = function(t) {
        var n = this.Ce(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
                return 4 === n.length ? wt.rt : this.Oe(n);
    }, Object.defineProperty(t.prototype, "Ue", {
        get: function() {
            return new wt([ "projects", this.Dn.projectId, "databases", this.Dn.database ]).it();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Ae = function(t) {
        return new wt([ "projects", t.projectId, "databases", t.database ]);
    }, t.prototype.Oe = function(t) {
        return bi(t.length > 4 && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), 
        t.H(5);
    }, t.prototype.Pe = function(t) {
        // Resource names have at least 4 components (project ID, database ID)
        return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
    }, t.prototype.xe = function(t) {
        if (t instanceof Mt) return {
            nullValue: "NULL_VALUE"
        };
        if (t instanceof Qt) return {
            booleanValue: t.value()
        };
        if (t instanceof zt) return {
            integerValue: "" + t.value()
        };
        if (t instanceof Kt) {
            var n = t.value();
            if (this.options._e) {
                // Proto 3 let's us encode NaN and Infinity as string values as
                // expected by the backend. This is currently not checked by our unit
                // tests because they rely on protobuf.js.
                if (isNaN(n)) return {
                    doubleValue: "NaN"
                };
                if (n === 1 / 0) return {
                    doubleValue: "Infinity"
                };
                if (n === -1 / 0) return {
                    doubleValue: "-Infinity"
                };
                if (cn(n)) return {
                    doubleValue: "-0"
                };
            }
            return {
                doubleValue: t.value()
            };
        }
        return t instanceof Ht ? {
            stringValue: t.value()
        } : t instanceof tn ? {
            mapValue: this.je(t)
        } : t instanceof en ? {
            arrayValue: this.Le(t)
        } : t instanceof Jt ? {
            timestampValue: this.G(t.Jt)
        } : t instanceof Zt ? {
            geoPointValue: {
                latitude: t.value().latitude,
                longitude: t.value().longitude
            }
        } : t instanceof Xt ? {
            bytesValue: this.Ee(t.value())
        } : t instanceof $t ? {
            referenceValue: this.Se(t.Dn, t.key.path)
        } : gi("Unknown FieldValue " + JSON.stringify(t));
    }, t.prototype.qe = function(t) {
        var n = this;
        if ("nullValue" in t) return Mt.yn;
        if ("booleanValue" in t) return Qt.of(t.booleanValue);
        if ("integerValue" in t) return new zt(hi(t.integerValue));
        if ("doubleValue" in t) {
            if (this.options._e) {
                // Proto 3 uses the string values 'NaN' and 'Infinity'.
                if ("NaN" === t.doubleValue) return Kt.Tn;
                if ("Infinity" === t.doubleValue) return Kt.POSITIVE_INFINITY;
                if ("-Infinity" === t.doubleValue) return Kt.NEGATIVE_INFINITY;
                if ("-0" === t.doubleValue) return new Kt(-0);
            }
            return new Kt(t.doubleValue);
        }
        if ("stringValue" in t) return new Ht(t.stringValue);
        if ("mapValue" in t) return this.Be(t.mapValue.fields || {});
        if ("arrayValue" in t) {
            // "values" is not present if the array is empty
            oi(t.arrayValue, "arrayValue");
            var i = t.arrayValue.values || [];
            return new en(i.map((function(t) {
                return n.qe(t);
            })));
        }
        if ("timestampValue" in t) return oi(t.timestampValue, "timestampValue"), new Jt(this.L(t.timestampValue));
        if ("geoPointValue" in t) {
            oi(t.geoPointValue, "geoPointValue");
            var e = t.geoPointValue.latitude || 0, r = t.geoPointValue.longitude || 0;
            return new Zt(new ft(e, r));
        }
        if ("bytesValue" in t) {
            oi(t.bytesValue, "bytesValue");
            var u = this.Re(t.bytesValue);
            return new Xt(u);
        }
        if ("referenceValue" in t) {
            oi(t.referenceValue, "referenceValue");
            var s = this.Ce(t.referenceValue), o = new Ei(s.get(1), s.get(3)), h = new bt(this.Oe(s));
            return new $t(o, h);
        }
        return gi("Unknown Value proto " + JSON.stringify(t));
    }, 
    /** Creates an api.Document from key and fields (but no create/update time) */
    t.prototype.Me = function(t, n) {
        return {
            name: this.ke(t),
            fields: this.Qe(n)
        };
    }, t.prototype.Ge = function(t) {
        return bi(!t.rn, "Can't serialize documents with mutations."), {
            name: this.ke(t.key),
            fields: this.Qe(t.data()),
            updateTime: this.G(t.version.G())
        };
    }, t.prototype.We = function(t, n) {
        var i = this, e = this.Ne(t.name), r = this.fromVersion(t.updateTime);
        return new un(e, r, {
            hasCommittedMutations: !!n
        }, void 0, t, (function(t) {
            return i.qe(t);
        }));
    }, t.prototype.Qe = function(t) {
        var n = this, i = {};
        return t.forEach((function(t, e) {
            i[t] = n.xe(e);
        })), i;
    }, t.prototype.Be = function(t) {
        var n = this, i = t, e = tn.wn();
        // Proto map<string, Value> gets mapped to Object, so cast it.
                return V(i, (function(t, i) {
            e.set(new gt([ t ]), n.qe(i));
        })), e.an();
    }, t.prototype.je = function(t) {
        return {
            fields: this.Qe(t)
        };
    }, t.prototype.Le = function(t) {
        var n = this, i = [];
        return t.forEach((function(t) {
            i.push(n.xe(t));
        })), {
            values: i
        };
    }, t.prototype.ze = function(t) {
        var n = this;
        bi(!!t.found, "Tried to deserialize a found document from a missing document."), 
        oi(t.found.name, "doc.found.name"), oi(t.found.updateTime, "doc.found.updateTime");
        var i = this.Ne(t.found.name), e = this.fromVersion(t.found.updateTime);
        return new un(i, e, {}, void 0, t.found, (function(t) {
            return n.qe(t);
        }));
    }, t.prototype.Ke = function(t) {
        bi(!!t.missing, "Tried to deserialize a missing document from a found document."), 
        bi(!!t.readTime, "Tried to deserialize a missing document without a read time.");
        var n = this.Ne(t.missing), i = this.fromVersion(t.readTime);
        return new sn(n, i);
    }, t.prototype.He = function(t) {
        return "found" in t ? this.ze(t) : "missing" in t ? this.Ke(t) : gi("invalid batch get response: " + JSON.stringify(t));
    }, t.prototype.Je = function(t) {
        switch (t) {
          case 1 /* Added */ :
            return "ADD";

          case 3 /* Current */ :
            return "CURRENT";

          case 0 /* NoChange */ :
            return "NO_CHANGE";

          case 2 /* Removed */ :
            return "REMOVE";

          case 4 /* Reset */ :
            return "RESET";

          default:
            return gi("Unknown WatchTargetChangeState: " + t);
        }
    }, t.prototype.Ye = function(t) {
        if (t instanceof Yn) return {
            filter: {
                count: t.Ui.count,
                targetId: t.targetId
            }
        };
        if (t instanceof Jn) {
            if (t.Vi instanceof un) {
                var n = t.Vi;
                return {
                    documentChange: {
                        document: {
                            name: this.ke(n.key),
                            fields: this.Qe(n.data()),
                            updateTime: this.toVersion(n.version)
                        },
                        targetIds: t.Fi,
                        removedTargetIds: t.removedTargetIds
                    }
                };
            }
            if (t.Vi instanceof sn) {
                n = t.Vi;
                return {
                    documentDelete: {
                        document: this.ke(n.key),
                        readTime: this.toVersion(n.version),
                        removedTargetIds: t.removedTargetIds
                    }
                };
            }
            if (null === t.Vi) return {
                documentRemove: {
                    document: this.ke(t.key),
                    removedTargetIds: t.removedTargetIds
                }
            };
        }
        if (t instanceof Xn) {
            var i = void 0;
            return t.cause && (i = {
                code: Nn(t.cause.code),
                message: t.cause.message
            }), {
                targetChange: {
                    targetChangeType: this.Je(t.state),
                    targetIds: t.targetIds,
                    resumeToken: this.Ee(t.resumeToken),
                    cause: i
                }
            };
        }
        return gi("Unrecognized watch change: " + JSON.stringify(t));
    }, t.prototype.Xe = function(t) {
        var n, i = this;
        if ("targetChange" in t) {
            oi(t.targetChange, "targetChange");
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            var e = this.$e(t.targetChange.targetChangeType || "NO_CHANGE"), r = t.targetChange.targetIds || [], u = this.De(t.targetChange.resumeToken), s = t.targetChange.cause, o = s && this.pe(s);
            n = new Xn(e, r, u, o || null);
        } else if ("documentChange" in t) {
            oi(t.documentChange, "documentChange");
            var h = t.documentChange;
            oi(h.document, "documentChange.name"), oi(h.document.name, "documentChange.document.name"), 
            oi(h.document.updateTime, "documentChange.document.updateTime");
            var c = this.Ne(h.document.name), a = this.fromVersion(h.document.updateTime), f = new un(c, a, {}, void 0, h.document, (function(t) {
                return i.qe(t);
            })), l = h.targetIds || [], d = h.removedTargetIds || [];
            n = new Jn(l, d, f.key, f);
        } else if ("documentDelete" in t) {
            oi(t.documentDelete, "documentDelete");
            var v = t.documentDelete;
            oi(v.document, "documentDelete.document");
            c = this.Ne(v.document), a = v.readTime ? this.fromVersion(v.readTime) : dt.q(), 
            f = new sn(c, a), d = v.removedTargetIds || [];
            n = new Jn([], d, f.key, f);
        } else if ("documentRemove" in t) {
            oi(t.documentRemove, "documentRemove");
            var w = t.documentRemove;
            oi(w.document, "documentRemove");
            c = this.Ne(w.document), d = w.removedTargetIds || [];
            n = new Jn([], d, c, null);
        } else {
            if (!("filter" in t)) return gi("Unknown change type " + JSON.stringify(t));
            // TODO(dimond): implement existence filter parsing with strategy.
            oi(t.filter, "filter");
            var m = t.filter;
            oi(m.targetId, "filter.targetId");
            var g = m.count || 0, b = new Cn(g), p = m.targetId;
            n = new Yn(p, b);
        }
        return n;
    }, t.prototype.$e = function(t) {
        return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : gi("Got unexpected TargetChange.state: " + t);
    }, t.prototype.Ze = function(t) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        if (!("targetChange" in t)) return dt.MIN;
        var n = t.targetChange;
        return n.targetIds && n.targetIds.length ? dt.MIN : n.readTime ? this.fromVersion(n.readTime) : dt.MIN;
    }, t.prototype.tr = function(t) {
        var n, i = this;
        if (t instanceof Vt) n = {
            update: this.Me(t.key, t.value)
        }; else if (t instanceof jt) n = {
            delete: this.ke(t.key)
        }; else if (t instanceof Ut) n = {
            update: this.Me(t.key, t.data),
            updateMask: this.nr(t.sn)
        }; else if (t instanceof xt) n = {
            transform: {
                document: this.ke(t.key),
                fieldTransforms: t.fieldTransforms.map((function(t) {
                    return i.ir(t);
                }))
            }
        }; else {
            if (!(t instanceof Lt)) return gi("Unknown mutation type " + t.type);
            n = {
                verify: this.ke(t.key)
            };
        }
        return t.en.Zt || (n.currentDocument = this.er(t.en)), n;
    }, t.prototype.rr = function(t) {
        var n = this, i = t.currentDocument ? this.ur(t.currentDocument) : Ot.NONE;
        if (t.update) {
            oi(t.update.name, "name");
            var e = this.Ne(t.update.name), r = this.Be(t.update.fields || {});
            if (t.updateMask) {
                var u = this.sr(t.updateMask);
                return new Ut(e, r, u, i);
            }
            return new Vt(e, r, i);
        }
        if (t.delete) {
            e = this.Ne(t.delete);
            return new jt(e, i);
        }
        if (t.transform) {
            e = this.Ne(t.transform.document);
            var s = t.transform.fieldTransforms.map((function(t) {
                return n.or(t);
            }));
            return bi(!0 === i.exists, 'Transforms only support precondition "exists == true"'), 
            new xt(e, s);
        }
        if (t.verify) {
            e = this.Ne(t.verify);
            return new Lt(e, i);
        }
        return gi("unknown mutation proto: " + JSON.stringify(t));
    }, t.prototype.er = function(t) {
        return bi(!t.Zt, "Can't serialize an empty precondition"), void 0 !== t.updateTime ? {
            updateTime: this.toVersion(t.updateTime)
        } : void 0 !== t.exists ? {
            exists: t.exists
        } : gi("Unknown precondition");
    }, t.prototype.ur = function(t) {
        return void 0 !== t.updateTime ? Ot.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? Ot.exists(t.exists) : Ot.NONE;
    }, t.prototype.hr = function(t, n) {
        var i = this, e = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(n);
        // NOTE: Deletes don't have an updateTime.
                e.isEqual(dt.MIN) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        e = this.fromVersion(n));
        var r = null;
        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults.map((function(t) {
            return i.qe(t);
        }))), new Nt(e, r);
    }, t.prototype.cr = function(t, n) {
        var i = this;
        return t && t.length > 0 ? (bi(void 0 !== n, "Received a write result without a commit time"), 
        t.map((function(t) {
            return i.hr(t, n);
        }))) : [];
    }, t.prototype.ir = function(t) {
        var n = this, i = t.transform;
        if (i instanceof Dt) return {
            fieldPath: t.field.it(),
            setToServerValue: "REQUEST_TIME"
        };
        if (i instanceof Rt) return {
            fieldPath: t.field.it(),
            appendMissingElements: {
                values: i.elements.map((function(t) {
                    return n.xe(t);
                }))
            }
        };
        if (i instanceof St) return {
            fieldPath: t.field.it(),
            removeAllFromArray: {
                values: i.elements.map((function(t) {
                    return n.xe(t);
                }))
            }
        };
        if (i instanceof At) return {
            fieldPath: t.field.it(),
            increment: this.xe(i.Ht)
        };
        throw gi("Unknown transform: " + t.transform);
    }, t.prototype.or = function(t) {
        var n = this, i = null;
        if ("setToServerValue" in t) bi("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), 
        i = Dt.instance; else if ("appendMissingElements" in t) {
            var e = t.appendMissingElements.values || [];
            i = new Rt(e.map((function(t) {
                return n.qe(t);
            })));
        } else if ("removeAllFromArray" in t) {
            e = t.removeAllFromArray.values || [];
            i = new St(e.map((function(t) {
                return n.qe(t);
            })));
        } else if ("increment" in t) {
            var r = this.qe(t.increment);
            bi(r instanceof Gt, "NUMERIC_ADD transform requires a NumberValue"), i = new At(r);
        } else gi("Unknown transform proto: " + JSON.stringify(t));
        var u = gt.ht(t.fieldPath);
        return new kt(u, i);
    }, t.prototype.ar = function(t) {
        return {
            documents: [ this.Fe(t.path) ]
        };
    }, t.prototype.lr = function(t) {
        var n = t.documents.length;
        bi(1 === n, "DocumentsTarget contained other than 1 document: " + n);
        var i = t.documents[0];
        return vn.jn(this.Ve(i)).Yn();
    }, t.prototype.dr = function(t) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var n = {
            structuredQuery: {}
        }, i = t.path;
        null !== t.collectionGroup ? (bi(i.length % 2 == 0, "Collection Group queries should be within a document path or root."), 
        n.parent = this.Fe(i), n.structuredQuery.from = [ {
            collectionId: t.collectionGroup,
            allDescendants: !0
        } ]) : (bi(i.length % 2 != 0, "Document queries with filters are not supported."), 
        n.parent = this.Fe(i.J()), n.structuredQuery.from = [ {
            collectionId: i.$()
        } ]);
        var e = this.vr(t.filters);
        e && (n.structuredQuery.where = e);
        var r = this.wr(t.orderBy);
        r && (n.structuredQuery.orderBy = r);
        var u = this.ye(t.limit);
        return null !== u && (n.structuredQuery.limit = u), t.startAt && (n.structuredQuery.startAt = this.mr(t.startAt)), 
        t.endAt && (n.structuredQuery.endAt = this.mr(t.endAt)), n;
    }, t.prototype.gr = function(t) {
        var n = this.Ve(t.parent), i = t.structuredQuery, e = i.from ? i.from.length : 0, r = null;
        if (e > 0) {
            bi(1 === e, "StructuredQuery.from with more than one collection is not supported.");
            var u = i.from[0];
            u.allDescendants ? r = u.collectionId : n = n.child(u.collectionId);
        }
        var s = [];
        i.where && (s = this.br(i.where));
        var o = [];
        i.orderBy && (o = this.pr(i.orderBy));
        var h = null;
        i.limit && (h = this.Ie(i.limit));
        var c = null;
        i.startAt && (c = this.yr(i.startAt));
        var a = null;
        return i.endAt && (a = this.yr(i.endAt)), new vn(n, r, o, s, h, "F" /* First */ , c, a).Yn();
    }, t.prototype._r = function(t) {
        var n = this.Ir(t.ci);
        return null == n ? null : {
            "goog-listen-tags": n
        };
    }, t.prototype.Ir = function(t) {
        switch (t) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return gi("Unrecognized query purpose: " + t);
        }
    }, t.prototype.Yn = function(t) {
        var n, i = t.target;
        return (n = i.Nn() ? {
            documents: this.ar(i)
        } : {
            query: this.dr(i)
        }).targetId = t.targetId, t.resumeToken.P() > 0 && (n.resumeToken = this.Ee(t.resumeToken)), 
        n;
    }, t.prototype.vr = function(t) {
        var n = this;
        if (0 !== t.length) {
            var i = t.map((function(t) {
                return t instanceof gn ? n.Tr(t) : gi("Unrecognized filter: " + JSON.stringify(t));
            }));
            return 1 === i.length ? i[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: i
                }
            };
        }
    }, t.prototype.br = function(t) {
        var n = this;
        return t ? void 0 !== t.unaryFilter ? [ this.Er(t) ] : void 0 !== t.fieldFilter ? [ this.Dr(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
            return n.br(t);
        })).reduce((function(t, n) {
            return t.concat(n);
        })) : gi("Unknown filter: " + JSON.stringify(t)) : [];
    }, t.prototype.wr = function(t) {
        var n = this;
        if (0 !== t.length) return t.map((function(t) {
            return n.Rr(t);
        }));
    }, t.prototype.pr = function(t) {
        var n = this;
        return t.map((function(t) {
            return n.Sr(t);
        }));
    }, t.prototype.mr = function(t) {
        var n = this;
        return {
            before: t.before,
            values: t.position.map((function(t) {
                return n.xe(t);
            }))
        };
    }, t.prototype.yr = function(t) {
        var n = this, i = !!t.before, e = t.values.map((function(t) {
            return n.qe(t);
        }));
        return new En(e, i);
    }, 
    // visible for testing
    t.prototype.Ar = function(t) {
        return ri[t.name];
    }, 
    // visible for testing
    t.prototype.Cr = function(t) {
        switch (t) {
          case "ASCENDING":
            return Tn.ASCENDING;

          case "DESCENDING":
            return Tn.DESCENDING;

          default:
            return;
        }
    }, 
    // visible for testing
    t.prototype.Pr = function(t) {
        return ui[t.name];
    }, t.prototype.kr = function(t) {
        switch (t) {
          case "EQUAL":
            return mn.EQUAL;

          case "GREATER_THAN":
            return mn.GREATER_THAN;

          case "GREATER_THAN_OR_EQUAL":
            return mn.GREATER_THAN_OR_EQUAL;

          case "LESS_THAN":
            return mn.LESS_THAN;

          case "LESS_THAN_OR_EQUAL":
            return mn.LESS_THAN_OR_EQUAL;

          case "ARRAY_CONTAINS":
            return mn.ARRAY_CONTAINS;

          case "IN":
            return mn.IN;

          case "ARRAY_CONTAINS_ANY":
            return mn.ARRAY_CONTAINS_ANY;

          case "OPERATOR_UNSPECIFIED":
            return gi("Unspecified operator");

          default:
            return gi("Unknown operator");
        }
    }, t.prototype.Nr = function(t) {
        return {
            fieldPath: t.it()
        };
    }, t.prototype.Or = function(t) {
        return gt.ht(t.fieldPath);
    }, 
    // visible for testing
    t.prototype.Rr = function(t) {
        return {
            field: this.Nr(t.field),
            direction: this.Ar(t.dir)
        };
    }, t.prototype.Sr = function(t) {
        return new Dn(this.Or(t.field), this.Cr(t.direction));
    }, t.prototype.Dr = function(t) {
        return gn.create(this.Or(t.fieldFilter.field), this.kr(t.fieldFilter.op), this.qe(t.fieldFilter.value));
    }, 
    // visible for testing
    t.prototype.Tr = function(t) {
        if (t.op === mn.EQUAL) {
            if (t.value.isEqual(Kt.Tn)) return {
                unaryFilter: {
                    field: this.Nr(t.field),
                    op: "IS_NAN"
                }
            };
            if (t.value.isEqual(Mt.yn)) return {
                unaryFilter: {
                    field: this.Nr(t.field),
                    op: "IS_NULL"
                }
            };
        }
        return {
            fieldFilter: {
                field: this.Nr(t.field),
                op: this.Pr(t.op),
                value: this.xe(t.value)
            }
        };
    }, t.prototype.Er = function(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var n = this.Or(t.unaryFilter.field);
            return gn.create(n, mn.EQUAL, Kt.Tn);

          case "IS_NULL":
            var i = this.Or(t.unaryFilter.field);
            return gn.create(i, mn.EQUAL, Mt.yn);

          case "OPERATOR_UNSPECIFIED":
            return gi("Unspecified filter");

          default:
            return gi("Unknown filter");
        }
    }, t.prototype.nr = function(t) {
        var n = [];
        return t.fields.forEach((function(t) {
            return n.push(t.it());
        })), {
            fieldPaths: n
        };
    }, t.prototype.sr = function(t) {
        var n = (t.fieldPaths || []).map((function(t) {
            return gt.ht(t);
        }));
        return Pt.Xt(n);
    }, t;
}(), ai = /** @class */ function() {
    function t() {}
    return t.Fr = function(n) {
        t.platform && gi("Platform already defined"), t.platform = n;
    }, t.C = function() {
        return t.platform || gi("Platform not set"), t.platform;
    }, t;
}(), fi = new logger.Logger("@firebase/firestore");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides singleton helpers where setup code can inject a platform at runtime.
 * setPlatform needs to be set before Firestore is used and must be set exactly
 * once.
 */
// Helper methods are needed because variables can't be exported as read/write
function li() {
    return fi.logLevel === logger.LogLevel.DEBUG ? 0 /* DEBUG */ : fi.logLevel === logger.LogLevel.SILENT ? 2 /* SILENT */ : 1 /* ERROR */;
}

function di(t) {
    /**
     * Map the new log level to the associated Firebase Log Level
     */
    switch (t) {
      case 0 /* DEBUG */ :
        fi.logLevel = logger.LogLevel.DEBUG;
        break;

      case 1 /* ERROR */ :
        fi.logLevel = logger.LogLevel.ERROR;
        break;

      case 2 /* SILENT */ :
        fi.logLevel = logger.LogLevel.SILENT;
        break;

      default:
        fi.error("Firestore (" + _ + "): Invalid value passed to `setLogLevel`");
    }
}

function vi(t, n) {
    for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
    if (fi.logLevel <= logger.LogLevel.DEBUG) {
        var u = i.map(mi);
        fi.debug.apply(fi, tslib.__spreadArrays([ "Firestore (" + _ + ") [" + t + "]: " + n ], u));
    }
}

function wi(t) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    if (fi.logLevel <= logger.LogLevel.ERROR) {
        var r = n.map(mi);
        fi.error.apply(fi, tslib.__spreadArrays([ "Firestore (" + _ + "): " + t ], r));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function mi(t) {
    if ("string" == typeof t) return t;
    var n = ai.C();
    try {
        return n.Vr(t);
    } catch (n) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 *
 * Returns any so it can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function gi(t) {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    var n = "FIRESTORE (" + _ + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw wi(n), new Error(n);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 */ function bi(t, n) {
    t || gi(n);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var pi = /** @class */ function() {
    function t() {}
    return t.Ur = function() {
        for (
        // Alphanumeric characters
        var t = ""; t.length < 20; ) {
            ai.C().randomBytes(40).forEach((function(n) {
                t.length < 20 && n <= 247 && (t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n % 62));
            }));
        }
        return bi(20 === t.length, "Invalid auto ID: " + t), t;
    }, t;
}();

function yi(t, n) {
    return t < n ? -1 : t > n ? 1 : 0;
}

function _i(t, n) {
    if (t.length !== n.length) return !1;
    for (var i = 0; i < t.length; i++) if (!t[i].isEqual(n[i])) return !1;
    return !0;
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function Ii(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ti = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, n, i, e, r) {
    this.Dn = t, this.persistenceKey = n, this.host = i, this.ssl = e, this.forceLongPolling = r;
}, Ei = /** @class */ function() {
    function t(t, n) {
        this.projectId = t, this.database = n || "(default)";
    }
    return Object.defineProperty(t.prototype, "xr", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(n) {
        return n instanceof t && n.projectId === this.projectId && n.database === this.database;
    }, t.prototype.B = function(t) {
        return yi(this.projectId, t.projectId) || yi(this.database, t.database);
    }, t;
}(), Di = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, n, i, e) {
        this.batchId = t, this.En = n, this.baseMutations = i, this.mutations = e, bi(e.length > 0, "Cannot create an empty mutation batch");
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */    return t.prototype.zt = function(t, n, i) {
        n && bi(n.key.isEqual(t), "applyToRemoteDocument: key " + t + " should match maybeDoc key\n        " + n.key);
        var e = i.jr;
        bi(e.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + e.length + ").");
        for (var r = 0; r < this.mutations.length; r++) {
            var u = this.mutations[r];
            if (u.key.isEqual(t)) {
                var s = e[r];
                n = u.zt(n, s);
            }
        }
        return n;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.Wt = function(t, n) {
        n && bi(n.key.isEqual(t), "applyToLocalDocument: key " + t + " should match maybeDoc key\n        " + n.key);
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
                for (var i = 0, e = this.baseMutations; i < e.length; i++) {
            (o = e[i]).key.isEqual(t) && (n = o.Wt(n, n, this.En));
        }
        // Second, apply all user-provided mutations.
        for (var r = n, u = 0, s = this.mutations; u < s.length; u++) {
            var o;
            (o = s[u]).key.isEqual(t) && (n = o.Wt(n, r, this.En));
        }
        return n;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.Lr = function(t) {
        var n = this, i = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(e) {
            var r = n.Wt(e.key, t.get(e.key));
            r && (i = i.dt(e.key, r));
        })), i;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, n) {
            return t.add(n.key);
        }), Bn());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && _i(this.mutations, t.mutations) && _i(this.baseMutations, t.baseMutations);
    }, t;
}(), Ri = /** @class */ function() {
    function t(t, n, i, e, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.qr = n, this.jr = i, this.streamToken = e, this.Br = r;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */    return t.from = function(n, i, e, r) {
        bi(n.mutations.length === e.length, "Mutations sent " + n.mutations.length + " must equal results received " + e.length);
        for (var u = Ln(), s = n.mutations, o = 0; o < s.length; o++) u = u.dt(s[o].key, e[o].version);
        return new t(n, i, e, r, u);
    }, t;
}(), Si = /** @class */ function() {
    function t(t) {
        this.Mr = t, 
        /**
         * The inner map for a key -> value pair. Due to the possibility of
         * collisions we keep a list of entries that we do a linear search through
         * to find an actual match. Note that collisions should be rare, so we still
         * expect near constant time lookups in practice.
         */
        this.Qr = {};
    }
    /** Get a value for this key, or undefined if it does not exist. */    return t.prototype.get = function(t) {
        var n = this.Mr(t), i = this.Qr[n];
        if (void 0 !== i) for (var e = 0, r = i; e < r.length; e++) {
            var u = r[e], s = u[0], o = u[1];
            if (s.isEqual(t)) return o;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */
    t.prototype.set = function(t, n) {
        var i = this.Mr(t), e = this.Qr[i];
        if (void 0 !== e) {
            for (var r = 0; r < e.length; r++) if (e[r][0].isEqual(t)) return void (e[r] = [ t, n ]);
            e.push([ t, n ]);
        } else this.Qr[i] = [ [ t, n ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var n = this.Mr(t), i = this.Qr[n];
        if (void 0 === i) return !1;
        for (var e = 0; e < i.length; e++) if (i[e][0].isEqual(t)) return 1 === i.length ? delete this.Qr[n] : i.splice(e, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        V(this.Qr, (function(n, i) {
            for (var e = 0, r = i; e < r.length; e++) {
                var u = r[e], s = u[0], o = u[1];
                t(s, o);
            }
        }));
    }, t.prototype.Y = function() {
        return U(this.Qr);
    }, t;
}(), Ai = /** @class */ function() {
    function t(t, n, i, e) {
        this.targetId = t, this.fromCache = n, this.Gr = i, this.Wr = e;
    }
    return t.zr = function(n, i) {
        for (var e = Bn(), r = Bn(), u = 0, s = i.docChanges; u < s.length; u++) {
            var o = s[u];
            switch (o.type) {
              case 0 /* Added */ :
                e = e.add(o.doc.key);
                break;

              case 1 /* Removed */ :
                r = r.add(o.doc.key);
 // do nothing
                        }
        }
        return new t(n, i.fromCache, e, r);
    }, t;
}(), Ci = /** @class */ function() {
    function t(t, n) {
        var i = this;
        this.previousValue = t, n && (n.Kr = function(t) {
            return i.Hr(t);
        }, this.Jr = function(t) {
            return n.Yr(t);
        });
    }
    return t.prototype.Hr = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.Jr && this.Jr(t), t;
    }, t.Xr = -1, t;
}(), Pi = function() {
    var t = this;
    this.promise = new Promise((function(n, i) {
        t.resolve = n, t.reject = i;
    }));
}, ki = /** @class */ function() {
    function t(t, n, i, e, r) {
        this.$r = t, this.Zr = n, this.tu = i, this.op = e, this.nu = r, this.iu = new Pi, 
        this.then = this.iu.promise.then.bind(this.iu.promise), this.catch = this.iu.promise.catch.bind(this.iu.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.iu.promise.catch((function(t) {}));
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */    return t.eu = function(n, i, e, r, u) {
        var s = new t(n, i, Date.now() + e, r, u);
        return s.start(e), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var n = this;
        this.ru = setTimeout((function() {
            return n.uu();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.su = function() {
        return this.uu();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.ru && (this.clearTimeout(), this.iu.reject(new E(T.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.uu = function() {
        var t = this;
        this.$r.ou((function() {
            return null !== t.ru ? (t.clearTimeout(), t.op().then((function(n) {
                return t.iu.resolve(n);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.ru && (this.nu(this), clearTimeout(this.ru), this.ru = null);
    }, t;
}(), Ni = /** @class */ function() {
    function t() {
        // The last promise in the queue.
        this.hu = Promise.resolve(), 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.cu = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.au = [], 
        // visible for testing
        this.fu = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.lu = !1, 
        // List of TimerIds to fast-forward delays for.
        this.du = [];
    }
    return Object.defineProperty(t.prototype, "vu", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.cu;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.ou = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.wu = function(t) {
        this.mu(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.gu(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    t.prototype.bu = function(t) {
        return this.mu(), this.gu(t);
    }, 
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    t.prototype.pu = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.mu(), this.cu ? [ 3 /*break*/ , 2 ] : (this.cu = !0, [ 4 /*yield*/ , this.bu(t) ]);

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.mu(), this.cu ? new Promise((function(t) {})) : this.gu(t);
    }, t.prototype.gu = function(t) {
        var n = this, i = this.hu.then((function() {
            return n.lu = !0, t().catch((function(t) {
                n.fu = t, n.lu = !1;
                var i = t.stack || t.message || "";
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw wi("INTERNAL UNHANDLED ERROR: ", i), 
                // Escape the promise chain and throw the error globally so that
                // e.g. any global crash reporting library detects and reports it.
                // (but not for simulated errors in our tests since this breaks mocha)
                i.indexOf("Firestore Test Simulated Error") < 0 && setTimeout((function() {
                    throw t;
                }), 0), t;
            })).then((function(t) {
                return n.lu = !1, t;
            }));
        }));
        return this.hu = i, i;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned CancelablePromise can be used to cancel
     * the operation prior to its running.
     */
    t.prototype.yu = function(t, n, i) {
        var e = this;
        this.mu(), bi(n >= 0, "Attempted to schedule an operation with a negative delay of " + n), 
        // Fast-forward delays for timerIds that have been overriden.
        this.du.indexOf(t) > -1 && (n = 0);
        var r = ki.eu(this, t, n, i, (function(t) {
            return e._u(t);
        }));
        return this.au.push(r), r;
    }, t.prototype.mu = function() {
        this.fu && gi("AsyncQueue is already failed: " + (this.fu.stack || this.fu.message));
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.Iu = function() {
        bi(this.lu, "verifyOpInProgress() called when no op in progress on this queue.");
    }, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Tu = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var t;
            return tslib.__generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.hu ];

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    if (t !== this.hu) return [ 3 /*break*/ , 0 ];
                    n.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.Eu = function(t) {
        for (var n = 0, i = this.au; n < i.length; n++) {
            if (i[n].Zr === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Throws if no such operation exists. Pass TimerId.All to run
     *  all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.Du = function(t) {
        var n = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Tu().then((function() {
            bi("all" /* All */ === t || n.Eu(t), "Attempted to drain to missing operation " + t), 
            // Run ops in the same order they'd run if they ran naturally.
            n.au.sort((function(t, n) {
                return t.tu - n.tu;
            }));
            for (var i = 0, e = n.au; i < e.length; i++) {
                var r = e[i];
                if (r.su(), "all" /* All */ !== t && r.Zr === t) break;
            }
            return n.Tu();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Ru = function(t) {
        this.du.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */
    t.prototype._u = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var n = this.au.indexOf(t);
        bi(n >= 0, "Delayed operation not found."), this.au.splice(n, 1);
    }, t;
}(), Oi = /** @class */ function() {
    function t(t) {
        var n = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Su = null, this.Au = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Cu = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Pu = !1, t((function(t) {
            n.Cu = !0, n.result = t, n.Su && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            n.Su(t);
        }), (function(t) {
            n.Cu = !0, n.error = t, n.Au && n.Au(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(n, i) {
        var e = this;
        return this.Pu && gi("Called next() or catch() twice for PersistencePromise"), this.Pu = !0, 
        this.Cu ? this.error ? this.ku(i, this.error) : this.Nu(n, this.result) : new t((function(t, r) {
            e.Su = function(i) {
                e.Nu(n, i).next(t, r);
            }, e.Au = function(n) {
                e.ku(i, n).next(t, r);
            };
        }));
    }, t.prototype.Ou = function() {
        var t = this;
        return new Promise((function(n, i) {
            t.next(n, i);
        }));
    }, t.prototype.Fu = function(n) {
        try {
            var i = n();
            return i instanceof t ? i : t.resolve(i);
        } catch (n) {
            return t.reject(n);
        }
    }, t.prototype.Nu = function(n, i) {
        return n ? this.Fu((function() {
            return n(i);
        })) : t.resolve(i);
    }, t.prototype.ku = function(n, i) {
        return n ? this.Fu((function() {
            return n(i);
        })) : t.reject(i);
    }, t.resolve = function(n) {
        return new t((function(t, i) {
            t(n);
        }));
    }, t.reject = function(n) {
        return new t((function(t, i) {
            i(n);
        }));
    }, t.Vu = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    n) {
        return new t((function(t, i) {
            var e = 0, r = 0, u = !1;
            n.forEach((function(n) {
                ++e, n.next((function() {
                    ++r, u && r === e && t();
                }), (function(t) {
                    return i(t);
                }));
            })), u = !0, r === e && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Uu = function(n) {
        for (var i = t.resolve(!1), e = function(n) {
            i = i.next((function(i) {
                return i ? t.resolve(i) : n();
            }));
        }, r = 0, u = n; r < u.length; r++) {
            e(u[r]);
        }
        return i;
    }, t.forEach = function(t, n) {
        var i = this, e = [];
        return t.forEach((function(t, r) {
            e.push(n.call(i, t, r));
        })), this.Vu(e);
    }, t;
}();

/** The default database name for a project. */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fi(t, n) {
    var i = t[0], e = t[1], r = n[0], u = n[1], s = yi(i, r);
    return 0 === s ? yi(e, u) : s;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var Vi = /** @class */ function() {
    function t(t) {
        this.xu = t, this.buffer = new Tt(Fi), this.ju = 0;
    }
    return t.prototype.Lu = function() {
        return ++this.ju;
    }, t.prototype.qu = function(t) {
        var n = [ t, this.Lu() ];
        if (this.buffer.size < this.xu) this.buffer = this.buffer.add(n); else {
            var i = this.buffer.last();
            Fi(n, i) < 0 && (this.buffer = this.buffer.delete(i).add(n));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), Ui = {
    Bu: !1,
    Mu: 0,
    Qu: 0,
    Gu: 0
}, xi = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    n, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    i) {
        this.Wu = t, this.zu = n, this.Ku = i;
    }
    return t.Hu = function(n) {
        return new t(n, t.Ju, t.Yu);
    }, t.Xu = -1, t.$u = 1048576, t.Zu = 41943040, t.Ju = 10, t.Yu = 1e3, t.ts = new t(t.Zu, t.Ju, t.Yu), 
    t.DISABLED = new t(t.Xu, 0, 0), t;
}(), ji = /** @class */ function() {
    function t(t, n) {
        this.ns = t, this.$r = n, this.es = !1, this.rs = null;
    }
    return t.prototype.start = function(t) {
        bi(null === this.rs, "Cannot start an already started LruScheduler"), this.ns.params.Wu !== xi.Xu && this.us(t);
    }, t.prototype.stop = function() {
        this.rs && (this.rs.cancel(), this.rs = null);
    }, Object.defineProperty(t.prototype, "ss", {
        get: function() {
            return null !== this.rs;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.us = function(t) {
        var n = this;
        bi(null === this.rs, "Cannot schedule GC while a task is pending");
        var i = this.es ? 3e5 : 6e4;
        vi("LruGarbageCollector", "Garbage collection scheduled in " + i + "ms"), this.rs = this.$r.yu("lru_garbage_collection" /* LruGarbageCollection */ , i, (function() {
            return n.rs = null, n.es = !0, t.os(n.ns).then((function() {
                return n.us(t);
            })).catch(Gi);
        }));
    }, t;
}(), Li = /** @class */ function() {
    function t(t, n) {
        this.hs = t, this.params = n;
    }
    /** Given a percentile of target to collect, returns the number of targets to collect. */    return t.prototype.cs = function(t, n) {
        return this.hs.as(t).next((function(t) {
            return Math.floor(n / 100 * t);
        }));
    }, 
    /** Returns the nth sequence number, counting in order from the smallest. */
    t.prototype.fs = function(t, n) {
        var i = this;
        if (0 === n) return Oi.resolve(Ci.Xr);
        var e = new Vi(n);
        return this.hs.oe(t, (function(t) {
            return e.qu(t.sequenceNumber);
        })).next((function() {
            return i.hs.ls(t, (function(t) {
                return e.qu(t);
            }));
        })).next((function() {
            return e.maxValue;
        }));
    }, 
    /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */
    t.prototype.ds = function(t, n, i) {
        return this.hs.ds(t, n, i);
    }, 
    /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */
    t.prototype.vs = function(t, n) {
        return this.hs.vs(t, n);
    }, t.prototype.ws = function(t, n) {
        var i = this;
        return this.params.Wu === xi.Xu ? (vi("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        Oi.resolve(Ui)) : this.ms(t).next((function(e) {
            return e < i.params.Wu ? (vi("LruGarbageCollector", "Garbage collection skipped; Cache size " + e + " is lower than threshold " + i.params.Wu), 
            Ui) : i.gs(t, n);
        }));
    }, t.prototype.ms = function(t) {
        return this.hs.ms(t);
    }, t.prototype.gs = function(t, n) {
        var i, e, r, u, s, o, h, c = this, a = Date.now();
        return this.cs(t, this.params.zu).next((function(n) {
            // Cap at the configured max
            return n > c.params.Ku ? (vi("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.params.Ku + " from " + n), 
            e = c.params.Ku) : e = n, u = Date.now(), c.fs(t, e);
        })).next((function(e) {
            return i = e, s = Date.now(), c.ds(t, i, n);
        })).next((function(n) {
            return r = n, o = Date.now(), c.vs(t, i);
        })).next((function(t) {
            (h = Date.now(), li() <= 0 /* DEBUG */) && vi("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (u - a) + "ms\n\tDetermined least recently used " + e + " in " + (s - u) + "ms\n\tRemoved " + r + " targets in " + (o - s) + "ms\n\tRemoved " + t + " documents in " + (h - o) + "ms\nTotal Duration: " + (h - a) + "ms");
            return Oi.resolve({
                Bu: !0,
                Mu: e,
                Qu: r,
                Gu: t
            });
        }));
    }, t;
}(), qi = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.bs = new Tt(Bi.Rn), 
        // A set of outstanding references to a document sorted by target id.
        this.ps = new Tt(Bi.ys);
    }
    /** Returns true if the reference set contains no references. */    return t.prototype.Y = function() {
        return this.bs.Y();
    }, 
    /** Adds a reference to the given document key for the given ID. */
    t.prototype._s = function(t, n) {
        var i = new Bi(t, n);
        this.bs = this.bs.add(i), this.ps = this.ps.add(i);
    }, 
    /** Add references to the given document keys for the given ID. */
    t.prototype.Is = function(t, n) {
        var i = this;
        t.forEach((function(t) {
            return i._s(t, n);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.Ts = function(t, n) {
        this.Es(new Bi(t, n));
    }, t.prototype.Ds = function(t, n) {
        var i = this;
        t.forEach((function(t) {
            return i.Ts(t, n);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Rs = function(t) {
        var n = this, i = bt.EMPTY, e = new Bi(i, t), r = new Bi(i, t + 1), u = [];
        return this.ps.qt([ e, r ], (function(t) {
            n.Es(t), u.push(t.key);
        })), u;
    }, t.prototype.Ss = function() {
        var t = this;
        this.bs.forEach((function(n) {
            return t.Es(n);
        }));
    }, t.prototype.Es = function(t) {
        this.bs = this.bs.delete(t), this.ps = this.ps.delete(t);
    }, t.prototype.As = function(t) {
        var n = bt.EMPTY, i = new Bi(n, t), e = new Bi(n, t + 1), r = Bn();
        return this.ps.qt([ i, e ], (function(t) {
            r = r.add(t.key);
        })), r;
    }, t.prototype.Cs = function(t) {
        var n = new Bi(t, 0), i = this.bs.Mt(n);
        return null !== i && t.isEqual(i.key);
    }, t;
}(), Bi = /** @class */ function() {
    function t(t, n) {
        this.key = t, this.Ps = n;
    }
    /** Compare by key then by ID */    return t.Rn = function(t, n) {
        return bt.W(t.key, n.key) || yi(t.Ps, n.Ps);
    }, 
    /** Compare by ID then by key */
    t.ys = function(t, n) {
        return yi(t.Ps, n.Ps) || bt.W(t.key, n.key);
    }, t;
}(), Mi = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.ks = new Si((function(t) {
            return t.toString();
        })), this.Ns = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return bi(void 0 !== this.Os, "Read time is not set. All removeEntry() calls must include a readTime if `trackRemovals` is used."), 
            this.Os;
        },
        set: function(t) {
            // Right now (for simplicity) we just track a single readTime for all the
            // added entries since we expect them to all be the same, but we could
            // rework to store per-entry readTimes if necessary.
            bi(void 0 === this.Os || this.Os.isEqual(t), "All changes in a RemoteDocumentChangeBuffer must have the same read time"), 
            this.Os = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Fs = function(t, n) {
        this.Vs(), this.readTime = n, this.ks.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Us = function(t, n) {
        this.Vs(), n && (this.readTime = n), this.ks.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.xs = function(t, n) {
        this.Vs();
        var i = this.ks.get(n);
        return void 0 !== i ? Oi.resolve(i) : this.js(t, n);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, n) {
        return this.Ls(t, n);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.Vs(), this.Ns = !0, this.qs(t);
    }, 
    /** Helper to assert this.changes is not null  */
    t.prototype.Vs = function() {
        bi(!this.Ns, "Changes have already been applied.");
    }, t;
}(), Qi = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, n, i) {
        this.persistence = t, this.Bs = n, 
        /**
         * The set of document references maintained by any local views.
         */
        this.Ms = new qi, 
        /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
        this.Qs = new pt(yi), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.Gs = new Si((function(t) {
            return t.canonicalId();
        })), 
        /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
        this.Ws = dt.MIN, bi(t.ss, "LocalStore was passed an unstarted persistence implementation"), 
        this.persistence.Ks.zs(this.Ms), this.Hs = t.Js(i), this.Ys = t.Xs(), this.$s = t.Zs(), 
        this.to = new ee(this.Ys, this.Hs, this.persistence.no()), this.Bs.io(this.to);
    }
    /** Starts the LocalStore. */    return t.prototype.start = function() {
        return this.eo();
    }, 
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    // PORTING NOTE: Android and iOS only return the documents affected by the
    // change.
    t.prototype.ro = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i, e, r = this;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return n = this.Hs, i = this.to, [ 4 /*yield*/ , this.persistence.runTransaction("Handle user change", "readonly", (function(e) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var u;
                        return r.Hs.uo(e).next((function(s) {
                            return u = s, n = r.persistence.Js(t), 
                            // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            i = new ee(r.Ys, n, r.persistence.no()), n.uo(e);
                        })).next((function(t) {
                            for (var n = [], r = [], s = Bn(), o = 0, h = u; o < h.length; o++) {
                                var c = h[o];
                                n.push(c.batchId);
                                for (var a = 0, f = c.mutations; a < f.length; a++) {
                                    var l = f[a];
                                    s = s.add(l.key);
                                }
                            }
                            for (var d = 0, v = t; d < v.length; d++) {
                                c = v[d];
                                r.push(c.batchId);
                                for (var w = 0, m = c.mutations; w < m.length; w++) {
                                    l = m[w];
                                    s = s.add(l.key);
                                }
                            }
                            // Return the set of all (potentially) changed documents and the list
                            // of mutation batch IDs that were affected by change.
                                                        return i.so(e, s).next((function(t) {
                                return {
                                    oo: t,
                                    ho: n,
                                    co: r
                                };
                            }));
                        }));
                    })) ];

                  case 1:
                    return e = u.sent(), this.Hs = n, this.to = i, this.Bs.io(this.to), [ 2 /*return*/ , e ];
                }
            }));
        }));
    }, 
    /* Accept locally generated Mutations and commit them to storage. */
    t.prototype.ao = function(t) {
        var n, i = this, e = lt.now(), r = t.reduce((function(t, n) {
            return t.add(n.key);
        }), Bn());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", (function(u) {
            // Load and apply all existing mutations. This lets us compute the
            // current base state for all non-idempotent transforms before applying
            // any additional user-provided writes.
            return i.to.so(u, r).next((function(r) {
                n = r;
                for (
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], o = 0, h = t; o < h.length; o++) {
                    var c = h[o], a = c.un(n.get(c.key));
                    null != a && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new Ut(c.key, a, a.sn(), Ot.exists(!0)));
                }
                return i.Hs.fo(u, e, s, t);
            }));
        })).then((function(t) {
            var i = t.Lr(n);
            return {
                batchId: t.batchId,
                ks: i
            };
        }));
    }, 
    /** Returns the local view of the documents affected by a mutation batch. */
    // PORTING NOTE: Multi-tab only.
    t.prototype.lo = function(t) {
        var n = this;
        return this.persistence.runTransaction("Lookup mutation documents", "readonly", (function(i) {
            return n.Hs.do(i, t).next((function(t) {
                return t ? n.to.so(i, t) : Oi.resolve(null);
            }));
        }));
    }, 
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    t.prototype.vo = function(t) {
        var n = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(i) {
            var e = t.batch.keys(), r = n.Ys.wo({
                mo: !0
            });
            return n.Hs.vo(i, t.batch, t.streamToken).next((function() {
                return n.bo(i, t, r);
            })).next((function() {
                return r.apply(i);
            })).next((function() {
                return n.Hs.po(i);
            })).next((function() {
                return n.to.so(i, e);
            }));
        }));
    }, 
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    t.prototype.yo = function(t) {
        var n = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", (function(i) {
            var e;
            return n.Hs._o(i, t).next((function(t) {
                return bi(null !== t, "Attempt to reject nonexistent batch!"), e = t.keys(), n.Hs.Io(i, t);
            })).next((function() {
                return n.Hs.po(i);
            })).next((function() {
                return n.to.so(i, e);
            }));
        }));
    }, 
    /**
     * Returns the largest (latest) batch id in mutation queue that is pending server response.
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */
    t.prototype.To = function() {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(n) {
            return t.Hs.To(n);
        }));
    }, 
    /** Returns the last recorded stream token for the current user. */
    t.prototype.Eo = function() {
        var t = this;
        return this.persistence.runTransaction("Get last stream token", "readonly", (function(n) {
            return t.Hs.Eo(n);
        }));
    }, 
    /**
     * Sets the stream token for the current user without acknowledging any
     * mutation batch. This is usually only useful after a stream handshake or in
     * response to an error that requires clearing the stream token.
     */
    t.prototype.Do = function(t) {
        var n = this;
        return this.persistence.runTransaction("Set last stream token", "readwrite-primary", (function(i) {
            return n.Hs.Do(i, t);
        }));
    }, 
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    t.prototype.Ro = function() {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(n) {
            return t.$s.Ro(n);
        }));
    }, 
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    t.prototype.So = function(n) {
        var i = this, e = n.ai, r = this.Qs;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(u) {
            var s = i.Ys.wo({
                mo: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        r = i.Qs;
            var o = [];
            F(n.Ei, (function(n, s) {
                var h = r.get(n);
                if (h) {
                    // Only update the remote keys if the target is still active. This
                    // ensures that we can persist the updated target data along with
                    // the updated assignment.
                    o.push(i.$s.Ao(u, s.Oi, n).next((function() {
                        return i.$s.Co(u, s.ki, n);
                    })));
                    var c = s.resumeToken;
                    // Update the resume token if the change includes one.
                                        if (c.P() > 0) {
                        var a = h.li(c, e).fi(u.Po);
                        r = r.dt(n, a), 
                        // Update the target data if there are target changes (or if
                        // sufficient time has passed since the last update).
                        t.ko(h, a, s) && o.push(i.$s.No(u, a));
                    }
                }
            }));
            var h = Fn(), c = Bn();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
            if (n.Ri.forEach((function(t, n) {
                c = c.add(t);
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            o.push(s.getEntries(u, c).next((function(t) {
                n.Ri.forEach((function(r, c) {
                    var a = t.get(r);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.MIN) never add documents to
                    // cache.
                                        c instanceof sn && c.version.isEqual(dt.MIN) ? (
                    // NoDocuments with SnapshotVersion.MIN are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    s.Us(r, e), h = h.dt(r, c)) : null == a || c.version.B(a.version) > 0 || 0 === c.version.B(a.version) && a.hasPendingWrites ? (bi(!dt.MIN.isEqual(e), "Cannot add a document when the remote version is zero"), 
                    s.Fs(c, e), h = h.dt(r, c)) : vi("LocalStore", "Ignoring outdated watch update for ", r, ". Current version:", a.version, " Watch version:", c.version), 
                    n.Si.has(r) && o.push(i.persistence.Ks.Oo(u, r));
                }));
            }))), !e.isEqual(dt.MIN)) {
                var a = i.$s.Ro(u).next((function(t) {
                    return bi(e.B(t) >= 0, "Watch stream reverted to previous snapshot?? " + e + " < " + t), 
                    i.$s.Fo(u, u.Po, e);
                }));
                o.push(a);
            }
            return Oi.Vu(o).next((function() {
                return s.apply(u);
            })).next((function() {
                return i.to.Vo(u, h);
            }));
        })).then((function(t) {
            return i.Qs = r, t;
        }));
    }, 
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
    t.ko = function(t, n, i) {
        // Always persist target data if we don't already have a resume token.
        return bi(n.resumeToken.P() > 0, "Attempted to persist target data with no resume token"), 
        0 === t.resumeToken.P() || (n.ai.M() - t.ai.M() >= this.Uo || i.ki.size + i.Ni.size + i.Oi.size > 0);
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        }, 
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    t.prototype.xo = function(t) {
        for (var n = this, i = 0, e = t; i < e.length; i++) {
            var r = e[i], u = r.targetId;
            if (this.Ms.Is(r.Gr, u), this.Ms.Ds(r.Wr, u), !r.fromCache) {
                var s = this.Qs.get(u);
                bi(null !== s, "Can't set limbo-free snapshot version for unknown target: " + u);
                // Advance the last limbo free snapshot version
                var o = s.ai, h = s.di(o);
                this.Qs = this.Qs.dt(u, h);
            }
        }
        return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(i) {
            return Oi.forEach(t, (function(t) {
                return Oi.forEach(t.Wr, (function(t) {
                    return n.persistence.Ks.Ts(i, t);
                }));
            }));
        }));
    }, 
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    t.prototype.jo = function(t) {
        var n = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", (function(i) {
            return void 0 === t && (t = -1), n.Hs.Lo(i, t);
        }));
    }, 
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    t.prototype.qo = function(t) {
        var n = this;
        return this.persistence.runTransaction("read document", "readonly", (function(i) {
            return n.to.Bo(i, t);
        }));
    }, 
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    t.prototype.Mo = function(t) {
        var n = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", (function(i) {
            var e;
            return n.$s.Qo(i, t).next((function(r) {
                return r ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                e = r, Oi.resolve(e)) : n.$s.Go(i).next((function(r) {
                    return e = new An(t, r, 0 /* Listen */ , i.Po), n.$s.Wo(i, e).next((function() {
                        return e;
                    }));
                }));
            }));
        })).then((function(i) {
            return null === n.Qs.get(i.targetId) && (n.Qs = n.Qs.dt(i.targetId, i), n.Gs.set(t, i.targetId)), 
            i;
        }));
    }, 
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.
    t.prototype.Qo = function(t, n) {
        var i = this.Gs.get(n);
        return void 0 !== i ? Oi.resolve(this.Qs.get(i)) : this.$s.Qo(t, n);
    }, 
    /**
     * Unpin all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
    t.prototype.zo = function(t, n) {
        var i = this, e = this.Qs.get(t);
        bi(null !== e, "Tried to release nonexistent target: " + t);
        var r = n ? "readwrite" : "readwrite-primary";
        return this.persistence.runTransaction("Release target", r, (function(r) {
            // References for documents sent via Watch are automatically removed
            // when we delete a target's data from the reference delegate.
            // Since this does not remove references for locally mutated documents,
            // we have to remove the target associations for these documents
            // manually.
            // This operation needs to be run inside the transaction since EagerGC
            // uses the local view references during the transaction's commit.
            // Fortunately, the operation is safe to be re-run in case the
            // transaction fails since there are no side effects if the target has
            // already been removed.
            var u = i.Ms.Rs(t);
            return n ? Oi.resolve() : Oi.forEach(u, (function(t) {
                return i.persistence.Ks.Ts(r, t);
            })).next((function() {
                i.persistence.Ks.removeTarget(r, e);
            }));
        })).then((function() {
            i.Qs = i.Qs.remove(t), i.Gs.delete(e.target);
        }));
    }, 
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */
    t.prototype.Ko = function(t, n) {
        var i = this, e = dt.MIN, r = Bn();
        return this.persistence.runTransaction("Execute query", "readonly", (function(u) {
            return i.Qo(u, t.Yn()).next((function(t) {
                if (t) return e = t.lastLimboFreeSnapshotVersion, i.$s.Ho(u, t.targetId).next((function(t) {
                    r = t;
                }));
            })).next((function() {
                return i.Bs.Jo(u, t, n ? e : dt.MIN, n ? r : Bn());
            })).next((function(t) {
                return {
                    documents: t,
                    Yo: r
                };
            }));
        }));
    }, 
    /**
     * Returns the keys of the documents that are associated with the given
     * target id in the remote table.
     */
    t.prototype.Xo = function(t) {
        var n = this;
        return this.persistence.runTransaction("Remote document keys", "readonly", (function(i) {
            return n.$s.Ho(i, t);
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.$o = function() {
        return this.persistence.$o();
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.Zo = function(t) {
        this.Hs.th(t);
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.nh = function(t) {
        this.persistence.nh(t);
    }, t.prototype.bo = function(t, n, i) {
        var e = this, r = n.batch, u = r.keys(), s = Oi.resolve();
        return u.forEach((function(e) {
            s = s.next((function() {
                return i.xs(t, e);
            })).next((function(t) {
                var u = t, s = n.Br.get(e);
                bi(null !== s, "ackVersions should contain every doc in the write."), (!u || u.version.B(s) < 0) && ((u = r.zt(e, u, n)) ? 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                i.Fs(u, n.qr) : bi(!t, "Mutation batch " + r + " applied to document " + t + " resulted in null"));
            }));
        })), s.next((function() {
            return e.Hs.Io(t, r);
        }));
    }, t.prototype.os = function(t) {
        var n = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(i) {
            return t.ws(i, n.Qs);
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.ih = function(t) {
        var n = this, i = this.Qs.get(t);
        return i ? Promise.resolve(i.target) : this.persistence.runTransaction("Get target data", "readonly", (function(i) {
            return n.$s.be(i, t).next((function(t) {
                return t ? t.target : null;
            }));
        }));
    }, 
    /**
     * Returns the set of documents that have been updated since the last call.
     * If this is the first call, returns the set of changes since client
     * initialization. Further invocations will return document changes since
     * the point of rejection.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.eh = function() {
        var t = this;
        return this.persistence.runTransaction("Get new document changes", "readonly", (function(n) {
            return t.Ys.eh(n, t.Ws);
        })).then((function(n) {
            var i = n.rh, e = n.readTime;
            return t.Ws = e, i;
        }));
    }, 
    /**
     * Reads the newest document change from persistence and forwards the internal
     * synchronization marker so that calls to `getNewDocumentChanges()`
     * only return changes that happened after client initialization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.eo = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return tslib.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return t = this, [ 4 /*yield*/ , this.persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                        return n.Ys.uh(t);
                    })) ];

                  case 1:
                    return t.Ws = i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * The maximum time to leave a resume token buffered without writing it out.
     * This value is arbitrary: it's long enough to avoid several writes
     * (possibly indefinitely if updates come more frequently than this) but
     * short enough that restarting after crashing will still have a pretty
     * recent resume token.
     */
    t.Uo = 3e8, t;
}();

/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */
function Gi(t) {
    return tslib.__awaiter(this, void 0, void 0, (function() {
        return tslib.__generator(this, (function(n) {
            if (t.code !== T.FAILED_PRECONDITION || t.message !== ne) throw t;
            return vi("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */
function Wi(t, n) {
    return bi(-1 === n.indexOf("_"), "Client key cannot contain '_', but was '" + n + "'"), 
    "firestore_clients_" + t + "_" + n;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>

// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */
function zi(t, n, i) {
    var e = "firestore_mutations_" + t + "_" + i;
    return n.t() && (e += "_" + n.uid), e;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */
function Ki(t, n) {
    return "firestore_targets_" + t + "_" + n;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hi = /** @class */ function() {
    function t(t, n, i, e) {
        this.user = t, this.batchId = n, this.state = i, this.error = e, bi(void 0 !== e == ("rejected" === i), "MutationMetadata must contain an error iff state is 'rejected'");
    }
    /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    return t.sh = function(n, i, e) {
        var r = JSON.parse(e), u = "object" == typeof r && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error), s = void 0;
        return u && r.error && (u = "string" == typeof r.error.message && "string" == typeof r.error.code) && (s = new E(r.error.code, r.error.message)), 
        u ? new t(n, i, r.state, s) : (wi("SharedClientState", "Failed to parse mutation state for ID '" + i + "': " + e), 
        null);
    }, t.prototype.oh = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Ji = /** @class */ function() {
    function t(t, n, i) {
        this.targetId = t, this.state = n, this.error = i, bi(void 0 !== i == ("rejected" === n), "QueryTargetMetadata must contain an error iff state is 'rejected'");
    }
    /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    return t.sh = function(n, i) {
        var e = JSON.parse(i), r = "object" == typeof e && -1 !== [ "not-current", "current", "rejected" ].indexOf(e.state) && (void 0 === e.error || "object" == typeof e.error), u = void 0;
        return r && e.error && (r = "string" == typeof e.error.message && "string" == typeof e.error.code) && (u = new E(e.error.code, e.error.message)), 
        r ? new t(n, e.state, u) : (wi("SharedClientState", "Failed to parse target state for ID '" + n + "': " + i), 
        null);
    }, t.prototype.oh = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Yi = /** @class */ function() {
    function t(t, n) {
        this.clientId = t, this.activeTargetIds = n;
    }
    /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    return t.sh = function(n, i) {
        for (var e = JSON.parse(i), r = "object" == typeof e && e.activeTargetIds instanceof Array, u = Qn(), s = 0; r && s < e.activeTargetIds.length; ++s) r = an(e.activeTargetIds[s]), 
        u = u.add(e.activeTargetIds[s]);
        return r ? new t(n, u) : (wi("SharedClientState", "Failed to parse client data for instance '" + n + "': " + i), 
        null);
    }, t;
}(), Xi = /** @class */ function() {
    function t(t, n) {
        this.clientId = t, this.onlineState = n;
    }
    /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    return t.sh = function(n) {
        var i = JSON.parse(n);
        return "object" == typeof i && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(i.onlineState) && "string" == typeof i.clientId ? new t(i.clientId, i.onlineState) : (wi("SharedClientState", "Failed to parse online state: " + n), 
        null);
    }, t;
}(), $i = /** @class */ function() {
    function t() {
        this.activeTargetIds = Qn();
    }
    return t.prototype.hh = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.ah = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.oh = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.nt(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), Zi = /** @class */ function() {
    function t(n, i, e, r, u) {
        if (this.fh = n, this.platform = i, this.persistenceKey = e, this.lh = r, this.dh = null, 
        this.vh = null, this.Kr = null, this.wh = {}, this.mh = this.gh.bind(this), this.ss = !1, 
        /**
         * Captures WebStorage events that occur before `start()` is called. These
         * events are replayed once `WebStorageSharedClientState` is started.
         */
        this.bh = [], !t.ph(this.platform)) throw new E(T.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
                var s = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.platform.window.localStorage, this.currentUser = u, this.yh = Wi(this.persistenceKey, this.lh), 
        this._h = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.wh[this.lh] = new $i, this.Ih = new RegExp("^firestore_clients_" + s + "_([^_]*)$"), 
        this.Th = new RegExp("^firestore_mutations_" + s + "_(\\d+)(?:_(.*))?$"), this.Eh = new RegExp("^firestore_targets_" + s + "_(\\d+)$"), 
        this.Dh = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }
        // The WebStorage key prefix for the key that stores the last sequence number allocated. The key
        // looks like 'firestore_sequence_number_<persistence_prefix>'.
        (this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.platform.window.addEventListener("storage", this.mh);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return t.ph = function(t) {
        return !(!t.window || null == t.window.localStorage);
    }, t.prototype.start = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var t, n, i, e, r, s, o, h, c, a, f, l = this;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return bi(!this.ss, "WebStorageSharedClientState already started"), bi(null !== this.dh, "syncEngine property must be set before calling start()"), 
                    bi(null !== this.vh, "onlineStateHandler property must be set before calling start()"), 
                    [ 4 /*yield*/ , this.dh.$o() ];

                  case 1:
                    for (t = u.sent(), n = 0, i = t; n < i.length; n++) (e = i[n]) !== this.lh && (r = this.getItem(Wi(this.persistenceKey, e))) && (s = Yi.sh(e, r)) && (this.wh[s.clientId] = s);
                    for (this.Rh(), (o = this.storage.getItem(this.Dh)) && (h = this.Sh(o)) && this.Ah(h), 
                    c = 0, a = this.bh; c < a.length; c++) f = a[c], this.gh(f);
                    return this.bh = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.platform.window.addEventListener("unload", (function() {
                        return l.shutdown();
                    })), this.ss = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Yr = function(t) {
        this.setItem(this._h, JSON.stringify(t));
    }, t.prototype.Ch = function() {
        var t = Qn();
        return V(this.wh, (function(n, i) {
            t = t.Qt(i.activeTargetIds);
        })), t;
    }, t.prototype.Ph = function(t) {
        // This is not using `obj.forEach` since `forEach` doesn't support early
        // return.
        for (var n in this.wh) if (this.wh.hasOwnProperty(n) && this.wh[n].activeTargetIds.has(t)) return !0;
        return !1;
    }, t.prototype.kh = function(t) {
        this.Nh(t, "pending");
    }, t.prototype.Oh = function(t, n, i) {
        this.Nh(t, n, i), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.Fh(t);
    }, t.prototype.Vh = function(t) {
        var n = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.Ph(t)) {
            var i = this.storage.getItem(Ki(this.persistenceKey, t));
            if (i) {
                var e = Ji.sh(t, i);
                e && (n = e.state);
            }
        }
        return this.Uh.hh(t), this.Rh(), n;
    }, t.prototype.xh = function(t) {
        this.Uh.ah(t), this.Rh();
    }, t.prototype.jh = function(t) {
        return this.Uh.activeTargetIds.has(t);
    }, t.prototype.Lh = function(t) {
        this.removeItem(Ki(this.persistenceKey, t));
    }, t.prototype.qh = function(t, n, i) {
        this.Bh(t, n, i);
    }, t.prototype.ro = function(t, n, i) {
        var e = this;
        n.forEach((function(t) {
            e.Fh(t);
        })), this.currentUser = t, i.forEach((function(t) {
            e.kh(t);
        }));
    }, t.prototype.Mh = function(t) {
        this.Qh(t);
    }, t.prototype.shutdown = function() {
        this.ss && (this.platform.window.removeEventListener("storage", this.mh), this.removeItem(this.yh), 
        this.ss = !1);
    }, t.prototype.getItem = function(t) {
        var n = this.storage.getItem(t);
        return vi("SharedClientState", "READ", t, n), n;
    }, t.prototype.setItem = function(t, n) {
        vi("SharedClientState", "SET", t, n), this.storage.setItem(t, n);
    }, t.prototype.removeItem = function(t) {
        vi("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, t.prototype.gh = function(t) {
        var n = this;
        if (t.storageArea === this.storage) {
            if (vi("SharedClientState", "EVENT", t.key, t.newValue), t.key === this.yh) return void wi("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.fh.ou((function() {
                return tslib.__awaiter(n, void 0, void 0, (function() {
                    var n, i, e, r, s, o;
                    return tslib.__generator(this, (function(u) {
                        if (!this.ss) return this.bh.push(t), [ 2 /*return*/ ];
                        if (null === t.key) return [ 2 /*return*/ ];
                        if (this.Ih.test(t.key)) {
                            if (null == t.newValue) return i = this.Gh(t.key), [ 2 /*return*/ , this.Wh(i, null) ];
                            if (n = this.zh(t.key, t.newValue)) return [ 2 /*return*/ , this.Wh(n.clientId, n) ];
                        } else if (this.Th.test(t.key)) {
                            if (null !== t.newValue && (e = this.Kh(t.key, t.newValue))) return [ 2 /*return*/ , this.Hh(e) ];
                        } else if (this.Eh.test(t.key)) {
                            if (null !== t.newValue && (r = this.Jh(t.key, t.newValue))) return [ 2 /*return*/ , this.Yh(r) ];
                        } else if (t.key === this.Dh) {
                            if (null !== t.newValue && (s = this.Sh(t.newValue))) return [ 2 /*return*/ , this.Ah(s) ];
                        } else t.key === this._h && (bi(!!this.Kr, "Missing sequenceNumberHandler"), (o = function(t) {
                            var n = Ci.Xr;
                            if (null != t) try {
                                var i = JSON.parse(t);
                                bi("number" == typeof i, "Found non-numeric sequence number"), n = i;
                            } catch (t) {
                                wi("SharedClientState", "Failed to read sequence number from WebStorage", t);
                            }
                            return n;
                        }
                        /**
 * `MemorySharedClientState` is a simple implementation of SharedClientState for
 * clients using memory persistence. The state in this class remains fully
 * isolated and no synchronization is performed.
 */ (t.newValue)) !== Ci.Xr && this.Kr(o));
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(t.prototype, "Uh", {
        get: function() {
            return this.wh[this.lh];
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Rh = function() {
        this.setItem(this.yh, this.Uh.oh());
    }, t.prototype.Nh = function(t, n, i) {
        var e = new Hi(this.currentUser, t, n, i), r = zi(this.persistenceKey, this.currentUser, t);
        this.setItem(r, e.oh());
    }, t.prototype.Fh = function(t) {
        var n = zi(this.persistenceKey, this.currentUser, t);
        this.removeItem(n);
    }, t.prototype.Qh = function(t) {
        var n = {
            clientId: this.lh,
            onlineState: t
        };
        this.storage.setItem(this.Dh, JSON.stringify(n));
    }, t.prototype.Bh = function(t, n, i) {
        var e = Ki(this.persistenceKey, t), r = new Ji(t, n, i);
        this.setItem(e, r.oh());
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.Gh = function(t) {
        var n = this.Ih.exec(t);
        return n ? n[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.zh = function(t, n) {
        var i = this.Gh(t);
        return bi(null !== i, "Cannot parse client state key '" + t + "'"), Yi.sh(i, n);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Kh = function(t, n) {
        var i = this.Th.exec(t);
        bi(null !== i, "Cannot parse mutation batch key '" + t + "'");
        var e = Number(i[1]), r = void 0 !== i[2] ? i[2] : null;
        return Hi.sh(new I(r), e, n);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Jh = function(t, n) {
        var i = this.Eh.exec(t);
        bi(null !== i, "Cannot parse query target key '" + t + "'");
        var e = Number(i[1]);
        return Ji.sh(e, n);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Sh = function(t) {
        return Xi.sh(t);
    }, t.prototype.Hh = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(n) {
                return t.user.uid !== this.currentUser.uid ? (vi("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), 
                [ 2 /*return*/ ]) : [ 2 /*return*/ , this.dh.Xh(t.batchId, t.state, t.error) ];
            }));
        }));
    }, t.prototype.Yh = function(t) {
        return this.dh.$h(t.targetId, t.state, t.error);
    }, t.prototype.Wh = function(t, n) {
        var i = this, e = this.Ch();
        n ? this.wh[t] = n : delete this.wh[t];
        var s = this.Ch(), o = [], h = [];
        return s.forEach((function(t) {
            return tslib.__awaiter(i, void 0, void 0, (function() {
                return tslib.__generator(this, (function(n) {
                    return e.has(t) || o.push(t), [ 2 /*return*/ ];
                }));
            }));
        })), e.forEach((function(t) {
            return tslib.__awaiter(i, void 0, void 0, (function() {
                return tslib.__generator(this, (function(n) {
                    return s.has(t) || h.push(t), [ 2 /*return*/ ];
                }));
            }));
        })), this.dh.Zh(o, h);
    }, t.prototype.Ah = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.wh[t.clientId] && this.vh(t.onlineState);
    }, t;
}();

/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
var te = /** @class */ function() {
    function t() {
        this.tc = new $i, this.nc = {}, this.dh = null, this.vh = null, this.Kr = null;
    }
    return t.prototype.kh = function(t) {
        // No op.
    }, t.prototype.Oh = function(t, n, i) {
        // No op.
    }, t.prototype.Vh = function(t) {
        return this.tc.hh(t), this.nc[t] || "not-current";
    }, t.prototype.qh = function(t, n, i) {
        this.nc[t] = n;
    }, t.prototype.xh = function(t) {
        this.tc.ah(t);
    }, t.prototype.jh = function(t) {
        return this.tc.activeTargetIds.has(t);
    }, t.prototype.Lh = function(t) {
        delete this.nc[t];
    }, t.prototype.Ch = function() {
        return this.tc.activeTargetIds;
    }, t.prototype.Ph = function(t) {
        return this.tc.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.tc = new $i, Promise.resolve();
    }, t.prototype.ro = function(t, n, i) {
        // No op.
    }, t.prototype.Mh = function(t) {
        // No op.
    }, t.prototype.shutdown = function() {}, t.prototype.Yr = function(t) {}, t;
}(), ne = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", ie = /** @class */ function() {
    function t() {
        this.ic = [];
    }
    return t.prototype.ec = function(t) {
        this.ic.push(t);
    }, t.prototype.rc = function() {
        this.ic.forEach((function(t) {
            return t();
        }));
    }, t;
}(), ee = /** @class */ function() {
    function t(t, n, i) {
        this.uc = t, this.Hs = n, this.sc = i;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */    return t.prototype.Bo = function(t, n) {
        var i = this;
        return this.Hs.oc(t, n).next((function(e) {
            return i.hc(t, n, e);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */
    t.prototype.hc = function(t, n, i) {
        return this.uc.xs(t, n).next((function(t) {
            for (var e = 0, r = i; e < r.length; e++) {
                t = r[e].Wt(n, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.cc = function(t, n, i) {
        var e = Vn();
        return n.forEach((function(t, n) {
            for (var r = 0, u = i; r < u.length; r++) {
                n = u[r].Wt(t, n);
            }
            e = e.dt(t, n);
        })), e;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.so = function(t, n) {
        var i = this;
        return this.uc.getEntries(t, n).next((function(n) {
            return i.Vo(t, n);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.Vo = function(t, n) {
        var i = this;
        return this.Hs.ac(t, n).next((function(e) {
            var r = i.cc(t, n, e), u = Fn();
            return r.forEach((function(t, n) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                n || (n = new sn(t, dt.q())), u = u.dt(t, n);
            })), u;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.MIN, return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.Jo = function(t, n, i) {
        return n.Nn() ? this.fc(t, n.path) : n.ui() ? this.lc(t, n, i) : this.dc(t, n, i);
    }, t.prototype.fc = function(t, n) {
        // Just do a simple document lookup.
        return this.Bo(t, new bt(n)).next((function(t) {
            var n = xn();
            return t instanceof un && (n = n.dt(t.key, t)), n;
        }));
    }, t.prototype.lc = function(t, n, i) {
        var e = this;
        bi(n.path.Y(), "Currently we only support collection group queries at the root.");
        var r = n.collectionGroup, u = xn();
        return this.sc.vc(t, r).next((function(s) {
            // Perform a collection query against each parent that contains the
            // collectionId and aggregate the results.
            return Oi.forEach(s, (function(s) {
                var o = n.Hn(s.child(r));
                return e.dc(t, o, i).next((function(t) {
                    t.forEach((function(t, n) {
                        u = u.dt(t, n);
                    }));
                }));
            })).next((function() {
                return u;
            }));
        }));
    }, t.prototype.dc = function(t, n, i) {
        var e, r, u = this;
        // Query the remote documents and overlay mutations.
                return this.uc.Jo(t, n, i).next((function(i) {
            return e = i, u.Hs.wc(t, n);
        })).next((function(n) {
            // It is possible that a PatchMutation can make a document match a query, even if
            // the version in the RemoteDocumentCache is not a match yet (waiting for server
            // to ack). To handle this, we find all document keys affected by the PatchMutations
            // that are not in `result` yet, and back fill them via `remoteDocumentCache.getEntries`,
            // otherwise those `PatchMutations` will be ignored because no base document can be found,
            // and lead to missing result for the query.
            return r = n, u.mc(t, r, e).next((function(t) {
                e = t;
                for (var n = 0, i = r; n < i.length; n++) for (var u = i[n], s = 0, o = u.mutations; s < o.length; s++) {
                    var h = o[s], c = h.key, a = e.get(c), f = h.Wt(a, a, u.En);
                    e = f instanceof un ? e.dt(c, f) : e.remove(c);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return e.forEach((function(t, i) {
                n.matches(i) || (e = e.remove(t));
            })), e;
        }));
    }, t.prototype.mc = function(t, n, i) {
        for (var e = Bn(), r = 0, u = n; r < u.length; r++) for (var s = 0, o = u[r].mutations; s < o.length; s++) {
            var h = o[s];
            h instanceof Ut && null === i.get(h.key) && (e = e.add(h.key));
        }
        var c = i;
        return this.uc.getEntries(t, e).next((function(t) {
            return t.forEach((function(t, n) {
                null !== n && n instanceof un && (c = c.dt(t, n));
            })), c;
        }));
    }, t;
}(), re = /** @class */ function() {
    function t() {}
    return t.prototype.io = function(t) {
        this.gc = t;
    }, t.prototype.Jo = function(t, n, i, e) {
        var r = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
        return bi(void 0 !== this.gc, "setLocalDocumentsView() not called"), n.Jn() || i.isEqual(dt.MIN) ? this.bc(t, n) : this.gc.so(t, e).next((function(u) {
            var s = r.pc(n, u);
            return (n.ii() || n.ei()) && r.yc(n.Fn, s, e, i) ? r.bc(t, n) : (li() <= 0 /* DEBUG */ && vi("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), n.toString()), 
            r.gc.Jo(t, n, i).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return s.forEach((function(n) {
                    t = t.dt(n.key, n);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */
    t.prototype.pc = function(t, n) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var i = new Tt((function(n, i) {
            return t.Xn(n, i);
        }));
        return n.forEach((function(n, e) {
            e instanceof un && t.matches(e) && (i = i.add(e));
        })), i;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.yc = function(t, n, i, e) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (i.size !== n.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var r = "F" /* First */ === t ? n.last() : n.first();
        return !!r && (r.hasPendingWrites || r.version.B(e) > 0);
    }, t.prototype.bc = function(t, n) {
        return li() <= 0 /* DEBUG */ && vi("IndexFreeQueryEngine", "Using full collection scan to execute query: %s", n.toString()), 
        this.gc.Jo(t, n, dt.MIN);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function ue(t) {
    for (var n = "", i = 0; i < t.length; i++) n.length > 0 && (n = oe(n)), n = se(t.get(i), n);
    return oe(n);
}

/** Encodes a single segment of a resource path into the given result */ function se(t, n) {
    for (var i = n, e = t.length, r = 0; r < e; r++) {
        var u = t.charAt(r);
        switch (u) {
          case "\0":
            i += "";
            break;

          case "":
            i += "";
            break;

          default:
            i += u;
        }
    }
    return i;
}

/** Encodes a path separator into the given result */ function oe(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function he(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var n = t.length;
    if (bi(n >= 2, "Invalid path " + t), 2 === n) return bi("" === t.charAt(0) && "" === t.charAt(1), "Non-empty path " + t + " had length 2"), 
    wt.rt;
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var i = n - 2, e = [], r = "", u = 0; u < n; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", u);
        switch ((s < 0 || s > i) && gi('Invalid encoded resource path: "' + t + '"'), t.charAt(s + 1)) {
          case "":
            var o = t.substring(u, s), h = void 0;
            0 === r.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            h = o : (h = r += o, r = ""), e.push(h);
            break;

          case "":
            r += t.substring(u, s), r += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            r += t.substring(u, s + 1);
            break;

          default:
            gi('Invalid encoded resource path: "' + t + '"');
        }
        u = s + 2;
    }
    return new wt(e);
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ var ce = /** @class */ function() {
    function t() {
        this._c = new ae;
    }
    return t.prototype.Ic = function(t, n) {
        return this._c.add(n), Oi.resolve();
    }, t.prototype.vc = function(t, n) {
        return Oi.resolve(this._c.getEntries(n));
    }, t;
}(), ae = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        bi(t.length % 2 == 1, "Expected a collection path.");
        var n = t.$(), i = t.J(), e = this.index[n] || new Tt(wt.W), r = !e.has(i);
        return this.index[n] = e.add(i), r;
    }, t.prototype.has = function(t) {
        var n = t.$(), i = t.J(), e = this.index[n];
        return e && e.has(i);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new Tt(wt.W)).nt();
    }, t;
}(), fe = /** @class */ function() {
    function t(t, n) {
        this.sc = t, this.Ks = n, 
        /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this.Hs = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Tc = 1, 
        /** The last received stream token from the server, used to acknowledge which
         * responses the client has processed. Stream tokens are opaque checkpoint
         * markers whose only real value is their inclusion in the next request.
         */
        this.lastStreamToken = rt.k, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.Ec = new Tt(Bi.Rn);
    }
    return t.prototype.Dc = function(t) {
        return Oi.resolve(0 === this.Hs.length);
    }, t.prototype.vo = function(t, n, i) {
        var e = n.batchId, r = this.Rc(e, "acknowledged");
        bi(0 === r, "Can only acknowledge the first batch in the mutation queue");
        // Verify that the batch in the queue is the one to be acknowledged.
        var u = this.Hs[r];
        return bi(e === u.batchId, "Queue ordering failure: expected batch " + e + ", got batch " + u.batchId), 
        this.lastStreamToken = i, Oi.resolve();
    }, t.prototype.Eo = function(t) {
        return Oi.resolve(this.lastStreamToken);
    }, t.prototype.Do = function(t, n) {
        return this.lastStreamToken = n, Oi.resolve();
    }, t.prototype.fo = function(t, n, i, e) {
        bi(0 !== e.length, "Mutation batches should not be empty");
        var r = this.Tc;
        (this.Tc++, this.Hs.length > 0) && bi(this.Hs[this.Hs.length - 1].batchId < r, "Mutation batchIDs must be monotonically increasing order");
        var u = new Di(r, n, i, e);
        this.Hs.push(u);
        // Track references by document key and index collection parents.
        for (var s = 0, o = e; s < o.length; s++) {
            var h = o[s];
            this.Ec = this.Ec.add(new Bi(h.key, r)), this.sc.Ic(t, h.key.path.J());
        }
        return Oi.resolve(u);
    }, t.prototype._o = function(t, n) {
        return Oi.resolve(this.Sc(n));
    }, t.prototype.do = function(t, n) {
        var i = this.Sc(n);
        return bi(null != i, "Failed to find local mutation batch."), Oi.resolve(i.keys());
    }, t.prototype.Lo = function(t, n) {
        var i = n + 1, e = this.Ac(i), r = e < 0 ? 0 : e;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Oi.resolve(this.Hs.length > r ? this.Hs[r] : null);
    }, t.prototype.To = function() {
        return Oi.resolve(0 === this.Hs.length ? -1 : this.Tc - 1);
    }, t.prototype.uo = function(t) {
        return Oi.resolve(this.Hs.slice());
    }, t.prototype.oc = function(t, n) {
        var i = this, e = new Bi(n, 0), r = new Bi(n, Number.POSITIVE_INFINITY), u = [];
        return this.Ec.qt([ e, r ], (function(t) {
            bi(n.isEqual(t.key), "Should only iterate over a single key's batches");
            var e = i.Sc(t.Ps);
            bi(null !== e, "Batches in the index must exist in the main table"), u.push(e);
        })), Oi.resolve(u);
    }, t.prototype.ac = function(t, n) {
        var i = this, e = new Tt(yi);
        return n.forEach((function(t) {
            var n = new Bi(t, 0), r = new Bi(t, Number.POSITIVE_INFINITY);
            i.Ec.qt([ n, r ], (function(n) {
                bi(t.isEqual(n.key), "For each key, should only iterate over a single key's batches"), 
                e = e.add(n.Ps);
            }));
        })), Oi.resolve(this.Cc(e));
    }, t.prototype.wc = function(t, n) {
        bi(!n.ui(), "CollectionGroup queries should be handled in LocalDocumentsView");
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var i = n.path, e = i.length + 1, r = i;
        bt.ct(r) || (r = r.child(""));
        var u = new Bi(new bt(r), 0), s = new Tt(yi);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.Ec.Bt((function(t) {
            var n = t.key.path;
            return !!i.Z(n) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            n.length === e && (s = s.add(t.Ps)), !0);
        }), u), Oi.resolve(this.Cc(s));
    }, t.prototype.Cc = function(t) {
        var n = this, i = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var e = n.Sc(t);
            null !== e && i.push(e);
        })), i;
    }, t.prototype.Io = function(t, n) {
        var i = this;
        // Find the position of the first batch for removal. This need not be the
        // first entry in the queue.
                bi(0 === this.Rc(n.batchId, "removed"), "Can only remove the first entry of the mutation queue"), 
        this.Hs.shift();
        var e = this.Ec;
        return Oi.forEach(n.mutations, (function(r) {
            var u = new Bi(r.key, n.batchId);
            return e = e.delete(u), i.Ks.Pc(t, r.key);
        })).next((function() {
            i.Ec = e;
        }));
    }, t.prototype.th = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.Cs = function(t, n) {
        var i = new Bi(n, 0), e = this.Ec.Mt(i);
        return Oi.resolve(n.isEqual(e && e.key));
    }, t.prototype.po = function(t) {
        return 0 === this.Hs.length && bi(this.Ec.Y(), "Document leak -- detected dangling mutation references when queue is empty."), 
        Oi.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.Rc = function(t, n) {
        var i = this.Ac(t);
        return bi(i >= 0 && i < this.Hs.length, "Batches must exist to be " + n), i;
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.Ac = function(t) {
        return 0 === this.Hs.length ? 0 : t - this.Hs[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Sc = function(t) {
        var n = this.Ac(t);
        if (n < 0 || n >= this.Hs.length) return null;
        var i = this.Hs[n];
        return bi(i.batchId === t, "If found batch must match"), i;
    }, t;
}();

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */ var le = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, n) {
        this.sc = t, this.kc = n, 
        /** Underlying cache of documents and their read times. */
        this.docs = new pt(bt.W), 
        /** Size of all cached documents. */
        this.size = 0;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    return t.prototype.Fs = function(t, n, i) {
        bi(!i.isEqual(dt.MIN), "Cannot add a document with a read time of zero");
        var e = n.key, r = this.docs.get(e), u = r ? r.size : 0, s = this.kc(n);
        return this.docs = this.docs.dt(e, {
            Nc: n,
            size: s,
            readTime: i
        }), this.size += s - u, this.sc.Ic(t, e.path.J());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Us = function(t) {
        var n = this.docs.get(t);
        n && (this.docs = this.docs.remove(t), this.size -= n.size);
    }, t.prototype.xs = function(t, n) {
        var i = this.docs.get(n);
        return Oi.resolve(i ? i.Nc : null);
    }, t.prototype.getEntries = function(t, n) {
        var i = this, e = Vn();
        return n.forEach((function(t) {
            var n = i.docs.get(t);
            e = e.dt(t, n ? n.Nc : null);
        })), Oi.resolve(e);
    }, t.prototype.Jo = function(t, n, i) {
        bi(!n.ui(), "CollectionGroup queries should be handled in LocalDocumentsView");
        for (var e = xn(), r = new bt(n.path.child("")), u = this.docs._t(r)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; u.St(); ) {
            var s = u.Rt(), o = s.key, h = s.value, c = h.Nc, a = h.readTime;
            if (!n.path.Z(o.path)) break;
            a.B(i) <= 0 || c instanceof un && n.matches(c) && (e = e.dt(c.key, c));
        }
        return Oi.resolve(e);
    }, t.prototype.Oc = function(t, n) {
        return Oi.forEach(this.docs, (function(t) {
            return n(t);
        }));
    }, t.prototype.eh = function(t, n) {
        throw new Error("getNewDocumentChanges() is not supported with MemoryPersistence");
    }, t.prototype.uh = function(t) {
        return Oi.resolve(dt.MIN);
    }, t.prototype.wo = function(n) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.Fc(this);
    }, t.prototype.Vc = function(t) {
        return Oi.resolve(this.size);
    }, 
    /**
     * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
     */
    t.Fc = /** @class */ function(t) {
        function i(n) {
            var i = t.call(this) || this;
            return i.Uc = n, i;
        }
        return tslib.__extends(i, t), i.prototype.qs = function(t) {
            var n = this, i = [];
            return this.ks.forEach((function(e, r) {
                r ? i.push(n.Uc.Fs(t, r, n.readTime)) : n.Uc.Us(e);
            })), Oi.Vu(i);
        }, i.prototype.js = function(t, n) {
            return this.Uc.xs(t, n);
        }, i.prototype.Ls = function(t, n) {
            return this.Uc.getEntries(t, n);
        }, i;
    }(Mi), t;
}(), de = /** @class */ function() {
    /**
     * Instantiates a new TargetIdGenerator. If a seed is provided, the generator
     * will use the seed value as the next target ID.
     */
    function t(t, n) {
        this.xc = t, bi((1 & t) === t, "Generator ID " + t + " contains more than 1 reserved bits"), 
        this.jc(void 0 !== n ? n : this.xc);
    }
    return t.prototype.next = function() {
        var t = this.Lc;
        return this.Lc += 2, t;
    }, 
    /**
     * Returns the ID that follows the given ID. Subsequent calls to `next()`
     * use the newly returned target ID as their base.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.after = function(t) {
        return this.jc(t + 2), this.next();
    }, t.prototype.jc = function(t) {
        bi((1 & t) === this.xc, "Cannot supply target ID from different generator ID"), 
        this.Lc = t;
    }, t.qc = function() {
        return new t(0 /* QueryCache */ , 2);
    }, t.Bc = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(1 /* SyncEngine */);
    }, t;
}(), ve = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
         * Maps a target to the data about that target
         */
        this.Mc = new Si((function(t) {
            return t.canonicalId();
        })), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = dt.MIN, 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.Qc = 0, 
        /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this.Gc = new qi, this.targetCount = 0, this.Wc = de.qc();
    }
    return t.prototype.oe = function(t, n) {
        return this.Mc.forEach((function(t, i) {
            return n(i);
        })), Oi.resolve();
    }, t.prototype.Ro = function(t) {
        return Oi.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.zc = function(t) {
        return Oi.resolve(this.Qc);
    }, t.prototype.Go = function(t) {
        var n = this.Wc.after(this.highestTargetId);
        return this.highestTargetId = n, Oi.resolve(n);
    }, t.prototype.Fo = function(t, n, i) {
        return i && (this.lastRemoteSnapshotVersion = i), n > this.Qc && (this.Qc = n), 
        Oi.resolve();
    }, t.prototype.Kc = function(t) {
        this.Mc.set(t.target, t);
        var n = t.targetId;
        n > this.highestTargetId && (this.highestTargetId = n), t.sequenceNumber > this.Qc && (this.Qc = t.sequenceNumber);
    }, t.prototype.Wo = function(t, n) {
        return bi(!this.Mc.has(n.target), "Adding a target that already exists"), this.Kc(n), 
        this.targetCount += 1, Oi.resolve();
    }, t.prototype.No = function(t, n) {
        return bi(this.Mc.has(n.target), "Updating a non-existent target"), this.Kc(n), 
        Oi.resolve();
    }, t.prototype.Hc = function(t, n) {
        return bi(this.targetCount > 0, "Removing a target from an empty cache"), bi(this.Mc.has(n.target), "Removing a non-existent target from the cache"), 
        this.Mc.delete(n.target), this.Gc.Rs(n.targetId), this.targetCount -= 1, Oi.resolve();
    }, t.prototype.ds = function(t, n, i) {
        var e = this, r = 0, u = [];
        return this.Mc.forEach((function(s, o) {
            o.sequenceNumber <= n && null === i.get(o.targetId) && (e.Mc.delete(s), u.push(e.Jc(t, o.targetId)), 
            r++);
        })), Oi.Vu(u).next((function() {
            return r;
        }));
    }, t.prototype.Yc = function(t) {
        return Oi.resolve(this.targetCount);
    }, t.prototype.Qo = function(t, n) {
        var i = this.Mc.get(n) || null;
        return Oi.resolve(i);
    }, t.prototype.be = function(t, n) {
        // This method is only needed for multi-tab and we can't implement it
        // efficiently without additional data structures.
        return gi("Not yet implemented.");
    }, t.prototype.Co = function(t, n, i) {
        this.Gc.Is(n, i);
        var e = this.persistence.Ks, r = [];
        return e && n.forEach((function(n) {
            r.push(e._s(t, n));
        })), Oi.Vu(r);
    }, t.prototype.Ao = function(t, n, i) {
        this.Gc.Ds(n, i);
        var e = this.persistence.Ks, r = [];
        return e && n.forEach((function(n) {
            r.push(e.Ts(t, n));
        })), Oi.Vu(r);
    }, t.prototype.Jc = function(t, n) {
        return this.Gc.Rs(n), Oi.resolve();
    }, t.prototype.Ho = function(t, n) {
        var i = this.Gc.As(n);
        return Oi.resolve(i);
    }, t.prototype.Cs = function(t, n) {
        return Oi.resolve(this.Gc.Cs(n));
    }, t;
}(), we = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", me = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t, n) {
        var i = this;
        this.clientId = t, this.Xc = {}, this.$c = new Ci(0), this.Zc = !1, this.Zc = !0, 
        this.Ks = n(this), this.$s = new ve(this);
        this.sc = new ce, this.uc = new le(this.sc, (function(t) {
            return i.Ks.ta(t);
        }));
    }
    return t.prototype.shutdown = function() {
        // No durable state to ensure is closed on shutdown.
        return this.Zc = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "ss", {
        get: function() {
            return this.Zc;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.$o = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                return [ 2 /*return*/ , [ this.clientId ] ];
            }));
        }));
    }, t.prototype.na = function(t) {
        // All clients using memory persistence act as primary.
        return t(!0);
    }, t.prototype.ia = function() {
        // No op.
    }, t.prototype.nh = function(t) {
        // No op.
    }, t.prototype.no = function() {
        return this.sc;
    }, t.prototype.Js = function(t) {
        var n = this.Xc[t.i()];
        return n || (n = new fe(this.sc, this.Ks), this.Xc[t.i()] = n), n;
    }, t.prototype.Zs = function() {
        return this.$s;
    }, t.prototype.Xs = function() {
        return this.uc;
    }, t.prototype.runTransaction = function(t, n, i) {
        var e = this;
        vi("MemoryPersistence", "Starting transaction:", t);
        var r = new ge(this.$c.next());
        return this.Ks.ea(), i(r).next((function(t) {
            return e.Ks.ra(r).next((function() {
                return t;
            }));
        })).Ou().then((function(t) {
            return r.rc(), t;
        }));
    }, t.prototype.ua = function(t, n) {
        return Oi.Uu((i = this.Xc, e = [], V(i, (function(t, n) {
            return e.push(n);
        })), e).map((function(i) {
            return function() {
                return i.Cs(t, n);
            };
        })));
        var i, e;
    }, t;
}(), ge = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this) || this;
        return i.Po = n, i;
    }
    return tslib.__extends(i, t), i;
}(ie), be = /** @class */ function() {
    function t(t) {
        this.persistence = t, this.sa = null, this.oa = null;
    }
    return Object.defineProperty(t.prototype, "ha", {
        get: function() {
            if (this.oa) return this.oa;
            throw gi("orphanedDocuments is only valid during a transaction.");
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.zs = function(t) {
        this.sa = t;
    }, t.prototype._s = function(t, n) {
        return this.ha.delete(n), Oi.resolve();
    }, t.prototype.Ts = function(t, n) {
        return this.ha.add(n), Oi.resolve();
    }, t.prototype.Pc = function(t, n) {
        return this.ha.add(n), Oi.resolve();
    }, t.prototype.removeTarget = function(t, n) {
        var i = this, e = this.persistence.Zs();
        return e.Ho(t, n.targetId).next((function(t) {
            t.forEach((function(t) {
                return i.ha.add(t);
            }));
        })).next((function() {
            return e.Hc(t, n);
        }));
    }, t.prototype.ea = function() {
        this.oa = new Set;
    }, t.prototype.ra = function(t) {
        var n = this, i = this.persistence.Xs().wo();
        // Remove newly orphaned documents.
                return Oi.forEach(this.ha, (function(e) {
            return n.ca(t, e).next((function(t) {
                t || i.Us(e);
            }));
        })).next((function() {
            return n.oa = null, i.apply(t);
        }));
    }, t.prototype.Oo = function(t, n) {
        var i = this;
        return this.ca(t, n).next((function(t) {
            t ? i.ha.delete(n) : i.ha.add(n);
        }));
    }, t.prototype.ta = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.ca = function(t, n) {
        var i = this;
        return Oi.Uu([ function() {
            return i.persistence.Zs().Cs(t, n);
        }, function() {
            return i.persistence.ua(t, n);
        }, function() {
            return Oi.resolve(i.sa.Cs(n));
        } ]);
    }, t;
}(), pe = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t, n, i, e, r, u) {
        if (u.aa) throw new E(T.FAILED_PRECONDITION, we);
        return this.clientId = e, Promise.resolve();
    }, t.prototype.fa = function() {
        var t = !1;
        return {
            ss: t,
            start: function() {
                return t = !0;
            },
            stop: function() {
                return t = !1;
            }
        };
    }, t.prototype.la = function() {
        return bi(!!this.clientId, "initialize() not called"), new me(this.clientId, (function(t) {
            return new be(t);
        }));
    }, t.prototype.da = function() {
        return new te;
    }, t.prototype.clearPersistence = function() {
        throw new E(T.FAILED_PRECONDITION, we);
    }, t;
}(), ye = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    n, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    i, 
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */
    e, 
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */
    r) {
        void 0 === i && (i = 1e3), void 0 === e && (e = 1.5), void 0 === r && (r = 6e4), 
        this.fh = t, this.Zr = n, this.va = i, this.wa = e, this.ma = r, this.ga = 0, this.ba = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.pa = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.ga = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.ya = function() {
        this.ga = this.ma;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype._a = function(t) {
        var n = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var i = Math.floor(this.ga + this.Ia()), e = Math.max(0, Date.now() - this.pa), r = Math.max(0, i - e);
        // Guard against lastAttemptTime being in the future due to a clock change.
                this.ga > 0 && vi("ExponentialBackoff", "Backing off for " + r + " ms (base delay: " + this.ga + " ms, delay with jitter: " + i + " ms, last attempt: " + e + " ms ago)"), 
        this.ba = this.fh.yu(this.Zr, r, (function() {
            return n.pa = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.ga *= this.wa, this.ga < this.va && (this.ga = this.va), this.ga > this.ma && (this.ga = this.ma);
    }, t.prototype.cancel = function() {
        null !== this.ba && (this.ba.cancel(), this.ba = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
    t.prototype.Ia = function() {
        return (Math.random() - .5) * this.ga;
    }, t;
}(), _e = /** @class */ function() {
    function t(t, n, i, e, r, u) {
        this.fh = t, this.Ta = i, this.connection = e, this.Ea = r, this.listener = u, this.state = 0 /* Initial */ , 
        /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
        this.Da = 0, this.Ra = null, this.stream = null, this.Sa = new ye(t, n);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */    return t.prototype.Aa = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.Ca = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? (bi(0 /* Initial */ === this.state, "Already started"), 
        this.auth()) : this.Pa();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Aa() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.ka = function() {
        bi(!this.Aa(), "Can only inhibit backoff in a stopped state"), this.state = 0 /* Initial */ , 
        this.Sa.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.Na = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.Ca() && null === this.Ra && (this.Ra = this.fh.yu(this.Ta, 6e4, (function() {
            return t.Oa();
        })));
    }, 
    /** Sends a message to the underlying stream. */
    t.prototype.Fa = function(t) {
        this.Va(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */
    t.prototype.Oa = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                return this.Ca() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */
    t.prototype.Va = function() {
        this.Ra && (this.Ra.cancel(), this.Ra = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t, n) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    return bi(this.Aa(), "Only started streams should be closed."), bi(3 /* Error */ === t || hn(n), "Can't provide an error when not in an error state."), 
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    this.Va(), this.Sa.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.Da++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.Sa.reset() : n && n.code === T.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    wi(n.toString()), wi("Using maximum backoff delay to prevent overloading the backend."), 
                    this.Sa.ya()) : n && n.code === T.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.Ea.l(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.Ua(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.xa(n) ];

                  case 1:
                    // Notify the listener that the stream closed.
                    return i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.Ua = function() {}, t.prototype.auth = function() {
        var t = this;
        bi(0 /* Initial */ === this.state, "Must be in initial state to auth"), this.state = 1 /* Starting */;
        var n = this.ja(this.Da), i = this.Da;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.Ea.getToken().then((function(n) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Da === i && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.La(n);
        }), (function(i) {
            n((function() {
                var n = new E(T.UNKNOWN, "Fetching auth token failed: " + i.message);
                return t.qa(n);
            }));
        }));
    }, t.prototype.La = function(t) {
        var n = this;
        bi(1 /* Starting */ === this.state, "Trying to start stream in a non-starting state");
        var i = this.ja(this.Da);
        this.stream = this.Ba(t), this.stream.Ma((function() {
            i((function() {
                return bi(1 /* Starting */ === n.state, "Expected stream to be in state Starting, but was " + n.state), 
                n.state = 2 /* Open */ , n.listener.Ma();
            }));
        })), this.stream.xa((function(t) {
            i((function() {
                return n.qa(t);
            }));
        })), this.stream.onMessage((function(t) {
            i((function() {
                return n.onMessage(t);
            }));
        }));
    }, t.prototype.Pa = function() {
        var t = this;
        bi(3 /* Error */ === this.state, "Should only perform backoff when in Error state"), 
        this.state = 4 /* Backoff */ , this.Sa._a((function() {
            return tslib.__awaiter(t, void 0, void 0, (function() {
                return tslib.__generator(this, (function(t) {
                    return bi(4 /* Backoff */ === this.state, "Backoff elapsed but state is now: " + this.state), 
                    this.state = 0 /* Initial */ , this.start(), bi(this.Aa(), "PersistentStream should have started"), 
                    [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.qa = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return bi(this.Aa(), "Can't handle server close on non-started stream"), vi("PersistentStream", "close with error: " + t), 
        this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.ja = function(t) {
        var n = this;
        return function(i) {
            n.fh.ou((function() {
                return n.Da === t ? i() : (vi("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), Ie = /** @class */ function(t) {
    function i(n, i, e, r, u) {
        var s = t.call(this, n, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , i, e, u) || this;
        return s.serializer = r, s;
    }
    return tslib.__extends(i, t), i.prototype.Ba = function(t) {
        return this.connection.Qa("Listen", t);
    }, i.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.Sa.reset();
        var n = this.serializer.Xe(t), i = this.serializer.Ze(t);
        return this.listener.Ga(n, i);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    i.prototype.watch = function(t) {
        var n = {};
        n.database = this.serializer.Ue, n.addTarget = this.serializer.Yn(t);
        var i = this.serializer._r(t);
        i && (n.labels = i), this.Fa(n);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    i.prototype.Wa = function(t) {
        var n = {};
        n.database = this.serializer.Ue, n.removeTarget = t, this.Fa(n);
    }, i;
}(_e), Te = /** @class */ function(t) {
    function i(n, i, e, r, u) {
        var s = t.call(this, n, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , i, e, u) || this;
        return s.serializer = r, s.za = !1, 
        /**
         * The last received stream token from the server, used to acknowledge which
         * responses the client has processed. Stream tokens are opaque checkpoint
         * markers whose only real value is their inclusion in the next request.
         *
         * PersistentWriteStream manages propagating this value from responses to the
         * next request.
         */
        s.lastStreamToken = rt.k, s;
    }
    return tslib.__extends(i, t), Object.defineProperty(i.prototype, "Ka", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.za;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    i.prototype.start = function() {
        this.za = !1, t.prototype.start.call(this);
    }, i.prototype.Ua = function() {
        this.za && this.Ha([]);
    }, i.prototype.Ba = function(t) {
        return this.connection.Qa("Write", t);
    }, i.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        bi(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = this.serializer.De(t.streamToken), 
        this.za) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Sa.reset();
            var n = this.serializer.cr(t.writeResults, t.commitTime), i = this.serializer.fromVersion(t.commitTime);
            return this.listener.Ja(i, n);
        }
        // The first response is always the handshake response
        return bi(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), 
        this.za = !0, this.listener.Ya();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    i.prototype.Xa = function() {
        bi(this.Ca(), "Writing handshake requires an opened stream"), bi(!this.za, "Handshake already completed");
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = this.serializer.Ue, this.Fa(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */
    i.prototype.Ha = function(t) {
        var n = this;
        bi(this.Ca(), "Writing mutations requires an opened stream"), bi(this.za, "Handshake must be complete before writing mutations"), 
        bi(this.lastStreamToken.P() > 0, "Trying to write mutation without a token");
        var i = {
            streamToken: this.serializer.Ee(this.lastStreamToken),
            writes: t.map((function(t) {
                return n.serializer.tr(t);
            }))
        };
        this.Fa(i);
    }, i;
}(_e), Ee = /** @class */ function() {
    function t(t, n, i, e) {
        this.fh = t, this.connection = n, this.credentials = i, this.serializer = e;
    }
    return t.prototype.$a = function(t) {
        return new Te(this.fh, this.connection, this.credentials, this.serializer, t);
    }, t.prototype.Za = function(t) {
        return new Ie(this.fh, this.connection, this.credentials, this.serializer, t);
    }, t.prototype.commit = function(t) {
        var n = this, i = {
            database: this.serializer.Ue,
            writes: t.map((function(t) {
                return n.serializer.tr(t);
            }))
        };
        return this.tf("Commit", i).then((function(t) {
            return n.serializer.cr(t.writeResults, t.commitTime);
        }));
    }, t.prototype.lookup = function(t) {
        var n = this, i = {
            database: this.serializer.Ue,
            documents: t.map((function(t) {
                return n.serializer.ke(t);
            }))
        };
        return this.nf("BatchGetDocuments", i).then((function(i) {
            var e = Fn();
            i.forEach((function(t) {
                var i = n.serializer.He(t);
                e = e.dt(i.key, i);
            }));
            var r = [];
            return t.forEach((function(t) {
                var n = e.get(t);
                bi(!!n, "Missing entity in write response for " + t), r.push(n);
            })), r;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC. */
    t.prototype.tf = function(t, n) {
        var i = this;
        return this.credentials.getToken().then((function(e) {
            return i.connection.tf(t, n, e);
        })).catch((function(t) {
            throw t.code === T.UNAUTHENTICATED && i.credentials.l(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */
    t.prototype.nf = function(t, n) {
        var i = this;
        return this.credentials.getToken().then((function(e) {
            return i.connection.nf(t, n, e);
        })).catch((function(t) {
            throw t.code === T.UNAUTHENTICATED && i.credentials.l(), t;
        }));
    }, t;
}(), De = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function t() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        B("FieldPath", t, "fieldNames", 1);
        for (var i = 0; i < t.length; ++i) if (M("FieldPath", "string", i, t[i]), 0 === t[i].length) throw new E(T.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.if = new gt(t);
    }
    return t.documentId = function() {
        return t.ef;
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw tt("isEqual", "FieldPath", 1, n);
        return this.if.isEqual(n.if);
    }, 
    /**
     * Internal Note: The backend doesn't technically support querying by
     * document ID. Instead it queries by the entire document name (full path
     * included), but in the cases we currently support documentId(), the net
     * effect is the same.
     */
    t.ef = new t(gt.ot().it()), t;
}(), Re = new RegExp("[~\\*/\\[\\]]");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An opaque base class for FieldValue sentinel objects in our public API,
 * with public static methods for creating said sentinel objects.
 */
var Se = /** @class */ function() {
    function t(t) {
        this.rf = t;
    }
    return t.delete = function() {
        return x("FieldValue.delete", arguments), Ae.instance;
    }, t.serverTimestamp = function() {
        return x("FieldValue.serverTimestamp", arguments), Ce.instance;
    }, t.arrayUnion = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
        return L("FieldValue.arrayUnion", arguments, 1), new Pe(t);
    }, t.arrayRemove = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
        return L("FieldValue.arrayRemove", arguments, 1), new ke(t);
    }, t.increment = function(t) {
        return M("FieldValue.increment", "number", 1, t), j("FieldValue.increment", arguments, 1), 
        new Ne(t);
    }, t.prototype.isEqual = function(t) {
        return this === t;
    }, t;
}(), Ae = /** @class */ function(t) {
    function i() {
        return t.call(this, "FieldValue.delete") || this;
    }
    /** Singleton instance. */    return tslib.__extends(i, t), i.instance = new i, i;
}(Se), Ce = /** @class */ function(t) {
    function i() {
        return t.call(this, "FieldValue.serverTimestamp") || this;
    }
    /** Singleton instance. */    return tslib.__extends(i, t), i.instance = new i, i;
}(Se), Pe = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this, "FieldValue.arrayUnion") || this;
        return i.uf = n, i;
    }
    return tslib.__extends(i, t), i;
}(Se), ke = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this, "FieldValue.arrayRemove") || this;
        return i.uf = n, i;
    }
    return tslib.__extends(i, t), i;
}(Se), Ne = /** @class */ function(t) {
    function i(n) {
        var i = t.call(this, "FieldValue.increment") || this;
        return i.sf = n, i;
    }
    return tslib.__extends(i, t), i;
}(Se), Oe = k(Se, "Use FieldValue.<field>() instead."), Fe = /^__.*__$/, Ve = /** @class */ function() {
    function t(t, n, i) {
        this.data = t, this.sn = n, this.fieldTransforms = i;
    }
    return t.prototype.hf = function(t, n) {
        var i = [];
        return null !== this.sn ? i.push(new Ut(t, this.data, this.sn, n)) : i.push(new Vt(t, this.data, n)), 
        this.fieldTransforms.length > 0 && i.push(new xt(t, this.fieldTransforms)), i;
    }, t;
}(), Ue = /** @class */ function() {
    function t(t, n, i) {
        this.data = t, this.sn = n, this.fieldTransforms = i;
    }
    return t.prototype.hf = function(t, n) {
        var i = [ new Ut(t, this.data, this.sn, n) ];
        return this.fieldTransforms.length > 0 && i.push(new xt(t, this.fieldTransforms)), 
        i;
    }, t;
}();

function xe(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw gi("Unexpected case for UserDataSource: " + t);
    }
}

/** A "context" object passed around while parsing user data. */ var je = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param dataSource Indicates what kind of API method this data came from.
     * @param methodName The name of the method the user called to create this
     *     ParseContext.
     * @param path A path within the object being parsed. This could be an empty
     *     path (in which case the context represents the root of the data being
     *     parsed), or a nonempty path (indicating the context represents a nested
     *     location within the data).
     * @param arrayElement Whether or not this context corresponds to an element
     *     of an array.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, n, i, e, r, u) {
        this.cf = t, this.methodName = n, this.path = i, this.af = e, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === r && this.ff(), this.af = void 0 !== e && e, this.fieldTransforms = r || [], 
        this.sn = u || [];
    }
    return t.prototype.lf = function(n) {
        var i = null == this.path ? null : this.path.child(n), e = new t(this.cf, this.methodName, i, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.sn);
        return e.df(n), e;
    }, t.prototype.vf = function(n) {
        var i = null == this.path ? null : this.path.child(n), e = new t(this.cf, this.methodName, i, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.sn);
        return e.ff(), e;
    }, t.prototype.wf = function(n) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // null.
        return new t(this.cf, this.methodName, 
        /*path=*/ null, 
        /*arrayElement=*/ !0, this.fieldTransforms, this.sn);
    }, t.prototype.mf = function(t) {
        var n = null === this.path || this.path.Y() ? "" : " (found in field " + this.path.toString() + ")";
        return new E(T.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + n);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
    t.prototype.contains = function(t) {
        return void 0 !== this.sn.find((function(n) {
            return t.Z(n);
        })) || void 0 !== this.fieldTransforms.find((function(n) {
            return t.Z(n.field);
        }));
    }, t.prototype.ff = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (null !== this.path) for (var t = 0; t < this.path.length; t++) this.df(this.path.get(t));
    }, t.prototype.df = function(t) {
        if (0 === t.length) throw this.mf("Document fields must not be empty");
        if (xe(this.cf) && Fe.test(t)) throw this.mf('Document fields cannot begin and end with "__"');
    }, t;
}(), Le = function(t, n) {
    this.Dn = t, this.key = n;
}, qe = /** @class */ function() {
    function t(t) {
        this.gf = t;
    }
    /** Parse document data from a non-merge set() call. */    return t.prototype.bf = function(t, n) {
        var i = new je(0 /* Set */ , t, gt.rt);
        Me("Data must be an object, but it was:", i, n);
        var e = this.pf(n, i);
        return new Ve(e, 
        /* fieldMask= */ null, i.fieldTransforms);
    }, 
    /** Parse document data from a set() call with '{merge:true}'. */
    t.prototype.yf = function(t, n, i) {
        var e = new je(2 /* MergeSet */ , t, gt.rt);
        Me("Data must be an object, but it was:", e, n);
        var r, u, s = this.pf(n, e);
        if (i) {
            for (var o = new Tt(gt.W), h = 0, c = i; h < c.length; h++) {
                var a = c[h], f = void 0;
                if (a instanceof De) f = a.if; else {
                    if ("string" != typeof a) throw gi("Expected stringOrFieldPath to be a string or a FieldPath");
                    f = Ge(t, a);
                }
                if (!e.contains(f)) throw new E(T.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                o = o.add(f);
            }
            r = Pt.Yt(o), u = e.fieldTransforms.filter((function(t) {
                return r.$t(t.field);
            }));
        } else r = Pt.Xt(e.sn), u = e.fieldTransforms;
        return new Ve(s, r, u);
    }, 
    /** Parse update data from an update() call. */
    t.prototype._f = function(t, n) {
        var i = this, e = new je(1 /* Update */ , t, gt.rt);
        Me("Data must be an object, but it was:", e, n);
        var r = new Tt(gt.W), u = tn.wn();
        V(n, (function(n, s) {
            var o = Ge(t, n), h = e.vf(o);
            if ((s = i.If(s, h)) instanceof Ae) 
            // Add it to the field mask, but don't add anything to updateData.
            r = r.add(o); else {
                var c = i.pf(s, h);
                null != c && (r = r.add(o), u.set(o, c));
            }
        }));
        var s = Pt.Yt(r);
        return new Ue(u.an(), s, e.fieldTransforms);
    }, 
    /** Parse update data from a list of field/value arguments. */
    t.prototype.Tf = function(t, n, i, e) {
        var r = new je(1 /* Update */ , t, gt.rt), u = [ Qe(t, n) ], s = [ i ];
        if (e.length % 2 != 0) throw new E(T.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
        for (var o = 0; o < e.length; o += 2) u.push(Qe(t, e[o])), s.push(e[o + 1]);
        var h = new Tt(gt.W), c = tn.wn();
        for (o = 0; o < u.length; ++o) {
            var a = u[o], f = r.vf(a), l = this.If(s[o], f);
            if (l instanceof Ae) 
            // Add it to the field mask, but don't add anything to updateData.
            h = h.add(a); else {
                var d = this.pf(l, f);
                null != d && (h = h.add(a), c.set(a, d));
            }
        }
        var v = Pt.Yt(h);
        return new Ue(c.an(), v, r.fieldTransforms);
    }, 
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */
    t.prototype.Ef = function(t, n, i) {
        void 0 === i && (i = !1);
        var e = new je(i ? 4 /* ArrayArgument */ : 3 /* Argument */ , t, gt.rt), r = this.pf(n, e);
        return bi(null != r, "Parsed data should not be null."), bi(0 === e.fieldTransforms.length, "Field transforms should have been disallowed."), 
        r;
    }, 
    /** Sends data through this.preConverter, handling any thrown errors. */
    t.prototype.If = function(t, n) {
        try {
            return this.gf(t);
        } catch (t) {
            var i = We(t);
            throw n.mf(i);
        }
    }, 
    /**
     * Internal helper for parsing user data.
     *
     * @param input Data to be parsed.
     * @param context A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */
    t.prototype.pf = function(t, n) {
        if (Be(t = this.If(t, n))) return Me("Unsupported field value:", n, t), this.Df(t, n);
        if (t instanceof Se) 
        // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.
        return this.Rf(t, n), null;
        if (
        // If context.path is null we are inside an array and we don't support
        // field mask paths more granular than the top-level array.
        n.path && n.sn.push(n.path), t instanceof Array) {
            // TODO(b/34871131): Include the path containing the array in the error
            // message.
            // In the case of IN queries, the parsed data is an array (representing
            // the set of values to be included for the IN query) that may directly
            // contain additional arrays (each representing an individual field
            // value), so we disable this validation.
            if (n.af && 4 /* ArrayArgument */ !== n.cf) throw n.mf("Nested arrays are not supported");
            return this.Sf(t, n);
        }
        return this.Af(t, n);
    }, t.prototype.Df = function(t, n) {
        var i = this, e = new pt(yi);
        return U(t) ? 
        // If we encounter an empty object, we explicitly add it to the update
        // mask to ensure that the server creates a map entry.
        n.path && n.path.length > 0 && n.sn.push(n.path) : V(t, (function(t, r) {
            var u = i.pf(r, n.lf(t));
            null != u && (e = e.dt(t, u));
        })), new tn(e);
    }, t.prototype.Sf = function(t, n) {
        for (var i = [], e = 0, r = 0, u = t; r < u.length; r++) {
            var s = u[r], o = this.pf(s, n.wf(e));
            null == o && (
            // Just include nulls in the array for fields being replaced with a
            // sentinel.
            o = Mt.yn), i.push(o), e++;
        }
        return new en(i);
    }, 
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    t.prototype.Rf = function(t, n) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!xe(n.cf)) throw n.mf(t.rf + "() can only be used with update() and set()");
        if (null === n.path) throw n.mf(t.rf + "() is not currently supported inside arrays");
        if (t instanceof Ae) {
            if (2 /* MergeSet */ !== n.cf) throw 1 /* Update */ === n.cf ? (bi(n.path.length > 0, "FieldValue.delete() at the top level should have already been handled."), 
            n.mf("FieldValue.delete() can only appear at the top level of your update data")) : n.mf("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
            // No transform to add for a delete, but we need to add it to our
            // fieldMask so it gets deleted.
            n.sn.push(n.path);
        } else if (t instanceof Ce) n.fieldTransforms.push(new kt(n.path, Dt.instance)); else if (t instanceof Pe) {
            var i = this.Cf(t.rf, t.uf), e = new Rt(i);
            n.fieldTransforms.push(new kt(n.path, e));
        } else if (t instanceof ke) {
            i = this.Cf(t.rf, t.uf);
            var r = new St(i);
            n.fieldTransforms.push(new kt(n.path, r));
        } else if (t instanceof Ne) {
            var u = this.Ef("FieldValue.increment", t.sf), s = new At(u);
            n.fieldTransforms.push(new kt(n.path, s));
        } else gi("Unknown FieldValue type: " + t);
    }, 
    /**
     * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
     *
     * @return The parsed value
     */
    t.prototype.Af = function(t, n) {
        if (null === t) return Mt.yn;
        if ("number" == typeof t) return an(t) ? new zt(t) : new Kt(t);
        if ("boolean" == typeof t) return Qt.of(t);
        if ("string" == typeof t) return new Ht(t);
        if (t instanceof Date) return new Jt(lt.fromDate(t));
        if (t instanceof lt) 
        // Firestore backend truncates precision down to microseconds. To ensure
        // offline mode works the same with regards to truncation, perform the
        // truncation immediately without waiting for the backend to do that.
        return new Jt(new lt(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3)));
        if (t instanceof ft) return new Zt(t);
        if (t instanceof ct) return new Xt(t);
        if (t instanceof Le) return new $t(t.Dn, t.key);
        throw n.mf("Unsupported field value: " + X(t));
    }, t.prototype.Cf = function(t, n) {
        var i = this;
        return n.map((function(n, e) {
            // Although array transforms are used with writes, the actual elements
            // being unioned or removed are not considered writes since they cannot
            // contain any FieldValue sentinels, etc.
            var r = new je(3 /* Argument */ , t, gt.rt);
            return i.pf(n, r.wf(e));
        }));
    }, t;
}();

/**
 * A placeholder object for DocumentReferences in this file, in order to
 * avoid a circular dependency. See the comments for `DataPreConverter` for
 * the full context.
 */
/**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */
function Be(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof lt || t instanceof ft || t instanceof ct || t instanceof Le || t instanceof Se);
}

function Me(t, n, i) {
    if (!Be(i) || !Y(i)) {
        var e = X(i);
        throw "an object" === e ? n.mf(t + " a custom object") : n.mf(t + " " + e);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Qe(t, n) {
    if (n instanceof De) return n.if;
    if ("string" == typeof n) return Ge(t, n);
    throw new E(T.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.");
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 */ function Ge(t, n) {
    try {
        /**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
        return function(t) {
            if (t.search(Re) >= 0) throw new E(T.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (De.bind.apply(De, tslib.__spreadArrays([ void 0 ], t.split("."))));
            } catch (n) {
                throw new E(T.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(n).if;
    } catch (n) {
        var i = We(n);
        throw new E(T.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + i);
    }
}

/**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */ function We(t) {
    return t instanceof Error ? t.message : t.toString();
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ var ze = /** @class */ function() {
    function t(t) {
        this.Pf = t, 
        // The version of each document that was read during this transaction.
        this.kf = Ln(), this.mutations = [], this.Nf = !1, 
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.Of = null, 
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.Ff = new Set;
    }
    return t.prototype.lookup = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i = this;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (this.Vf(), this.mutations.length > 0) throw new E(T.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , this.Pf.lookup(t) ];

                  case 1:
                    return (n = e.sent()).forEach((function(t) {
                        t instanceof sn || t instanceof un ? i.Uf(t) : gi("Document in a transaction was a " + t.constructor.name);
                    })), [ 2 /*return*/ , n ];
                }
            }));
        }));
    }, t.prototype.set = function(t, n) {
        this.write(n.hf(t, this.en(t))), this.Ff.add(t);
    }, t.prototype.update = function(t, n) {
        try {
            this.write(n.hf(t, this.xf(t)));
        } catch (t) {
            this.Of = t;
        }
        this.Ff.add(t);
    }, t.prototype.delete = function(t) {
        this.write([ new jt(t, this.en(t)) ]), this.Ff.add(t);
    }, t.prototype.commit = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return tslib.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.Vf(), this.Of) throw this.Of;
                    return t = this.kf, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(n) {
                        t = t.remove(n.key);
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, i) {
                        n.mutations.push(new Lt(t, n.en(t)));
                    })), [ 4 /*yield*/ , this.Pf.commit(this.mutations) ];

                  case 1:
                    return i.sent(), this.Nf = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Uf = function(t) {
        var n;
        if (t instanceof un) n = t.version; else {
            if (!(t instanceof sn)) throw gi("Document in a transaction was a " + t.constructor.name);
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            n = dt.q();
        }
        var i = this.kf.get(t.key);
        if (null !== i) {
            if (!n.isEqual(i)) 
            // This transaction will fail no matter what.
            throw new E(T.ABORTED, "Document version changed between two reads.");
        } else this.kf = this.kf.dt(t.key, n);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.en = function(t) {
        var n = this.kf.get(t);
        return !this.Ff.has(t) && n ? Ot.updateTime(n) : Ot.NONE;
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.xf = function(t) {
        var n = this.kf.get(t);
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.Ff.has(t) && n) {
            if (n.isEqual(dt.q())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new E(T.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Ot.updateTime(n);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return Ot.exists(!0);
    }, t.prototype.write = function(t) {
        this.Vf(), this.mutations = this.mutations.concat(t);
    }, t.prototype.Vf = function() {
        bi(!this.Nf, "A transaction object cannot be used after its update callback has been invoked.");
    }, t;
}(), Ke = /** @class */ function() {
    function t(t, n) {
        this.$r = t, this.vh = n, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
        this.jf = 0, 
        /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
        this.Lf = null, 
        /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
        this.qf = !0;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */    return t.prototype.Bf = function() {
        var t = this;
        0 === this.jf && (this.Mf("Unknown" /* Unknown */), bi(null === this.Lf, "onlineStateTimer shouldn't be started yet"), 
        this.Lf = this.$r.yu("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            // NOTE: handleWatchStreamFailure() will continue to increment
            // watchStreamFailures even though we are already marked Offline,
            // but this is non-harmful.
            return t.Lf = null, bi("Unknown" /* Unknown */ === t.state, "Timer should be canceled if we transitioned to a different state."), 
            t.Qf("Backend didn't respond within 10 seconds."), t.Mf("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Gf = function(t) {
        "Online" /* Online */ === this.state ? (this.Mf("Unknown" /* Unknown */), 
        // To get to OnlineState.Online, set() must have been called which would
        // have reset our heuristics.
        bi(0 === this.jf, "watchStreamFailures must be 0"), bi(null === this.Lf, "onlineStateTimer must be null")) : (this.jf++, 
        this.jf >= 1 && (this.Wf(), this.Qf("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Mf("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.Wf(), this.jf = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.qf = !1), this.Mf(t);
    }, t.prototype.Mf = function(t) {
        t !== this.state && (this.state = t, this.vh(t));
    }, t.prototype.Qf = function(t) {
        var n = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.qf ? (wi(n), this.qf = !1) : vi("OnlineStateTracker", n);
    }, t.prototype.Wf = function() {
        null !== this.Lf && (this.Lf.cancel(), this.Lf = null);
    }, t;
}(), He = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    n, i, e, s) {
        var o = this;
        this.zf = t, this.Pf = n, 
        /**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */
        this.Kf = [], 
        /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.Hf = {}, this.Jf = null, 
        /**
         * Set to true by enableNetwork() and false by disableNetwork() and indicates
         * the user-preferred network state.
         */
        this.networkEnabled = !1, this.isPrimary = !1, this.Yf = s, this.Yf.Xf((function(t) {
            i.ou((function() {
                return tslib.__awaiter(o, void 0, void 0, (function() {
                    return tslib.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.$f() ? (vi("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.Zf() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.tl = new Ke(i, e), 
        // Create streams (but note they're not started yet).
        this.nl = this.Pf.Za({
            Ma: this.il.bind(this),
            xa: this.el.bind(this),
            Ga: this.rl.bind(this)
        }), this.ul = this.Pf.$a({
            Ma: this.sl.bind(this),
            xa: this.ol.bind(this),
            Ya: this.hl.bind(this),
            Ja: this.Ja.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */
    t.prototype.enableNetwork = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var t;
            return tslib.__generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.networkEnabled = !0, this.$f() ? (t = this.ul, [ 4 /*yield*/ , this.zf.Eo() ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return t.lastStreamToken = n.sent(), this.cl() ? this.al() : this.tl.set("Unknown" /* Unknown */), 
                    [ 4 /*yield*/ , this.fl() ];

                  case 2:
                    // This will start the write stream if necessary.
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    t.prototype.disableNetwork = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.ll() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.tl.set("Offline" /* Offline */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.ll = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.ul.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.nl.stop() ];

                  case 2:
                    return t.sent(), this.Kf.length > 0 && (vi("RemoteStore", "Stopping write stream with " + this.Kf.length + " pending writes"), 
                    this.Kf = []), this.dl(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.shutdown = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return vi("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, 
                    [ 4 /*yield*/ , this.ll() ];

                  case 1:
                    return t.sent(), this.Yf.shutdown(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.tl.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        N(this.Hf, t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.Hf[t.targetId] = t, this.cl() ? 
        // The listen will be sent in onWatchStreamOpen
        this.al() : this.nl.Ca() && this.vl(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.wl = function(t) {
        bi(N(this.Hf, t), "unlisten called on target no currently watched: " + t), delete this.Hf[t], 
        this.nl.Ca() && this.ml(t), U(this.Hf) && (this.nl.Ca() ? this.nl.Na() : this.$f() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.tl.set("Unknown" /* Unknown */));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */
    t.prototype.be = function(t) {
        return this.Hf[t] || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */
    t.prototype.ge = function(t) {
        return this.dh.ge(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.vl = function(t) {
        this.Jf.Ji(t.targetId), this.nl.watch(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.ml = function(t) {
        this.Jf.Ji(t), this.nl.Wa(t);
    }, t.prototype.al = function() {
        bi(this.cl(), "startWatchStream() called when shouldStartWatchStream() is false."), 
        this.Jf = new Zn(this), this.nl.start(), this.tl.Bf();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.cl = function() {
        return this.$f() && !this.nl.Aa() && !U(this.Hf);
    }, t.prototype.$f = function() {
        return this.isPrimary && this.networkEnabled;
    }, t.prototype.dl = function() {
        this.Jf = null;
    }, t.prototype.il = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var t = this;
            return tslib.__generator(this, (function(n) {
                return F(this.Hf, (function(n, i) {
                    t.vl(i);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.el = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(n) {
                return void 0 === t && 
                // Graceful stop (due to stop() or idle timeout). Make sure that's
                // desirable.
                bi(!this.cl(), "Watch stream was stopped gracefully while still needed."), this.dl(), 
                // If we still need the watch stream, retry the connection.
                this.cl() ? (this.tl.Gf(t), this.al()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.tl.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.rl = function(t, n) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var i;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Mark the client as online since we got a message from the server
                    return this.tl.set("Online" /* Online */), t instanceof Xn && 2 /* Removed */ === t.state && t.cause ? [ 2 /*return*/ , this.gl(t) ] : (t instanceof Jn ? this.Jf.ee(t) : t instanceof Yn ? this.Jf.fe(t) : (bi(t instanceof Xn, "Expected watchChange to be an instance of WatchTargetChange"), 
                    this.Jf.se(t)), n.isEqual(dt.MIN) ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.zf.Ro() ]);

                  case 1:
                    return i = e.sent(), n.B(i) >= 0 ? [ 4 /*yield*/ , this.bl(n) ] : [ 3 /*break*/ , 3 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                                      case 2:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.bl = function(t) {
        var n = this;
        bi(!t.isEqual(dt.MIN), "Can't raise event for unknown SnapshotVersion");
        var i = this.Jf.ve(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
                // Finally raise remote event
        return F(i.Ei, (function(i, e) {
            if (e.resumeToken.P() > 0) {
                var r = n.Hf[i];
                // A watched target might have been removed already.
                                r && (n.Hf[i] = r.li(e.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        i.Di.forEach((function(t) {
            var i = n.Hf[t];
            if (i) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                n.Hf[t] = i.li(rt.k, i.ai), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                n.ml(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var e = new An(i.target, t, 1 /* ExistenceFilterMismatch */ , i.sequenceNumber);
                n.vl(e);
            }
        })), this.dh.So(i);
    }, 
    /** Handles an error on a target */
    t.prototype.gl = function(t) {
        var n = this;
        bi(!!t.cause, "Handling target error without a cause");
        var i = t.cause, e = Promise.resolve();
        return t.targetIds.forEach((function(t) {
            e = e.then((function() {
                return tslib.__awaiter(n, void 0, void 0, (function() {
                    return tslib.__generator(this, (function(n) {
                        // A watched target might have been removed already.
                        return N(this.Hf, t) ? (delete this.Hf[t], this.Jf.removeTarget(t), [ 2 /*return*/ , this.dh.pl(t, i) ]) : [ 2 /*return*/ ];
                    }));
                }));
            }));
        })), e;
    }, 
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    t.prototype.fl = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var t, n;
            return tslib.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return this.yl() ? (t = this.Kf.length > 0 ? this.Kf[this.Kf.length - 1].batchId : -1, 
                    [ 4 /*yield*/ , this.zf.jo(t) ]) : [ 3 /*break*/ , 4 ];

                  case 1:
                    return null !== (n = i.sent()) ? [ 3 /*break*/ , 2 ] : (0 === this.Kf.length && this.ul.Na(), 
                    [ 3 /*break*/ , 4 ]);

                  case 2:
                    return this._l(n), [ 4 /*yield*/ , this.fl() ];

                  case 3:
                    i.sent(), i.label = 4;

                  case 4:
                    return this.Il() && this.Tl(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.yl = function() {
        return this.$f() && this.Kf.length < 10;
    }, 
    // For testing
    t.prototype.El = function() {
        return this.Kf.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype._l = function(t) {
        bi(this.yl(), "addToWritePipeline called when pipeline is full"), this.Kf.push(t), 
        this.ul.Ca() && this.ul.Ka && this.ul.Ha(t.mutations);
    }, t.prototype.Il = function() {
        return this.$f() && !this.ul.Aa() && this.Kf.length > 0;
    }, t.prototype.Tl = function() {
        bi(this.Il(), "startWriteStream() called when shouldStartWriteStream() is false."), 
        this.ul.start();
    }, t.prototype.sl = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                return this.ul.Xa(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.hl = function() {
        var t = this;
        // Record the stream token.
                return this.zf.Do(this.ul.lastStreamToken).then((function() {
            // Send the write pipeline now that the stream is established.
            for (var n = 0, i = t.Kf; n < i.length; n++) {
                var e = i[n];
                t.ul.Ha(e.mutations);
            }
        })).catch(Gi);
    }, t.prototype.Ja = function(t, n) {
        var i = this;
        // This is a response to a write containing mutations and should be
        // correlated to the first write in our write pipeline.
                bi(this.Kf.length > 0, "Got result for empty write pipeline");
        var e = this.Kf.shift(), r = Ri.from(e, t, n, this.ul.lastStreamToken);
        return this.dh.Dl(r).then((function() {
            // It's possible that with the completion of this mutation another
            // slot has freed up.
            return i.fl();
        }));
    }, t.prototype.ol = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n = this;
            return tslib.__generator(this, (function(i) {
                // If the write stream closed due to an error, invoke the error callbacks if
                // there are pending writes.
                return void 0 === t && 
                // Graceful stop (due to stop() or idle timeout). Make sure that's
                // desirable.
                bi(!this.Il(), "Write stream was stopped gracefully while still needed."), t && this.Kf.length > 0 ? ([ 2 /*return*/ , (this.ul.Ka ? this.Rl(t) : this.Sl(t)).then((function() {
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    n.Il() && n.Tl();
                })) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Sl = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(n) {
                // Reset the token if it's a permanent error, signaling the write stream is
                // no longer valid. Note that the handshake does not count as a write: see
                // comments on isPermanentWriteError for details.
                return Pn(t.code) ? (vi("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this.ul.lastStreamToken), 
                this.ul.lastStreamToken = rt.k, [ 2 /*return*/ , this.zf.Do(rt.k).catch(Gi) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Rl = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i = this;
            return tslib.__generator(this, (function(e) {
                // Only handle permanent errors here. If it's transient, just let the retry
                // logic kick in.
                return Pn(r = t.code) && r !== T.ABORTED ? (n = this.Kf.shift(), 
                // In this case it's also unlikely that the server itself is melting
                // down -- this was just a bad request so inhibit backoff on the next
                // restart.
                this.ul.ka(), [ 2 /*return*/ , this.dh.Al(n.batchId, t).then((function() {
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    return i.fl();
                })) ]) : [ 2 /*return*/ ];
                var r;
                /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */            }));
        }));
    }, t.prototype.Cl = function() {
        return new ze(this.Pf);
    }, t.prototype.Zf = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.ll() ];

                  case 1:
                    return t.sent(), this.tl.set("Unknown" /* Unknown */), [ 4 /*yield*/ , this.enableNetwork() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Pl = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.$f() ? (
                    // Tear down and re-create our network streams. This will ensure we get a fresh auth token
                    // for the new user and re-fill the write pipeline with new mutations from the LocalStore
                    // (since mutations are per-user).
                    vi("RemoteStore", "RemoteStore restarting streams for new credential"), [ 4 /*yield*/ , this.Zf() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.kl = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.isPrimary = t, t && this.networkEnabled ? [ 4 /*yield*/ , this.enableNetwork() ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return t ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this.ll() ];

                  case 3:
                    n.sent(), this.tl.set("Unknown" /* Unknown */), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), Je = function(t) {
    this.key = t;
}, Ye = function(t) {
    this.key = t;
}, Xe = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    n) {
        this.query = t, this.Nl = n, this.Ol = null, 
        /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
        this.Pi = !1, 
        /** Documents in the view but not in the remote target */
        this.Fl = Bn(), 
        /** Document Keys that have local changes */
        this.yi = Bn(), this.Vl = new Gn(t.Xn.bind(t));
    }
    return Object.defineProperty(t.prototype, "Ul", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.Nl;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.xl = function(t, n) {
        var i = this, e = n ? n.jl : new Wn, r = n ? n.Vl : this.Vl, u = n ? n.yi : this.yi, s = r, o = !1, h = this.query.ii() && r.size === this.query.limit ? r.last() : null, c = this.query.ei() && r.size === this.query.limit ? r.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.bt((function(t, n) {
            var a = r.get(t), f = n instanceof un ? n : null;
            f && (bi(t.isEqual(f.key), "Mismatching keys found in document changes: " + t + " != " + f.key), 
            f = i.query.matches(f) ? f : null);
            var l = !!a && i.yi.has(a.key), d = !!f && (f.rn || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            i.yi.has(f.key) && f.hasCommittedMutations), v = !1;
            // Calculate change
            a && f ? a.data().isEqual(f.data()) ? l !== d && (e.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), v = !0) : i.Ll(a, f) || (e.track({
                type: 2 /* Modified */ ,
                doc: f
            }), v = !0, (h && i.query.Xn(f, h) > 0 || c && i.query.Xn(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            o = !0)) : !a && f ? (e.track({
                type: 0 /* Added */ ,
                doc: f
            }), v = !0) : a && !f && (e.track({
                type: 1 /* Removed */ ,
                doc: a
            }), v = !0, (h || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            o = !0));
            v && (f ? (s = s.add(f), u = d ? u.add(t) : u.delete(t)) : (s = s.delete(t), u = u.delete(t)));
        })), this.query.ii() || this.query.ei()) for (;s.size > this.query.limit; ) {
            var a = this.query.ii() ? s.last() : s.first();
            s = s.delete(a.key), u = u.delete(a.key), e.track({
                type: 1 /* Removed */ ,
                doc: a
            });
        }
        return bi(!o || !n, "View was refilled using docs that themselves needed refilling."), 
        {
            Vl: s,
            jl: e,
            yc: o,
            yi: u
        };
    }, t.prototype.Ll = function(t, n) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.rn && n.hasCommittedMutations && !n.rn;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.qs = function(t, n, i) {
        var e = this;
        bi(!t.yc, "Cannot apply changes that need a refill");
        var r = this.Vl;
        this.Vl = t.Vl, this.yi = t.yi;
        // Sort changes based on type and query comparator
        var u = t.jl.bi();
        u.sort((function(t, n) {
            return function(t, n) {
                var i = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return gi("Unknown ChangeType: " + t);
                    }
                };
                return i(t) - i(n);
            }
            /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (t.type, n.type) || e.query.Xn(t.doc, n.doc);
        })), this.ql(i);
        var s = n ? this.Bl() : [], o = 0 === this.Fl.size && this.Pi ? 1 /* Synced */ : 0 /* Local */ , h = o !== this.Ol;
        return this.Ol = o, 0 !== u.length || h ? {
            snapshot: new zn(this.query, t.Vl, r, u, t.yi, 0 /* Local */ === o, h, 
            /* excludesMetadataChanges= */ !1),
            Ml: s
        } : {
            Ml: s
        };
    }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Ql = function(t) {
        return this.Pi && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.Pi = !1, this.qs({
            Vl: this.Vl,
            jl: new Wn,
            yi: this.yi,
            yc: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            Ml: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.Gl = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.Nl.has(t) && (
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.Vl.has(t) && !this.Vl.get(t).rn);
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.ql = function(t) {
        var n = this;
        t && (t.ki.forEach((function(t) {
            return n.Nl = n.Nl.add(t);
        })), t.Ni.forEach((function(t) {
            return bi(n.Nl.has(t), "Modified document " + t + " not found in view.");
        })), t.Oi.forEach((function(t) {
            return n.Nl = n.Nl.delete(t);
        })), this.Pi = t.Pi);
    }, t.prototype.Bl = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.Pi) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var n = this.Fl;
        this.Fl = Bn(), this.Vl.forEach((function(n) {
            t.Gl(n.key) && (t.Fl = t.Fl.add(n.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var i = [];
        return n.forEach((function(n) {
            t.Fl.has(n) || i.push(new Ye(n));
        })), this.Fl.forEach((function(t) {
            n.has(t) || i.push(new Je(t));
        })), i;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Wl = function(t) {
        this.Nl = t.Yo, this.Fl = Bn();
        var n = this.xl(t.documents);
        return this.qs(n, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.zl = function() {
        return zn.Ti(this.query, this.Vl, this.yi, 0 /* Local */ === this.Ol);
    }, t;
}();

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var $e = /** @class */ function() {
    function t(t, n, i, e) {
        this.$r = t, this.Kl = n, this.updateFunction = i, this.iu = e, this.Hl = 5, this.Sa = new ye(this.$r, "retry_transaction" /* RetryTransaction */);
    }
    /** Runs the transaction and sets the result on deferred. */    return t.prototype.run = function() {
        this.Jl();
    }, t.prototype.Jl = function() {
        var t = this;
        this.Sa._a((function() {
            return tslib.__awaiter(t, void 0, void 0, (function() {
                var t, n, i = this;
                return tslib.__generator(this, (function(e) {
                    return t = this.Kl.Cl(), (n = this.Yl(t)) && n.then((function(n) {
                        i.$r.ou((function() {
                            return t.commit().then((function() {
                                i.iu.resolve(n);
                            })).catch((function(t) {
                                i.Xl(t);
                            }));
                        }));
                    })).catch((function(t) {
                        i.Xl(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.Yl = function(t) {
        try {
            var n = this.updateFunction(t);
            return !hn(n) && n.catch && n.then ? n : (this.iu.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.iu.reject(t), null;
        }
    }, t.prototype.Xl = function(t) {
        var n = this;
        this.Hl > 0 && this.$l(t) ? (this.Hl -= 1, this.$r.ou((function() {
            return n.Jl(), Promise.resolve();
        }))) : this.iu.reject(t);
    }, t.prototype.$l = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var n = t.code;
            return "aborted" === n || "failed-precondition" === n || !Pn(n);
        }
        return !1;
    }, t;
}(), Ze = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
n, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
i) {
    this.query = t, this.targetId = n, this.view = i;
}, tr = function(t) {
    this.key = t, 
    /**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */
    this.Zl = !1;
}, nr = /** @class */ function() {
    function t(t, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    i, e) {
        this.zf = t, this.Kl = n, this.td = i, this.currentUser = e, this.nd = null, this.ed = new Si((function(t) {
            return t.canonicalId();
        })), this.rd = {}, this.ud = new pt(bt.W), this.sd = {}, this.od = new qi, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.hd = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.ad = new Map, this.fd = de.Bc(), 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.isPrimary = void 0, this.onlineState = "Unknown" /* Unknown */;
    }
    return Object.defineProperty(t.prototype, "ld", {
        // Only used for testing.
        get: function() {
            return !0 === this.isPrimary;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */
    t.prototype.subscribe = function(t) {
        bi(null !== t, "SyncEngine listener cannot be null"), bi(null === this.nd, "SyncEngine already has a subscriber."), 
        this.nd = t;
    }, 
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the targetId of the query.
     */
    t.prototype.listen = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i, e, r, s;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return this.dd("listen()"), (e = this.ed.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    n = e.targetId, this.td.Vh(n), i = e.view.zl(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.zf.Mo(t.Yn()) ];

                  case 2:
                    return r = u.sent(), s = this.td.Vh(r.targetId), n = r.targetId, [ 4 /*yield*/ , this.vd(t, n, "current" === s) ];

                  case 3:
                    i = u.sent(), this.isPrimary && this.Kl.listen(r), u.label = 4;

                  case 4:
                    return this.nd.Ga([ i ]), [ 2 /*return*/ , n ];
                }
            }));
        }));
    }, 
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    t.prototype.vd = function(t, n, i) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var e, r, s, o, h, c;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.zf.Ko(t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return e = u.sent(), r = new Xe(t, e.Yo), s = r.xl(e.documents), o = Hn.Ci(n, i && "Offline" /* Offline */ !== this.onlineState), 
                    bi(0 === (h = r.qs(s, 
                    /* updateLimboDocuments= */ !0 === this.isPrimary, o)).Ml.length, "View returned limbo docs before target ack from the server."), 
                    bi(!!h.snapshot, "applyChanges for new view should always return a snapshot"), c = new Ze(t, n, r), 
                    this.ed.set(t, c), this.rd[n] || (this.rd[n] = []), this.rd[n].push(t), [ 2 /*return*/ , h.snapshot ];
                }
            }));
        }));
    }, 
    /**
     * Reconcile the list of synced documents in an existing view with those
     * from persistence.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.wd = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.zf.Ko(t.query, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return n = e.sent(), i = t.view.Wl(n), this.isPrimary && this.md(t.targetId, i.Ml), 
                    [ 2 /*return*/ , i ];
                }
            }));
        }));
    }, 
    /** Stops listening to the query. */
    t.prototype.wl = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i, e = this;
            return tslib.__generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.dd("unlisten()"), bi(!!(n = this.ed.get(t)), "Trying to unlisten on query not found:" + t), 
                    (i = this.rd[n.targetId]).length > 1 ? (this.rd[n.targetId] = i.filter((function(n) {
                        return !n.isEqual(t);
                    })), this.ed.delete(t), [ 2 /*return*/ ]) : this.isPrimary ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.td.xh(n.targetId), this.td.Ph(n.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , this.zf.zo(n.targetId, /*keepPersistedTargetData=*/ !1).then((function() {
                        e.td.Lh(n.targetId), e.Kl.wl(n.targetId), e.gd(n.targetId);
                    })).catch(Gi) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    r.sent(), r.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.gd(n.targetId), [ 4 /*yield*/ , this.zf.zo(n.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    r.sent(), r.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    t.prototype.write = function(t, n) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var i;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.dd("write()"), [ 4 /*yield*/ , this.zf.ao(t) ];

                  case 1:
                    return i = e.sent(), this.td.kh(i.batchId), this.bd(i.batchId, n), [ 4 /*yield*/ , this.pd(i.ks) ];

                  case 2:
                    return e.sent(), [ 4 /*yield*/ , this.Kl.fl() ];

                  case 3:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The Deferred input is resolved when the transaction is fully committed.
     */
    t.prototype.runTransaction = function(t, n, i) {
        new $e(t, this.Kl, n, i).run();
    }, t.prototype.So = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i = this;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.dd("applyRemoteEvent()"), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.zf.So(t) ];

                  case 2:
                    return n = e.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    V(t.Ei, (function(t, n) {
                        var e = i.sd[Number(t)];
                        e && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        bi(n.ki.size + n.Ni.size + n.Oi.size <= 1, "Limbo resolution for single document contains multiple changes."), 
                        n.ki.size > 0 ? e.Zl = !0 : n.Ni.size > 0 ? bi(e.Zl, "Received change for limbo target document without add.") : n.Oi.size > 0 && (bi(e.Zl, "Received remove for limbo target document without add."), 
                        e.Zl = !1));
                    })), [ 4 /*yield*/ , this.pd(n, t) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Gi(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    t.prototype.Ql = function(t, n) {
        // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        if (this.isPrimary && 0 /* RemoteStore */ === n || !this.isPrimary && 1 /* SharedClientState */ === n) {
            this.dd("applyOnlineStateChange()");
            var i = [];
            this.ed.forEach((function(n, e) {
                var r = e.view.Ql(t);
                bi(0 === r.Ml.length, "OnlineState should not affect limbo documents."), r.snapshot && i.push(r.snapshot);
            })), this.nd.yd(t), this.nd.Ga(i), this.onlineState = t, this.isPrimary && this.td.Mh(t);
        }
    }, t.prototype.pl = function(t, n) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var i, e, r, s, o, h = this;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return this.dd("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.td.qh(t, "rejected", n), i = this.sd[t], (e = i && i.key) ? (
                    // Since this query failed, we won't want to manually unlisten to it.
                    // So go ahead and remove it from bookkeeping.
                    this.ud = this.ud.remove(e), delete this.sd[t], r = (r = new pt(bt.W)).dt(e, new sn(e, dt.q())), 
                    s = Bn().add(e), o = new Kn(dt.MIN, 
                    /* targetChanges= */ {}, 
                    /* targetMismatches= */ new Tt(yi), r, s), [ 2 /*return*/ , this.So(o) ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.zf.zo(t, /* keepPersistedTargetData */ !1).then((function() {
                        return h.gd(t, n);
                    })).catch(Gi) ];

                  case 2:
                    u.sent(), u.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.Xh = function(t, n, i) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var e;
            return tslib.__generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.dd("applyBatchState()"), [ 4 /*yield*/ , this.zf.lo(t) ];

                  case 1:
                    return null === (e = r.sent()) ? (
                    // A throttled tab may not have seen the mutation before it was completed
                    // and removed from the mutation queue, in which case we won't have cached
                    // the affected documents. In this case we can safely ignore the update
                    // since that means we didn't apply the mutation locally at all (if we
                    // had, we would have cached the affected documents), and so we will just
                    // see any resulting document changes via normal remote document updates
                    // as applicable.
                    vi("SyncEngine", "Cannot apply mutation batch with id: " + t), [ 2 /*return*/ ]) : "pending" !== n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.Kl.fl() ];

                  case 2:
                    // If we are the primary client, we need to send this write to the
                    // backend. Secondary clients will ignore these writes since their remote
                    // connection is disabled.
                    return r.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    "acknowledged" === n || "rejected" === n ? (
                    // NOTE: Both these methods are no-ops for batches that originated from
                    // other clients.
                    this._d(t, i || null), this.zf.Zo(t)) : gi("Unknown batchState: " + n), r.label = 4;

                  case 4:
                    return [ 4 /*yield*/ , this.pd(e) ];

                  case 5:
                    return r.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Dl = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.dd("applySuccessfulWrite()"), n = t.batch.batchId, 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this._d(n, /*error=*/ null), this.Id(n), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.zf.vo(t) ];

                  case 2:
                    return i = e.sent(), this.td.Oh(n, "acknowledged"), [ 4 /*yield*/ , this.pd(i) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Gi(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Al = function(t, n) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var i;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.dd("rejectFailedWrite()"), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this._d(t, n), this.Id(t), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.zf.yo(t) ];

                  case 2:
                    return i = e.sent(), this.td.Oh(t, "rejected", n), [ 4 /*yield*/ , this.pd(i) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Gi(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    t.prototype.Td = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Kl.$f() || vi("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    [ 4 /*yield*/ , this.zf.To() ];

                  case 1:
                    return -1 === (n = e.sent()) ? (
                    // Trigger the callback right away if there is no pending writes at the moment.
                    t.resolve(), [ 2 /*return*/ ]) : ((i = this.ad.get(n) || []).push(t), this.ad.set(n, i), 
                    [ 2 /*return*/ ]);
                }
            }));
        }));
    }, 
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    t.prototype.Id = function(t) {
        (this.ad.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.ad.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */
    t.prototype.Ed = function(t) {
        this.ad.forEach((function(n) {
            n.forEach((function(n) {
                n.reject(new E(T.CANCELLED, t));
            }));
        })), this.ad.clear();
    }, t.prototype.bd = function(t, n) {
        var i = this.hd[this.currentUser.i()];
        i || (i = new pt(yi)), i = i.dt(t, n), this.hd[this.currentUser.i()] = i;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype._d = function(t, n) {
        var i = this.hd[this.currentUser.i()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (i) {
            var e = i.get(t);
            e && (bi(t === i.wt(), "Mutation callbacks processed out-of-order?"), n ? e.reject(n) : e.resolve(), 
            i = i.remove(t)), this.hd[this.currentUser.i()] = i;
        }
    }, t.prototype.gd = function(t, n) {
        var i = this;
        void 0 === n && (n = null), this.td.xh(t), bi(this.rd[t] && 0 !== this.rd[t].length, "There are no queries mapped to target id " + t);
        for (var e = 0, r = this.rd[t]; e < r.length; e++) {
            var u = r[e];
            this.ed.delete(u), n && this.nd.Dd(u, n);
        }
        if (delete this.rd[t], this.isPrimary) {
            var s = this.od.As(t);
            this.od.Rs(t), s.forEach((function(t) {
                i.od.Cs(t) || 
                // We removed the last reference for this key
                i.Rd(t);
            }));
        }
    }, t.prototype.Rd = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var n = this.ud.get(t);
        null !== n && (this.Kl.wl(n), this.ud = this.ud.remove(t), delete this.sd[n]);
    }, t.prototype.md = function(t, n) {
        for (var i = 0, e = n; i < e.length; i++) {
            var r = e[i];
            if (r instanceof Je) this.od._s(r.key, t), this.Sd(r); else if (r instanceof Ye) {
                vi("SyncEngine", "Document no longer in limbo: " + r.key), this.od.Ts(r.key, t), 
                this.od.Cs(r.key) || 
                // We removed the last reference for this key
                this.Rd(r.key);
            } else gi("Unknown limbo change: " + JSON.stringify(r));
        }
    }, t.prototype.Sd = function(t) {
        var n = t.key;
        if (!this.ud.get(n)) {
            vi("SyncEngine", "New document in limbo: " + n);
            var i = this.fd.next(), e = vn.jn(n.path);
            this.sd[i] = new tr(n), this.Kl.listen(new An(e.Yn(), i, 2 /* LimboResolution */ , Ci.Xr)), 
            this.ud = this.ud.dt(n, i);
        }
    }, 
    // Visible for testing
    t.prototype.Ad = function() {
        return this.ud;
    }, t.prototype.pd = function(t, n) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var i, e, r, s = this;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return i = [], e = [], r = [], this.ed.forEach((function(u, o) {
                        r.push(Promise.resolve().then((function() {
                            var n = o.view.xl(t);
                            return n.yc ? s.zf.Ko(o.query, /* usePreviousResults= */ !1).then((function(t) {
                                var i = t.documents;
                                return o.view.xl(i, n);
                            })) : n;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var r = n && n.Ei[o.targetId], u = o.view.qs(t, 
                            /* updateLimboDocuments= */ !0 === s.isPrimary, r);
                            if (s.md(o.targetId, u.Ml), u.snapshot) {
                                s.isPrimary && s.td.qh(o.targetId, u.snapshot.fromCache ? "not-current" : "current"), 
                                i.push(u.snapshot);
                                var h = Ai.zr(o.targetId, u.snapshot);
                                e.push(h);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(r) ];

                  case 1:
                    return u.sent(), this.nd.Ga(i), [ 4 /*yield*/ , this.zf.xo(e) ];

                  case 2:
                    return u.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.dd = function(t) {
        bi(null !== this.nd, "Trying to call " + t + " before calling subscribe().");
    }, t.prototype.Pl = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n = !this.currentUser.isEqual(t), this.currentUser = t, n ? (
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.Ed("'waitForPendingWrites' promise is rejected due to a user change."), [ 4 /*yield*/ , this.zf.ro(t) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    return i = e.sent(), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.td.ro(t, i.ho, i.co), [ 4 /*yield*/ , this.pd(i.oo) ];

                  case 2:
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 4 /*yield*/ , this.Kl.Pl() ];

                  case 4:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.kl = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i, e, r, s, o, h = this;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return !0 !== t || !0 === this.isPrimary ? [ 3 /*break*/ , 3 ] : (this.isPrimary = !0, 
                    [ 4 /*yield*/ , this.Kl.kl(!0) ]);

                  case 1:
                    return u.sent(), s = this.td.Ch(), [ 4 /*yield*/ , this.Cd(s.nt()) ];

                  case 2:
                    for (n = u.sent(), i = 0, e = n; i < e.length; i++) r = e[i], this.Kl.listen(r);
                    return [ 3 /*break*/ , 7 ];

                  case 3:
                    return !1 !== t || !1 === this.isPrimary ? [ 3 /*break*/ , 7 ] : (this.isPrimary = !1, 
                    s = [], o = Promise.resolve(), F(this.rd, (function(t, n) {
                        h.td.jh(t) ? s.push(t) : o = o.then((function() {
                            return h.gd(t), h.zf.zo(t, 
                            /*keepPersistedTargetData=*/ !0);
                        })), h.Kl.wl(t);
                    })), [ 4 /*yield*/ , o ]);

                  case 4:
                    return u.sent(), [ 4 /*yield*/ , this.Cd(s) ];

                  case 5:
                    return u.sent(), this.Pd(), [ 4 /*yield*/ , this.Kl.kl(!1) ];

                  case 6:
                    u.sent(), u.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.Pd = function() {
        var t = this;
        F(this.sd, (function(n) {
            t.Kl.wl(n);
        })), this.od.Ss(), this.sd = [], this.ud = new pt(bt.W);
    }, 
    /**
     * Reconcile the query views of the provided query targets with the state from
     * persistence. Raises snapshots for any changes that affect the local
     * client and returns the updated state of all target's query data.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Cd = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i, e, r, s, o, h, c, a, f, l, d, v;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    n = [], i = [], e = 0, r = t, u.label = 1;

                  case 1:
                    return e < r.length ? (s = r[e], o = void 0, (h = this.rd[s]) && 0 !== h.length ? [ 4 /*yield*/ , this.zf.zo(s, 
                    /*keepPersistedTargetData=*/ !0) ] : [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 14 ];

                  case 2:
                    // For queries that have a local View, we need to update their state
                    // in LocalStore (as the resume token and the snapshot version
                    // might have changed) and reconcile their views with the persisted
                    // state (the list of syncedDocuments may have gotten out of sync).
                    return u.sent(), [ 4 /*yield*/ , this.zf.Mo(h[0].Yn()) ];

                  case 3:
                    o = u.sent(), c = 0, a = h, u.label = 4;

                  case 4:
                    return c < a.length ? (f = a[c], bi(!!(l = this.ed.get(f)), "No query view found for " + f), 
                    [ 4 /*yield*/ , this.wd(l) ]) : [ 3 /*break*/ , 7 ];

                  case 5:
                    (d = u.sent()).snapshot && i.push(d.snapshot), u.label = 6;

                  case 6:
                    return c++, [ 3 /*break*/ , 4 ];

                  case 7:
                    return [ 3 /*break*/ , 12 ];

                  case 8:
                    return bi(!0 === this.isPrimary, "A secondary tab should never have an active target without an active query."), 
                    [ 4 /*yield*/ , this.zf.ih(s) ];

                  case 9:
                    return bi(!!(v = u.sent()), "Target for id " + s + " not found"), [ 4 /*yield*/ , this.zf.Mo(v) ];

                  case 10:
                    return o = u.sent(), [ 4 /*yield*/ , this.vd(this.kd(v), s, 
                    /*current=*/ !1) ];

                  case 11:
                    u.sent(), u.label = 12;

                  case 12:
                    n.push(o), u.label = 13;

                  case 13:
                    return e++, [ 3 /*break*/ , 1 ];

                  case 14:
                    return this.nd.Ga(i), [ 2 /*return*/ , n ];
                }
            }));
        }));
    }, 
    /**
     * Creates a `Query` object from the specified `Target`. There is no way to
     * obtain the original `Query`, so we synthesize a `Query` from the `Target`
     * object.
     *
     * The synthesized result might be different from the original `Query`, but
     * since the synthesized `Query` should return the same results as the
     * original one (only the presentation of results might differ), the potential
     * difference will not cause issues.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.kd = function(t) {
        return new vn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.$o = function() {
        return this.zf.$o();
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.$h = function(t, n, i) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var e, r;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    if (this.isPrimary) 
                    // If we receive a target state notification via WebStorage, we are
                    // either already secondary or another tab has taken the primary lease.
                    return vi("SyncEngine", "Ignoring unexpected query state notification."), [ 2 /*return*/ ];
                    if (!this.rd[t]) return [ 3 /*break*/ , 7 ];
                    switch (n) {
                      case "current":
                      case "not-current":
                        return [ 3 /*break*/ , 1 ];

                      case "rejected":
                        return [ 3 /*break*/ , 4 ];
                    }
                    return [ 3 /*break*/ , 6 ];

                  case 1:
                    return [ 4 /*yield*/ , this.zf.eh() ];

                  case 2:
                    return e = u.sent(), r = Kn.Ai(t, "current" === n), [ 4 /*yield*/ , this.pd(e, r) ];

                  case 3:
                    return u.sent(), [ 3 /*break*/ , 7 ];

                  case 4:
                    return [ 4 /*yield*/ , this.zf.zo(t, 
                    /* keepPersistedTargetData */ !0) ];

                  case 5:
                    return u.sent(), this.gd(t, i), [ 3 /*break*/ , 7 ];

                  case 6:
                    gi("Unexpected target state: " + n), u.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.Zh = function(t, n) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var i, e, r, s, o, h, c, a, f, l = this;
            return tslib.__generator(this, (function(d) {
                switch (d.label) {
                  case 0:
                    if (!this.isPrimary) return [ 2 /*return*/ ];
                    i = 0, e = t, d.label = 1;

                  case 1:
                    return i < e.length ? (f = e[i], bi(!this.rd[f], "Trying to add an already active target"), 
                    [ 4 /*yield*/ , this.zf.ih(f) ]) : [ 3 /*break*/ , 6 ];

                  case 2:
                    return bi(!!(r = d.sent()), "Query data for active target " + f + " not found"), 
                    [ 4 /*yield*/ , this.zf.Mo(r) ];

                  case 3:
                    return s = d.sent(), [ 4 /*yield*/ , this.vd(this.kd(r), s.targetId, 
                    /*current=*/ !1) ];

                  case 4:
                    d.sent(), this.Kl.listen(s), d.label = 5;

                  case 5:
                    return i++, [ 3 /*break*/ , 1 ];

                  case 6:
                    o = function(t) {
                        return tslib.__generator(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                // Check that the target is still active since the target might have been
                                // removed if it has been rejected by the backend.
                                return h.rd[t] ? [ 4 /*yield*/ , h.zf.zo(t, /* keepPersistedTargetData */ !1).then((function() {
                                    l.Kl.wl(t), l.gd(t);
                                })).catch(Gi) ] : [ 2 /*return*/ , "continue" ];

                                // Release queries that are still active.
                                                              case 1:
                                // Release queries that are still active.
                                return n.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }, h = this, c = 0, a = n, d.label = 7;

                  case 7:
                    return c < a.length ? (f = a[c], [ 5 /*yield**/ , o(f) ]) : [ 3 /*break*/ , 10 ];

                  case 8:
                    d.sent(), d.label = 9;

                  case 9:
                    return c++, [ 3 /*break*/ , 7 ];

                  case 10:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only. In other clients, LocalStore is unaware of
    // the online state.
    t.prototype.enableNetwork = function() {
        return this.zf.nh(!0), this.Kl.enableNetwork();
    }, 
    // PORTING NOTE: Multi-tab only. In other clients, LocalStore is unaware of
    // the online state.
    t.prototype.disableNetwork = function() {
        return this.zf.nh(!1), this.Kl.disableNetwork();
    }, t.prototype.ge = function(t) {
        var n = this.sd[t];
        if (n && n.Zl) return Bn().add(n.key);
        var i = Bn(), e = this.rd[t];
        if (!e) return i;
        for (var r = 0, u = e; r < u.length; r++) {
            var s = u[r], o = this.ed.get(s);
            bi(!!o, "No query view found for " + s), i = i.Qt(o.view.Ul);
        }
        return i;
    }, t;
}(), ir = function() {
    this.Nd = null, this.targetId = 0, this.listeners = [];
}, er = /** @class */ function() {
    function t(t) {
        this.dh = t, this.Od = new Si((function(t) {
            return t.canonicalId();
        })), this.onlineState = "Unknown" /* Unknown */ , this.Fd = new Set, this.dh.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        var n = t.query, i = !1, e = this.Od.get(n);
        (e || (i = !0, e = new ir, this.Od.set(n, e)), e.listeners.push(t), bi(!t.Ql(this.onlineState), "applyOnlineStateChange() shouldn't raise an event for brand-new listeners."), 
        e.Nd) && (t.Vd(e.Nd) && this.Ud());
        return i ? this.dh.listen(n).then((function(t) {
            return e.targetId = t, t;
        })) : Promise.resolve(e.targetId);
    }, t.prototype.wl = function(t) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n, i, e, r;
            return tslib.__generator(this, (function(u) {
                return n = t.query, i = !1, (e = this.Od.get(n)) && (r = e.listeners.indexOf(t)) >= 0 && (e.listeners.splice(r, 1), 
                i = 0 === e.listeners.length), i ? (this.Od.delete(n), [ 2 /*return*/ , this.dh.wl(n) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Ga = function(t) {
        for (var n = !1, i = 0, e = t; i < e.length; i++) {
            var r = e[i], u = r.query, s = this.Od.get(u);
            if (s) {
                for (var o = 0, h = s.listeners; o < h.length; o++) {
                    h[o].Vd(r) && (n = !0);
                }
                s.Nd = r;
            }
        }
        n && this.Ud();
    }, t.prototype.Dd = function(t, n) {
        var i = this.Od.get(t);
        if (i) for (var e = 0, r = i.listeners; e < r.length; e++) {
            r[e].onError(n);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.Od.delete(t);
    }, t.prototype.yd = function(t) {
        this.onlineState = t;
        var n = !1;
        this.Od.forEach((function(i, e) {
            for (var r = 0, u = e.listeners; r < u.length; r++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                u[r].Ql(t) && (n = !0);
            }
        })), n && this.Ud();
    }, t.prototype.xd = function(t) {
        this.Fd.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype.jd = function(t) {
        this.Fd.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.Ud = function() {
        this.Fd.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), rr = /** @class */ function() {
    function t(t, n, i) {
        this.query = t, this.Ld = n, 
        /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
        this.qd = !1, this.Bd = null, this.onlineState = "Unknown" /* Unknown */ , this.options = i || {};
    }
    /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */    return t.prototype.Vd = function(t) {
        if (bi(t.docChanges.length > 0 || t._i, "We got a new snapshot with no changes?"), 
        !this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var n = [], i = 0, e = t.docChanges; i < e.length; i++) {
                var r = e[i];
                3 /* Metadata */ !== r.type && n.push(r);
            }
            t = new zn(t.query, t.docs, t.pi, n, t.yi, t.fromCache, t._i, 
            /* excludesMetadataChanges= */ !0);
        }
        var u = !1;
        return this.qd ? this.Md(t) && (this.Ld.next(t), u = !0) : this.Qd(t, this.onlineState) && (this.Gd(t), 
        u = !0), this.Bd = t, u;
    }, t.prototype.onError = function(t) {
        this.Ld.error(t);
    }, 
    /** Returns whether a snapshot was raised. */
    t.prototype.Ql = function(t) {
        this.onlineState = t;
        var n = !1;
        return this.Bd && !this.qd && this.Qd(this.Bd, t) && (this.Gd(this.Bd), n = !0), 
        n;
    }, t.prototype.Qd = function(t, n) {
        // Always raise the first event when we're synced
        if (bi(!this.qd, "Determining whether to raise first event but already had first event"), 
        !t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var i = "Offline" /* Offline */ !== n;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return this.options.Wd && i ? (bi(t.fromCache, "Waiting for sync, but snapshot is not from cache"), 
        !1) : !t.docs.Y() || "Offline" /* Offline */ === n;
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Md = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var n = this.Bd && this.Bd.hasPendingWrites !== t.hasPendingWrites;
        return !(!t._i && !n) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.Gd = function(t) {
        bi(!this.qd, "Trying to raise initial events for second time"), t = zn.Ti(t.query, t.docs, t.yi, t.fromCache), 
        this.qd = !0, this.Ld.next(t);
    }, t;
}(), ur = /** @class */ function() {
    function t(t, n, i, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e) {
        this.platform = t, this.zd = n, this.credentials = i, this.$r = e, this.clientId = pi.Ur();
    }
    /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param persistenceProvider Provider that returns the persistence
     *    implementation.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */    return t.prototype.start = function(t, n) {
        var i = this;
        this.Kd();
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var e = new Pi, r = new Pi, u = !1;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.v((function(s) {
            u ? i.$r.ou((function() {
                return i.Pl(s);
            })) : (u = !0, i.Hd(t, n, s, r).then((function() {
                return i.Jd(s);
            })).then(e.resolve, e.reject));
        })), 
        // Block the async queue until initialization is done
        this.$r.ou((function() {
            return e.promise;
        })), r.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */
    t.prototype.enableNetwork = function() {
        var t = this;
        return this.Kd(), this.$r.enqueue((function() {
            return t.dh.enableNetwork();
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param persistenceProvider The provider that provides either IndexedDb or
     *     memory-backed persistence
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype.Hd = function(t, n, i, e) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var r;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return u.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , t.initialize(this.$r, this.zd, this.platform, this.clientId, i, n) ];

                  case 1:
                    return u.sent(), this.persistence = t.la(), this.Yd = t.fa(), this.td = t.da(), 
                    e.resolve(), [ 3 /*break*/ , 3 ];

                  case 2:
                    // An unknown failure on the first stage shuts everything down.
                    if (r = u.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    e.reject(r), !this.Xd(r)) throw r;
                    return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + r), 
                    [ 2 /*return*/ , this.Hd(new pe, {
                        aa: !1
                    }, i, e) ];

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.Xd = function(t) {
        return "FirebaseError" === t.name ? t.code === T.FAILED_PRECONDITION || t.code === T.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code);
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.Kd = function() {
        if (this.$r.vu) throw new E(T.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /**
     * Initializes the rest of the FirestoreClient, assuming the initial user
     * has been obtained from the credential provider and some persistence
     * implementation is available in this.persistence.
     */
    t.prototype.Jd = function(t) {
        var n = this;
        return vi("FirestoreClient", "Initializing. user=", t.uid), this.platform.$d(this.zd).then((function(i) {
            return tslib.__awaiter(n, void 0, void 0, (function() {
                var n, e, s, o, h, c, a = this;
                return tslib.__generator(this, (function(f) {
                    switch (f.label) {
                      case 0:
                        return n = new re, this.zf = new Qi(this.persistence, n, t), [ 4 /*yield*/ , this.zf.start() ];

                      case 1:
                        // PORTING NOTE: LocalStore doesn't need an explicit start() on the Web.
                        return f.sent(), e = this.platform.Zd(), s = this.platform.tv(this.zd.Dn), o = new Ee(this.$r, i, this.credentials, s), 
                        h = function(t) {
                            return a.dh.Ql(t, 0 /* RemoteStore */);
                        }, c = function(t) {
                            return a.dh.Ql(t, 1 /* SharedClientState */);
                        }, this.Kl = new He(this.zf, o, this.$r, h, e), this.dh = new nr(this.zf, this.Kl, this.td, t), 
                        this.td.vh = c, 
                        // Set up wiring between sync engine and other components
                        this.Kl.dh = this.dh, this.td.dh = this.dh, this.nv = new er(this.dh), [ 4 /*yield*/ , this.td.start() ];

                      case 2:
                        // PORTING NOTE: LocalStore doesn't need an explicit start() on the Web.
                        return f.sent(), [ 4 /*yield*/ , this.Kl.start() ];

                      case 3:
                        // NOTE: This will immediately call the listener, so we make sure to
                        // set it after localStore / remoteStore are started.
                        return f.sent(), [ 4 /*yield*/ , this.persistence.na((function(t) {
                            return tslib.__awaiter(a, void 0, void 0, (function() {
                                return tslib.__generator(this, (function(n) {
                                    switch (n.label) {
                                      case 0:
                                        return [ 4 /*yield*/ , this.dh.kl(t) ];

                                      case 1:
                                        return n.sent(), t && !this.Yd.ss ? this.Yd.start(this.zf) : t || this.Yd.stop(), 
                                        [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        })) ];

                      case 4:
                        // When a user calls clearPersistence() in one client, all other clients
                        // need to be terminated to allow the delete to succeed.
                        // NOTE: This will immediately call the listener, so we make sure to
                        // set it after localStore / remoteStore are started.
                        return f.sent(), [ 4 /*yield*/ , this.persistence.ia((function() {
                            return tslib.__awaiter(a, void 0, void 0, (function() {
                                return tslib.__generator(this, (function(t) {
                                    switch (t.label) {
                                      case 0:
                                        return [ 4 /*yield*/ , this.terminate() ];

                                      case 1:
                                        return t.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        })) ];

                      case 5:
                        // When a user calls clearPersistence() in one client, all other clients
                        // need to be terminated to allow the delete to succeed.
                        return f.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t.prototype.Pl = function(t) {
        return this.$r.Iu(), vi("FirestoreClient", "Credential Changed. Current user: " + t.uid), 
        this.dh.Pl(t);
    }, 
    /** Disables the network connection. Pending operations will not complete. */
    t.prototype.disableNetwork = function() {
        var t = this;
        return this.Kd(), this.$r.enqueue((function() {
            return t.dh.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        return this.$r.pu((function() {
            return tslib.__awaiter(t, void 0, void 0, (function() {
                return tslib.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return this.Yd.stop(), [ 4 /*yield*/ , this.Kl.shutdown() ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.td.shutdown() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.shutdown() ];

                      case 3:
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.m(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
        var t = this;
        this.Kd();
        var n = new Pi;
        return this.$r.ou((function() {
            return t.dh.Td(n);
        })), n.promise;
    }, t.prototype.listen = function(t, n, i) {
        var e = this;
        this.Kd();
        var r = new rr(t, n, i);
        return this.$r.ou((function() {
            return e.nv.listen(r);
        })), r;
    }, t.prototype.wl = function(t) {
        var n = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
                this.iv || this.$r.ou((function() {
            return n.nv.wl(t);
        }));
    }, t.prototype.ev = function(t) {
        var n = this;
        return this.Kd(), this.$r.enqueue((function() {
            return n.zf.qo(t);
        })).then((function(t) {
            if (t instanceof un) return t;
            if (t instanceof sn) return null;
            throw new E(T.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)");
        }));
    }, t.prototype.rv = function(t) {
        var n = this;
        return this.Kd(), this.$r.enqueue((function() {
            return tslib.__awaiter(n, void 0, void 0, (function() {
                var n, i, e;
                return tslib.__generator(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return [ 4 /*yield*/ , this.zf.Ko(t, 
                        /* usePreviousResults= */ !0) ];

                      case 1:
                        return n = r.sent(), i = new Xe(t, n.Yo), e = i.xl(n.documents), [ 2 /*return*/ , i.qs(e, 
                        /* updateLimboDocuments= */ !1).snapshot ];
                    }
                }));
            }));
        }));
    }, t.prototype.write = function(t) {
        var n = this;
        this.Kd();
        var i = new Pi;
        return this.$r.ou((function() {
            return n.dh.write(t, i);
        })), i.promise;
    }, t.prototype.Dn = function() {
        return this.zd.Dn;
    }, t.prototype.xd = function(t) {
        var n = this;
        this.Kd(), this.$r.ou((function() {
            return n.nv.xd(t), Promise.resolve();
        }));
    }, t.prototype.jd = function(t) {
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
        this.iv || this.nv.jd(t);
    }, Object.defineProperty(t.prototype, "iv", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.$r.vu;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.transaction = function(t) {
        var n = this;
        this.Kd();
        var i = new Pi;
        return this.$r.ou((function() {
            return n.dh.runTransaction(n.$r, t, i), Promise.resolve();
        })), i.promise;
    }, t;
}(), sr = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.uv(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.uv(this.observer.error, t);
    }, t.prototype.sv = function() {
        this.muted = !0;
    }, t.prototype.uv = function(t, n) {
        var i = this;
        this.muted || setTimeout((function() {
            i.muted || t(n);
        }), 0);
    }, t;
}();

/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function or(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, n) {
        if ("object" != typeof t || null === t) return !1;
        for (var i = t, e = 0, r = n; e < r.length; e++) {
            var u = r[e];
            if (u in i && "function" == typeof i[u]) return !0;
        }
        return !1;
    }
    /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    // settings() defaults:
    (t, [ "next", "error", "complete" ]);
}

var hr = xi.Xu, cr = /** @class */ function() {
    function t(t) {
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new E(T.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else G("settings", "non-empty string", "host", t.host), this.host = t.host, W("settings", "boolean", "ssl", t.ssl), 
        this.ssl = O(t.ssl, !0);
        if (Z("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling" ]), 
        W("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        W("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? wi("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now.") : !1 === t.timestampsInSnapshots && wi("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."), 
        this.timestampsInSnapshots = O(t.timestampsInSnapshots, !0), W("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = xi.Zu; else {
            if (t.cacheSizeBytes !== hr && t.cacheSizeBytes < xi.$u) throw new E(T.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + xi.$u);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        W("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = void 0 !== t.experimentalForceLongPolling && t.experimentalForceLongPolling;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling;
    }, t;
}(), ar = /** @class */ function() {
    // Note: We are using `MemoryPersistenceProvider` as a default
    // PersistenceProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function t(n, i, e) {
        var s = this;
        if (void 0 === e && (e = new pe), this.ov = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.hv = new Ni, this.INTERNAL = {
            delete: function() {
                return tslib.__awaiter(s, void 0, void 0, (function() {
                    return tslib.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.cv(), [ 4 /*yield*/ , this.av.terminate() ];

                          case 1:
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof n.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var o = n;
            this.ov = o, this.fv = t.lv(o), this.dv = o.name, this.vv = new S(i);
        } else {
            var h = n;
            if (!h.projectId) throw new E(T.INVALID_ARGUMENT, "Must provide projectId");
            this.fv = new Ei(h.projectId, h.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.dv = "[DEFAULT]", this.vv = new R;
        }
        this.wv = e, this.mv = new cr({}), this.gv = this.bv(this.fv);
    }
    return t.prototype.settings = function(t) {
        if (j("Firestore.settings", arguments, 1), M("Firestore.settings", "object", 1, t), 
        N(t, "persistence")) throw new E(T.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().');
        var n = new cr(t);
        if (this.av && !this.mv.isEqual(n)) throw new E(T.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.mv = n, void 0 !== n.credentials && (this.vv = P(n.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.cv(), this.av.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.cv(), this.av.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        if (this.av) throw new E(T.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var n = !1;
        return t && (void 0 !== t.experimentalTabSynchronization && wi("The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."), 
        n = O(void 0 !== t.synchronizeTabs ? t.synchronizeTabs : t.experimentalTabSynchronization, !1)), 
        this.pv(this.wv, {
            aa: !0,
            cacheSizeBytes: this.mv.cacheSizeBytes,
            synchronizeTabs: n
        });
    }, t.prototype.clearPersistence = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return tslib.__generator(this, (function(i) {
                if (void 0 !== this.av && !this.av.iv) throw new E(T.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                return t = new Pi, this.hv.wu((function() {
                    return tslib.__awaiter(n, void 0, void 0, (function() {
                        var n, i;
                        return tslib.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return e.trys.push([ 0, 2, , 3 ]), n = this.yv(), [ 4 /*yield*/ , this.wv.clearPersistence(n) ];

                              case 1:
                                return e.sent(), t.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return i = e.sent(), t.reject(i), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), [ 2 /*return*/ , t.promise ];
            }));
        }));
    }, t.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "_v", {
        get: function() {
            return this.cv(), this.av.iv;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.cv(), this.av.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.cv(), or(t)) return this.Iv(t);
        M("Firestore.onSnapshotsInSync", "function", 1, t);
        var n = {
            next: t
        };
        return this.Iv(n);
    }, t.prototype.Iv = function(t) {
        var n = this, i = new sr({
            next: function() {
                t.next && t.next();
            },
            error: function(t) {
                throw gi("Uncaught Error in onSnapshotsInSync");
            }
        });
        return this.av.xd(i), function() {
            i.sv(), n.av.jd(i);
        };
    }, t.prototype.cv = function() {
        return this.av || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.pv(new pe, {
            aa: !1
        }), this.av;
    }, t.prototype.yv = function() {
        return new Ti(this.fv, this.dv, this.mv.host, this.mv.ssl, this.mv.forceLongPolling);
    }, t.prototype.pv = function(t, n) {
        bi(!!this.mv.host, "FirestoreSettings.host is not set"), bi(!this.av, "configureClient() called multiple times");
        var i = this.yv();
        return this.av = new ur(ai.C(), i, this.vv, this.hv), this.av.start(t, n);
    }, t.prototype.bv = function(t) {
        return new qe((function(n) {
            if (n instanceof dr) {
                var i = t, e = n.firestore.fv;
                if (!e.isEqual(i)) throw new E(T.INVALID_ARGUMENT, "Document reference is for database " + e.projectId + "/" + e.database + " but should be for database " + i.projectId + "/" + i.database);
                return new Le(t, n.Tv);
            }
            return n;
        }));
    }, t.lv = function(t) {
        var n = t.options;
        if (!N(n, "projectId")) throw new E(T.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var i = n.projectId;
        if (!i || "string" != typeof i) throw new E(T.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new Ei(i);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.ov) throw new E(T.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.ov;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return j("Firestore.collection", arguments, 1), M("Firestore.collection", "non-empty string", 1, t), 
        this.cv(), new pr(wt.et(t), this);
    }, t.prototype.doc = function(t) {
        return j("Firestore.doc", arguments, 1), M("Firestore.doc", "non-empty string", 1, t), 
        this.cv(), dr.Ev(wt.et(t), this);
    }, t.prototype.collectionGroup = function(t) {
        if (j("Firestore.collectionGroup", arguments, 1), M("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new E(T.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.cv(), new gr(new vn(wt.rt, t), this);
    }, t.prototype.runTransaction = function(t) {
        var n = this;
        return j("Firestore.runTransaction", arguments, 1), M("Firestore.runTransaction", "function", 1, t), 
        this.cv().transaction((function(i) {
            return t(new fr(n, i));
        }));
    }, t.prototype.batch = function() {
        return this.cv(), new lr(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (li()) {
              case 0 /* DEBUG */ :
                return "debug";

              case 1 /* ERROR */ :
                return "error";

              case 2 /* SILENT */ :
                return "silent";

              default:
                return gi("Unknown log level: " + li());
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.setLogLevel = function(t) {
        switch (j("Firestore.setLogLevel", arguments, 1), M("Firestore.setLogLevel", "non-empty string", 1, t), 
        t) {
          case "debug":
            di(0 /* DEBUG */);
            break;

          case "error":
            di(1 /* ERROR */);
            break;

          case "silent":
            di(2 /* SILENT */);
            break;

          default:
            throw new E(T.INVALID_ARGUMENT, "Invalid log level: " + t);
        }
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype.Dv = function() {
        return this.mv.timestampsInSnapshots;
    }, t;
}(), fr = /** @class */ function() {
    function t(t, n) {
        this.Rv = t, this.Sv = n;
    }
    return t.prototype.get = function(t) {
        var n = this;
        j("Transaction.get", arguments, 1);
        var i = Tr("Transaction.get", t, this.Rv);
        return this.Sv.lookup([ i.Tv ]).then((function(t) {
            if (!t || 1 !== t.length) return gi("Mismatch in docs returned from document lookup.");
            var e = t[0];
            if (e instanceof sn) return new wr(n.Rv, i.Tv, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, i.Av);
            if (e instanceof un) return new wr(n.Rv, i.Tv, e, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, i.Av);
            throw gi("BatchGetDocumentsRequest returned unexpected document type: " + e.constructor.name);
        }));
    }, t.prototype.set = function(t, n, i) {
        q("Transaction.set", arguments, 2, 3);
        var e = Tr("Transaction.set", t, this.Rv);
        i = yr("Transaction.set", i);
        var r = Dr(e.Av, n, "Transaction.set"), u = r[0], s = r[1], o = i.merge || i.mergeFields ? this.Rv.gv.yf(s, u, i.mergeFields) : this.Rv.gv.bf(s, u);
        return this.Sv.set(e.Tv, o), this;
    }, t.prototype.update = function(t, n, i) {
        for (var e, r, u = [], s = 3; s < arguments.length; s++) u[s - 3] = arguments[s];
        return "string" == typeof n || n instanceof De ? (L("Transaction.update", arguments, 3), 
        e = Tr("Transaction.update", t, this.Rv), r = this.Rv.gv.Tf("Transaction.update", n, i, u)) : (j("Transaction.update", arguments, 2), 
        e = Tr("Transaction.update", t, this.Rv), r = this.Rv.gv._f("Transaction.update", n)), 
        this.Sv.update(e.Tv, r), this;
    }, t.prototype.delete = function(t) {
        j("Transaction.delete", arguments, 1);
        var n = Tr("Transaction.delete", t, this.Rv);
        return this.Sv.delete(n.Tv), this;
    }, t;
}(), lr = /** @class */ function() {
    function t(t) {
        this.Rv = t, this.Cv = [], this.Pv = !1;
    }
    return t.prototype.set = function(t, n, i) {
        q("WriteBatch.set", arguments, 2, 3), this.kv();
        var e = Tr("WriteBatch.set", t, this.Rv);
        i = yr("WriteBatch.set", i);
        var r = Dr(e.Av, n, "WriteBatch.set"), u = r[0], s = r[1], o = i.merge || i.mergeFields ? this.Rv.gv.yf(s, u, i.mergeFields) : this.Rv.gv.bf(s, u);
        return this.Cv = this.Cv.concat(o.hf(e.Tv, Ot.NONE)), this;
    }, t.prototype.update = function(t, n, i) {
        for (var e, r, u = [], s = 3; s < arguments.length; s++) u[s - 3] = arguments[s];
        return this.kv(), "string" == typeof n || n instanceof De ? (L("WriteBatch.update", arguments, 3), 
        e = Tr("WriteBatch.update", t, this.Rv), r = this.Rv.gv.Tf("WriteBatch.update", n, i, u)) : (j("WriteBatch.update", arguments, 2), 
        e = Tr("WriteBatch.update", t, this.Rv), r = this.Rv.gv._f("WriteBatch.update", n)), 
        this.Cv = this.Cv.concat(r.hf(e.Tv, Ot.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        j("WriteBatch.delete", arguments, 1), this.kv();
        var n = Tr("WriteBatch.delete", t, this.Rv);
        return this.Cv = this.Cv.concat(new jt(n.Tv, Ot.NONE)), this;
    }, t.prototype.commit = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            return tslib.__generator(this, (function(t) {
                return this.kv(), this.Pv = !0, this.Cv.length > 0 ? [ 2 /*return*/ , this.Rv.cv().write(this.Cv) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.kv = function() {
        if (this.Pv) throw new E(T.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), dr = /** @class */ function() {
    function t(t, n, i) {
        this.Tv = t, this.firestore = n, this.Av = i, this.av = this.firestore.cv();
    }
    return t.Ev = function(n, i, e) {
        if (n.length % 2 != 0) throw new E(T.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + n.it() + " has " + n.length);
        return new t(new bt(n), i, e);
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.Tv.path.$();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        get: function() {
            return new pr(this.Tv.path.J(), this.firestore, this.Av);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.Tv.path.it();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        if (j("DocumentReference.collection", arguments, 1), M("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new E(T.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var n = wt.et(t);
        return new pr(this.Tv.path.child(n), this.firestore);
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw tt("isEqual", "DocumentReference", 1, n);
        return this.firestore === n.firestore && this.Tv.isEqual(n.Tv) && this.Av === n.Av;
    }, t.prototype.set = function(t, n) {
        q("DocumentReference.set", arguments, 1, 2), n = yr("DocumentReference.set", n);
        var i = Dr(this.Av, t, "DocumentReference.set"), e = i[0], r = i[1], u = n.merge || n.mergeFields ? this.firestore.gv.yf(r, e, n.mergeFields) : this.firestore.gv.bf(r, e);
        return this.av.write(u.hf(this.Tv, Ot.NONE));
    }, t.prototype.update = function(t, n) {
        for (var i, e = [], r = 2; r < arguments.length; r++) e[r - 2] = arguments[r];
        return "string" == typeof t || t instanceof De ? (L("DocumentReference.update", arguments, 2), 
        i = this.firestore.gv.Tf("DocumentReference.update", t, n, e)) : (j("DocumentReference.update", arguments, 1), 
        i = this.firestore.gv._f("DocumentReference.update", t)), this.av.write(i.hf(this.Tv, Ot.exists(!0)));
    }, t.prototype.delete = function() {
        return j("DocumentReference.delete", arguments, 0), this.av.write([ new jt(this.Tv, Ot.NONE) ]);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        q("DocumentReference.onSnapshot", arguments, 1, 4);
        var i, e = {
            includeMetadataChanges: !1
        }, r = 0;
        "object" != typeof t[r] || or(t[r]) || (Z("DocumentReference.onSnapshot", e = t[r], [ "includeMetadataChanges" ]), 
        W("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", e.includeMetadataChanges), 
        r++);
        var u = {
            includeMetadataChanges: e.includeMetadataChanges
        };
        return or(t[r]) ? i = t[r] : (M("DocumentReference.onSnapshot", "function", r, t[r]), 
        Q("DocumentReference.onSnapshot", "function", r + 1, t[r + 1]), Q("DocumentReference.onSnapshot", "function", r + 2, t[r + 2]), 
        i = {
            next: t[r],
            error: t[r + 1],
            complete: t[r + 2]
        }), this.Nv(u, i);
    }, t.prototype.Nv = function(t, n) {
        var i = this, e = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        n.error && (e = n.error.bind(n));
        var r = new sr({
            next: function(t) {
                if (n.next) {
                    bi(t.docs.size <= 1, "Too many documents returned on a document query");
                    var e = t.docs.get(i.Tv);
                    n.next(new wr(i.firestore, i.Tv, e, t.fromCache, t.hasPendingWrites, i.Av));
                }
            },
            error: e
        }), u = this.av.listen(vn.jn(this.Tv.path), r, t);
        return function() {
            r.sv(), i.av.wl(u);
        };
    }, t.prototype.get = function(t) {
        var n = this;
        return q("DocumentReference.get", arguments, 0, 1), Ir("DocumentReference.get", t), 
        new Promise((function(i, e) {
            t && "cache" === t.source ? n.firestore.cv().ev(n.Tv).then((function(t) {
                i(new wr(n.firestore, n.Tv, t, 
                /*fromCache=*/ !0, t instanceof un && t.rn, n.Av));
            }), e) : n.Ov(i, e, t);
        }));
    }, t.prototype.Ov = function(t, n, i) {
        var e = this.Nv({
            includeMetadataChanges: !0,
            Wd: !0
        }, {
            next: function(r) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e(), !r.exists && r.metadata.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                n(new E(T.UNAVAILABLE, "Failed to get document because the client is offline.")) : r.exists && r.metadata.fromCache && i && "server" === i.source ? n(new E(T.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : t(r);
            },
            error: n
        });
    }, t.prototype.withConverter = function(n) {
        return new t(this.Tv, this.firestore, n);
    }, t;
}(), vr = /** @class */ function() {
    function t(t, n) {
        this.hasPendingWrites = t, this.fromCache = n;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), wr = /** @class */ function() {
    function t(t, n, i, e, r, u) {
        this.Rv = t, this.Tv = n, this.Fv = i, this.Vv = e, this.Uv = r, this.Av = u;
    }
    return t.prototype.data = function(t) {
        if (q("DocumentSnapshot.data", arguments, 0, 1), t = _r("DocumentSnapshot.data", t), 
        this.Fv) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.Av) {
                var n = new mr(this.Rv, this.Tv, this.Fv, this.Vv, this.Uv);
                return this.Av.fromFirestore(n, t);
            }
            return this.xv(this.Fv.data(), qt.gn(t, this.Rv.Dv()));
        }
    }, t.prototype.get = function(t, n) {
        if (q("DocumentSnapshot.get", arguments, 1, 2), n = _r("DocumentSnapshot.get", n), 
        this.Fv) {
            var i = this.Fv.data().field(Qe("DocumentSnapshot.get", t));
            if (null !== i) return this.jv(i, qt.gn(n, this.Rv.Dv()));
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.Tv.path.$();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new dr(this.Tv, this.Rv, this.Av);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.Fv;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new vr(this.Uv, this.Vv);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw tt("isEqual", "DocumentSnapshot", 1, n);
        return this.Rv === n.Rv && this.Vv === n.Vv && this.Tv.isEqual(n.Tv) && (null === this.Fv ? null === n.Fv : this.Fv.isEqual(n.Fv)) && this.Av === n.Av;
    }, t.prototype.xv = function(t, n) {
        var i = this, e = {};
        return t.forEach((function(t, r) {
            e[t] = i.jv(r, n);
        })), e;
    }, t.prototype.jv = function(t, n) {
        if (t instanceof tn) return this.xv(t, n);
        if (t instanceof en) return this.Lv(t, n);
        if (t instanceof $t) {
            var i = t.value(n), e = this.Rv.cv().Dn();
            return t.Dn.isEqual(e) || 
            // TODO(b/64130202): Somehow support foreign references.
            wi("Document " + this.Tv.path + " contains a document reference within a different database (" + t.Dn.projectId + "/" + t.Dn.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), 
            new dr(i, this.Rv, this.Av);
        }
        return t.value(n);
    }, t.prototype.Lv = function(t, n) {
        var i = this;
        return t.Jt.map((function(t) {
            return i.jv(t, n);
        }));
    }, t;
}(), mr = /** @class */ function(t) {
    function i() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return tslib.__extends(i, t), i.prototype.data = function(n) {
        var i = t.prototype.data.call(this, n);
        return bi(void 0 !== i, "Document in a QueryDocumentSnapshot should exist"), i;
    }, i;
}(wr), gr = /** @class */ function() {
    function t(t, n, i) {
        this.qv = t, this.firestore = n, this.Av = i;
    }
    return t.prototype.where = function(n, i, e) {
        j("Query.where", arguments, 3), $("Query.where", 3, e);
        // Enumerated from the WhereFilterOp type in index.d.ts.
        var r, u = [ "<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any" ];
        H("Query.where", u, 2, i);
        var s = Qe("Query.where", n), o = mn.et(i);
        if (s.st()) {
            if (o === mn.ARRAY_CONTAINS || o === mn.ARRAY_CONTAINS_ANY) throw new E(T.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o.toString() + "' queries on FieldPath.documentId().");
            if (o === mn.IN) {
                this.Bv(e, o);
                for (var h = [], c = 0, a = e; c < a.length; c++) {
                    var f = a[c];
                    h.push(this.Mv(f));
                }
                r = new en(h);
            } else r = this.Mv(e);
        } else o !== mn.IN && o !== mn.ARRAY_CONTAINS_ANY || this.Bv(e, o), r = this.firestore.gv.Ef("Query.where", e, 
        // We only allow nested arrays for IN queries.
        /** allowArrays = */ o === mn.IN);
        var l = gn.create(s, o, r);
        return this.Qv(l), new t(this.qv.Bn(l), this.firestore, this.Av);
    }, t.prototype.orderBy = function(n, i) {
        var e;
        if (q("Query.orderBy", arguments, 1, 2), Q("Query.orderBy", "non-empty string", 2, i), 
        void 0 === i || "asc" === i) e = Tn.ASCENDING; else {
            if ("desc" !== i) throw new E(T.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + i + "', expected 'asc' or 'desc'.");
            e = Tn.DESCENDING;
        }
        if (null !== this.qv.startAt) throw new E(T.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.qv.endAt) throw new E(T.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var r = Qe("Query.orderBy", n), u = new Dn(r, e);
        return this.Gv(u), new t(this.qv.Qn(u), this.firestore, this.Av);
    }, t.prototype.limit = function(n) {
        return j("Query.limit", arguments, 1), M("Query.limit", "number", 1, n), nt("Query.limit", 1, n), 
        new t(this.qv.Gn(n), this.firestore, this.Av);
    }, t.prototype.limitToLast = function(n) {
        return j("Query.limitToLast", arguments, 1), M("Query.limitToLast", "number", 1, n), 
        nt("Query.limitToLast", 1, n), new t(this.qv.Wn(n), this.firestore, this.Av);
    }, t.prototype.startAt = function(n) {
        for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
        L("Query.startAt", arguments, 1);
        var r = this.Wv("Query.startAt", n, i, 
        /*before=*/ !0);
        return new t(this.qv.zn(r), this.firestore, this.Av);
    }, t.prototype.startAfter = function(n) {
        for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
        L("Query.startAfter", arguments, 1);
        var r = this.Wv("Query.startAfter", n, i, 
        /*before=*/ !1);
        return new t(this.qv.zn(r), this.firestore, this.Av);
    }, t.prototype.endBefore = function(n) {
        for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
        L("Query.endBefore", arguments, 1);
        var r = this.Wv("Query.endBefore", n, i, 
        /*before=*/ !0);
        return new t(this.qv.Kn(r), this.firestore, this.Av);
    }, t.prototype.endAt = function(n) {
        for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
        L("Query.endAt", arguments, 1);
        var r = this.Wv("Query.endAt", n, i, 
        /*before=*/ !1);
        return new t(this.qv.Kn(r), this.firestore, this.Av);
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw tt("isEqual", "Query", 1, n);
        return this.firestore === n.firestore && this.qv.isEqual(n.qv);
    }, t.prototype.withConverter = function(n) {
        return new t(this.qv, this.firestore, n);
    }, 
    /** Helper function to create a bound from a document or fields */
    t.prototype.Wv = function(t, n, i, e) {
        if ($(t, 1, n), n instanceof wr) {
            if (i.length > 0) throw new E(T.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
            var r = n;
            if (!r.exists) throw new E(T.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
            return this.zv(t, r.Fv, e);
        }
        var u = [ n ].concat(i);
        return this.Kv(t, u, e);
    }, 
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    t.prototype.zv = function(t, n, i) {
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var e = [], r = 0, u = this.qv.orderBy; r < u.length; r++) {
            var s = u[r];
            if (s.field.st()) e.push(new $t(this.firestore.fv, n.key)); else {
                var o = n.field(s.field);
                if (o instanceof Yt) throw new E(T.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + s.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === o) {
                    var h = s.field.it();
                    throw new E(T.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
                }
                e.push(o);
            }
        }
        return new En(e, i);
    }, 
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    t.prototype.Kv = function(t, n, i) {
        // Use explicit order by's because it has to match the query the user made
        var e = this.qv.On;
        if (n.length > e.length) throw new E(T.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        for (var r = [], u = 0; u < n.length; u++) {
            var s = n[u];
            if (e[u].field.st()) {
                if ("string" != typeof s) throw new E(T.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                if (!this.qv.ui() && -1 !== s.indexOf("/")) throw new E(T.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                var o = this.qv.path.child(wt.et(s));
                if (!bt.ct(o)) throw new E(T.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + o + "' is not because it contains an odd number of segments.");
                var h = new bt(o);
                r.push(new $t(this.firestore.fv, h));
            } else {
                var c = this.firestore.gv.Ef(t, s);
                r.push(c);
            }
        }
        return new En(r, i);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        q("Query.onSnapshot", arguments, 1, 4);
        var i, e = {}, r = 0;
        return "object" != typeof t[r] || or(t[r]) || (Z("Query.onSnapshot", e = t[r], [ "includeMetadataChanges" ]), 
        W("Query.onSnapshot", "boolean", "includeMetadataChanges", e.includeMetadataChanges), 
        r++), or(t[r]) ? i = t[r] : (M("Query.onSnapshot", "function", r, t[r]), Q("Query.onSnapshot", "function", r + 1, t[r + 1]), 
        Q("Query.onSnapshot", "function", r + 2, t[r + 2]), i = {
            next: t[r],
            error: t[r + 1],
            complete: t[r + 2]
        }), this.Hv(this.qv), this.Nv(e, i);
    }, t.prototype.Nv = function(t, n) {
        var i = this, e = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        n.error && (e = n.error.bind(n));
        var r = new sr({
            next: function(t) {
                n.next && n.next(new br(i.firestore, i.qv, t, i.Av));
            },
            error: e
        }), u = this.firestore.cv(), s = u.listen(this.qv, r, t);
        return function() {
            r.sv(), u.wl(s);
        };
    }, t.prototype.Hv = function(t) {
        if (t.ei() && 0 === t.On.length) throw new E(T.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }, t.prototype.get = function(t) {
        var n = this;
        return q("Query.get", arguments, 0, 1), Ir("Query.get", t), this.Hv(this.qv), new Promise((function(i, e) {
            t && "cache" === t.source ? n.firestore.cv().rv(n.qv).then((function(t) {
                i(new br(n.firestore, n.qv, t, n.Av));
            }), e) : n.Ov(i, e, t);
        }));
    }, t.prototype.Ov = function(t, n, i) {
        var e = this.Nv({
            includeMetadataChanges: !0,
            Wd: !0
        }, {
            next: function(r) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e(), r.metadata.fromCache && i && "server" === i.source ? n(new E(T.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : t(r);
            },
            error: n
        });
    }, 
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    t.prototype.Mv = function(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new E(T.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.qv.ui() && -1 !== t.indexOf("/")) throw new E(T.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
            var n = this.qv.path.child(wt.et(t));
            if (!bt.ct(n)) throw new E(T.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + n + "' is not because it has an odd number of segments (" + n.length + ").");
            return new $t(this.firestore.fv, new bt(n));
        }
        if (t instanceof dr) {
            var i = t;
            return new $t(this.firestore.fv, i.Tv);
        }
        throw new E(T.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + X(t) + ".");
    }, 
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    t.prototype.Bv = function(t, n) {
        if (!Array.isArray(t) || 0 === t.length) throw new E(T.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + n.toString() + "' filters.");
        if (t.length > 10) throw new E(T.INVALID_ARGUMENT, "Invalid Query. '" + n.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new E(T.INVALID_ARGUMENT, "Invalid Query. '" + n.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new E(T.INVALID_ARGUMENT, "Invalid Query. '" + n.toString() + "' filters cannot contain 'NaN' in the value array.");
    }, t.prototype.Qv = function(t) {
        if (t instanceof gn) {
            var n = [ mn.ARRAY_CONTAINS, mn.ARRAY_CONTAINS_ANY ], i = [ mn.IN, mn.ARRAY_CONTAINS_ANY ], e = n.indexOf(t.op) >= 0, r = i.indexOf(t.op) >= 0;
            if (t.Mn()) {
                var u = this.qv.Ln();
                if (null !== u && !u.isEqual(t.field)) throw new E(T.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + u.toString() + "' and '" + t.field.toString() + "'");
                var s = this.qv.qn();
                null !== s && this.Jv(t.field, s);
            } else if (r || e) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var o = null;
                if (r && (o = this.qv.ri(i)), null === o && e && (o = this.qv.ri(n)), null != o) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw o === t.op ? new E(T.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new E(T.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + o.toString() + "' filters.");
            }
        }
    }, t.prototype.Gv = function(t) {
        if (null === this.qv.qn()) {
            // This is the first order by. It must match any inequality.
            var n = this.qv.Ln();
            null !== n && this.Jv(n, t.field);
        }
    }, t.prototype.Jv = function(t, n) {
        if (!n.isEqual(t)) throw new E(T.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + n.toString() + "' instead.");
    }, t;
}(), br = /** @class */ function() {
    function t(t, n, i, e) {
        this.Rv = t, this.Yv = n, this.Xv = i, this.Av = e, this.$v = null, this.Zv = null, 
        this.metadata = new vr(i.hasPendingWrites, i.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(n) {
                return t.push(n);
            })), t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.Xv.docs.Y();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Xv.docs.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.forEach = function(t, n) {
        var i = this;
        q("QuerySnapshot.forEach", arguments, 1, 2), M("QuerySnapshot.forEach", "function", 1, t), 
        this.Xv.docs.forEach((function(e) {
            t.call(n, i.tw(e));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new gr(this.Yv, this.Rv, this.Av);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (Z("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), W("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var n = !(!t || !t.includeMetadataChanges);
        if (n && this.Xv.Ii) throw new E(T.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.$v && this.Zv === n || (this.$v = 
        /**
 * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
 *
 * Exported for testing.
 */
        function(t, n, i, e) {
            if (i.pi.Y()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var r, u = 0;
                return i.docChanges.map((function(n) {
                    var s = new mr(t, n.doc.key, n.doc, i.fromCache, i.yi.has(n.doc.key), e);
                    return bi(0 /* Added */ === n.type, "Invalid event type for first snapshot"), bi(!r || i.query.Xn(r, n.doc) < 0, "Got added events in wrong order"), 
                    r = n.doc, {
                        type: "added",
                        doc: s,
                        oldIndex: -1,
                        newIndex: u++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var s = i.pi;
            return i.docChanges.filter((function(t) {
                return n || 3 /* Metadata */ !== t.type;
            })).map((function(n) {
                var r = new mr(t, n.doc.key, n.doc, i.fromCache, i.yi.has(n.doc.key), e), u = -1, o = -1;
                return 0 /* Added */ !== n.type && (bi((u = s.indexOf(n.doc.key)) >= 0, "Index for document not found"), 
                s = s.delete(n.doc.key)), 1 /* Removed */ !== n.type && (o = (s = s.add(n.doc)).indexOf(n.doc.key)), 
                {
                    type: Er(n.type),
                    doc: r,
                    oldIndex: u,
                    newIndex: o
                };
            }));
        }(this.Rv, n, this.Xv, this.Av), this.Zv = n), this.$v;
    }, 
    /** Check the equality. The call can be very expensive. */
    t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw tt("isEqual", "QuerySnapshot", 1, n);
        return this.Rv === n.Rv && this.Yv.isEqual(n.Yv) && this.Xv.isEqual(n.Xv) && this.Av === n.Av;
    }, t.prototype.tw = function(t) {
        return new mr(this.Rv, t.key, t, this.metadata.fromCache, this.Xv.yi.has(t.key), this.Av);
    }, t;
}();

tslib.__spreadArrays([ "length", "forEach", "map" ], "undefined" != typeof Symbol ? [ Symbol.iterator ] : []).forEach((function(t) {
    /**
     * We are (re-)defining properties on QuerySnapshot.prototype.docChanges which
     * is a Function. This could fail, in particular in the case of 'length' which
     * already exists on Function.prototype and on IE11 is improperly defined with
     * `{ configurable: false }`. So we wrap this in a try/catch to ensure that we
     * still have a functional SDK.
     */
    try {
        Object.defineProperty(br.prototype.docChanges, t, {
            get: function() {
                // TODO(2018/11/01): As of 2018/04/17 we're changing docChanges from an array
                // into a method. Because this is a runtime breaking change and somewhat subtle
                // (both Array and Function have a .length, etc.), we'll replace commonly-used
                // properties (including Symbol.iterator) to throw a custom error message. In
                // ~6 months we can delete the custom error as most folks will have hopefully
                // migrated.
                return function() {
                    throw new E(T.INVALID_ARGUMENT, 'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"');
                }();
            }
        });
    } catch (t) {}
 // Ignore this failure intentionally
}));

var pr = /** @class */ function(t) {
    function i(n, i, e) {
        var r = t.call(this, vn.jn(n), i, e) || this;
        if (r.nw = n, n.length % 2 != 1) throw new E(T.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + n.it() + " has " + n.length);
        return r;
    }
    return tslib.__extends(i, t), Object.defineProperty(i.prototype, "id", {
        get: function() {
            return this.qv.path.$();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "parent", {
        get: function() {
            var t = this.qv.path.J();
            return t.Y() ? null : new dr(new bt(t), this.firestore);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "path", {
        get: function() {
            return this.qv.path.it();
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.doc = function(t) {
        if (q("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = pi.Ur()), M("CollectionReference.doc", "non-empty string", 1, t), 
        "" === t) throw new E(T.INVALID_ARGUMENT, "Document path must be a non-empty string");
        var n = wt.et(t);
        return dr.Ev(this.qv.path.child(n), this.firestore, this.Av);
    }, i.prototype.add = function(t) {
        j("CollectionReference.add", arguments, 1);
        var n = this.Av ? this.Av.toFirestore(t) : t;
        M("CollectionReference.add", "object", 1, n);
        var i = this.doc();
        return i.set(t).then((function() {
            return i;
        }));
    }, i.prototype.withConverter = function(t) {
        return new i(this.nw, this.firestore, t);
    }, i;
}(gr);

function yr(t, n) {
    if (void 0 === n) return {
        merge: !1
    };
    if (Z(t, n, [ "merge", "mergeFields" ]), W(t, "boolean", "merge", n.merge), z(t, "mergeFields", "a string or a FieldPath", n.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof De;
    })), void 0 !== n.mergeFields && void 0 !== n.merge) throw new E(T.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return n;
}

function _r(t, n) {
    return void 0 === n ? {} : (Z(t, n, [ "serverTimestamps" ]), K(t, 0, "serverTimestamps", n.serverTimestamps, [ "estimate", "previous", "none" ]), 
    n);
}

function Ir(t, n) {
    Q(t, "object", 1, n), n && (Z(t, n, [ "source" ]), K(t, 0, "source", n.source, [ "default", "server", "cache" ]));
}

function Tr(t, n, i) {
    if (n instanceof dr) {
        if (n.firestore !== i) throw new E(T.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return n;
    }
    throw tt(t, "DocumentReference", 1, n);
}

function Er(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return gi("Unknown change type: " + t);
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function Dr(t, n, i) {
    var e;
    return t ? (e = t.toFirestore(n), i = "toFirestore() in " + i) : e = n, [ e, i ];
}

// Export the classes with a private constructor (it will fail if invoked
// at runtime). Note that this still allows instanceof checks.
// We're treating the variables as class names, so disable checking for lower
// case variable names.
var Rr = k(ar, "Use firebase.firestore() instead."), Sr = k(fr, "Use firebase.firestore().runTransaction() instead."), Ar = k(lr, "Use firebase.firestore().batch() instead."), Cr = k(dr, "Use firebase.firestore().doc() instead."), Pr = k(wr), kr = k(mr), Nr = k(gr), Or = k(br), Fr = k(pr, "Use firebase.firestore().collection() instead."), Vr = /** @class */ function() {
    function t(n) {
        this.db = n, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.iw(util.getUA()) && wi("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support downgrading the schema
     * version. We currently do not support any way to do versioning outside of IndexedDB's versioning
     * mechanism, as only version-upgrade transactions are allowed to do things like create
     * objectstores.
     */    return t.ew = function(n, i, e) {
        return bi(t.ph(), "IndexedDB not supported in current environment."), vi("SimpleDb", "Opening database:", n), 
        new Oi((function(r, u) {
            // TODO(mikelehen): Investigate browser compatibility.
            // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
            // suggests IE9 and older WebKit browsers handle upgrade
            // differently. They expect setVersion, as described here:
            // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
            var s = window.indexedDB.open(n, i);
            s.onsuccess = function(n) {
                var i = n.target.result;
                r(new t(i));
            }, s.onblocked = function() {
                u(new E(T.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
            }, s.onerror = function(t) {
                var n = t.target.error;
                "VersionError" === n.name ? u(new E(T.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : u(n);
            }, s.onupgradeneeded = function(t) {
                vi("SimpleDb", 'Database "' + n + '" requires upgrade from version:', t.oldVersion);
                var i = t.target.result;
                e.createOrUpgrade(i, s.transaction, t.oldVersion, ru).next((function() {
                    vi("SimpleDb", "Database upgrade to version " + ru + " complete");
                }));
            };
        })).Ou();
    }, 
    /** Deletes the specified database. */
    t.delete = function(t) {
        return vi("SimpleDb", "Removing database:", t), Lr(window.indexedDB.deleteDatabase(t)).Ou();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */
    t.ph = function() {
        if ("undefined" == typeof window || null == window.indexedDB) return !1;
        if (t.rw()) return !0;
        // In some Node environments, `window` is defined, but `window.navigator` is
        // not. We don't support IndexedDB persistence in Node if the
        // isMockPersistence() check above returns false.
                if (void 0 === window.navigator) return !1;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var n = util.getUA(), i = t.iw(n), e = 0 < i && i < 10, r = t.uw(n), u = 0 < r && r < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(n.indexOf("MSIE ") > 0 || n.indexOf("Trident/") > 0 || n.indexOf("Edge/") > 0 || e || u);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    t.rw = function() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.sw);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */
    t.ow = function(t, n) {
        return t.store(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    t.iw = function(t) {
        var n = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), i = n ? n[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(i);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    t.uw = function(t) {
        var n = t.match(/Android ([\d.]+)/i), i = n ? n[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(i);
    }, t.prototype.hw = function(t) {
        this.db.onversionchange = function(n) {
            return t(n);
        };
    }, t.prototype.runTransaction = function(t, n, i) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var e, r, s, o, h;
            return tslib.__generator(this, (function(c) {
                switch (c.label) {
                  case 0:
                    e = "readonly" === t, r = 0, s = function() {
                        var t, s, h, c;
                        return tslib.__generator(this, (function(u) {
                            switch (u.label) {
                              case 0:
                                ++r, t = xr.open(o.db, e ? "readonly" : "readwrite", n), u.label = 1;

                              case 1:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return u.trys.push([ 1, 3, , 4 ]), 
                                // As noted above, errors are propagated by aborting the transaction. So
                                // we swallow any error here to avoid the browser logging it as unhandled.
                                (s = i(t).catch((function(n) {
                                    // We cannot actually recover, and calling `abort()` will cause the transaction's
                                    // completion promise to be rejected. This in turn means that we won't use
                                    // `transactionFnResult` below. We return a rejection here so that we don't add the
                                    // possibility of returning `void` to the type of `transactionFnResult`.
                                    // Abort the transaction if there was an error.
                                    return t.abort(n), Oi.reject(n);
                                })).Ou()).catch((function() {})), [ 4 /*yield*/ , t.cw ];

                              case 2:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return u.sent(), [ 2 /*return*/ , {
                                    value: s
                                } ];

                              case 3:
                                return h = u.sent(), c = "FirebaseError" !== h.name && r < 3, vi("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", h.message, c), 
                                c ? [ 3 /*break*/ , 4 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(h)
                                } ];

                              case 4:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, o = this, c.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , s() ];

                  case 2:
                    return "object" == typeof (h = c.sent()) ? [ 2 /*return*/ , h.value ] : [ 3 /*break*/ , 1 ];

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.close = function() {
        this.db.close();
    }, t;
}(), Ur = /** @class */ function() {
    function t(t) {
        this.aw = t, this.fw = !1, this.lw = null;
    }
    return Object.defineProperty(t.prototype, "Cu", {
        get: function() {
            return this.fw;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "dw", {
        get: function() {
            return this.lw;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.aw = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.fw = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.vw = function(t) {
        this.lw = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return Lr(this.aw.delete());
    }, t;
}(), xr = /** @class */ function() {
    function t(t) {
        var n = this;
        this.transaction = t, this.aborted = !1, 
        /**
         * A promise that resolves with the result of the IndexedDb transaction.
         */
        this.ww = new Pi, this.transaction.oncomplete = function() {
            n.ww.resolve();
        }, this.transaction.onabort = function() {
            t.error ? n.ww.reject(t.error) : n.ww.resolve();
        }, this.transaction.onerror = function(t) {
            var i = Br(t.target.error);
            n.ww.reject(i);
        };
    }
    return t.open = function(n, i, e) {
        return new t(n.transaction(e, i));
    }, Object.defineProperty(t.prototype, "cw", {
        get: function() {
            return this.ww.promise;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.ww.reject(t), this.aborted || (vi("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var n = this.transaction.objectStore(t);
        return bi(!!n, "Object store not part of transaction: " + t), new jr(n);
    }, t;
}(), jr = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, n) {
        var i;
        return void 0 !== n ? (vi("SimpleDb", "PUT", this.store.name, t, n), i = this.store.put(n, t)) : (vi("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        i = this.store.put(t)), Lr(i);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value The object to write.
     * @return The key of the value to add.
     */
    t.prototype.add = function(t) {
        return vi("SimpleDb", "ADD", this.store.name, t, t), Lr(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var n = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Lr(this.store.get(t)).next((function(i) {
            // Normalize nonexistence to null.
            return void 0 === i && (i = null), vi("SimpleDb", "GET", n.store.name, t, i), i;
        }));
    }, t.prototype.delete = function(t) {
        return vi("SimpleDb", "DELETE", this.store.name, t), Lr(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return vi("SimpleDb", "COUNT", this.store.name), Lr(this.store.count());
    }, t.prototype.mw = function(t, n) {
        var i = this.cursor(this.options(t, n)), e = [];
        return this.gw(i, (function(t, n) {
            e.push(n);
        })).next((function() {
            return e;
        }));
    }, t.prototype.bw = function(t, n) {
        vi("SimpleDb", "DELETE ALL", this.store.name);
        var i = this.options(t, n);
        i.pw = !1;
        var e = this.cursor(i);
        return this.gw(e, (function(t, n, i) {
            // NOTE: Calling delete() on a cursor is documented as more efficient than
            // calling delete() on an object store with a single key
            // (https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/delete),
            // however, this requires us *not* to use a keysOnly cursor
            // (https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/delete). We
            // may want to compare the performance of each method.
            return i.delete();
        }));
    }, t.prototype.yw = function(t, n) {
        var i;
        n ? i = t : (i = {}, n = t);
        var e = this.cursor(i);
        return this.gw(e, n);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype._w = function(t) {
        var n = this.cursor({});
        return new Oi((function(i, e) {
            n.onerror = function(t) {
                var n = Br(t.target.error);
                e(n);
            }, n.onsuccess = function(n) {
                var e = n.target.result;
                e ? t(e.primaryKey, e.value).next((function(t) {
                    t ? e.continue() : i();
                })) : i();
            };
        }));
    }, t.prototype.gw = function(t, n) {
        var i = [];
        return new Oi((function(e, r) {
            t.onerror = function(t) {
                r(t.target.error);
            }, t.onsuccess = function(t) {
                var r = t.target.result;
                if (r) {
                    var u = new Ur(r), s = n(r.primaryKey, r.value, u);
                    if (s instanceof Oi) {
                        var o = s.catch((function(t) {
                            return u.done(), Oi.reject(t);
                        }));
                        i.push(o);
                    }
                    u.Cu ? e() : null === u.dw ? r.continue() : r.continue(u.dw);
                } else e();
            };
        })).next((function() {
            return Oi.Vu(i);
        }));
    }, t.prototype.options = function(t, n) {
        var i = void 0;
        return void 0 !== t && ("string" == typeof t ? i = t : (bi(void 0 === n, "3rd argument must not be defined if 2nd is a range."), 
        n = t)), {
            index: i,
            range: n
        };
    }, t.prototype.cursor = function(t) {
        var n = "next";
        if (t.reverse && (n = "prev"), t.index) {
            var i = this.store.index(t.index);
            return t.pw ? i.openKeyCursor(t.range, n) : i.openCursor(t.range, n);
        }
        return this.store.openCursor(t.range, n);
    }, t;
}();

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */
function Lr(t) {
    return new Oi((function(n, i) {
        t.onsuccess = function(t) {
            var i = t.target.result;
            n(i);
        }, t.onerror = function(t) {
            var n = Br(t.target.error);
            i(n);
        };
    }));
}

// Guard so we only report the error once.
var qr = !1;

function Br(t) {
    var n = Vr.iw(util.getUA());
    if (n >= 12.2 && n < 13) {
        var i = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(i) >= 0) {
            // Wrap error in a more descriptive one.
            var e = new E("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + i + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return qr || (qr = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw e;
            }), 0)), e;
        }
    }
    return t;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ var Mr = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, n, i, e) {
        this.userId = t, this.serializer = n, this.sc = i, this.Ks = e, 
        /**
         * Caches the document keys for pending mutation batches. If the mutation
         * has been removed from IndexedDb, the cached value may continue to
         * be used to retrieve the batch's document keys. To remove a cached value
         * locally, `removeCachedMutationKeys()` should be invoked either directly
         * or through `removeMutationBatches()`.
         *
         * With multi-tab, when the primary client acknowledges or rejects a mutation,
         * this cache is used by secondary clients to invalidate the local
         * view of the documents that were previously affected by the mutation.
         */
        // PORTING NOTE: Multi-tab only.
        this.Iw = {};
    }
    /**
     * Creates a new mutation queue for the given user.
     * @param user The user for which to create a mutation queue.
     * @param serializer The serializer to use when persisting to IndexedDb.
     */    return t.Tw = function(n, i, e, r) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return bi("" !== n.uid, "UserID must not be an empty string."), new t(n.t() ? n.uid : "", i, e, r);
    }, t.prototype.Dc = function(t) {
        var n = !0, i = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Wr(t).yw({
            index: cu.userMutationsIndex,
            range: i
        }, (function(t, i, e) {
            n = !1, e.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.vo = function(t, n, i) {
        return this.Ew(t).next((function(n) {
            // We can't store the resumeToken as a ByteString in IndexedDB, so we
            // convert it to a Base64 string for storage.
            return n.lastStreamToken = i.toBase64(), Kr(t).put(n);
        }));
    }, t.prototype.Eo = function(t) {
        return this.Ew(t).next((function(t) {
            return rt.fromBase64String(t.lastStreamToken);
        }));
    }, t.prototype.Do = function(t, n) {
        return this.Ew(t).next((function(i) {
            // We can't store the resumeToken as a ByteString in IndexedDB, so we
            // convert it to a Base64 string for storage.
            return i.lastStreamToken = n.toBase64(), Kr(t).put(i);
        }));
    }, t.prototype.fo = function(t, n, i, e) {
        var r = this, u = zr(t), s = Wr(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s.add({}).next((function(o) {
            bi("number" == typeof o, "Auto-generated key is not a number");
            for (var h = new Di(o, n, i, e), c = r.serializer.Dw(r.userId, h), a = [], f = new Tt((function(t, n) {
                return yi(t.it(), n.it());
            })), l = 0, d = e; l < d.length; l++) {
                var v = d[l], w = au.key(r.userId, v.key.path, o);
                f = f.add(v.key.path.J()), a.push(s.put(c)), a.push(u.put(w, au.PLACEHOLDER));
            }
            return f.forEach((function(n) {
                a.push(r.sc.Ic(t, n));
            })), t.ec((function() {
                r.Iw[o] = h.keys();
            })), Oi.Vu(a).next((function() {
                return h;
            }));
        }));
    }, t.prototype._o = function(t, n) {
        var i = this;
        return Wr(t).get(n).next((function(t) {
            return t ? (bi(t.userId === i.userId, "Unexpected user '" + t.userId + "' for mutation batch " + n), 
            i.serializer.Rw(t)) : null;
        }));
    }, t.prototype.do = function(t, n) {
        var i = this;
        return this.Iw[n] ? Oi.resolve(this.Iw[n]) : this._o(t, n).next((function(t) {
            if (t) {
                var e = t.keys();
                return i.Iw[n] = e, e;
            }
            return null;
        }));
    }, t.prototype.Lo = function(t, n) {
        var i = this, e = n + 1, r = IDBKeyRange.lowerBound([ this.userId, e ]), u = null;
        return Wr(t).yw({
            index: cu.userMutationsIndex,
            range: r
        }, (function(t, n, r) {
            n.userId === i.userId && (bi(n.batchId >= e, "Should have found mutation after " + e), 
            u = i.serializer.Rw(n)), r.done();
        })).next((function() {
            return u;
        }));
    }, t.prototype.To = function(t) {
        var n = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), i = -1;
        return Wr(t).yw({
            index: cu.userMutationsIndex,
            range: n,
            reverse: !0
        }, (function(t, n, e) {
            i = n.batchId, e.done();
        })).next((function() {
            return i;
        }));
    }, t.prototype.uo = function(t) {
        var n = this, i = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Wr(t).mw(cu.userMutationsIndex, i).next((function(t) {
            return t.map((function(t) {
                return n.serializer.Rw(t);
            }));
        }));
    }, t.prototype.oc = function(t, n) {
        var i = this, e = au.prefixForPath(this.userId, n.path), r = IDBKeyRange.lowerBound(e), u = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return zr(t).yw({
            range: r
        }, (function(e, r, s) {
            var o = e[0], h = e[1], c = e[2], a = he(h);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (o === i.userId && n.path.isEqual(a)) 
            // Look up the mutation batch in the store.
            return Wr(t).get(c).next((function(t) {
                if (!t) throw gi("Dangling document-mutation reference found: " + e + " which points to " + c);
                bi(t.userId === i.userId, "Unexpected user '" + t.userId + "' for mutation batch " + c), 
                u.push(i.serializer.Rw(t));
            }));
            s.done();
        })).next((function() {
            return u;
        }));
    }, t.prototype.ac = function(t, n) {
        var i = this, e = new Tt(yi), r = [];
        return n.forEach((function(n) {
            var u = au.prefixForPath(i.userId, n.path), s = IDBKeyRange.lowerBound(u), o = zr(t).yw({
                range: s
            }, (function(t, r, u) {
                var s = t[0], o = t[1], h = t[2], c = he(o);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                s === i.userId && n.path.isEqual(c) ? e = e.add(h) : u.done();
            }));
            r.push(o);
        })), Oi.Vu(r).next((function() {
            return i.Sw(t, e);
        }));
    }, t.prototype.wc = function(t, n) {
        var i = this;
        bi(!n.Nn(), "Document queries shouldn't go down this path"), bi(!n.ui(), "CollectionGroup queries should be handled in LocalDocumentsView");
        var e = n.path, r = e.length + 1, u = au.prefixForPath(this.userId, e), s = IDBKeyRange.lowerBound(u), o = new Tt(yi);
        return zr(t).yw({
            range: s
        }, (function(t, n, u) {
            var s = t[0], h = t[1], c = t[2], a = he(h);
            s === i.userId && e.Z(a) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            a.length === r && (o = o.add(c)) : u.done();
        })).next((function() {
            return i.Sw(t, o);
        }));
    }, t.prototype.Sw = function(t, n) {
        var i = this, e = [], r = [];
        // TODO(rockwood): Implement this using iterate.
        return n.forEach((function(n) {
            r.push(Wr(t).get(n).next((function(t) {
                if (null === t) throw gi("Dangling document-mutation reference found, which points to " + n);
                bi(t.userId === i.userId, "Unexpected user '" + t.userId + "' for mutation batch " + n), 
                e.push(i.serializer.Rw(t));
            })));
        })), Oi.Vu(r).next((function() {
            return e;
        }));
    }, t.prototype.Io = function(t, n) {
        var i = this;
        return Gr(t.Aw, this.userId, n).next((function(e) {
            return t.ec((function() {
                i.th(n.batchId);
            })), Oi.forEach(e, (function(n) {
                return i.Ks.Pc(t, n);
            }));
        }));
    }, t.prototype.th = function(t) {
        delete this.Iw[t];
    }, t.prototype.po = function(t) {
        var n = this;
        return this.Dc(t).next((function(i) {
            if (!i) return Oi.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var e = IDBKeyRange.lowerBound(au.prefixForUser(n.userId)), r = [];
            return zr(t).yw({
                range: e
            }, (function(t, i, e) {
                if (t[0] === n.userId) {
                    var u = he(t[1]);
                    r.push(u);
                } else e.done();
            })).next((function() {
                bi(0 === r.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + r.map((function(t) {
                    return t.it();
                })));
            }));
        }));
    }, t.prototype.Cs = function(t, n) {
        return Qr(t, this.userId, n);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.Ew = function(t) {
        var n = this;
        return Kr(t).get(this.userId).next((function(t) {
            return t || new hu(n.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @return true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function Qr(t, n, i) {
    var e = au.prefixForPath(n, i.path), r = e[1], u = IDBKeyRange.lowerBound(e), s = !1;
    return zr(t).yw({
        range: u,
        pw: !0
    }, (function(t, i, e) {
        var u = t[0], o = t[1];
        t[2];
        u === n && o === r && (s = !0), e.done();
    })).next((function() {
        return s;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Delete a mutation batch and the associated document mutations.
 * @return A PersistencePromise of the document mutations that were removed.
 */
function Gr(t, n, i) {
    var e = t.store(cu.store), r = t.store(au.store), u = [], s = IDBKeyRange.only(i.batchId), o = 0, h = e.yw({
        range: s
    }, (function(t, n, i) {
        return o++, i.delete();
    }));
    u.push(h.next((function() {
        bi(1 === o, "Dangling document-mutation reference found: Missing batch " + i.batchId);
    })));
    for (var c = [], a = 0, f = i.mutations; a < f.length; a++) {
        var l = f[a], d = au.key(n, l.key.path, i.batchId);
        u.push(r.delete(d)), c.push(l.key);
    }
    return Oi.Vu(u).next((function() {
        return c;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function Wr(t) {
    return Pu.ow(t, cu.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function zr(t) {
    return Pu.ow(t, au.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Kr(t) {
    return Pu.ow(t, hu.store);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Hr = /** @class */ function() {
    function t(t, n) {
        this.Ks = t, this.serializer = n, 
        // PORTING NOTE: We don't cache global metadata for the target cache, since
        // some of it (in particular `highestTargetId`) can be modified by secondary
        // tabs. We could perhaps be more granular (and e.g. still cache
        // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
        // to IndexedDb whenever we need to read metadata. We can revisit if it turns
        // out to have a meaningful performance impact.
        this.Wc = de.qc();
    }
    return t.prototype.Go = function(t) {
        var n = this;
        return this.Cw(t).next((function(i) {
            return i.highestTargetId = n.Wc.after(i.highestTargetId), n.Pw(t, i).next((function() {
                return i.highestTargetId;
            }));
        }));
    }, t.prototype.Ro = function(t) {
        return this.Cw(t).next((function(t) {
            return dt.L(new lt(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.zc = function(t) {
        return Xr(t.Aw);
    }, t.prototype.Fo = function(t, n, i) {
        var e = this;
        return this.Cw(t).next((function(r) {
            return r.highestListenSequenceNumber = n, i && (r.lastRemoteSnapshotVersion = i.G()), 
            n > r.highestListenSequenceNumber && (r.highestListenSequenceNumber = n), e.Pw(t, r);
        }));
    }, t.prototype.Wo = function(t, n) {
        var i = this;
        return this.Kc(t, n).next((function() {
            return i.Cw(t).next((function(e) {
                return e.targetCount += 1, i.kw(n, e), i.Pw(t, e);
            }));
        }));
    }, t.prototype.No = function(t, n) {
        return this.Kc(t, n);
    }, t.prototype.Hc = function(t, n) {
        var i = this;
        return this.Jc(t, n.targetId).next((function() {
            return Jr(t).delete(n.targetId);
        })).next((function() {
            return i.Cw(t);
        })).next((function(n) {
            return bi(n.targetCount > 0, "Removing from an empty target cache"), n.targetCount -= 1, 
            i.Pw(t, n);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.ds = function(t, n, i) {
        var e = this, r = 0, u = [];
        return Jr(t).yw((function(s, o) {
            var h = e.serializer.Nw(o);
            h.sequenceNumber <= n && null === i.get(h.targetId) && (r++, u.push(e.Hc(t, h)));
        })).next((function() {
            return Oi.Vu(u);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.oe = function(t, n) {
        var i = this;
        return Jr(t).yw((function(t, e) {
            var r = i.serializer.Nw(e);
            n(r);
        }));
    }, t.prototype.Cw = function(t) {
        return Yr(t.Aw);
    }, t.prototype.Pw = function(t, n) {
        return (i = t, Pu.ow(i, gu.store)).put(gu.key, n);
        /**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */
        var i;
    }, t.prototype.Kc = function(t, n) {
        return Jr(t).put(this.serializer.Ow(n));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.kw = function(t, n) {
        var i = !1;
        return t.targetId > n.highestTargetId && (n.highestTargetId = t.targetId, i = !0), 
        t.sequenceNumber > n.highestListenSequenceNumber && (n.highestListenSequenceNumber = t.sequenceNumber, 
        i = !0), i;
    }, t.prototype.Yc = function(t) {
        return this.Cw(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.Qo = function(t, n) {
        var i = this, e = n.canonicalId(), r = IDBKeyRange.bound([ e, Number.NEGATIVE_INFINITY ], [ e, Number.POSITIVE_INFINITY ]), u = null;
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
                return Jr(t).yw({
            range: r,
            index: wu.queryTargetsIndexName
        }, (function(t, e, r) {
            var s = i.serializer.Nw(e);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        n.isEqual(s.target) && (u = s, r.done());
        })).next((function() {
            return u;
        }));
    }, t.prototype.Co = function(t, n, i) {
        var e = this, r = [], u = $r(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return n.forEach((function(n) {
            var s = ue(n.path);
            r.push(u.put(new mu(i, s))), r.push(e.Ks._s(t, n));
        })), Oi.Vu(r);
    }, t.prototype.Ao = function(t, n, i) {
        var e = this, r = $r(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return Oi.forEach(n, (function(n) {
            var u = ue(n.path);
            return Oi.Vu([ r.delete([ i, u ]), e.Ks.Ts(t, n) ]);
        }));
    }, t.prototype.Jc = function(t, n) {
        var i = $r(t), e = IDBKeyRange.bound([ n ], [ n + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return i.delete(e);
    }, t.prototype.Ho = function(t, n) {
        var i = IDBKeyRange.bound([ n ], [ n + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), e = $r(t), r = Bn();
        return e.yw({
            range: i,
            pw: !0
        }, (function(t, n, i) {
            var e = he(t[1]), u = new bt(e);
            r = r.add(u);
        })).next((function() {
            return r;
        }));
    }, t.prototype.Cs = function(t, n) {
        var i = ue(n.path), e = IDBKeyRange.bound([ i ], [ Ii(i) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = 0;
        return $r(t).yw({
            index: mu.documentTargetsIndex,
            pw: !0,
            range: e
        }, (function(t, n, i) {
            var e = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== e && (r++, i.done());
        })).next((function() {
            return r > 0;
        }));
    }, t.prototype.be = function(t, n) {
        var i = this;
        return Jr(t).get(n).next((function(t) {
            return t ? i.serializer.Nw(t) : null;
        }));
    }, t;
}();

/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */ function Jr(t) {
    return Pu.ow(t, wu.store);
}

function Yr(t) {
    return Vr.ow(t, gu.store).get(gu.key).next((function(t) {
        return bi(null !== t, "Missing metadata row."), t;
    }));
}

function Xr(t) {
    return Yr(t).next((function(t) {
        return t.highestListenSequenceNumber;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function $r(t) {
    return Pu.ow(t, mu.store);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Zr = /** @class */ function() {
    /**
     * @param {LocalSerializer} serializer The document serializer.
     * @param {IndexManager} indexManager The query indexes that need to be maintained.
     */
    function t(t, n) {
        this.serializer = t, this.sc = n;
    }
    /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */    return t.prototype.Fs = function(t, n, i) {
        return nu(t).put(iu(n), i);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.Us = function(t, n) {
        var i = nu(t), e = iu(n);
        return i.delete(e);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, n) {
        var i = this;
        return this.getMetadata(t).next((function(e) {
            return e.byteSize += n, i.Fw(t, e);
        }));
    }, t.prototype.xs = function(t, n) {
        var i = this;
        return nu(t).get(iu(n)).next((function(t) {
            return i.Vw(t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */
    t.prototype.Uw = function(t, n) {
        var i = this;
        return nu(t).get(iu(n)).next((function(t) {
            var n = i.Vw(t);
            return n ? {
                Nc: n,
                size: eu(t)
            } : null;
        }));
    }, t.prototype.getEntries = function(t, n) {
        var i = this, e = Vn();
        return this.xw(t, n, (function(t, n) {
            var r = i.Vw(n);
            e = e.dt(t, r);
        })).next((function() {
            return e;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.jw = function(t, n) {
        var i = this, e = Vn(), r = new pt(bt.W);
        return this.xw(t, n, (function(t, n) {
            var u = i.Vw(n);
            u ? (e = e.dt(t, u), r = r.dt(t, eu(n))) : (e = e.dt(t, null), r = r.dt(t, 0));
        })).next((function() {
            return {
                Lw: e,
                qw: r
            };
        }));
    }, t.prototype.xw = function(t, n, i) {
        if (n.Y()) return Oi.resolve();
        var e = IDBKeyRange.bound(n.first().path.nt(), n.last().path.nt()), r = n.yt(), u = r.Rt();
        return nu(t).yw({
            range: e
        }, (function(t, n, e) {
            // Go through keys not found in cache.
            for (var s = bt.ft(t); u && bt.W(u, s) < 0; ) i(u, null), u = r.Rt();
            u && u.isEqual(s) && (
            // Key found in cache.
            i(u, n), u = r.St() ? r.Rt() : null), 
            // Skip to the next key (if there is one).
            u ? e.vw(u.path.nt()) : e.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;u; ) i(u, null), u = r.St() ? r.Rt() : null;
        }));
    }, t.prototype.Jo = function(t, n, i) {
        var e = this;
        bi(!n.ui(), "CollectionGroup queries should be handled in LocalDocumentsView");
        var r = xn(), u = n.path.length + 1, s = {};
        if (i.isEqual(dt.MIN)) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var o = n.path.nt();
            s.range = IDBKeyRange.lowerBound(o);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var h = n.path.nt(), c = this.serializer.Bw(i);
            s.range = IDBKeyRange.lowerBound([ h, c ], 
            /* open= */ !0), s.index = du.collectionReadTimeIndex;
        }
        return nu(t).yw(s, (function(t, i, s) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === u) {
                var o = e.serializer.Mw(i);
                n.path.Z(o.key.path) ? o instanceof un && n.matches(o) && (r = r.dt(o.key, o)) : s.done();
            }
        })).next((function() {
            return r;
        }));
    }, t.prototype.eh = function(t, n) {
        var i = this, e = Fn(), r = this.serializer.Bw(n), u = nu(t), s = IDBKeyRange.lowerBound(r, !0);
        return u.yw({
            index: du.readTimeIndex,
            range: s
        }, (function(t, n) {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            var u = i.serializer.Mw(n);
            e = e.dt(u.key, u), r = n.readTime;
        })).next((function() {
            return {
                rh: e,
                readTime: i.serializer.Qw(r)
            };
        }));
    }, t.prototype.uh = function(t) {
        var n = this, i = nu(t), e = dt.MIN;
        return i.yw({
            index: du.readTimeIndex,
            reverse: !0
        }, (function(t, i, r) {
            i.readTime && (e = n.serializer.Qw(i.readTime)), r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.wo = function(n) {
        return new t.Fc(this, !!n && n.mo);
    }, t.prototype.Vc = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return tu(t).get(vu.key).next((function(t) {
            return bi(!!t, "Missing document cache metadata"), t;
        }));
    }, t.prototype.Fw = function(t, n) {
        return tu(t).put(vu.key, n);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.Vw = function(t) {
        if (t) {
            var n = this.serializer.Mw(t);
            return n instanceof sn && n.version.isEqual(dt.q()) ? null : n;
        }
        return null;
    }, 
    /**
     * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
     *
     * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
     * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
     * when we apply the changes.
     */
    t.Fc = /** @class */ function(t) {
        /**
         * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
         * @param trackRemovals Whether to create sentinel deletes that can be tracked by
         * `getNewDocumentChanges()`.
         */
        function i(n, i) {
            var e = t.call(this) || this;
            return e.Uc = n, e.mo = i, 
            // A map of document sizes prior to applying the changes in this buffer.
            e.Gw = new Si((function(t) {
                return t.toString();
            })), e;
        }
        return tslib.__extends(i, t), i.prototype.qs = function(t) {
            var n = this, i = [], e = 0, r = new Tt((function(t, n) {
                return yi(t.it(), n.it());
            }));
            return this.ks.forEach((function(u, s) {
                var o = n.Gw.get(u);
                if (bi(void 0 !== o, "Cannot modify a document that wasn't read (for " + u + ")"), 
                s) {
                    bi(!n.readTime.isEqual(dt.MIN), "Cannot add a document with a read time of zero");
                    var h = n.Uc.serializer.Ww(s, n.readTime);
                    r = r.add(u.path.J());
                    var c = eu(h);
                    e += c - o, i.push(n.Uc.Fs(t, u, h));
                } else if (e -= o, n.mo) {
                    // In order to track removals, we store a "sentinel delete" in the
                    // RemoteDocumentCache. This entry is represented by a NoDocument
                    // with a version of 0 and ignored by `maybeDecodeDocument()` but
                    // preserved in `getNewDocumentChanges()`.
                    var a = n.Uc.serializer.Ww(new sn(u, dt.q()), n.readTime);
                    i.push(n.Uc.Fs(t, u, a));
                } else i.push(n.Uc.Us(t, u));
            })), r.forEach((function(e) {
                i.push(n.Uc.sc.Ic(t, e));
            })), i.push(this.Uc.updateMetadata(t, e)), Oi.Vu(i);
        }, i.prototype.js = function(t, n) {
            var i = this;
            // Record the size of everything we load from the cache so we can compute a delta later.
                        return this.Uc.Uw(t, n).next((function(t) {
                return null === t ? (i.Gw.set(n, 0), null) : (i.Gw.set(n, t.size), t.Nc);
            }));
        }, i.prototype.Ls = function(t, n) {
            var i = this;
            // Record the size of everything we load from the cache so we can compute
            // a delta later.
                        return this.Uc.jw(t, n).next((function(t) {
                var n = t.Lw;
                // Note: `getAllFromCache` returns two maps instead of a single map from
                // keys to `DocumentSizeEntry`s. This is to allow returning the
                // `NullableMaybeDocumentMap` directly, without a conversion.
                                return t.qw.forEach((function(t, n) {
                    i.Gw.set(t, n);
                })), n;
            }));
        }, i;
    }(Mi), t;
}();

function tu(t) {
    return Pu.ow(t, vu.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function nu(t) {
    return Pu.ow(t, du.store);
}

function iu(t) {
    return t.path.nt();
}

/**
 * Retrusn an approximate size for the given document.
 */ function eu(t) {
    var n;
    if (t.document) n = t.document; else if (t.unknownDocument) n = t.unknownDocument; else {
        if (!t.noDocument) throw gi("Unknown remote document type");
        n = t.noDocument;
    }
    return JSON.stringify(n).length;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Schema Version for the Web client:
 * 1. Initial version including Mutation Queue, Query Cache, and Remote Document
 *    Cache
 * 2. Used to ensure a targetGlobal object exists and add targetCount to it. No
 *    longer required because migration 3 unconditionally clears it.
 * 3. Dropped and re-created Query Cache to deal with cache corruption related
 *    to limbo resolution. Addresses
 *    https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4. Multi-Tab Support.
 * 5. Removal of held write acks.
 * 6. Create document global for tracking document cache size.
 * 7. Ensure every cached document has a sentinel row with a sequence number.
 * 8. Add collection-parent index for Collection Group queries.
 * 9. Change RemoteDocumentChanges store to be keyed by readTime rather than
 *    an auto-incrementing ID. This is required for Index-Free queries.
 */ var ru = 9, uu = /** @class */ function() {
    function t(t) {
        this.serializer = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.createOrUpgrade = function(t, n, i, e) {
        var r = this;
        bi(i < e && i >= 0 && e <= ru, "Unexpected schema upgrade from v" + i + " to v{toVersion}.");
        var u = new xr(n);
        i < 1 && e >= 1 && (function(t) {
            t.createObjectStore(ou.store);
        }
        /**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */ (t), function(t) {
            t.createObjectStore(hu.store, {
                keyPath: hu.keyPath
            }), t.createObjectStore(cu.store, {
                keyPath: cu.keyPath,
                autoIncrement: !0
            }).createIndex(cu.userMutationsIndex, cu.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(au.store);
        }
        /**
 * Upgrade function to migrate the 'mutations' store from V1 to V3. Loads
 * and rewrites all data.
 */ (t), pu(t), function(t) {
            t.createObjectStore(du.store);
        }
        /**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ (t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
                var s = Oi.resolve();
        return i < 3 && e >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== i && (!function(t) {
            t.deleteObjectStore(mu.store), t.deleteObjectStore(wu.store), t.deleteObjectStore(gu.store);
        }(t), pu(t)), s = s.next((function() {
            /**
 * Creates the target global singleton row.
 *
 * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
 */ return function(t) {
                var n = t.store(gu.store), i = new gu(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, dt.MIN.G(), 
                /*targetCount=*/ 0);
                return n.put(gu.key, i);
            }
            /**
 * Creates indices on the RemoteDocuments store used for both multi-tab
 * and Index-Free queries.
 */ (u);
        }))), i < 4 && e >= 4 && (0 !== i && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next((function() {
            return function(t, n) {
                return n.store(cu.store).mw().next((function(i) {
                    t.deleteObjectStore(cu.store), t.createObjectStore(cu.store, {
                        keyPath: cu.keyPath,
                        autoIncrement: !0
                    }).createIndex(cu.userMutationsIndex, cu.userMutationsKeyPath, {
                        unique: !0
                    });
                    var e = n.store(cu.store), r = i.map((function(t) {
                        return e.put(t);
                    }));
                    return Oi.Vu(r);
                }));
            }
            /**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */ (t, u);
        }))), s = s.next((function() {
            !function(t) {
                t.createObjectStore(yu.store, {
                    keyPath: yu.keyPath
                });
            }
            // Visible for testing
            (t);
        }))), i < 5 && e >= 5 && (s = s.next((function() {
            return r.removeAcknowledgedMutations(u);
        }))), i < 6 && e >= 6 && (s = s.next((function() {
            return function(t) {
                t.createObjectStore(vu.store);
            }
            /**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */ (t), r.addDocumentGlobal(u);
        }))), i < 7 && e >= 7 && (s = s.next((function() {
            return r.ensureSequenceNumbers(u);
        }))), i < 8 && e >= 8 && (s = s.next((function() {
            return r.createCollectionParentIndex(t, u);
        }))), i < 9 && e >= 9 && (s = s.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var n = t.objectStore(du.store);
                n.createIndex(du.readTimeIndex, du.readTimeIndexPath, {
                    unique: !1
                }), n.createIndex(du.collectionReadTimeIndex, du.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }
            /**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */ (n);
        }))), s;
    }, t.prototype.addDocumentGlobal = function(t) {
        var n = 0;
        return t.store(du.store).yw((function(t, i) {
            n += eu(i);
        })).next((function() {
            var i = new vu(n);
            return t.store(vu.store).put(vu.key, i);
        }));
    }, t.prototype.removeAcknowledgedMutations = function(t) {
        var n = this, i = t.store(hu.store), e = t.store(cu.store);
        return i.mw().next((function(i) {
            return Oi.forEach(i, (function(i) {
                var r = IDBKeyRange.bound([ i.userId, -1 ], [ i.userId, i.lastAcknowledgedBatchId ]);
                return e.mw(cu.userMutationsIndex, r).next((function(e) {
                    return Oi.forEach(e, (function(e) {
                        bi(e.userId === i.userId, "Cannot process batch " + e.batchId + " from unexpected user");
                        var r = n.serializer.Rw(e);
                        return Gr(t, i.userId, r).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.ensureSequenceNumbers = function(t) {
        var n = t.store(mu.store), i = t.store(du.store);
        return Xr(t).next((function(t) {
            var e = [];
            return i.yw((function(i, r) {
                var u = new wt(i), s = function(t) {
                    return [ 0, ue(t) ];
                }
                /**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */ (u);
                e.push(n.get(s).next((function(i) {
                    return i ? Oi.resolve() : function(i) {
                        return n.put(new mu(0, ue(i), t));
                    }(u);
                })));
            })).next((function() {
                return Oi.Vu(e);
            }));
        }));
    }, t.prototype.createCollectionParentIndex = function(t, n) {
        // Create the index.
        t.createObjectStore(bu.store, {
            keyPath: bu.keyPath
        });
        var i = n.store(bu.store), e = new ae, r = function(t) {
            if (e.add(t)) {
                var n = t.$(), r = t.J();
                return i.put({
                    collectionId: n,
                    parent: ue(r)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
                // Index existing remote documents.
        return n.store(du.store).yw({
            pw: !0
        }, (function(t, n) {
            var i = new wt(t);
            return r(i.J());
        })).next((function() {
            // Index existing mutations.
            return n.store(au.store).yw({
                pw: !0
            }, (function(t, n) {
                t[0];
                var i = t[1], e = (t[2], he(i));
                return r(e.J());
            }));
        }));
    }, t;
}();

/** Performs database creation and schema upgrades. */ var su = function(t, n) {
    this.seconds = t, this.nanoseconds = n;
}, ou = /** @class */ function() {
    function t(t, 
    /** Whether to allow shared access from multiple tabs. */
    n, i) {
        this.ownerId = t, this.allowTabSynchronization = n, this.leaseTimestampMs = i;
    }
    /**
     * Name of the IndexedDb object store.
     *
     * Note that the name 'owner' is chosen to ensure backwards compatibility with
     * older clients that only supported single locked access to the persistence
     * layer.
     */    return t.store = "owner", 
    /**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
    t.key = "owner", t;
}();

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */ var hu = /** @class */ function() {
    function t(
    /**
     * The normalized user ID to which this queue belongs.
     */
    t, 
    /**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
    n, 
    /**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     */
    i) {
        this.userId = t, this.lastAcknowledgedBatchId = n, this.lastStreamToken = i;
    }
    /** Name of the IndexedDb object store.  */    return t.store = "mutationQueues", 
    /** Keys are automatically assigned via the userId property. */
    t.keyPath = "userId", t;
}(), cu = /** @class */ function() {
    function t(
    /**
     * The normalized user ID to which this batch belongs.
     */
    t, 
    /**
     * An identifier for this batch, allocated using an auto-generated key.
     */
    n, 
    /**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
    i, 
    /**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
    e, 
    /**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via JsonProtoSerializer.toMutation().
     */
    r) {
        this.userId = t, this.batchId = n, this.localWriteTimeMs = i, this.baseMutations = e, 
        this.mutations = r;
    }
    /** Name of the IndexedDb object store.  */    return t.store = "mutations", 
    /** Keys are automatically assigned via the userId, batchId properties. */
    t.keyPath = "batchId", 
    /** The index name for lookup of mutations by user. */
    t.userMutationsIndex = "userMutationsIndex", 
    /** The user mutations index is keyed by [userId, batchId] pairs. */
    t.userMutationsKeyPath = [ "userId", "batchId" ], t;
}();

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */ var au = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, n) {
        return [ t, ue(n) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, n, i) {
        return [ t, ue(n), i ];
    }, t.store = "documentMutations", 
    /**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
    t.PLACEHOLDER = new t, t;
}();

var fu = function(t, n) {
    this.path = t, this.readTime = n;
}, lu = function(t, n) {
    this.path = t, this.version = n;
}, du = /** @class */ function() {
    // TODO: We are currently storing full document keys almost three times
    // (once as part of the primary key, once - partly - as `parentPath` and once
    // inside the encoded documents). During our next migration, we should
    // rewrite the primary key as parentPath + document ID which would allow us
    // to drop one value.
    function t(
    /**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
    t, 
    /**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
    n, 
    /**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
    i, 
    /**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
    e, 
    /**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
    r, 
    /**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
    u) {
        this.unknownDocument = t, this.noDocument = n, this.document = i, this.hasCommittedMutations = e, 
        this.readTime = r, this.parentPath = u;
    }
    return t.store = "remoteDocuments", 
    /**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
    t.readTimeIndex = "readTimeIndex", t.readTimeIndexPath = "readTime", 
    /**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
    t.collectionReadTimeIndex = "collectionReadTimeIndex", t.collectionReadTimeIndexPath = [ "parentPath", "readTime" ], 
    t;
}(), vu = /** @class */ function() {
    /**
     * @param byteSize Approximately the total size in bytes of all the documents in the document
     * cache.
     */
    function t(t) {
        this.byteSize = t;
    }
    return t.store = "remoteDocumentGlobal", t.key = "remoteDocumentGlobalKey", t;
}();

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ var wu = /** @class */ function() {
    function t(
    /**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
    t, 
    /**
     * The canonical string representing this query. This is not unique.
     */
    n, 
    /**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
    i, 
    /**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
    e, 
    /**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
    r, 
    /**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
    u, 
    /**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
    s) {
        this.targetId = t, this.canonicalId = n, this.readTime = i, this.resumeToken = e, 
        this.lastListenSequenceNumber = r, this.lastLimboFreeSnapshotVersion = u, this.query = s;
    }
    return t.store = "targets", 
    /** Keys are automatically assigned via the targetId property. */
    t.keyPath = "targetId", 
    /** The name of the queryTargets index. */
    t.queryTargetsIndexName = "queryTargetsIndex", 
    /**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
    t.queryTargetsKeyPath = [ "canonicalId", "targetId" ], t;
}(), mu = /** @class */ function() {
    function t(
    /**
     * The targetId identifying a target or 0 for a sentinel row.
     */
    t, 
    /**
     * The path to the document, as encoded in the key.
     */
    n, 
    /**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
    i) {
        this.targetId = t, this.path = n, this.sequenceNumber = i, bi(0 === t == (void 0 !== i), "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number");
    }
    /** Name of the IndexedDb object store.  */    return t.store = "targetDocuments", 
    /** Keys are automatically assigned via the targetId, path properties. */
    t.keyPath = [ "targetId", "path" ], 
    /** The index name for the reverse index. */
    t.documentTargetsIndex = "documentTargetsIndex", 
    /** We also need to create the reverse index for these properties. */
    t.documentTargetsKeyPath = [ "path", "targetId" ], t;
}(), gu = /** @class */ function() {
    function t(
    /**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
    t, 
    /**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
    n, 
    /**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
    i, 
    /**
     * The number of targets persisted.
     */
    e) {
        this.highestTargetId = t, this.highestListenSequenceNumber = n, this.lastRemoteSnapshotVersion = i, 
        this.targetCount = e;
    }
    /**
     * The key string used for the single object that exists in the
     * DbTargetGlobal store.
     */    return t.key = "targetGlobalKey", t.store = "targetGlobal", t;
}(), bu = /** @class */ function() {
    function t(
    /**
     * The collectionId (e.g. 'messages')
     */
    t, 
    /**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
    n) {
        this.collectionId = t, this.parent = n;
    }
    /** Name of the IndexedDb object store. */    return t.store = "collectionParents", 
    /** Keys are automatically assigned via the collectionId, parent properties. */
    t.keyPath = [ "collectionId", "parent" ], t;
}();

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */ function pu(t) {
    t.createObjectStore(mu.store, {
        keyPath: mu.keyPath
    }).createIndex(mu.documentTargetsIndex, mu.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(wu.store, {
        keyPath: wu.keyPath
    }).createIndex(wu.queryTargetsIndexName, wu.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(gu.store);
}

var yu = /** @class */ function() {
    function t(
    // Note: Previous schema versions included a field
    // "lastProcessedDocumentChangeId". Don't use anymore.
    /** The auto-generated client id assigned at client startup. */
    t, 
    /** The last time this state was updated. */
    n, 
    /** Whether the client's network connection is enabled. */
    i, 
    /** Whether this client is running in a foreground tab. */
    e) {
        this.clientId = t, this.updateTimeMs = n, this.networkEnabled = i, this.inForeground = e;
    }
    /** Name of the IndexedDb object store. */    return t.store = "clientMetadata", 
    /** Keys are automatically assigned via the clientId properties. */
    t.keyPath = "clientId", t;
}();

var _u = [ hu.store, cu.store, au.store, du.store, wu.store, ou.store, gu.store, mu.store ], Iu = tslib.__spreadArrays(_u, [ yu.store ]), Tu = tslib.__spreadArrays(Iu, [ vu.store ]), Eu = tslib.__spreadArrays(Tu, [ bu.store ]), Du = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.zw = new ae;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.Ic = function(t, n) {
        var i = this;
        if (bi(n.length % 2 == 1, "Expected a collection path."), !this.zw.has(n)) {
            var e = n.$(), r = n.J();
            t.ec((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                i.zw.add(n);
            }));
            var u = {
                collectionId: e,
                parent: ue(r)
            };
            return Ru(t).put(u);
        }
        return Oi.resolve();
    }, t.prototype.vc = function(t, n) {
        var i = [], e = IDBKeyRange.bound([ n, "" ], [ Ii(n), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return Ru(t).mw(e).next((function(t) {
            for (var e = 0, r = t; e < r.length; e++) {
                var u = r[e];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (u.collectionId !== n) break;
                i.push(he(u.parent));
            }
            return i;
        }));
    }, t;
}();

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function Ru(t) {
    return Pu.ow(t, bu.store);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Serializer for values stored in the LocalStore. */ var Su = /** @class */ function() {
    function t(t) {
        this.Kw = t;
    }
    /** Decodes a remote document from storage locally to a Document. */    return t.prototype.Mw = function(t) {
        if (t.document) return this.Kw.We(t.document, !!t.hasCommittedMutations);
        if (t.noDocument) {
            var n = bt.ft(t.noDocument.path), i = this.Hw(t.noDocument.readTime);
            return new sn(n, i, {
                hasCommittedMutations: !!t.hasCommittedMutations
            });
        }
        if (t.unknownDocument) {
            n = bt.ft(t.unknownDocument.path), i = this.Hw(t.unknownDocument.version);
            return new on(n, i);
        }
        return gi("Unexpected DbRemoteDocument");
    }, 
    /** Encodes a document for storage locally. */
    t.prototype.Ww = function(t, n) {
        var i = this.Bw(n), e = t.key.path.J().nt();
        if (t instanceof un) {
            var r = t.proto ? t.proto : this.Kw.Ge(t), u = t.hasCommittedMutations;
            return new du(
            /* unknownDocument= */ null, 
            /* noDocument= */ null, r, u, i, e);
        }
        if (t instanceof sn) {
            var s = t.key.path.nt(), o = this.Jw(t.version);
            u = t.hasCommittedMutations;
            return new du(
            /* unknownDocument= */ null, new fu(s, o), 
            /* document= */ null, u, i, e);
        }
        if (t instanceof on) {
            s = t.key.path.nt();
            var h = this.Jw(t.version);
            return new du(new lu(s, h), 
            /* noDocument= */ null, 
            /* document= */ null, 
            /* hasCommittedMutations= */ !0, i, e);
        }
        return gi("Unexpected MaybeDocument");
    }, t.prototype.Bw = function(t) {
        var n = t.G();
        return [ n.seconds, n.nanoseconds ];
    }, t.prototype.Qw = function(t) {
        var n = new lt(t[0], t[1]);
        return dt.L(n);
    }, t.prototype.Jw = function(t) {
        var n = t.G();
        return new su(n.seconds, n.nanoseconds);
    }, t.prototype.Hw = function(t) {
        var n = new lt(t.seconds, t.nanoseconds);
        return dt.L(n);
    }, 
    /** Encodes a batch of mutations into a DbMutationBatch for local storage. */
    t.prototype.Dw = function(t, n) {
        var i = this, e = n.baseMutations.map((function(t) {
            return i.Kw.tr(t);
        })), r = n.mutations.map((function(t) {
            return i.Kw.tr(t);
        }));
        return new cu(t, n.batchId, n.En.toMillis(), e, r);
    }, 
    /** Decodes a DbMutationBatch into a MutationBatch */
    t.prototype.Rw = function(t) {
        var n = this, i = (t.baseMutations || []).map((function(t) {
            return n.Kw.rr(t);
        })), e = t.mutations.map((function(t) {
            return n.Kw.rr(t);
        })), r = lt.fromMillis(t.localWriteTimeMs);
        return new Di(t.batchId, r, i, e);
    }, 
    /*
     * Encodes a set of document keys into an array of EncodedResourcePaths.
     */
    t.prototype.Yw = function(t) {
        var n = [];
        return t.forEach((function(t) {
            n.push(ue(t.path));
        })), n;
    }, 
    /** Decodes an array of EncodedResourcePaths into a set of document keys. */
    t.prototype.Xw = function(t) {
        for (var n = Bn(), i = 0, e = t; i < e.length; i++) {
            var r = e[i];
            n = n.add(new bt(he(r)));
        }
        return n;
    }, 
    /** Decodes a DbTarget into TargetData */
    t.prototype.Nw = function(t) {
        var n, i = this.Hw(t.readTime), e = void 0 !== t.lastLimboFreeSnapshotVersion ? this.Hw(t.lastLimboFreeSnapshotVersion) : dt.MIN;
        return n = void 0 !== t.query.documents ? this.Kw.lr(t.query) : this.Kw.gr(t.query), 
        new An(n, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, i, e, rt.fromBase64String(t.resumeToken));
    }, 
    /** Encodes TargetData into a DbTarget for storage locally. */
    t.prototype.Ow = function(t) {
        bi(0 /* Listen */ === t.ci, "Only queries with purpose 0 may be stored, got " + t.ci);
        var n, i = this.Jw(t.ai), e = this.Jw(t.lastLimboFreeSnapshotVersion);
        n = t.target.Nn() ? this.Kw.ar(t.target) : this.Kw.dr(t.target);
        // We can't store the resumeToken as a ByteString in IndexedDb, so we
        // convert it to a base64 string for storage.
                var r = t.resumeToken.toBase64();
        // lastListenSequenceNumber is always 0 until we do real GC.
                return new wu(t.targetId, t.target.canonicalId(), i, r, t.sequenceNumber, e, n);
    }, t;
}();

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Au = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.", Cu = /** @class */ function(t) {
    function i(n, i) {
        var e = t.call(this) || this;
        return e.Aw = n, e.Po = i, e;
    }
    return tslib.__extends(i, t), i;
}(ie), Pu = /** @class */ function() {
    function t(n, i, e, r, u, s, o, h) {
        if (this.allowTabSynchronization = n, this.persistenceKey = i, this.clientId = e, 
        this.fh = s, this.$w = h, this.Zc = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Zw = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.tm = null, 
        /** The client metadata refresh task. */
        this.nm = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.im = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.em = function(t) {
            return Promise.resolve();
        }, this.Ks = new Ou(this, u), this.rm = i + t.um, this.serializer = new Su(o), this.document = r.document, 
        this.$s = new Hr(this.Ks, this.serializer), this.sc = new Du, this.uc = new Zr(this.serializer, this.sc), 
        !r.window || !r.window.localStorage) throw new E(T.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        this.window = r.window, this.sm = this.window.localStorage;
    }
    return t.ow = function(t, n) {
        if (t instanceof Cu) return Vr.ow(t.Aw, n);
        throw gi("IndexedDbPersistence must use instances of IndexedDbTransaction");
    }, t.om = function(n) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var i;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (!t.ph()) throw new E(T.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                    return [ 4 /*yield*/ , (i = new t(n.allowTabSynchronization, n.persistenceKey, n.clientId, n.platform, n.hm, n.fh, n.serializer, n.$w)).start() ];

                  case 1:
                    return e.sent(), [ 2 /*return*/ , i ];
                }
            }));
        }));
    }, 
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @return {Promise<void>} Whether persistence was enabled.
     */
    t.prototype.start = function() {
        var t = this;
        return bi(!this.ss, "IndexedDbPersistence double-started!"), bi(null !== this.window, "Expected 'window' to be defined"), 
        Vr.ew(this.rm, ru, new uu(this.serializer)).then((function(n) {
            // NOTE: This is expected to fail sometimes (in the case of another tab already
            // having the persistence lock), so it's the first thing we should do.
            return t.cm = n, t.am();
        })).then((function() {
            return t.fm(), t.lm(), t.dm(), t.cm.runTransaction("readonly", [ gu.store ], (function(t) {
                return Xr(t);
            }));
        })).then((function(n) {
            t.$c = new Ci(n, t.$w);
        })).then((function() {
            t.Zc = !0;
        })).catch((function(n) {
            return t.cm && t.cm.close(), Promise.reject(n);
        }));
    }, t.prototype.na = function(t) {
        var n = this;
        return this.em = function(i) {
            return tslib.__awaiter(n, void 0, void 0, (function() {
                return tslib.__generator(this, (function(n) {
                    return this.ss ? [ 2 /*return*/ , t(i) ] : [ 2 /*return*/ ];
                }));
            }));
        }, t(this.isPrimary);
    }, t.prototype.ia = function(t) {
        var n = this;
        this.cm.hw((function(i) {
            return tslib.__awaiter(n, void 0, void 0, (function() {
                return tslib.__generator(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return null !== i.newVersion ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , t() ];

                      case 1:
                        n.sent(), n.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t.prototype.nh = function(t) {
        var n = this;
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.fh.ou((function() {
            return tslib.__awaiter(n, void 0, void 0, (function() {
                return tslib.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.ss ? [ 4 /*yield*/ , this.am() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.am = function() {
        var t = this;
        return this.cm.runTransaction("readwrite", Eu, (function(n) {
            return Nu(n).put(new yu(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.vm(n).next((function(n) {
                    n || (t.isPrimary = !1, t.fh.ou((function() {
                        return t.em(!1);
                    })));
                }));
            })).next((function() {
                return t.wm(n);
            })).next((function(i) {
                return t.isPrimary && !i ? t.mm(n).next((function() {
                    return !1;
                })) : !!i && t.gm(n).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(n) {
            if (!t.allowTabSynchronization) throw n;
            return vi("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", n), 
            /* isPrimary= */ !1;
        })).then((function(n) {
            t.isPrimary !== n && t.fh.ou((function() {
                return t.em(n);
            })), t.isPrimary = n;
        }));
    }, t.prototype.vm = function(t) {
        var n = this;
        return ku(t).get(ou.key).next((function(t) {
            return Oi.resolve(n.bm(t));
        }));
    }, t.prototype.pm = function(t) {
        return Nu(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.ym = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var n = this;
            return tslib.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return !this.isPrimary || this._m(this.im, 18e5) ? [ 3 /*break*/ , 2 ] : (this.im = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(i) {
                        var e = t.ow(i, yu.store);
                        return e.mw().next((function(t) {
                            var i = n.Im(t, 18e5), r = t.filter((function(t) {
                                return -1 === i.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                            return Oi.forEach(r, (function(t) {
                                return e.delete(t.clientId);
                            })).next((function() {
                                return r;
                            }));
                        }));
                    })).catch((function() {
                        // Ignore primary lease violations or any other type of error. The next
                        // primary will run `maybeGarbageCollectMultiClientState()` again.
                        // We don't use `ignoreIfPrimaryLeaseLoss()` since we don't want to depend
                        // on LocalStore.
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    i.sent().forEach((function(t) {
                        n.window.localStorage.removeItem(n.Tm(t.clientId));
                    })), i.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.dm = function() {
        var t = this;
        this.nm = this.fh.yu("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.am().then((function() {
                return t.ym();
            })).then((function() {
                return t.dm();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */
    t.prototype.bm = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype.wm = function(t) {
        var n = this;
        return ku(t).get(ou.key).next((function(i) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            if (null !== i && n._m(i.leaseTimestampMs, 5e3) && !n.Em(i.ownerId)) {
                if (n.bm(i) && n.networkEnabled) return !0;
                if (!n.bm(i)) {
                    if (!i.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new E(T.FAILED_PRECONDITION, Au);
                    return !1;
                }
            }
            return !(!n.networkEnabled || !n.inForeground) || Nu(t).mw().next((function(t) {
                return void 0 === n.Im(t, 5e3).find((function(t) {
                    if (n.clientId !== t.clientId) {
                        var i = !n.networkEnabled && t.networkEnabled, e = !n.inForeground && t.inForeground, r = n.networkEnabled === t.networkEnabled;
                        if (i || e && r) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return n.isPrimary !== t && vi("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, t.prototype.shutdown = function() {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var t = this;
            return tslib.__generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.Zc = !1, this.Dm(), this.nm && (this.nm.cancel(), this.nm = null), this.Rm(), 
                    this.Sm(), [ 4 /*yield*/ , this.cm.runTransaction("readwrite", [ ou.store, yu.store ], (function(n) {
                        return t.mm(n).next((function() {
                            return t.pm(n);
                        }));
                    })) ];

                  case 1:
                    return n.sent(), this.cm.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.Am(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.Im = function(t, n) {
        var i = this;
        return t.filter((function(t) {
            return i._m(t.updateTimeMs, n) && !i.Em(t.clientId);
        }));
    }, t.prototype.$o = function() {
        var t = this;
        return this.cm.runTransaction("readonly", [ yu.store ], (function(n) {
            return Nu(n).mw().next((function(n) {
                return t.Im(n, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, t.clearPersistence = function(n) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var i;
            return tslib.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t.ph() ? (i = n + t.um, [ 4 /*yield*/ , Vr.delete(i) ]) : [ 2 /*return*/ , Promise.resolve() ];

                  case 1:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, Object.defineProperty(t.prototype, "ss", {
        get: function() {
            return this.Zc;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Js = function(t) {
        return bi(this.ss, "Cannot initialize MutationQueue before persistence is started."), 
        Mr.Tw(t, this.serializer, this.sc, this.Ks);
    }, t.prototype.Zs = function() {
        return bi(this.ss, "Cannot initialize TargetCache before persistence is started."), 
        this.$s;
    }, t.prototype.Xs = function() {
        return bi(this.ss, "Cannot initialize RemoteDocumentCache before persistence is started."), 
        this.uc;
    }, t.prototype.no = function() {
        return bi(this.ss, "Cannot initialize IndexManager before persistence is started."), 
        this.sc;
    }, t.prototype.runTransaction = function(t, n, i) {
        var e = this;
        vi("IndexedDbPersistence", "Starting transaction:", t);
        var r, u = "readonly" === n ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.cm.runTransaction(u, Eu, (function(u) {
            return r = new Cu(u, e.$c.next()), "readwrite-primary" === n ? e.vm(u).next((function(t) {
                return !!t || e.wm(u);
            })).next((function(n) {
                if (!n) throw wi("Failed to obtain primary lease for action '" + t + "'."), e.isPrimary = !1, 
                e.fh.ou((function() {
                    return e.em(!1);
                })), new E(T.FAILED_PRECONDITION, ne);
                return i(r);
            })).next((function(t) {
                return e.gm(u).next((function() {
                    return t;
                }));
            })) : e.Cm(u).next((function() {
                return i(r);
            }));
        })).then((function(t) {
            return r.rc(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.Cm = function(t) {
        var n = this;
        return ku(t).get(ou.key).next((function(t) {
            if (null !== t && n._m(t.leaseTimestampMs, 5e3) && !n.Em(t.ownerId) && !n.bm(t) && !t.allowTabSynchronization) throw new E(T.FAILED_PRECONDITION, Au);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.gm = function(t) {
        var n = new ou(this.clientId, this.allowTabSynchronization, Date.now());
        return ku(t).put(ou.key, n);
    }, t.ph = function() {
        return Vr.ph();
    }, 
    /**
     * Generates a string used as a prefix when storing data in IndexedDB and
     * LocalStorage.
     */
    t.Pm = function(t) {
        // Use two different prefix formats:
        //   * firestore / persistenceKey / projectID . databaseID / ...
        //   * firestore / persistenceKey / projectID / ...
        // projectIDs are DNS-compatible names and cannot contain dots
        // so there's no danger of collisions.
        var n = t.Dn.projectId;
        return t.Dn.xr || (n += "." + t.Dn.database), "firestore/" + t.persistenceKey + "/" + n + "/";
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */
    t.prototype.mm = function(t) {
        var n = this, i = ku(t);
        return i.get(ou.key).next((function(t) {
            return n.bm(t) ? (vi("IndexedDbPersistence", "Releasing primary lease."), i.delete(ou.key)) : Oi.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
    t.prototype._m = function(t, n) {
        var i = Date.now();
        return !(t < i - n) && (!(t > i) || (wi("Detected an update time that is in the future: " + t + " > " + i), 
        !1));
    }, t.prototype.fm = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.tm = function() {
            t.fh.ou((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.am();
            }));
        }, this.document.addEventListener("visibilitychange", this.tm), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.Rm = function() {
        this.tm && (bi(null !== this.document && "function" == typeof this.document.addEventListener, "Expected 'document.addEventListener' to be a function"), 
        this.document.removeEventListener("visibilitychange", this.tm), this.tm = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.lm = function() {
        var t = this;
        "function" == typeof this.window.addEventListener && (this.Zw = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            t.Dm(), t.fh.ou((function() {
                // Attempt graceful shutdown (including releasing our primary lease),
                // but there's no guarantee it will complete.
                return t.shutdown();
            }));
        }, this.window.addEventListener("unload", this.Zw));
    }, t.prototype.Sm = function() {
        this.Zw && (bi("function" == typeof this.window.removeEventListener, "Expected 'window.removeEventListener' to be a function"), 
        this.window.removeEventListener("unload", this.Zw), this.Zw = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype.Em = function(t) {
        try {
            var n = null !== this.sm.getItem(this.Tm(t));
            return vi("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return wi("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype.Dm = function() {
        try {
            this.sm.setItem(this.Tm(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            wi("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */
    t.prototype.Am = function() {
        try {
            this.sm.removeItem(this.Tm(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, t.prototype.Tm = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, 
    /**
     * The name of the main (and currently only) IndexedDB database. this name is
     * appended to the prefix provided to the IndexedDbPersistence constructor.
     */
    t.um = "main", t;
}();

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function ku(t) {
    return t.store(ou.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function Nu(t) {
    return t.store(yu.store);
}

/** Provides LRU functionality for IndexedDB persistence. */ var Ou = /** @class */ function() {
    function t(t, n) {
        this.db = t, this.sa = null, this.ns = new Li(this, n);
    }
    return t.prototype.as = function(t) {
        var n = this.km(t);
        return this.db.Zs().Yc(t).next((function(t) {
            return n.next((function(n) {
                return t + n;
            }));
        }));
    }, t.prototype.km = function(t) {
        var n = 0;
        return this.ls(t, (function(t) {
            n++;
        })).next((function() {
            return n;
        }));
    }, t.prototype.oe = function(t, n) {
        return this.db.Zs().oe(t, n);
    }, t.prototype.ls = function(t, n) {
        return this.Nm(t, (function(t, i) {
            return n(i);
        }));
    }, t.prototype.zs = function(t) {
        this.sa = t;
    }, t.prototype._s = function(t, n) {
        return Fu(t, n);
    }, t.prototype.Ts = function(t, n) {
        return Fu(t, n);
    }, t.prototype.ds = function(t, n, i) {
        return this.db.Zs().ds(t, n, i);
    }, t.prototype.Pc = function(t, n) {
        return Fu(t, n);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.Om = function(t, n) {
        return this.sa.Cs(n) ? Oi.resolve(!0) : function(t, n) {
            var i = !1;
            return Kr(t)._w((function(e) {
                return Qr(t, e, n).next((function(t) {
                    return t && (i = !0), Oi.resolve(!t);
                }));
            })).next((function() {
                return i;
            }));
        }(t, n);
    }, t.prototype.vs = function(t, n) {
        var i = this, e = this.db.Xs().wo(), r = [], u = 0;
        return this.Nm(t, (function(s, o) {
            if (o <= n) {
                var h = i.Om(t, s).next((function(n) {
                    if (!n) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return u++, e.xs(t, s).next((function() {
                        return e.Us(s), $r(t).delete([ 0, ue(s.path) ]);
                    }));
                }));
                r.push(h);
            }
        })).next((function() {
            return Oi.Vu(r);
        })).next((function() {
            return e.apply(t);
        })).next((function() {
            return u;
        }));
    }, t.prototype.removeTarget = function(t, n) {
        var i = n.fi(t.Po);
        return this.db.Zs().No(t, i);
    }, t.prototype.Oo = function(t, n) {
        return Fu(t, n);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.Nm = function(t, n) {
        var i, e = $r(t), r = Ci.Xr;
        return e.yw({
            index: mu.documentTargetsIndex
        }, (function(t, e) {
            var u = t[0], s = (t[1], e.path), o = e.sequenceNumber;
            0 === u ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            r !== Ci.Xr && n(new bt(he(i)), r), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            r = o, i = s) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            r = Ci.Xr;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            r !== Ci.Xr && n(new bt(he(i)), r);
        }));
    }, t.prototype.ms = function(t) {
        return this.db.Xs().Vc(t);
    }, t;
}();

function Fu(t, n) {
    return $r(t).put(
    /**
 * @return A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, n) {
        return new mu(0, ue(t.path), n);
    }(n, t.Po));
}

/**
 * Provides all components needed for IndexedDb persistence.
 */ var Vu = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t, n, i, e, s, o) {
        return tslib.__awaiter(this, void 0, void 0, (function() {
            var r, h, c, a;
            return tslib.__generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    if (bi(o.aa, "IndexedDbPersistenceProvider can only provide durable persistence"), 
                    bi(!this.persistence, "configure() already called"), r = Pu.Pm(n), h = new ci(n.Dn, {
                        _e: !0
                    }), !Zi.ph(i)) throw new E(T.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                    return this.td = o.synchronizeTabs ? new Zi(t, i, r, e, s) : new te, c = this, [ 4 /*yield*/ , Pu.om({
                        allowTabSynchronization: o.synchronizeTabs,
                        persistenceKey: r,
                        clientId: e,
                        platform: i,
                        fh: t,
                        serializer: h,
                        hm: xi.Hu(o.cacheSizeBytes),
                        $w: this.td
                    }) ];

                  case 1:
                    return c.persistence = u.sent(), a = this.persistence.Ks.ns, this.Yd = new ji(a, t), 
                    [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.la = function() {
        return bi(!!this.persistence, "initialize() not called"), this.persistence;
    }, t.prototype.da = function() {
        return bi(!!this.td, "initialize() not called"), this.td;
    }, t.prototype.fa = function() {
        return bi(!!this.Yd, "initialize() not called"), this.Yd;
    }, t.prototype.clearPersistence = function(t) {
        var n = Pu.Pm(t);
        return Pu.clearPersistence(n);
    }, t;
}(), Uu = {
    Firestore: Rr,
    GeoPoint: ft,
    Timestamp: lt,
    Blob: at,
    Transaction: Sr,
    WriteBatch: Ar,
    DocumentReference: Cr,
    DocumentSnapshot: Pr,
    Query: Nr,
    QueryDocumentSnapshot: kr,
    QuerySnapshot: Or,
    CollectionReference: Fr,
    FieldPath: De,
    FieldValue: Oe,
    setLogLevel: ar.setLogLevel,
    CACHE_SIZE_UNLIMITED: hr
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
function xu(t, n) {
    var e;
    t.INTERNAL.registerComponent(new component.Component("firestore", (function(t) {
        var i = t.getProvider("app").getImmediate();
        return n(i, t.getProvider("auth-internal"));
    }), "PUBLIC" /* PUBLIC */).setServiceProps((bi((e = Uu) && "object" == typeof e, "shallowCopy() expects object parameter."), 
    tslib.__assign({}, e))));
}

var ju = /** @class */ function() {
    function t() {}
    return t.prototype.Xf = function(t) {
        // No-op.
    }, t.prototype.shutdown = function() {
        // No-op.
    }, t;
}(), Lu = /** @class */ function() {
    function t() {
        var t = this;
        this.Fm = function() {
            return t.Vm();
        }, this.Um = function() {
            return t.xm();
        }, this.jm = [], this.Lm();
    }
    return t.prototype.Xf = function(t) {
        this.jm.push(t);
    }, t.prototype.shutdown = function() {
        window.removeEventListener("online", this.Fm), window.removeEventListener("offline", this.Um);
    }, t.prototype.Lm = function() {
        window.addEventListener("online", this.Fm), window.addEventListener("offline", this.Um);
    }, t.prototype.Vm = function() {
        vi("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, n = this.jm; t < n.length; t++) {
            (0, n[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.xm = function() {
        vi("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, n = this.jm; t < n.length; t++) {
            (0, n[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.ph = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), qu = /** @class */ function() {
    function t(t) {
        this.qm = t.qm, this.Bm = t.Bm;
    }
    return t.prototype.Ma = function(t) {
        bi(!this.Mm, "Called onOpen on stream twice!"), this.Mm = t;
    }, t.prototype.xa = function(t) {
        bi(!this.Qm, "Called onClose on stream twice!"), this.Qm = t;
    }, t.prototype.onMessage = function(t) {
        bi(!this.Gm, "Called onMessage on stream twice!"), this.Gm = t;
    }, t.prototype.close = function() {
        this.Bm();
    }, t.prototype.send = function(t) {
        this.qm(t);
    }, t.prototype.Wm = function() {
        bi(void 0 !== this.Mm, "Cannot call onOpen because no callback was set"), this.Mm();
    }, t.prototype.zm = function(t) {
        bi(void 0 !== this.Qm, "Cannot call onClose because no callback was set"), this.Qm(t);
    }, t.prototype.Km = function(t) {
        bi(void 0 !== this.Gm, "Cannot call onMessage because no callback was set"), this.Gm(t);
    }, t;
}(), Bu = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, Mu = "gl-js/ fire/" + _, Qu = /** @class */ function() {
    function t(t) {
        this.Dn = t.Dn;
        var n = t.ssl ? "https" : "http";
        this.Hm = n + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    return t.prototype.Jm = function(t, n) {
        if (n) for (var i in n.o) n.o.hasOwnProperty(i) && (t[i] = n.o[i]);
        t["X-Goog-Api-Client"] = Mu;
    }, t.prototype.tf = function(t, n, e) {
        var r = this, u = this.Ym(t);
        return new Promise((function(s, o) {
            var h = new webchannelWrapper.XhrIo;
            h.listenOnce(webchannelWrapper.EventType.COMPLETE, (function() {
                try {
                    switch (h.getLastErrorCode()) {
                      case webchannelWrapper.ErrorCode.NO_ERROR:
                        var n = h.getResponseJson();
                        vi("Connection", "XHR received:", JSON.stringify(n)), s(n);
                        break;

                      case webchannelWrapper.ErrorCode.TIMEOUT:
                        vi("Connection", 'RPC "' + t + '" timed out'), o(new E(T.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case webchannelWrapper.ErrorCode.HTTP_ERROR:
                        var i = h.getStatus();
                        if (vi("Connection", 'RPC "' + t + '" failed with status:', i, "response text:", h.getResponseText()), 
                        i > 0) {
                            var e = h.getResponseJson().error;
                            if (e && e.status && e.message) {
                                var r = (u = e.status, c = u.toLowerCase().replace("_", "-"), Object.values(T).indexOf(c) >= 0 ? c : T.UNKNOWN);
                                o(new E(r, e.message));
                            } else o(new E(T.UNKNOWN, "Server responded with status " + h.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        vi("Connection", 'RPC "' + t + '" failed'), o(new E(T.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        gi('RPC "' + t + '" failed with unanticipated webchannel error ' + h.getLastErrorCode() + ": " + h.getLastError() + ", giving up.");
                    }
                } finally {
                    vi("Connection", 'RPC "' + t + '" completed.');
                }
                var u, c;
            }));
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            var c = tslib.__assign({}, n);
            delete c.database;
            var a = JSON.stringify(c);
            vi("Connection", "XHR sending: ", u + " " + a);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            var f = {
                "Content-Type": "text/plain"
            };
            r.Jm(f, e), h.send(u, "POST", a, f, 15);
        }));
    }, t.prototype.nf = function(t, n, i) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.tf(t, n, i);
    }, t.prototype.Qa = function(t, n) {
        var i = [ this.Hm, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], e = webchannelWrapper.createWebChannelTransport(), r = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.Dn.projectId + "/databases/" + this.Dn.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.Jm(r.initMessageHeaders, n), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        util.isMobileCordova() || util.isReactNative() || util.isElectron() || util.isIE() || util.isUWP() || util.isBrowserExtension() || (r.httpHeadersOverwriteParam = "$httpHeaders");
        var u = i.join("");
        vi("Connection", "Creating WebChannel: " + u + " " + r);
        var s = e.createWebChannel(u, r), o = !1, h = !1, w = new qu({
            qm: function(t) {
                h ? vi("Connection", "Not sending because WebChannel is closed:", t) : (o || (vi("Connection", "Opening WebChannel transport."), 
                s.open(), o = !0), vi("Connection", "WebChannel sending:", t), s.send(t));
            },
            Bm: function() {
                return s.close();
            }
        }), m = function(t, n) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            s.listen(t, (function(t) {
                try {
                    n(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                return m(webchannelWrapper.WebChannel.EventType.OPEN, (function() {
            h || vi("Connection", "WebChannel transport opened.");
        })), m(webchannelWrapper.WebChannel.EventType.CLOSE, (function() {
            h || (h = !0, vi("Connection", "WebChannel transport closed"), w.zm());
        })), m(webchannelWrapper.WebChannel.EventType.ERROR, (function(t) {
            h || (h = !0, vi("Connection", "WebChannel transport errored:", t), w.zm(new E(T.UNAVAILABLE, "The operation could not be completed")));
        })), m(webchannelWrapper.WebChannel.EventType.MESSAGE, (function(t) {
            var n;
            if (!h) {
                var i = t.data[0];
                bi(!!i, "Got a webchannel message without data.");
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var e = i, r = e.error || (null === (n = e[0]) || void 0 === n ? void 0 : n.error);
                if (r) {
                    vi("Connection", "WebChannel received error:", r);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var u = r.status, o = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var n = fn[t];
                        if (void 0 !== n) return kn(n);
                    }(u), c = r.message;
                    void 0 === o && (o = T.INTERNAL, c = "Unknown error status: " + u + " with message " + r.message), 
                    // Mark closed so no further events are propagated
                    h = !0, w.zm(new E(o, c)), s.close();
                } else vi("Connection", "WebChannel received:", i), w.Km(i);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            w.Wm();
        }), 0), w;
    }, 
    // visible for testing
    t.prototype.Ym = function(t) {
        var n = Bu[t];
        return bi(void 0 !== n, "Unknown REST mapping for: " + t), this.Hm + "/v1/projects/" + this.Dn.projectId + "/databases/" + this.Dn.database + "/documents:" + n;
    }, t;
}(), Gu = /** @class */ function() {
    function t() {
        this.N = "undefined" != typeof atob;
    }
    return Object.defineProperty(t.prototype, "document", {
        get: function() {
            return "undefined" != typeof document ? document : null;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "window", {
        get: function() {
            return "undefined" != typeof window ? window : null;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.$d = function(t) {
        return Promise.resolve(new Qu(t));
    }, t.prototype.Zd = function() {
        return Lu.ph() ? new Lu : new ju;
    }, t.prototype.tv = function(t) {
        return new ci(t, {
            _e: !0
        });
    }, t.prototype.Vr = function(t) {
        return JSON.stringify(t);
    }, t.prototype.atob = function(t) {
        return atob(t);
    }, t.prototype.btoa = function(t) {
        return btoa(t);
    }, t.prototype.randomBytes = function(t) {
        if (t <= 0) return new Uint8Array;
        var n = new Uint8Array(t);
        return crypto.getRandomValues(n), n;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function Wu(t) {
    xu(t, (function(t, n) {
        return new ar(t, n, new Vu);
    })), t.registerVersion("@firebase/firestore", "1.13.0");
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This code needs to run before Firestore is used. This can be achieved in
 * several ways:
 *   1) Through the JSCompiler compiling this code and then (automatically)
 *      executing it before exporting the Firestore symbols.
 *   2) Through importing this module first in a Firestore main module
 */
ai.Fr(new Gu), Wu(t);

exports.__PRIVATE_registerFirestore = Wu;
//# sourceMappingURL=index.cjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
  \*********************************************************/
/*! exports provided: LogLevel, Logger, setLogLevel, setUserLogHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function() { return setUserLogHandler; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError('Invalid value assigned to `logLevel`');
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    var newLevel = typeof level === 'string' ? levelStringToEnum[level] : level;
    instances.forEach(function (inst) {
        inst.logLevel = newLevel;
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.cjs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isUWP = isUWP;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
//# sourceMappingURL=index.cjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default, ErrorCode, EventType, WebChannel, XhrIo, createWebChannelTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return tmp_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return tmp_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebChannel", function() { return tmp_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrIo", function() { return tmp_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function() { return tmp_1; });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g,goog=goog||{},k=commonjsGlobal;function m(a){return "string"==typeof a}function aa(a){return "number"==typeof a}function n(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function ba(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return "array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return "object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return "array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return "function"}else return "null";
else if("function"==b&&"undefined"==typeof a.call)return "object";return b}function q(a){return "array"==p(a)}function ca(a){var b=p(a);return "array"==b||"object"==b&&"number"==typeof a.length}function r(a){var b=typeof a;return "object"==b&&null!=a||"function"==b}var t="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=ea:u=fa;return u.apply(null,arguments)}
function v(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var w=Date.now||function(){return +new Date};function x(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.yb=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)};}function y(){this.j=this.j;this.i=this.i;}var ha=0;y.prototype.j=!1;y.prototype.la=function(){if(!this.j&&(this.j=!0,this.G(),0!=ha)){var a=this[t]||(this[t]=++da);}};y.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()();};var ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},la=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);};
function ma(a){a:{var b=na;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:m(a)?a.charAt(b):a[b]}function oa(a){return Array.prototype.concat.apply([],arguments)}function pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return []}function qa(a){return /^[\s\xa0]*$/.test(a)}var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function z(a,b){return -1!=a.indexOf(b)}function sa(a,b){return a<b?-1:a>b?1:0}var A;a:{var ta=k.navigator;if(ta){var ua=ta.userAgent;if(ua){A=ua;break a}}A="";}function va(a,b,c){for(var d in a)b.call(c,a[d],d,a);}function wa(a){var b={},c;for(c in a)b[c]=a[c];return b}var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}}function za(a){za[" "](a);return a}za[" "]=ba;function Aa(a,b){var c=Ba;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var Ca=z(A,"Opera"),B=z(A,"Trident")||z(A,"MSIE"),Da=z(A,"Edge"),Ea=Da||B,Fa=z(A,"Gecko")&&!(z(A.toLowerCase(),"webkit")&&!z(A,"Edge"))&&!(z(A,"Trident")||z(A,"MSIE"))&&!z(A,"Edge"),Ga=z(A.toLowerCase(),"webkit")&&!z(A,"Edge");function Ha(){var a=k.document;return a?a.documentMode:void 0}var Ia;
a:{var Ja="",Ka=function(){var a=A;if(Fa)return /rv:([^\);]+)(\)|;)/.exec(a);if(Da)return /Edge\/([\d\.]+)/.exec(a);if(B)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ga)return /WebKit\/(\S+)/.exec(a);if(Ca)return /(?:Version)[ \/]?(\S+)/.exec(a)}();Ka&&(Ja=Ka?Ka[1]:"");if(B){var La=Ha();if(null!=La&&La>parseFloat(Ja)){Ia=String(La);break a}}Ia=Ja;}var Ba={};
function Ma(a){return Aa(a,function(){for(var b=0,c=ra(String(Ia)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=sa(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||sa(0==h[2].length,0==l[2].length)||sa(h[2],l[2]);h=h[3];l=l[3];}while(0==b)}return 0<=b})}var Na;var Oa=k.document;
Na=Oa&&B?Ha()||("CSS1Compat"==Oa.compatMode?parseInt(Ia,10):5):void 0;var Pa=!B||9<=Number(Na),Qa=B&&!Ma("9"),Ra=function(){if(!k.addEventListener||!Object.defineProperty)return !1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});try{k.addEventListener("test",ba,b),k.removeEventListener("test",ba,b);}catch(c){}return a}();function C(a,b){this.type=a;this.a=this.target=b;this.Ia=!0;}C.prototype.b=function(){this.Ia=!1;};function D(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(Fa){a:{try{za(b.nodeName);var e=!0;break a}catch(f){}e=!1;}e||(b=null);}}else "mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=m(a.pointerType)?a.pointerType:Sa[a.pointerType]||"";this.c=a;a.defaultPrevented&&this.b();}}x(D,C);var Sa={2:"touch",3:"pen",4:"mouse"};D.prototype.b=function(){D.N.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};var F="closure_listenable_"+(1E6*Math.random()|0),Ta=0;function Ua(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.da=e;this.key=++Ta;this.X=this.Z=!1;}function Va(a){a.X=!0;a.listener=null;a.proxy=null;a.src=null;a.da=null;}function Wa(a){this.src=a;this.a={};this.b=0;}Wa.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=Xa(a,b,d,e);-1<h?(b=a[h],c||(b.Z=!1)):(b=new Ua(b,this.src,f,!!d,e),b.Z=c,a.push(b));return b};function Ya(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ja(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Va(b),0==a.a[c].length&&(delete a.a[c],a.b--));}}
function Xa(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.da==d)return e}return -1}var Za="closure_lm_"+(1E6*Math.random()|0),$a={};function bb(a,b,c,d,e){if(d&&d.once)return cb(a,b,c,d,e);if(q(b)){for(var f=0;f<b.length;f++)bb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.za(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!1,d,e)}
function eb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=r(e)?!!e.capture:!!e;if(h&&!Pa)return null;var l=fb(a);l||(a[Za]=l=new Wa(a));c=l.add(b,c,d,h,f);if(c.proxy)return c;d=gb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ra||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(hb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function gb(){var a=ib,b=Pa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function cb(a,b,c,d,e){if(q(b)){for(var f=0;f<b.length;f++)cb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.Aa(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!0,d,e)}
function jb(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)jb(a,b[f],c,d,e);else (d=r(d)?!!d.capture:!!d,c=db(c),a&&a[F])?(a=a.c,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Xa(f,c,d,e),-1<c&&(Va(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=fb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Xa(b,c,d,e)),(c=-1<a?b[a]:null)&&kb(c));}
function kb(a){if(!aa(a)&&a&&!a.X){var b=a.src;if(b&&b[F])Ya(b.c,a);else {var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(hb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);(c=fb(b))?(Ya(c,a),0==c.b&&(c.src=null,b[Za]=null)):Va(a);}}}function hb(a){return a in $a?$a[a]:$a[a]="on"+a}function lb(a,b){var c=a.listener,d=a.da||a.src;a.Z&&kb(a);return c.call(d,b)}
function ib(a,b){return a.X?!0:Pa?lb(a,new D(b,this)):(b=new D(b||n("window.event"),this),lb(a,b))}function fb(a){a=a[Za];return a instanceof Wa?a:null}var mb="__closure_events_fn_"+(1E9*Math.random()>>>0);function db(a){if("function"==p(a))return a;a[mb]||(a[mb]=function(b){return a.handleEvent(b)});return a[mb]}function G(){y.call(this);this.c=new Wa(this);this.J=this;this.B=null;}x(G,y);G.prototype[F]=!0;g=G.prototype;g.addEventListener=function(a,b,c,d){bb(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){jb(this,a,b,c,d);};
g.dispatchEvent=function(a){var b,c=this.B;if(c)for(b=[];c;c=c.B)b.push(c);c=this.J;var d=a.type||a;if(m(a))a=new C(a,c);else if(a instanceof C)a.target=a.target||c;else {var e=a;a=new C(d,c);ya(a,e);}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.a=b[f];e=nb(h,d,!0,a)&&e;}h=a.a=c;e=nb(h,d,!0,a)&&e;e=nb(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.a=b[f],e=nb(h,d,!1,a)&&e;return e};
g.G=function(){G.N.G.call(this);if(this.c){var a=this.c,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)Va(d[e]);delete a.a[c];a.b--;}}this.B=null;};g.za=function(a,b,c,d){return this.c.add(String(a),b,!1,c,d)};g.Aa=function(a,b,c,d){return this.c.add(String(a),b,!0,c,d)};
function nb(a,b,c,d){b=a.c.a[String(b)];if(!b)return !0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.X&&h.capture==c){var l=h.listener,E=h.da||h.src;h.Z&&Ya(a.c,h);e=!1!==l.call(E,d)&&e;}}return e&&0!=d.Ia}var ob=k.JSON.stringify;function pb(a,b){this.c=a;this.f=b;this.b=0;this.a=null;}pb.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null;}else a=this.c();return a};function qb(){this.b=this.a=null;}var sb=new pb(function(){return new rb},function(a){a.reset();});qb.prototype.add=function(a,b){var c=sb.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c;};function tb(){var a=ub,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function rb(){this.next=this.b=this.a=null;}rb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null;};rb.prototype.reset=function(){this.next=this.b=this.a=null;};function vb(a){k.setTimeout(function(){throw a;},0);}function wb(a,b){xb||yb();zb||(xb(),zb=!0);ub.add(a,b);}var xb;function yb(){var a=k.Promise.resolve(void 0);xb=function(){a.then(Ab);};}var zb=!1,ub=new qb;function Ab(){for(var a;a=tb();){try{a.a.call(a.b);}catch(c){vb(c);}var b=sb;b.f(a);100>b.b&&(b.b++,a.next=b.a,b.a=a);}zb=!1;}function Cb(a,b){G.call(this);this.b=a||1;this.a=b||k;this.f=u(this.gb,this);this.g=w();}x(Cb,G);g=Cb.prototype;g.ba=!1;g.L=null;g.gb=function(){if(this.ba){var a=w()-this.g;0<a&&a<.8*this.b?this.L=this.a.setTimeout(this.f,this.b-a):(this.L&&(this.a.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.ba&&(Db(this),this.start()));}};g.start=function(){this.ba=!0;this.L||(this.L=this.a.setTimeout(this.f,this.b),this.g=w());};function Db(a){a.ba=!1;a.L&&(a.a.clearTimeout(a.L),a.L=null);}
g.G=function(){Cb.N.G.call(this);Db(this);delete this.a;};function Eb(a,b,c){if("function"==p(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Fb(a,b,c){y.call(this);this.f=null!=c?u(a,c):a;this.c=b;this.b=u(this.$a,this);this.a=[];}x(Fb,y);g=Fb.prototype;g.ea=!1;g.U=null;g.Ta=function(a){this.a=arguments;this.U?this.ea=!0:Gb(this);};g.G=function(){Fb.N.G.call(this);this.U&&(k.clearTimeout(this.U),this.U=null,this.ea=!1,this.a=[]);};g.$a=function(){this.U=null;this.ea&&(this.ea=!1,Gb(this));};function Gb(a){a.U=Eb(a.b,a.c);a.f.apply(null,a.a);}function H(a){y.call(this);this.b=a;this.a={};}x(H,y);var Hb=[];function Ib(a,b,c,d){q(c)||(c&&(Hb[0]=c.toString()),c=Hb);for(var e=0;e<c.length;e++){var f=bb(b,c[e],d||a.handleEvent,!1,a.b||a);if(!f)break;a.a[f.key]=f;}}function Jb(a){va(a.a,function(b,c){this.a.hasOwnProperty(c)&&kb(b);},a);a.a={};}H.prototype.G=function(){H.N.G.call(this);Jb(this);};H.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Kb(){}var I=new G;function Lb(a){C.call(this,"serverreachability",a);}x(Lb,C);function J(a){I.dispatchEvent(new Lb(I,a));}function Mb(a){C.call(this,"statevent",a);}x(Mb,C);function K(a){I.dispatchEvent(new Mb(I,a));}function Nb(a){C.call(this,"timingevent",a);}x(Nb,C);function Ob(a,b){if("function"!=p(a))throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){a();},b)}var Pb={NO_ERROR:0,hb:1,ob:2,nb:3,kb:4,mb:5,pb:6,La:7,TIMEOUT:8,sb:9};var Qb={jb:"complete",wb:"success",Ma:"error",La:"abort",ub:"ready",vb:"readystatechange",TIMEOUT:"timeout",qb:"incrementaldata",tb:"progress",lb:"downloadprogress",xb:"uploadprogress"};function Rb(){}Rb.prototype.a=null;function Sb(a){var b;(b=a.a)||(b=a.a={});return b}function Tb(){}var L={OPEN:"a",ib:"b",Ma:"c",rb:"d"};function Ub(){C.call(this,"d");}x(Ub,C);function Vb(){C.call(this,"c");}x(Vb,C);var Wb;function Xb(){}x(Xb,Rb);Wb=new Xb;function M(a,b,c){this.g=a;this.W=b;this.V=c||1;this.I=new H(this);this.O=Yb;a=Ea?125:void 0;this.P=new Cb(a);this.h=null;this.b=!1;this.l=this.D=this.f=this.F=this.v=this.R=this.i=null;this.j=[];this.a=null;this.A=0;this.c=this.w=null;this.o=-1;this.m=!1;this.J=0;this.B=null;this.s=this.S=this.H=!1;}var Yb=45E3,Zb={},$b={};g=M.prototype;g.setTimeout=function(a){this.O=a;};function ac(a,b,c){a.F=1;a.f=bc(N(b));a.l=c;a.H=!0;cc(a,null);}function dc(a,b,c,d){a.F=1;a.f=bc(N(b));a.l=null;a.H=c;cc(a,d);}
function cc(a,b){a.v=w();ec(a);a.D=N(a.f);fc(a.D,"t",a.V);a.A=0;a.a=a.g.$(a.g.Y()?b:null);0<a.J&&(a.B=new Fb(u(a.Ja,a,a.a),a.J));Ib(a.I,a.a,"readystatechange",a.cb);b=a.h?wa(a.h):{};a.l?(a.w||(a.w="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.a.ca(a.D,a.w,a.l,b)):(a.w="GET",a.a.ca(a.D,a.w,null,b));J(1);}g.cb=function(a){a=a.target;var b=this.B;b&&3==O(a)?b.Ta():this.Ja(a);};
g.Ja=function(a){try{if(a==this.a)a:{var b=O(this.a),c=this.a.ya(),d=this.a.T();if(!(3>b||3==b&&!Ea&&!this.a.aa())){this.m||4!=b||7==c||(8==c||0>=d?J(3):J(2));gc(this);var e=this.a.T();this.o=e;var f=this.a.aa();if(this.b=200==e){if(this.S&&!this.s){b:{if(this.a){var h=hc(this.a,"X-HTTP-Initial-Response");if(h&&!qa(h)){var l=h;break b}}l=null;}if(l)this.s=!0,ic(this,l);else {this.b=!1;this.c=3;K(12);P(this);jc(this);break a}}this.H?(kc(this,b,f),Ea&&this.b&&3==b&&(Ib(this.I,this.P,"tick",this.bb),this.P.start())):
ic(this,f);4==b&&P(this);this.b&&!this.m&&(4==b?this.g.na(this):(this.b=!1,ec(this)));}else 400==e&&0<f.indexOf("Unknown SID")?(this.c=3,K(12)):(this.c=0,K(13)),P(this),jc(this);}}}catch(E){}finally{}};function kc(a,b,c){for(var d=!0;!a.m&&a.A<c.length;){var e=lc(a,c);if(e==$b){4==b&&(a.c=4,K(14),d=!1);break}else if(e==Zb){a.c=4;K(15);d=!1;break}else ic(a,e);}4==b&&0==c.length&&(a.c=1,K(16),d=!1);a.b=a.b&&d;d||(P(a),jc(a));}
g.bb=function(){if(this.a){var a=O(this.a),b=this.a.aa();this.A<b.length&&(gc(this),kc(this,a,b),this.b&&4!=a&&ec(this));}};function lc(a,b){var c=a.A,d=b.indexOf("\n",c);if(-1==d)return $b;c=Number(b.substring(c,d));if(isNaN(c))return Zb;d+=1;if(d+c>b.length)return $b;b=b.substr(d,c);a.A=d+c;return b}g.cancel=function(){this.m=!0;P(this);};function ec(a){a.R=w()+a.O;mc(a,a.O);}function mc(a,b){if(null!=a.i)throw Error("WatchDog timer not null");a.i=Ob(u(a.ab,a),b);}
function gc(a){a.i&&(k.clearTimeout(a.i),a.i=null);}g.ab=function(){this.i=null;var a=w();0<=a-this.R?(2!=this.F&&(J(3),K(17)),P(this),this.c=2,jc(this)):mc(this,this.R-a);};function jc(a){a.g.Ca()||a.m||a.g.na(a);}function P(a){gc(a);var b=a.B;b&&"function"==typeof b.la&&b.la();a.B=null;Db(a.P);Jb(a.I);a.a&&(b=a.a,a.a=null,b.abort(),b.la());}function ic(a,b){try{a.g.Fa(a,b),J(4);}catch(c){}}function nc(a){if(a.C&&"function"==typeof a.C)return a.C();if(m(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
function oc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||m(a))la(a,b,void 0);else {if(a.K&&"function"==typeof a.K)var c=a.K();else if(a.C&&"function"==typeof a.C)c=void 0;else if(ca(a)||m(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e);}else for(e in c=[],d=0,a)c[d++]=e;d=nc(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);}}function Q(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else if(a)if(a instanceof Q)for(c=a.K(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d]);}g=Q.prototype;g.C=function(){pc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.K=function(){pc(this);return this.a.concat()};
function qc(a){a.b={};a.a.length=0;a.c=0;}function rc(a,b){R(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&pc(a));}function pc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];R(a.b,d)&&(a.a[c++]=d);b++;}a.a.length=c;}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],R(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c;}}g.get=function(a,b){return R(this.b,a)?this.b[a]:b};g.set=function(a,b){R(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b;};
g.forEach=function(a,b){for(var c=this.K(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};function R(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var sc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1);}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"");}}}function S(a,b){this.b=this.j=this.f="";this.i=null;this.g=this.a="";this.h=!1;var c;a instanceof S?(this.h=void 0!==b?b:a.h,uc(this,a.f),this.j=a.j,vc(this,a.b),wc(this,a.i),this.a=a.a,xc(this,yc(a.c)),this.g=a.g):a&&(c=String(a).match(sc))?(this.h=!!b,uc(this,c[1]||"",!0),this.j=zc(c[2]||""),vc(this,c[3]||"",!0),wc(this,c[4]),this.a=zc(c[5]||"",!0),xc(this,c[6]||"",!0),this.g=zc(c[7]||"")):(this.h=!!b,this.c=new Ac(null,this.h));}
S.prototype.toString=function(){var a=[],b=this.f;b&&a.push(Bc(b,Cc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.j)&&a.push(Bc(b,Cc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.a)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Bc(c,"/"==c.charAt(0)?Dc:Ec,!0));(c=this.c.toString())&&a.push("?",c);(c=this.g)&&a.push("#",Bc(c,Fc));return a.join("")};
S.prototype.resolve=function(a){var b=N(this),c=!!a.f;c?uc(b,a.f):c=!!a.j;c?b.j=a.j:c=!!a.b;c?vc(b,a.b):c=null!=a.i;var d=a.a;if(c)wc(b,a.i);else if(c=!!a.a){if("/"!=d.charAt(0))if(this.b&&!this.a)d="/"+d;else {var e=b.a.lastIndexOf("/");-1!=e&&(d=b.a.substr(0,e+1)+d);}e=d;if(".."==e||"."==e)d="";else if(z(e,"./")||z(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],h=0;h<e.length;){var l=e[h++];"."==l?d&&h==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&
h==e.length&&f.push("")):(f.push(l),d=!0);}d=f.join("/");}else d=e;}c?b.a=d:c=""!==a.c.toString();c?xc(b,yc(a.c)):c=!!a.g;c&&(b.g=a.g);return b};function N(a){return new S(a)}function uc(a,b,c){a.f=c?zc(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""));}function vc(a,b,c){a.b=c?zc(b,!0):b;}function wc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b;}else a.i=null;}function xc(a,b,c){b instanceof Ac?(a.c=b,Gc(a.c,a.h)):(c||(b=Bc(b,Hc)),a.c=new Ac(b,a.h));}
function T(a,b,c){a.c.set(b,c);}function fc(a,b,c){q(c)||(c=[String(c)]);Ic(a.c,b,c);}function bc(a){T(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}function Jc(a){return a instanceof S?N(a):new S(a,void 0)}function Kc(a,b,c,d){var e=new S(null,void 0);a&&uc(e,a);b&&vc(e,b);c&&wc(e,c);d&&(e.a=d);return e}function zc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Bc(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Lc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lc(a){a=a.charCodeAt(0);return "%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cc=/[#\/\?@]/g,Ec=/[#\?:]/g,Dc=/[#\?]/g,Hc=/[#\?@]/g,Fc=/#/g;function Ac(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b;}function U(a){a.a||(a.a=new Q,a.b=0,a.c&&tc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));}g=Ac.prototype;
g.add=function(a,b){U(this);this.c=null;a=V(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function Mc(a,b){U(a);b=V(a,b);R(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,rc(a.a,b));}function Nc(a,b){U(a);b=V(a,b);return R(a.a.b,b)}g.forEach=function(a,b){U(this);this.a.forEach(function(c,d){la(c,function(e){a.call(b,e,d,this);},this);},this);};
g.K=function(){U(this);for(var a=this.a.C(),b=this.a.K(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.C=function(a){U(this);var b=[];if(m(a))Nc(this,a)&&(b=oa(b,this.a.get(V(this,a))));else {a=this.a.C();for(var c=0;c<a.length;c++)b=oa(b,a[c]);}return b};g.set=function(a,b){U(this);this.c=null;a=V(this,a);Nc(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
g.get=function(a,b){if(!a)return b;a=this.C(a);return 0<a.length?String(a[0]):b};function Ic(a,b,c){Mc(a,b);0<c.length&&(a.c=null,a.a.set(V(a,b),pa(c)),a.b+=c.length);}g.toString=function(){if(this.c)return this.c;if(!this.a)return "";for(var a=[],b=this.a.K(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.C(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h);}}return this.c=a.join("&")};
function yc(a){var b=new Ac;b.c=a.c;a.a&&(b.a=new Q(a.a),b.b=a.b);return b}function V(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function Gc(a,b){b&&!a.f&&(U(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Mc(this,d),Ic(this,e,c));},a));a.f=b;}function Qc(){}function Rc(){}x(Rc,Qc);function Sc(a){this.a=a;this.b=this.h=null;this.g=!1;this.i=null;this.c=-1;this.l=this.f=null;}g=Sc.prototype;g.M=null;function Uc(a){var b=a.a.F.a;if(null!=b)K(4),b?(K(10),Vc(a.a,a,!1)):(K(11),Vc(a.a,a,!0));else {a.b=new M(a,void 0,void 0);a.b.h=a.h;b=a.a;b=Wc(b,b.Y()?a.f:null,a.i);K(4);fc(b,"TYPE","xmlhttp");var c=a.a.j,d=a.a.I;c&&d&&T(b,c,d);dc(a.b,b,!1,a.f);}}g.$=function(a){return this.a.$(a)};g.abort=function(){this.b&&(this.b.cancel(),this.b=null);this.c=-1;};g.Ca=function(){return !1};
g.Fa=function(a,b){this.c=a.o;if(0==this.M){if(!this.a.o&&(a=a.a)){var c=hc(a,"X-Client-Wire-Protocol");this.l=c?c:null;this.a.j&&(a=hc(a,"X-HTTP-Session-Id"))&&(this.a.I=a);}if(b){try{var d=this.a.ja.a.parse(b);}catch(e){b=this.a;b.m=this.c;W(b,2);return}this.f=d[0];}else b=this.a,b.m=this.c,W(b,2);}else if(1==this.M)if(this.g)K(6);else if("11111"==b){if(K(5),this.g=!0,!B||10<=Number(Na))this.c=200,this.b.cancel(),K(11),Vc(this.a,this,!0);}else K(7),this.g=!1;};
g.na=function(){this.c=this.b.o;if(this.b.b)0==this.M?(this.M=1,Uc(this)):1==this.M&&(this.g?(K(11),Vc(this.a,this,!0)):(K(10),Vc(this.a,this,!1)));else {0==this.M?K(8):1==this.M&&K(9);var a=this.a;a.m=this.c;W(a,2);}};g.Y=function(){return this.a.Y()};g.ma=function(){return this.a.ma()};function Xc(){this.a=this.b=null;}function Yc(){this.a=new Q;}function Zc(a){var b=typeof a;return "object"==b&&a||"function"==b?"o"+(a[t]||(a[t]=++da)):b.charAt(0)+a}Yc.prototype.add=function(a){this.a.set(Zc(a),a);};Yc.prototype.C=function(){return this.a.C()};function $c(a,b){this.b=a;this.a=b;}function ad(a){this.g=a||bd;k.PerformanceNavigationTiming?(a=k.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(k.ka&&k.ka.Da&&k.ka.Da()&&k.ka.Da().zb);this.f=a?this.g:1;this.a=null;1<this.f&&(this.a=new Yc);this.b=null;this.c=[];}var bd=10;function cd(a,b){!a.a&&(z(b,"spdy")||z(b,"quic")||z(b,"h2"))&&(a.f=a.g,a.a=new Yc,a.b&&(dd(a,a.b),a.b=null));}function ed(a){return a.b?!0:a.a?a.a.a.c>=a.f:!1}
function fd(a){return a.b?1:a.a?a.a.a.c:0}function gd(a,b){a.b?a=a.b==b:a.a?(b=Zc(b),a=R(a.a.a.b,b)):a=!1;return a}function dd(a,b){a.a?a.a.add(b):a.b=b;}function hd(a,b){if(a.b&&a.b==b)a.b=null;else {var c;if(c=a.a)c=Zc(b),c=R(a.a.a.b,c);c&&rc(a.a.a,Zc(b));}}ad.prototype.cancel=function(){this.c=id(this);this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(la(this.a.C(),function(a){a.cancel();}),qc(this.a.a));};
function id(a){if(null!=a.b)return a.c.concat(a.b.j);if(null!=a.a&&0!=a.a.a.c){var b=a.c;la(a.a.C(),function(c){b=b.concat(c.j);});return b}return pa(a.c)}function jd(){}jd.prototype.stringify=function(a){return k.JSON.stringify(a,void 0)};jd.prototype.parse=function(a){return k.JSON.parse(a,void 0)};function kd(){this.a=new jd;}function ld(a,b,c){var d=c||"";try{oc(a,function(e,f){var h=e;r(e)&&(h=ob(e));b.push(d+f+"="+encodeURIComponent(h));});}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;}}function md(a,b){var c=new Kb;if(k.Image){var d=new Image;d.onload=v(nd,c,d,"TestLoadImage: loaded",!0,b);d.onerror=v(nd,c,d,"TestLoadImage: error",!1,b);d.onabort=v(nd,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=v(nd,c,d,"TestLoadImage: timeout",!1,b);k.setTimeout(function(){if(d.ontimeout)d.ontimeout();},1E4);d.src=a;}else b(!1);}function nd(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d);}catch(f){}}var od=k.JSON.parse;function X(a){G.call(this);this.headers=new Q;this.H=a||null;this.b=!1;this.s=this.a=null;this.A="";this.h=0;this.f="";this.g=this.w=this.l=this.v=!1;this.o=0;this.m=null;this.I=pd;this.D=this.F=!1;}x(X,G);var pd="",qd=/^https?$/i,rd=["POST","PUT"];g=X.prototype;
g.ca=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.A+"; newUri="+a);b=b?b.toUpperCase():"GET";this.A=a;this.f="";this.h=0;this.v=!1;this.b=!0;this.a=new XMLHttpRequest;this.s=this.H?Sb(this.H):Sb(Wb);this.a.onreadystatechange=u(this.Ea,this);try{this.w=!0,this.a.open(b,String(a),!0),this.w=!1;}catch(f){sd(this,f);return}a=c||"";var e=new Q(this.headers);d&&oc(d,function(f,h){e.set(h,f);});d=ma(e.K());c=k.FormData&&a instanceof k.FormData;!(0<=
ja(rd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.a.setRequestHeader(h,f);},this);this.I&&(this.a.responseType=this.I);"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{td(this),0<this.o&&((this.D=ud(this.a))?(this.a.timeout=this.o,this.a.ontimeout=u(this.Ba,this)):this.m=Eb(this.Ba,this.o,this)),this.l=!0,this.a.send(a),this.l=!1;}catch(f){sd(this,f);}};
function ud(a){return B&&Ma(9)&&aa(a.timeout)&&void 0!==a.ontimeout}function na(a){return "content-type"==a.toLowerCase()}g.Ba=function(){"undefined"!=typeof goog&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8));};function sd(a,b){a.b=!1;a.a&&(a.g=!0,a.a.abort(),a.g=!1);a.f=b;a.h=5;vd(a);wd(a);}function vd(a){a.v||(a.v=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"));}
g.abort=function(a){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),wd(this));};g.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),wd(this,!0));X.N.G.call(this);};g.Ea=function(){this.j||(this.w||this.l||this.g?xd(this):this.Za());};g.Za=function(){xd(this);};
function xd(a){if(a.b&&"undefined"!=typeof goog&&(!a.s[1]||4!=O(a)||2!=a.T()))if(a.l&&4==O(a))Eb(a.Ea,0,a);else if(a.dispatchEvent("readystatechange"),4==O(a)){a.b=!1;try{var b=a.T();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1;}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.A).match(sc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;f=h.substr(0,h.length-1);}e=!qd.test(f?f.toLowerCase():"");}d=e;}if(d)a.dispatchEvent("complete"),
a.dispatchEvent("success");else {a.h=6;try{var l=2<O(a)?a.a.statusText:"";}catch(E){l="";}a.f=l+" ["+a.T()+"]";vd(a);}}finally{wd(a);}}}function wd(a,b){if(a.a){td(a);var c=a.a,d=a.s[0]?ba:null;a.a=null;a.s=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d;}catch(e){}}}function td(a){a.a&&a.D&&(a.a.ontimeout=null);a.m&&(k.clearTimeout(a.m),a.m=null);}function O(a){return a.a?a.a.readyState:0}g.T=function(){try{return 2<O(this)?this.a.status:-1}catch(a){return -1}};
g.aa=function(){try{return this.a?this.a.responseText:""}catch(a){return ""}};g.Ua=function(a){if(this.a){var b=this.a.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));return od(b)}};function hc(a,b){return a.a?a.a.getResponseHeader(b):null}g.ya=function(){return this.h};g.Xa=function(){return m(this.f)?this.f:String(this.f)};function yd(a){var b="";va(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n";});return b}function zd(a,b,c){a:{for(d in c){var d=!1;break a}d=!0;}if(d)return a;c=yd(c);if(m(a)){b=encodeURIComponent(String(b));c=null!=c?"="+encodeURIComponent(String(c)):"";if(b+=c){c=a.indexOf("#");0>c&&(c=a.length);d=a.indexOf("?");if(0>d||d>c){d=c;var e="";}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2];}return a}T(a,b,c);return a}function Ad(a){this.f=[];this.F=new Xc;this.ga=this.pa=this.B=this.ha=this.a=this.I=this.j=this.V=this.g=this.J=this.i=null;this.Qa=this.P=0;this.Oa=!!n("internalChannelParams.failFast",a);this.ia=this.w=this.s=this.l=this.h=this.c=null;this.oa=!0;this.m=this.ra=this.O=-1;this.S=this.v=this.A=0;this.Na=n("internalChannelParams.baseRetryDelayMs",a)||5E3;this.Ra=n("internalChannelParams.retryDelaySeedMs",a)||1E4;this.Pa=n("internalChannelParams.forwardChannelMaxRetries",a)||2;this.qa=n("internalChannelParams.forwardChannelRequestTimeoutMs",
a)||2E4;this.Ka=a&&a.Ab||void 0;this.D=void 0;this.R=a&&a.supportsCrossDomainXhr||!1;this.H="";this.b=new ad(a&&a.concurrentRequestLimit);this.ja=new kd;this.o=a&&void 0!==a.backgroundChannelTest?a.backgroundChannelTest:!0;(this.W=a&&a.fastHandshake||!1)&&!this.o&&(this.o=!0);a&&a.forceLongPolling&&(this.oa=!1);this.fa=void 0;}g=Ad.prototype;g.wa=8;g.u=1;
function Bd(a){Cd(a);if(3==a.u){var b=a.P++,c=N(a.B);T(c,"SID",a.H);T(c,"RID",b);T(c,"TYPE","terminate");Dd(a,c);b=new M(a,b,void 0);b.F=2;b.f=bc(N(c));c=!1;k.navigator&&k.navigator.sendBeacon&&(c=k.navigator.sendBeacon(b.f.toString(),""));!c&&k.Image&&((new Image).src=b.f,c=!0);c||(b.a=b.g.$(null),b.a.ca(b.f));b.v=w();ec(b);}Ed(a);}
function Cd(a){a.w&&(a.w.abort(),a.w=null);a.a&&(a.a.cancel(),a.a=null);a.l&&(k.clearTimeout(a.l),a.l=null);Fd(a);a.b.cancel();a.h&&(aa(a.h)&&k.clearTimeout(a.h),a.h=null);}function Gd(a,b){a.f.push(new $c(a.Qa++,b));3==a.u&&Hd(a);}g.Ca=function(){return 0==this.u};function Hd(a){ed(a.b)||a.h||(a.h=!0,wb(a.Ha,a),a.A=0);}
function Id(a,b){if(fd(a.b)>=a.b.f-(a.h?1:0))return !1;if(a.h)return a.f=b.j.concat(a.f),!0;if(1==a.u||2==a.u||a.A>=(a.Oa?0:a.Pa))return !1;a.h=Ob(u(a.Ha,a,b),Jd(a,a.A));a.A++;return !0}
g.Ha=function(a){if(this.h)if(this.h=null,1==this.u){if(!a){this.P=Math.floor(1E5*Math.random());a=this.P++;var b=new M(this,a,void 0),c=this.i;this.J&&(c?(c=wa(c),ya(c,this.J)):c=this.J);null===this.g&&(b.h=c);var d;if(this.W)a:{for(var e=d=0;e<this.f.length;e++){b:{var f=this.f[e];if("__data__"in f.a&&(f=f.a.__data__,m(f))){f=f.length;break b}f=void 0;}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.f.length-1){d=e+1;break a}}d=1E3;}else d=1E3;d=Kd(this,b,d);e=N(this.B);T(e,
"RID",a);T(e,"CVER",22);this.o&&this.j&&T(e,"X-HTTP-Session-Id",this.j);Dd(this,e);this.g&&c&&zd(e,this.g,c);dd(this.b,b);this.W?(T(e,"$req",d),T(e,"SID","null"),b.S=!0,ac(b,e,null)):ac(b,e,d);this.u=2;}}else 3==this.u&&(a?Ld(this,a):0==this.f.length||ed(this.b)||Ld(this));};
function Ld(a,b){var c;b?c=b.W:c=a.P++;var d=N(a.B);T(d,"SID",a.H);T(d,"RID",c);T(d,"AID",a.O);Dd(a,d);a.g&&a.i&&zd(d,a.g,a.i);c=new M(a,c,a.A+1);null===a.g&&(c.h=a.i);b&&(a.f=b.j.concat(a.f));b=Kd(a,c,1E3);c.setTimeout(Math.round(.5*a.qa)+Math.round(.5*a.qa*Math.random()));dd(a.b,c);ac(c,d,b);}function Dd(a,b){a.c&&oc({},function(c,d){T(b,d,c);});}
function Kd(a,b,c){c=Math.min(a.f.length,c);var d=a.c?u(a.c.Sa,a.c,a):null;a:for(var e=a.f,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].b,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,E=0;E<c;E++){var Bb=e[E].b,Tc=e[E].a;Bb-=f;if(0>Bb)f=Math.max(0,e[E].b-100),l=!1;else try{ld(Tc,h,"req"+Bb+"_");}catch(Ud){d&&d(Tc);}}if(l){d=h.join("&");break a}}a=a.f.splice(0,c);b.j=a;return d}function Md(a){a.a||a.l||(a.S=1,wb(a.Ga,a),a.v=0);}
function Nd(a){if(a.a||a.l||3<=a.v)return !1;a.S++;a.l=Ob(u(a.Ga,a),Jd(a,a.v));a.v++;return !0}g.Ga=function(){this.l=null;this.a=new M(this,"rpc",this.S);null===this.g&&(this.a.h=this.i);this.a.J=0;var a=N(this.pa);T(a,"RID","rpc");T(a,"SID",this.H);T(a,"CI",this.ia?"0":"1");T(a,"AID",this.O);Dd(this,a);T(a,"TYPE","xmlhttp");this.g&&this.i&&zd(a,this.g,this.i);this.D&&this.a.setTimeout(this.D);dc(this.a,a,!0,this.ga);};
function Vc(a,b,c){var d=b.l;d&&cd(a.b,d);a.ia=a.oa&&c;a.m=b.c;a.B=Wc(a,null,a.ha);Hd(a);}
g.Fa=function(a,b){if(0!=this.u&&(this.a==a||gd(this.b,a)))if(this.m=a.o,!a.s&&gd(this.b,a)&&3==this.u){try{var c=this.ja.a.parse(b);}catch(f){c=null;}if(q(c)&&3==c.length){b=c;if(0==b[0])a:{if(!this.l){if(this.a)if(this.a.v+3E3<a.v)Fd(this),this.a.cancel(),this.a=null;else break a;Nd(this);K(18);}}else this.ra=b[1],0<this.ra-this.O&&37500>b[2]&&this.ia&&0==this.v&&!this.s&&(this.s=Ob(u(this.Ya,this),6E3));if(1>=fd(this.b)&&this.fa){try{this.fa();}catch(f){}this.fa=void 0;}}else W(this,11);}else if((a.s||
this.a==a)&&Fd(this),!qa(b))for(b=c=this.ja.a.parse(b),c=0;c<b.length;c++){var d=b[c];this.O=d[0];d=d[1];if(2==this.u)if("c"==d[0]){this.H=d[1];this.ga=d[2];var e=d[3];null!=e&&(this.wa=e);d=d[5];null!=d&&aa(d)&&0<d&&(this.D=1.5*d);this.o&&(d=a.a)&&((e=hc(d,"X-Client-Wire-Protocol"))&&cd(this.b,e),this.j&&(d=hc(d,"X-HTTP-Session-Id")))&&(this.I=d,T(this.B,this.j,d));this.u=3;this.c&&this.c.va();d=a;this.pa=Wc(this,this.Y()?this.ga:null,this.ha);d.s?(hd(this.b,d),(e=this.D)&&d.setTimeout(e),d.i&&(gc(d),
ec(d)),this.a=d):Md(this);0<this.f.length&&Hd(this);}else "stop"!=d[0]&&"close"!=d[0]||W(this,7);else 3==this.u&&("stop"==d[0]||"close"==d[0]?"stop"==d[0]?W(this,7):Bd(this):"noop"!=d[0]&&this.c&&this.c.ua(d),this.v=0);}};g.Ya=function(){null!=this.s&&(this.s=null,this.a.cancel(),this.a=null,Nd(this),K(19));};function Fd(a){null!=a.s&&(k.clearTimeout(a.s),a.s=null);}
g.na=function(a){var b=null;if(this.a==a){Fd(this);this.a=null;var c=2;}else if(gd(this.b,a))b=a.j,hd(this.b,a),c=1;else return;this.m=a.o;if(0!=this.u)if(a.b)1==c?(b=w()-a.v,I.dispatchEvent(new Nb(I,a.l?a.l.length:0,b,this.A)),Hd(this)):Md(this);else {var d=a.c;if(3==d||0==d&&0<this.m||!(1==c&&Id(this,a)||2==c&&Nd(this)))switch(b&&0<b.length&&(a=this.b,a.c=a.c.concat(b)),d){case 1:W(this,5);break;case 4:W(this,10);break;case 3:W(this,6);break;default:W(this,2);}}};
function Jd(a,b){var c=a.Na+Math.floor(Math.random()*a.Ra);a.ma()||(c*=2);return c*b}function W(a,b){if(2==b){var c=null;a.c&&(c=null);var d=u(a.eb,a);c||(c=new S("//www.google.com/images/cleardot.gif"),k.location&&"http"==k.location.protocol||uc(c,"https"),bc(c));md(c.toString(),d);}else K(2);a.u=0;a.c&&a.c.ta(b);Ed(a);Cd(a);}g.eb=function(a){a?K(2):K(1);};function Ed(a){a.u=0;a.m=-1;if(a.c){if(0!=id(a.b).length||0!=a.f.length)a.b.c.length=0,pa(a.f),a.f.length=0;a.c.sa();}}
function Wc(a,b,c){var d=Jc(c);if(""!=d.b)b&&vc(d,b+"."+d.b),wc(d,d.i);else {var e=k.location,f;b?f=b+"."+e.hostname:f=e.hostname;d=Kc(e.protocol,f,+e.port,c);}a.V&&va(a.V,function(h,l){T(d,l,h);});b=a.j;c=a.I;b&&c&&T(d,b,c);T(d,"VER",a.wa);Dd(a,d);return d}g.$=function(a){if(a&&!this.R)throw Error("Can't create secondary domain capable XhrIo object.");a=new X(this.Ka);a.F=this.R;return a};g.ma=function(){return !!this.c&&!0};g.Y=function(){return this.R};function Od(){}g=Od.prototype;g.va=function(){};
g.ua=function(){};g.ta=function(){};g.sa=function(){};g.Sa=function(){};function Pd(a){for(var b=arguments[0],c=1;c<arguments.length;c++){var d=arguments[c];if(0==d.lastIndexOf("/",0))b=d;else {var e;(e=""==b)||(e=b.length-1,e=0<=e&&b.indexOf("/",e)==e);e?b+=d:b+="/"+d;}}return b}function Qd(){if(B&&!(10<=Number(Na)))throw Error("Environmental error: no available transport.");}Qd.prototype.a=function(a,b){return new Y(a,b)};
function Y(a,b){G.call(this);this.a=new Ad(b);this.g=a;this.m=b&&b.fb?b.fb:Pd(this.g,"test");this.b=b&&b.messageUrlParams||null;a=b&&b.messageHeaders||null;b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.a.i=a;a=b&&b.initMessageHeaders||null;b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType});b&&b.xa&&(a?a["X-WebChannel-Client-Profile"]=b.xa:a={"X-WebChannel-Client-Profile":b.xa});
this.a.J=a;(a=b&&b.httpHeadersOverwriteParam)&&!qa(a)&&(this.a.g=a);this.l=b&&b.supportsCrossDomainXhr||!1;this.h=b&&b.sendRawJson||!1;(b=b&&b.httpSessionIdParam)&&!qa(b)&&(this.a.j=b,a=this.b,null!==a&&b in a&&(a=this.b,b in a&&delete a[b]));this.f=new Z(this);}x(Y,G);g=Y.prototype;g.addEventListener=function(a,b,c,d){Y.N.addEventListener.call(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){Y.N.removeEventListener.call(this,a,b,c,d);};
g.Va=function(){this.a.c=this.f;this.l&&(this.a.R=!0);var a=this.a,b=this.m,c=this.g,d=this.b||void 0;K(0);a.ha=c;a.V=d||{};a.o&&(a.F.b=[],a.F.a=!1);a.w=new Sc(a);null===a.g&&(a.w.h=a.i);c=b;a.g&&a.i&&(c=zd(b,a.g,a.i));a=a.w;a.i=c;b=Wc(a.a,null,a.i);K(3);c=a.a.F.b;null!=c?(a.f=c[0],a.M=1,Uc(a)):(fc(b,"MODE","init"),!a.a.o&&a.a.j&&fc(b,"X-HTTP-Session-Id",a.a.j),a.b=new M(a,void 0,void 0),a.b.h=a.h,dc(a.b,b,!1,null),a.M=0);};g.close=function(){Bd(this.a);};
g.Wa=function(a){if(m(a)){var b={};b.__data__=a;Gd(this.a,b);}else this.h?(b={},b.__data__=ob(a),Gd(this.a,b)):Gd(this.a,a);};g.G=function(){this.a.c=null;delete this.f;Bd(this.a);delete this.a;Y.N.G.call(this);};function Rd(a){Ub.call(this);var b=a.__sm__;if(b){a:{for(var c in b){a=c;break a}a=void 0;}(this.c=a)?(a=this.c,this.data=null!==b&&a in b?b[a]:void 0):this.data=b;}else this.data=a;}x(Rd,Ub);function Sd(){Vb.call(this);this.status=1;}x(Sd,Vb);function Z(a){this.a=a;}x(Z,Od);Z.prototype.va=function(){this.a.dispatchEvent("a");};
Z.prototype.ua=function(a){this.a.dispatchEvent(new Rd(a));};Z.prototype.ta=function(a){this.a.dispatchEvent(new Sd(a));};Z.prototype.sa=function(){this.a.dispatchEvent("b");};var Td=v(function(a,b){function c(){}c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Qd);/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Qd.prototype.createWebChannel=Qd.prototype.a;Y.prototype.send=Y.prototype.Wa;Y.prototype.open=Y.prototype.Va;Y.prototype.close=Y.prototype.close;Pb.NO_ERROR=0;Pb.TIMEOUT=8;Pb.HTTP_ERROR=6;Qb.COMPLETE="complete";Tb.EventType=L;L.OPEN="a";L.CLOSE="b";L.ERROR="c";L.MESSAGE="d";G.prototype.listen=G.prototype.za;X.prototype.listenOnce=X.prototype.Aa;X.prototype.getLastError=X.prototype.Xa;X.prototype.getLastErrorCode=X.prototype.ya;X.prototype.getStatus=X.prototype.T;X.prototype.getResponseJson=X.prototype.Ua;
X.prototype.getResponseText=X.prototype.aa;X.prototype.send=X.prototype.ca;var tmp={createWebChannelTransport:Td,ErrorCode:Pb,EventType:Qb,WebChannel:Tb,XhrIo:X};
var tmp_1 = tmp.createWebChannelTransport;
var tmp_2 = tmp.ErrorCode;
var tmp_3 = tmp.EventType;
var tmp_4 = tmp.WebChannel;
var tmp_5 = tmp.XhrIo;

/* harmony default export */ __webpack_exports__["default"] = (tmp);

//# sourceMappingURL=index.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));

var name = "firebase";
var version = "7.13.1";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name, version, 'app');

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fdekker%2FDocuments%2FProjects%2Ftodo-app%2Fpages%2Findex.js!./":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fdekker%2FDocuments%2FProjects%2Ftodo-app%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
var _jsxFileName = "/home/dekker/Documents/Projects/todo-app/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  console.log(Object(_firebase__WEBPACK_IMPORTED_MODULE_1__["getTasks"])());
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Hello world"));
});

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fdekker%2FDocuments%2FProjects%2Ftodo-app%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fdekker%2FDocuments%2FProjects%2Ftodo-app%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fdekker%2FDocuments%2FProjects%2Ftodo-app%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map