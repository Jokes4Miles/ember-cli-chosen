define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]});a["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/ember-chosen",["exports","ember","ember-cli-chosen/components/ember-chosen"],function(e,t,n){"use strict";e["default"]=n["default"]}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify;e["default"]={name:"App Version",initialize:function(e,r){var d=a(r.toString());n["default"].libraries.register(d,t["default"].APP.version)}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function a(e,a){var r=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[r]&&(window[r]=a)}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("ember-cli-chosen");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h4"),a=e.createTextNode("Use Chosen in your ember-cli app");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n    ember-cli-chosen allows you to use the popular ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","http://harvesthq.github.io/chosen/");var r=e.createTextNode("Chosen jQuery plugin");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode(" in your ember-cli application.\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,d=r.content;a.detectNamespace(n);var i;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(i=this.build(a),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=a.cloneNode(this.cachedFragment,!0))):i=this.build(a);var c=a.createMorphAt(i,5,6,n);return d(t,c,e,"outlet"),i}}}())}),define("dummy/templates/components/ember-chosen",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,d=r.content;a.detectNamespace(n);var i;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(i=this.build(a),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=a.cloneNode(this.cachedFragment,!0))):i=this.build(a),this.cachedFragment&&a.repairClonedNode(i,[0]);var c=a.createMorphAt(i,0,1,n);return d(t,c,e,"yield"),i}}}())}),define("dummy/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("option"),a=e.createTextNode("Test 1");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom;a.detectNamespace(n);var r;return t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(r=this.build(a),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=a.cloneNode(this.cachedFragment,!0))):r=this.build(a),r}}}();return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("h4"),a=e.createTextNode("A Simple Example");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createTextNode("");return e.appendChild(t,n),t},render:function(t,n,a){var r=n.dom,d=n.hooks,i=d.block;r.detectNamespace(a);var c;n.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r),this.cachedFragment&&r.repairClonedNode(c,[2]);var o=r.createMorphAt(c,1,2,a);return i(n,o,t,"ember-chosen",[],{},e,null),c}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-chosen",version:"0.0.1.fdc9e892"});