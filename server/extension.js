var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// node_modules/@xmldom/xmldom/lib/conventions.js
var require_conventions = __commonJS({
  "node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
    "use strict";
    function find(list, predicate, ac) {
      if (ac === void 0) {
        ac = Array.prototype;
      }
      if (list && typeof ac.find === "function") {
        return ac.find.call(list, predicate);
      }
      for (var i = 0; i < list.length; i++) {
        if (Object.prototype.hasOwnProperty.call(list, i)) {
          var item = list[i];
          if (predicate.call(void 0, item, i, list)) {
            return item;
          }
        }
      }
    }
    function freeze(object, oc) {
      if (oc === void 0) {
        oc = Object;
      }
      return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
    }
    function assign(target, source) {
      if (target === null || typeof target !== "object") {
        throw new TypeError("target is not an object");
      }
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
      return target;
    }
    var MIME_TYPE = freeze({
      /**
       * `text/html`, the only mime type that triggers treating an XML document as HTML.
       *
       * @see DOMParser.SupportedType.isHTML
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
       */
      HTML: "text/html",
      /**
       * Helper method to check a mime type if it indicates an HTML document
       *
       * @param {string} [value]
       * @returns {boolean}
       *
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
      isHTML: function(value) {
        return value === MIME_TYPE.HTML;
      },
      /**
       * `application/xml`, the standard mime type for XML documents.
       *
       * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
       * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_APPLICATION: "application/xml",
      /**
       * `text/html`, an alias for `application/xml`.
       *
       * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
       * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_TEXT: "text/xml",
      /**
       * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
       * but is parsed as an XML document.
       *
       * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
       * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
       */
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      /**
       * `image/svg+xml`,
       *
       * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
       * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
       * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
       */
      XML_SVG_IMAGE: "image/svg+xml"
    });
    var NAMESPACE = freeze({
      /**
       * The XHTML namespace.
       *
       * @see http://www.w3.org/1999/xhtml
       */
      HTML: "http://www.w3.org/1999/xhtml",
      /**
       * Checks if `uri` equals `NAMESPACE.HTML`.
       *
       * @param {string} [uri]
       *
       * @see NAMESPACE.HTML
       */
      isHTML: function(uri) {
        return uri === NAMESPACE.HTML;
      },
      /**
       * The SVG namespace.
       *
       * @see http://www.w3.org/2000/svg
       */
      SVG: "http://www.w3.org/2000/svg",
      /**
       * The `xml:` namespace.
       *
       * @see http://www.w3.org/XML/1998/namespace
       */
      XML: "http://www.w3.org/XML/1998/namespace",
      /**
       * The `xmlns:` namespace
       *
       * @see https://www.w3.org/2000/xmlns/
       */
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
    exports.assign = assign;
    exports.find = find;
    exports.freeze = freeze;
    exports.MIME_TYPE = MIME_TYPE;
    exports.NAMESPACE = NAMESPACE;
  }
});

// node_modules/@xmldom/xmldom/lib/dom.js
var require_dom = __commonJS({
  "node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
    var conventions = require_conventions();
    var find = conventions.find;
    var NAMESPACE = conventions.NAMESPACE;
    function notEmptyString(input) {
      return input !== "";
    }
    function splitOnASCIIWhitespace(input) {
      return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
    }
    function orderedSetReducer(current, element) {
      if (!current.hasOwnProperty(element)) {
        current[element] = true;
      }
      return current;
    }
    function toOrderedSet(input) {
      if (!input)
        return [];
      var list = splitOnASCIIWhitespace(input);
      return Object.keys(list.reduce(orderedSetReducer, {}));
    }
    function arrayIncludes(list) {
      return function(element) {
        return list && list.indexOf(element) !== -1;
      };
    }
    function copy(src2, dest) {
      for (var p2 in src2) {
        if (Object.prototype.hasOwnProperty.call(src2, p2)) {
          dest[p2] = src2[p2];
        }
      }
    }
    function _extends(Class, Super) {
      var pt = Class.prototype;
      if (!(pt instanceof Super)) {
        let t2 = function() {
        };
        var t = t2;
        ;
        t2.prototype = Super.prototype;
        t2 = new t2();
        copy(pt, t2);
        Class.prototype = pt = t2;
      }
      if (pt.constructor != Class) {
        if (typeof Class != "function") {
          console.error("unknown Class:" + Class);
        }
        pt.constructor = Class;
      }
    }
    var NodeType = {};
    var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = NodeType.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
    var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
    var ExceptionCode = {};
    var ExceptionMessage = {};
    var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
    var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
    var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
    var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
    var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
    var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
    var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
    var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
    var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
    var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
    var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
    var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
    var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
    var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
    var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
    function DOMException(code, message) {
      if (message instanceof Error) {
        var error = message;
      } else {
        error = this;
        Error.call(this, ExceptionMessage[code]);
        this.message = ExceptionMessage[code];
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, DOMException);
      }
      error.code = code;
      if (message)
        this.message = this.message + ": " + message;
      return error;
    }
    DOMException.prototype = Error.prototype;
    copy(ExceptionCode, DOMException);
    function NodeList() {
    }
    NodeList.prototype = {
      /**
       * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
       * @standard level1
       */
      length: 0,
      /**
       * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
       * @standard level1
       * @param index  unsigned long
       *   Index into the collection.
       * @return Node
       * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
       */
      item: function(index) {
        return index >= 0 && index < this.length ? this[index] : null;
      },
      toString: function(isHTML, nodeFilter) {
        for (var buf = [], i = 0; i < this.length; i++) {
          serializeToString(this[i], buf, isHTML, nodeFilter);
        }
        return buf.join("");
      },
      /**
       * @private
       * @param {function (Node):boolean} predicate
       * @returns {Node[]}
       */
      filter: function(predicate) {
        return Array.prototype.filter.call(this, predicate);
      },
      /**
       * @private
       * @param {Node} item
       * @returns {number}
       */
      indexOf: function(item) {
        return Array.prototype.indexOf.call(this, item);
      }
    };
    function LiveNodeList(node, refresh) {
      this._node = node;
      this._refresh = refresh;
      _updateLiveList(this);
    }
    function _updateLiveList(list) {
      var inc = list._node._inc || list._node.ownerDocument._inc;
      if (list._inc !== inc) {
        var ls = list._refresh(list._node);
        __set__(list, "length", ls.length);
        if (!list.$$length || ls.length < list.$$length) {
          for (var i = ls.length; i in list; i++) {
            if (Object.prototype.hasOwnProperty.call(list, i)) {
              delete list[i];
            }
          }
        }
        copy(ls, list);
        list._inc = inc;
      }
    }
    LiveNodeList.prototype.item = function(i) {
      _updateLiveList(this);
      return this[i] || null;
    };
    _extends(LiveNodeList, NodeList);
    function NamedNodeMap() {
    }
    function _findNodeIndex(list, node) {
      var i = list.length;
      while (i--) {
        if (list[i] === node) {
          return i;
        }
      }
    }
    function _addNamedNode(el, list, newAttr, oldAttr) {
      if (oldAttr) {
        list[_findNodeIndex(list, oldAttr)] = newAttr;
      } else {
        list[list.length++] = newAttr;
      }
      if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
          oldAttr && _onRemoveAttribute(doc, el, oldAttr);
          _onAddAttribute(doc, el, newAttr);
        }
      }
    }
    function _removeNamedNode(el, list, attr) {
      var i = _findNodeIndex(list, attr);
      if (i >= 0) {
        var lastIndex = list.length - 1;
        while (i < lastIndex) {
          list[i] = list[++i];
        }
        list.length = lastIndex;
        if (el) {
          var doc = el.ownerDocument;
          if (doc) {
            _onRemoveAttribute(doc, el, attr);
            attr.ownerElement = null;
          }
        }
      } else {
        throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
      }
    }
    NamedNodeMap.prototype = {
      length: 0,
      item: NodeList.prototype.item,
      getNamedItem: function(key) {
        var i = this.length;
        while (i--) {
          var attr = this[i];
          if (attr.nodeName == key) {
            return attr;
          }
        }
      },
      setNamedItem: function(attr) {
        var el = attr.ownerElement;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        var oldAttr = this.getNamedItem(attr.nodeName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      setNamedItemNS: function(attr) {
        var el = attr.ownerElement, oldAttr;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      removeNamedItem: function(key) {
        var attr = this.getNamedItem(key);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
      //for level2
      removeNamedItemNS: function(namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      getNamedItemNS: function(namespaceURI, localName) {
        var i = this.length;
        while (i--) {
          var node = this[i];
          if (node.localName == localName && node.namespaceURI == namespaceURI) {
            return node;
          }
        }
        return null;
      }
    };
    function DOMImplementation() {
    }
    DOMImplementation.prototype = {
      /**
       * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
       * The different implementations fairly diverged in what kind of features were reported.
       * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
       *
       * @deprecated It is deprecated and modern browsers return true in all cases.
       *
       * @param {string} feature
       * @param {string} [version]
       * @returns {boolean} always true
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
       * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
       */
      hasFeature: function(feature, version) {
        return true;
      },
      /**
       * Creates an XML Document object of the specified type with its document element.
       *
       * __It behaves slightly different from the description in the living standard__:
       * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
       * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * @param {string|null} namespaceURI
       * @param {string} qualifiedName
       * @param {DocumentType=null} doctype
       * @returns {Document}
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocument: function(namespaceURI, qualifiedName, doctype) {
        var doc = new Document();
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype || null;
        if (doctype) {
          doc.appendChild(doctype);
        }
        if (qualifiedName) {
          var root = doc.createElementNS(namespaceURI, qualifiedName);
          doc.appendChild(root);
        }
        return doc;
      },
      /**
       * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
       *
       * __This behavior is slightly different from the in the specs__:
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * @param {string} qualifiedName
       * @param {string} [publicId]
       * @param {string} [systemId]
       * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
       * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocumentType: function(qualifiedName, publicId, systemId) {
        var node = new DocumentType();
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId || "";
        node.systemId = systemId || "";
        return node;
      }
    };
    function Node() {
    }
    Node.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      // Modified in DOM Level 2:
      insertBefore: function(newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        if (oldChild) {
          this.removeChild(oldChild);
        }
      },
      removeChild: function(oldChild) {
        return _removeChild(this, oldChild);
      },
      appendChild: function(newChild) {
        return this.insertBefore(newChild, null);
      },
      hasChildNodes: function() {
        return this.firstChild != null;
      },
      cloneNode: function(deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
      },
      // Modified in DOM Level 2:
      normalize: function() {
        var child = this.firstChild;
        while (child) {
          var next = child.nextSibling;
          if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
            this.removeChild(next);
            child.appendData(next.data);
          } else {
            child.normalize();
            child = next;
          }
        }
      },
      // Introduced in DOM Level 2:
      isSupported: function(feature, version) {
        return this.ownerDocument.implementation.hasFeature(feature, version);
      },
      // Introduced in DOM Level 2:
      hasAttributes: function() {
        return this.attributes.length > 0;
      },
      /**
       * Look up the prefix associated to the given namespace URI, starting from this node.
       * **The default namespace declarations are ignored by this method.**
       * See Namespace Prefix Lookup for details on the algorithm used by this method.
       *
       * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
       *
       * @param {string | null} namespaceURI
       * @returns {string | null}
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
       * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
       * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
       * @see https://github.com/xmldom/xmldom/issues/322
       */
      lookupPrefix: function(namespaceURI) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            for (var n in map) {
              if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
                return n;
              }
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      lookupNamespaceURI: function(prefix) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            if (Object.prototype.hasOwnProperty.call(map, prefix)) {
              return map[prefix];
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      isDefaultNamespace: function(namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
      }
    };
    function _xmlEncoder(c2) {
      return c2 == "<" && "&lt;" || c2 == ">" && "&gt;" || c2 == "&" && "&amp;" || c2 == '"' && "&quot;" || "&#" + c2.charCodeAt() + ";";
    }
    copy(NodeType, Node);
    copy(NodeType, Node.prototype);
    function _visitNode(node, callback) {
      if (callback(node)) {
        return true;
      }
      if (node = node.firstChild) {
        do {
          if (_visitNode(node, callback)) {
            return true;
          }
        } while (node = node.nextSibling);
      }
    }
    function Document() {
      this.ownerDocument = this;
    }
    function _onAddAttribute(doc, el, newAttr) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
      }
    }
    function _onRemoveAttribute(doc, el, newAttr, remove) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
      }
    }
    function _onUpdateChild(doc, el, newChild) {
      if (doc && doc._inc) {
        doc._inc++;
        var cs = el.childNodes;
        if (newChild) {
          cs[cs.length++] = newChild;
        } else {
          var child = el.firstChild;
          var i = 0;
          while (child) {
            cs[i++] = child;
            child = child.nextSibling;
          }
          cs.length = i;
          delete cs[cs.length];
        }
      }
    }
    function _removeChild(parentNode, child) {
      var previous = child.previousSibling;
      var next = child.nextSibling;
      if (previous) {
        previous.nextSibling = next;
      } else {
        parentNode.firstChild = next;
      }
      if (next) {
        next.previousSibling = previous;
      } else {
        parentNode.lastChild = previous;
      }
      child.parentNode = null;
      child.previousSibling = null;
      child.nextSibling = null;
      _onUpdateChild(parentNode.ownerDocument, parentNode);
      return child;
    }
    function hasValidParentNodeType(node) {
      return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
    }
    function hasInsertableNodeType(node) {
      return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
    }
    function isDocTypeNode(node) {
      return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
    }
    function isElementNode(node) {
      return node && node.nodeType === Node.ELEMENT_NODE;
    }
    function isTextNode(node) {
      return node && node.nodeType === Node.TEXT_NODE;
    }
    function isElementInsertionPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function isElementReplacementPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      function hasElementChildThatIsNotChild(node) {
        return isElementNode(node) && node !== child;
      }
      if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function assertPreInsertionValidity1to5(parent, node, child) {
      if (!hasValidParentNodeType(parent)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
      }
      if (child && child.parentNode !== parent) {
        throw new DOMException(NOT_FOUND_ERR, "child not in parent");
      }
      if (
        // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
        !hasInsertableNodeType(node) || // 5. If either `node` is a Text node and `parent` is a document,
        // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
        // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
        // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
        isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE
      ) {
        throw new DOMException(
          HIERARCHY_REQUEST_ERR,
          "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
        );
      }
    }
    function assertPreInsertionValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        if (find(parentChildNodes, isDocTypeNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
        if (!child && parentElementChild) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
        }
      }
    }
    function assertPreReplacementValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        let hasDoctypeChildThatIsNotChild2 = function(node2) {
          return isDocTypeNode(node2) && node2 !== child;
        };
        var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
        if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
      }
    }
    function _insertBefore(parent, node, child, _inDocumentAssertion) {
      assertPreInsertionValidity1to5(parent, node, child);
      if (parent.nodeType === Node.DOCUMENT_NODE) {
        (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
      }
      var cp = node.parentNode;
      if (cp) {
        cp.removeChild(node);
      }
      if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = node.firstChild;
        if (newFirst == null) {
          return node;
        }
        var newLast = node.lastChild;
      } else {
        newFirst = newLast = node;
      }
      var pre = child ? child.previousSibling : parent.lastChild;
      newFirst.previousSibling = pre;
      newLast.nextSibling = child;
      if (pre) {
        pre.nextSibling = newFirst;
      } else {
        parent.firstChild = newFirst;
      }
      if (child == null) {
        parent.lastChild = newLast;
      } else {
        child.previousSibling = newLast;
      }
      do {
        newFirst.parentNode = parent;
      } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
      _onUpdateChild(parent.ownerDocument || parent, parent);
      if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
        node.firstChild = node.lastChild = null;
      }
      return node;
    }
    function _appendSingleChild(parentNode, newChild) {
      if (newChild.parentNode) {
        newChild.parentNode.removeChild(newChild);
      }
      newChild.parentNode = parentNode;
      newChild.previousSibling = parentNode.lastChild;
      newChild.nextSibling = null;
      if (newChild.previousSibling) {
        newChild.previousSibling.nextSibling = newChild;
      } else {
        parentNode.firstChild = newChild;
      }
      parentNode.lastChild = newChild;
      _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
      return newChild;
    }
    Document.prototype = {
      //implementation : null,
      nodeName: "#document",
      nodeType: DOCUMENT_NODE,
      /**
       * The DocumentType node of the document.
       *
       * @readonly
       * @type DocumentType
       */
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(newChild, refChild) {
        if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
          var child = newChild.firstChild;
          while (child) {
            var next = child.nextSibling;
            this.insertBefore(child, refChild);
            child = next;
          }
          return newChild;
        }
        _insertBefore(this, newChild, refChild);
        newChild.ownerDocument = this;
        if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
          this.documentElement = newChild;
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        if (this.documentElement == oldChild) {
          this.documentElement = null;
        }
        return _removeChild(this, oldChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        newChild.ownerDocument = this;
        if (oldChild) {
          this.removeChild(oldChild);
        }
        if (isElementNode(newChild)) {
          this.documentElement = newChild;
        }
      },
      // Introduced in DOM Level 2:
      importNode: function(importedNode, deep) {
        return importNode(this, importedNode, deep);
      },
      // Introduced in DOM Level 2:
      getElementById: function(id) {
        var rtv = null;
        _visitNode(this.documentElement, function(node) {
          if (node.nodeType == ELEMENT_NODE) {
            if (node.getAttribute("id") == id) {
              rtv = node;
              return true;
            }
          }
        });
        return rtv;
      },
      /**
       * The `getElementsByClassName` method of `Document` interface returns an array-like object
       * of all child elements which have **all** of the given class name(s).
       *
       * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
       *
       *
       * Warning: This is a live LiveNodeList.
       * Changes in the DOM will reflect in the array as the changes occur.
       * If an element selected by this array no longer qualifies for the selector,
       * it will automatically be removed. Be aware of this for iteration purposes.
       *
       * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
       * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
       */
      getElementsByClassName: function(classNames) {
        var classNamesSet = toOrderedSet(classNames);
        return new LiveNodeList(this, function(base) {
          var ls = [];
          if (classNamesSet.length > 0) {
            _visitNode(base.documentElement, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE) {
                var nodeClassNames = node.getAttribute("class");
                if (nodeClassNames) {
                  var matches = classNames === nodeClassNames;
                  if (!matches) {
                    var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                    matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                  }
                  if (matches) {
                    ls.push(node);
                  }
                }
              }
            });
          }
          return ls;
        });
      },
      //document factory method:
      createElement: function(tagName) {
        var node = new Element();
        node.ownerDocument = this;
        node.nodeName = tagName;
        node.tagName = tagName;
        node.localName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
      },
      createDocumentFragment: function() {
        var node = new DocumentFragment();
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
      },
      createTextNode: function(data) {
        var node = new Text();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createComment: function(data) {
        var node = new Comment();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createCDATASection: function(data) {
        var node = new CDATASection();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createProcessingInstruction: function(target, data) {
        var node = new ProcessingInstruction();
        node.ownerDocument = this;
        node.tagName = node.nodeName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
      },
      createAttribute: function(name) {
        var node = new Attr();
        node.ownerDocument = this;
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
      },
      createEntityReference: function(name) {
        var node = new EntityReference();
        node.ownerDocument = this;
        node.nodeName = name;
        return node;
      },
      // Introduced in DOM Level 2:
      createElementNS: function(namespaceURI, qualifiedName) {
        var node = new Element();
        var pl = qualifiedName.split(":");
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = namespaceURI;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        attrs._ownerElement = node;
        return node;
      },
      // Introduced in DOM Level 2:
      createAttributeNS: function(namespaceURI, qualifiedName) {
        var node = new Attr();
        var pl = qualifiedName.split(":");
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.namespaceURI = namespaceURI;
        node.specified = true;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        return node;
      }
    };
    _extends(Document, Node);
    function Element() {
      this._nsMap = {};
    }
    Element.prototype = {
      nodeType: ELEMENT_NODE,
      hasAttribute: function(name) {
        return this.getAttributeNode(name) != null;
      },
      getAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        return attr && attr.value || "";
      },
      getAttributeNode: function(name) {
        return this.attributes.getNamedItem(name);
      },
      setAttribute: function(name, value) {
        var attr = this.ownerDocument.createAttribute(name);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      removeAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
      },
      //four real opeartion method
      appendChild: function(newChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return this.insertBefore(newChild, null);
        } else {
          return _appendSingleChild(this, newChild);
        }
      },
      setAttributeNode: function(newAttr) {
        return this.attributes.setNamedItem(newAttr);
      },
      setAttributeNodeNS: function(newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
      },
      removeAttributeNode: function(oldAttr) {
        return this.attributes.removeNamedItem(oldAttr.nodeName);
      },
      //get real attribute name,and remove it by removeAttributeNode
      removeAttributeNS: function(namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
      },
      hasAttributeNS: function(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
      },
      getAttributeNS: function(namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr && attr.value || "";
      },
      setAttributeNS: function(namespaceURI, qualifiedName, value) {
        var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      getAttributeNodeNS: function(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
      },
      getElementsByTagName: function(tagName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      },
      getElementsByTagNameNS: function(namespaceURI, localName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      }
    };
    Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
    _extends(Element, Node);
    function Attr() {
    }
    Attr.prototype.nodeType = ATTRIBUTE_NODE;
    _extends(Attr, Node);
    function CharacterData() {
    }
    CharacterData.prototype = {
      data: "",
      substringData: function(offset, count) {
        return this.data.substring(offset, offset + count);
      },
      appendData: function(text2) {
        text2 = this.data + text2;
        this.nodeValue = this.data = text2;
        this.length = text2.length;
      },
      insertData: function(offset, text2) {
        this.replaceData(offset, 0, text2);
      },
      appendChild: function(newChild) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
      },
      deleteData: function(offset, count) {
        this.replaceData(offset, count, "");
      },
      replaceData: function(offset, count, text2) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text2 = start + text2 + end;
        this.nodeValue = this.data = text2;
        this.length = text2.length;
      }
    };
    _extends(CharacterData, Node);
    function Text() {
    }
    Text.prototype = {
      nodeName: "#text",
      nodeType: TEXT_NODE,
      splitText: function(offset) {
        var text2 = this.data;
        var newText = text2.substring(offset);
        text2 = text2.substring(0, offset);
        this.data = this.nodeValue = text2;
        this.length = text2.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
          this.parentNode.insertBefore(newNode, this.nextSibling);
        }
        return newNode;
      }
    };
    _extends(Text, CharacterData);
    function Comment() {
    }
    Comment.prototype = {
      nodeName: "#comment",
      nodeType: COMMENT_NODE
    };
    _extends(Comment, CharacterData);
    function CDATASection() {
    }
    CDATASection.prototype = {
      nodeName: "#cdata-section",
      nodeType: CDATA_SECTION_NODE
    };
    _extends(CDATASection, CharacterData);
    function DocumentType() {
    }
    DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
    _extends(DocumentType, Node);
    function Notation() {
    }
    Notation.prototype.nodeType = NOTATION_NODE;
    _extends(Notation, Node);
    function Entity() {
    }
    Entity.prototype.nodeType = ENTITY_NODE;
    _extends(Entity, Node);
    function EntityReference() {
    }
    EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
    _extends(EntityReference, Node);
    function DocumentFragment() {
    }
    DocumentFragment.prototype.nodeName = "#document-fragment";
    DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
    _extends(DocumentFragment, Node);
    function ProcessingInstruction() {
    }
    ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
    _extends(ProcessingInstruction, Node);
    function XMLSerializer() {
    }
    XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter) {
      return nodeSerializeToString.call(node, isHtml, nodeFilter);
    };
    Node.prototype.toString = nodeSerializeToString;
    function nodeSerializeToString(isHtml, nodeFilter) {
      var buf = [];
      var refNode = this.nodeType == 9 && this.documentElement || this;
      var prefix = refNode.prefix;
      var uri = refNode.namespaceURI;
      if (uri && prefix == null) {
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) {
          var visibleNamespaces = [
            { namespace: uri, prefix: null }
            //{namespace:uri,prefix:''}
          ];
        }
      }
      serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
      return buf.join("");
    }
    function needNamespaceDefine(node, isHTML, visibleNamespaces) {
      var prefix = node.prefix || "";
      var uri = node.namespaceURI;
      if (!uri) {
        return false;
      }
      if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
        return false;
      }
      var i = visibleNamespaces.length;
      while (i--) {
        var ns = visibleNamespaces[i];
        if (ns.prefix === prefix) {
          return ns.namespace !== uri;
        }
      }
      return true;
    }
    function addSerializedAttribute(buf, qualifiedName, value) {
      buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
    }
    function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
      if (!visibleNamespaces) {
        visibleNamespaces = [];
      }
      if (nodeFilter) {
        node = nodeFilter(node);
        if (node) {
          if (typeof node == "string") {
            buf.push(node);
            return;
          }
        } else {
          return;
        }
      }
      switch (node.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var len = attrs.length;
          var child = node.firstChild;
          var nodeName = node.tagName;
          isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
          var prefixedNodeName = nodeName;
          if (!isHTML && !node.prefix && node.namespaceURI) {
            var defaultNS;
            for (var ai = 0; ai < attrs.length; ai++) {
              if (attrs.item(ai).name === "xmlns") {
                defaultNS = attrs.item(ai).value;
                break;
              }
            }
            if (!defaultNS) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.prefix === "" && namespace.namespace === node.namespaceURI) {
                  defaultNS = namespace.namespace;
                  break;
                }
              }
            }
            if (defaultNS !== node.namespaceURI) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.namespace === node.namespaceURI) {
                  if (namespace.prefix) {
                    prefixedNodeName = namespace.prefix + ":" + nodeName;
                  }
                  break;
                }
              }
            }
          }
          buf.push("<", prefixedNodeName);
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (attr.prefix == "xmlns") {
              visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
            } else if (attr.nodeName == "xmlns") {
              visibleNamespaces.push({ prefix: "", namespace: attr.value });
            }
          }
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
              var prefix = attr.prefix || "";
              var uri = attr.namespaceURI;
              addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
          }
          if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
            var prefix = node.prefix || "";
            var uri = node.namespaceURI;
            addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
            visibleNamespaces.push({ prefix, namespace: uri });
          }
          if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
            buf.push(">");
            if (isHTML && /^script$/i.test(nodeName)) {
              while (child) {
                if (child.data) {
                  buf.push(child.data);
                } else {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                }
                child = child.nextSibling;
              }
            } else {
              while (child) {
                serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                child = child.nextSibling;
              }
            }
            buf.push("</", prefixedNodeName, ">");
          } else {
            buf.push("/>");
          }
          return;
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var child = node.firstChild;
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
            child = child.nextSibling;
          }
          return;
        case ATTRIBUTE_NODE:
          return addSerializedAttribute(buf, node.name, node.value);
        case TEXT_NODE:
          return buf.push(
            node.data.replace(/[<&>]/g, _xmlEncoder)
          );
        case CDATA_SECTION_NODE:
          return buf.push("<![CDATA[", node.data, "]]>");
        case COMMENT_NODE:
          return buf.push("<!--", node.data, "-->");
        case DOCUMENT_TYPE_NODE:
          var pubid = node.publicId;
          var sysid = node.systemId;
          buf.push("<!DOCTYPE ", node.name);
          if (pubid) {
            buf.push(" PUBLIC ", pubid);
            if (sysid && sysid != ".") {
              buf.push(" ", sysid);
            }
            buf.push(">");
          } else if (sysid && sysid != ".") {
            buf.push(" SYSTEM ", sysid, ">");
          } else {
            var sub = node.internalSubset;
            if (sub) {
              buf.push(" [", sub, "]");
            }
            buf.push(">");
          }
          return;
        case PROCESSING_INSTRUCTION_NODE:
          return buf.push("<?", node.target, " ", node.data, "?>");
        case ENTITY_REFERENCE_NODE:
          return buf.push("&", node.nodeName, ";");
        default:
          buf.push("??", node.nodeName);
      }
    }
    function importNode(doc, node, deep) {
      var node2;
      switch (node.nodeType) {
        case ELEMENT_NODE:
          node2 = node.cloneNode(false);
          node2.ownerDocument = doc;
        case DOCUMENT_FRAGMENT_NODE:
          break;
        case ATTRIBUTE_NODE:
          deep = true;
          break;
      }
      if (!node2) {
        node2 = node.cloneNode(false);
      }
      node2.ownerDocument = doc;
      node2.parentNode = null;
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(importNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function cloneNode(doc, node, deep) {
      var node2 = new node.constructor();
      for (var n in node) {
        if (Object.prototype.hasOwnProperty.call(node, n)) {
          var v2 = node[n];
          if (typeof v2 != "object") {
            if (v2 != node2[n]) {
              node2[n] = v2;
            }
          }
        }
      }
      if (node.childNodes) {
        node2.childNodes = new NodeList();
      }
      node2.ownerDocument = doc;
      switch (node2.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var attrs2 = node2.attributes = new NamedNodeMap();
          var len = attrs.length;
          attrs2._ownerElement = node2;
          for (var i = 0; i < len; i++) {
            node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
          }
          break;
          ;
        case ATTRIBUTE_NODE:
          deep = true;
      }
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(cloneNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function __set__(object, key, value) {
      object[key] = value;
    }
    try {
      if (Object.defineProperty) {
        let getTextContent2 = function(node) {
          switch (node.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              var buf = [];
              node = node.firstChild;
              while (node) {
                if (node.nodeType !== 7 && node.nodeType !== 8) {
                  buf.push(getTextContent2(node));
                }
                node = node.nextSibling;
              }
              return buf.join("");
            default:
              return node.nodeValue;
          }
        };
        getTextContent = getTextContent2;
        Object.defineProperty(LiveNodeList.prototype, "length", {
          get: function() {
            _updateLiveList(this);
            return this.$$length;
          }
        });
        Object.defineProperty(Node.prototype, "textContent", {
          get: function() {
            return getTextContent2(this);
          },
          set: function(data) {
            switch (this.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                while (this.firstChild) {
                  this.removeChild(this.firstChild);
                }
                if (data || String(data)) {
                  this.appendChild(this.ownerDocument.createTextNode(data));
                }
                break;
              default:
                this.data = data;
                this.value = data;
                this.nodeValue = data;
            }
          }
        });
        __set__ = function(object, key, value) {
          object["$$" + key] = value;
        };
      }
    } catch (e) {
    }
    var getTextContent;
    exports.DocumentType = DocumentType;
    exports.DOMException = DOMException;
    exports.DOMImplementation = DOMImplementation;
    exports.Element = Element;
    exports.Node = Node;
    exports.NodeList = NodeList;
    exports.XMLSerializer = XMLSerializer;
  }
});

// node_modules/@xmldom/xmldom/lib/entities.js
var require_entities = __commonJS({
  "node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
    "use strict";
    var freeze = require_conventions().freeze;
    exports.XML_ENTITIES = freeze({
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: '"'
    });
    exports.HTML_ENTITIES = freeze({
      Aacute: "\xC1",
      aacute: "\xE1",
      Abreve: "\u0102",
      abreve: "\u0103",
      ac: "\u223E",
      acd: "\u223F",
      acE: "\u223E\u0333",
      Acirc: "\xC2",
      acirc: "\xE2",
      acute: "\xB4",
      Acy: "\u0410",
      acy: "\u0430",
      AElig: "\xC6",
      aelig: "\xE6",
      af: "\u2061",
      Afr: "\u{1D504}",
      afr: "\u{1D51E}",
      Agrave: "\xC0",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      Alpha: "\u0391",
      alpha: "\u03B1",
      Amacr: "\u0100",
      amacr: "\u0101",
      amalg: "\u2A3F",
      AMP: "&",
      amp: "&",
      And: "\u2A53",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      Aogon: "\u0104",
      aogon: "\u0105",
      Aopf: "\u{1D538}",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apacir: "\u2A6F",
      apE: "\u2A70",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      ApplyFunction: "\u2061",
      approx: "\u2248",
      approxeq: "\u224A",
      Aring: "\xC5",
      aring: "\xE5",
      Ascr: "\u{1D49C}",
      ascr: "\u{1D4B6}",
      Assign: "\u2254",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      Atilde: "\xC3",
      atilde: "\xE3",
      Auml: "\xC4",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      barvee: "\u22BD",
      Barwed: "\u2306",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      Bcy: "\u0411",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      Because: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      Bfr: "\u{1D505}",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bNot: "\u2AED",
      bnot: "\u2310",
      Bopf: "\u{1D539}",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxbox: "\u29C9",
      boxDL: "\u2557",
      boxDl: "\u2556",
      boxdL: "\u2555",
      boxdl: "\u2510",
      boxDR: "\u2554",
      boxDr: "\u2553",
      boxdR: "\u2552",
      boxdr: "\u250C",
      boxH: "\u2550",
      boxh: "\u2500",
      boxHD: "\u2566",
      boxHd: "\u2564",
      boxhD: "\u2565",
      boxhd: "\u252C",
      boxHU: "\u2569",
      boxHu: "\u2567",
      boxhU: "\u2568",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxUL: "\u255D",
      boxUl: "\u255C",
      boxuL: "\u255B",
      boxul: "\u2518",
      boxUR: "\u255A",
      boxUr: "\u2559",
      boxuR: "\u2558",
      boxur: "\u2514",
      boxV: "\u2551",
      boxv: "\u2502",
      boxVH: "\u256C",
      boxVh: "\u256B",
      boxvH: "\u256A",
      boxvh: "\u253C",
      boxVL: "\u2563",
      boxVl: "\u2562",
      boxvL: "\u2561",
      boxvl: "\u2524",
      boxVR: "\u2560",
      boxVr: "\u255F",
      boxvR: "\u255E",
      boxvr: "\u251C",
      bprime: "\u2035",
      Breve: "\u02D8",
      breve: "\u02D8",
      brvbar: "\xA6",
      Bscr: "\u212C",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      Bumpeq: "\u224E",
      bumpeq: "\u224F",
      Cacute: "\u0106",
      cacute: "\u0107",
      Cap: "\u22D2",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      CapitalDifferentialD: "\u2145",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      Cayleys: "\u212D",
      ccaps: "\u2A4D",
      Ccaron: "\u010C",
      ccaron: "\u010D",
      Ccedil: "\xC7",
      ccedil: "\xE7",
      Ccirc: "\u0108",
      ccirc: "\u0109",
      Cconint: "\u2230",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      Cdot: "\u010A",
      cdot: "\u010B",
      cedil: "\xB8",
      Cedilla: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      CenterDot: "\xB7",
      centerdot: "\xB7",
      Cfr: "\u212D",
      cfr: "\u{1D520}",
      CHcy: "\u0427",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      Chi: "\u03A7",
      chi: "\u03C7",
      cir: "\u25CB",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      CircleDot: "\u2299",
      circledR: "\xAE",
      circledS: "\u24C8",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      cirE: "\u29C3",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      clubs: "\u2663",
      clubsuit: "\u2663",
      Colon: "\u2237",
      colon: ":",
      Colone: "\u2A74",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      Congruent: "\u2261",
      Conint: "\u222F",
      conint: "\u222E",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      copf: "\u{1D554}",
      coprod: "\u2210",
      Coproduct: "\u2210",
      COPY: "\xA9",
      copy: "\xA9",
      copysr: "\u2117",
      CounterClockwiseContourIntegral: "\u2233",
      crarr: "\u21B5",
      Cross: "\u2A2F",
      cross: "\u2717",
      Cscr: "\u{1D49E}",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      Cup: "\u22D3",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      CupCap: "\u224D",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      Dagger: "\u2021",
      dagger: "\u2020",
      daleth: "\u2138",
      Darr: "\u21A1",
      dArr: "\u21D3",
      darr: "\u2193",
      dash: "\u2010",
      Dashv: "\u2AE4",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      Dcaron: "\u010E",
      dcaron: "\u010F",
      Dcy: "\u0414",
      dcy: "\u0434",
      DD: "\u2145",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      DDotrahd: "\u2911",
      ddotseq: "\u2A77",
      deg: "\xB0",
      Del: "\u2207",
      Delta: "\u0394",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      Dfr: "\u{1D507}",
      dfr: "\u{1D521}",
      dHar: "\u2965",
      dharl: "\u21C3",
      dharr: "\u21C2",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      diam: "\u22C4",
      Diamond: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      DifferentialD: "\u2146",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      DJcy: "\u0402",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      Dopf: "\u{1D53B}",
      dopf: "\u{1D555}",
      Dot: "\xA8",
      dot: "\u02D9",
      DotDot: "\u20DC",
      doteq: "\u2250",
      doteqdot: "\u2251",
      DotEqual: "\u2250",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      Downarrow: "\u21D3",
      downarrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      Dscr: "\u{1D49F}",
      dscr: "\u{1D4B9}",
      DScy: "\u0405",
      dscy: "\u0455",
      dsol: "\u29F6",
      Dstrok: "\u0110",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      DZcy: "\u040F",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      Eacute: "\xC9",
      eacute: "\xE9",
      easter: "\u2A6E",
      Ecaron: "\u011A",
      ecaron: "\u011B",
      ecir: "\u2256",
      Ecirc: "\xCA",
      ecirc: "\xEA",
      ecolon: "\u2255",
      Ecy: "\u042D",
      ecy: "\u044D",
      eDDot: "\u2A77",
      Edot: "\u0116",
      eDot: "\u2251",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      Efr: "\u{1D508}",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      Egrave: "\xC8",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      Element: "\u2208",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      Emacr: "\u0112",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      EmptySmallSquare: "\u25FB",
      emptyv: "\u2205",
      EmptyVerySmallSquare: "\u25AB",
      emsp: "\u2003",
      emsp13: "\u2004",
      emsp14: "\u2005",
      ENG: "\u014A",
      eng: "\u014B",
      ensp: "\u2002",
      Eogon: "\u0118",
      eogon: "\u0119",
      Eopf: "\u{1D53C}",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      Epsilon: "\u0395",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      Equal: "\u2A75",
      equals: "=",
      EqualTilde: "\u2242",
      equest: "\u225F",
      Equilibrium: "\u21CC",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erarr: "\u2971",
      erDot: "\u2253",
      Escr: "\u2130",
      escr: "\u212F",
      esdot: "\u2250",
      Esim: "\u2A73",
      esim: "\u2242",
      Eta: "\u0397",
      eta: "\u03B7",
      ETH: "\xD0",
      eth: "\xF0",
      Euml: "\xCB",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      Exists: "\u2203",
      expectation: "\u2130",
      ExponentialE: "\u2147",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      Fcy: "\u0424",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      Ffr: "\u{1D509}",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      Fopf: "\u{1D53D}",
      fopf: "\u{1D557}",
      ForAll: "\u2200",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      Fouriertrf: "\u2131",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      Fscr: "\u2131",
      fscr: "\u{1D4BB}",
      gacute: "\u01F5",
      Gamma: "\u0393",
      gamma: "\u03B3",
      Gammad: "\u03DC",
      gammad: "\u03DD",
      gap: "\u2A86",
      Gbreve: "\u011E",
      gbreve: "\u011F",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      gcirc: "\u011D",
      Gcy: "\u0413",
      gcy: "\u0433",
      Gdot: "\u0120",
      gdot: "\u0121",
      gE: "\u2267",
      ge: "\u2265",
      gEl: "\u2A8C",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      Gfr: "\u{1D50A}",
      gfr: "\u{1D524}",
      Gg: "\u22D9",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      GJcy: "\u0403",
      gjcy: "\u0453",
      gl: "\u2277",
      gla: "\u2AA5",
      glE: "\u2A92",
      glj: "\u2AA4",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gnE: "\u2269",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      Gopf: "\u{1D53E}",
      gopf: "\u{1D558}",
      grave: "`",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      Gt: "\u226B",
      GT: ">",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      Hacek: "\u02C7",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      HARDcy: "\u042A",
      hardcy: "\u044A",
      hArr: "\u21D4",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      Hat: "^",
      hbar: "\u210F",
      Hcirc: "\u0124",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      Hfr: "\u210C",
      hfr: "\u{1D525}",
      HilbertSpace: "\u210B",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      Hopf: "\u210D",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      Hstrok: "\u0126",
      hstrok: "\u0127",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      hybull: "\u2043",
      hyphen: "\u2010",
      Iacute: "\xCD",
      iacute: "\xED",
      ic: "\u2063",
      Icirc: "\xCE",
      icirc: "\xEE",
      Icy: "\u0418",
      icy: "\u0438",
      Idot: "\u0130",
      IEcy: "\u0415",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      Ifr: "\u2111",
      ifr: "\u{1D526}",
      Igrave: "\xCC",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      IJlig: "\u0132",
      ijlig: "\u0133",
      Im: "\u2111",
      Imacr: "\u012A",
      imacr: "\u012B",
      image: "\u2111",
      ImaginaryI: "\u2148",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      Implies: "\u21D2",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      Int: "\u222C",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      Integral: "\u222B",
      intercal: "\u22BA",
      Intersection: "\u22C2",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      IOcy: "\u0401",
      iocy: "\u0451",
      Iogon: "\u012E",
      iogon: "\u012F",
      Iopf: "\u{1D540}",
      iopf: "\u{1D55A}",
      Iota: "\u0399",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      Iscr: "\u2110",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isindot: "\u22F5",
      isinE: "\u22F9",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      Itilde: "\u0128",
      itilde: "\u0129",
      Iukcy: "\u0406",
      iukcy: "\u0456",
      Iuml: "\xCF",
      iuml: "\xEF",
      Jcirc: "\u0134",
      jcirc: "\u0135",
      Jcy: "\u0419",
      jcy: "\u0439",
      Jfr: "\u{1D50D}",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      Jopf: "\u{1D541}",
      jopf: "\u{1D55B}",
      Jscr: "\u{1D4A5}",
      jscr: "\u{1D4BF}",
      Jsercy: "\u0408",
      jsercy: "\u0458",
      Jukcy: "\u0404",
      jukcy: "\u0454",
      Kappa: "\u039A",
      kappa: "\u03BA",
      kappav: "\u03F0",
      Kcedil: "\u0136",
      kcedil: "\u0137",
      Kcy: "\u041A",
      kcy: "\u043A",
      Kfr: "\u{1D50E}",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      KHcy: "\u0425",
      khcy: "\u0445",
      KJcy: "\u040C",
      kjcy: "\u045C",
      Kopf: "\u{1D542}",
      kopf: "\u{1D55C}",
      Kscr: "\u{1D4A6}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      Lacute: "\u0139",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      Lambda: "\u039B",
      lambda: "\u03BB",
      Lang: "\u27EA",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      Laplacetrf: "\u2112",
      laquo: "\xAB",
      Larr: "\u219E",
      lArr: "\u21D0",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      lAtail: "\u291B",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lBarr: "\u290E",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      Lcaron: "\u013D",
      lcaron: "\u013E",
      Lcedil: "\u013B",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      Lcy: "\u041B",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      lE: "\u2266",
      le: "\u2264",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      Leftarrow: "\u21D0",
      leftarrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      leftarrowtail: "\u21A2",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      LeftRightArrow: "\u2194",
      Leftrightarrow: "\u21D4",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      leftthreetimes: "\u22CB",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      lEg: "\u2A8B",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      lessgtr: "\u2276",
      LessLess: "\u2AA1",
      lesssim: "\u2272",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      Lfr: "\u{1D50F}",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lHar: "\u2962",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      LJcy: "\u0409",
      ljcy: "\u0459",
      Ll: "\u22D8",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      Lleftarrow: "\u21DA",
      llhard: "\u296B",
      lltri: "\u25FA",
      Lmidot: "\u013F",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lnE: "\u2268",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      LongLeftArrow: "\u27F5",
      Longleftarrow: "\u27F8",
      longleftarrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      Longleftrightarrow: "\u27FA",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      LongRightArrow: "\u27F6",
      Longrightarrow: "\u27F9",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      Lopf: "\u{1D543}",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      Lscr: "\u2112",
      lscr: "\u{1D4C1}",
      Lsh: "\u21B0",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      Lstrok: "\u0141",
      lstrok: "\u0142",
      Lt: "\u226A",
      LT: "<",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      ltrPar: "\u2996",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      Map: "\u2905",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      Mcy: "\u041C",
      mcy: "\u043C",
      mdash: "\u2014",
      mDDot: "\u223A",
      measuredangle: "\u2221",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      MinusPlus: "\u2213",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      Mopf: "\u{1D544}",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      Mscr: "\u2133",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      Mu: "\u039C",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nabla: "\u2207",
      Nacute: "\u0143",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      Ncaron: "\u0147",
      ncaron: "\u0148",
      Ncedil: "\u0145",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      Ncy: "\u041D",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      nearhk: "\u2924",
      neArr: "\u21D7",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      nexist: "\u2204",
      nexists: "\u2204",
      Nfr: "\u{1D511}",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      nGg: "\u22D9\u0338",
      ngsim: "\u2275",
      nGt: "\u226B\u20D2",
      ngt: "\u226F",
      ngtr: "\u226F",
      nGtv: "\u226B\u0338",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      NJcy: "\u040A",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlarr: "\u219A",
      nldr: "\u2025",
      nlE: "\u2266\u0338",
      nle: "\u2270",
      nLeftarrow: "\u21CD",
      nleftarrow: "\u219A",
      nLeftrightarrow: "\u21CE",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nLl: "\u22D8\u0338",
      nlsim: "\u2274",
      nLt: "\u226A\u20D2",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nLtv: "\u226A\u0338",
      nmid: "\u2224",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      nopf: "\u{1D55F}",
      Not: "\u2AEC",
      not: "\xAC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      notin: "\u2209",
      notindot: "\u22F5\u0338",
      notinE: "\u22F9\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nRightarrow: "\u21CF",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      Nscr: "\u{1D4A9}",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      Ntilde: "\xD1",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      Nu: "\u039D",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvap: "\u224D\u20D2",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nvDash: "\u22AD",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvHarr: "\u2904",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwarhk: "\u2923",
      nwArr: "\u21D6",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      Oacute: "\xD3",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\u229A",
      Ocirc: "\xD4",
      ocirc: "\xF4",
      Ocy: "\u041E",
      ocy: "\u043E",
      odash: "\u229D",
      Odblac: "\u0150",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      OElig: "\u0152",
      oelig: "\u0153",
      ofcir: "\u29BF",
      Ofr: "\u{1D512}",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      Ograve: "\xD2",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      Omacr: "\u014C",
      omacr: "\u014D",
      Omega: "\u03A9",
      omega: "\u03C9",
      Omicron: "\u039F",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      Oopf: "\u{1D546}",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      operp: "\u29B9",
      oplus: "\u2295",
      Or: "\u2A54",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oS: "\u24C8",
      Oscr: "\u{1D4AA}",
      oscr: "\u2134",
      Oslash: "\xD8",
      oslash: "\xF8",
      osol: "\u2298",
      Otilde: "\xD5",
      otilde: "\xF5",
      Otimes: "\u2A37",
      otimes: "\u2297",
      otimesas: "\u2A36",
      Ouml: "\xD6",
      ouml: "\xF6",
      ovbar: "\u233D",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      par: "\u2225",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      PartialD: "\u2202",
      Pcy: "\u041F",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      Pfr: "\u{1D513}",
      pfr: "\u{1D52D}",
      Phi: "\u03A6",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      Pi: "\u03A0",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      PlusMinus: "\xB1",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      Poincareplane: "\u210C",
      pointint: "\u2A15",
      Popf: "\u2119",
      popf: "\u{1D561}",
      pound: "\xA3",
      Pr: "\u2ABB",
      pr: "\u227A",
      prap: "\u2AB7",
      prcue: "\u227C",
      prE: "\u2AB3",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      Prime: "\u2033",
      prime: "\u2032",
      primes: "\u2119",
      prnap: "\u2AB9",
      prnE: "\u2AB5",
      prnsim: "\u22E8",
      prod: "\u220F",
      Product: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      Proportion: "\u2237",
      Proportional: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      Pscr: "\u{1D4AB}",
      pscr: "\u{1D4C5}",
      Psi: "\u03A8",
      psi: "\u03C8",
      puncsp: "\u2008",
      Qfr: "\u{1D514}",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      Qopf: "\u211A",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      Qscr: "\u{1D4AC}",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      QUOT: '"',
      quot: '"',
      rAarr: "\u21DB",
      race: "\u223D\u0331",
      Racute: "\u0154",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      Rang: "\u27EB",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      Rarr: "\u21A0",
      rArr: "\u21D2",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      Rarrtl: "\u2916",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      rAtail: "\u291C",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      RBarr: "\u2910",
      rBarr: "\u290F",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      Rcaron: "\u0158",
      rcaron: "\u0159",
      Rcedil: "\u0156",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      Rcy: "\u0420",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      Re: "\u211C",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      REG: "\xAE",
      reg: "\xAE",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      rfisht: "\u297D",
      rfloor: "\u230B",
      Rfr: "\u211C",
      rfr: "\u{1D52F}",
      rHar: "\u2964",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      Rho: "\u03A1",
      rho: "\u03C1",
      rhov: "\u03F1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      Rightarrow: "\u21D2",
      rightarrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      rightarrowtail: "\u21A3",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      rightthreetimes: "\u22CC",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      Ropf: "\u211D",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      RoundImplies: "\u2970",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      Rrightarrow: "\u21DB",
      rsaquo: "\u203A",
      Rscr: "\u211B",
      rscr: "\u{1D4C7}",
      Rsh: "\u21B1",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      RuleDelayed: "\u29F4",
      ruluhar: "\u2968",
      rx: "\u211E",
      Sacute: "\u015A",
      sacute: "\u015B",
      sbquo: "\u201A",
      Sc: "\u2ABC",
      sc: "\u227B",
      scap: "\u2AB8",
      Scaron: "\u0160",
      scaron: "\u0161",
      sccue: "\u227D",
      scE: "\u2AB4",
      sce: "\u2AB0",
      Scedil: "\u015E",
      scedil: "\u015F",
      Scirc: "\u015C",
      scirc: "\u015D",
      scnap: "\u2ABA",
      scnE: "\u2AB6",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      Scy: "\u0421",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      searhk: "\u2925",
      seArr: "\u21D8",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      Sfr: "\u{1D516}",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      SHCHcy: "\u0429",
      shchcy: "\u0449",
      SHcy: "\u0428",
      shcy: "\u0448",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      shy: "\xAD",
      Sigma: "\u03A3",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      SmallCircle: "\u2218",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      SOFTcy: "\u042C",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      Sopf: "\u{1D54A}",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      Sqrt: "\u221A",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      Square: "\u25A1",
      square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      Sscr: "\u{1D4AE}",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      Star: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      Sub: "\u22D0",
      sub: "\u2282",
      subdot: "\u2ABD",
      subE: "\u2AC5",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      Subset: "\u22D0",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      SubsetEqual: "\u2286",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      sum: "\u2211",
      sung: "\u266A",
      Sup: "\u22D1",
      sup: "\u2283",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supE: "\u2AC6",
      supe: "\u2287",
      supedot: "\u2AC4",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      Supset: "\u22D1",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swarhk: "\u2926",
      swArr: "\u21D9",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      Tab: "	",
      target: "\u2316",
      Tau: "\u03A4",
      tau: "\u03C4",
      tbrk: "\u23B4",
      Tcaron: "\u0164",
      tcaron: "\u0165",
      Tcedil: "\u0162",
      tcedil: "\u0163",
      Tcy: "\u0422",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      Tfr: "\u{1D517}",
      tfr: "\u{1D531}",
      there4: "\u2234",
      Therefore: "\u2234",
      therefore: "\u2234",
      Theta: "\u0398",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      ThickSpace: "\u205F\u200A",
      thinsp: "\u2009",
      ThinSpace: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      THORN: "\xDE",
      thorn: "\xFE",
      Tilde: "\u223C",
      tilde: "\u02DC",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      Topf: "\u{1D54B}",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      TRADE: "\u2122",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      TripleDot: "\u20DB",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      Tscr: "\u{1D4AF}",
      tscr: "\u{1D4C9}",
      TScy: "\u0426",
      tscy: "\u0446",
      TSHcy: "\u040B",
      tshcy: "\u045B",
      Tstrok: "\u0166",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      Uacute: "\xDA",
      uacute: "\xFA",
      Uarr: "\u219F",
      uArr: "\u21D1",
      uarr: "\u2191",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      ubrcy: "\u045E",
      Ubreve: "\u016C",
      ubreve: "\u016D",
      Ucirc: "\xDB",
      ucirc: "\xFB",
      Ucy: "\u0423",
      ucy: "\u0443",
      udarr: "\u21C5",
      Udblac: "\u0170",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      Ufr: "\u{1D518}",
      ufr: "\u{1D532}",
      Ugrave: "\xD9",
      ugrave: "\xF9",
      uHar: "\u2963",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      Umacr: "\u016A",
      umacr: "\u016B",
      uml: "\xA8",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      uogon: "\u0173",
      Uopf: "\u{1D54C}",
      uopf: "\u{1D566}",
      UpArrow: "\u2191",
      Uparrow: "\u21D1",
      uparrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      Updownarrow: "\u21D5",
      updownarrow: "\u2195",
      UpEquilibrium: "\u296E",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      upsi: "\u03C5",
      upsih: "\u03D2",
      Upsilon: "\u03A5",
      upsilon: "\u03C5",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      Uring: "\u016E",
      uring: "\u016F",
      urtri: "\u25F9",
      Uscr: "\u{1D4B0}",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      Utilde: "\u0168",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      Uuml: "\xDC",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      vArr: "\u21D5",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      Vbar: "\u2AEB",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      Vcy: "\u0412",
      vcy: "\u0432",
      VDash: "\u22AB",
      Vdash: "\u22A9",
      vDash: "\u22A8",
      vdash: "\u22A2",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      Verbar: "\u2016",
      verbar: "|",
      Vert: "\u2016",
      vert: "|",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      Vopf: "\u{1D54D}",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      Vscr: "\u{1D4B1}",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      Vvdash: "\u22AA",
      vzigzag: "\u299A",
      Wcirc: "\u0174",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      Wedge: "\u22C0",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      Wfr: "\u{1D51A}",
      wfr: "\u{1D534}",
      Wopf: "\u{1D54E}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      Wscr: "\u{1D4B2}",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      Xfr: "\u{1D51B}",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      Xi: "\u039E",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      Xopf: "\u{1D54F}",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      Xscr: "\u{1D4B3}",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      Yacute: "\xDD",
      yacute: "\xFD",
      YAcy: "\u042F",
      yacy: "\u044F",
      Ycirc: "\u0176",
      ycirc: "\u0177",
      Ycy: "\u042B",
      ycy: "\u044B",
      yen: "\xA5",
      Yfr: "\u{1D51C}",
      yfr: "\u{1D536}",
      YIcy: "\u0407",
      yicy: "\u0457",
      Yopf: "\u{1D550}",
      yopf: "\u{1D56A}",
      Yscr: "\u{1D4B4}",
      yscr: "\u{1D4CE}",
      YUcy: "\u042E",
      yucy: "\u044E",
      Yuml: "\u0178",
      yuml: "\xFF",
      Zacute: "\u0179",
      zacute: "\u017A",
      Zcaron: "\u017D",
      zcaron: "\u017E",
      Zcy: "\u0417",
      zcy: "\u0437",
      Zdot: "\u017B",
      zdot: "\u017C",
      zeetrf: "\u2128",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      zeta: "\u03B6",
      Zfr: "\u2128",
      zfr: "\u{1D537}",
      ZHcy: "\u0416",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      Zopf: "\u2124",
      zopf: "\u{1D56B}",
      Zscr: "\u{1D4B5}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    });
    exports.entityMap = exports.HTML_ENTITIES;
  }
});

// node_modules/@xmldom/xmldom/lib/sax.js
var require_sax = __commonJS({
  "node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
    var NAMESPACE = require_conventions().NAMESPACE;
    var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
    var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
    var S_TAG = 0;
    var S_ATTR = 1;
    var S_ATTR_SPACE = 2;
    var S_EQ = 3;
    var S_ATTR_NOQUOT_VALUE = 4;
    var S_ATTR_END = 5;
    var S_TAG_SPACE = 6;
    var S_TAG_CLOSE = 7;
    function ParseError(message, locator) {
      this.message = message;
      this.locator = locator;
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, ParseError);
    }
    ParseError.prototype = new Error();
    ParseError.prototype.name = ParseError.name;
    function XMLReader() {
    }
    XMLReader.prototype = {
      parse: function(source, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = {});
        parse2(
          source,
          defaultNSMap,
          entityMap,
          domBuilder,
          this.errorHandler
        );
        domBuilder.endDocument();
      }
    };
    function parse2(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
      function fixedFromCharCode(code) {
        if (code > 65535) {
          code -= 65536;
          var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        } else {
          return String.fromCharCode(code);
        }
      }
      function entityReplacer(a2) {
        var k = a2.slice(1, -1);
        if (Object.hasOwnProperty.call(entityMap, k)) {
          return entityMap[k];
        } else if (k.charAt(0) === "#") {
          return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
        } else {
          errorHandler.error("entity not found:" + a2);
          return a2;
        }
      }
      function appendText(end2) {
        if (end2 > start) {
          var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
          locator && position(start);
          domBuilder.characters(xt, 0, end2 - start);
          start = end2;
        }
      }
      function position(p2, m2) {
        while (p2 >= lineEnd && (m2 = linePattern.exec(source))) {
          lineStart = m2.index;
          lineEnd = lineStart + m2[0].length;
          locator.lineNumber++;
        }
        locator.columnNumber = p2 - lineStart + 1;
      }
      var lineStart = 0;
      var lineEnd = 0;
      var linePattern = /.*(?:\r\n?|\n)|.*$/g;
      var locator = domBuilder.locator;
      var parseStack2 = [{ currentNSMap: defaultNSMapCopy }];
      var closeMap = {};
      var start = 0;
      while (true) {
        try {
          var tagStart = source.indexOf("<", start);
          if (tagStart < 0) {
            if (!source.substr(start).match(/^\s*$/)) {
              var doc = domBuilder.doc;
              var text2 = doc.createTextNode(source.substr(start));
              doc.appendChild(text2);
              domBuilder.currentElement = text2;
            }
            return;
          }
          if (tagStart > start) {
            appendText(tagStart);
          }
          switch (source.charAt(tagStart + 1)) {
            case "/":
              var end = source.indexOf(">", tagStart + 3);
              var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
              var config = parseStack2.pop();
              if (end < 0) {
                tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                end = tagStart + 1 + tagName.length;
              } else if (tagName.match(/\s</)) {
                tagName = tagName.replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " maybe not complete");
                end = tagStart + 1 + tagName.length;
              }
              var localNSMap = config.localNSMap;
              var endMatch = config.tagName == tagName;
              var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
              if (endIgnoreCaseMach) {
                domBuilder.endElement(config.uri, config.localName, tagName);
                if (localNSMap) {
                  for (var prefix in localNSMap) {
                    if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                      domBuilder.endPrefixMapping(prefix);
                    }
                  }
                }
                if (!endMatch) {
                  errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                }
              } else {
                parseStack2.push(config);
              }
              end++;
              break;
            case "?":
              locator && position(tagStart);
              end = parseInstruction(source, tagStart, domBuilder);
              break;
            case "!":
              locator && position(tagStart);
              end = parseDCC(source, tagStart, domBuilder, errorHandler);
              break;
            default:
              locator && position(tagStart);
              var el = new ElementAttributes();
              var currentNSMap = parseStack2[parseStack2.length - 1].currentNSMap;
              var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
              var len = el.length;
              if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                el.closed = true;
                if (!entityMap.nbsp) {
                  errorHandler.warning("unclosed xml attribute");
                }
              }
              if (locator && len) {
                var locator2 = copyLocator(locator, {});
                for (var i = 0; i < len; i++) {
                  var a = el[i];
                  position(a.offset);
                  a.locator = copyLocator(locator, {});
                }
                domBuilder.locator = locator2;
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack2.push(el);
                }
                domBuilder.locator = locator;
              } else {
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack2.push(el);
                }
              }
              if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
              } else {
                end++;
              }
          }
        } catch (e) {
          if (e instanceof ParseError) {
            throw e;
          }
          errorHandler.error("element parse error: " + e);
          end = -1;
        }
        if (end > start) {
          start = end;
        } else {
          appendText(Math.max(tagStart, start) + 1);
        }
      }
    }
    function copyLocator(f2, t) {
      t.lineNumber = f2.lineNumber;
      t.columnNumber = f2.columnNumber;
      return t;
    }
    function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
      function addAttribute(qname, value2, startIndex) {
        if (el.attributeNames.hasOwnProperty(qname)) {
          errorHandler.fatalError("Attribute " + qname + " redefined");
        }
        el.addValue(
          qname,
          // @see https://www.w3.org/TR/xml/#AVNormalize
          // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
          // - recursive replacement of (DTD) entity references
          // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
          value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer),
          startIndex
        );
      }
      var attrName;
      var value;
      var p2 = ++start;
      var s3 = S_TAG;
      while (true) {
        var c2 = source.charAt(p2);
        switch (c2) {
          case "=":
            if (s3 === S_ATTR) {
              attrName = source.slice(start, p2);
              s3 = S_EQ;
            } else if (s3 === S_ATTR_SPACE) {
              s3 = S_EQ;
            } else {
              throw new Error("attribute equal must after attrName");
            }
            break;
          case "'":
          case '"':
            if (s3 === S_EQ || s3 === S_ATTR) {
              if (s3 === S_ATTR) {
                errorHandler.warning('attribute value must after "="');
                attrName = source.slice(start, p2);
              }
              start = p2 + 1;
              p2 = source.indexOf(c2, start);
              if (p2 > 0) {
                value = source.slice(start, p2);
                addAttribute(attrName, value, start - 1);
                s3 = S_ATTR_END;
              } else {
                throw new Error("attribute value no end '" + c2 + "' match");
              }
            } else if (s3 == S_ATTR_NOQUOT_VALUE) {
              value = source.slice(start, p2);
              addAttribute(attrName, value, start);
              errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c2 + ")!!");
              start = p2 + 1;
              s3 = S_ATTR_END;
            } else {
              throw new Error('attribute value must after "="');
            }
            break;
          case "/":
            switch (s3) {
              case S_TAG:
                el.setTagName(source.slice(start, p2));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                s3 = S_TAG_CLOSE;
                el.closed = true;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                break;
              case S_ATTR_SPACE:
                el.closed = true;
                break;
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            errorHandler.error("unexpected end of input");
            if (s3 == S_TAG) {
              el.setTagName(source.slice(start, p2));
            }
            return p2;
          case ">":
            switch (s3) {
              case S_TAG:
                el.setTagName(source.slice(start, p2));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                value = source.slice(start, p2);
                if (value.slice(-1) === "/") {
                  el.closed = true;
                  value = value.slice(0, -1);
                }
              case S_ATTR_SPACE:
                if (s3 === S_ATTR_SPACE) {
                  value = attrName;
                }
                if (s3 == S_ATTR_NOQUOT_VALUE) {
                  errorHandler.warning('attribute "' + value + '" missed quot(")!');
                  addAttribute(attrName, value, start);
                } else {
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                  }
                  addAttribute(value, value, start);
                }
                break;
              case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return p2;
          case "\x80":
            c2 = " ";
          default:
            if (c2 <= " ") {
              switch (s3) {
                case S_TAG:
                  el.setTagName(source.slice(start, p2));
                  s3 = S_TAG_SPACE;
                  break;
                case S_ATTR:
                  attrName = source.slice(start, p2);
                  s3 = S_ATTR_SPACE;
                  break;
                case S_ATTR_NOQUOT_VALUE:
                  var value = source.slice(start, p2);
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  addAttribute(attrName, value, start);
                case S_ATTR_END:
                  s3 = S_TAG_SPACE;
                  break;
              }
            } else {
              switch (s3) {
                case S_ATTR_SPACE:
                  var tagName = el.tagName;
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                  }
                  addAttribute(attrName, attrName, start);
                  start = p2;
                  s3 = S_ATTR;
                  break;
                case S_ATTR_END:
                  errorHandler.warning('attribute space is required"' + attrName + '"!!');
                case S_TAG_SPACE:
                  s3 = S_ATTR;
                  start = p2;
                  break;
                case S_EQ:
                  s3 = S_ATTR_NOQUOT_VALUE;
                  start = p2;
                  break;
                case S_TAG_CLOSE:
                  throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
        }
        p2++;
      }
    }
    function appendElement(el, domBuilder, currentNSMap) {
      var tagName = el.tagName;
      var localNSMap = null;
      var i = el.length;
      while (i--) {
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
          var prefix = a.prefix = qName.slice(0, nsp);
          var localName = qName.slice(nsp + 1);
          var nsPrefix = prefix === "xmlns" && localName;
        } else {
          localName = qName;
          prefix = null;
          nsPrefix = qName === "xmlns" && "";
        }
        a.localName = localName;
        if (nsPrefix !== false) {
          if (localNSMap == null) {
            localNSMap = {};
            _copy(currentNSMap, currentNSMap = {});
          }
          currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
          a.uri = NAMESPACE.XMLNS;
          domBuilder.startPrefixMapping(nsPrefix, value);
        }
      }
      var i = el.length;
      while (i--) {
        a = el[i];
        var prefix = a.prefix;
        if (prefix) {
          if (prefix === "xml") {
            a.uri = NAMESPACE.XML;
          }
          if (prefix !== "xmlns") {
            a.uri = currentNSMap[prefix || ""];
          }
        }
      }
      var nsp = tagName.indexOf(":");
      if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
      } else {
        prefix = null;
        localName = el.localName = tagName;
      }
      var ns = el.uri = currentNSMap[prefix || ""];
      domBuilder.startElement(ns, localName, tagName, el);
      if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
          for (prefix in localNSMap) {
            if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
              domBuilder.endPrefixMapping(prefix);
            }
          }
        }
      } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        return true;
      }
    }
    function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
      if (/^(?:script|textarea)$/i.test(tagName)) {
        var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
        var text2 = source.substring(elStartEnd + 1, elEndStart);
        if (/[&<]/.test(text2)) {
          if (/^script$/i.test(tagName)) {
            domBuilder.characters(text2, 0, text2.length);
            return elEndStart;
          }
          text2 = text2.replace(/&#?\w+;/g, entityReplacer);
          domBuilder.characters(text2, 0, text2.length);
          return elEndStart;
        }
      }
      return elStartEnd + 1;
    }
    function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
      var pos = closeMap[tagName];
      if (pos == null) {
        pos = source.lastIndexOf("</" + tagName + ">");
        if (pos < elStartEnd) {
          pos = source.lastIndexOf("</" + tagName);
        }
        closeMap[tagName] = pos;
      }
      return pos < elStartEnd;
    }
    function _copy(source, target) {
      for (var n in source) {
        if (Object.prototype.hasOwnProperty.call(source, n)) {
          target[n] = source[n];
        }
      }
    }
    function parseDCC(source, start, domBuilder, errorHandler) {
      var next = source.charAt(start + 2);
      switch (next) {
        case "-":
          if (source.charAt(start + 3) === "-") {
            var end = source.indexOf("-->", start + 4);
            if (end > start) {
              domBuilder.comment(source, start + 4, end - start - 4);
              return end + 3;
            } else {
              errorHandler.error("Unclosed comment");
              return -1;
            }
          } else {
            return -1;
          }
        default:
          if (source.substr(start + 3, 6) == "CDATA[") {
            var end = source.indexOf("]]>", start + 9);
            domBuilder.startCDATA();
            domBuilder.characters(source, start + 9, end - start - 9);
            domBuilder.endCDATA();
            return end + 3;
          }
          var matchs = split(source, start);
          var len = matchs.length;
          if (len > 1 && /!doctype/i.test(matchs[0][0])) {
            var name = matchs[1][0];
            var pubid = false;
            var sysid = false;
            if (len > 3) {
              if (/^public$/i.test(matchs[2][0])) {
                pubid = matchs[3][0];
                sysid = len > 4 && matchs[4][0];
              } else if (/^system$/i.test(matchs[2][0])) {
                sysid = matchs[3][0];
              }
            }
            var lastMatch = matchs[len - 1];
            domBuilder.startDTD(name, pubid, sysid);
            domBuilder.endDTD();
            return lastMatch.index + lastMatch[0].length;
          }
      }
      return -1;
    }
    function parseInstruction(source, start, domBuilder) {
      var end = source.indexOf("?>", start);
      if (end) {
        var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (match) {
          var len = match[0].length;
          domBuilder.processingInstruction(match[1], match[2]);
          return end + 2;
        } else {
          return -1;
        }
      }
      return -1;
    }
    function ElementAttributes() {
      this.attributeNames = {};
    }
    ElementAttributes.prototype = {
      setTagName: function(tagName) {
        if (!tagNamePattern.test(tagName)) {
          throw new Error("invalid tagName:" + tagName);
        }
        this.tagName = tagName;
      },
      addValue: function(qName, value, offset) {
        if (!tagNamePattern.test(qName)) {
          throw new Error("invalid attribute:" + qName);
        }
        this.attributeNames[qName] = this.length;
        this[this.length++] = { qName, value, offset };
      },
      length: 0,
      getLocalName: function(i) {
        return this[i].localName;
      },
      getLocator: function(i) {
        return this[i].locator;
      },
      getQName: function(i) {
        return this[i].qName;
      },
      getURI: function(i) {
        return this[i].uri;
      },
      getValue: function(i) {
        return this[i].value;
      }
      //	,getIndex:function(uri, localName)){
      //		if(localName){
      //
      //		}else{
      //			var qName = uri
      //		}
      //	},
      //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
      //	getType:function(uri,localName){}
      //	getType:function(i){},
    };
    function split(source, start) {
      var match;
      var buf = [];
      var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      reg.lastIndex = start;
      reg.exec(source);
      while (match = reg.exec(source)) {
        buf.push(match);
        if (match[1])
          return buf;
      }
    }
    exports.XMLReader = XMLReader;
    exports.ParseError = ParseError;
  }
});

// node_modules/@xmldom/xmldom/lib/dom-parser.js
var require_dom_parser = __commonJS({
  "node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
    var conventions = require_conventions();
    var dom = require_dom();
    var entities = require_entities();
    var sax = require_sax();
    var DOMImplementation = dom.DOMImplementation;
    var NAMESPACE = conventions.NAMESPACE;
    var ParseError = sax.ParseError;
    var XMLReader = sax.XMLReader;
    function normalizeLineEndings(input) {
      return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
    }
    function DOMParser3(options2) {
      this.options = options2 || { locator: {} };
    }
    DOMParser3.prototype.parseFromString = function(source, mimeType) {
      var options2 = this.options;
      var sax2 = new XMLReader();
      var domBuilder = options2.domBuilder || new DOMHandler();
      var errorHandler = options2.errorHandler;
      var locator = options2.locator;
      var defaultNSMap = options2.xmlns || {};
      var isHTML = /\/x?html?$/.test(mimeType);
      var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
      if (locator) {
        domBuilder.setDocumentLocator(locator);
      }
      sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
      sax2.domBuilder = options2.domBuilder || domBuilder;
      if (isHTML) {
        defaultNSMap[""] = NAMESPACE.HTML;
      }
      defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
      var normalize = options2.normalizeLineEndings || normalizeLineEndings;
      if (source && typeof source === "string") {
        sax2.parse(
          normalize(source),
          defaultNSMap,
          entityMap
        );
      } else {
        sax2.errorHandler.error("invalid doc source");
      }
      return domBuilder.doc;
    };
    function buildErrorHandler(errorImpl, domBuilder, locator) {
      if (!errorImpl) {
        if (domBuilder instanceof DOMHandler) {
          return domBuilder;
        }
        errorImpl = domBuilder;
      }
      var errorHandler = {};
      var isCallback = errorImpl instanceof Function;
      locator = locator || {};
      function build(key) {
        var fn = errorImpl[key];
        if (!fn && isCallback) {
          fn = errorImpl.length == 2 ? function(msg) {
            errorImpl(key, msg);
          } : errorImpl;
        }
        errorHandler[key] = fn && function(msg) {
          fn("[xmldom " + key + "]	" + msg + _locator(locator));
        } || function() {
        };
      }
      build("warning");
      build("error");
      build("fatalError");
      return errorHandler;
    }
    function DOMHandler() {
      this.cdata = false;
    }
    function position(locator, node) {
      node.lineNumber = locator.lineNumber;
      node.columnNumber = locator.columnNumber;
    }
    DOMHandler.prototype = {
      startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null);
        if (this.locator) {
          this.doc.documentURI = this.locator.systemId;
        }
      },
      startElement: function(namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for (var i = 0; i < len; i++) {
          var namespaceURI = attrs.getURI(i);
          var value = attrs.getValue(i);
          var qName = attrs.getQName(i);
          var attr = doc.createAttributeNS(namespaceURI, qName);
          this.locator && position(attrs.getLocator(i), attr);
          attr.value = attr.nodeValue = value;
          el.setAttributeNode(attr);
        }
      },
      endElement: function(namespaceURI, localName, qName) {
        var current = this.currentElement;
        var tagName = current.tagName;
        this.currentElement = current.parentNode;
      },
      startPrefixMapping: function(prefix, uri) {
      },
      endPrefixMapping: function(prefix) {
      },
      processingInstruction: function(target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
      },
      ignorableWhitespace: function(ch, start, length) {
      },
      characters: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        if (chars) {
          if (this.cdata) {
            var charNode = this.doc.createCDATASection(chars);
          } else {
            var charNode = this.doc.createTextNode(chars);
          }
          if (this.currentElement) {
            this.currentElement.appendChild(charNode);
          } else if (/^\s*$/.test(chars)) {
            this.doc.appendChild(charNode);
          }
          this.locator && position(this.locator, charNode);
        }
      },
      skippedEntity: function(name) {
      },
      endDocument: function() {
        this.doc.normalize();
      },
      setDocumentLocator: function(locator) {
        if (this.locator = locator) {
          locator.lineNumber = 0;
        }
      },
      //LexicalHandler
      comment: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
      },
      startCDATA: function() {
        this.cdata = true;
      },
      endCDATA: function() {
        this.cdata = false;
      },
      startDTD: function(name, publicId, systemId) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
          var dt = impl.createDocumentType(name, publicId, systemId);
          this.locator && position(this.locator, dt);
          appendElement(this, dt);
          this.doc.doctype = dt;
        }
      },
      /**
       * @see org.xml.sax.ErrorHandler
       * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
       */
      warning: function(error) {
        console.warn("[xmldom warning]	" + error, _locator(this.locator));
      },
      error: function(error) {
        console.error("[xmldom error]	" + error, _locator(this.locator));
      },
      fatalError: function(error) {
        throw new ParseError(error, this.locator);
      }
    };
    function _locator(l2) {
      if (l2) {
        return "\n@" + (l2.systemId || "") + "#[line:" + l2.lineNumber + ",col:" + l2.columnNumber + "]";
      }
    }
    function _toString(chars, start, length) {
      if (typeof chars == "string") {
        return chars.substr(start, length);
      } else {
        if (chars.length >= start + length || start) {
          return new java.lang.String(chars, start, length) + "";
        }
        return chars;
      }
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
      DOMHandler.prototype[key] = function() {
        return null;
      };
    });
    function appendElement(hander, node) {
      if (!hander.currentElement) {
        hander.doc.appendChild(node);
      } else {
        hander.currentElement.appendChild(node);
      }
    }
    exports.__DOMHandler = DOMHandler;
    exports.normalizeLineEndings = normalizeLineEndings;
    exports.DOMParser = DOMParser3;
  }
});

// node_modules/@xmldom/xmldom/lib/index.js
var require_lib = __commonJS({
  "node_modules/@xmldom/xmldom/lib/index.js"(exports) {
    var dom = require_dom();
    exports.DOMImplementation = dom.DOMImplementation;
    exports.XMLSerializer = dom.XMLSerializer;
    exports.DOMParser = require_dom_parser().DOMParser;
  }
});

// ../../../../../node_modules/consola/dist/core.mjs
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p2, c2) => _defu(p2, c2, "", merger), {})
  );
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function isLogObj(arg) {
  if (!isPlainObject(arg)) {
    return false;
  }
  if (!arg.message && !arg.args) {
    return false;
  }
  if (arg.stack) {
    return false;
  }
  return true;
}
function _normalizeLogLevel(input, types = {}, defaultLevel = 3) {
  if (input === void 0) {
    return defaultLevel;
  }
  if (typeof input === "number") {
    return input;
  }
  if (types[input] && types[input].level !== void 0) {
    return types[input].level;
  }
  return defaultLevel;
}
function createConsola(options2 = {}) {
  return new Consola(options2);
}
var LogLevels, LogTypes, defu, paused, queue, Consola;
var init_core = __esm({
  "../../../../../node_modules/consola/dist/core.mjs"() {
    LogLevels = {
      silent: Number.NEGATIVE_INFINITY,
      fatal: 0,
      error: 0,
      warn: 1,
      log: 2,
      info: 3,
      success: 3,
      fail: 3,
      ready: 3,
      start: 3,
      box: 3,
      debug: 4,
      trace: 5,
      verbose: Number.POSITIVE_INFINITY
    };
    LogTypes = {
      // Silent
      silent: {
        level: -1
      },
      // Level 0
      fatal: {
        level: LogLevels.fatal
      },
      error: {
        level: LogLevels.error
      },
      // Level 1
      warn: {
        level: LogLevels.warn
      },
      // Level 2
      log: {
        level: LogLevels.log
      },
      // Level 3
      info: {
        level: LogLevels.info
      },
      success: {
        level: LogLevels.success
      },
      fail: {
        level: LogLevels.fail
      },
      ready: {
        level: LogLevels.info
      },
      start: {
        level: LogLevels.info
      },
      box: {
        level: LogLevels.info
      },
      // Level 4
      debug: {
        level: LogLevels.debug
      },
      // Level 5
      trace: {
        level: LogLevels.trace
      },
      // Verbose
      verbose: {
        level: LogLevels.verbose
      }
    };
    defu = createDefu();
    paused = false;
    queue = [];
    Consola = class _Consola {
      constructor(options2 = {}) {
        const types = options2.types || LogTypes;
        this.options = defu(
          {
            ...options2,
            defaults: { ...options2.defaults },
            level: _normalizeLogLevel(options2.level, types),
            reporters: [...options2.reporters || []]
          },
          {
            types: LogTypes,
            throttle: 1e3,
            throttleMin: 5,
            formatOptions: {
              date: true,
              colors: false,
              compact: true
            }
          }
        );
        for (const type in types) {
          const defaults = {
            type,
            ...this.options.defaults,
            ...types[type]
          };
          this[type] = this._wrapLogFn(defaults);
          this[type].raw = this._wrapLogFn(
            defaults,
            true
          );
        }
        if (this.options.mockFn) {
          this.mockTypes();
        }
        this._lastLog = {};
      }
      get level() {
        return this.options.level;
      }
      set level(level) {
        this.options.level = _normalizeLogLevel(
          level,
          this.options.types,
          this.options.level
        );
      }
      prompt(message, opts) {
        if (!this.options.prompt) {
          throw new Error("prompt is not supported!");
        }
        return this.options.prompt(message, opts);
      }
      create(options2) {
        const instance = new _Consola({
          ...this.options,
          ...options2
        });
        if (this._mockFn) {
          instance.mockTypes(this._mockFn);
        }
        return instance;
      }
      withDefaults(defaults) {
        return this.create({
          ...this.options,
          defaults: {
            ...this.options.defaults,
            ...defaults
          }
        });
      }
      withTag(tag) {
        return this.withDefaults({
          tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + tag : tag
        });
      }
      addReporter(reporter) {
        this.options.reporters.push(reporter);
        return this;
      }
      removeReporter(reporter) {
        if (reporter) {
          const i = this.options.reporters.indexOf(reporter);
          if (i >= 0) {
            return this.options.reporters.splice(i, 1);
          }
        } else {
          this.options.reporters.splice(0);
        }
        return this;
      }
      setReporters(reporters) {
        this.options.reporters = Array.isArray(reporters) ? reporters : [reporters];
        return this;
      }
      wrapAll() {
        this.wrapConsole();
        this.wrapStd();
      }
      restoreAll() {
        this.restoreConsole();
        this.restoreStd();
      }
      wrapConsole() {
        for (const type in this.options.types) {
          if (!console["__" + type]) {
            console["__" + type] = console[type];
          }
          console[type] = this[type].raw;
        }
      }
      restoreConsole() {
        for (const type in this.options.types) {
          if (console["__" + type]) {
            console[type] = console["__" + type];
            delete console["__" + type];
          }
        }
      }
      wrapStd() {
        this._wrapStream(this.options.stdout, "log");
        this._wrapStream(this.options.stderr, "log");
      }
      _wrapStream(stream, type) {
        if (!stream) {
          return;
        }
        if (!stream.__write) {
          stream.__write = stream.write;
        }
        stream.write = (data) => {
          this[type].raw(String(data).trim());
        };
      }
      restoreStd() {
        this._restoreStream(this.options.stdout);
        this._restoreStream(this.options.stderr);
      }
      _restoreStream(stream) {
        if (!stream) {
          return;
        }
        if (stream.__write) {
          stream.write = stream.__write;
          delete stream.__write;
        }
      }
      pauseLogs() {
        paused = true;
      }
      resumeLogs() {
        paused = false;
        const _queue = queue.splice(0);
        for (const item of _queue) {
          item[0]._logFn(item[1], item[2]);
        }
      }
      mockTypes(mockFn) {
        const _mockFn = mockFn || this.options.mockFn;
        this._mockFn = _mockFn;
        if (typeof _mockFn !== "function") {
          return;
        }
        for (const type in this.options.types) {
          this[type] = _mockFn(type, this.options.types[type]) || this[type];
          this[type].raw = this[type];
        }
      }
      _wrapLogFn(defaults, isRaw) {
        return (...args) => {
          if (paused) {
            queue.push([this, defaults, args, isRaw]);
            return;
          }
          return this._logFn(defaults, args, isRaw);
        };
      }
      _logFn(defaults, args, isRaw) {
        if ((defaults.level || 0) > this.level) {
          return false;
        }
        const logObj = {
          date: /* @__PURE__ */ new Date(),
          args: [],
          ...defaults,
          level: _normalizeLogLevel(defaults.level, this.options.types)
        };
        if (!isRaw && args.length === 1 && isLogObj(args[0])) {
          Object.assign(logObj, args[0]);
        } else {
          logObj.args = [...args];
        }
        if (logObj.message) {
          logObj.args.unshift(logObj.message);
          delete logObj.message;
        }
        if (logObj.additional) {
          if (!Array.isArray(logObj.additional)) {
            logObj.additional = logObj.additional.split("\n");
          }
          logObj.args.push("\n" + logObj.additional.join("\n"));
          delete logObj.additional;
        }
        logObj.type = typeof logObj.type === "string" ? logObj.type.toLowerCase() : "log";
        logObj.tag = typeof logObj.tag === "string" ? logObj.tag : "";
        const resolveLog = (newLog = false) => {
          const repeated = (this._lastLog.count || 0) - this.options.throttleMin;
          if (this._lastLog.object && repeated > 0) {
            const args2 = [...this._lastLog.object.args];
            if (repeated > 1) {
              args2.push(`(repeated ${repeated} times)`);
            }
            this._log({ ...this._lastLog.object, args: args2 });
            this._lastLog.count = 1;
          }
          if (newLog) {
            this._lastLog.object = logObj;
            this._log(logObj);
          }
        };
        clearTimeout(this._lastLog.timeout);
        const diffTime = this._lastLog.time && logObj.date ? logObj.date.getTime() - this._lastLog.time.getTime() : 0;
        this._lastLog.time = logObj.date;
        if (diffTime < this.options.throttle) {
          try {
            const serializedLog = JSON.stringify([
              logObj.type,
              logObj.tag,
              logObj.args
            ]);
            const isSameLog = this._lastLog.serialized === serializedLog;
            this._lastLog.serialized = serializedLog;
            if (isSameLog) {
              this._lastLog.count = (this._lastLog.count || 0) + 1;
              if (this._lastLog.count > this.options.throttleMin) {
                this._lastLog.timeout = setTimeout(
                  resolveLog,
                  this.options.throttle
                );
                return;
              }
            }
          } catch {
          }
        }
        resolveLog(true);
      }
      _log(logObj) {
        for (const reporter of this.options.reporters) {
          reporter.log(logObj, {
            options: this.options
          });
        }
      }
    };
    Consola.prototype.add = Consola.prototype.addReporter;
    Consola.prototype.remove = Consola.prototype.removeReporter;
    Consola.prototype.clear = Consola.prototype.removeReporter;
    Consola.prototype.withScope = Consola.prototype.withTag;
    Consola.prototype.mock = Consola.prototype.mockTypes;
    Consola.prototype.pause = Consola.prototype.pauseLogs;
    Consola.prototype.resume = Consola.prototype.resumeLogs;
  }
});

// ../../../../../node_modules/consola/dist/shared/consola.06ad8a64.mjs
import { formatWithOptions } from "util";
import { sep } from "path";
function parseStack(stack) {
  const cwd = process.cwd() + sep;
  const lines = stack.split("\n").splice(1).map((l2) => l2.trim().replace("file://", "").replace(cwd, ""));
  return lines;
}
function writeStream(data, stream) {
  const write = stream.__write || stream.write;
  return write.call(stream, data);
}
var bracket, BasicReporter;
var init_consola_06ad8a64 = __esm({
  "../../../../../node_modules/consola/dist/shared/consola.06ad8a64.mjs"() {
    bracket = (x) => x ? `[${x}]` : "";
    BasicReporter = class {
      formatStack(stack, opts) {
        return "  " + parseStack(stack).join("\n  ");
      }
      formatArgs(args, opts) {
        const _args = args.map((arg) => {
          if (arg && typeof arg.stack === "string") {
            return arg.message + "\n" + this.formatStack(arg.stack, opts);
          }
          return arg;
        });
        return formatWithOptions(opts, ..._args);
      }
      formatDate(date, opts) {
        return opts.date ? date.toLocaleTimeString() : "";
      }
      filterAndJoin(arr) {
        return arr.filter(Boolean).join(" ");
      }
      formatLogObj(logObj, opts) {
        const message = this.formatArgs(logObj.args, opts);
        if (logObj.type === "box") {
          return "\n" + [
            bracket(logObj.tag),
            logObj.title && logObj.title,
            ...message.split("\n")
          ].filter(Boolean).map((l2) => " > " + l2).join("\n") + "\n";
        }
        return this.filterAndJoin([
          bracket(logObj.type),
          bracket(logObj.tag),
          message
        ]);
      }
      log(logObj, ctx) {
        const line = this.formatLogObj(logObj, {
          columns: ctx.options.stdout.columns || 0,
          ...ctx.options.formatOptions
        });
        return writeStream(
          line + "\n",
          logObj.level < 2 ? ctx.options.stderr || process.stderr : ctx.options.stdout || process.stdout
        );
      }
    };
  }
});

// ../../../../../node_modules/consola/dist/utils.mjs
import * as tty from "tty";
function replaceClose(index, string, close, replace, head = string.slice(0, Math.max(0, index)) + replace, tail = string.slice(Math.max(0, index + close.length)), next = tail.indexOf(close)) {
  return head + (next < 0 ? tail : replaceClose(next, tail, close, replace));
}
function clearBleed(index, string, open, close, replace) {
  return index < 0 ? open + string + close : open + replaceClose(index, string, close, replace) + close;
}
function filterEmpty(open, close, replace = open, at = open.length + 1) {
  return (string) => string || !(string === "" || string === void 0) ? clearBleed(
    ("" + string).indexOf(close, at),
    string,
    open,
    close,
    replace
  ) : "";
}
function init(open, close, replace) {
  return filterEmpty(`\x1B[${open}m`, `\x1B[${close}m`, replace);
}
function createColors(useColor = isColorSupported) {
  return useColor ? colorDefs : Object.fromEntries(Object.keys(colorDefs).map((key) => [key, String]));
}
function getColor(color, fallback = "reset") {
  return colors[color] || colors[fallback];
}
function stripAnsi(text2) {
  return text2.replace(new RegExp(ansiRegex, "g"), "");
}
function box(text2, _opts = {}) {
  const opts = {
    ..._opts,
    style: {
      ...defaultStyle,
      ..._opts.style
    }
  };
  const textLines = text2.split("\n");
  const boxLines = [];
  const _color = getColor(opts.style.borderColor);
  const borderStyle = {
    ...typeof opts.style.borderStyle === "string" ? boxStylePresets[opts.style.borderStyle] || boxStylePresets.solid : opts.style.borderStyle
  };
  if (_color) {
    for (const key in borderStyle) {
      borderStyle[key] = _color(
        borderStyle[key]
      );
    }
  }
  const paddingOffset = opts.style.padding % 2 === 0 ? opts.style.padding : opts.style.padding + 1;
  const height = textLines.length + paddingOffset;
  const width = Math.max(...textLines.map((line) => line.length)) + paddingOffset;
  const widthOffset = width + paddingOffset;
  const leftSpace = opts.style.marginLeft > 0 ? " ".repeat(opts.style.marginLeft) : "";
  if (opts.style.marginTop > 0) {
    boxLines.push("".repeat(opts.style.marginTop));
  }
  if (opts.title) {
    const left = borderStyle.h.repeat(
      Math.floor((width - stripAnsi(opts.title).length) / 2)
    );
    const right = borderStyle.h.repeat(
      width - stripAnsi(opts.title).length - stripAnsi(left).length + paddingOffset
    );
    boxLines.push(
      `${leftSpace}${borderStyle.tl}${left}${opts.title}${right}${borderStyle.tr}`
    );
  } else {
    boxLines.push(
      `${leftSpace}${borderStyle.tl}${borderStyle.h.repeat(widthOffset)}${borderStyle.tr}`
    );
  }
  const valignOffset = opts.style.valign === "center" ? Math.floor((height - textLines.length) / 2) : opts.style.valign === "top" ? height - textLines.length - paddingOffset : height - textLines.length;
  for (let i = 0; i < height; i++) {
    if (i < valignOffset || i >= valignOffset + textLines.length) {
      boxLines.push(
        `${leftSpace}${borderStyle.v}${" ".repeat(widthOffset)}${borderStyle.v}`
      );
    } else {
      const line = textLines[i - valignOffset];
      const left = " ".repeat(paddingOffset);
      const right = " ".repeat(width - stripAnsi(line).length);
      boxLines.push(
        `${leftSpace}${borderStyle.v}${left}${line}${right}${borderStyle.v}`
      );
    }
  }
  boxLines.push(
    `${leftSpace}${borderStyle.bl}${borderStyle.h.repeat(widthOffset)}${borderStyle.br}`
  );
  if (opts.style.marginBottom > 0) {
    boxLines.push("".repeat(opts.style.marginBottom));
  }
  return boxLines.join("\n");
}
var env, argv, platform, isDisabled, isForced, isWindows, isDumbTerminal, isCompatibleTerminal, isCI, isColorSupported, colorDefs, colors, ansiRegex, boxStylePresets, defaultStyle;
var init_utils = __esm({
  "../../../../../node_modules/consola/dist/utils.mjs"() {
    ({
      env = {},
      argv = [],
      platform = ""
    } = typeof process === "undefined" ? {} : process);
    isDisabled = "NO_COLOR" in env || argv.includes("--no-color");
    isForced = "FORCE_COLOR" in env || argv.includes("--color");
    isWindows = platform === "win32";
    isDumbTerminal = env.TERM === "dumb";
    isCompatibleTerminal = tty && tty.isatty && tty.isatty(1) && env.TERM && !isDumbTerminal;
    isCI = "CI" in env && ("GITHUB_ACTIONS" in env || "GITLAB_CI" in env || "CIRCLECI" in env);
    isColorSupported = !isDisabled && (isForced || isWindows && !isDumbTerminal || isCompatibleTerminal || isCI);
    colorDefs = {
      reset: init(0, 0),
      bold: init(1, 22, "\x1B[22m\x1B[1m"),
      dim: init(2, 22, "\x1B[22m\x1B[2m"),
      italic: init(3, 23),
      underline: init(4, 24),
      inverse: init(7, 27),
      hidden: init(8, 28),
      strikethrough: init(9, 29),
      black: init(30, 39),
      red: init(31, 39),
      green: init(32, 39),
      yellow: init(33, 39),
      blue: init(34, 39),
      magenta: init(35, 39),
      cyan: init(36, 39),
      white: init(37, 39),
      gray: init(90, 39),
      bgBlack: init(40, 49),
      bgRed: init(41, 49),
      bgGreen: init(42, 49),
      bgYellow: init(43, 49),
      bgBlue: init(44, 49),
      bgMagenta: init(45, 49),
      bgCyan: init(46, 49),
      bgWhite: init(47, 49),
      blackBright: init(90, 39),
      redBright: init(91, 39),
      greenBright: init(92, 39),
      yellowBright: init(93, 39),
      blueBright: init(94, 39),
      magentaBright: init(95, 39),
      cyanBright: init(96, 39),
      whiteBright: init(97, 39),
      bgBlackBright: init(100, 49),
      bgRedBright: init(101, 49),
      bgGreenBright: init(102, 49),
      bgYellowBright: init(103, 49),
      bgBlueBright: init(104, 49),
      bgMagentaBright: init(105, 49),
      bgCyanBright: init(106, 49),
      bgWhiteBright: init(107, 49)
    };
    colors = createColors();
    ansiRegex = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
    ].join("|");
    boxStylePresets = {
      solid: {
        tl: "\u250C",
        tr: "\u2510",
        bl: "\u2514",
        br: "\u2518",
        h: "\u2500",
        v: "\u2502"
      },
      double: {
        tl: "\u2554",
        tr: "\u2557",
        bl: "\u255A",
        br: "\u255D",
        h: "\u2550",
        v: "\u2551"
      },
      doubleSingle: {
        tl: "\u2553",
        tr: "\u2556",
        bl: "\u2559",
        br: "\u255C",
        h: "\u2500",
        v: "\u2551"
      },
      doubleSingleRounded: {
        tl: "\u256D",
        tr: "\u256E",
        bl: "\u2570",
        br: "\u256F",
        h: "\u2500",
        v: "\u2551"
      },
      singleThick: {
        tl: "\u250F",
        tr: "\u2513",
        bl: "\u2517",
        br: "\u251B",
        h: "\u2501",
        v: "\u2503"
      },
      singleDouble: {
        tl: "\u2552",
        tr: "\u2555",
        bl: "\u2558",
        br: "\u255B",
        h: "\u2550",
        v: "\u2502"
      },
      singleDoubleRounded: {
        tl: "\u256D",
        tr: "\u256E",
        bl: "\u2570",
        br: "\u256F",
        h: "\u2550",
        v: "\u2502"
      },
      rounded: {
        tl: "\u256D",
        tr: "\u256E",
        bl: "\u2570",
        br: "\u256F",
        h: "\u2500",
        v: "\u2502"
      }
    };
    defaultStyle = {
      borderColor: "white",
      borderStyle: "rounded",
      valign: "center",
      padding: 2,
      marginLeft: 1,
      marginTop: 1,
      marginBottom: 1
    };
  }
});

// ../../../../../node_modules/consola/dist/chunks/prompt.mjs
var prompt_exports = {};
__export(prompt_exports, {
  prompt: () => prompt
});
import { stdin, stdout } from "process";
import f from "readline";
import { WriteStream } from "tty";
import require$$0 from "tty";
function z({ onlyFirst: t = false } = {}) {
  const u = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
  return new RegExp(u, t ? void 0 : "g");
}
function $(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a \`string\`, got \`${typeof t}\``);
  return t.replace(z(), "");
}
function c(t, u = {}) {
  if (typeof t != "string" || t.length === 0 || (u = { ambiguousIsNarrow: true, ...u }, t = $(t), t.length === 0))
    return 0;
  t = t.replace(Y(), "  ");
  const F = u.ambiguousIsNarrow ? 1 : 2;
  let e = 0;
  for (const s3 of t) {
    const C = s3.codePointAt(0);
    if (C <= 31 || C >= 127 && C <= 159 || C >= 768 && C <= 879)
      continue;
    switch (K.eastAsianWidth(s3)) {
      case "F":
      case "W":
        e += 2;
        break;
      case "A":
        e += F;
        break;
      default:
        e += 1;
    }
  }
  return e;
}
function U() {
  const t = /* @__PURE__ */ new Map();
  for (const [u, F] of Object.entries(r)) {
    for (const [e, s3] of Object.entries(F))
      r[e] = { open: `\x1B[${s3[0]}m`, close: `\x1B[${s3[1]}m` }, F[e] = r[e], t.set(s3[0], s3[1]);
    Object.defineProperty(r, u, { value: F, enumerable: false });
  }
  return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi = L(), r.color.ansi256 = M(), r.color.ansi16m = T(), r.bgColor.ansi = L(v), r.bgColor.ansi256 = M(v), r.bgColor.ansi16m = T(v), Object.defineProperties(r, { rgbToAnsi256: { value: (u, F, e) => u === F && F === e ? u < 8 ? 16 : u > 248 ? 231 : Math.round((u - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(u / 255 * 5) + 6 * Math.round(F / 255 * 5) + Math.round(e / 255 * 5), enumerable: false }, hexToRgb: { value: (u) => {
    const F = /[a-f\d]{6}|[a-f\d]{3}/i.exec(u.toString(16));
    if (!F)
      return [0, 0, 0];
    let [e] = F;
    e.length === 3 && (e = [...e].map((C) => C + C).join(""));
    const s3 = Number.parseInt(e, 16);
    return [s3 >> 16 & 255, s3 >> 8 & 255, s3 & 255];
  }, enumerable: false }, hexToAnsi256: { value: (u) => r.rgbToAnsi256(...r.hexToRgb(u)), enumerable: false }, ansi256ToAnsi: { value: (u) => {
    if (u < 8)
      return 30 + u;
    if (u < 16)
      return 90 + (u - 8);
    let F, e, s3;
    if (u >= 232)
      F = ((u - 232) * 10 + 8) / 255, e = F, s3 = F;
    else {
      u -= 16;
      const i = u % 36;
      F = Math.floor(u / 36) / 5, e = Math.floor(i / 6) / 5, s3 = i % 6 / 5;
    }
    const C = Math.max(F, e, s3) * 2;
    if (C === 0)
      return 30;
    let D = 30 + (Math.round(s3) << 2 | Math.round(e) << 1 | Math.round(F));
    return C === 2 && (D += 60), D;
  }, enumerable: false }, rgbToAnsi: { value: (u, F, e) => r.ansi256ToAnsi(r.rgbToAnsi256(u, F, e)), enumerable: false }, hexToAnsi: { value: (u) => r.ansi256ToAnsi(r.hexToAnsi256(u)), enumerable: false } }), r;
}
function P(t, u, F) {
  return String(t).normalize().replace(/\r\n/g, `
`).split(`
`).map((e) => uD(e, u, F)).join(`
`);
}
function FD(t, u) {
  if (t === u)
    return;
  const F = t.split(`
`), e = u.split(`
`), s3 = [];
  for (let C = 0; C < Math.max(F.length, e.length); C++)
    F[C] !== e[C] && s3.push(C);
  return s3;
}
function g(t, u) {
  t.isTTY && t.setRawMode(u);
}
async function prompt(message, opts = {}) {
  if (!opts.type || opts.type === "text") {
    return await text({
      message,
      defaultValue: opts.default,
      placeholder: opts.placeholder,
      initialValue: opts.initial
    });
  }
  if (opts.type === "confirm") {
    return await confirm({
      message,
      initialValue: opts.initial
    });
  }
  if (opts.type === "select") {
    return await select({
      message,
      options: opts.options.map(
        (o) => typeof o === "string" ? { value: o, label: o } : o
      )
    });
  }
  if (opts.type === "multiselect") {
    return await multiselect({
      message,
      options: opts.options.map(
        (o) => typeof o === "string" ? { value: o, label: o } : o
      ),
      required: opts.required
    });
  }
  throw new Error(`Unknown prompt type: ${opts.type}`);
}
var ESC, CSI, beep, cursor, scroll, erase, src, picocolors, tty2, isColorSupported2, formatter, replaceClose2, createColors2, picocolorsExports, l, m, G, K, Y, v, L, M, T, r, Z, H, q, p, J, b, W, Q, I, w, N, j, X, _, DD, uD, R, V, tD, h, sD, iD, ED, oD, unicode, s, S_STEP_ACTIVE, S_STEP_CANCEL, S_STEP_ERROR, S_STEP_SUBMIT, S_BAR, S_BAR_END, S_RADIO_ACTIVE, S_RADIO_INACTIVE, S_CHECKBOX_ACTIVE, S_CHECKBOX_SELECTED, S_CHECKBOX_INACTIVE, symbol, text, confirm, select, multiselect;
var init_prompt = __esm({
  "../../../../../node_modules/consola/dist/chunks/prompt.mjs"() {
    init_consola_36c0034f();
    init_utils();
    init_core();
    init_consola_06ad8a64();
    ESC = "\x1B";
    CSI = `${ESC}[`;
    beep = "\x07";
    cursor = {
      to(x, y) {
        if (!y)
          return `${CSI}${x + 1}G`;
        return `${CSI}${y + 1};${x + 1}H`;
      },
      move(x, y) {
        let ret = "";
        if (x < 0)
          ret += `${CSI}${-x}D`;
        else if (x > 0)
          ret += `${CSI}${x}C`;
        if (y < 0)
          ret += `${CSI}${-y}A`;
        else if (y > 0)
          ret += `${CSI}${y}B`;
        return ret;
      },
      up: (count = 1) => `${CSI}${count}A`,
      down: (count = 1) => `${CSI}${count}B`,
      forward: (count = 1) => `${CSI}${count}C`,
      backward: (count = 1) => `${CSI}${count}D`,
      nextLine: (count = 1) => `${CSI}E`.repeat(count),
      prevLine: (count = 1) => `${CSI}F`.repeat(count),
      left: `${CSI}G`,
      hide: `${CSI}?25l`,
      show: `${CSI}?25h`,
      save: `${ESC}7`,
      restore: `${ESC}8`
    };
    scroll = {
      up: (count = 1) => `${CSI}S`.repeat(count),
      down: (count = 1) => `${CSI}T`.repeat(count)
    };
    erase = {
      screen: `${CSI}2J`,
      up: (count = 1) => `${CSI}1J`.repeat(count),
      down: (count = 1) => `${CSI}J`.repeat(count),
      line: `${CSI}2K`,
      lineEnd: `${CSI}K`,
      lineStart: `${CSI}1K`,
      lines(count) {
        let clear = "";
        for (let i = 0; i < count; i++)
          clear += this.line + (i < count - 1 ? cursor.up() : "");
        if (count)
          clear += cursor.left;
        return clear;
      }
    };
    src = { cursor, scroll, erase, beep };
    picocolors = { exports: {} };
    tty2 = require$$0;
    isColorSupported2 = !("NO_COLOR" in process.env || process.argv.includes("--no-color")) && ("FORCE_COLOR" in process.env || process.argv.includes("--color") || process.platform === "win32" || tty2.isatty(1) && process.env.TERM !== "dumb" || "CI" in process.env);
    formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose2(string, close, replace, index) + close : open + string + close;
    };
    replaceClose2 = (string, close, replace, index) => {
      let start = string.substring(0, index) + replace;
      let end = string.substring(index + close.length);
      let nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose2(end, close, replace, nextIndex) : start + end;
    };
    createColors2 = (enabled = isColorSupported2) => ({
      isColorSupported: enabled,
      reset: enabled ? (s3) => `\x1B[0m${s3}\x1B[0m` : String,
      bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
      dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
      italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
      underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
      inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
      hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
      strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
      black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
      red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
      green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
      yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
      blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
      magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
      cyan: enabled ? formatter("\x1B[36m", "\x1B[39m") : String,
      white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
      gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
      bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
      bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
      bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
      bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
      bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
      bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
      bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
      bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
    });
    picocolors.exports = createColors2();
    picocolors.exports.createColors = createColors2;
    picocolorsExports = picocolors.exports;
    l = /* @__PURE__ */ getDefaultExportFromCjs(picocolorsExports);
    m = {};
    G = { get exports() {
      return m;
    }, set exports(t) {
      m = t;
    } };
    (function(t) {
      var u = {};
      t.exports = u, u.eastAsianWidth = function(e) {
        var s3 = e.charCodeAt(0), C = e.length == 2 ? e.charCodeAt(1) : 0, D = s3;
        return 55296 <= s3 && s3 <= 56319 && 56320 <= C && C <= 57343 && (s3 &= 1023, C &= 1023, D = s3 << 10 | C, D += 65536), D == 12288 || 65281 <= D && D <= 65376 || 65504 <= D && D <= 65510 ? "F" : D == 8361 || 65377 <= D && D <= 65470 || 65474 <= D && D <= 65479 || 65482 <= D && D <= 65487 || 65490 <= D && D <= 65495 || 65498 <= D && D <= 65500 || 65512 <= D && D <= 65518 ? "H" : 4352 <= D && D <= 4447 || 4515 <= D && D <= 4519 || 4602 <= D && D <= 4607 || 9001 <= D && D <= 9002 || 11904 <= D && D <= 11929 || 11931 <= D && D <= 12019 || 12032 <= D && D <= 12245 || 12272 <= D && D <= 12283 || 12289 <= D && D <= 12350 || 12353 <= D && D <= 12438 || 12441 <= D && D <= 12543 || 12549 <= D && D <= 12589 || 12593 <= D && D <= 12686 || 12688 <= D && D <= 12730 || 12736 <= D && D <= 12771 || 12784 <= D && D <= 12830 || 12832 <= D && D <= 12871 || 12880 <= D && D <= 13054 || 13056 <= D && D <= 19903 || 19968 <= D && D <= 42124 || 42128 <= D && D <= 42182 || 43360 <= D && D <= 43388 || 44032 <= D && D <= 55203 || 55216 <= D && D <= 55238 || 55243 <= D && D <= 55291 || 63744 <= D && D <= 64255 || 65040 <= D && D <= 65049 || 65072 <= D && D <= 65106 || 65108 <= D && D <= 65126 || 65128 <= D && D <= 65131 || 110592 <= D && D <= 110593 || 127488 <= D && D <= 127490 || 127504 <= D && D <= 127546 || 127552 <= D && D <= 127560 || 127568 <= D && D <= 127569 || 131072 <= D && D <= 194367 || 177984 <= D && D <= 196605 || 196608 <= D && D <= 262141 ? "W" : 32 <= D && D <= 126 || 162 <= D && D <= 163 || 165 <= D && D <= 166 || D == 172 || D == 175 || 10214 <= D && D <= 10221 || 10629 <= D && D <= 10630 ? "Na" : D == 161 || D == 164 || 167 <= D && D <= 168 || D == 170 || 173 <= D && D <= 174 || 176 <= D && D <= 180 || 182 <= D && D <= 186 || 188 <= D && D <= 191 || D == 198 || D == 208 || 215 <= D && D <= 216 || 222 <= D && D <= 225 || D == 230 || 232 <= D && D <= 234 || 236 <= D && D <= 237 || D == 240 || 242 <= D && D <= 243 || 247 <= D && D <= 250 || D == 252 || D == 254 || D == 257 || D == 273 || D == 275 || D == 283 || 294 <= D && D <= 295 || D == 299 || 305 <= D && D <= 307 || D == 312 || 319 <= D && D <= 322 || D == 324 || 328 <= D && D <= 331 || D == 333 || 338 <= D && D <= 339 || 358 <= D && D <= 359 || D == 363 || D == 462 || D == 464 || D == 466 || D == 468 || D == 470 || D == 472 || D == 474 || D == 476 || D == 593 || D == 609 || D == 708 || D == 711 || 713 <= D && D <= 715 || D == 717 || D == 720 || 728 <= D && D <= 731 || D == 733 || D == 735 || 768 <= D && D <= 879 || 913 <= D && D <= 929 || 931 <= D && D <= 937 || 945 <= D && D <= 961 || 963 <= D && D <= 969 || D == 1025 || 1040 <= D && D <= 1103 || D == 1105 || D == 8208 || 8211 <= D && D <= 8214 || 8216 <= D && D <= 8217 || 8220 <= D && D <= 8221 || 8224 <= D && D <= 8226 || 8228 <= D && D <= 8231 || D == 8240 || 8242 <= D && D <= 8243 || D == 8245 || D == 8251 || D == 8254 || D == 8308 || D == 8319 || 8321 <= D && D <= 8324 || D == 8364 || D == 8451 || D == 8453 || D == 8457 || D == 8467 || D == 8470 || 8481 <= D && D <= 8482 || D == 8486 || D == 8491 || 8531 <= D && D <= 8532 || 8539 <= D && D <= 8542 || 8544 <= D && D <= 8555 || 8560 <= D && D <= 8569 || D == 8585 || 8592 <= D && D <= 8601 || 8632 <= D && D <= 8633 || D == 8658 || D == 8660 || D == 8679 || D == 8704 || 8706 <= D && D <= 8707 || 8711 <= D && D <= 8712 || D == 8715 || D == 8719 || D == 8721 || D == 8725 || D == 8730 || 8733 <= D && D <= 8736 || D == 8739 || D == 8741 || 8743 <= D && D <= 8748 || D == 8750 || 8756 <= D && D <= 8759 || 8764 <= D && D <= 8765 || D == 8776 || D == 8780 || D == 8786 || 8800 <= D && D <= 8801 || 8804 <= D && D <= 8807 || 8810 <= D && D <= 8811 || 8814 <= D && D <= 8815 || 8834 <= D && D <= 8835 || 8838 <= D && D <= 8839 || D == 8853 || D == 8857 || D == 8869 || D == 8895 || D == 8978 || 9312 <= D && D <= 9449 || 9451 <= D && D <= 9547 || 9552 <= D && D <= 9587 || 9600 <= D && D <= 9615 || 9618 <= D && D <= 9621 || 9632 <= D && D <= 9633 || 9635 <= D && D <= 9641 || 9650 <= D && D <= 9651 || 9654 <= D && D <= 9655 || 9660 <= D && D <= 9661 || 9664 <= D && D <= 9665 || 9670 <= D && D <= 9672 || D == 9675 || 9678 <= D && D <= 9681 || 9698 <= D && D <= 9701 || D == 9711 || 9733 <= D && D <= 9734 || D == 9737 || 9742 <= D && D <= 9743 || 9748 <= D && D <= 9749 || D == 9756 || D == 9758 || D == 9792 || D == 9794 || 9824 <= D && D <= 9825 || 9827 <= D && D <= 9829 || 9831 <= D && D <= 9834 || 9836 <= D && D <= 9837 || D == 9839 || 9886 <= D && D <= 9887 || 9918 <= D && D <= 9919 || 9924 <= D && D <= 9933 || 9935 <= D && D <= 9953 || D == 9955 || 9960 <= D && D <= 9983 || D == 10045 || D == 10071 || 10102 <= D && D <= 10111 || 11093 <= D && D <= 11097 || 12872 <= D && D <= 12879 || 57344 <= D && D <= 63743 || 65024 <= D && D <= 65039 || D == 65533 || 127232 <= D && D <= 127242 || 127248 <= D && D <= 127277 || 127280 <= D && D <= 127337 || 127344 <= D && D <= 127386 || 917760 <= D && D <= 917999 || 983040 <= D && D <= 1048573 || 1048576 <= D && D <= 1114109 ? "A" : "N";
      }, u.characterLength = function(e) {
        var s3 = this.eastAsianWidth(e);
        return s3 == "F" || s3 == "W" || s3 == "A" ? 2 : 1;
      };
      function F(e) {
        return e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
      }
      u.length = function(e) {
        for (var s3 = F(e), C = 0, D = 0; D < s3.length; D++)
          C = C + this.characterLength(s3[D]);
        return C;
      }, u.slice = function(e, s3, C) {
        textLen = u.length(e), s3 = s3 || 0, C = C || 1, s3 < 0 && (s3 = textLen + s3), C < 0 && (C = textLen + C);
        for (var D = "", i = 0, o = F(e), E = 0; E < o.length; E++) {
          var a = o[E], n = u.length(a);
          if (i >= s3 - (n == 2 ? 1 : 0))
            if (i + n <= C)
              D += a;
            else
              break;
          i += n;
        }
        return D;
      };
    })(G);
    K = m;
    Y = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
    v = 10;
    L = (t = 0) => (u) => `\x1B[${u + t}m`;
    M = (t = 0) => (u) => `\x1B[${38 + t};5;${u}m`;
    T = (t = 0) => (u, F, e) => `\x1B[${38 + t};2;${u};${F};${e}m`;
    r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], gray: [90, 39], grey: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgGray: [100, 49], bgGrey: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    Object.keys(r.modifier);
    Z = Object.keys(r.color);
    H = Object.keys(r.bgColor);
    [...Z, ...H];
    q = U();
    p = /* @__PURE__ */ new Set(["\x1B", "\x9B"]);
    J = 39;
    b = "\x07";
    W = "[";
    Q = "]";
    I = "m";
    w = `${Q}8;;`;
    N = (t) => `${p.values().next().value}${W}${t}${I}`;
    j = (t) => `${p.values().next().value}${w}${t}${b}`;
    X = (t) => t.split(" ").map((u) => c(u));
    _ = (t, u, F) => {
      const e = [...u];
      let s3 = false, C = false, D = c($(t[t.length - 1]));
      for (const [i, o] of e.entries()) {
        const E = c(o);
        if (D + E <= F ? t[t.length - 1] += o : (t.push(o), D = 0), p.has(o) && (s3 = true, C = e.slice(i + 1).join("").startsWith(w)), s3) {
          C ? o === b && (s3 = false, C = false) : o === I && (s3 = false);
          continue;
        }
        D += E, D === F && i < e.length - 1 && (t.push(""), D = 0);
      }
      !D && t[t.length - 1].length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
    };
    DD = (t) => {
      const u = t.split(" ");
      let F = u.length;
      for (; F > 0 && !(c(u[F - 1]) > 0); )
        F--;
      return F === u.length ? t : u.slice(0, F).join(" ") + u.slice(F).join("");
    };
    uD = (t, u, F = {}) => {
      if (F.trim !== false && t.trim() === "")
        return "";
      let e = "", s3, C;
      const D = X(t);
      let i = [""];
      for (const [E, a] of t.split(" ").entries()) {
        F.trim !== false && (i[i.length - 1] = i[i.length - 1].trimStart());
        let n = c(i[i.length - 1]);
        if (E !== 0 && (n >= u && (F.wordWrap === false || F.trim === false) && (i.push(""), n = 0), (n > 0 || F.trim === false) && (i[i.length - 1] += " ", n++)), F.hard && D[E] > u) {
          const B = u - n, A = 1 + Math.floor((D[E] - B - 1) / u);
          Math.floor((D[E] - 1) / u) < A && i.push(""), _(i, a, u);
          continue;
        }
        if (n + D[E] > u && n > 0 && D[E] > 0) {
          if (F.wordWrap === false && n < u) {
            _(i, a, u);
            continue;
          }
          i.push("");
        }
        if (n + D[E] > u && F.wordWrap === false) {
          _(i, a, u);
          continue;
        }
        i[i.length - 1] += a;
      }
      F.trim !== false && (i = i.map((E) => DD(E)));
      const o = [...i.join(`
`)];
      for (const [E, a] of o.entries()) {
        if (e += a, p.has(a)) {
          const { groups: B } = new RegExp(`(?:\\${W}(?<code>\\d+)m|\\${w}(?<uri>.*)${b})`).exec(o.slice(E).join("")) || { groups: {} };
          if (B.code !== void 0) {
            const A = Number.parseFloat(B.code);
            s3 = A === J ? void 0 : A;
          } else
            B.uri !== void 0 && (C = B.uri.length === 0 ? void 0 : B.uri);
        }
        const n = q.codes.get(Number(s3));
        o[E + 1] === `
` ? (C && (e += j("")), s3 && n && (e += N(n))) : a === `
` && (s3 && n && (e += N(s3)), C && (e += j(C)));
      }
      return e;
    };
    R = Symbol("clack:cancel");
    V = /* @__PURE__ */ new Map([["k", "up"], ["j", "down"], ["h", "left"], ["l", "right"]]);
    tD = /* @__PURE__ */ new Set(["up", "down", "left", "right", "space", "enter"]);
    h = class {
      constructor({ render: u, input: F = stdin, output: e = stdout, ...s3 }, C = true) {
        this._track = false, this._cursor = 0, this.state = "initial", this.error = "", this.subscribers = /* @__PURE__ */ new Map(), this._prevFrame = "", this.opts = s3, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = u.bind(this), this._track = C, this.input = F, this.output = e;
      }
      prompt() {
        const u = new WriteStream(0);
        return u._write = (F, e, s3) => {
          this._track && (this.value = this.rl.line.replace(/\t/g, ""), this._cursor = this.rl.cursor, this.emit("value", this.value)), s3();
        }, this.input.pipe(u), this.rl = f.createInterface({ input: this.input, output: u, tabSize: 2, prompt: "", escapeCodeTimeout: 50 }), f.emitKeypressEvents(this.input, this.rl), this.rl.prompt(), this.opts.initialValue !== void 0 && this._track && this.rl.write(this.opts.initialValue), this.input.on("keypress", this.onKeypress), g(this.input, true), this.output.on("resize", this.render), this.render(), new Promise((F, e) => {
          this.once("submit", () => {
            this.output.write(src.cursor.show), this.output.off("resize", this.render), g(this.input, false), F(this.value);
          }), this.once("cancel", () => {
            this.output.write(src.cursor.show), this.output.off("resize", this.render), g(this.input, false), F(R);
          });
        });
      }
      on(u, F) {
        const e = this.subscribers.get(u) ?? [];
        e.push({ cb: F }), this.subscribers.set(u, e);
      }
      once(u, F) {
        const e = this.subscribers.get(u) ?? [];
        e.push({ cb: F, once: true }), this.subscribers.set(u, e);
      }
      emit(u, ...F) {
        const e = this.subscribers.get(u) ?? [], s3 = [];
        for (const C of e)
          C.cb(...F), C.once && s3.push(() => e.splice(e.indexOf(C), 1));
        for (const C of s3)
          C();
      }
      unsubscribe() {
        this.subscribers.clear();
      }
      onKeypress(u, F) {
        if (this.state === "error" && (this.state = "active"), F?.name && !this._track && V.has(F.name) && this.emit("cursor", V.get(F.name)), F?.name && tD.has(F.name) && this.emit("cursor", F.name), u && (u.toLowerCase() === "y" || u.toLowerCase() === "n") && this.emit("confirm", u.toLowerCase() === "y"), u && this.emit("key", u.toLowerCase()), F?.name === "return") {
          if (this.opts.validate) {
            const e = this.opts.validate(this.value);
            e && (this.error = e, this.state = "error", this.rl.write(this.value));
          }
          this.state !== "error" && (this.state = "submit");
        }
        u === "" && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
      }
      close() {
        this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), g(this.input, false), this.rl.close(), this.emit(`${this.state}`, this.value), this.unsubscribe();
      }
      restoreCursor() {
        const u = P(this._prevFrame, process.stdout.columns, { hard: true }).split(`
`).length - 1;
        this.output.write(src.cursor.move(-999, u * -1));
      }
      render() {
        const u = P(this._render(this) ?? "", process.stdout.columns, { hard: true });
        if (u !== this._prevFrame) {
          if (this.state === "initial")
            this.output.write(src.cursor.hide);
          else {
            const F = FD(this._prevFrame, u);
            if (this.restoreCursor(), F && F?.length === 1) {
              const e = F[0];
              this.output.write(src.cursor.move(0, e)), this.output.write(src.erase.lines(1));
              const s3 = u.split(`
`);
              this.output.write(s3[e]), this._prevFrame = u, this.output.write(src.cursor.move(0, s3.length - e - 1));
              return;
            } else if (F && F?.length > 1) {
              const e = F[0];
              this.output.write(src.cursor.move(0, e)), this.output.write(src.erase.down());
              const C = u.split(`
`).slice(e);
              this.output.write(C.join(`
`)), this._prevFrame = u;
              return;
            }
            this.output.write(src.erase.down());
          }
          this.output.write(u), this.state === "initial" && (this.state = "active"), this._prevFrame = u;
        }
      }
    };
    sD = class extends h {
      get cursor() {
        return this.value ? 0 : 1;
      }
      get _value() {
        return this.cursor === 0;
      }
      constructor(u) {
        super(u, false), this.value = !!u.initialValue, this.on("value", () => {
          this.value = this._value;
        }), this.on("confirm", (F) => {
          this.output.write(src.cursor.move(0, -1)), this.value = F, this.state = "submit", this.close();
        }), this.on("cursor", () => {
          this.value = !this.value;
        });
      }
    };
    iD = class extends h {
      constructor(u) {
        super(u, false), this.cursor = 0, this.options = u.options, this.value = [...u.initialValues ?? []], this.cursor = Math.max(this.options.findIndex(({ value: F }) => F === u.cursorAt), 0), this.on("key", (F) => {
          F === "a" && this.toggleAll();
        }), this.on("cursor", (F) => {
          switch (F) {
            case "left":
            case "up":
              this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
              break;
            case "down":
            case "right":
              this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
              break;
            case "space":
              this.toggleValue();
              break;
          }
        });
      }
      get _value() {
        return this.options[this.cursor].value;
      }
      toggleAll() {
        const u = this.value.length === this.options.length;
        this.value = u ? [] : this.options.map((F) => F.value);
      }
      toggleValue() {
        const u = this.value.includes(this._value);
        this.value = u ? this.value.filter((F) => F !== this._value) : [...this.value, this._value];
      }
    };
    ED = class extends h {
      constructor(u) {
        super(u, false), this.cursor = 0, this.options = u.options, this.cursor = this.options.findIndex(({ value: F }) => F === u.initialValue), this.cursor === -1 && (this.cursor = 0), this.changeValue(), this.on("cursor", (F) => {
          switch (F) {
            case "left":
            case "up":
              this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
              break;
            case "down":
            case "right":
              this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
              break;
          }
          this.changeValue();
        });
      }
      get _value() {
        return this.options[this.cursor];
      }
      changeValue() {
        this.value = this._value.value;
      }
    };
    oD = class extends h {
      constructor(u) {
        super(u), this.valueWithCursor = "", this.on("finalize", () => {
          this.value || (this.value = u.defaultValue), this.valueWithCursor = this.value;
        }), this.on("value", () => {
          if (this.cursor >= this.value.length)
            this.valueWithCursor = `${this.value}${l.inverse(l.hidden("_"))}`;
          else {
            const F = this.value.slice(0, this.cursor), e = this.value.slice(this.cursor);
            this.valueWithCursor = `${F}${l.inverse(e[0])}${e.slice(1)}`;
          }
        });
      }
      get cursor() {
        return this._cursor;
      }
    };
    unicode = isUnicodeSupported();
    s = (c2, fallback) => unicode ? c2 : fallback;
    S_STEP_ACTIVE = s("\u276F", ">");
    S_STEP_CANCEL = s("\u25A0", "x");
    S_STEP_ERROR = s("\u25B2", "x");
    S_STEP_SUBMIT = s("\u2714", "\u221A");
    S_BAR = "";
    S_BAR_END = "";
    S_RADIO_ACTIVE = s("\u25CF", ">");
    S_RADIO_INACTIVE = s("\u25CB", " ");
    S_CHECKBOX_ACTIVE = s("\u25FB", "[\u2022]");
    S_CHECKBOX_SELECTED = s("\u25FC", "[+]");
    S_CHECKBOX_INACTIVE = s("\u25FB", "[ ]");
    symbol = (state) => {
      switch (state) {
        case "initial":
        case "active": {
          return colors.cyan(S_STEP_ACTIVE);
        }
        case "cancel": {
          return colors.red(S_STEP_CANCEL);
        }
        case "error": {
          return colors.yellow(S_STEP_ERROR);
        }
        case "submit": {
          return colors.green(S_STEP_SUBMIT);
        }
      }
    };
    text = (opts) => {
      return new oD({
        validate: opts.validate,
        placeholder: opts.placeholder,
        defaultValue: opts.defaultValue,
        initialValue: opts.initialValue,
        render() {
          const title = `${colors.gray(S_BAR)}
${symbol(this.state)} ${opts.message}
`;
          const placeholder = opts.placeholder ? colors.inverse(opts.placeholder[0]) + colors.dim(opts.placeholder.slice(1)) : colors.inverse(colors.hidden("_"));
          const value = this.value ? this.valueWithCursor : placeholder;
          switch (this.state) {
            case "error": {
              return `${title.trim()}
${colors.yellow(
                S_BAR
              )} ${value}
${colors.yellow(S_BAR_END)} ${colors.yellow(
                this.error
              )}
`;
            }
            case "submit": {
              return `${title}${colors.gray(S_BAR)} ${colors.dim(
                this.value || opts.placeholder
              )}`;
            }
            case "cancel": {
              return `${title}${colors.gray(S_BAR)} ${colors.strikethrough(
                colors.dim(this.value ?? "")
              )}${this.value?.trim() ? "\n" + colors.gray(S_BAR) : ""}`;
            }
            default: {
              return `${title}${colors.cyan(S_BAR)} ${value}
${colors.cyan(
                S_BAR_END
              )}
`;
            }
          }
        }
      }).prompt();
    };
    confirm = (opts) => {
      const active = opts.active ?? "Yes";
      const inactive = opts.inactive ?? "No";
      return new sD({
        active,
        inactive,
        initialValue: opts.initialValue ?? true,
        render() {
          const title = `${colors.gray(S_BAR)}
${symbol(this.state)} ${opts.message}
`;
          const value = this.value ? active : inactive;
          switch (this.state) {
            case "submit": {
              return `${title}${colors.gray(S_BAR)} ${colors.dim(value)}`;
            }
            case "cancel": {
              return `${title}${colors.gray(S_BAR)} ${colors.strikethrough(
                colors.dim(value)
              )}
${colors.gray(S_BAR)}`;
            }
            default: {
              return `${title}${colors.cyan(S_BAR)} ${this.value ? `${colors.green(S_RADIO_ACTIVE)} ${active}` : `${colors.dim(S_RADIO_INACTIVE)} ${colors.dim(active)}`} ${colors.dim("/")} ${this.value ? `${colors.dim(S_RADIO_INACTIVE)} ${colors.dim(inactive)}` : `${colors.green(S_RADIO_ACTIVE)} ${inactive}`}
${colors.cyan(S_BAR_END)}
`;
            }
          }
        }
      }).prompt();
    };
    select = (opts) => {
      const opt = (option, state) => {
        const label = option.label ?? String(option.value);
        switch (state) {
          case "active": {
            return `${colors.green(S_RADIO_ACTIVE)} ${label} ${option.hint ? colors.dim(`(${option.hint})`) : ""}`;
          }
          case "selected": {
            return `${colors.dim(label)}`;
          }
          case "cancelled": {
            return `${colors.strikethrough(colors.dim(label))}`;
          }
        }
        return `${colors.dim(S_RADIO_INACTIVE)} ${colors.dim(label)}`;
      };
      return new ED({
        options: opts.options,
        initialValue: opts.initialValue,
        render() {
          const title = `${colors.gray(S_BAR)}
${symbol(this.state)} ${opts.message}
`;
          switch (this.state) {
            case "submit": {
              return `${title}${colors.gray(S_BAR)} ${opt(
                this.options[this.cursor],
                "selected"
              )}`;
            }
            case "cancel": {
              return `${title}${colors.gray(S_BAR)} ${opt(
                this.options[this.cursor],
                "cancelled"
              )}
${colors.gray(S_BAR)}`;
            }
            default: {
              return `${title}${colors.cyan(S_BAR)} ${this.options.map(
                (option, i) => opt(option, i === this.cursor ? "active" : "inactive")
              ).join(`
${colors.cyan(S_BAR)}  `)}
${colors.cyan(S_BAR_END)}
`;
            }
          }
        }
      }).prompt();
    };
    multiselect = (opts) => {
      const opt = (option, state) => {
        const label = option.label ?? String(option.value);
        switch (state) {
          case "active": {
            return `${colors.cyan(S_CHECKBOX_ACTIVE)} ${label} ${option.hint ? colors.dim(`(${option.hint})`) : ""}`;
          }
          case "selected": {
            return `${colors.green(S_CHECKBOX_SELECTED)} ${colors.dim(label)}`;
          }
          case "cancelled": {
            return `${colors.strikethrough(colors.dim(label))}`;
          }
          case "active-selected": {
            return `${colors.green(S_CHECKBOX_SELECTED)} ${label} ${option.hint ? colors.dim(`(${option.hint})`) : ""}`;
          }
          case "submitted": {
            return `${colors.dim(label)}`;
          }
        }
        return `${colors.dim(S_CHECKBOX_INACTIVE)} ${colors.dim(label)}`;
      };
      return new iD({
        options: opts.options,
        initialValues: opts.initialValues,
        required: opts.required ?? true,
        cursorAt: opts.cursorAt,
        validate(selected) {
          if (this.required && selected.length === 0) {
            return `Please select at least one option.
${colors.reset(
              colors.dim(
                `Press ${colors.gray(
                  colors.bgWhite(colors.inverse(" space "))
                )} to select, ${colors.gray(
                  colors.bgWhite(colors.inverse(" enter "))
                )} to submit`
              )
            )}`;
          }
        },
        render() {
          const title = `${colors.gray(S_BAR)}
${symbol(this.state)} ${opts.message}
`;
          switch (this.state) {
            case "submit": {
              return `${title}${colors.gray(S_BAR)} ${this.options.filter(({ value }) => this.value.includes(value)).map((option) => opt(option, "submitted")).join(colors.dim(", ")) || colors.dim("none")}`;
            }
            case "cancel": {
              const label = this.options.filter(({ value }) => this.value.includes(value)).map((option) => opt(option, "cancelled")).join(colors.dim(", "));
              return `${title}${colors.gray(S_BAR)} ${label.trim() ? `${label}
${colors.gray(S_BAR)}` : ""}`;
            }
            case "error": {
              const footer = this.error.split("\n").map(
                (ln, i) => i === 0 ? `${colors.yellow(S_BAR_END)} ${colors.yellow(ln)}` : `   ${ln}`
              ).join("\n");
              return title + colors.yellow(S_BAR) + "  " + this.options.map((option, i) => {
                const selected = this.value.includes(option.value);
                const active = i === this.cursor;
                if (active && selected) {
                  return opt(option, "active-selected");
                }
                if (selected) {
                  return opt(option, "selected");
                }
                return opt(option, active ? "active" : "inactive");
              }).join(`
${colors.yellow(S_BAR)}  `) + "\n" + footer + "\n";
            }
            default: {
              return `${title}${colors.cyan(S_BAR)} ${this.options.map((option, i) => {
                const selected = this.value.includes(option.value);
                const active = i === this.cursor;
                if (active && selected) {
                  return opt(option, "active-selected");
                }
                if (selected) {
                  return opt(option, "selected");
                }
                return opt(option, active ? "active" : "inactive");
              }).join(`
${colors.cyan(S_BAR)}  `)}
${colors.cyan(S_BAR_END)}
`;
            }
          }
        }
      }).prompt();
    };
  }
});

// ../../../../../node_modules/consola/dist/shared/consola.36c0034f.mjs
import process$1 from "process";
function detectProvider(env3) {
  for (const provider of providers) {
    const envName = provider[1] || provider[0];
    if (env3[envName]) {
      return {
        name: provider[0].toLowerCase(),
        ...provider[2]
      };
    }
  }
  if (env3.SHELL && env3.SHELL === "/bin/jsh") {
    return {
      name: "stackblitz",
      ci: false
    };
  }
  return {
    name: "",
    ci: false
  };
}
function toBoolean(val) {
  return val ? val !== "false" : false;
}
function ansiRegex2({ onlyFirst = false } = {}) {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}
function stripAnsi2(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex, "");
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function stringWidth$1(string, options2) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  options2 = {
    ambiguousIsNarrow: true,
    countAnsiEscapeCodes: false,
    ...options2
  };
  if (!options2.countAnsiEscapeCodes) {
    string = stripAnsi2(string);
  }
  if (string.length === 0) {
    return 0;
  }
  const ambiguousCharacterWidth = options2.ambiguousIsNarrow ? 1 : 2;
  let width = 0;
  for (const { segment: character } of new Intl.Segmenter().segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879) {
      continue;
    }
    if (emojiRegex().test(character)) {
      width += 2;
      continue;
    }
    const code = eastAsianWidth.eastAsianWidth(character);
    switch (code) {
      case "F":
      case "W": {
        width += 2;
        break;
      }
      case "A": {
        width += ambiguousCharacterWidth;
        break;
      }
      default: {
        width += 1;
      }
    }
  }
  return width;
}
function isUnicodeSupported() {
  if (process$1.platform !== "win32") {
    return process$1.env.TERM !== "linux";
  }
  return Boolean(process$1.env.CI) || Boolean(process$1.env.WT_SESSION) || Boolean(process$1.env.TERMINUS_SUBLIME) || process$1.env.ConEmuTask === "{cmd::Cmder}" || process$1.env.TERM_PROGRAM === "Terminus-Sublime" || process$1.env.TERM_PROGRAM === "vscode" || process$1.env.TERM === "xterm-256color" || process$1.env.TERM === "alacritty" || process$1.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
function stringWidth(str) {
  if (!Intl.Segmenter) {
    return stripAnsi(str).length;
  }
  return stringWidth$1(str);
}
function characterFormat(str) {
  return str.replace(/`([^`]+)`/gm, (_2, m2) => colors.cyan(m2)).replace(/\s+_([^_]+)_\s+/gm, (_2, m2) => ` ${colors.underline(m2)} `);
}
function getColor2(color = "white") {
  return colors[color] || colors.white;
}
function getBgColor(color = "bgWhite") {
  return colors[`bg${color[0].toUpperCase()}${color.slice(1)}`] || colors.bgWhite;
}
function createConsola2(options2 = {}) {
  let level = _getDefaultLogLevel();
  if (process.env.CONSOLA_LEVEL) {
    level = Number.parseInt(process.env.CONSOLA_LEVEL) ?? level;
  }
  const consola2 = createConsola({
    level,
    defaults: { level },
    stdout: process.stdout,
    stderr: process.stderr,
    prompt: (...args) => Promise.resolve().then(() => (init_prompt(), prompt_exports)).then((m2) => m2.prompt(...args)),
    reporters: options2.reporters || [
      options2.fancy ?? !(isCI2 || isTest) ? new FancyReporter() : new BasicReporter()
    ],
    ...options2
  });
  return consola2;
}
function _getDefaultLogLevel() {
  if (isDebug) {
    return LogLevels.debug;
  }
  if (isTest) {
    return LogLevels.warn;
  }
  return LogLevels.info;
}
var providers, processShim, envShim, providerInfo, nodeENV, isCI2, hasTTY, isDebug, isTest, regex, eastasianwidth, eastasianwidthExports, eastAsianWidth, emojiRegex, TYPE_COLOR_MAP, LEVEL_COLOR_MAP, unicode2, s2, TYPE_ICONS, FancyReporter, consola;
var init_consola_36c0034f = __esm({
  "../../../../../node_modules/consola/dist/shared/consola.36c0034f.mjs"() {
    init_core();
    init_consola_06ad8a64();
    init_utils();
    providers = [
      ["APPVEYOR"],
      ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],
      ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],
      ["APPCIRCLE", "AC_APPCIRCLE"],
      ["BAMBOO", "bamboo_planKey"],
      ["BITBUCKET", "BITBUCKET_COMMIT"],
      ["BITRISE", "BITRISE_IO"],
      ["BUDDY", "BUDDY_WORKSPACE_ID"],
      ["BUILDKITE"],
      ["CIRCLE", "CIRCLECI"],
      ["CIRRUS", "CIRRUS_CI"],
      ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }],
      ["CODEBUILD", "CODEBUILD_BUILD_ARN"],
      ["CODEFRESH", "CF_BUILD_ID"],
      ["DRONE"],
      ["DRONE", "DRONE_BUILD_EVENT"],
      ["DSARI"],
      ["GITHUB_ACTIONS"],
      ["GITLAB", "GITLAB_CI"],
      ["GITLAB", "CI_MERGE_REQUEST_ID"],
      ["GOCD", "GO_PIPELINE_LABEL"],
      ["LAYERCI"],
      ["HUDSON", "HUDSON_URL"],
      ["JENKINS", "JENKINS_URL"],
      ["MAGNUM"],
      ["NETLIFY"],
      ["NETLIFY", "NETLIFY_LOCAL", { ci: false }],
      ["NEVERCODE"],
      ["RENDER"],
      ["SAIL", "SAILCI"],
      ["SEMAPHORE"],
      ["SCREWDRIVER"],
      ["SHIPPABLE"],
      ["SOLANO", "TDDIUM"],
      ["STRIDER"],
      ["TEAMCITY", "TEAMCITY_VERSION"],
      ["TRAVIS"],
      ["VERCEL", "NOW_BUILDER"],
      ["APPCENTER", "APPCENTER_BUILD_ID"],
      ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }],
      ["STACKBLITZ"],
      ["STORMKIT"],
      ["CLEAVR"]
    ];
    processShim = typeof process !== "undefined" ? process : {};
    envShim = processShim.env || {};
    providerInfo = detectProvider(envShim);
    nodeENV = typeof process !== "undefined" && process.env && process.env.NODE_ENV || "";
    processShim.platform;
    providerInfo.name;
    isCI2 = toBoolean(envShim.CI) || providerInfo.ci !== false;
    hasTTY = toBoolean(processShim.stdout && processShim.stdout.isTTY);
    isDebug = toBoolean(envShim.DEBUG);
    isTest = nodeENV === "test" || toBoolean(envShim.TEST);
    toBoolean(envShim.MINIMAL) || isCI2 || isTest || !hasTTY;
    regex = ansiRegex2();
    eastasianwidth = { exports: {} };
    (function(module) {
      var eaw = {};
      {
        module.exports = eaw;
      }
      eaw.eastAsianWidth = function(character) {
        var x = character.charCodeAt(0);
        var y = character.length == 2 ? character.charCodeAt(1) : 0;
        var codePoint = x;
        if (55296 <= x && x <= 56319 && (56320 <= y && y <= 57343)) {
          x &= 1023;
          y &= 1023;
          codePoint = x << 10 | y;
          codePoint += 65536;
        }
        if (12288 == codePoint || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
          return "F";
        }
        if (8361 == codePoint || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
          return "H";
        }
        if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
          return "W";
        }
        if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || 172 == codePoint || 175 == codePoint || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
          return "Na";
        }
        if (161 == codePoint || 164 == codePoint || 167 <= codePoint && codePoint <= 168 || 170 == codePoint || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || 198 == codePoint || 208 == codePoint || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || 230 == codePoint || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || 240 == codePoint || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || 252 == codePoint || 254 == codePoint || 257 == codePoint || 273 == codePoint || 275 == codePoint || 283 == codePoint || 294 <= codePoint && codePoint <= 295 || 299 == codePoint || 305 <= codePoint && codePoint <= 307 || 312 == codePoint || 319 <= codePoint && codePoint <= 322 || 324 == codePoint || 328 <= codePoint && codePoint <= 331 || 333 == codePoint || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || 363 == codePoint || 462 == codePoint || 464 == codePoint || 466 == codePoint || 468 == codePoint || 470 == codePoint || 472 == codePoint || 474 == codePoint || 476 == codePoint || 593 == codePoint || 609 == codePoint || 708 == codePoint || 711 == codePoint || 713 <= codePoint && codePoint <= 715 || 717 == codePoint || 720 == codePoint || 728 <= codePoint && codePoint <= 731 || 733 == codePoint || 735 == codePoint || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || 1025 == codePoint || 1040 <= codePoint && codePoint <= 1103 || 1105 == codePoint || 8208 == codePoint || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || 8240 == codePoint || 8242 <= codePoint && codePoint <= 8243 || 8245 == codePoint || 8251 == codePoint || 8254 == codePoint || 8308 == codePoint || 8319 == codePoint || 8321 <= codePoint && codePoint <= 8324 || 8364 == codePoint || 8451 == codePoint || 8453 == codePoint || 8457 == codePoint || 8467 == codePoint || 8470 == codePoint || 8481 <= codePoint && codePoint <= 8482 || 8486 == codePoint || 8491 == codePoint || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || 8585 == codePoint || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || 8658 == codePoint || 8660 == codePoint || 8679 == codePoint || 8704 == codePoint || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || 8715 == codePoint || 8719 == codePoint || 8721 == codePoint || 8725 == codePoint || 8730 == codePoint || 8733 <= codePoint && codePoint <= 8736 || 8739 == codePoint || 8741 == codePoint || 8743 <= codePoint && codePoint <= 8748 || 8750 == codePoint || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || 8776 == codePoint || 8780 == codePoint || 8786 == codePoint || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || 8853 == codePoint || 8857 == codePoint || 8869 == codePoint || 8895 == codePoint || 8978 == codePoint || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || 9675 == codePoint || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || 9711 == codePoint || 9733 <= codePoint && codePoint <= 9734 || 9737 == codePoint || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || 9756 == codePoint || 9758 == codePoint || 9792 == codePoint || 9794 == codePoint || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || 9839 == codePoint || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || 9955 == codePoint || 9960 <= codePoint && codePoint <= 9983 || 10045 == codePoint || 10071 == codePoint || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || 65533 == codePoint || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
          return "A";
        }
        return "N";
      };
      eaw.characterLength = function(character) {
        var code = this.eastAsianWidth(character);
        if (code == "F" || code == "W" || code == "A") {
          return 2;
        } else {
          return 1;
        }
      };
      function stringToArray(string) {
        return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
      }
      eaw.length = function(string) {
        var characters = stringToArray(string);
        var len = 0;
        for (var i = 0; i < characters.length; i++) {
          len = len + this.characterLength(characters[i]);
        }
        return len;
      };
      eaw.slice = function(text2, start, end) {
        textLen = eaw.length(text2);
        start = start ? start : 0;
        end = end ? end : 1;
        if (start < 0) {
          start = textLen + start;
        }
        if (end < 0) {
          end = textLen + end;
        }
        var result = "";
        var eawLen = 0;
        var chars = stringToArray(text2);
        for (var i = 0; i < chars.length; i++) {
          var char = chars[i];
          var charLen = eaw.length(char);
          if (eawLen >= start - (charLen == 2 ? 1 : 0)) {
            if (eawLen + charLen <= end) {
              result += char;
            } else {
              break;
            }
          }
          eawLen += charLen;
        }
        return result;
      };
    })(eastasianwidth);
    eastasianwidthExports = eastasianwidth.exports;
    eastAsianWidth = /* @__PURE__ */ getDefaultExportFromCjs(eastasianwidthExports);
    emojiRegex = () => {
      return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    };
    TYPE_COLOR_MAP = {
      info: "cyan",
      fail: "red",
      success: "green",
      ready: "green",
      start: "magenta"
    };
    LEVEL_COLOR_MAP = {
      0: "red",
      1: "yellow"
    };
    unicode2 = isUnicodeSupported();
    s2 = (c2, fallback) => unicode2 ? c2 : fallback;
    TYPE_ICONS = {
      error: s2("\u2716", "\xD7"),
      fatal: s2("\u2716", "\xD7"),
      ready: s2("\u2714", "\u221A"),
      warn: s2("\u26A0", "\u203C"),
      info: s2("\u2139", "i"),
      success: s2("\u2714", "\u221A"),
      debug: s2("\u2699", "D"),
      trace: s2("\u2192", "\u2192"),
      fail: s2("\u2716", "\xD7"),
      start: s2("\u25D0", "o"),
      log: ""
    };
    FancyReporter = class extends BasicReporter {
      formatStack(stack) {
        return "\n" + parseStack(stack).map(
          (line) => "  " + line.replace(/^at +/, (m2) => colors.gray(m2)).replace(/\((.+)\)/, (_2, m2) => `(${colors.cyan(m2)})`)
        ).join("\n");
      }
      formatType(logObj, isBadge, opts) {
        const typeColor = TYPE_COLOR_MAP[logObj.type] || LEVEL_COLOR_MAP[logObj.level] || "gray";
        if (isBadge) {
          return getBgColor(typeColor)(
            colors.black(` ${logObj.type.toUpperCase()} `)
          );
        }
        const _type = typeof TYPE_ICONS[logObj.type] === "string" ? TYPE_ICONS[logObj.type] : logObj.icon || logObj.type;
        return _type ? getColor2(typeColor)(_type) : "";
      }
      formatLogObj(logObj, opts) {
        const [message, ...additional] = this.formatArgs(logObj.args, opts).split(
          "\n"
        );
        if (logObj.type === "box") {
          return box(
            characterFormat(
              message + (additional.length > 0 ? "\n" + additional.join("\n") : "")
            ),
            {
              title: logObj.title ? characterFormat(logObj.title) : void 0,
              style: logObj.style
            }
          );
        }
        const date = this.formatDate(logObj.date, opts);
        const coloredDate = date && colors.gray(date);
        const isBadge = logObj.badge ?? logObj.level < 2;
        const type = this.formatType(logObj, isBadge, opts);
        const tag = logObj.tag ? colors.gray(logObj.tag) : "";
        let line;
        const left = this.filterAndJoin([type, characterFormat(message)]);
        const right = this.filterAndJoin(opts.columns ? [tag, coloredDate] : [tag]);
        const space = (opts.columns || 0) - stringWidth(left) - stringWidth(right) - 2;
        line = space > 0 && (opts.columns || 0) >= 80 ? left + " ".repeat(space) + right : (right ? `${colors.gray(`[${right}]`)} ` : "") + left;
        line += characterFormat(
          additional.length > 0 ? "\n" + additional.join("\n") : ""
        );
        if (logObj.type === "trace") {
          const _err = new Error("Trace: " + logObj.message);
          line += this.formatStack(_err.stack || "");
        }
        return isBadge ? "\n" + line + "\n" : line;
      }
    };
    consola = createConsola2();
  }
});

// ../../../../../node_modules/he/he.js
var require_he = __commonJS({
  "../../../../../node_modules/he/he.js"(exports, module) {
    (function(root) {
      var freeExports = typeof exports == "object" && exports;
      var freeModule = typeof module == "object" && module && module.exports == freeExports && module;
      var freeGlobal = typeof global == "object" && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
        root = freeGlobal;
      }
      var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      var regexAsciiWhitelist = /[\x01-\x7F]/g;
      var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
      var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
      var encodeMap = { "\xC1": "Aacute", "\xE1": "aacute", "\u0102": "Abreve", "\u0103": "abreve", "\u223E": "ac", "\u223F": "acd", "\u223E\u0333": "acE", "\xC2": "Acirc", "\xE2": "acirc", "\xB4": "acute", "\u0410": "Acy", "\u0430": "acy", "\xC6": "AElig", "\xE6": "aelig", "\u2061": "af", "\u{1D504}": "Afr", "\u{1D51E}": "afr", "\xC0": "Agrave", "\xE0": "agrave", "\u2135": "aleph", "\u0391": "Alpha", "\u03B1": "alpha", "\u0100": "Amacr", "\u0101": "amacr", "\u2A3F": "amalg", "&": "amp", "\u2A55": "andand", "\u2A53": "And", "\u2227": "and", "\u2A5C": "andd", "\u2A58": "andslope", "\u2A5A": "andv", "\u2220": "ang", "\u29A4": "ange", "\u29A8": "angmsdaa", "\u29A9": "angmsdab", "\u29AA": "angmsdac", "\u29AB": "angmsdad", "\u29AC": "angmsdae", "\u29AD": "angmsdaf", "\u29AE": "angmsdag", "\u29AF": "angmsdah", "\u2221": "angmsd", "\u221F": "angrt", "\u22BE": "angrtvb", "\u299D": "angrtvbd", "\u2222": "angsph", "\xC5": "angst", "\u237C": "angzarr", "\u0104": "Aogon", "\u0105": "aogon", "\u{1D538}": "Aopf", "\u{1D552}": "aopf", "\u2A6F": "apacir", "\u2248": "ap", "\u2A70": "apE", "\u224A": "ape", "\u224B": "apid", "'": "apos", "\xE5": "aring", "\u{1D49C}": "Ascr", "\u{1D4B6}": "ascr", "\u2254": "colone", "*": "ast", "\u224D": "CupCap", "\xC3": "Atilde", "\xE3": "atilde", "\xC4": "Auml", "\xE4": "auml", "\u2233": "awconint", "\u2A11": "awint", "\u224C": "bcong", "\u03F6": "bepsi", "\u2035": "bprime", "\u223D": "bsim", "\u22CD": "bsime", "\u2216": "setmn", "\u2AE7": "Barv", "\u22BD": "barvee", "\u2305": "barwed", "\u2306": "Barwed", "\u23B5": "bbrk", "\u23B6": "bbrktbrk", "\u0411": "Bcy", "\u0431": "bcy", "\u201E": "bdquo", "\u2235": "becaus", "\u29B0": "bemptyv", "\u212C": "Bscr", "\u0392": "Beta", "\u03B2": "beta", "\u2136": "beth", "\u226C": "twixt", "\u{1D505}": "Bfr", "\u{1D51F}": "bfr", "\u22C2": "xcap", "\u25EF": "xcirc", "\u22C3": "xcup", "\u2A00": "xodot", "\u2A01": "xoplus", "\u2A02": "xotime", "\u2A06": "xsqcup", "\u2605": "starf", "\u25BD": "xdtri", "\u25B3": "xutri", "\u2A04": "xuplus", "\u22C1": "Vee", "\u22C0": "Wedge", "\u290D": "rbarr", "\u29EB": "lozf", "\u25AA": "squf", "\u25B4": "utrif", "\u25BE": "dtrif", "\u25C2": "ltrif", "\u25B8": "rtrif", "\u2423": "blank", "\u2592": "blk12", "\u2591": "blk14", "\u2593": "blk34", "\u2588": "block", "=\u20E5": "bne", "\u2261\u20E5": "bnequiv", "\u2AED": "bNot", "\u2310": "bnot", "\u{1D539}": "Bopf", "\u{1D553}": "bopf", "\u22A5": "bot", "\u22C8": "bowtie", "\u29C9": "boxbox", "\u2510": "boxdl", "\u2555": "boxdL", "\u2556": "boxDl", "\u2557": "boxDL", "\u250C": "boxdr", "\u2552": "boxdR", "\u2553": "boxDr", "\u2554": "boxDR", "\u2500": "boxh", "\u2550": "boxH", "\u252C": "boxhd", "\u2564": "boxHd", "\u2565": "boxhD", "\u2566": "boxHD", "\u2534": "boxhu", "\u2567": "boxHu", "\u2568": "boxhU", "\u2569": "boxHU", "\u229F": "minusb", "\u229E": "plusb", "\u22A0": "timesb", "\u2518": "boxul", "\u255B": "boxuL", "\u255C": "boxUl", "\u255D": "boxUL", "\u2514": "boxur", "\u2558": "boxuR", "\u2559": "boxUr", "\u255A": "boxUR", "\u2502": "boxv", "\u2551": "boxV", "\u253C": "boxvh", "\u256A": "boxvH", "\u256B": "boxVh", "\u256C": "boxVH", "\u2524": "boxvl", "\u2561": "boxvL", "\u2562": "boxVl", "\u2563": "boxVL", "\u251C": "boxvr", "\u255E": "boxvR", "\u255F": "boxVr", "\u2560": "boxVR", "\u02D8": "breve", "\xA6": "brvbar", "\u{1D4B7}": "bscr", "\u204F": "bsemi", "\u29C5": "bsolb", "\\": "bsol", "\u27C8": "bsolhsub", "\u2022": "bull", "\u224E": "bump", "\u2AAE": "bumpE", "\u224F": "bumpe", "\u0106": "Cacute", "\u0107": "cacute", "\u2A44": "capand", "\u2A49": "capbrcup", "\u2A4B": "capcap", "\u2229": "cap", "\u22D2": "Cap", "\u2A47": "capcup", "\u2A40": "capdot", "\u2145": "DD", "\u2229\uFE00": "caps", "\u2041": "caret", "\u02C7": "caron", "\u212D": "Cfr", "\u2A4D": "ccaps", "\u010C": "Ccaron", "\u010D": "ccaron", "\xC7": "Ccedil", "\xE7": "ccedil", "\u0108": "Ccirc", "\u0109": "ccirc", "\u2230": "Cconint", "\u2A4C": "ccups", "\u2A50": "ccupssm", "\u010A": "Cdot", "\u010B": "cdot", "\xB8": "cedil", "\u29B2": "cemptyv", "\xA2": "cent", "\xB7": "middot", "\u{1D520}": "cfr", "\u0427": "CHcy", "\u0447": "chcy", "\u2713": "check", "\u03A7": "Chi", "\u03C7": "chi", "\u02C6": "circ", "\u2257": "cire", "\u21BA": "olarr", "\u21BB": "orarr", "\u229B": "oast", "\u229A": "ocir", "\u229D": "odash", "\u2299": "odot", "\xAE": "reg", "\u24C8": "oS", "\u2296": "ominus", "\u2295": "oplus", "\u2297": "otimes", "\u25CB": "cir", "\u29C3": "cirE", "\u2A10": "cirfnint", "\u2AEF": "cirmid", "\u29C2": "cirscir", "\u2232": "cwconint", "\u201D": "rdquo", "\u2019": "rsquo", "\u2663": "clubs", ":": "colon", "\u2237": "Colon", "\u2A74": "Colone", ",": "comma", "@": "commat", "\u2201": "comp", "\u2218": "compfn", "\u2102": "Copf", "\u2245": "cong", "\u2A6D": "congdot", "\u2261": "equiv", "\u222E": "oint", "\u222F": "Conint", "\u{1D554}": "copf", "\u2210": "coprod", "\xA9": "copy", "\u2117": "copysr", "\u21B5": "crarr", "\u2717": "cross", "\u2A2F": "Cross", "\u{1D49E}": "Cscr", "\u{1D4B8}": "cscr", "\u2ACF": "csub", "\u2AD1": "csube", "\u2AD0": "csup", "\u2AD2": "csupe", "\u22EF": "ctdot", "\u2938": "cudarrl", "\u2935": "cudarrr", "\u22DE": "cuepr", "\u22DF": "cuesc", "\u21B6": "cularr", "\u293D": "cularrp", "\u2A48": "cupbrcap", "\u2A46": "cupcap", "\u222A": "cup", "\u22D3": "Cup", "\u2A4A": "cupcup", "\u228D": "cupdot", "\u2A45": "cupor", "\u222A\uFE00": "cups", "\u21B7": "curarr", "\u293C": "curarrm", "\u22CE": "cuvee", "\u22CF": "cuwed", "\xA4": "curren", "\u2231": "cwint", "\u232D": "cylcty", "\u2020": "dagger", "\u2021": "Dagger", "\u2138": "daleth", "\u2193": "darr", "\u21A1": "Darr", "\u21D3": "dArr", "\u2010": "dash", "\u2AE4": "Dashv", "\u22A3": "dashv", "\u290F": "rBarr", "\u02DD": "dblac", "\u010E": "Dcaron", "\u010F": "dcaron", "\u0414": "Dcy", "\u0434": "dcy", "\u21CA": "ddarr", "\u2146": "dd", "\u2911": "DDotrahd", "\u2A77": "eDDot", "\xB0": "deg", "\u2207": "Del", "\u0394": "Delta", "\u03B4": "delta", "\u29B1": "demptyv", "\u297F": "dfisht", "\u{1D507}": "Dfr", "\u{1D521}": "dfr", "\u2965": "dHar", "\u21C3": "dharl", "\u21C2": "dharr", "\u02D9": "dot", "`": "grave", "\u02DC": "tilde", "\u22C4": "diam", "\u2666": "diams", "\xA8": "die", "\u03DD": "gammad", "\u22F2": "disin", "\xF7": "div", "\u22C7": "divonx", "\u0402": "DJcy", "\u0452": "djcy", "\u231E": "dlcorn", "\u230D": "dlcrop", "$": "dollar", "\u{1D53B}": "Dopf", "\u{1D555}": "dopf", "\u20DC": "DotDot", "\u2250": "doteq", "\u2251": "eDot", "\u2238": "minusd", "\u2214": "plusdo", "\u22A1": "sdotb", "\u21D0": "lArr", "\u21D4": "iff", "\u27F8": "xlArr", "\u27FA": "xhArr", "\u27F9": "xrArr", "\u21D2": "rArr", "\u22A8": "vDash", "\u21D1": "uArr", "\u21D5": "vArr", "\u2225": "par", "\u2913": "DownArrowBar", "\u21F5": "duarr", "\u0311": "DownBreve", "\u2950": "DownLeftRightVector", "\u295E": "DownLeftTeeVector", "\u2956": "DownLeftVectorBar", "\u21BD": "lhard", "\u295F": "DownRightTeeVector", "\u2957": "DownRightVectorBar", "\u21C1": "rhard", "\u21A7": "mapstodown", "\u22A4": "top", "\u2910": "RBarr", "\u231F": "drcorn", "\u230C": "drcrop", "\u{1D49F}": "Dscr", "\u{1D4B9}": "dscr", "\u0405": "DScy", "\u0455": "dscy", "\u29F6": "dsol", "\u0110": "Dstrok", "\u0111": "dstrok", "\u22F1": "dtdot", "\u25BF": "dtri", "\u296F": "duhar", "\u29A6": "dwangle", "\u040F": "DZcy", "\u045F": "dzcy", "\u27FF": "dzigrarr", "\xC9": "Eacute", "\xE9": "eacute", "\u2A6E": "easter", "\u011A": "Ecaron", "\u011B": "ecaron", "\xCA": "Ecirc", "\xEA": "ecirc", "\u2256": "ecir", "\u2255": "ecolon", "\u042D": "Ecy", "\u044D": "ecy", "\u0116": "Edot", "\u0117": "edot", "\u2147": "ee", "\u2252": "efDot", "\u{1D508}": "Efr", "\u{1D522}": "efr", "\u2A9A": "eg", "\xC8": "Egrave", "\xE8": "egrave", "\u2A96": "egs", "\u2A98": "egsdot", "\u2A99": "el", "\u2208": "in", "\u23E7": "elinters", "\u2113": "ell", "\u2A95": "els", "\u2A97": "elsdot", "\u0112": "Emacr", "\u0113": "emacr", "\u2205": "empty", "\u25FB": "EmptySmallSquare", "\u25AB": "EmptyVerySmallSquare", "\u2004": "emsp13", "\u2005": "emsp14", "\u2003": "emsp", "\u014A": "ENG", "\u014B": "eng", "\u2002": "ensp", "\u0118": "Eogon", "\u0119": "eogon", "\u{1D53C}": "Eopf", "\u{1D556}": "eopf", "\u22D5": "epar", "\u29E3": "eparsl", "\u2A71": "eplus", "\u03B5": "epsi", "\u0395": "Epsilon", "\u03F5": "epsiv", "\u2242": "esim", "\u2A75": "Equal", "=": "equals", "\u225F": "equest", "\u21CC": "rlhar", "\u2A78": "equivDD", "\u29E5": "eqvparsl", "\u2971": "erarr", "\u2253": "erDot", "\u212F": "escr", "\u2130": "Escr", "\u2A73": "Esim", "\u0397": "Eta", "\u03B7": "eta", "\xD0": "ETH", "\xF0": "eth", "\xCB": "Euml", "\xEB": "euml", "\u20AC": "euro", "!": "excl", "\u2203": "exist", "\u0424": "Fcy", "\u0444": "fcy", "\u2640": "female", "\uFB03": "ffilig", "\uFB00": "fflig", "\uFB04": "ffllig", "\u{1D509}": "Ffr", "\u{1D523}": "ffr", "\uFB01": "filig", "\u25FC": "FilledSmallSquare", "fj": "fjlig", "\u266D": "flat", "\uFB02": "fllig", "\u25B1": "fltns", "\u0192": "fnof", "\u{1D53D}": "Fopf", "\u{1D557}": "fopf", "\u2200": "forall", "\u22D4": "fork", "\u2AD9": "forkv", "\u2131": "Fscr", "\u2A0D": "fpartint", "\xBD": "half", "\u2153": "frac13", "\xBC": "frac14", "\u2155": "frac15", "\u2159": "frac16", "\u215B": "frac18", "\u2154": "frac23", "\u2156": "frac25", "\xBE": "frac34", "\u2157": "frac35", "\u215C": "frac38", "\u2158": "frac45", "\u215A": "frac56", "\u215D": "frac58", "\u215E": "frac78", "\u2044": "frasl", "\u2322": "frown", "\u{1D4BB}": "fscr", "\u01F5": "gacute", "\u0393": "Gamma", "\u03B3": "gamma", "\u03DC": "Gammad", "\u2A86": "gap", "\u011E": "Gbreve", "\u011F": "gbreve", "\u0122": "Gcedil", "\u011C": "Gcirc", "\u011D": "gcirc", "\u0413": "Gcy", "\u0433": "gcy", "\u0120": "Gdot", "\u0121": "gdot", "\u2265": "ge", "\u2267": "gE", "\u2A8C": "gEl", "\u22DB": "gel", "\u2A7E": "ges", "\u2AA9": "gescc", "\u2A80": "gesdot", "\u2A82": "gesdoto", "\u2A84": "gesdotol", "\u22DB\uFE00": "gesl", "\u2A94": "gesles", "\u{1D50A}": "Gfr", "\u{1D524}": "gfr", "\u226B": "gg", "\u22D9": "Gg", "\u2137": "gimel", "\u0403": "GJcy", "\u0453": "gjcy", "\u2AA5": "gla", "\u2277": "gl", "\u2A92": "glE", "\u2AA4": "glj", "\u2A8A": "gnap", "\u2A88": "gne", "\u2269": "gnE", "\u22E7": "gnsim", "\u{1D53E}": "Gopf", "\u{1D558}": "gopf", "\u2AA2": "GreaterGreater", "\u2273": "gsim", "\u{1D4A2}": "Gscr", "\u210A": "gscr", "\u2A8E": "gsime", "\u2A90": "gsiml", "\u2AA7": "gtcc", "\u2A7A": "gtcir", ">": "gt", "\u22D7": "gtdot", "\u2995": "gtlPar", "\u2A7C": "gtquest", "\u2978": "gtrarr", "\u2269\uFE00": "gvnE", "\u200A": "hairsp", "\u210B": "Hscr", "\u042A": "HARDcy", "\u044A": "hardcy", "\u2948": "harrcir", "\u2194": "harr", "\u21AD": "harrw", "^": "Hat", "\u210F": "hbar", "\u0124": "Hcirc", "\u0125": "hcirc", "\u2665": "hearts", "\u2026": "mldr", "\u22B9": "hercon", "\u{1D525}": "hfr", "\u210C": "Hfr", "\u2925": "searhk", "\u2926": "swarhk", "\u21FF": "hoarr", "\u223B": "homtht", "\u21A9": "larrhk", "\u21AA": "rarrhk", "\u{1D559}": "hopf", "\u210D": "Hopf", "\u2015": "horbar", "\u{1D4BD}": "hscr", "\u0126": "Hstrok", "\u0127": "hstrok", "\u2043": "hybull", "\xCD": "Iacute", "\xED": "iacute", "\u2063": "ic", "\xCE": "Icirc", "\xEE": "icirc", "\u0418": "Icy", "\u0438": "icy", "\u0130": "Idot", "\u0415": "IEcy", "\u0435": "iecy", "\xA1": "iexcl", "\u{1D526}": "ifr", "\u2111": "Im", "\xCC": "Igrave", "\xEC": "igrave", "\u2148": "ii", "\u2A0C": "qint", "\u222D": "tint", "\u29DC": "iinfin", "\u2129": "iiota", "\u0132": "IJlig", "\u0133": "ijlig", "\u012A": "Imacr", "\u012B": "imacr", "\u2110": "Iscr", "\u0131": "imath", "\u22B7": "imof", "\u01B5": "imped", "\u2105": "incare", "\u221E": "infin", "\u29DD": "infintie", "\u22BA": "intcal", "\u222B": "int", "\u222C": "Int", "\u2124": "Zopf", "\u2A17": "intlarhk", "\u2A3C": "iprod", "\u2062": "it", "\u0401": "IOcy", "\u0451": "iocy", "\u012E": "Iogon", "\u012F": "iogon", "\u{1D540}": "Iopf", "\u{1D55A}": "iopf", "\u0399": "Iota", "\u03B9": "iota", "\xBF": "iquest", "\u{1D4BE}": "iscr", "\u22F5": "isindot", "\u22F9": "isinE", "\u22F4": "isins", "\u22F3": "isinsv", "\u0128": "Itilde", "\u0129": "itilde", "\u0406": "Iukcy", "\u0456": "iukcy", "\xCF": "Iuml", "\xEF": "iuml", "\u0134": "Jcirc", "\u0135": "jcirc", "\u0419": "Jcy", "\u0439": "jcy", "\u{1D50D}": "Jfr", "\u{1D527}": "jfr", "\u0237": "jmath", "\u{1D541}": "Jopf", "\u{1D55B}": "jopf", "\u{1D4A5}": "Jscr", "\u{1D4BF}": "jscr", "\u0408": "Jsercy", "\u0458": "jsercy", "\u0404": "Jukcy", "\u0454": "jukcy", "\u039A": "Kappa", "\u03BA": "kappa", "\u03F0": "kappav", "\u0136": "Kcedil", "\u0137": "kcedil", "\u041A": "Kcy", "\u043A": "kcy", "\u{1D50E}": "Kfr", "\u{1D528}": "kfr", "\u0138": "kgreen", "\u0425": "KHcy", "\u0445": "khcy", "\u040C": "KJcy", "\u045C": "kjcy", "\u{1D542}": "Kopf", "\u{1D55C}": "kopf", "\u{1D4A6}": "Kscr", "\u{1D4C0}": "kscr", "\u21DA": "lAarr", "\u0139": "Lacute", "\u013A": "lacute", "\u29B4": "laemptyv", "\u2112": "Lscr", "\u039B": "Lambda", "\u03BB": "lambda", "\u27E8": "lang", "\u27EA": "Lang", "\u2991": "langd", "\u2A85": "lap", "\xAB": "laquo", "\u21E4": "larrb", "\u291F": "larrbfs", "\u2190": "larr", "\u219E": "Larr", "\u291D": "larrfs", "\u21AB": "larrlp", "\u2939": "larrpl", "\u2973": "larrsim", "\u21A2": "larrtl", "\u2919": "latail", "\u291B": "lAtail", "\u2AAB": "lat", "\u2AAD": "late", "\u2AAD\uFE00": "lates", "\u290C": "lbarr", "\u290E": "lBarr", "\u2772": "lbbrk", "{": "lcub", "[": "lsqb", "\u298B": "lbrke", "\u298F": "lbrksld", "\u298D": "lbrkslu", "\u013D": "Lcaron", "\u013E": "lcaron", "\u013B": "Lcedil", "\u013C": "lcedil", "\u2308": "lceil", "\u041B": "Lcy", "\u043B": "lcy", "\u2936": "ldca", "\u201C": "ldquo", "\u2967": "ldrdhar", "\u294B": "ldrushar", "\u21B2": "ldsh", "\u2264": "le", "\u2266": "lE", "\u21C6": "lrarr", "\u27E6": "lobrk", "\u2961": "LeftDownTeeVector", "\u2959": "LeftDownVectorBar", "\u230A": "lfloor", "\u21BC": "lharu", "\u21C7": "llarr", "\u21CB": "lrhar", "\u294E": "LeftRightVector", "\u21A4": "mapstoleft", "\u295A": "LeftTeeVector", "\u22CB": "lthree", "\u29CF": "LeftTriangleBar", "\u22B2": "vltri", "\u22B4": "ltrie", "\u2951": "LeftUpDownVector", "\u2960": "LeftUpTeeVector", "\u2958": "LeftUpVectorBar", "\u21BF": "uharl", "\u2952": "LeftVectorBar", "\u2A8B": "lEg", "\u22DA": "leg", "\u2A7D": "les", "\u2AA8": "lescc", "\u2A7F": "lesdot", "\u2A81": "lesdoto", "\u2A83": "lesdotor", "\u22DA\uFE00": "lesg", "\u2A93": "lesges", "\u22D6": "ltdot", "\u2276": "lg", "\u2AA1": "LessLess", "\u2272": "lsim", "\u297C": "lfisht", "\u{1D50F}": "Lfr", "\u{1D529}": "lfr", "\u2A91": "lgE", "\u2962": "lHar", "\u296A": "lharul", "\u2584": "lhblk", "\u0409": "LJcy", "\u0459": "ljcy", "\u226A": "ll", "\u22D8": "Ll", "\u296B": "llhard", "\u25FA": "lltri", "\u013F": "Lmidot", "\u0140": "lmidot", "\u23B0": "lmoust", "\u2A89": "lnap", "\u2A87": "lne", "\u2268": "lnE", "\u22E6": "lnsim", "\u27EC": "loang", "\u21FD": "loarr", "\u27F5": "xlarr", "\u27F7": "xharr", "\u27FC": "xmap", "\u27F6": "xrarr", "\u21AC": "rarrlp", "\u2985": "lopar", "\u{1D543}": "Lopf", "\u{1D55D}": "lopf", "\u2A2D": "loplus", "\u2A34": "lotimes", "\u2217": "lowast", "_": "lowbar", "\u2199": "swarr", "\u2198": "searr", "\u25CA": "loz", "(": "lpar", "\u2993": "lparlt", "\u296D": "lrhard", "\u200E": "lrm", "\u22BF": "lrtri", "\u2039": "lsaquo", "\u{1D4C1}": "lscr", "\u21B0": "lsh", "\u2A8D": "lsime", "\u2A8F": "lsimg", "\u2018": "lsquo", "\u201A": "sbquo", "\u0141": "Lstrok", "\u0142": "lstrok", "\u2AA6": "ltcc", "\u2A79": "ltcir", "<": "lt", "\u22C9": "ltimes", "\u2976": "ltlarr", "\u2A7B": "ltquest", "\u25C3": "ltri", "\u2996": "ltrPar", "\u294A": "lurdshar", "\u2966": "luruhar", "\u2268\uFE00": "lvnE", "\xAF": "macr", "\u2642": "male", "\u2720": "malt", "\u2905": "Map", "\u21A6": "map", "\u21A5": "mapstoup", "\u25AE": "marker", "\u2A29": "mcomma", "\u041C": "Mcy", "\u043C": "mcy", "\u2014": "mdash", "\u223A": "mDDot", "\u205F": "MediumSpace", "\u2133": "Mscr", "\u{1D510}": "Mfr", "\u{1D52A}": "mfr", "\u2127": "mho", "\xB5": "micro", "\u2AF0": "midcir", "\u2223": "mid", "\u2212": "minus", "\u2A2A": "minusdu", "\u2213": "mp", "\u2ADB": "mlcp", "\u22A7": "models", "\u{1D544}": "Mopf", "\u{1D55E}": "mopf", "\u{1D4C2}": "mscr", "\u039C": "Mu", "\u03BC": "mu", "\u22B8": "mumap", "\u0143": "Nacute", "\u0144": "nacute", "\u2220\u20D2": "nang", "\u2249": "nap", "\u2A70\u0338": "napE", "\u224B\u0338": "napid", "\u0149": "napos", "\u266E": "natur", "\u2115": "Nopf", "\xA0": "nbsp", "\u224E\u0338": "nbump", "\u224F\u0338": "nbumpe", "\u2A43": "ncap", "\u0147": "Ncaron", "\u0148": "ncaron", "\u0145": "Ncedil", "\u0146": "ncedil", "\u2247": "ncong", "\u2A6D\u0338": "ncongdot", "\u2A42": "ncup", "\u041D": "Ncy", "\u043D": "ncy", "\u2013": "ndash", "\u2924": "nearhk", "\u2197": "nearr", "\u21D7": "neArr", "\u2260": "ne", "\u2250\u0338": "nedot", "\u200B": "ZeroWidthSpace", "\u2262": "nequiv", "\u2928": "toea", "\u2242\u0338": "nesim", "\n": "NewLine", "\u2204": "nexist", "\u{1D511}": "Nfr", "\u{1D52B}": "nfr", "\u2267\u0338": "ngE", "\u2271": "nge", "\u2A7E\u0338": "nges", "\u22D9\u0338": "nGg", "\u2275": "ngsim", "\u226B\u20D2": "nGt", "\u226F": "ngt", "\u226B\u0338": "nGtv", "\u21AE": "nharr", "\u21CE": "nhArr", "\u2AF2": "nhpar", "\u220B": "ni", "\u22FC": "nis", "\u22FA": "nisd", "\u040A": "NJcy", "\u045A": "njcy", "\u219A": "nlarr", "\u21CD": "nlArr", "\u2025": "nldr", "\u2266\u0338": "nlE", "\u2270": "nle", "\u2A7D\u0338": "nles", "\u226E": "nlt", "\u22D8\u0338": "nLl", "\u2274": "nlsim", "\u226A\u20D2": "nLt", "\u22EA": "nltri", "\u22EC": "nltrie", "\u226A\u0338": "nLtv", "\u2224": "nmid", "\u2060": "NoBreak", "\u{1D55F}": "nopf", "\u2AEC": "Not", "\xAC": "not", "\u226D": "NotCupCap", "\u2226": "npar", "\u2209": "notin", "\u2279": "ntgl", "\u22F5\u0338": "notindot", "\u22F9\u0338": "notinE", "\u22F7": "notinvb", "\u22F6": "notinvc", "\u29CF\u0338": "NotLeftTriangleBar", "\u2278": "ntlg", "\u2AA2\u0338": "NotNestedGreaterGreater", "\u2AA1\u0338": "NotNestedLessLess", "\u220C": "notni", "\u22FE": "notnivb", "\u22FD": "notnivc", "\u2280": "npr", "\u2AAF\u0338": "npre", "\u22E0": "nprcue", "\u29D0\u0338": "NotRightTriangleBar", "\u22EB": "nrtri", "\u22ED": "nrtrie", "\u228F\u0338": "NotSquareSubset", "\u22E2": "nsqsube", "\u2290\u0338": "NotSquareSuperset", "\u22E3": "nsqsupe", "\u2282\u20D2": "vnsub", "\u2288": "nsube", "\u2281": "nsc", "\u2AB0\u0338": "nsce", "\u22E1": "nsccue", "\u227F\u0338": "NotSucceedsTilde", "\u2283\u20D2": "vnsup", "\u2289": "nsupe", "\u2241": "nsim", "\u2244": "nsime", "\u2AFD\u20E5": "nparsl", "\u2202\u0338": "npart", "\u2A14": "npolint", "\u2933\u0338": "nrarrc", "\u219B": "nrarr", "\u21CF": "nrArr", "\u219D\u0338": "nrarrw", "\u{1D4A9}": "Nscr", "\u{1D4C3}": "nscr", "\u2284": "nsub", "\u2AC5\u0338": "nsubE", "\u2285": "nsup", "\u2AC6\u0338": "nsupE", "\xD1": "Ntilde", "\xF1": "ntilde", "\u039D": "Nu", "\u03BD": "nu", "#": "num", "\u2116": "numero", "\u2007": "numsp", "\u224D\u20D2": "nvap", "\u22AC": "nvdash", "\u22AD": "nvDash", "\u22AE": "nVdash", "\u22AF": "nVDash", "\u2265\u20D2": "nvge", ">\u20D2": "nvgt", "\u2904": "nvHarr", "\u29DE": "nvinfin", "\u2902": "nvlArr", "\u2264\u20D2": "nvle", "<\u20D2": "nvlt", "\u22B4\u20D2": "nvltrie", "\u2903": "nvrArr", "\u22B5\u20D2": "nvrtrie", "\u223C\u20D2": "nvsim", "\u2923": "nwarhk", "\u2196": "nwarr", "\u21D6": "nwArr", "\u2927": "nwnear", "\xD3": "Oacute", "\xF3": "oacute", "\xD4": "Ocirc", "\xF4": "ocirc", "\u041E": "Ocy", "\u043E": "ocy", "\u0150": "Odblac", "\u0151": "odblac", "\u2A38": "odiv", "\u29BC": "odsold", "\u0152": "OElig", "\u0153": "oelig", "\u29BF": "ofcir", "\u{1D512}": "Ofr", "\u{1D52C}": "ofr", "\u02DB": "ogon", "\xD2": "Ograve", "\xF2": "ograve", "\u29C1": "ogt", "\u29B5": "ohbar", "\u03A9": "ohm", "\u29BE": "olcir", "\u29BB": "olcross", "\u203E": "oline", "\u29C0": "olt", "\u014C": "Omacr", "\u014D": "omacr", "\u03C9": "omega", "\u039F": "Omicron", "\u03BF": "omicron", "\u29B6": "omid", "\u{1D546}": "Oopf", "\u{1D560}": "oopf", "\u29B7": "opar", "\u29B9": "operp", "\u2A54": "Or", "\u2228": "or", "\u2A5D": "ord", "\u2134": "oscr", "\xAA": "ordf", "\xBA": "ordm", "\u22B6": "origof", "\u2A56": "oror", "\u2A57": "orslope", "\u2A5B": "orv", "\u{1D4AA}": "Oscr", "\xD8": "Oslash", "\xF8": "oslash", "\u2298": "osol", "\xD5": "Otilde", "\xF5": "otilde", "\u2A36": "otimesas", "\u2A37": "Otimes", "\xD6": "Ouml", "\xF6": "ouml", "\u233D": "ovbar", "\u23DE": "OverBrace", "\u23B4": "tbrk", "\u23DC": "OverParenthesis", "\xB6": "para", "\u2AF3": "parsim", "\u2AFD": "parsl", "\u2202": "part", "\u041F": "Pcy", "\u043F": "pcy", "%": "percnt", ".": "period", "\u2030": "permil", "\u2031": "pertenk", "\u{1D513}": "Pfr", "\u{1D52D}": "pfr", "\u03A6": "Phi", "\u03C6": "phi", "\u03D5": "phiv", "\u260E": "phone", "\u03A0": "Pi", "\u03C0": "pi", "\u03D6": "piv", "\u210E": "planckh", "\u2A23": "plusacir", "\u2A22": "pluscir", "+": "plus", "\u2A25": "plusdu", "\u2A72": "pluse", "\xB1": "pm", "\u2A26": "plussim", "\u2A27": "plustwo", "\u2A15": "pointint", "\u{1D561}": "popf", "\u2119": "Popf", "\xA3": "pound", "\u2AB7": "prap", "\u2ABB": "Pr", "\u227A": "pr", "\u227C": "prcue", "\u2AAF": "pre", "\u227E": "prsim", "\u2AB9": "prnap", "\u2AB5": "prnE", "\u22E8": "prnsim", "\u2AB3": "prE", "\u2032": "prime", "\u2033": "Prime", "\u220F": "prod", "\u232E": "profalar", "\u2312": "profline", "\u2313": "profsurf", "\u221D": "prop", "\u22B0": "prurel", "\u{1D4AB}": "Pscr", "\u{1D4C5}": "pscr", "\u03A8": "Psi", "\u03C8": "psi", "\u2008": "puncsp", "\u{1D514}": "Qfr", "\u{1D52E}": "qfr", "\u{1D562}": "qopf", "\u211A": "Qopf", "\u2057": "qprime", "\u{1D4AC}": "Qscr", "\u{1D4C6}": "qscr", "\u2A16": "quatint", "?": "quest", '"': "quot", "\u21DB": "rAarr", "\u223D\u0331": "race", "\u0154": "Racute", "\u0155": "racute", "\u221A": "Sqrt", "\u29B3": "raemptyv", "\u27E9": "rang", "\u27EB": "Rang", "\u2992": "rangd", "\u29A5": "range", "\xBB": "raquo", "\u2975": "rarrap", "\u21E5": "rarrb", "\u2920": "rarrbfs", "\u2933": "rarrc", "\u2192": "rarr", "\u21A0": "Rarr", "\u291E": "rarrfs", "\u2945": "rarrpl", "\u2974": "rarrsim", "\u2916": "Rarrtl", "\u21A3": "rarrtl", "\u219D": "rarrw", "\u291A": "ratail", "\u291C": "rAtail", "\u2236": "ratio", "\u2773": "rbbrk", "}": "rcub", "]": "rsqb", "\u298C": "rbrke", "\u298E": "rbrksld", "\u2990": "rbrkslu", "\u0158": "Rcaron", "\u0159": "rcaron", "\u0156": "Rcedil", "\u0157": "rcedil", "\u2309": "rceil", "\u0420": "Rcy", "\u0440": "rcy", "\u2937": "rdca", "\u2969": "rdldhar", "\u21B3": "rdsh", "\u211C": "Re", "\u211B": "Rscr", "\u211D": "Ropf", "\u25AD": "rect", "\u297D": "rfisht", "\u230B": "rfloor", "\u{1D52F}": "rfr", "\u2964": "rHar", "\u21C0": "rharu", "\u296C": "rharul", "\u03A1": "Rho", "\u03C1": "rho", "\u03F1": "rhov", "\u21C4": "rlarr", "\u27E7": "robrk", "\u295D": "RightDownTeeVector", "\u2955": "RightDownVectorBar", "\u21C9": "rrarr", "\u22A2": "vdash", "\u295B": "RightTeeVector", "\u22CC": "rthree", "\u29D0": "RightTriangleBar", "\u22B3": "vrtri", "\u22B5": "rtrie", "\u294F": "RightUpDownVector", "\u295C": "RightUpTeeVector", "\u2954": "RightUpVectorBar", "\u21BE": "uharr", "\u2953": "RightVectorBar", "\u02DA": "ring", "\u200F": "rlm", "\u23B1": "rmoust", "\u2AEE": "rnmid", "\u27ED": "roang", "\u21FE": "roarr", "\u2986": "ropar", "\u{1D563}": "ropf", "\u2A2E": "roplus", "\u2A35": "rotimes", "\u2970": "RoundImplies", ")": "rpar", "\u2994": "rpargt", "\u2A12": "rppolint", "\u203A": "rsaquo", "\u{1D4C7}": "rscr", "\u21B1": "rsh", "\u22CA": "rtimes", "\u25B9": "rtri", "\u29CE": "rtriltri", "\u29F4": "RuleDelayed", "\u2968": "ruluhar", "\u211E": "rx", "\u015A": "Sacute", "\u015B": "sacute", "\u2AB8": "scap", "\u0160": "Scaron", "\u0161": "scaron", "\u2ABC": "Sc", "\u227B": "sc", "\u227D": "sccue", "\u2AB0": "sce", "\u2AB4": "scE", "\u015E": "Scedil", "\u015F": "scedil", "\u015C": "Scirc", "\u015D": "scirc", "\u2ABA": "scnap", "\u2AB6": "scnE", "\u22E9": "scnsim", "\u2A13": "scpolint", "\u227F": "scsim", "\u0421": "Scy", "\u0441": "scy", "\u22C5": "sdot", "\u2A66": "sdote", "\u21D8": "seArr", "\xA7": "sect", ";": "semi", "\u2929": "tosa", "\u2736": "sext", "\u{1D516}": "Sfr", "\u{1D530}": "sfr", "\u266F": "sharp", "\u0429": "SHCHcy", "\u0449": "shchcy", "\u0428": "SHcy", "\u0448": "shcy", "\u2191": "uarr", "\xAD": "shy", "\u03A3": "Sigma", "\u03C3": "sigma", "\u03C2": "sigmaf", "\u223C": "sim", "\u2A6A": "simdot", "\u2243": "sime", "\u2A9E": "simg", "\u2AA0": "simgE", "\u2A9D": "siml", "\u2A9F": "simlE", "\u2246": "simne", "\u2A24": "simplus", "\u2972": "simrarr", "\u2A33": "smashp", "\u29E4": "smeparsl", "\u2323": "smile", "\u2AAA": "smt", "\u2AAC": "smte", "\u2AAC\uFE00": "smtes", "\u042C": "SOFTcy", "\u044C": "softcy", "\u233F": "solbar", "\u29C4": "solb", "/": "sol", "\u{1D54A}": "Sopf", "\u{1D564}": "sopf", "\u2660": "spades", "\u2293": "sqcap", "\u2293\uFE00": "sqcaps", "\u2294": "sqcup", "\u2294\uFE00": "sqcups", "\u228F": "sqsub", "\u2291": "sqsube", "\u2290": "sqsup", "\u2292": "sqsupe", "\u25A1": "squ", "\u{1D4AE}": "Sscr", "\u{1D4C8}": "sscr", "\u22C6": "Star", "\u2606": "star", "\u2282": "sub", "\u22D0": "Sub", "\u2ABD": "subdot", "\u2AC5": "subE", "\u2286": "sube", "\u2AC3": "subedot", "\u2AC1": "submult", "\u2ACB": "subnE", "\u228A": "subne", "\u2ABF": "subplus", "\u2979": "subrarr", "\u2AC7": "subsim", "\u2AD5": "subsub", "\u2AD3": "subsup", "\u2211": "sum", "\u266A": "sung", "\xB9": "sup1", "\xB2": "sup2", "\xB3": "sup3", "\u2283": "sup", "\u22D1": "Sup", "\u2ABE": "supdot", "\u2AD8": "supdsub", "\u2AC6": "supE", "\u2287": "supe", "\u2AC4": "supedot", "\u27C9": "suphsol", "\u2AD7": "suphsub", "\u297B": "suplarr", "\u2AC2": "supmult", "\u2ACC": "supnE", "\u228B": "supne", "\u2AC0": "supplus", "\u2AC8": "supsim", "\u2AD4": "supsub", "\u2AD6": "supsup", "\u21D9": "swArr", "\u292A": "swnwar", "\xDF": "szlig", "	": "Tab", "\u2316": "target", "\u03A4": "Tau", "\u03C4": "tau", "\u0164": "Tcaron", "\u0165": "tcaron", "\u0162": "Tcedil", "\u0163": "tcedil", "\u0422": "Tcy", "\u0442": "tcy", "\u20DB": "tdot", "\u2315": "telrec", "\u{1D517}": "Tfr", "\u{1D531}": "tfr", "\u2234": "there4", "\u0398": "Theta", "\u03B8": "theta", "\u03D1": "thetav", "\u205F\u200A": "ThickSpace", "\u2009": "thinsp", "\xDE": "THORN", "\xFE": "thorn", "\u2A31": "timesbar", "\xD7": "times", "\u2A30": "timesd", "\u2336": "topbot", "\u2AF1": "topcir", "\u{1D54B}": "Topf", "\u{1D565}": "topf", "\u2ADA": "topfork", "\u2034": "tprime", "\u2122": "trade", "\u25B5": "utri", "\u225C": "trie", "\u25EC": "tridot", "\u2A3A": "triminus", "\u2A39": "triplus", "\u29CD": "trisb", "\u2A3B": "tritime", "\u23E2": "trpezium", "\u{1D4AF}": "Tscr", "\u{1D4C9}": "tscr", "\u0426": "TScy", "\u0446": "tscy", "\u040B": "TSHcy", "\u045B": "tshcy", "\u0166": "Tstrok", "\u0167": "tstrok", "\xDA": "Uacute", "\xFA": "uacute", "\u219F": "Uarr", "\u2949": "Uarrocir", "\u040E": "Ubrcy", "\u045E": "ubrcy", "\u016C": "Ubreve", "\u016D": "ubreve", "\xDB": "Ucirc", "\xFB": "ucirc", "\u0423": "Ucy", "\u0443": "ucy", "\u21C5": "udarr", "\u0170": "Udblac", "\u0171": "udblac", "\u296E": "udhar", "\u297E": "ufisht", "\u{1D518}": "Ufr", "\u{1D532}": "ufr", "\xD9": "Ugrave", "\xF9": "ugrave", "\u2963": "uHar", "\u2580": "uhblk", "\u231C": "ulcorn", "\u230F": "ulcrop", "\u25F8": "ultri", "\u016A": "Umacr", "\u016B": "umacr", "\u23DF": "UnderBrace", "\u23DD": "UnderParenthesis", "\u228E": "uplus", "\u0172": "Uogon", "\u0173": "uogon", "\u{1D54C}": "Uopf", "\u{1D566}": "uopf", "\u2912": "UpArrowBar", "\u2195": "varr", "\u03C5": "upsi", "\u03D2": "Upsi", "\u03A5": "Upsilon", "\u21C8": "uuarr", "\u231D": "urcorn", "\u230E": "urcrop", "\u016E": "Uring", "\u016F": "uring", "\u25F9": "urtri", "\u{1D4B0}": "Uscr", "\u{1D4CA}": "uscr", "\u22F0": "utdot", "\u0168": "Utilde", "\u0169": "utilde", "\xDC": "Uuml", "\xFC": "uuml", "\u29A7": "uwangle", "\u299C": "vangrt", "\u228A\uFE00": "vsubne", "\u2ACB\uFE00": "vsubnE", "\u228B\uFE00": "vsupne", "\u2ACC\uFE00": "vsupnE", "\u2AE8": "vBar", "\u2AEB": "Vbar", "\u2AE9": "vBarv", "\u0412": "Vcy", "\u0432": "vcy", "\u22A9": "Vdash", "\u22AB": "VDash", "\u2AE6": "Vdashl", "\u22BB": "veebar", "\u225A": "veeeq", "\u22EE": "vellip", "|": "vert", "\u2016": "Vert", "\u2758": "VerticalSeparator", "\u2240": "wr", "\u{1D519}": "Vfr", "\u{1D533}": "vfr", "\u{1D54D}": "Vopf", "\u{1D567}": "vopf", "\u{1D4B1}": "Vscr", "\u{1D4CB}": "vscr", "\u22AA": "Vvdash", "\u299A": "vzigzag", "\u0174": "Wcirc", "\u0175": "wcirc", "\u2A5F": "wedbar", "\u2259": "wedgeq", "\u2118": "wp", "\u{1D51A}": "Wfr", "\u{1D534}": "wfr", "\u{1D54E}": "Wopf", "\u{1D568}": "wopf", "\u{1D4B2}": "Wscr", "\u{1D4CC}": "wscr", "\u{1D51B}": "Xfr", "\u{1D535}": "xfr", "\u039E": "Xi", "\u03BE": "xi", "\u22FB": "xnis", "\u{1D54F}": "Xopf", "\u{1D569}": "xopf", "\u{1D4B3}": "Xscr", "\u{1D4CD}": "xscr", "\xDD": "Yacute", "\xFD": "yacute", "\u042F": "YAcy", "\u044F": "yacy", "\u0176": "Ycirc", "\u0177": "ycirc", "\u042B": "Ycy", "\u044B": "ycy", "\xA5": "yen", "\u{1D51C}": "Yfr", "\u{1D536}": "yfr", "\u0407": "YIcy", "\u0457": "yicy", "\u{1D550}": "Yopf", "\u{1D56A}": "yopf", "\u{1D4B4}": "Yscr", "\u{1D4CE}": "yscr", "\u042E": "YUcy", "\u044E": "yucy", "\xFF": "yuml", "\u0178": "Yuml", "\u0179": "Zacute", "\u017A": "zacute", "\u017D": "Zcaron", "\u017E": "zcaron", "\u0417": "Zcy", "\u0437": "zcy", "\u017B": "Zdot", "\u017C": "zdot", "\u2128": "Zfr", "\u0396": "Zeta", "\u03B6": "zeta", "\u{1D537}": "zfr", "\u0416": "ZHcy", "\u0436": "zhcy", "\u21DD": "zigrarr", "\u{1D56B}": "zopf", "\u{1D4B5}": "Zscr", "\u{1D4CF}": "zscr", "\u200D": "zwj", "\u200C": "zwnj" };
      var regexEscape = /["&'<>`]/g;
      var escapeMap = {
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#x27;",
        "<": "&lt;",
        // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
        // following is not strictly necessary unless it’s part of a tag or an
        // unquoted attribute value. We’re only escaping it to support those
        // situations, and for XML support.
        ">": "&gt;",
        // In Internet Explorer ≤ 8, the backtick character can be used
        // to break out of (un)quoted attribute values or HTML comments.
        // See http://html5sec.org/#102, http://html5sec.org/#108, and
        // http://html5sec.org/#133.
        "`": "&#x60;"
      };
      var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
      var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      var regexDecode = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|iacute|Uacute|plusmn|otilde|Otilde|Agrave|agrave|yacute|Yacute|oslash|Oslash|Atilde|atilde|brvbar|Ccedil|ccedil|ograve|curren|divide|Eacute|eacute|Ograve|oacute|Egrave|egrave|ugrave|frac12|frac14|frac34|Ugrave|Oacute|Iacute|ntilde|Ntilde|uacute|middot|Igrave|igrave|iquest|aacute|laquo|THORN|micro|iexcl|icirc|Icirc|Acirc|ucirc|ecirc|Ocirc|ocirc|Ecirc|Ucirc|aring|Aring|aelig|AElig|acute|pound|raquo|acirc|times|thorn|szlig|cedil|COPY|Auml|ordf|ordm|uuml|macr|Uuml|auml|Ouml|ouml|para|nbsp|Euml|quot|QUOT|euml|yuml|cent|sect|copy|sup1|sup2|sup3|Iuml|iuml|shy|eth|reg|not|yen|amp|AMP|REG|uml|ETH|deg|gt|GT|LT|lt)([=a-zA-Z0-9])?/g;
      var decodeMap = { "Aacute": "\xC1", "aacute": "\xE1", "Abreve": "\u0102", "abreve": "\u0103", "ac": "\u223E", "acd": "\u223F", "acE": "\u223E\u0333", "Acirc": "\xC2", "acirc": "\xE2", "acute": "\xB4", "Acy": "\u0410", "acy": "\u0430", "AElig": "\xC6", "aelig": "\xE6", "af": "\u2061", "Afr": "\u{1D504}", "afr": "\u{1D51E}", "Agrave": "\xC0", "agrave": "\xE0", "alefsym": "\u2135", "aleph": "\u2135", "Alpha": "\u0391", "alpha": "\u03B1", "Amacr": "\u0100", "amacr": "\u0101", "amalg": "\u2A3F", "amp": "&", "AMP": "&", "andand": "\u2A55", "And": "\u2A53", "and": "\u2227", "andd": "\u2A5C", "andslope": "\u2A58", "andv": "\u2A5A", "ang": "\u2220", "ange": "\u29A4", "angle": "\u2220", "angmsdaa": "\u29A8", "angmsdab": "\u29A9", "angmsdac": "\u29AA", "angmsdad": "\u29AB", "angmsdae": "\u29AC", "angmsdaf": "\u29AD", "angmsdag": "\u29AE", "angmsdah": "\u29AF", "angmsd": "\u2221", "angrt": "\u221F", "angrtvb": "\u22BE", "angrtvbd": "\u299D", "angsph": "\u2222", "angst": "\xC5", "angzarr": "\u237C", "Aogon": "\u0104", "aogon": "\u0105", "Aopf": "\u{1D538}", "aopf": "\u{1D552}", "apacir": "\u2A6F", "ap": "\u2248", "apE": "\u2A70", "ape": "\u224A", "apid": "\u224B", "apos": "'", "ApplyFunction": "\u2061", "approx": "\u2248", "approxeq": "\u224A", "Aring": "\xC5", "aring": "\xE5", "Ascr": "\u{1D49C}", "ascr": "\u{1D4B6}", "Assign": "\u2254", "ast": "*", "asymp": "\u2248", "asympeq": "\u224D", "Atilde": "\xC3", "atilde": "\xE3", "Auml": "\xC4", "auml": "\xE4", "awconint": "\u2233", "awint": "\u2A11", "backcong": "\u224C", "backepsilon": "\u03F6", "backprime": "\u2035", "backsim": "\u223D", "backsimeq": "\u22CD", "Backslash": "\u2216", "Barv": "\u2AE7", "barvee": "\u22BD", "barwed": "\u2305", "Barwed": "\u2306", "barwedge": "\u2305", "bbrk": "\u23B5", "bbrktbrk": "\u23B6", "bcong": "\u224C", "Bcy": "\u0411", "bcy": "\u0431", "bdquo": "\u201E", "becaus": "\u2235", "because": "\u2235", "Because": "\u2235", "bemptyv": "\u29B0", "bepsi": "\u03F6", "bernou": "\u212C", "Bernoullis": "\u212C", "Beta": "\u0392", "beta": "\u03B2", "beth": "\u2136", "between": "\u226C", "Bfr": "\u{1D505}", "bfr": "\u{1D51F}", "bigcap": "\u22C2", "bigcirc": "\u25EF", "bigcup": "\u22C3", "bigodot": "\u2A00", "bigoplus": "\u2A01", "bigotimes": "\u2A02", "bigsqcup": "\u2A06", "bigstar": "\u2605", "bigtriangledown": "\u25BD", "bigtriangleup": "\u25B3", "biguplus": "\u2A04", "bigvee": "\u22C1", "bigwedge": "\u22C0", "bkarow": "\u290D", "blacklozenge": "\u29EB", "blacksquare": "\u25AA", "blacktriangle": "\u25B4", "blacktriangledown": "\u25BE", "blacktriangleleft": "\u25C2", "blacktriangleright": "\u25B8", "blank": "\u2423", "blk12": "\u2592", "blk14": "\u2591", "blk34": "\u2593", "block": "\u2588", "bne": "=\u20E5", "bnequiv": "\u2261\u20E5", "bNot": "\u2AED", "bnot": "\u2310", "Bopf": "\u{1D539}", "bopf": "\u{1D553}", "bot": "\u22A5", "bottom": "\u22A5", "bowtie": "\u22C8", "boxbox": "\u29C9", "boxdl": "\u2510", "boxdL": "\u2555", "boxDl": "\u2556", "boxDL": "\u2557", "boxdr": "\u250C", "boxdR": "\u2552", "boxDr": "\u2553", "boxDR": "\u2554", "boxh": "\u2500", "boxH": "\u2550", "boxhd": "\u252C", "boxHd": "\u2564", "boxhD": "\u2565", "boxHD": "\u2566", "boxhu": "\u2534", "boxHu": "\u2567", "boxhU": "\u2568", "boxHU": "\u2569", "boxminus": "\u229F", "boxplus": "\u229E", "boxtimes": "\u22A0", "boxul": "\u2518", "boxuL": "\u255B", "boxUl": "\u255C", "boxUL": "\u255D", "boxur": "\u2514", "boxuR": "\u2558", "boxUr": "\u2559", "boxUR": "\u255A", "boxv": "\u2502", "boxV": "\u2551", "boxvh": "\u253C", "boxvH": "\u256A", "boxVh": "\u256B", "boxVH": "\u256C", "boxvl": "\u2524", "boxvL": "\u2561", "boxVl": "\u2562", "boxVL": "\u2563", "boxvr": "\u251C", "boxvR": "\u255E", "boxVr": "\u255F", "boxVR": "\u2560", "bprime": "\u2035", "breve": "\u02D8", "Breve": "\u02D8", "brvbar": "\xA6", "bscr": "\u{1D4B7}", "Bscr": "\u212C", "bsemi": "\u204F", "bsim": "\u223D", "bsime": "\u22CD", "bsolb": "\u29C5", "bsol": "\\", "bsolhsub": "\u27C8", "bull": "\u2022", "bullet": "\u2022", "bump": "\u224E", "bumpE": "\u2AAE", "bumpe": "\u224F", "Bumpeq": "\u224E", "bumpeq": "\u224F", "Cacute": "\u0106", "cacute": "\u0107", "capand": "\u2A44", "capbrcup": "\u2A49", "capcap": "\u2A4B", "cap": "\u2229", "Cap": "\u22D2", "capcup": "\u2A47", "capdot": "\u2A40", "CapitalDifferentialD": "\u2145", "caps": "\u2229\uFE00", "caret": "\u2041", "caron": "\u02C7", "Cayleys": "\u212D", "ccaps": "\u2A4D", "Ccaron": "\u010C", "ccaron": "\u010D", "Ccedil": "\xC7", "ccedil": "\xE7", "Ccirc": "\u0108", "ccirc": "\u0109", "Cconint": "\u2230", "ccups": "\u2A4C", "ccupssm": "\u2A50", "Cdot": "\u010A", "cdot": "\u010B", "cedil": "\xB8", "Cedilla": "\xB8", "cemptyv": "\u29B2", "cent": "\xA2", "centerdot": "\xB7", "CenterDot": "\xB7", "cfr": "\u{1D520}", "Cfr": "\u212D", "CHcy": "\u0427", "chcy": "\u0447", "check": "\u2713", "checkmark": "\u2713", "Chi": "\u03A7", "chi": "\u03C7", "circ": "\u02C6", "circeq": "\u2257", "circlearrowleft": "\u21BA", "circlearrowright": "\u21BB", "circledast": "\u229B", "circledcirc": "\u229A", "circleddash": "\u229D", "CircleDot": "\u2299", "circledR": "\xAE", "circledS": "\u24C8", "CircleMinus": "\u2296", "CirclePlus": "\u2295", "CircleTimes": "\u2297", "cir": "\u25CB", "cirE": "\u29C3", "cire": "\u2257", "cirfnint": "\u2A10", "cirmid": "\u2AEF", "cirscir": "\u29C2", "ClockwiseContourIntegral": "\u2232", "CloseCurlyDoubleQuote": "\u201D", "CloseCurlyQuote": "\u2019", "clubs": "\u2663", "clubsuit": "\u2663", "colon": ":", "Colon": "\u2237", "Colone": "\u2A74", "colone": "\u2254", "coloneq": "\u2254", "comma": ",", "commat": "@", "comp": "\u2201", "compfn": "\u2218", "complement": "\u2201", "complexes": "\u2102", "cong": "\u2245", "congdot": "\u2A6D", "Congruent": "\u2261", "conint": "\u222E", "Conint": "\u222F", "ContourIntegral": "\u222E", "copf": "\u{1D554}", "Copf": "\u2102", "coprod": "\u2210", "Coproduct": "\u2210", "copy": "\xA9", "COPY": "\xA9", "copysr": "\u2117", "CounterClockwiseContourIntegral": "\u2233", "crarr": "\u21B5", "cross": "\u2717", "Cross": "\u2A2F", "Cscr": "\u{1D49E}", "cscr": "\u{1D4B8}", "csub": "\u2ACF", "csube": "\u2AD1", "csup": "\u2AD0", "csupe": "\u2AD2", "ctdot": "\u22EF", "cudarrl": "\u2938", "cudarrr": "\u2935", "cuepr": "\u22DE", "cuesc": "\u22DF", "cularr": "\u21B6", "cularrp": "\u293D", "cupbrcap": "\u2A48", "cupcap": "\u2A46", "CupCap": "\u224D", "cup": "\u222A", "Cup": "\u22D3", "cupcup": "\u2A4A", "cupdot": "\u228D", "cupor": "\u2A45", "cups": "\u222A\uFE00", "curarr": "\u21B7", "curarrm": "\u293C", "curlyeqprec": "\u22DE", "curlyeqsucc": "\u22DF", "curlyvee": "\u22CE", "curlywedge": "\u22CF", "curren": "\xA4", "curvearrowleft": "\u21B6", "curvearrowright": "\u21B7", "cuvee": "\u22CE", "cuwed": "\u22CF", "cwconint": "\u2232", "cwint": "\u2231", "cylcty": "\u232D", "dagger": "\u2020", "Dagger": "\u2021", "daleth": "\u2138", "darr": "\u2193", "Darr": "\u21A1", "dArr": "\u21D3", "dash": "\u2010", "Dashv": "\u2AE4", "dashv": "\u22A3", "dbkarow": "\u290F", "dblac": "\u02DD", "Dcaron": "\u010E", "dcaron": "\u010F", "Dcy": "\u0414", "dcy": "\u0434", "ddagger": "\u2021", "ddarr": "\u21CA", "DD": "\u2145", "dd": "\u2146", "DDotrahd": "\u2911", "ddotseq": "\u2A77", "deg": "\xB0", "Del": "\u2207", "Delta": "\u0394", "delta": "\u03B4", "demptyv": "\u29B1", "dfisht": "\u297F", "Dfr": "\u{1D507}", "dfr": "\u{1D521}", "dHar": "\u2965", "dharl": "\u21C3", "dharr": "\u21C2", "DiacriticalAcute": "\xB4", "DiacriticalDot": "\u02D9", "DiacriticalDoubleAcute": "\u02DD", "DiacriticalGrave": "`", "DiacriticalTilde": "\u02DC", "diam": "\u22C4", "diamond": "\u22C4", "Diamond": "\u22C4", "diamondsuit": "\u2666", "diams": "\u2666", "die": "\xA8", "DifferentialD": "\u2146", "digamma": "\u03DD", "disin": "\u22F2", "div": "\xF7", "divide": "\xF7", "divideontimes": "\u22C7", "divonx": "\u22C7", "DJcy": "\u0402", "djcy": "\u0452", "dlcorn": "\u231E", "dlcrop": "\u230D", "dollar": "$", "Dopf": "\u{1D53B}", "dopf": "\u{1D555}", "Dot": "\xA8", "dot": "\u02D9", "DotDot": "\u20DC", "doteq": "\u2250", "doteqdot": "\u2251", "DotEqual": "\u2250", "dotminus": "\u2238", "dotplus": "\u2214", "dotsquare": "\u22A1", "doublebarwedge": "\u2306", "DoubleContourIntegral": "\u222F", "DoubleDot": "\xA8", "DoubleDownArrow": "\u21D3", "DoubleLeftArrow": "\u21D0", "DoubleLeftRightArrow": "\u21D4", "DoubleLeftTee": "\u2AE4", "DoubleLongLeftArrow": "\u27F8", "DoubleLongLeftRightArrow": "\u27FA", "DoubleLongRightArrow": "\u27F9", "DoubleRightArrow": "\u21D2", "DoubleRightTee": "\u22A8", "DoubleUpArrow": "\u21D1", "DoubleUpDownArrow": "\u21D5", "DoubleVerticalBar": "\u2225", "DownArrowBar": "\u2913", "downarrow": "\u2193", "DownArrow": "\u2193", "Downarrow": "\u21D3", "DownArrowUpArrow": "\u21F5", "DownBreve": "\u0311", "downdownarrows": "\u21CA", "downharpoonleft": "\u21C3", "downharpoonright": "\u21C2", "DownLeftRightVector": "\u2950", "DownLeftTeeVector": "\u295E", "DownLeftVectorBar": "\u2956", "DownLeftVector": "\u21BD", "DownRightTeeVector": "\u295F", "DownRightVectorBar": "\u2957", "DownRightVector": "\u21C1", "DownTeeArrow": "\u21A7", "DownTee": "\u22A4", "drbkarow": "\u2910", "drcorn": "\u231F", "drcrop": "\u230C", "Dscr": "\u{1D49F}", "dscr": "\u{1D4B9}", "DScy": "\u0405", "dscy": "\u0455", "dsol": "\u29F6", "Dstrok": "\u0110", "dstrok": "\u0111", "dtdot": "\u22F1", "dtri": "\u25BF", "dtrif": "\u25BE", "duarr": "\u21F5", "duhar": "\u296F", "dwangle": "\u29A6", "DZcy": "\u040F", "dzcy": "\u045F", "dzigrarr": "\u27FF", "Eacute": "\xC9", "eacute": "\xE9", "easter": "\u2A6E", "Ecaron": "\u011A", "ecaron": "\u011B", "Ecirc": "\xCA", "ecirc": "\xEA", "ecir": "\u2256", "ecolon": "\u2255", "Ecy": "\u042D", "ecy": "\u044D", "eDDot": "\u2A77", "Edot": "\u0116", "edot": "\u0117", "eDot": "\u2251", "ee": "\u2147", "efDot": "\u2252", "Efr": "\u{1D508}", "efr": "\u{1D522}", "eg": "\u2A9A", "Egrave": "\xC8", "egrave": "\xE8", "egs": "\u2A96", "egsdot": "\u2A98", "el": "\u2A99", "Element": "\u2208", "elinters": "\u23E7", "ell": "\u2113", "els": "\u2A95", "elsdot": "\u2A97", "Emacr": "\u0112", "emacr": "\u0113", "empty": "\u2205", "emptyset": "\u2205", "EmptySmallSquare": "\u25FB", "emptyv": "\u2205", "EmptyVerySmallSquare": "\u25AB", "emsp13": "\u2004", "emsp14": "\u2005", "emsp": "\u2003", "ENG": "\u014A", "eng": "\u014B", "ensp": "\u2002", "Eogon": "\u0118", "eogon": "\u0119", "Eopf": "\u{1D53C}", "eopf": "\u{1D556}", "epar": "\u22D5", "eparsl": "\u29E3", "eplus": "\u2A71", "epsi": "\u03B5", "Epsilon": "\u0395", "epsilon": "\u03B5", "epsiv": "\u03F5", "eqcirc": "\u2256", "eqcolon": "\u2255", "eqsim": "\u2242", "eqslantgtr": "\u2A96", "eqslantless": "\u2A95", "Equal": "\u2A75", "equals": "=", "EqualTilde": "\u2242", "equest": "\u225F", "Equilibrium": "\u21CC", "equiv": "\u2261", "equivDD": "\u2A78", "eqvparsl": "\u29E5", "erarr": "\u2971", "erDot": "\u2253", "escr": "\u212F", "Escr": "\u2130", "esdot": "\u2250", "Esim": "\u2A73", "esim": "\u2242", "Eta": "\u0397", "eta": "\u03B7", "ETH": "\xD0", "eth": "\xF0", "Euml": "\xCB", "euml": "\xEB", "euro": "\u20AC", "excl": "!", "exist": "\u2203", "Exists": "\u2203", "expectation": "\u2130", "exponentiale": "\u2147", "ExponentialE": "\u2147", "fallingdotseq": "\u2252", "Fcy": "\u0424", "fcy": "\u0444", "female": "\u2640", "ffilig": "\uFB03", "fflig": "\uFB00", "ffllig": "\uFB04", "Ffr": "\u{1D509}", "ffr": "\u{1D523}", "filig": "\uFB01", "FilledSmallSquare": "\u25FC", "FilledVerySmallSquare": "\u25AA", "fjlig": "fj", "flat": "\u266D", "fllig": "\uFB02", "fltns": "\u25B1", "fnof": "\u0192", "Fopf": "\u{1D53D}", "fopf": "\u{1D557}", "forall": "\u2200", "ForAll": "\u2200", "fork": "\u22D4", "forkv": "\u2AD9", "Fouriertrf": "\u2131", "fpartint": "\u2A0D", "frac12": "\xBD", "frac13": "\u2153", "frac14": "\xBC", "frac15": "\u2155", "frac16": "\u2159", "frac18": "\u215B", "frac23": "\u2154", "frac25": "\u2156", "frac34": "\xBE", "frac35": "\u2157", "frac38": "\u215C", "frac45": "\u2158", "frac56": "\u215A", "frac58": "\u215D", "frac78": "\u215E", "frasl": "\u2044", "frown": "\u2322", "fscr": "\u{1D4BB}", "Fscr": "\u2131", "gacute": "\u01F5", "Gamma": "\u0393", "gamma": "\u03B3", "Gammad": "\u03DC", "gammad": "\u03DD", "gap": "\u2A86", "Gbreve": "\u011E", "gbreve": "\u011F", "Gcedil": "\u0122", "Gcirc": "\u011C", "gcirc": "\u011D", "Gcy": "\u0413", "gcy": "\u0433", "Gdot": "\u0120", "gdot": "\u0121", "ge": "\u2265", "gE": "\u2267", "gEl": "\u2A8C", "gel": "\u22DB", "geq": "\u2265", "geqq": "\u2267", "geqslant": "\u2A7E", "gescc": "\u2AA9", "ges": "\u2A7E", "gesdot": "\u2A80", "gesdoto": "\u2A82", "gesdotol": "\u2A84", "gesl": "\u22DB\uFE00", "gesles": "\u2A94", "Gfr": "\u{1D50A}", "gfr": "\u{1D524}", "gg": "\u226B", "Gg": "\u22D9", "ggg": "\u22D9", "gimel": "\u2137", "GJcy": "\u0403", "gjcy": "\u0453", "gla": "\u2AA5", "gl": "\u2277", "glE": "\u2A92", "glj": "\u2AA4", "gnap": "\u2A8A", "gnapprox": "\u2A8A", "gne": "\u2A88", "gnE": "\u2269", "gneq": "\u2A88", "gneqq": "\u2269", "gnsim": "\u22E7", "Gopf": "\u{1D53E}", "gopf": "\u{1D558}", "grave": "`", "GreaterEqual": "\u2265", "GreaterEqualLess": "\u22DB", "GreaterFullEqual": "\u2267", "GreaterGreater": "\u2AA2", "GreaterLess": "\u2277", "GreaterSlantEqual": "\u2A7E", "GreaterTilde": "\u2273", "Gscr": "\u{1D4A2}", "gscr": "\u210A", "gsim": "\u2273", "gsime": "\u2A8E", "gsiml": "\u2A90", "gtcc": "\u2AA7", "gtcir": "\u2A7A", "gt": ">", "GT": ">", "Gt": "\u226B", "gtdot": "\u22D7", "gtlPar": "\u2995", "gtquest": "\u2A7C", "gtrapprox": "\u2A86", "gtrarr": "\u2978", "gtrdot": "\u22D7", "gtreqless": "\u22DB", "gtreqqless": "\u2A8C", "gtrless": "\u2277", "gtrsim": "\u2273", "gvertneqq": "\u2269\uFE00", "gvnE": "\u2269\uFE00", "Hacek": "\u02C7", "hairsp": "\u200A", "half": "\xBD", "hamilt": "\u210B", "HARDcy": "\u042A", "hardcy": "\u044A", "harrcir": "\u2948", "harr": "\u2194", "hArr": "\u21D4", "harrw": "\u21AD", "Hat": "^", "hbar": "\u210F", "Hcirc": "\u0124", "hcirc": "\u0125", "hearts": "\u2665", "heartsuit": "\u2665", "hellip": "\u2026", "hercon": "\u22B9", "hfr": "\u{1D525}", "Hfr": "\u210C", "HilbertSpace": "\u210B", "hksearow": "\u2925", "hkswarow": "\u2926", "hoarr": "\u21FF", "homtht": "\u223B", "hookleftarrow": "\u21A9", "hookrightarrow": "\u21AA", "hopf": "\u{1D559}", "Hopf": "\u210D", "horbar": "\u2015", "HorizontalLine": "\u2500", "hscr": "\u{1D4BD}", "Hscr": "\u210B", "hslash": "\u210F", "Hstrok": "\u0126", "hstrok": "\u0127", "HumpDownHump": "\u224E", "HumpEqual": "\u224F", "hybull": "\u2043", "hyphen": "\u2010", "Iacute": "\xCD", "iacute": "\xED", "ic": "\u2063", "Icirc": "\xCE", "icirc": "\xEE", "Icy": "\u0418", "icy": "\u0438", "Idot": "\u0130", "IEcy": "\u0415", "iecy": "\u0435", "iexcl": "\xA1", "iff": "\u21D4", "ifr": "\u{1D526}", "Ifr": "\u2111", "Igrave": "\xCC", "igrave": "\xEC", "ii": "\u2148", "iiiint": "\u2A0C", "iiint": "\u222D", "iinfin": "\u29DC", "iiota": "\u2129", "IJlig": "\u0132", "ijlig": "\u0133", "Imacr": "\u012A", "imacr": "\u012B", "image": "\u2111", "ImaginaryI": "\u2148", "imagline": "\u2110", "imagpart": "\u2111", "imath": "\u0131", "Im": "\u2111", "imof": "\u22B7", "imped": "\u01B5", "Implies": "\u21D2", "incare": "\u2105", "in": "\u2208", "infin": "\u221E", "infintie": "\u29DD", "inodot": "\u0131", "intcal": "\u22BA", "int": "\u222B", "Int": "\u222C", "integers": "\u2124", "Integral": "\u222B", "intercal": "\u22BA", "Intersection": "\u22C2", "intlarhk": "\u2A17", "intprod": "\u2A3C", "InvisibleComma": "\u2063", "InvisibleTimes": "\u2062", "IOcy": "\u0401", "iocy": "\u0451", "Iogon": "\u012E", "iogon": "\u012F", "Iopf": "\u{1D540}", "iopf": "\u{1D55A}", "Iota": "\u0399", "iota": "\u03B9", "iprod": "\u2A3C", "iquest": "\xBF", "iscr": "\u{1D4BE}", "Iscr": "\u2110", "isin": "\u2208", "isindot": "\u22F5", "isinE": "\u22F9", "isins": "\u22F4", "isinsv": "\u22F3", "isinv": "\u2208", "it": "\u2062", "Itilde": "\u0128", "itilde": "\u0129", "Iukcy": "\u0406", "iukcy": "\u0456", "Iuml": "\xCF", "iuml": "\xEF", "Jcirc": "\u0134", "jcirc": "\u0135", "Jcy": "\u0419", "jcy": "\u0439", "Jfr": "\u{1D50D}", "jfr": "\u{1D527}", "jmath": "\u0237", "Jopf": "\u{1D541}", "jopf": "\u{1D55B}", "Jscr": "\u{1D4A5}", "jscr": "\u{1D4BF}", "Jsercy": "\u0408", "jsercy": "\u0458", "Jukcy": "\u0404", "jukcy": "\u0454", "Kappa": "\u039A", "kappa": "\u03BA", "kappav": "\u03F0", "Kcedil": "\u0136", "kcedil": "\u0137", "Kcy": "\u041A", "kcy": "\u043A", "Kfr": "\u{1D50E}", "kfr": "\u{1D528}", "kgreen": "\u0138", "KHcy": "\u0425", "khcy": "\u0445", "KJcy": "\u040C", "kjcy": "\u045C", "Kopf": "\u{1D542}", "kopf": "\u{1D55C}", "Kscr": "\u{1D4A6}", "kscr": "\u{1D4C0}", "lAarr": "\u21DA", "Lacute": "\u0139", "lacute": "\u013A", "laemptyv": "\u29B4", "lagran": "\u2112", "Lambda": "\u039B", "lambda": "\u03BB", "lang": "\u27E8", "Lang": "\u27EA", "langd": "\u2991", "langle": "\u27E8", "lap": "\u2A85", "Laplacetrf": "\u2112", "laquo": "\xAB", "larrb": "\u21E4", "larrbfs": "\u291F", "larr": "\u2190", "Larr": "\u219E", "lArr": "\u21D0", "larrfs": "\u291D", "larrhk": "\u21A9", "larrlp": "\u21AB", "larrpl": "\u2939", "larrsim": "\u2973", "larrtl": "\u21A2", "latail": "\u2919", "lAtail": "\u291B", "lat": "\u2AAB", "late": "\u2AAD", "lates": "\u2AAD\uFE00", "lbarr": "\u290C", "lBarr": "\u290E", "lbbrk": "\u2772", "lbrace": "{", "lbrack": "[", "lbrke": "\u298B", "lbrksld": "\u298F", "lbrkslu": "\u298D", "Lcaron": "\u013D", "lcaron": "\u013E", "Lcedil": "\u013B", "lcedil": "\u013C", "lceil": "\u2308", "lcub": "{", "Lcy": "\u041B", "lcy": "\u043B", "ldca": "\u2936", "ldquo": "\u201C", "ldquor": "\u201E", "ldrdhar": "\u2967", "ldrushar": "\u294B", "ldsh": "\u21B2", "le": "\u2264", "lE": "\u2266", "LeftAngleBracket": "\u27E8", "LeftArrowBar": "\u21E4", "leftarrow": "\u2190", "LeftArrow": "\u2190", "Leftarrow": "\u21D0", "LeftArrowRightArrow": "\u21C6", "leftarrowtail": "\u21A2", "LeftCeiling": "\u2308", "LeftDoubleBracket": "\u27E6", "LeftDownTeeVector": "\u2961", "LeftDownVectorBar": "\u2959", "LeftDownVector": "\u21C3", "LeftFloor": "\u230A", "leftharpoondown": "\u21BD", "leftharpoonup": "\u21BC", "leftleftarrows": "\u21C7", "leftrightarrow": "\u2194", "LeftRightArrow": "\u2194", "Leftrightarrow": "\u21D4", "leftrightarrows": "\u21C6", "leftrightharpoons": "\u21CB", "leftrightsquigarrow": "\u21AD", "LeftRightVector": "\u294E", "LeftTeeArrow": "\u21A4", "LeftTee": "\u22A3", "LeftTeeVector": "\u295A", "leftthreetimes": "\u22CB", "LeftTriangleBar": "\u29CF", "LeftTriangle": "\u22B2", "LeftTriangleEqual": "\u22B4", "LeftUpDownVector": "\u2951", "LeftUpTeeVector": "\u2960", "LeftUpVectorBar": "\u2958", "LeftUpVector": "\u21BF", "LeftVectorBar": "\u2952", "LeftVector": "\u21BC", "lEg": "\u2A8B", "leg": "\u22DA", "leq": "\u2264", "leqq": "\u2266", "leqslant": "\u2A7D", "lescc": "\u2AA8", "les": "\u2A7D", "lesdot": "\u2A7F", "lesdoto": "\u2A81", "lesdotor": "\u2A83", "lesg": "\u22DA\uFE00", "lesges": "\u2A93", "lessapprox": "\u2A85", "lessdot": "\u22D6", "lesseqgtr": "\u22DA", "lesseqqgtr": "\u2A8B", "LessEqualGreater": "\u22DA", "LessFullEqual": "\u2266", "LessGreater": "\u2276", "lessgtr": "\u2276", "LessLess": "\u2AA1", "lesssim": "\u2272", "LessSlantEqual": "\u2A7D", "LessTilde": "\u2272", "lfisht": "\u297C", "lfloor": "\u230A", "Lfr": "\u{1D50F}", "lfr": "\u{1D529}", "lg": "\u2276", "lgE": "\u2A91", "lHar": "\u2962", "lhard": "\u21BD", "lharu": "\u21BC", "lharul": "\u296A", "lhblk": "\u2584", "LJcy": "\u0409", "ljcy": "\u0459", "llarr": "\u21C7", "ll": "\u226A", "Ll": "\u22D8", "llcorner": "\u231E", "Lleftarrow": "\u21DA", "llhard": "\u296B", "lltri": "\u25FA", "Lmidot": "\u013F", "lmidot": "\u0140", "lmoustache": "\u23B0", "lmoust": "\u23B0", "lnap": "\u2A89", "lnapprox": "\u2A89", "lne": "\u2A87", "lnE": "\u2268", "lneq": "\u2A87", "lneqq": "\u2268", "lnsim": "\u22E6", "loang": "\u27EC", "loarr": "\u21FD", "lobrk": "\u27E6", "longleftarrow": "\u27F5", "LongLeftArrow": "\u27F5", "Longleftarrow": "\u27F8", "longleftrightarrow": "\u27F7", "LongLeftRightArrow": "\u27F7", "Longleftrightarrow": "\u27FA", "longmapsto": "\u27FC", "longrightarrow": "\u27F6", "LongRightArrow": "\u27F6", "Longrightarrow": "\u27F9", "looparrowleft": "\u21AB", "looparrowright": "\u21AC", "lopar": "\u2985", "Lopf": "\u{1D543}", "lopf": "\u{1D55D}", "loplus": "\u2A2D", "lotimes": "\u2A34", "lowast": "\u2217", "lowbar": "_", "LowerLeftArrow": "\u2199", "LowerRightArrow": "\u2198", "loz": "\u25CA", "lozenge": "\u25CA", "lozf": "\u29EB", "lpar": "(", "lparlt": "\u2993", "lrarr": "\u21C6", "lrcorner": "\u231F", "lrhar": "\u21CB", "lrhard": "\u296D", "lrm": "\u200E", "lrtri": "\u22BF", "lsaquo": "\u2039", "lscr": "\u{1D4C1}", "Lscr": "\u2112", "lsh": "\u21B0", "Lsh": "\u21B0", "lsim": "\u2272", "lsime": "\u2A8D", "lsimg": "\u2A8F", "lsqb": "[", "lsquo": "\u2018", "lsquor": "\u201A", "Lstrok": "\u0141", "lstrok": "\u0142", "ltcc": "\u2AA6", "ltcir": "\u2A79", "lt": "<", "LT": "<", "Lt": "\u226A", "ltdot": "\u22D6", "lthree": "\u22CB", "ltimes": "\u22C9", "ltlarr": "\u2976", "ltquest": "\u2A7B", "ltri": "\u25C3", "ltrie": "\u22B4", "ltrif": "\u25C2", "ltrPar": "\u2996", "lurdshar": "\u294A", "luruhar": "\u2966", "lvertneqq": "\u2268\uFE00", "lvnE": "\u2268\uFE00", "macr": "\xAF", "male": "\u2642", "malt": "\u2720", "maltese": "\u2720", "Map": "\u2905", "map": "\u21A6", "mapsto": "\u21A6", "mapstodown": "\u21A7", "mapstoleft": "\u21A4", "mapstoup": "\u21A5", "marker": "\u25AE", "mcomma": "\u2A29", "Mcy": "\u041C", "mcy": "\u043C", "mdash": "\u2014", "mDDot": "\u223A", "measuredangle": "\u2221", "MediumSpace": "\u205F", "Mellintrf": "\u2133", "Mfr": "\u{1D510}", "mfr": "\u{1D52A}", "mho": "\u2127", "micro": "\xB5", "midast": "*", "midcir": "\u2AF0", "mid": "\u2223", "middot": "\xB7", "minusb": "\u229F", "minus": "\u2212", "minusd": "\u2238", "minusdu": "\u2A2A", "MinusPlus": "\u2213", "mlcp": "\u2ADB", "mldr": "\u2026", "mnplus": "\u2213", "models": "\u22A7", "Mopf": "\u{1D544}", "mopf": "\u{1D55E}", "mp": "\u2213", "mscr": "\u{1D4C2}", "Mscr": "\u2133", "mstpos": "\u223E", "Mu": "\u039C", "mu": "\u03BC", "multimap": "\u22B8", "mumap": "\u22B8", "nabla": "\u2207", "Nacute": "\u0143", "nacute": "\u0144", "nang": "\u2220\u20D2", "nap": "\u2249", "napE": "\u2A70\u0338", "napid": "\u224B\u0338", "napos": "\u0149", "napprox": "\u2249", "natural": "\u266E", "naturals": "\u2115", "natur": "\u266E", "nbsp": "\xA0", "nbump": "\u224E\u0338", "nbumpe": "\u224F\u0338", "ncap": "\u2A43", "Ncaron": "\u0147", "ncaron": "\u0148", "Ncedil": "\u0145", "ncedil": "\u0146", "ncong": "\u2247", "ncongdot": "\u2A6D\u0338", "ncup": "\u2A42", "Ncy": "\u041D", "ncy": "\u043D", "ndash": "\u2013", "nearhk": "\u2924", "nearr": "\u2197", "neArr": "\u21D7", "nearrow": "\u2197", "ne": "\u2260", "nedot": "\u2250\u0338", "NegativeMediumSpace": "\u200B", "NegativeThickSpace": "\u200B", "NegativeThinSpace": "\u200B", "NegativeVeryThinSpace": "\u200B", "nequiv": "\u2262", "nesear": "\u2928", "nesim": "\u2242\u0338", "NestedGreaterGreater": "\u226B", "NestedLessLess": "\u226A", "NewLine": "\n", "nexist": "\u2204", "nexists": "\u2204", "Nfr": "\u{1D511}", "nfr": "\u{1D52B}", "ngE": "\u2267\u0338", "nge": "\u2271", "ngeq": "\u2271", "ngeqq": "\u2267\u0338", "ngeqslant": "\u2A7E\u0338", "nges": "\u2A7E\u0338", "nGg": "\u22D9\u0338", "ngsim": "\u2275", "nGt": "\u226B\u20D2", "ngt": "\u226F", "ngtr": "\u226F", "nGtv": "\u226B\u0338", "nharr": "\u21AE", "nhArr": "\u21CE", "nhpar": "\u2AF2", "ni": "\u220B", "nis": "\u22FC", "nisd": "\u22FA", "niv": "\u220B", "NJcy": "\u040A", "njcy": "\u045A", "nlarr": "\u219A", "nlArr": "\u21CD", "nldr": "\u2025", "nlE": "\u2266\u0338", "nle": "\u2270", "nleftarrow": "\u219A", "nLeftarrow": "\u21CD", "nleftrightarrow": "\u21AE", "nLeftrightarrow": "\u21CE", "nleq": "\u2270", "nleqq": "\u2266\u0338", "nleqslant": "\u2A7D\u0338", "nles": "\u2A7D\u0338", "nless": "\u226E", "nLl": "\u22D8\u0338", "nlsim": "\u2274", "nLt": "\u226A\u20D2", "nlt": "\u226E", "nltri": "\u22EA", "nltrie": "\u22EC", "nLtv": "\u226A\u0338", "nmid": "\u2224", "NoBreak": "\u2060", "NonBreakingSpace": "\xA0", "nopf": "\u{1D55F}", "Nopf": "\u2115", "Not": "\u2AEC", "not": "\xAC", "NotCongruent": "\u2262", "NotCupCap": "\u226D", "NotDoubleVerticalBar": "\u2226", "NotElement": "\u2209", "NotEqual": "\u2260", "NotEqualTilde": "\u2242\u0338", "NotExists": "\u2204", "NotGreater": "\u226F", "NotGreaterEqual": "\u2271", "NotGreaterFullEqual": "\u2267\u0338", "NotGreaterGreater": "\u226B\u0338", "NotGreaterLess": "\u2279", "NotGreaterSlantEqual": "\u2A7E\u0338", "NotGreaterTilde": "\u2275", "NotHumpDownHump": "\u224E\u0338", "NotHumpEqual": "\u224F\u0338", "notin": "\u2209", "notindot": "\u22F5\u0338", "notinE": "\u22F9\u0338", "notinva": "\u2209", "notinvb": "\u22F7", "notinvc": "\u22F6", "NotLeftTriangleBar": "\u29CF\u0338", "NotLeftTriangle": "\u22EA", "NotLeftTriangleEqual": "\u22EC", "NotLess": "\u226E", "NotLessEqual": "\u2270", "NotLessGreater": "\u2278", "NotLessLess": "\u226A\u0338", "NotLessSlantEqual": "\u2A7D\u0338", "NotLessTilde": "\u2274", "NotNestedGreaterGreater": "\u2AA2\u0338", "NotNestedLessLess": "\u2AA1\u0338", "notni": "\u220C", "notniva": "\u220C", "notnivb": "\u22FE", "notnivc": "\u22FD", "NotPrecedes": "\u2280", "NotPrecedesEqual": "\u2AAF\u0338", "NotPrecedesSlantEqual": "\u22E0", "NotReverseElement": "\u220C", "NotRightTriangleBar": "\u29D0\u0338", "NotRightTriangle": "\u22EB", "NotRightTriangleEqual": "\u22ED", "NotSquareSubset": "\u228F\u0338", "NotSquareSubsetEqual": "\u22E2", "NotSquareSuperset": "\u2290\u0338", "NotSquareSupersetEqual": "\u22E3", "NotSubset": "\u2282\u20D2", "NotSubsetEqual": "\u2288", "NotSucceeds": "\u2281", "NotSucceedsEqual": "\u2AB0\u0338", "NotSucceedsSlantEqual": "\u22E1", "NotSucceedsTilde": "\u227F\u0338", "NotSuperset": "\u2283\u20D2", "NotSupersetEqual": "\u2289", "NotTilde": "\u2241", "NotTildeEqual": "\u2244", "NotTildeFullEqual": "\u2247", "NotTildeTilde": "\u2249", "NotVerticalBar": "\u2224", "nparallel": "\u2226", "npar": "\u2226", "nparsl": "\u2AFD\u20E5", "npart": "\u2202\u0338", "npolint": "\u2A14", "npr": "\u2280", "nprcue": "\u22E0", "nprec": "\u2280", "npreceq": "\u2AAF\u0338", "npre": "\u2AAF\u0338", "nrarrc": "\u2933\u0338", "nrarr": "\u219B", "nrArr": "\u21CF", "nrarrw": "\u219D\u0338", "nrightarrow": "\u219B", "nRightarrow": "\u21CF", "nrtri": "\u22EB", "nrtrie": "\u22ED", "nsc": "\u2281", "nsccue": "\u22E1", "nsce": "\u2AB0\u0338", "Nscr": "\u{1D4A9}", "nscr": "\u{1D4C3}", "nshortmid": "\u2224", "nshortparallel": "\u2226", "nsim": "\u2241", "nsime": "\u2244", "nsimeq": "\u2244", "nsmid": "\u2224", "nspar": "\u2226", "nsqsube": "\u22E2", "nsqsupe": "\u22E3", "nsub": "\u2284", "nsubE": "\u2AC5\u0338", "nsube": "\u2288", "nsubset": "\u2282\u20D2", "nsubseteq": "\u2288", "nsubseteqq": "\u2AC5\u0338", "nsucc": "\u2281", "nsucceq": "\u2AB0\u0338", "nsup": "\u2285", "nsupE": "\u2AC6\u0338", "nsupe": "\u2289", "nsupset": "\u2283\u20D2", "nsupseteq": "\u2289", "nsupseteqq": "\u2AC6\u0338", "ntgl": "\u2279", "Ntilde": "\xD1", "ntilde": "\xF1", "ntlg": "\u2278", "ntriangleleft": "\u22EA", "ntrianglelefteq": "\u22EC", "ntriangleright": "\u22EB", "ntrianglerighteq": "\u22ED", "Nu": "\u039D", "nu": "\u03BD", "num": "#", "numero": "\u2116", "numsp": "\u2007", "nvap": "\u224D\u20D2", "nvdash": "\u22AC", "nvDash": "\u22AD", "nVdash": "\u22AE", "nVDash": "\u22AF", "nvge": "\u2265\u20D2", "nvgt": ">\u20D2", "nvHarr": "\u2904", "nvinfin": "\u29DE", "nvlArr": "\u2902", "nvle": "\u2264\u20D2", "nvlt": "<\u20D2", "nvltrie": "\u22B4\u20D2", "nvrArr": "\u2903", "nvrtrie": "\u22B5\u20D2", "nvsim": "\u223C\u20D2", "nwarhk": "\u2923", "nwarr": "\u2196", "nwArr": "\u21D6", "nwarrow": "\u2196", "nwnear": "\u2927", "Oacute": "\xD3", "oacute": "\xF3", "oast": "\u229B", "Ocirc": "\xD4", "ocirc": "\xF4", "ocir": "\u229A", "Ocy": "\u041E", "ocy": "\u043E", "odash": "\u229D", "Odblac": "\u0150", "odblac": "\u0151", "odiv": "\u2A38", "odot": "\u2299", "odsold": "\u29BC", "OElig": "\u0152", "oelig": "\u0153", "ofcir": "\u29BF", "Ofr": "\u{1D512}", "ofr": "\u{1D52C}", "ogon": "\u02DB", "Ograve": "\xD2", "ograve": "\xF2", "ogt": "\u29C1", "ohbar": "\u29B5", "ohm": "\u03A9", "oint": "\u222E", "olarr": "\u21BA", "olcir": "\u29BE", "olcross": "\u29BB", "oline": "\u203E", "olt": "\u29C0", "Omacr": "\u014C", "omacr": "\u014D", "Omega": "\u03A9", "omega": "\u03C9", "Omicron": "\u039F", "omicron": "\u03BF", "omid": "\u29B6", "ominus": "\u2296", "Oopf": "\u{1D546}", "oopf": "\u{1D560}", "opar": "\u29B7", "OpenCurlyDoubleQuote": "\u201C", "OpenCurlyQuote": "\u2018", "operp": "\u29B9", "oplus": "\u2295", "orarr": "\u21BB", "Or": "\u2A54", "or": "\u2228", "ord": "\u2A5D", "order": "\u2134", "orderof": "\u2134", "ordf": "\xAA", "ordm": "\xBA", "origof": "\u22B6", "oror": "\u2A56", "orslope": "\u2A57", "orv": "\u2A5B", "oS": "\u24C8", "Oscr": "\u{1D4AA}", "oscr": "\u2134", "Oslash": "\xD8", "oslash": "\xF8", "osol": "\u2298", "Otilde": "\xD5", "otilde": "\xF5", "otimesas": "\u2A36", "Otimes": "\u2A37", "otimes": "\u2297", "Ouml": "\xD6", "ouml": "\xF6", "ovbar": "\u233D", "OverBar": "\u203E", "OverBrace": "\u23DE", "OverBracket": "\u23B4", "OverParenthesis": "\u23DC", "para": "\xB6", "parallel": "\u2225", "par": "\u2225", "parsim": "\u2AF3", "parsl": "\u2AFD", "part": "\u2202", "PartialD": "\u2202", "Pcy": "\u041F", "pcy": "\u043F", "percnt": "%", "period": ".", "permil": "\u2030", "perp": "\u22A5", "pertenk": "\u2031", "Pfr": "\u{1D513}", "pfr": "\u{1D52D}", "Phi": "\u03A6", "phi": "\u03C6", "phiv": "\u03D5", "phmmat": "\u2133", "phone": "\u260E", "Pi": "\u03A0", "pi": "\u03C0", "pitchfork": "\u22D4", "piv": "\u03D6", "planck": "\u210F", "planckh": "\u210E", "plankv": "\u210F", "plusacir": "\u2A23", "plusb": "\u229E", "pluscir": "\u2A22", "plus": "+", "plusdo": "\u2214", "plusdu": "\u2A25", "pluse": "\u2A72", "PlusMinus": "\xB1", "plusmn": "\xB1", "plussim": "\u2A26", "plustwo": "\u2A27", "pm": "\xB1", "Poincareplane": "\u210C", "pointint": "\u2A15", "popf": "\u{1D561}", "Popf": "\u2119", "pound": "\xA3", "prap": "\u2AB7", "Pr": "\u2ABB", "pr": "\u227A", "prcue": "\u227C", "precapprox": "\u2AB7", "prec": "\u227A", "preccurlyeq": "\u227C", "Precedes": "\u227A", "PrecedesEqual": "\u2AAF", "PrecedesSlantEqual": "\u227C", "PrecedesTilde": "\u227E", "preceq": "\u2AAF", "precnapprox": "\u2AB9", "precneqq": "\u2AB5", "precnsim": "\u22E8", "pre": "\u2AAF", "prE": "\u2AB3", "precsim": "\u227E", "prime": "\u2032", "Prime": "\u2033", "primes": "\u2119", "prnap": "\u2AB9", "prnE": "\u2AB5", "prnsim": "\u22E8", "prod": "\u220F", "Product": "\u220F", "profalar": "\u232E", "profline": "\u2312", "profsurf": "\u2313", "prop": "\u221D", "Proportional": "\u221D", "Proportion": "\u2237", "propto": "\u221D", "prsim": "\u227E", "prurel": "\u22B0", "Pscr": "\u{1D4AB}", "pscr": "\u{1D4C5}", "Psi": "\u03A8", "psi": "\u03C8", "puncsp": "\u2008", "Qfr": "\u{1D514}", "qfr": "\u{1D52E}", "qint": "\u2A0C", "qopf": "\u{1D562}", "Qopf": "\u211A", "qprime": "\u2057", "Qscr": "\u{1D4AC}", "qscr": "\u{1D4C6}", "quaternions": "\u210D", "quatint": "\u2A16", "quest": "?", "questeq": "\u225F", "quot": '"', "QUOT": '"', "rAarr": "\u21DB", "race": "\u223D\u0331", "Racute": "\u0154", "racute": "\u0155", "radic": "\u221A", "raemptyv": "\u29B3", "rang": "\u27E9", "Rang": "\u27EB", "rangd": "\u2992", "range": "\u29A5", "rangle": "\u27E9", "raquo": "\xBB", "rarrap": "\u2975", "rarrb": "\u21E5", "rarrbfs": "\u2920", "rarrc": "\u2933", "rarr": "\u2192", "Rarr": "\u21A0", "rArr": "\u21D2", "rarrfs": "\u291E", "rarrhk": "\u21AA", "rarrlp": "\u21AC", "rarrpl": "\u2945", "rarrsim": "\u2974", "Rarrtl": "\u2916", "rarrtl": "\u21A3", "rarrw": "\u219D", "ratail": "\u291A", "rAtail": "\u291C", "ratio": "\u2236", "rationals": "\u211A", "rbarr": "\u290D", "rBarr": "\u290F", "RBarr": "\u2910", "rbbrk": "\u2773", "rbrace": "}", "rbrack": "]", "rbrke": "\u298C", "rbrksld": "\u298E", "rbrkslu": "\u2990", "Rcaron": "\u0158", "rcaron": "\u0159", "Rcedil": "\u0156", "rcedil": "\u0157", "rceil": "\u2309", "rcub": "}", "Rcy": "\u0420", "rcy": "\u0440", "rdca": "\u2937", "rdldhar": "\u2969", "rdquo": "\u201D", "rdquor": "\u201D", "rdsh": "\u21B3", "real": "\u211C", "realine": "\u211B", "realpart": "\u211C", "reals": "\u211D", "Re": "\u211C", "rect": "\u25AD", "reg": "\xAE", "REG": "\xAE", "ReverseElement": "\u220B", "ReverseEquilibrium": "\u21CB", "ReverseUpEquilibrium": "\u296F", "rfisht": "\u297D", "rfloor": "\u230B", "rfr": "\u{1D52F}", "Rfr": "\u211C", "rHar": "\u2964", "rhard": "\u21C1", "rharu": "\u21C0", "rharul": "\u296C", "Rho": "\u03A1", "rho": "\u03C1", "rhov": "\u03F1", "RightAngleBracket": "\u27E9", "RightArrowBar": "\u21E5", "rightarrow": "\u2192", "RightArrow": "\u2192", "Rightarrow": "\u21D2", "RightArrowLeftArrow": "\u21C4", "rightarrowtail": "\u21A3", "RightCeiling": "\u2309", "RightDoubleBracket": "\u27E7", "RightDownTeeVector": "\u295D", "RightDownVectorBar": "\u2955", "RightDownVector": "\u21C2", "RightFloor": "\u230B", "rightharpoondown": "\u21C1", "rightharpoonup": "\u21C0", "rightleftarrows": "\u21C4", "rightleftharpoons": "\u21CC", "rightrightarrows": "\u21C9", "rightsquigarrow": "\u219D", "RightTeeArrow": "\u21A6", "RightTee": "\u22A2", "RightTeeVector": "\u295B", "rightthreetimes": "\u22CC", "RightTriangleBar": "\u29D0", "RightTriangle": "\u22B3", "RightTriangleEqual": "\u22B5", "RightUpDownVector": "\u294F", "RightUpTeeVector": "\u295C", "RightUpVectorBar": "\u2954", "RightUpVector": "\u21BE", "RightVectorBar": "\u2953", "RightVector": "\u21C0", "ring": "\u02DA", "risingdotseq": "\u2253", "rlarr": "\u21C4", "rlhar": "\u21CC", "rlm": "\u200F", "rmoustache": "\u23B1", "rmoust": "\u23B1", "rnmid": "\u2AEE", "roang": "\u27ED", "roarr": "\u21FE", "robrk": "\u27E7", "ropar": "\u2986", "ropf": "\u{1D563}", "Ropf": "\u211D", "roplus": "\u2A2E", "rotimes": "\u2A35", "RoundImplies": "\u2970", "rpar": ")", "rpargt": "\u2994", "rppolint": "\u2A12", "rrarr": "\u21C9", "Rrightarrow": "\u21DB", "rsaquo": "\u203A", "rscr": "\u{1D4C7}", "Rscr": "\u211B", "rsh": "\u21B1", "Rsh": "\u21B1", "rsqb": "]", "rsquo": "\u2019", "rsquor": "\u2019", "rthree": "\u22CC", "rtimes": "\u22CA", "rtri": "\u25B9", "rtrie": "\u22B5", "rtrif": "\u25B8", "rtriltri": "\u29CE", "RuleDelayed": "\u29F4", "ruluhar": "\u2968", "rx": "\u211E", "Sacute": "\u015A", "sacute": "\u015B", "sbquo": "\u201A", "scap": "\u2AB8", "Scaron": "\u0160", "scaron": "\u0161", "Sc": "\u2ABC", "sc": "\u227B", "sccue": "\u227D", "sce": "\u2AB0", "scE": "\u2AB4", "Scedil": "\u015E", "scedil": "\u015F", "Scirc": "\u015C", "scirc": "\u015D", "scnap": "\u2ABA", "scnE": "\u2AB6", "scnsim": "\u22E9", "scpolint": "\u2A13", "scsim": "\u227F", "Scy": "\u0421", "scy": "\u0441", "sdotb": "\u22A1", "sdot": "\u22C5", "sdote": "\u2A66", "searhk": "\u2925", "searr": "\u2198", "seArr": "\u21D8", "searrow": "\u2198", "sect": "\xA7", "semi": ";", "seswar": "\u2929", "setminus": "\u2216", "setmn": "\u2216", "sext": "\u2736", "Sfr": "\u{1D516}", "sfr": "\u{1D530}", "sfrown": "\u2322", "sharp": "\u266F", "SHCHcy": "\u0429", "shchcy": "\u0449", "SHcy": "\u0428", "shcy": "\u0448", "ShortDownArrow": "\u2193", "ShortLeftArrow": "\u2190", "shortmid": "\u2223", "shortparallel": "\u2225", "ShortRightArrow": "\u2192", "ShortUpArrow": "\u2191", "shy": "\xAD", "Sigma": "\u03A3", "sigma": "\u03C3", "sigmaf": "\u03C2", "sigmav": "\u03C2", "sim": "\u223C", "simdot": "\u2A6A", "sime": "\u2243", "simeq": "\u2243", "simg": "\u2A9E", "simgE": "\u2AA0", "siml": "\u2A9D", "simlE": "\u2A9F", "simne": "\u2246", "simplus": "\u2A24", "simrarr": "\u2972", "slarr": "\u2190", "SmallCircle": "\u2218", "smallsetminus": "\u2216", "smashp": "\u2A33", "smeparsl": "\u29E4", "smid": "\u2223", "smile": "\u2323", "smt": "\u2AAA", "smte": "\u2AAC", "smtes": "\u2AAC\uFE00", "SOFTcy": "\u042C", "softcy": "\u044C", "solbar": "\u233F", "solb": "\u29C4", "sol": "/", "Sopf": "\u{1D54A}", "sopf": "\u{1D564}", "spades": "\u2660", "spadesuit": "\u2660", "spar": "\u2225", "sqcap": "\u2293", "sqcaps": "\u2293\uFE00", "sqcup": "\u2294", "sqcups": "\u2294\uFE00", "Sqrt": "\u221A", "sqsub": "\u228F", "sqsube": "\u2291", "sqsubset": "\u228F", "sqsubseteq": "\u2291", "sqsup": "\u2290", "sqsupe": "\u2292", "sqsupset": "\u2290", "sqsupseteq": "\u2292", "square": "\u25A1", "Square": "\u25A1", "SquareIntersection": "\u2293", "SquareSubset": "\u228F", "SquareSubsetEqual": "\u2291", "SquareSuperset": "\u2290", "SquareSupersetEqual": "\u2292", "SquareUnion": "\u2294", "squarf": "\u25AA", "squ": "\u25A1", "squf": "\u25AA", "srarr": "\u2192", "Sscr": "\u{1D4AE}", "sscr": "\u{1D4C8}", "ssetmn": "\u2216", "ssmile": "\u2323", "sstarf": "\u22C6", "Star": "\u22C6", "star": "\u2606", "starf": "\u2605", "straightepsilon": "\u03F5", "straightphi": "\u03D5", "strns": "\xAF", "sub": "\u2282", "Sub": "\u22D0", "subdot": "\u2ABD", "subE": "\u2AC5", "sube": "\u2286", "subedot": "\u2AC3", "submult": "\u2AC1", "subnE": "\u2ACB", "subne": "\u228A", "subplus": "\u2ABF", "subrarr": "\u2979", "subset": "\u2282", "Subset": "\u22D0", "subseteq": "\u2286", "subseteqq": "\u2AC5", "SubsetEqual": "\u2286", "subsetneq": "\u228A", "subsetneqq": "\u2ACB", "subsim": "\u2AC7", "subsub": "\u2AD5", "subsup": "\u2AD3", "succapprox": "\u2AB8", "succ": "\u227B", "succcurlyeq": "\u227D", "Succeeds": "\u227B", "SucceedsEqual": "\u2AB0", "SucceedsSlantEqual": "\u227D", "SucceedsTilde": "\u227F", "succeq": "\u2AB0", "succnapprox": "\u2ABA", "succneqq": "\u2AB6", "succnsim": "\u22E9", "succsim": "\u227F", "SuchThat": "\u220B", "sum": "\u2211", "Sum": "\u2211", "sung": "\u266A", "sup1": "\xB9", "sup2": "\xB2", "sup3": "\xB3", "sup": "\u2283", "Sup": "\u22D1", "supdot": "\u2ABE", "supdsub": "\u2AD8", "supE": "\u2AC6", "supe": "\u2287", "supedot": "\u2AC4", "Superset": "\u2283", "SupersetEqual": "\u2287", "suphsol": "\u27C9", "suphsub": "\u2AD7", "suplarr": "\u297B", "supmult": "\u2AC2", "supnE": "\u2ACC", "supne": "\u228B", "supplus": "\u2AC0", "supset": "\u2283", "Supset": "\u22D1", "supseteq": "\u2287", "supseteqq": "\u2AC6", "supsetneq": "\u228B", "supsetneqq": "\u2ACC", "supsim": "\u2AC8", "supsub": "\u2AD4", "supsup": "\u2AD6", "swarhk": "\u2926", "swarr": "\u2199", "swArr": "\u21D9", "swarrow": "\u2199", "swnwar": "\u292A", "szlig": "\xDF", "Tab": "	", "target": "\u2316", "Tau": "\u03A4", "tau": "\u03C4", "tbrk": "\u23B4", "Tcaron": "\u0164", "tcaron": "\u0165", "Tcedil": "\u0162", "tcedil": "\u0163", "Tcy": "\u0422", "tcy": "\u0442", "tdot": "\u20DB", "telrec": "\u2315", "Tfr": "\u{1D517}", "tfr": "\u{1D531}", "there4": "\u2234", "therefore": "\u2234", "Therefore": "\u2234", "Theta": "\u0398", "theta": "\u03B8", "thetasym": "\u03D1", "thetav": "\u03D1", "thickapprox": "\u2248", "thicksim": "\u223C", "ThickSpace": "\u205F\u200A", "ThinSpace": "\u2009", "thinsp": "\u2009", "thkap": "\u2248", "thksim": "\u223C", "THORN": "\xDE", "thorn": "\xFE", "tilde": "\u02DC", "Tilde": "\u223C", "TildeEqual": "\u2243", "TildeFullEqual": "\u2245", "TildeTilde": "\u2248", "timesbar": "\u2A31", "timesb": "\u22A0", "times": "\xD7", "timesd": "\u2A30", "tint": "\u222D", "toea": "\u2928", "topbot": "\u2336", "topcir": "\u2AF1", "top": "\u22A4", "Topf": "\u{1D54B}", "topf": "\u{1D565}", "topfork": "\u2ADA", "tosa": "\u2929", "tprime": "\u2034", "trade": "\u2122", "TRADE": "\u2122", "triangle": "\u25B5", "triangledown": "\u25BF", "triangleleft": "\u25C3", "trianglelefteq": "\u22B4", "triangleq": "\u225C", "triangleright": "\u25B9", "trianglerighteq": "\u22B5", "tridot": "\u25EC", "trie": "\u225C", "triminus": "\u2A3A", "TripleDot": "\u20DB", "triplus": "\u2A39", "trisb": "\u29CD", "tritime": "\u2A3B", "trpezium": "\u23E2", "Tscr": "\u{1D4AF}", "tscr": "\u{1D4C9}", "TScy": "\u0426", "tscy": "\u0446", "TSHcy": "\u040B", "tshcy": "\u045B", "Tstrok": "\u0166", "tstrok": "\u0167", "twixt": "\u226C", "twoheadleftarrow": "\u219E", "twoheadrightarrow": "\u21A0", "Uacute": "\xDA", "uacute": "\xFA", "uarr": "\u2191", "Uarr": "\u219F", "uArr": "\u21D1", "Uarrocir": "\u2949", "Ubrcy": "\u040E", "ubrcy": "\u045E", "Ubreve": "\u016C", "ubreve": "\u016D", "Ucirc": "\xDB", "ucirc": "\xFB", "Ucy": "\u0423", "ucy": "\u0443", "udarr": "\u21C5", "Udblac": "\u0170", "udblac": "\u0171", "udhar": "\u296E", "ufisht": "\u297E", "Ufr": "\u{1D518}", "ufr": "\u{1D532}", "Ugrave": "\xD9", "ugrave": "\xF9", "uHar": "\u2963", "uharl": "\u21BF", "uharr": "\u21BE", "uhblk": "\u2580", "ulcorn": "\u231C", "ulcorner": "\u231C", "ulcrop": "\u230F", "ultri": "\u25F8", "Umacr": "\u016A", "umacr": "\u016B", "uml": "\xA8", "UnderBar": "_", "UnderBrace": "\u23DF", "UnderBracket": "\u23B5", "UnderParenthesis": "\u23DD", "Union": "\u22C3", "UnionPlus": "\u228E", "Uogon": "\u0172", "uogon": "\u0173", "Uopf": "\u{1D54C}", "uopf": "\u{1D566}", "UpArrowBar": "\u2912", "uparrow": "\u2191", "UpArrow": "\u2191", "Uparrow": "\u21D1", "UpArrowDownArrow": "\u21C5", "updownarrow": "\u2195", "UpDownArrow": "\u2195", "Updownarrow": "\u21D5", "UpEquilibrium": "\u296E", "upharpoonleft": "\u21BF", "upharpoonright": "\u21BE", "uplus": "\u228E", "UpperLeftArrow": "\u2196", "UpperRightArrow": "\u2197", "upsi": "\u03C5", "Upsi": "\u03D2", "upsih": "\u03D2", "Upsilon": "\u03A5", "upsilon": "\u03C5", "UpTeeArrow": "\u21A5", "UpTee": "\u22A5", "upuparrows": "\u21C8", "urcorn": "\u231D", "urcorner": "\u231D", "urcrop": "\u230E", "Uring": "\u016E", "uring": "\u016F", "urtri": "\u25F9", "Uscr": "\u{1D4B0}", "uscr": "\u{1D4CA}", "utdot": "\u22F0", "Utilde": "\u0168", "utilde": "\u0169", "utri": "\u25B5", "utrif": "\u25B4", "uuarr": "\u21C8", "Uuml": "\xDC", "uuml": "\xFC", "uwangle": "\u29A7", "vangrt": "\u299C", "varepsilon": "\u03F5", "varkappa": "\u03F0", "varnothing": "\u2205", "varphi": "\u03D5", "varpi": "\u03D6", "varpropto": "\u221D", "varr": "\u2195", "vArr": "\u21D5", "varrho": "\u03F1", "varsigma": "\u03C2", "varsubsetneq": "\u228A\uFE00", "varsubsetneqq": "\u2ACB\uFE00", "varsupsetneq": "\u228B\uFE00", "varsupsetneqq": "\u2ACC\uFE00", "vartheta": "\u03D1", "vartriangleleft": "\u22B2", "vartriangleright": "\u22B3", "vBar": "\u2AE8", "Vbar": "\u2AEB", "vBarv": "\u2AE9", "Vcy": "\u0412", "vcy": "\u0432", "vdash": "\u22A2", "vDash": "\u22A8", "Vdash": "\u22A9", "VDash": "\u22AB", "Vdashl": "\u2AE6", "veebar": "\u22BB", "vee": "\u2228", "Vee": "\u22C1", "veeeq": "\u225A", "vellip": "\u22EE", "verbar": "|", "Verbar": "\u2016", "vert": "|", "Vert": "\u2016", "VerticalBar": "\u2223", "VerticalLine": "|", "VerticalSeparator": "\u2758", "VerticalTilde": "\u2240", "VeryThinSpace": "\u200A", "Vfr": "\u{1D519}", "vfr": "\u{1D533}", "vltri": "\u22B2", "vnsub": "\u2282\u20D2", "vnsup": "\u2283\u20D2", "Vopf": "\u{1D54D}", "vopf": "\u{1D567}", "vprop": "\u221D", "vrtri": "\u22B3", "Vscr": "\u{1D4B1}", "vscr": "\u{1D4CB}", "vsubnE": "\u2ACB\uFE00", "vsubne": "\u228A\uFE00", "vsupnE": "\u2ACC\uFE00", "vsupne": "\u228B\uFE00", "Vvdash": "\u22AA", "vzigzag": "\u299A", "Wcirc": "\u0174", "wcirc": "\u0175", "wedbar": "\u2A5F", "wedge": "\u2227", "Wedge": "\u22C0", "wedgeq": "\u2259", "weierp": "\u2118", "Wfr": "\u{1D51A}", "wfr": "\u{1D534}", "Wopf": "\u{1D54E}", "wopf": "\u{1D568}", "wp": "\u2118", "wr": "\u2240", "wreath": "\u2240", "Wscr": "\u{1D4B2}", "wscr": "\u{1D4CC}", "xcap": "\u22C2", "xcirc": "\u25EF", "xcup": "\u22C3", "xdtri": "\u25BD", "Xfr": "\u{1D51B}", "xfr": "\u{1D535}", "xharr": "\u27F7", "xhArr": "\u27FA", "Xi": "\u039E", "xi": "\u03BE", "xlarr": "\u27F5", "xlArr": "\u27F8", "xmap": "\u27FC", "xnis": "\u22FB", "xodot": "\u2A00", "Xopf": "\u{1D54F}", "xopf": "\u{1D569}", "xoplus": "\u2A01", "xotime": "\u2A02", "xrarr": "\u27F6", "xrArr": "\u27F9", "Xscr": "\u{1D4B3}", "xscr": "\u{1D4CD}", "xsqcup": "\u2A06", "xuplus": "\u2A04", "xutri": "\u25B3", "xvee": "\u22C1", "xwedge": "\u22C0", "Yacute": "\xDD", "yacute": "\xFD", "YAcy": "\u042F", "yacy": "\u044F", "Ycirc": "\u0176", "ycirc": "\u0177", "Ycy": "\u042B", "ycy": "\u044B", "yen": "\xA5", "Yfr": "\u{1D51C}", "yfr": "\u{1D536}", "YIcy": "\u0407", "yicy": "\u0457", "Yopf": "\u{1D550}", "yopf": "\u{1D56A}", "Yscr": "\u{1D4B4}", "yscr": "\u{1D4CE}", "YUcy": "\u042E", "yucy": "\u044E", "yuml": "\xFF", "Yuml": "\u0178", "Zacute": "\u0179", "zacute": "\u017A", "Zcaron": "\u017D", "zcaron": "\u017E", "Zcy": "\u0417", "zcy": "\u0437", "Zdot": "\u017B", "zdot": "\u017C", "zeetrf": "\u2128", "ZeroWidthSpace": "\u200B", "Zeta": "\u0396", "zeta": "\u03B6", "zfr": "\u{1D537}", "Zfr": "\u2128", "ZHcy": "\u0416", "zhcy": "\u0436", "zigrarr": "\u21DD", "zopf": "\u{1D56B}", "Zopf": "\u2124", "Zscr": "\u{1D4B5}", "zscr": "\u{1D4CF}", "zwj": "\u200D", "zwnj": "\u200C" };
      var decodeMapLegacy = { "Aacute": "\xC1", "aacute": "\xE1", "Acirc": "\xC2", "acirc": "\xE2", "acute": "\xB4", "AElig": "\xC6", "aelig": "\xE6", "Agrave": "\xC0", "agrave": "\xE0", "amp": "&", "AMP": "&", "Aring": "\xC5", "aring": "\xE5", "Atilde": "\xC3", "atilde": "\xE3", "Auml": "\xC4", "auml": "\xE4", "brvbar": "\xA6", "Ccedil": "\xC7", "ccedil": "\xE7", "cedil": "\xB8", "cent": "\xA2", "copy": "\xA9", "COPY": "\xA9", "curren": "\xA4", "deg": "\xB0", "divide": "\xF7", "Eacute": "\xC9", "eacute": "\xE9", "Ecirc": "\xCA", "ecirc": "\xEA", "Egrave": "\xC8", "egrave": "\xE8", "ETH": "\xD0", "eth": "\xF0", "Euml": "\xCB", "euml": "\xEB", "frac12": "\xBD", "frac14": "\xBC", "frac34": "\xBE", "gt": ">", "GT": ">", "Iacute": "\xCD", "iacute": "\xED", "Icirc": "\xCE", "icirc": "\xEE", "iexcl": "\xA1", "Igrave": "\xCC", "igrave": "\xEC", "iquest": "\xBF", "Iuml": "\xCF", "iuml": "\xEF", "laquo": "\xAB", "lt": "<", "LT": "<", "macr": "\xAF", "micro": "\xB5", "middot": "\xB7", "nbsp": "\xA0", "not": "\xAC", "Ntilde": "\xD1", "ntilde": "\xF1", "Oacute": "\xD3", "oacute": "\xF3", "Ocirc": "\xD4", "ocirc": "\xF4", "Ograve": "\xD2", "ograve": "\xF2", "ordf": "\xAA", "ordm": "\xBA", "Oslash": "\xD8", "oslash": "\xF8", "Otilde": "\xD5", "otilde": "\xF5", "Ouml": "\xD6", "ouml": "\xF6", "para": "\xB6", "plusmn": "\xB1", "pound": "\xA3", "quot": '"', "QUOT": '"', "raquo": "\xBB", "reg": "\xAE", "REG": "\xAE", "sect": "\xA7", "shy": "\xAD", "sup1": "\xB9", "sup2": "\xB2", "sup3": "\xB3", "szlig": "\xDF", "THORN": "\xDE", "thorn": "\xFE", "times": "\xD7", "Uacute": "\xDA", "uacute": "\xFA", "Ucirc": "\xDB", "ucirc": "\xFB", "Ugrave": "\xD9", "ugrave": "\xF9", "uml": "\xA8", "Uuml": "\xDC", "uuml": "\xFC", "Yacute": "\xDD", "yacute": "\xFD", "yen": "\xA5", "yuml": "\xFF" };
      var decodeMapNumeric = { "0": "\uFFFD", "128": "\u20AC", "130": "\u201A", "131": "\u0192", "132": "\u201E", "133": "\u2026", "134": "\u2020", "135": "\u2021", "136": "\u02C6", "137": "\u2030", "138": "\u0160", "139": "\u2039", "140": "\u0152", "142": "\u017D", "145": "\u2018", "146": "\u2019", "147": "\u201C", "148": "\u201D", "149": "\u2022", "150": "\u2013", "151": "\u2014", "152": "\u02DC", "153": "\u2122", "154": "\u0161", "155": "\u203A", "156": "\u0153", "158": "\u017E", "159": "\u0178" };
      var invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];
      var stringFromCharCode = String.fromCharCode;
      var object = {};
      var hasOwnProperty = object.hasOwnProperty;
      var has = function(object2, propertyName) {
        return hasOwnProperty.call(object2, propertyName);
      };
      var contains = function(array, value) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
          if (array[index] == value) {
            return true;
          }
        }
        return false;
      };
      var merge = function(options2, defaults) {
        if (!options2) {
          return defaults;
        }
        var result = {};
        var key2;
        for (key2 in defaults) {
          result[key2] = has(options2, key2) ? options2[key2] : defaults[key2];
        }
        return result;
      };
      var codePointToSymbol = function(codePoint, strict) {
        var output = "";
        if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
          if (strict) {
            parseError("character reference outside the permissible Unicode range");
          }
          return "\uFFFD";
        }
        if (has(decodeMapNumeric, codePoint)) {
          if (strict) {
            parseError("disallowed character reference");
          }
          return decodeMapNumeric[codePoint];
        }
        if (strict && contains(invalidReferenceCodePoints, codePoint)) {
          parseError("disallowed character reference");
        }
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += stringFromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += stringFromCharCode(codePoint);
        return output;
      };
      var hexEscape = function(symbol2) {
        return "&#x" + symbol2.charCodeAt(0).toString(16).toUpperCase() + ";";
      };
      var parseError = function(message) {
        throw Error("Parse error: " + message);
      };
      var encode = function(string, options2) {
        options2 = merge(options2, encode.options);
        var strict = options2.strict;
        if (strict && regexInvalidRawCodePoint.test(string)) {
          parseError("forbidden code point");
        }
        var encodeEverything = options2.encodeEverything;
        var useNamedReferences = options2.useNamedReferences;
        var allowUnsafeSymbols = options2.allowUnsafeSymbols;
        if (encodeEverything) {
          string = string.replace(regexAsciiWhitelist, function(symbol2) {
            if (useNamedReferences && has(encodeMap, symbol2)) {
              return "&" + encodeMap[symbol2] + ";";
            }
            return hexEscape(symbol2);
          });
          if (useNamedReferences) {
            string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;");
          }
          if (useNamedReferences) {
            string = string.replace(regexEncodeNonAscii, function(string2) {
              return "&" + encodeMap[string2] + ";";
            });
          }
        } else if (useNamedReferences) {
          if (!allowUnsafeSymbols) {
            string = string.replace(regexEscape, function(string2) {
              return "&" + encodeMap[string2] + ";";
            });
          }
          string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;");
          string = string.replace(regexEncodeNonAscii, function(string2) {
            return "&" + encodeMap[string2] + ";";
          });
        } else if (!allowUnsafeSymbols) {
          string = string.replace(regexEscape, hexEscape);
        }
        return string.replace(regexAstralSymbols, function($0) {
          var high = $0.charCodeAt(0);
          var low = $0.charCodeAt(1);
          var codePoint = (high - 55296) * 1024 + low - 56320 + 65536;
          return "&#x" + codePoint.toString(16).toUpperCase() + ";";
        }).replace(regexBmpWhitelist, hexEscape);
      };
      encode.options = {
        "allowUnsafeSymbols": false,
        "encodeEverything": false,
        "strict": false,
        "useNamedReferences": false
      };
      var decode = function(html, options2) {
        options2 = merge(options2, decode.options);
        var strict = options2.strict;
        if (strict && regexInvalidEntity.test(html)) {
          parseError("malformed character reference");
        }
        return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7) {
          var codePoint;
          var semicolon;
          var hexDigits;
          var reference;
          var next;
          if ($1) {
            codePoint = $1;
            semicolon = $2;
            if (strict && !semicolon) {
              parseError("character reference was not terminated by a semicolon");
            }
            return codePointToSymbol(codePoint, strict);
          }
          if ($3) {
            hexDigits = $3;
            semicolon = $4;
            if (strict && !semicolon) {
              parseError("character reference was not terminated by a semicolon");
            }
            codePoint = parseInt(hexDigits, 16);
            return codePointToSymbol(codePoint, strict);
          }
          if ($5) {
            reference = $5;
            if (has(decodeMap, reference)) {
              return decodeMap[reference];
            } else {
              if (strict) {
                parseError(
                  "named character reference was not terminated by a semicolon"
                );
              }
              return $0;
            }
          }
          reference = $6;
          next = $7;
          if (next && options2.isAttributeValue) {
            if (strict && next == "=") {
              parseError("`&` did not start a character reference");
            }
            return $0;
          } else {
            if (strict) {
              parseError(
                "named character reference was not terminated by a semicolon"
              );
            }
            return decodeMapLegacy[reference] + (next || "");
          }
        });
      };
      decode.options = {
        "isAttributeValue": false,
        "strict": false
      };
      var escape = function(string) {
        return string.replace(regexEscape, function($0) {
          return escapeMap[$0];
        });
      };
      var he = {
        "version": "0.5.0",
        "encode": encode,
        "decode": decode,
        "escape": escape,
        "unescape": decode
      };
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        define(function() {
          return he;
        });
      } else if (freeExports && !freeExports.nodeType) {
        if (freeModule) {
          freeModule.exports = he;
        } else {
          for (var key in he) {
            has(he, key) && (freeExports[key] = he[key]);
          }
        }
      } else {
        root.he = he;
      }
    })(exports);
  }
});

// ../../../../../node_modules/assignment/assignment.js
var require_assignment = __commonJS({
  "../../../../../node_modules/assignment/assignment.js"(exports, module) {
    "use strict";
    function assignment(result) {
      var stack = Array.prototype.slice.call(arguments, 1);
      var item;
      var key;
      while (stack.length) {
        item = stack.shift();
        for (key in item) {
          if (item.hasOwnProperty(key)) {
            if (Object.prototype.toString.call(result[key]) === "[object Object]") {
              result[key] = assignment(result[key], item[key]);
            } else {
              result[key] = item[key];
            }
          }
        }
      }
      return result;
    }
    module.exports = assignment;
  }
});

// ../../../../../node_modules/insane/lowercase.js
var require_lowercase = __commonJS({
  "../../../../../node_modules/insane/lowercase.js"(exports, module) {
    "use strict";
    module.exports = function lowercase(string) {
      return typeof string === "string" ? string.toLowerCase() : string;
    };
  }
});

// ../../../../../node_modules/insane/toMap.js
var require_toMap = __commonJS({
  "../../../../../node_modules/insane/toMap.js"(exports, module) {
    "use strict";
    function toMap(list) {
      return list.reduce(asKey, {});
    }
    function asKey(accumulator, item) {
      accumulator[item] = true;
      return accumulator;
    }
    module.exports = toMap;
  }
});

// ../../../../../node_modules/insane/attributes.js
var require_attributes = __commonJS({
  "../../../../../node_modules/insane/attributes.js"(exports, module) {
    "use strict";
    var toMap = require_toMap();
    var uris = ["background", "base", "cite", "href", "longdesc", "src", "usemap"];
    module.exports = {
      uris: toMap(uris)
      // attributes that have an href and hence need to be sanitized
    };
  }
});

// ../../../../../node_modules/insane/elements.js
var require_elements = __commonJS({
  "../../../../../node_modules/insane/elements.js"(exports, module) {
    "use strict";
    var toMap = require_toMap();
    var voids = ["area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta"];
    module.exports = {
      voids: toMap(voids)
    };
  }
});

// ../../../../../node_modules/insane/parser.js
var require_parser = __commonJS({
  "../../../../../node_modules/insane/parser.js"(exports, module) {
    "use strict";
    var he = require_he();
    var lowercase = require_lowercase();
    var attributes = require_attributes();
    var elements = require_elements();
    var rstart = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/;
    var rend = /^<\s*\/\s*([\w:-]+)[^>]*>/;
    var rattrs = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g;
    var rtag = /^</;
    var rtagend = /^<\s*\//;
    function createStack() {
      var stack = [];
      stack.lastItem = function lastItem() {
        return stack[stack.length - 1];
      };
      return stack;
    }
    function parser(html, handler) {
      var stack = createStack();
      var last = html;
      var chars;
      while (html) {
        parsePart();
      }
      parseEndTag();
      function parsePart() {
        chars = true;
        parseTag();
        var same = html === last;
        last = html;
        if (same) {
          html = "";
        }
      }
      function parseTag() {
        if (html.substr(0, 4) === "<!--") {
          parseComment();
        } else if (rtagend.test(html)) {
          parseEdge(rend, parseEndTag);
        } else if (rtag.test(html)) {
          parseEdge(rstart, parseStartTag);
        }
        parseTagDecode();
      }
      function parseEdge(regex2, parser2) {
        var match = html.match(regex2);
        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(regex2, parser2);
          chars = false;
        }
      }
      function parseComment() {
        var index = html.indexOf("-->");
        if (index >= 0) {
          if (handler.comment) {
            handler.comment(html.substring(4, index));
          }
          html = html.substring(index + 3);
          chars = false;
        }
      }
      function parseTagDecode() {
        if (!chars) {
          return;
        }
        var text2;
        var index = html.indexOf("<");
        if (index >= 0) {
          text2 = html.substring(0, index);
          html = html.substring(index);
        } else {
          text2 = html;
          html = "";
        }
        if (handler.chars) {
          handler.chars(text2);
        }
      }
      function parseStartTag(tag, tagName, rest, unary) {
        var attrs = {};
        var low = lowercase(tagName);
        var u = elements.voids[low] || !!unary;
        rest.replace(rattrs, attrReplacer);
        if (!u) {
          stack.push(low);
        }
        if (handler.start) {
          handler.start(low, attrs, u);
        }
        function attrReplacer(match, name, doubleQuotedValue, singleQuotedValue, unquotedValue) {
          if (doubleQuotedValue === void 0 && singleQuotedValue === void 0 && unquotedValue === void 0) {
            attrs[name] = void 0;
          } else {
            attrs[name] = he.decode(doubleQuotedValue || singleQuotedValue || unquotedValue || "");
          }
        }
      }
      function parseEndTag(tag, tagName) {
        var i;
        var pos = 0;
        var low = lowercase(tagName);
        if (low) {
          for (pos = stack.length - 1; pos >= 0; pos--) {
            if (stack[pos] === low) {
              break;
            }
          }
        }
        if (pos >= 0) {
          for (i = stack.length - 1; i >= pos; i--) {
            if (handler.end) {
              handler.end(stack[i]);
            }
          }
          stack.length = pos;
        }
      }
    }
    module.exports = parser;
  }
});

// ../../../../../node_modules/insane/sanitizer.js
var require_sanitizer = __commonJS({
  "../../../../../node_modules/insane/sanitizer.js"(exports, module) {
    "use strict";
    var he = require_he();
    var lowercase = require_lowercase();
    var attributes = require_attributes();
    var elements = require_elements();
    function sanitizer(buffer, options2) {
      var last;
      var context;
      var o = options2 || {};
      reset();
      return {
        start,
        end,
        chars
      };
      function out(value) {
        buffer.push(value);
      }
      function start(tag, attrs, unary) {
        var low = lowercase(tag);
        if (context.ignoring) {
          ignore(low);
          return;
        }
        if ((o.allowedTags || []).indexOf(low) === -1) {
          ignore(low);
          return;
        }
        if (o.filter && !o.filter({ tag: low, attrs })) {
          ignore(low);
          return;
        }
        out("<");
        out(low);
        Object.keys(attrs).forEach(parse2);
        out(unary ? "/>" : ">");
        function parse2(key) {
          var value = attrs[key];
          var classesOk = (o.allowedClasses || {})[low] || [];
          var attrsOk = (o.allowedAttributes || {})[low] || [];
          var valid;
          var lkey = lowercase(key);
          if (lkey === "class" && attrsOk.indexOf(lkey) === -1) {
            value = value.split(" ").filter(isValidClass).join(" ").trim();
            valid = value.length;
          } else {
            valid = attrsOk.indexOf(lkey) !== -1 && (attributes.uris[lkey] !== true || testUrl(value));
          }
          if (valid) {
            out(" ");
            out(key);
            if (typeof value === "string") {
              out('="');
              out(he.encode(value));
              out('"');
            }
          }
          function isValidClass(className) {
            return classesOk && classesOk.indexOf(className) !== -1;
          }
        }
      }
      function end(tag) {
        var low = lowercase(tag);
        var allowed = (o.allowedTags || []).indexOf(low) !== -1;
        if (allowed) {
          if (context.ignoring === false) {
            out("</");
            out(low);
            out(">");
          } else {
            unignore(low);
          }
        } else {
          unignore(low);
        }
      }
      function testUrl(text2) {
        var start2 = text2[0];
        if (start2 === "#" || start2 === "/") {
          return true;
        }
        var colon = text2.indexOf(":");
        if (colon === -1) {
          return true;
        }
        var questionmark = text2.indexOf("?");
        if (questionmark !== -1 && colon > questionmark) {
          return true;
        }
        var hash = text2.indexOf("#");
        if (hash !== -1 && colon > hash) {
          return true;
        }
        return o.allowedSchemes.some(matches);
        function matches(scheme) {
          return text2.indexOf(scheme + ":") === 0;
        }
      }
      function chars(text2) {
        if (context.ignoring === false) {
          out(o.transformText ? o.transformText(text2) : text2);
        }
      }
      function ignore(tag) {
        if (elements.voids[tag]) {
          return;
        }
        if (context.ignoring === false) {
          context = { ignoring: tag, depth: 1 };
        } else if (context.ignoring === tag) {
          context.depth++;
        }
      }
      function unignore(tag) {
        if (context.ignoring === tag) {
          if (--context.depth <= 0) {
            reset();
          }
        }
      }
      function reset() {
        context = { ignoring: false, depth: 0 };
      }
    }
    module.exports = sanitizer;
  }
});

// ../../../../../node_modules/insane/defaults.js
var require_defaults = __commonJS({
  "../../../../../node_modules/insane/defaults.js"(exports, module) {
    "use strict";
    var defaults = {
      allowedAttributes: {
        a: ["href", "name", "target", "title", "aria-label"],
        iframe: ["allowfullscreen", "frameborder", "src"],
        img: ["src", "alt", "title", "aria-label"]
      },
      allowedClasses: {},
      allowedSchemes: ["http", "https", "mailto"],
      allowedTags: [
        "a",
        "abbr",
        "article",
        "b",
        "blockquote",
        "br",
        "caption",
        "code",
        "del",
        "details",
        "div",
        "em",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hr",
        "i",
        "img",
        "ins",
        "kbd",
        "li",
        "main",
        "mark",
        "ol",
        "p",
        "pre",
        "section",
        "span",
        "strike",
        "strong",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "th",
        "thead",
        "tr",
        "u",
        "ul"
      ],
      filter: null
    };
    module.exports = defaults;
  }
});

// ../../../../../node_modules/insane/insane.js
var require_insane = __commonJS({
  "../../../../../node_modules/insane/insane.js"(exports, module) {
    "use strict";
    var he = require_he();
    var assign = require_assignment();
    var parser = require_parser();
    var sanitizer = require_sanitizer();
    var defaults = require_defaults();
    function insane2(html, options2, strict) {
      var buffer = [];
      var configuration = strict === true ? options2 : assign({}, defaults, options2);
      var handler = sanitizer(buffer, configuration);
      parser(html, handler);
      return buffer.join("");
    }
    insane2.defaults = defaults;
    module.exports = insane2;
  }
});

// PdfToDocComponent.js
import { OAIBaseComponent, WorkerContext, OmniComponentMacroTypes } from "mercs_rete";

// utils/components_lib.js
function generateTitle(name) {
  const title = name.replace(/_/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());
  return title;
}
function setComponentInputs(component, inputs2) {
  inputs2.forEach(function(input) {
    var name = input.name, type = input.type, customSocket = input.customSocket, description = input.description, defaultValue = input.defaultValue, title = input.title, choices = input.choices;
    if (!title || title == "")
      title = generateTitle(name);
    component.addInput(
      component.createInput(name, type, customSocket).set("title", title || "").set("description", description || "").set("choices", choices || null).setDefault(defaultValue).toOmniIO()
    );
  });
  return component;
}
function setComponentOutputs(component, outputs2) {
  outputs2.forEach(function(output) {
    var name = output.name, type = output.type, customSocket = output.customSocket, description = output.description, title = output.title;
    if (!title || title == "")
      title = generateTitle(name);
    component.addOutput(
      component.createOutput(name, type, customSocket).set("title", title || "").set("description", description || "").toOmniIO()
    );
  });
  return component;
}
function setComponentControls(component, controls2) {
  controls2.forEach(function(control) {
    var name = control.name, title = control.title, placeholder = control.placeholder, description = control.description;
    if (!title || title == "")
      title = generateTitle(name);
    component.addControl(
      component.createControl(name).set("title", title || "").set("placeholder", placeholder || "").set("description", description || "").toOmniControl()
    );
  });
  return component;
}

// node_modules/pdf2json/pdfparser.js
import fs5 from "fs";
import nodeUtil7 from "util";
import { readFile } from "fs/promises";
import { EventEmitter as EventEmitter2 } from "events";

// node_modules/pdf2json/lib/pdf.js
var import_xmldom2 = __toESM(require_lib(), 1);
import nodeUtil6 from "util";
import fs3 from "fs";
import path2 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { EventEmitter } from "events";
import { Blob } from "buffer";

// node_modules/pdf2json/lib/pdfcanvas.js
import nodeUtil4 from "util";

// node_modules/pdf2json/lib/pdfline.js
import nodeUtil from "util";

// node_modules/pdf2json/lib/pdfconst.js
var kColors = [
  "#000000",
  // 0
  "#ffffff",
  // 1
  "#4c4c4c",
  // 2
  "#808080",
  // 3
  "#999999",
  // 4
  "#c0c0c0",
  // 5
  "#cccccc",
  // 6
  "#e5e5e5",
  // 7
  "#f2f2f2",
  // 8
  "#008000",
  // 9
  "#00ff00",
  // 10
  "#bfffa0",
  // 11
  "#ffd629",
  // 12
  "#ff99cc",
  // 13
  "#004080",
  // 14
  "#9fc0e1",
  // 15
  "#5580ff",
  // 16
  "#a9c9fa",
  // 17
  "#ff0080",
  // 18
  "#800080",
  // 19
  "#ffbfff",
  // 20
  "#e45b21",
  // 21
  "#ffbfaa",
  // 22
  "#008080",
  // 23
  "#ff0000",
  // 24
  "#fdc59f",
  // 25
  "#808000",
  // 26
  "#bfbf00",
  // 27
  "#824100",
  // 28
  "#007256",
  // 29
  "#008000",
  // 30
  "#000080",
  // Last + 1
  "#008080",
  // Last + 2
  "#800080",
  // Last + 3
  "#ff0000",
  // Last + 4
  "#0000ff",
  // Last + 5
  "#008000"
  // Last + 6
];
var kFontFaces = [
  "quicktype,arial,helvetica,sans-serif",
  // 00 - QuickType - sans-serif variable font
  "quicktype condensed,arial narrow,arial,helvetica,sans-serif",
  // 01 - QuickType Condensed - thin sans-serif variable font
  "quicktypepi,quicktypeiipi",
  // 02 - QuickType Pi
  "quicktype mono,courier new,courier,monospace",
  // 03 - QuickType Mono - san-serif fixed font
  "ocr-a,courier new,courier,monospace",
  // 04 - OCR-A - OCR readable san-serif fixed font
  "ocr b mt,courier new,courier,monospace"
  // 05 - OCR-B MT - OCR readable san-serif fixed font
];
var kFontStyles = [
  // Face		Size	Bold	Italic		StyleID(Comment)
  // -----	----	----	-----		-----------------
  [0, 6, 0, 0],
  //00
  [0, 8, 0, 0],
  //01
  [0, 10, 0, 0],
  //02
  [0, 12, 0, 0],
  //03
  [0, 14, 0, 0],
  //04
  [0, 18, 0, 0],
  //05
  [0, 6, 1, 0],
  //06
  [0, 8, 1, 0],
  //07
  [0, 10, 1, 0],
  //08
  [0, 12, 1, 0],
  //09
  [0, 14, 1, 0],
  //10
  [0, 18, 1, 0],
  //11
  [0, 6, 0, 1],
  //12
  [0, 8, 0, 1],
  //13
  [0, 10, 0, 1],
  //14
  [0, 12, 0, 1],
  //15
  [0, 14, 0, 1],
  //16
  [0, 18, 0, 1],
  //17
  [0, 6, 1, 1],
  //18
  [0, 8, 1, 1],
  //19
  [0, 10, 1, 1],
  //20
  [0, 12, 1, 1],
  //21
  [0, 14, 1, 1],
  //22
  [0, 18, 1, 1],
  //23
  [1, 6, 0, 0],
  //24
  [1, 8, 0, 0],
  //25
  [1, 10, 0, 0],
  //26
  [1, 12, 0, 0],
  //27
  [1, 14, 0, 0],
  //28
  [1, 18, 0, 0],
  //29
  [1, 6, 1, 0],
  //30
  [1, 8, 1, 0],
  //31
  [1, 10, 1, 0],
  //32
  [1, 12, 1, 0],
  //33
  [1, 14, 1, 0],
  //34
  [1, 18, 1, 0],
  //35
  [1, 6, 0, 1],
  //36
  [1, 8, 0, 1],
  //37
  [1, 10, 0, 1],
  //38
  [1, 12, 0, 1],
  //39
  [1, 14, 0, 1],
  //40
  [1, 18, 0, 1],
  //41
  [2, 8, 0, 0],
  //42
  [2, 10, 0, 0],
  //43
  [2, 12, 0, 0],
  //44
  [2, 14, 0, 0],
  //45
  [2, 18, 0, 0],
  //46
  [3, 8, 0, 0],
  //47
  [3, 10, 0, 0],
  //48
  [3, 12, 0, 0],
  //49
  [4, 12, 0, 0],
  //50
  [0, 9, 0, 0],
  //51
  [0, 9, 1, 0],
  //52
  [0, 9, 0, 1],
  //53
  [0, 9, 1, 1],
  //54
  [1, 9, 0, 0],
  //55
  [1, 9, 1, 0],
  //56
  [1, 9, 1, 1],
  //57
  [4, 10, 0, 0],
  //58
  [5, 10, 0, 0],
  //59
  [5, 12, 0, 0]
  //60
];

// node_modules/pdf2json/lib/pdfunit.js
var dpi = 96;
var gridXPerInch = 4;
var gridYPerInch = 4;
var _pixelXPerGrid = dpi / gridXPerInch;
var _pixelYPerGrid = dpi / gridYPerInch;
var _pixelPerPoint = dpi / 72;
var PDFUnit = class _PDFUnit {
  static toFixedFloat(fNum) {
    return parseFloat(fNum.toFixed(3));
  }
  static colorCount() {
    return kColors.length;
  }
  static toPixelX(formX) {
    return Math.round(formX * _pixelXPerGrid);
  }
  static toPixelY(formY) {
    return Math.round(formY * _pixelYPerGrid);
  }
  static pointToPixel(point) {
    return point * _pixelPerPoint;
  }
  static getColorByIndex(clrId) {
    return kColors[clrId];
  }
  static toFormPoint(viewportX, viewportY) {
    return [viewportX / _pixelXPerGrid, viewportY / _pixelYPerGrid];
  }
  static toFormX(viewportX) {
    return _PDFUnit.toFixedFloat(viewportX / _pixelXPerGrid);
  }
  static toFormY(viewportY) {
    return _PDFUnit.toFixedFloat(viewportY / _pixelYPerGrid);
  }
  static findColorIndex(color) {
    if (color.length === 4)
      color += "000";
    return kColors.indexOf(color);
  }
  static dateToIso8601(date) {
    if (date.slice(0, 2) === "D:") {
      date = date.slice(2);
    }
    let tz = "Z";
    let idx = date.search(/[Z+-]/);
    if (idx >= 0) {
      tz = date.slice(idx);
      if (tz !== "Z") {
        tz = tz.slice(0, 3) + ":" + tz.slice(4, 6);
      }
      date = date.slice(0, idx);
    }
    let yr = date.slice(0, 4);
    let mth = date.slice(4, 6) || "01";
    let day = date.slice(6, 8) || "01";
    let hr = date.slice(8, 10) || "00";
    let min = date.slice(10, 12) || "00";
    let sec = date.slice(12, 14) || "00";
    return yr + "-" + mth + "-" + day + "T" + hr + ":" + min + ":" + sec + tz;
  }
};

// node_modules/pdf2json/lib/pdfline.js
var _setStartPoint, setStartPoint_fn;
var PDFLine = class {
  constructor(x1, y1, x2, y2, lineWidth, color, dashed) {
    __privateAdd(this, _setStartPoint);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.lineWidth = lineWidth || 1;
    this.color = color;
    this.dashed = dashed;
  }
  processLine(targetData) {
    const xDelta = Math.abs(this.x2 - this.x1);
    const yDelta = Math.abs(this.y2 - this.y1);
    const minDelta = this.lineWidth;
    let oneLine = { x: 0, y: 0, w: PDFUnit.toFixedFloat(this.lineWidth), l: 0 };
    const clrId = PDFUnit.findColorIndex(this.color);
    const colorObj = clrId > 0 && clrId < PDFUnit.colorCount() ? { clr: clrId } : { oc: this.color };
    oneLine = { ...oneLine, ...colorObj };
    if (this.dashed) {
      oneLine = oneLine = { ...oneLine, dsh: 1 };
    }
    if (yDelta < this.lineWidth && xDelta > minDelta) {
      if (this.lineWidth < 4 && xDelta / this.lineWidth < 4) {
        nodeUtil.p2jinfo("Skipped: short thick HLine: lineWidth = " + this.lineWidth + ", xDelta = " + xDelta);
        return;
      }
      oneLine.l = PDFUnit.toFormX(xDelta);
      if (this.x1 > this.x2)
        __privateMethod(this, _setStartPoint, setStartPoint_fn).call(this, oneLine, this.x2, this.y2);
      else
        __privateMethod(this, _setStartPoint, setStartPoint_fn).call(this, oneLine, this.x1, this.y1);
      targetData.HLines.push(oneLine);
    } else if (xDelta < this.lineWidth && yDelta > minDelta) {
      if (this.lineWidth < 4 && yDelta / this.lineWidth < 4) {
        nodeUtil.p2jinfo("Skipped: short thick VLine: lineWidth = " + this.lineWidth + ", yDelta = " + yDelta);
        return;
      }
      oneLine.l = PDFUnit.toFormY(yDelta);
      if (this.y1 > this.y2)
        __privateMethod(this, _setStartPoint, setStartPoint_fn).call(this, oneLine, this.x2, this.y2);
      else
        __privateMethod(this, _setStartPoint, setStartPoint_fn).call(this, oneLine, this.x1, this.y1);
      targetData.VLines.push(oneLine);
    }
  }
};
_setStartPoint = new WeakSet();
setStartPoint_fn = function(oneLine, x, y) {
  oneLine.x = PDFUnit.toFormX(x);
  oneLine.y = PDFUnit.toFormY(y);
};

// node_modules/pdf2json/lib/pdffill.js
import nodeUtil2 from "util";
var PDFFill = class {
  // constructor
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  processFill(targetData) {
    const clrId = PDFUnit.findColorIndex(this.color);
    const colorObj = clrId > 0 && clrId < PDFUnit.colorCount() ? { clr: clrId } : { oc: this.color };
    const oneFill = {
      x: PDFUnit.toFormX(this.x),
      y: PDFUnit.toFormY(this.y),
      w: PDFUnit.toFormX(this.width),
      h: PDFUnit.toFormY(this.height),
      ...colorObj
    };
    if (oneFill.w < 2 && oneFill.h < 2) {
      nodeUtil2.p2jinfo("Skipped: tiny fill: " + oneFill.w + " x " + oneFill.h);
      return;
    }
    targetData.Fills.push(oneFill);
  }
};

// node_modules/pdf2json/lib/pdffont.js
import nodeUtil3 from "util";
var _boldSubNames = ["bd", "bold", "demi", "black"];
var _stdFonts = ["arial", "helvetica", "sans-serif ", "courier ", "monospace ", "ocr "];
var DISTANCE_DELTA = 0.1;
var _initTypeName, initTypeName_fn, _initSubType, initSubType_fn, _initSymbol, initSymbol_fn, _initSpaceWidth, initSpaceWidth_fn, _setFaceIndex, setFaceIndex_fn, _getFontStyleIndex, getFontStyleIndex_fn, _processSymbolicFont, processSymbolicFont_fn, _textRotationAngle, textRotationAngle_fn;
var _PDFFont = class _PDFFont {
  // constructor
  constructor(fontObj) {
    __privateAdd(this, _initTypeName);
    __privateAdd(this, _initSubType);
    __privateAdd(this, _initSymbol);
    __privateAdd(this, _initSpaceWidth);
    // private
    __privateAdd(this, _setFaceIndex);
    __privateAdd(this, _getFontStyleIndex);
    __privateAdd(this, _processSymbolicFont);
    __privateAdd(this, _textRotationAngle);
    this.fontObj = fontObj;
    this.typeName = __privateMethod(this, _initTypeName, initTypeName_fn).call(this);
    const { subType, bold } = __privateMethod(this, _initSubType, initSubType_fn).call(this);
    this.subType = subType;
    this.bold = bold;
    this.isSymbol = __privateMethod(this, _initSymbol, initSymbol_fn).call(this);
    this.spaceWidth = __privateMethod(this, _initSpaceWidth, initSpaceWidth_fn).call(this);
    this.fontSize = 1;
    this.faceIdx = 0;
    this.italic = false;
    this.fontStyleId = -1;
  }
  /** sort text blocks by y then x */
  static compareBlockPos(t1, t2) {
    if (t1.y < t2.y - DISTANCE_DELTA) {
      return -1;
    }
    if (Math.abs(t1.y - t2.y) <= DISTANCE_DELTA) {
      if (t1.x < t2.x - DISTANCE_DELTA) {
        return -1;
      }
      if (Math.abs(t1.x - t2.x) <= DISTANCE_DELTA) {
        return 0;
      }
    }
    return 1;
  }
  static haveSameStyle(t1, t2) {
    let retVal = t1.R[0].S === t2.R[0].S;
    if (retVal && t1.R[0].S < 0) {
      for (let i = 0; i < t1.R[0].TS.length; i++) {
        if (t1.R[0].TS[i] !== t2.R[0].TS[i]) {
          retVal = false;
          break;
        }
      }
    }
    if (retVal) {
      retVal = typeof t1.R[0].RA === "undefined" && typeof t2.R[0].RA === "undefined";
    }
    return retVal;
  }
  static getSpaceThreshHold(t1) {
    return _PDFFont.getFontSize(t1) / 12 * t1.sw;
  }
  static areAdjacentBlocks(t1, t2) {
    const isInSameLine = Math.abs(t1.y - t2.y) <= DISTANCE_DELTA;
    const isDistanceSmallerThanASpace = t2.x - t1.x - t1.w < _PDFFont.getSpaceThreshHold(t1);
    return isInSameLine && isDistanceSmallerThanASpace;
  }
  static getFontSize(textBlock) {
    const sId = textBlock.R[0].S;
    return sId < 0 ? textBlock.R[0].TS[1] : kFontStyles[sId][1];
  }
  static areDuplicateBlocks(t1, t2) {
    return t1.x == t2.x && t1.y == t2.y && t1.R[0].T == t2.R[0].T && _PDFFont.haveSameStyle(t1, t2);
  }
  // public instance methods
  processText(p2, str, maxWidth, color, fontSize, targetData, matrix2D) {
    const text2 = __privateMethod(this, _processSymbolicFont, processSymbolicFont_fn).call(this, str);
    if (!text2) {
      return;
    }
    this.fontStyleId = __privateMethod(this, _getFontStyleIndex, getFontStyleIndex_fn).call(this, fontSize);
    const TS = [this.faceIdx, this.fontSize, this.bold ? 1 : 0, this.italic ? 1 : 0];
    const clrId = PDFUnit.findColorIndex(color);
    const colorObj = clrId >= 0 && clrId < PDFUnit.colorCount() ? { clr: clrId } : { oc: color };
    let textRun = {
      T: this.flash_encode(text2),
      S: this.fontStyleId,
      TS
    };
    const rAngle = __privateMethod(this, _textRotationAngle, textRotationAngle_fn).call(this, matrix2D);
    if (rAngle != 0) {
      nodeUtil3.p2jinfo(str + ": rotated " + rAngle + " degree.");
      textRun = { ...textRun, RA: rAngle };
    }
    const oneText = {
      x: PDFUnit.toFormX(p2.x) - 0.25,
      y: PDFUnit.toFormY(p2.y) - 0.75,
      w: PDFUnit.toFixedFloat(maxWidth),
      ...colorObj,
      //MQZ.07/29/2013: when color is not in color dictionary, set the original color (oc)
      sw: this.spaceWidth,
      //font space width, use to merge adjacent text blocks
      A: "left",
      R: [textRun]
    };
    targetData.Texts.push(oneText);
  }
  flash_encode(str) {
    let retVal = encodeURIComponent(str);
    retVal = retVal.replace("%C2%96", "-");
    retVal = retVal.replace("%C2%91", "%27");
    retVal = retVal.replace("%C2%92", "%27");
    retVal = retVal.replace("%C2%82", "%27");
    retVal = retVal.replace("%C2%93", "%22");
    retVal = retVal.replace("%C2%94", "%22");
    retVal = retVal.replace("%C2%84", "%22");
    retVal = retVal.replace("%C2%8B", "%C2%AB");
    retVal = retVal.replace("%C2%9B", "%C2%BB");
    return retVal;
  }
  clean() {
    this.fontObj = null;
    delete this.fontObj;
  }
};
_initTypeName = new WeakSet();
initTypeName_fn = function() {
  let typeName = this.fontObj.name || this.fontObj.fallbackName;
  if (!typeName) {
    typeName = kFontFaces[0];
  }
  typeName = typeName.toLowerCase();
  return typeName;
};
_initSubType = new WeakSet();
initSubType_fn = function() {
  let subType = this.typeName;
  let bold = false;
  let nameArray = this.typeName.split("+");
  if (Array.isArray(nameArray) && nameArray.length > 1) {
    subType = nameArray[1].split("-");
    if (Array.isArray(subType) && subType.length > 1) {
      let subName = subType[1].toLowerCase();
      bold = _boldSubNames.indexOf(subName) >= 0;
      subType = subType[0];
    }
  }
  return { subType, bold };
};
_initSymbol = new WeakSet();
initSymbol_fn = function() {
  let isSymbol = this.typeName.indexOf("symbol") > 0 || kFontFaces[2].indexOf(this.subType) >= 0;
  if (this.fontObj.isSymbolicFont) {
    let mFonts = _stdFonts.filter((oneName) => this.typeName.indexOf(oneName) >= 0);
    if (mFonts.length > 0) {
      this.fontObj.isSymbolicFont = false;
      nodeUtil3.p2jinfo("Reset: isSymbolicFont (false) for " + this.fontObj.name);
    }
  } else {
    if (isSymbol) {
      this.fontObj.isSymbolicFont = true;
      nodeUtil3.p2jinfo("Reset: isSymbolicFont (true) for " + this.fontObj.name);
    }
  }
  return isSymbol;
};
_initSpaceWidth = new WeakSet();
initSpaceWidth_fn = function() {
  let spaceWidth = this.fontObj.spaceWidth;
  if (!spaceWidth) {
    var spaceId = Array.isArray(this.fontObj.toFontChar) ? this.fontObj.toFontChar.indexOf(32) : -1;
    spaceWidth = spaceId >= 0 && Array.isArray(this.fontObj.widths) ? this.fontObj.widths[spaceId] : 250;
  }
  spaceWidth = PDFUnit.toFormX(spaceWidth) / 32;
  return spaceWidth;
};
_setFaceIndex = new WeakSet();
setFaceIndex_fn = function() {
  const fontObj = this.fontObj;
  this.bold = fontObj.bold;
  if (!this.bold) {
    this.bold = this.typeName.indexOf("bold") >= 0 || this.typeName.indexOf("black") >= 0;
  }
  this.italic = fontObj.italic;
  if (!this.italic) {
    this.italic = this.typeName.indexOf("italic") >= 0 || this.typeName.indexOf("oblique") >= 0;
  }
  if ((!this.bold || !this.italic) && this.typeName.indexOf("boldobl") >= 0) {
    this.bold = true;
    this.italic = true;
  }
  let typeName = this.subType;
  if (fontObj.isSerifFont) {
    if (kFontFaces[1].indexOf(typeName) >= 0)
      this.faceIdx = 1;
  } else if (kFontFaces[2].indexOf(this.subType) >= 0) {
    this.faceIdx = 2;
  } else if (fontObj.isMonospace) {
    this.faceIdx = 3;
    if (kFontFaces[4].indexOf(typeName) >= 0)
      this.faceIdx = 4;
    else if (kFontFaces[5].indexOf(typeName) >= 0)
      this.faceIdx = 5;
  } else if (fontObj.isSymbolicFont) {
    this.faceIdx = 2;
  }
  if (this.faceIdx == 0) {
    if (this.typeName.indexOf("narrow") > 0)
      this.faceIdx = 1;
  }
};
_getFontStyleIndex = new WeakSet();
getFontStyleIndex_fn = function(fontSize) {
  __privateMethod(this, _setFaceIndex, setFaceIndex_fn).call(this);
  this.fontSize = this.bold && fontSize > 12 ? fontSize + 1 : fontSize;
  let fsa = [this.faceIdx, this.fontSize, this.bold ? 1 : 0, this.italic ? 1 : 0];
  let retVal = -1;
  kFontStyles.forEach(function(element, index, list) {
    if (retVal === -1) {
      if (element[0] === fsa[0] && element[1] === fsa[1] && element[2] === fsa[2] && element[3] === fsa[3]) {
        retVal = index;
      }
    }
  });
  return retVal;
};
_processSymbolicFont = new WeakSet();
processSymbolicFont_fn = function(str) {
  let retVal = str;
  if (!str || str.length !== 1)
    return retVal;
  if (!this.fontObj.isSymbolicFont || !this.isSymbol) {
    if (retVal == "C" || retVal == "G") {
      retVal = " " + retVal + " ";
    }
    return retVal;
  }
  switch (str.charCodeAt(0)) {
    case 20:
      retVal = "\u2713";
      break;
    case 70:
      retVal = this.fontObj.type === "CIDFontType0" ? "\u26A0" : "}";
      break;
    case 71:
      retVal = "\u25B6";
      break;
    case 97:
      retVal = "\u25B6";
      break;
    case 99:
      retVal = this.isSymbol ? "\u2022" : "\u25B2";
      break;
    case 100:
      retVal = "\u25BC";
      break;
    case 103:
      retVal = "\u27A8";
      break;
    case 106:
      retVal = "";
      break;
    case 114:
      retVal = "\u2022";
      break;
    case 115:
      retVal = "\u25B2";
      break;
    case 116:
      retVal = "\u2022";
      break;
    case 118:
      retVal = "\u2022";
      break;
    default:
      nodeUtil3.p2jinfo(this.fontObj.type + " - SymbolicFont - (" + this.fontObj.name + ") : " + str.charCodeAt(0) + "::" + str.charCodeAt(1) + " => " + retVal);
  }
  return retVal;
};
_textRotationAngle = new WeakSet();
textRotationAngle_fn = function(matrix2D) {
  let retVal = 0;
  if (matrix2D[0][0] === 0 && matrix2D[1][1] === 0) {
    if (matrix2D[0][1] != 0 && matrix2D[1][0] != 0) {
      if (matrix2D[0][1] / matrix2D[1][0] + 1 < 1e-4)
        retVal = 90;
    }
  } else if (matrix2D[0][0] !== 0 && matrix2D[1][1] !== 0) {
    let r1 = Math.atan(-matrix2D[0][1] / matrix2D[0][0]);
    let r2 = Math.atan(matrix2D[1][0] / matrix2D[1][1]);
    if (Math.abs(r1) > 1e-4 && r1 - r2 < 1e-4) {
      retVal = r1 * 180 / Math.PI;
    }
  }
  return retVal;
};
var PDFFont = _PDFFont;

// node_modules/pdf2json/lib/pdfcanvas.js
var { round: mr, sin: ms, cos: mc, abs, sqrt } = Math;
var dec2hex = [];
for (let i = 0; i < 16; i++) {
  for (let j2 = 0; j2 < 16; j2++) {
    dec2hex[i * 16 + j2] = i.toString(16) + j2.toString(16);
  }
}
function createMatrixIdentity() {
  return [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
}
function matrixMultiply(m1, m2) {
  let result = createMatrixIdentity();
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      let sum = 0;
      for (let z2 = 0; z2 < 3; z2++) {
        sum += m1[x][z2] * m2[z2][y];
      }
      result[x][y] = sum;
    }
  }
  return result;
}
function copyState(o1, o2) {
  o2.fillStyle = o1.fillStyle;
  o2.lineCap = o1.lineCap;
  o2.lineJoin = o1.lineJoin;
  o2.lineWidth = o1.lineWidth;
  o2.miterLimit = o1.miterLimit;
  o2.shadowBlur = o1.shadowBlur;
  o2.shadowColor = o1.shadowColor;
  o2.shadowOffsetX = o1.shadowOffsetX;
  o2.shadowOffsetY = o1.shadowOffsetY;
  o2.strokeStyle = o1.strokeStyle;
  o2.globalAlpha = o1.globalAlpha;
  o2.arcScaleX_ = o1.arcScaleX_;
  o2.arcScaleY_ = o1.arcScaleY_;
  o2.lineScale_ = o1.lineScale_;
  o2.dashArray = o1.dashArray;
}
function processStyle(styleString) {
  let str, alpha = 1;
  styleString = String(styleString);
  if (styleString.substring(0, 3) == "rgb") {
    let start = styleString.indexOf("(", 3);
    let end = styleString.indexOf(")", start + 1);
    let guts = styleString.substring(start + 1, end).split(",");
    str = "#";
    for (let i = 0; i < 3; i++) {
      str += dec2hex[Number(guts[i])];
    }
    if (guts.length == 4 && styleString.substring(3, 4) == "a") {
      alpha = guts[3];
    }
  } else {
    str = styleString;
  }
  return { color: str, alpha };
}
function bezierCurveToHelper(self2, cp1, cp2, p2) {
  self2.currentPath_.push({
    type: "bezierCurveTo",
    cp1x: cp1.x,
    cp1y: cp1.y,
    cp2x: cp2.x,
    cp2y: cp2.y,
    x: p2.x,
    y: p2.y
  });
  self2.currentX_ = p2.x;
  self2.currentY_ = p2.y;
}
function matrixIsFinite(m2) {
  for (let j2 = 0; j2 < 3; j2++) {
    for (let k = 0; k < 2; k++) {
      if (!isFinite(m2[j2][k]) || isNaN(m2[j2][k])) {
        return false;
      }
    }
  }
  return true;
}
function setM(ctx, m2, updateLineScale) {
  if (!matrixIsFinite(m2)) {
    return;
  }
  ctx.m_ = m2;
  if (updateLineScale) {
    let det = m2[0][0] * m2[1][1] - m2[0][1] * m2[1][0];
    ctx.lineScale_ = sqrt(abs(det));
  }
}
var CanvasPattern_ = class {
  constructor() {
  }
};
var CanvasGradient_ = class {
  constructor(aType) {
    this.type_ = aType;
    this.x0_ = 0;
    this.y0_ = 0;
    this.r0_ = 0;
    this.x1_ = 0;
    this.y1_ = 0;
    this.r1_ = 0;
    this.colors_ = [];
  }
  addColorStop(aOffset, aColor) {
    aColor = processStyle(aColor);
    this.colors_.push({
      offset: aOffset,
      color: aColor.color,
      alpha: aColor.alpha
    });
  }
};
var _drawPDFLine, drawPDFLine_fn, _drawPDFFill, drawPDFFill_fn, _needRemoveRect, needRemoveRect_fn;
var CanvasRenderingContext2D_ = class {
  constructor(canvasTarget, scaledWidth, scaledHeight) {
    //private helper methods
    __privateAdd(this, _drawPDFLine);
    __privateAdd(this, _drawPDFFill);
    __privateAdd(this, _needRemoveRect);
    this.m_ = createMatrixIdentity();
    this.mStack_ = [];
    this.aStack_ = [];
    this.currentPath_ = [];
    this.strokeStyle = "#000";
    this.fillStyle = "#000";
    this.lineWidth = 1;
    this.lineJoin = "miter";
    this.lineCap = "butt";
    this.dashArray = [];
    this.miterLimit = 1;
    this.globalAlpha = 1;
    if (!("HLines" in canvasTarget) || !Array.isArray(canvasTarget.HLines))
      canvasTarget.HLines = [];
    if (!("VLines" in canvasTarget) || !Array.isArray(canvasTarget.VLines))
      canvasTarget.VLines = [];
    if (!("Fills" in canvasTarget) || !Array.isArray(canvasTarget.Fills))
      canvasTarget.Fills = [];
    if (!("Texts" in canvasTarget) || !Array.isArray(canvasTarget.Texts))
      canvasTarget.Texts = [];
    this.canvas = canvasTarget;
    this.width = scaledWidth;
    this.height = scaledHeight;
    this.arcScaleX_ = 1;
    this.arcScaleY_ = 1;
    this.lineScale_ = 1;
    this.currentFont = null;
  }
  getContext(ctxType) {
    return ctxType === "2d" ? this : null;
  }
  setLineDash(lineDash) {
    this.dashArray = lineDash;
  }
  getLineDash() {
    return this.dashArray;
  }
  fillText(text2, x, y, maxWidth, fontSize) {
    if (!text2 || text2.trim().length < 1)
      return;
    let p2 = this.getCoords_(x, y);
    let a = processStyle(this.fillStyle || this.strokeStyle);
    let color = !!a ? a.color : "#000000";
    this.currentFont.processText(p2, text2, maxWidth, color, fontSize, this.canvas, this.m_);
  }
  strokeText(text2, x, y, maxWidth) {
    this.fillText(text2, x, y, maxWidth);
  }
  measureText(text2) {
    console.warn("to be implemented: contextPrototype.measureText - ", text2);
    let chars = text2.length || 1;
    return { width: chars * (this.currentFont.spaceWidth || 5) };
  }
  setFont(fontObj) {
    if (!!this.currentFont && typeof this.currentFont.clean === "function") {
      this.currentFont.clean();
      this.currentFont = null;
    }
    this.currentFont = new PDFFont(fontObj);
  }
  clearRect() {
    console.warn("to be implemented: contextPrototype.clearRect");
  }
  beginPath() {
    this.currentPath_ = [];
  }
  moveTo(aX, aY) {
    let p2 = this.getCoords_(aX, aY);
    this.currentPath_.push({ type: "moveTo", x: p2.x, y: p2.y });
    this.currentX_ = p2.x;
    this.currentY_ = p2.y;
  }
  lineTo(aX, aY) {
    let p2 = this.getCoords_(aX, aY);
    this.currentPath_.push({ type: "lineTo", x: p2.x, y: p2.y });
    this.currentX_ = p2.x;
    this.currentY_ = p2.y;
  }
  bezierCurveTo(aCP1x, aCP1y, aCP2x, aCP2y, aX, aY) {
    let p2 = this.getCoords_(aX, aY);
    let cp1 = this.getCoords_(aCP1x, aCP1y);
    let cp2 = this.getCoords_(aCP2x, aCP2y);
    bezierCurveToHelper(this, cp1, cp2, p2);
  }
  quadraticCurveTo(aCPx, aCPy, aX, aY) {
    let cp = this.getCoords_(aCPx, aCPy);
    let p2 = this.getCoords_(aX, aY);
    let cp1 = {
      x: this.currentX_ + 2 / 3 * (cp.x - this.currentX_),
      y: this.currentY_ + 2 / 3 * (cp.y - this.currentY_)
    };
    let cp2 = {
      x: cp1.x + (p2.x - this.currentX_) / 3,
      y: cp1.y + (p2.y - this.currentY_) / 3
    };
    bezierCurveToHelper(this, cp1, cp2, p2);
  }
  arc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    let arcType = aClockwise ? "at" : "wa";
    let xStart = aX + mc(aStartAngle) * aRadius;
    let yStart = aY + ms(aStartAngle) * aRadius;
    let xEnd = aX + mc(aEndAngle) * aRadius;
    let yEnd = aY + ms(aEndAngle) * aRadius;
    if (xStart == xEnd && !aClockwise) {
      xStart += 0.125;
    }
    let p2 = this.getCoords_(aX, aY);
    let pStart = this.getCoords_(xStart, yStart);
    let pEnd = this.getCoords_(xEnd, yEnd);
    this.currentPath_.push({
      type: arcType,
      x: p2.x,
      y: p2.y,
      radius: aRadius,
      xStart: pStart.x,
      yStart: pStart.y,
      xEnd: pEnd.x,
      yEnd: pEnd.y
    });
  }
  rect(aX, aY, aWidth, aHeight) {
    if (__privateMethod(this, _needRemoveRect, needRemoveRect_fn).call(this, aX, aY, aWidth, aHeight)) {
      return;
    }
    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
  }
  strokeRect(aX, aY, aWidth, aHeight) {
    if (__privateMethod(this, _needRemoveRect, needRemoveRect_fn).call(this, aX, aY, aWidth, aHeight)) {
      return;
    }
    let oldPath = this.currentPath_;
    this.beginPath();
    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
    this.stroke();
    this.currentPath_ = oldPath;
  }
  fillRect(aX, aY, aWidth, aHeight) {
    if (__privateMethod(this, _needRemoveRect, needRemoveRect_fn).call(this, aX, aY, aWidth, aHeight)) {
      return;
    }
    let oldPath = this.currentPath_;
    this.beginPath();
    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
    this.fill();
    this.currentPath_ = oldPath;
  }
  createLinearGradient(aX0, aY0, aX1, aY1) {
    let gradient = new CanvasGradient_("gradient");
    gradient.x0_ = aX0;
    gradient.y0_ = aY0;
    gradient.x1_ = aX1;
    gradient.y1_ = aY1;
    return gradient;
  }
  createRadialGradient(aX0, aY0, aR0, aX1, aY1, aR1) {
    let gradient = new CanvasGradient_("gradientradial");
    gradient.x0_ = aX0;
    gradient.y0_ = aY0;
    gradient.r0_ = aR0;
    gradient.x1_ = aX1;
    gradient.y1_ = aY1;
    gradient.r1_ = aR1;
    return gradient;
  }
  drawImage(image, var_args) {
  }
  getImageData(x, y, w2, h2) {
    return {
      width: w2,
      height: h2,
      data: new Uint8Array(w2 * h2 * 4)
    };
  }
  stroke(aFill) {
    if (this.currentPath_.length < 2) {
      return;
    }
    let a = processStyle(aFill ? this.fillStyle : this.strokeStyle);
    let color = a.color;
    let lineWidth = this.lineScale_ * this.lineWidth;
    let min = { x: null, y: null };
    let max = { x: null, y: null };
    for (let i = 0; i < this.currentPath_.length; i++) {
      let p2 = this.currentPath_[i];
      switch (p2.type) {
        case "moveTo":
          break;
        case "lineTo":
          if (!aFill) {
            if (i > 0) {
              __privateMethod(this, _drawPDFLine, drawPDFLine_fn).call(this, this.currentPath_[i - 1], p2, lineWidth, color);
            }
          }
          break;
        case "close":
          if (!aFill) {
            if (i > 0) {
              __privateMethod(this, _drawPDFLine, drawPDFLine_fn).call(this, this.currentPath_[i - 1], this.currentPath_[0], lineWidth, color);
            }
          }
          p2 = null;
          break;
        case "bezierCurveTo":
          break;
        case "at":
        case "wa":
          break;
      }
      if (aFill && p2) {
        if (min.x == null || p2.x < min.x) {
          min.x = p2.x;
        }
        if (max.x == null || p2.x > max.x) {
          max.x = p2.x;
        }
        if (min.y == null || p2.y < min.y) {
          min.y = p2.y;
        }
        if (max.y == null || p2.y > max.y) {
          max.y = p2.y;
        }
      }
    }
    if (aFill) {
      __privateMethod(this, _drawPDFFill, drawPDFFill_fn).call(this, min, min, max, color);
    }
  }
  fill() {
    this.stroke(true);
  }
  closePath() {
    this.currentPath_.push({ type: "close" });
  }
  /**
   * @private
   */
  getCoords_(aX, aY) {
    let m2 = this.m_;
    return {
      x: aX * m2[0][0] + aY * m2[1][0] + m2[2][0],
      y: aX * m2[0][1] + aY * m2[1][1] + m2[2][1]
    };
  }
  save() {
    let o = {};
    copyState(this, o);
    this.aStack_.push(o);
    this.mStack_.push(this.m_);
    this.m_ = matrixMultiply(createMatrixIdentity(), this.m_);
  }
  restore() {
    copyState(this.aStack_.pop(), this);
    this.m_ = this.mStack_.pop();
  }
  translate(aX, aY) {
    let m1 = [
      [1, 0, 0],
      [0, 1, 0],
      [aX, aY, 1]
    ];
    setM(this, matrixMultiply(m1, this.m_), false);
  }
  rotate(aRot) {
    let c2 = mc(aRot);
    let s3 = ms(aRot);
    let m1 = [
      [c2, s3, 0],
      [-s3, c2, 0],
      [0, 0, 1]
    ];
    setM(this, matrixMultiply(m1, this.m_), false);
  }
  scale(aX, aY) {
    this.arcScaleX_ *= aX;
    this.arcScaleY_ *= aY;
    let m1 = [
      [aX, 0, 0],
      [0, aY, 0],
      [0, 0, 1]
    ];
    setM(this, matrixMultiply(m1, this.m_), true);
  }
  transform(m11, m12, m21, m22, dx, dy) {
    let m1 = [
      [m11, m12, 0],
      [m21, m22, 0],
      [dx, dy, 1]
    ];
    setM(this, matrixMultiply(m1, this.m_), true);
  }
  setTransform(m11, m12, m21, m22, dx, dy) {
    let m2 = [
      [m11, m12, 0],
      [m21, m22, 0],
      [dx, dy, 1]
    ];
    setM(this, m2, true);
  }
  /******** STUBS ********/
  clip() {
  }
  arcTo() {
  }
  createPattern() {
    return new CanvasPattern_();
  }
};
_drawPDFLine = new WeakSet();
drawPDFLine_fn = function(p1, p2, lineWidth, color) {
  let dashedLine = Array.isArray(this.dashArray) && this.dashArray.length > 1;
  let pL = new PDFLine(p1.x, p1.y, p2.x, p2.y, lineWidth, color, dashedLine);
  pL.processLine(this.canvas);
};
_drawPDFFill = new WeakSet();
drawPDFFill_fn = function(cp, min, max, color) {
  let width = max.x - min.x;
  let height = max.y - min.y;
  let pF = new PDFFill(cp.x, cp.y, width, height, color);
  pF.processFill(this.canvas);
};
_needRemoveRect = new WeakSet();
needRemoveRect_fn = function(x, y, w2, h2) {
  let retVal = Math.abs(w2 - Math.abs(h2)) < 1 && w2 < 13;
  if (retVal) {
    nodeUtil4.p2jinfo("Skipped: tiny rect: w=" + w2 + ", h=" + h2);
  }
  return retVal;
};

// node_modules/pdf2json/lib/pdffield.js
import nodeUtil5 from "util";
var kFBANotOverridable = 1024;
var kFBARequired = 16;
var kMinHeight = 20;
var _normalizeRect, normalizeRect_fn, _getFieldPosition, getFieldPosition_fn, _getFieldBaseData, getFieldBaseData_fn, _addAlpha, addAlpha_fn, _addCheckBox, addCheckBox_fn, _addRadioButton, addRadioButton_fn, _addLinkButton, addLinkButton_fn, _addSelect, addSelect_fn, _addSignature, addSignature_fn;
var _PDFField = class _PDFField {
  // constructor
  constructor(field, viewport, Fields, Boxsets) {
    __privateAdd(this, _getFieldPosition);
    __privateAdd(this, _getFieldBaseData);
    __privateAdd(this, _addAlpha);
    __privateAdd(this, _addCheckBox);
    __privateAdd(this, _addRadioButton);
    __privateAdd(this, _addLinkButton);
    __privateAdd(this, _addSelect);
    __privateAdd(this, _addSignature);
    this.field = field;
    this.viewport = viewport;
    this.Fields = Fields;
    this.Boxsets = Boxsets;
  }
  static isWidgetSupported(field) {
    let retVal = false;
    switch (field.fieldType) {
      case "Tx":
        retVal = true;
        break;
      case "Btn":
        if (field.fieldFlags & 32768) {
          field.fieldType = "Rd";
        } else if (field.fieldFlags & 65536) {
          field.fieldType = "Btn";
        } else {
          field.fieldType = "Cb";
        }
        retVal = true;
        break;
      case "Ch":
        retVal = true;
        break;
      case "Sig":
        retVal = true;
        break;
      default:
        nodeUtil5.p2jwarn("Unsupported: field.fieldType of " + field.fieldType);
        break;
    }
    return retVal;
  }
  static isFormElement(field) {
    let retVal = false;
    switch (field.subtype) {
      case "Widget":
        retVal = _PDFField.isWidgetSupported(field);
        break;
      default:
        nodeUtil5.p2jwarn("Unsupported: field.type of " + field.subtype);
        break;
    }
    return retVal;
  }
  // public instance methods
  processField() {
    this.field.TI = _PDFField.tabIndex++;
    switch (this.field.fieldType) {
      case "Tx":
        __privateMethod(this, _addAlpha, addAlpha_fn).call(this, this.field);
        break;
      case "Cb":
        __privateMethod(this, _addCheckBox, addCheckBox_fn).call(this, this.field);
        break;
      case "Rd":
        __privateMethod(this, _addRadioButton, addRadioButton_fn).call(this, this.field);
        break;
      case "Btn":
        __privateMethod(this, _addLinkButton, addLinkButton_fn).call(this, this.field);
        break;
      case "Ch":
        __privateMethod(this, _addSelect, addSelect_fn).call(this, this.field);
        break;
      case "Sig":
        __privateMethod(this, _addSignature, addSignature_fn).call(this, this.field);
        break;
    }
    this.clean();
  }
  clean() {
    delete this.field;
    delete this.viewport;
    delete this.Fields;
    delete this.Boxsets;
  }
  //static public method to generate fieldsType object based on parser result
  static getAllFieldsTypes(data) {
    const isFieldReadOnly = (field) => {
      return field.AM & kFBANotOverridable ? true : false;
    };
    const getFieldBase = (field) => {
      return { id: field.id.Id, type: field.T.Name, calc: isFieldReadOnly(field), value: field.V || "" };
    };
    let retVal = [];
    data.Pages.forEach((page) => {
      page.Boxsets.forEach((boxsets) => {
        if (boxsets.boxes.length > 1) {
          boxsets.boxes.forEach((box2) => {
            retVal.push({ id: boxsets.id.Id, type: "radio", calc: isFieldReadOnly(box2), value: box2.id.Id });
          });
        } else {
          retVal.push(getFieldBase(boxsets.boxes[0]));
        }
      });
      page.Fields.forEach((field) => retVal.push(getFieldBase(field)));
    });
    return retVal;
  }
};
_normalizeRect = new WeakSet();
normalizeRect_fn = function(rect) {
  const r2 = rect.slice(0);
  if (rect[0] > rect[2]) {
    r2[0] = rect[2];
    r2[2] = rect[0];
  }
  if (rect[1] > rect[3]) {
    r2[1] = rect[3];
    r2[3] = rect[1];
  }
  return r2;
};
_getFieldPosition = new WeakSet();
getFieldPosition_fn = function(field) {
  var _a;
  let viewPort = this.viewport;
  let fieldRect = viewPort.convertToViewportRectangle(field.rect);
  let rect = __privateMethod(_a = _PDFField, _normalizeRect, normalizeRect_fn).call(_a, fieldRect);
  let height = rect[3] - rect[1];
  if (field.fieldType === "Tx") {
    if (height > kMinHeight + 2) {
      rect[1] += 2;
      height -= 2;
    }
  } else if (field.fieldType !== "Ch") {
    rect[1] -= 3;
  }
  height = height >= kMinHeight ? height : kMinHeight;
  return {
    x: PDFUnit.toFormX(rect[0]),
    y: PDFUnit.toFormY(rect[1]),
    w: PDFUnit.toFormX(rect[2] - rect[0]),
    h: PDFUnit.toFormY(height)
  };
};
_getFieldBaseData = new WeakSet();
getFieldBaseData_fn = function(field) {
  let attributeMask = 0;
  if (field.fieldFlags & 1) {
    attributeMask |= kFBANotOverridable;
  }
  if (field.fieldFlags & 2) {
    attributeMask |= kFBARequired;
  }
  let anData = {
    id: { Id: field.fullName, EN: 0 },
    TI: field.TI,
    AM: attributeMask
  };
  if (field.alternativeText && field.alternativeText.length > 1) {
    anData.TU = field.alternativeText;
  }
  if (field.alternativeID && field.alternativeID.length > 1) {
    anData.TM = field.alternativeID;
  }
  return Object.assign(anData, __privateMethod(this, _getFieldPosition, getFieldPosition_fn).call(this, field));
};
_addAlpha = new WeakSet();
addAlpha_fn = function(field) {
  const anData = Object.assign({
    style: 48,
    T: {
      Name: field.TName || "alpha",
      TypeInfo: {}
    }
  }, __privateMethod(this, _getFieldBaseData, getFieldBaseData_fn).call(this, field));
  if (field.MV) {
    anData.MV = field.MV;
  }
  if (field.fieldValue) {
    anData.V = field.fieldValue;
  }
  this.Fields.push(anData);
};
_addCheckBox = new WeakSet();
addCheckBox_fn = function(box2) {
  const anData = Object.assign({
    style: 48,
    T: {
      Name: "box",
      TypeInfo: {}
    }
  }, __privateMethod(this, _getFieldBaseData, getFieldBaseData_fn).call(this, box2));
  if (box2.fieldValue) {
    anData.checked = box2.fieldValue !== "Off";
  }
  this.Boxsets.push({ boxes: [anData] });
};
_addRadioButton = new WeakSet();
addRadioButton_fn = function(box2) {
  const anData = Object.assign({
    style: 48,
    T: {
      Name: "box",
      TypeInfo: {}
    }
  }, __privateMethod(this, _getFieldBaseData, getFieldBaseData_fn).call(this, box2));
  anData.id.Id = box2.value;
  if ("checked" in box2) {
    anData.checked = box2.checked;
  }
  const rdGroup = this.Boxsets.filter((boxset) => "id" in boxset && "Id" in boxset.id && boxset.id.Id === box2.fullName)[0];
  if (!!rdGroup && "boxes" in rdGroup) {
    rdGroup.boxes.push(anData);
  } else {
    this.Boxsets.push({ boxes: [anData], id: { Id: box2.fullName, EN: 0 } });
  }
};
_addLinkButton = new WeakSet();
addLinkButton_fn = function(field) {
  const anData = Object.assign({
    style: 48,
    T: {
      Name: "link"
    },
    FL: {
      form: { Id: field.FL }
    }
  }, __privateMethod(this, _getFieldBaseData, getFieldBaseData_fn).call(this, field));
  this.Fields.push(anData);
};
_addSelect = new WeakSet();
addSelect_fn = function(field) {
  const anData = Object.assign({
    style: 48,
    T: {
      Name: "alpha",
      TypeInfo: {}
    }
  }, __privateMethod(this, _getFieldBaseData, getFieldBaseData_fn).call(this, field));
  anData.w -= 0.5;
  anData.PL = { V: [], D: [] };
  field.value.forEach((ele, idx) => {
    if (Array.isArray(ele)) {
      anData.PL.D.push(ele[0]);
      anData.PL.V.push(ele[1]);
    } else {
      anData.PL.D.push(ele);
      anData.PL.V.push(ele);
    }
  });
  if (field.fieldValue) {
    anData.V = field.fieldValue;
  }
  this.Fields.push(anData);
};
_addSignature = new WeakSet();
addSignature_fn = function(field) {
  const anData = Object.assign({
    style: 48,
    T: {
      Name: "signature",
      TypeInfo: {}
    }
  }, __privateMethod(this, _getFieldBaseData, getFieldBaseData_fn).call(this, field));
  if (field.Sig) {
    anData.Sig = {};
    if (field.Sig.Name)
      anData.Sig.Name = field.Sig.Name;
    if (field.Sig.M)
      anData.Sig.M = PDFUnit.dateToIso8601(field.Sig.M);
    if (field.Sig.Location)
      anData.Sig.Location = field.Sig.Location;
    if (field.Sig.Reason)
      anData.Sig.Reason = field.Sig.Reason;
    if (field.Sig.ContactInfo)
      anData.Sig.ContactInfo = field.Sig.ContactInfo;
  }
  this.Fields.push(anData);
};
// Normalize rectangle rect=[x1, y1, x2, y2] so that (x1,y1) < (x2,y2)
// For coordinate systems whose origin lies in the bottom-left, this
// means normalization to (BL,TR) ordering. For systems with origin in the
// top-left, this means (TL,BR) ordering.
__privateAdd(_PDFField, _normalizeRect);
__publicField(_PDFField, "tabIndex", 0);
var PDFField = _PDFField;

// node_modules/pdf2json/lib/ptixmlinject.js
var import_xmldom = __toESM(require_lib(), 1);
import fs from "fs";
var PTIXmlParser = class {
  // constructor
  constructor() {
    __publicField(this, "xmlData", null);
    __publicField(this, "ptiPageArray", []);
    this.xmlData = null;
    this.ptiPageArray = [];
  }
  parseXml(filePath, callback) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        callback(err);
      } else {
        this.xmlData = data;
        var parser = new import_xmldom.DOMParser();
        var dom = parser.parseFromString(this.xmlData);
        var root = dom.documentElement;
        var xmlFields = root.getElementsByTagName("field");
        var fields = [];
        for (var i = 0; i < xmlFields.length; i++) {
          var id = xmlFields[i].getAttribute("id");
          var xPos = xmlFields[i].getAttribute("x");
          var yPos = xmlFields[i].getAttribute("y");
          var width = xmlFields[i].getAttribute("width");
          var height = xmlFields[i].getAttribute("height");
          var type = xmlFields[i].getAttribute("xsi:type");
          var page = xmlFields[i].getAttribute("page");
          var fontName = xmlFields[i].getAttribute("fontName");
          var fontSize = xmlFields[i].getAttribute("fontSize");
          var item = {};
          var rectLeft = parseInt(xPos) - 21;
          var rectTop = parseInt(yPos) - 20;
          var rectRight = parseInt(rectLeft) + parseInt(width) - 4;
          var rectBottom = parseInt(rectTop) + parseInt(height) - 4;
          item.fieldType = "Tx";
          if (type == "Boolean") {
            item.fieldType = "Btn";
          } else if (type == "SSN" || type == "Phone" || type == "zip") {
            item.TName = type.toLowerCase();
          }
          item.alternativeText = "";
          item.fullName = id;
          item.fontSize = fontSize;
          item.subtype = "Widget";
          item.rect = [rectLeft, rectTop, rectRight, rectBottom];
          ;
          fields.push(item);
          this.ptiPageArray[parseInt(page)] = fields;
        }
      }
      callback();
    });
  }
  getFields(pageNum) {
    return this.ptiPageArray[pageNum];
  }
};

// node_modules/pdf2json/pkinfo.js
import path from "path";
import { fileURLToPath } from "url";
import fs2 from "fs";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var pkInfo = JSON.parse(fs2.readFileSync(`${__dirname}/package.json`, "utf8"));
var _PARSER_SIG = `${pkInfo.name}@${pkInfo.version} [${pkInfo.homepage}]`;

// node_modules/pdf2json/lib/pdf.js
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = path2.dirname(__filename2);
var _pdfjsFiles = [
  "shared/util.js",
  "shared/colorspace.js",
  "shared/pattern.js",
  "shared/function.js",
  "shared/annotation.js",
  "core/core.js",
  "core/obj.js",
  "core/charsets.js",
  "core/crypto.js",
  "core/evaluator.js",
  "core/fonts.js",
  "core/font_renderer.js",
  "core/glyphlist.js",
  "core/image.js",
  "core/metrics.js",
  "core/parser.js",
  "core/stream.js",
  "core/worker.js",
  "core/jpx.js",
  "core/jbig2.js",
  "core/bidi.js",
  "core/jpg.js",
  "core/chunked_stream.js",
  "core/pdf_manager.js",
  "core/cmap.js",
  "core/cidmaps.js",
  "display/canvas.js",
  "display/font_loader.js",
  "display/metadata.js",
  "display/api.js"
];
function createScratchCanvas(width, height) {
  return new CanvasRenderingContext2D_({}, width, height);
}
var PDFJS = {};
var globalScope = { console };
var baseDir = `${__dirname2}/../base/`;
var _baseCode = _pdfjsFiles.reduce((preContent, fileName, idx, arr) => preContent += fs3.readFileSync(baseDir + fileName, "utf8"), "");
eval(_baseCode);
var __addField, _addField_fn;
var _PDFPageParser = class _PDFPageParser {
  // constructor
  constructor(pdfPage, id, scale, ptiParser) {
    __privateAdd(this, __addField);
    //public
    __publicField(this, "id", -1);
    __publicField(this, "pdfPage", null);
    __publicField(this, "ptiParser", null);
    __publicField(this, "scale", 0);
    __publicField(this, "viewport", null);
    __publicField(this, "renderingState", -1);
    __publicField(this, "Fields", null);
    __publicField(this, "Boxsets", null);
    __publicField(this, "ctxCanvas", null);
    this.id = id;
    this.pdfPage = pdfPage;
    this.ptiParser = ptiParser;
    this.scale = scale || 1;
    this.viewport = this.pdfPage.getViewport(this.scale);
    this.renderingState = _PDFPageParser.RenderingStates.INITIAL;
    this.Fields = [];
    this.Boxsets = [];
    this.ctxCanvas = {};
  }
  get width() {
    return PDFUnit.toFormX(this.viewport.width);
  }
  get height() {
    return PDFUnit.toFormY(this.viewport.height);
  }
  get HLines() {
    return this.ctxCanvas.HLines;
  }
  get VLines() {
    return this.ctxCanvas.VLines;
  }
  get Fills() {
    return this.ctxCanvas.Fills;
  }
  get Texts() {
    return this.ctxCanvas.Texts;
  }
  destroy() {
    this.pdfPage.destroy();
    this.pdfPage = null;
    this.ptiParser = null;
    this.Fields = null;
    this.Boxsets = null;
    this.ctxCanvas = null;
  }
  getPagePoint(x, y) {
    return this.viewport.convertToPdfPoint(x, y);
  }
  parsePage(callback, errorCallBack) {
    if (this.renderingState !== _PDFPageParser.RenderingStates.INITIAL) {
      errorCallBack("Must be in new state before drawing");
      return;
    }
    this.renderingState = _PDFPageParser.RenderingStates.RUNNING;
    const canvas = createScratchCanvas(1, 1);
    const ctx = canvas.getContext("2d");
    function pageViewDrawCallback(error) {
      this.renderingState = _PDFPageParser.RenderingStates.FINISHED;
      if (error) {
        console.error(error);
        errorCallBack(`Error: Page ${this.id + 1}: ${error.message}`);
      } else {
        if (this.ptiParser) {
          const extraFields = this.ptiParser.getFields(parseInt(this.id) + 1);
          extraFields.forEach((field) => __privateMethod(this, __addField, _addField_fn).call(this, field));
        }
        this.ctxCanvas = ctx.canvas;
        this.stats = this.pdfPage.stats;
        nodeUtil6.p2jinfo(`Success: Page ${this.id + 1}`);
        callback();
      }
    }
    const renderContext = {
      canvasContext: ctx,
      viewport: this.viewport
    };
    this.pdfPage.render(renderContext).then(
      (data) => {
        this.pdfPage.getAnnotations().then(
          (fields) => {
            fields.forEach((field) => __privateMethod(this, __addField, _addField_fn).call(this, field));
            pageViewDrawCallback.call(this, null);
          },
          (err) => errorCallBack("pdfPage.getAnnotations error:" + err)
        );
      },
      (err) => pageViewDrawCallback.call(this, err)
    );
  }
};
__addField = new WeakSet();
_addField_fn = function(field) {
  if (!PDFField.isFormElement(field)) {
    nodeUtil6.p2jwarn("NOT valid form element", field);
    return;
  }
  const oneField = new PDFField(field, this.viewport, this.Fields, this.Boxsets);
  oneField.processField();
};
//static
__publicField(_PDFPageParser, "RenderingStates", {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
  FINISHED: 3
});
var PDFPageParser = _PDFPageParser;
var PDFJSClass = class extends EventEmitter {
  // constructor
  constructor(needRawText) {
    super();
    __publicField(this, "pdfDocument", null);
    __publicField(this, "pages", null);
    __publicField(this, "rawTextContents", null);
    __publicField(this, "needRawText", null);
    this.pdfDocument = null;
    this.pages = [];
    this.rawTextContents = [];
    this.needRawText = needRawText;
  }
  raiseErrorEvent(errMsg) {
    console.error(errMsg);
    process.nextTick(() => this.emit("pdfjs_parseDataError", errMsg));
    return errMsg;
  }
  raiseReadyEvent(data) {
    process.nextTick(() => this.emit("pdfjs_parseDataReady", data));
    return data;
  }
  parsePDFData(arrayBuffer, password) {
    this.pdfDocument = null;
    const parameters = { password, data: arrayBuffer };
    PDFJS.getDocument(parameters).then(
      (pdfDocument) => this.load(pdfDocument, 1),
      (error) => this.raiseErrorEvent(error)
    );
  }
  tryLoadFieldInfoXML(pdfFilePath) {
    const _sufInfo = "_fieldInfo.xml";
    const fieldInfoXMLPath = pdfFilePath.replace(".pdf", _sufInfo);
    if (fieldInfoXMLPath.indexOf(_sufInfo) < 1 || !fs3.existsSync(fieldInfoXMLPath)) {
      return;
    }
    nodeUtil6.p2jinfo("About to load fieldInfo XML : " + fieldInfoXMLPath);
    this.ptiParser = new PTIXmlParser();
    this.ptiParser.parseXml(fieldInfoXMLPath, (err) => {
      if (err) {
        nodeUtil6.p2jwarn("fieldInfo XML Error: " + JSON.stringify(err));
        this.ptiParser = null;
      } else {
        nodeUtil6.p2jinfo("fieldInfo XML loaded.");
      }
    });
  }
  load(pdfDocument, scale) {
    this.pdfDocument = pdfDocument;
    return this.loadMetaData().then(
      () => this.loadPages(),
      (error) => this.raiseErrorEvent("loadMetaData error: " + error)
    );
  }
  loadMetaData() {
    return this.pdfDocument.getMetadata().then(
      (data) => {
        this.documentInfo = data.info;
        this.metadata = data.metadata?.metadata ?? {};
        this.parseMetaData();
      },
      (error) => this.raiseErrorEvent("pdfDocument.getMetadata error: " + error)
    );
  }
  parseMetaData() {
    const meta = { Transcoder: _PARSER_SIG, Meta: { ...this.documentInfo, Metadata: this.metadata } };
    this.raiseReadyEvent(meta);
    this.emit("readable", meta);
  }
  loadPages() {
    const pagesCount = this.pdfDocument.numPages;
    const pagePromises = [];
    for (let i = 1; i <= pagesCount; i++)
      pagePromises.push(this.pdfDocument.getPage(i));
    const pagesPromise = PDFJS.Promise.all(pagePromises);
    nodeUtil6.p2jinfo("PDF loaded. pagesCount = " + pagesCount);
    return pagesPromise.then(
      (promisedPages) => this.parsePage(promisedPages, 0, 1.5),
      (error) => this.raiseErrorEvent("pagesPromise error: " + error)
    );
  }
  parsePage(promisedPages, id, scale) {
    nodeUtil6.p2jinfo("start to parse page:" + (id + 1));
    const pdfPage = promisedPages[id];
    const pageParser = new PDFPageParser(pdfPage, id, scale, this.ptiParser);
    function continueOnNextPage() {
      nodeUtil6.p2jinfo("complete parsing page:" + (id + 1));
      if (id === this.pdfDocument.numPages - 1) {
        this.raiseReadyEvent({ Pages: this.pages });
        process.nextTick(() => this.raiseReadyEvent(null));
        this.emit("data", null);
      } else {
        process.nextTick(() => this.parsePage(promisedPages, ++id, scale));
      }
    }
    pageParser.parsePage(
      (data) => {
        const page = {
          Width: pageParser.width,
          Height: pageParser.height,
          HLines: pageParser.HLines,
          VLines: pageParser.VLines,
          Fills: pageParser.Fills,
          //needs to keep current default output format, text content will output to a separate file if '-c' command line argument is set
          //                Content:pdfPage.getTextContent(),
          Texts: pageParser.Texts,
          Fields: pageParser.Fields,
          Boxsets: pageParser.Boxsets
        };
        this.pages.push(page);
        this.emit("data", page);
        if (this.needRawText) {
          pdfPage.getTextContent().then(
            (textContent) => {
              this.rawTextContents.push(textContent);
              nodeUtil6.p2jinfo("complete parsing raw text content:" + (id + 1));
              continueOnNextPage.call(this);
            },
            (error) => this.raiseErrorEvent("pdfPage.getTextContent error: " + error)
          );
        } else {
          continueOnNextPage.call(this);
        }
      },
      (errMsg) => this.raiseErrorEvent(errMsg)
    );
  }
  getRawTextContent() {
    let retVal = "";
    if (!this.needRawText)
      return retVal;
    this.rawTextContents.forEach((textContent, index) => {
      let prevText = null;
      textContent.bidiTexts.forEach((textObj, idx) => {
        if (prevText) {
          if (Math.abs(textObj.y - prevText.y) <= 9) {
            prevText.str += textObj.str;
          } else {
            retVal += prevText.str + "\r\n";
            prevText = textObj;
          }
        } else {
          prevText = textObj;
        }
      });
      if (prevText) {
        retVal += prevText.str;
      }
      retVal += "\r\n----------------Page (" + index + ") Break----------------\r\n";
    });
    return retVal;
  }
  getAllFieldsTypes() {
    return PDFField.getAllFieldsTypes({ Pages: this.pages || [] });
  }
  getMergedTextBlocksIfNeeded() {
    for (let p2 = 0; p2 < this.pages.length; p2++) {
      let prevText = null;
      let page = this.pages[p2];
      page.Texts.sort(PDFFont.compareBlockPos);
      page.Texts = page.Texts.filter((t, j2) => {
        let isDup = j2 > 0 && PDFFont.areDuplicateBlocks(page.Texts[j2 - 1], t);
        if (isDup) {
          nodeUtil6.p2jinfo("skipped: dup text block: " + decodeURIComponent(t.R[0].T));
        }
        return !isDup;
      });
      for (let i = 0; i < page.Texts.length; i++) {
        let text2 = page.Texts[i];
        if (prevText) {
          if (PDFFont.areAdjacentBlocks(prevText, text2) && PDFFont.haveSameStyle(prevText, text2)) {
            let preT = decodeURIComponent(prevText.R[0].T);
            let curT = decodeURIComponent(text2.R[0].T);
            prevText.R[0].T += text2.R[0].T;
            prevText.w += text2.w;
            text2.merged = true;
            let mergedText = decodeURIComponent(prevText.R[0].T);
            nodeUtil6.p2jinfo(`merged text block: ${preT} + ${curT} => ${mergedText}`);
            prevText = null;
          } else {
            prevText = text2;
          }
        } else {
          prevText = text2;
        }
      }
      page.Texts = page.Texts.filter((t) => !t.merged);
    }
    return { Pages: this.pages };
  }
  destroy() {
    this.removeAllListeners();
    if (this.pdfDocument)
      this.pdfDocument.destroy();
    this.pdfDocument = null;
    this.pages = null;
    this.rawTextContents = null;
  }
};

// node_modules/pdf2json/lib/parserstream.js
import { Transform, Readable } from "stream";
import fs4 from "fs";
var _pdfParser, _chunks, _parsedData, __flush_callback;
var ParserStream = class extends Transform {
  constructor(pdfParser, options2) {
    super(options2);
    __privateAdd(this, _pdfParser, null);
    __privateAdd(this, _chunks, []);
    __privateAdd(this, _parsedData, { Pages: [] });
    __privateAdd(this, __flush_callback, null);
    __privateSet(this, _pdfParser, pdfParser);
    __privateSet(this, _chunks, []);
    __privateGet(this, _pdfParser).on("readable", (meta) => __privateSet(this, _parsedData, { ...meta, Pages: [] }));
    __privateGet(this, _pdfParser).on("data", (page) => {
      if (!page) {
        this.push(__privateGet(this, _parsedData));
        __privateGet(this, __flush_callback).call(this);
      } else
        __privateGet(this, _parsedData).Pages.push(page);
    });
  }
  static createContentStream(jsonObj) {
    const rStream = new Readable({ objectMode: true });
    rStream.push(jsonObj);
    rStream.push(null);
    return rStream;
  }
  static createOutputStream(outputPath, resolve, reject) {
    const outputStream = fs4.createWriteStream(outputPath);
    outputStream.on("finish", () => resolve(outputPath));
    outputStream.on("error", (err) => reject(err));
    return outputStream;
  }
  //implements transform stream
  _transform(chunk, enc, callback) {
    __privateGet(this, _chunks).push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, enc));
    callback();
  }
  _flush(callback) {
    __privateSet(this, __flush_callback, callback);
    __privateGet(this, _pdfParser).parseBuffer(Buffer.concat(__privateGet(this, _chunks)));
  }
  _destroy() {
    super.removeAllListeners();
    __privateSet(this, _pdfParser, null);
    __privateSet(this, _chunks, []);
  }
};
_pdfParser = new WeakMap();
_chunks = new WeakMap();
_parsedData = new WeakMap();
__flush_callback = new WeakMap();

// node_modules/pdf2json/pdfparser.js
var _maxBinBufferCount, _binBuffer, _password, _context, _pdfFilePath, _pdfFileMTime, _data, _PDFJS, _processFieldInfoXML, _onPDFJSParseDataReady, onPDFJSParseDataReady_fn, _onPDFJSParserDataError, onPDFJSParserDataError_fn, _startParsingPDF, startParsingPDF_fn, _processBinaryCache, processBinaryCache_fn;
var _PDFParser = class _PDFParser extends EventEmitter2 {
  //disable additional _fieldInfo.xml parsing and merging (do NOT set to true)
  // constructor
  constructor(context, needRawText, password) {
    super();
    //private methods, needs to invoked by [funcName].call(this, ...)
    __privateAdd(this, _onPDFJSParseDataReady);
    __privateAdd(this, _onPDFJSParserDataError);
    __privateAdd(this, _startParsingPDF);
    __privateAdd(this, _processBinaryCache);
    //private 
    __privateAdd(this, _password, "");
    __privateAdd(this, _context, null);
    // service context object, only used in Web Service project; null in command line
    __privateAdd(this, _pdfFilePath, null);
    //current PDF file to load and parse, null means loading/parsing not started
    __privateAdd(this, _pdfFileMTime, null);
    // last time the current pdf was modified, used to recognize changes and ignore cache
    __privateAdd(this, _data, null);
    //if file read success, data is PDF content; if failed, data is "err" object
    __privateAdd(this, _PDFJS, null);
    //will be initialized in constructor
    __privateAdd(this, _processFieldInfoXML, false);
    __privateSet(this, _context, context);
    __privateSet(this, _pdfFilePath, null);
    __privateSet(this, _pdfFileMTime, null);
    __privateSet(this, _data, null);
    __privateSet(this, _processFieldInfoXML, false);
    __privateSet(this, _PDFJS, new PDFJSClass(needRawText));
    __privateSet(this, _password, password);
  }
  // inherit from event emitter
  //public static
  static get colorDict() {
    return kColors;
  }
  static get fontFaceDict() {
    return kFontFaces;
  }
  static get fontStyleDict() {
    return kFontStyles;
  }
  //public getter
  get data() {
    return __privateGet(this, _data);
  }
  get binBufferKey() {
    return __privateGet(this, _pdfFilePath) + __privateGet(this, _pdfFileMTime);
  }
  //public APIs
  createParserStream() {
    return new ParserStream(this, { objectMode: true, bufferSize: 64 * 1024 });
  }
  async loadPDF(pdfFilePath, verbosity) {
    nodeUtil7.verbosity(verbosity || 0);
    nodeUtil7.p2jinfo("about to load PDF file " + pdfFilePath);
    __privateSet(this, _pdfFilePath, pdfFilePath);
    try {
      __privateSet(this, _pdfFileMTime, fs5.statSync(pdfFilePath).mtimeMs);
      if (__privateGet(this, _processFieldInfoXML)) {
        __privateGet(this, _PDFJS).tryLoadFieldInfoXML(pdfFilePath);
      }
      if (__privateMethod(this, _processBinaryCache, processBinaryCache_fn).call(this))
        return;
      __privateGet(_PDFParser, _binBuffer)[this.binBufferKey] = await readFile(pdfFilePath);
      nodeUtil7.p2jinfo(`Load OK: ${pdfFilePath}`);
      __privateMethod(this, _startParsingPDF, startParsingPDF_fn).call(this);
    } catch (err) {
      nodeUtil7.p2jerror(`Load Failed: ${pdfFilePath} - ${err}`);
      this.emit("pdfParser_dataError", err);
    }
  }
  // Introduce a way to directly process buffers without the need to write it to a temporary file
  parseBuffer(pdfBuffer) {
    __privateMethod(this, _startParsingPDF, startParsingPDF_fn).call(this, pdfBuffer);
  }
  getRawTextContent() {
    return __privateGet(this, _PDFJS).getRawTextContent();
  }
  getRawTextContentStream() {
    return ParserStream.createContentStream(this.getRawTextContent());
  }
  getAllFieldsTypes() {
    return __privateGet(this, _PDFJS).getAllFieldsTypes();
  }
  getAllFieldsTypesStream() {
    return ParserStream.createContentStream(this.getAllFieldsTypes());
  }
  getMergedTextBlocksIfNeeded() {
    return __privateGet(this, _PDFJS).getMergedTextBlocksIfNeeded();
  }
  getMergedTextBlocksStream() {
    return ParserStream.createContentStream(this.getMergedTextBlocksIfNeeded());
  }
  destroy() {
    super.removeAllListeners();
    if (__privateGet(this, _context)) {
      __privateGet(this, _context).destroy();
      __privateSet(this, _context, null);
    }
    __privateSet(this, _pdfFilePath, null);
    __privateSet(this, _pdfFileMTime, null);
    __privateSet(this, _data, null);
    __privateSet(this, _processFieldInfoXML, false);
    __privateGet(this, _PDFJS).destroy();
    __privateSet(this, _PDFJS, null);
  }
};
_maxBinBufferCount = new WeakMap();
_binBuffer = new WeakMap();
_password = new WeakMap();
_context = new WeakMap();
_pdfFilePath = new WeakMap();
_pdfFileMTime = new WeakMap();
_data = new WeakMap();
_PDFJS = new WeakMap();
_processFieldInfoXML = new WeakMap();
_onPDFJSParseDataReady = new WeakSet();
onPDFJSParseDataReady_fn = function(data) {
  if (!data) {
    nodeUtil7.p2jinfo("PDF parsing completed.");
    this.emit("pdfParser_dataReady", __privateGet(this, _data));
  } else {
    __privateSet(this, _data, { ...__privateGet(this, _data), ...data });
  }
};
_onPDFJSParserDataError = new WeakSet();
onPDFJSParserDataError_fn = function(err) {
  __privateSet(this, _data, null);
  this.emit("pdfParser_dataError", { "parserError": err });
};
_startParsingPDF = new WeakSet();
startParsingPDF_fn = function(buffer) {
  __privateSet(this, _data, {});
  __privateGet(this, _PDFJS).on("pdfjs_parseDataReady", (data) => __privateMethod(this, _onPDFJSParseDataReady, onPDFJSParseDataReady_fn).call(this, data));
  __privateGet(this, _PDFJS).on("pdfjs_parseDataError", (err) => __privateMethod(this, _onPDFJSParserDataError, onPDFJSParserDataError_fn).call(this, err));
  __privateGet(this, _PDFJS).on("readable", (meta) => this.emit("readable", meta));
  __privateGet(this, _PDFJS).on("data", (data) => this.emit("data", data));
  __privateGet(this, _PDFJS).on("error", (err) => __privateMethod(this, _onPDFJSParserDataError, onPDFJSParserDataError_fn).call(this, err));
  __privateGet(this, _PDFJS).parsePDFData(buffer || __privateGet(_PDFParser, _binBuffer)[this.binBufferKey], __privateGet(this, _password));
};
_processBinaryCache = new WeakSet();
processBinaryCache_fn = function() {
  if (this.binBufferKey in __privateGet(_PDFParser, _binBuffer)) {
    __privateMethod(this, _startParsingPDF, startParsingPDF_fn).call(this);
    return true;
  }
  const allKeys = Object.keys(__privateGet(_PDFParser, _binBuffer));
  if (allKeys.length > __privateGet(_PDFParser, _maxBinBufferCount)) {
    const idx = this.id % __privateGet(_PDFParser, _maxBinBufferCount);
    const key = allKeys[idx];
    __privateGet(_PDFParser, _binBuffer)[key] = null;
    delete __privateGet(_PDFParser, _binBuffer)[key];
    nodeUtil7.p2jinfo("re-cycled cache for " + key);
  }
  return false;
};
//private static    
__privateAdd(_PDFParser, _maxBinBufferCount, 10);
__privateAdd(_PDFParser, _binBuffer, {});
var PDFParser = _PDFParser;

// utils/hasher.js
var Hasher = class {
  hash(text2) {
    throw new Error("You have to implement the method hash!");
  }
};

// utils/hashersSHA256.js
import { createHash } from "crypto";
var SHA256Hasher = class extends Hasher {
  constructor() {
    super();
  }
  hash(text2) {
    if (typeof text2 === "string") {
      const hasher = createHash("sha256");
      hasher.update(text2);
      return hasher.digest("hex");
    }
    throw new Error("hash() only accepts a string as input");
  }
  hash_list(texts) {
    if (typeof texts === "string") {
      return this.hash(texts);
    }
    if (Array.isArray(texts)) {
      let sum_of_hashes = "";
      for (let i = 0; i < texts.length; i++) {
        const text2 = texts[i];
        sum_of_hashes += this.hash(text2);
      }
      return this.hash(sum_of_hashes);
    }
    throw new Error("hash_list only accepts a string and a list of strings as input");
  }
};

// ../../../../../node_modules/consola/dist/index.mjs
init_consola_36c0034f();
init_core();
init_consola_06ad8a64();
init_utils();

// ../../../../shared/lib/index.js
var import_insane = __toESM(require_insane(), 1);
var anyMap = /* @__PURE__ */ new WeakMap();
var eventsMap = /* @__PURE__ */ new WeakMap();
var producersMap = /* @__PURE__ */ new WeakMap();
var anyProducer = Symbol("anyProducer");
var resolvedPromise = Promise.resolve();
var listenerAdded = Symbol("listenerAdded");
var listenerRemoved = Symbol("listenerRemoved");
var canEmitMetaEvents = false;
var isGlobalDebugEnabled = false;
function assertEventName(eventName) {
  if (typeof eventName !== "string" && typeof eventName !== "symbol" && typeof eventName !== "number") {
    throw new TypeError("`eventName` must be a string, symbol, or number");
  }
}
function assertListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError("listener must be a function");
  }
}
function getListeners(instance, eventName) {
  const events = eventsMap.get(instance);
  if (!events.has(eventName)) {
    return;
  }
  return events.get(eventName);
}
function getEventProducers(instance, eventName) {
  const key = typeof eventName === "string" || typeof eventName === "symbol" || typeof eventName === "number" ? eventName : anyProducer;
  const producers = producersMap.get(instance);
  if (!producers.has(key)) {
    return;
  }
  return producers.get(key);
}
function enqueueProducers(instance, eventName, eventData) {
  const producers = producersMap.get(instance);
  if (producers.has(eventName)) {
    for (const producer of producers.get(eventName)) {
      producer.enqueue(eventData);
    }
  }
  if (producers.has(anyProducer)) {
    const item = Promise.all([eventName, eventData]);
    for (const producer of producers.get(anyProducer)) {
      producer.enqueue(item);
    }
  }
}
function iterator(instance, eventNames) {
  eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
  let isFinished = false;
  let flush = () => {
  };
  let queue2 = [];
  const producer = {
    enqueue(item) {
      queue2.push(item);
      flush();
    },
    finish() {
      isFinished = true;
      flush();
    }
  };
  for (const eventName of eventNames) {
    let set = getEventProducers(instance, eventName);
    if (!set) {
      set = /* @__PURE__ */ new Set();
      const producers = producersMap.get(instance);
      producers.set(eventName, set);
    }
    set.add(producer);
  }
  return {
    async next() {
      if (!queue2) {
        return { done: true };
      }
      if (queue2.length === 0) {
        if (isFinished) {
          queue2 = void 0;
          return this.next();
        }
        await new Promise((resolve) => {
          flush = resolve;
        });
        return this.next();
      }
      return {
        done: false,
        value: await queue2.shift()
      };
    },
    async return(value) {
      queue2 = void 0;
      for (const eventName of eventNames) {
        const set = getEventProducers(instance, eventName);
        if (set) {
          set.delete(producer);
          if (set.size === 0) {
            const producers = producersMap.get(instance);
            producers.delete(eventName);
          }
        }
      }
      flush();
      return arguments.length > 0 ? { done: true, value: await value } : { done: true };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
function defaultMethodNamesOrAssert(methodNames) {
  if (methodNames === void 0) {
    return allEmitteryMethods;
  }
  if (!Array.isArray(methodNames)) {
    throw new TypeError("`methodNames` must be an array of strings");
  }
  for (const methodName of methodNames) {
    if (!allEmitteryMethods.includes(methodName)) {
      if (typeof methodName !== "string") {
        throw new TypeError("`methodNames` element must be a string");
      }
      throw new Error(`${methodName} is not Emittery method`);
    }
  }
  return methodNames;
}
var isMetaEvent = (eventName) => eventName === listenerAdded || eventName === listenerRemoved;
function emitMetaEvent(emitter, eventName, eventData) {
  if (isMetaEvent(eventName)) {
    try {
      canEmitMetaEvents = true;
      emitter.emit(eventName, eventData);
    } finally {
      canEmitMetaEvents = false;
    }
  }
}
var Emittery = class _Emittery {
  static mixin(emitteryPropertyName, methodNames) {
    methodNames = defaultMethodNamesOrAssert(methodNames);
    return (target) => {
      if (typeof target !== "function") {
        throw new TypeError("`target` must be function");
      }
      for (const methodName of methodNames) {
        if (target.prototype[methodName] !== void 0) {
          throw new Error(`The property \`${methodName}\` already exists on \`target\``);
        }
      }
      function getEmitteryProperty() {
        Object.defineProperty(this, emitteryPropertyName, {
          enumerable: false,
          value: new _Emittery()
        });
        return this[emitteryPropertyName];
      }
      Object.defineProperty(target.prototype, emitteryPropertyName, {
        enumerable: false,
        get: getEmitteryProperty
      });
      const emitteryMethodCaller = (methodName) => function(...args) {
        return this[emitteryPropertyName][methodName](...args);
      };
      for (const methodName of methodNames) {
        Object.defineProperty(target.prototype, methodName, {
          enumerable: false,
          value: emitteryMethodCaller(methodName)
        });
      }
      return target;
    };
  }
  static get isDebugEnabled() {
    if (typeof globalThis.process?.env !== "object") {
      return isGlobalDebugEnabled;
    }
    const { env: env22 } = globalThis.process ?? { env: {} };
    return env22.DEBUG === "emittery" || env22.DEBUG === "*" || isGlobalDebugEnabled;
  }
  static set isDebugEnabled(newValue) {
    isGlobalDebugEnabled = newValue;
  }
  constructor(options2 = {}) {
    anyMap.set(this, /* @__PURE__ */ new Set());
    eventsMap.set(this, /* @__PURE__ */ new Map());
    producersMap.set(this, /* @__PURE__ */ new Map());
    producersMap.get(this).set(anyProducer, /* @__PURE__ */ new Set());
    this.debug = options2.debug ?? {};
    if (this.debug.enabled === void 0) {
      this.debug.enabled = false;
    }
    if (!this.debug.logger) {
      this.debug.logger = (type, debugName, eventName, eventData) => {
        try {
          eventData = JSON.stringify(eventData);
        } catch {
          eventData = `Object with the following keys failed to stringify: ${Object.keys(eventData).join(",")}`;
        }
        if (typeof eventName === "symbol" || typeof eventName === "number") {
          eventName = eventName.toString();
        }
        const currentTime = /* @__PURE__ */ new Date();
        const logTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}.${currentTime.getMilliseconds()}`;
        console.log(`[${logTime}][emittery:${type}][${debugName}] Event Name: ${eventName}
	data: ${eventData}`);
      };
    }
  }
  logIfDebugEnabled(type, eventName, eventData) {
    if (_Emittery.isDebugEnabled || this.debug.enabled) {
      this.debug.logger(type, this.debug.name, eventName, eventData);
    }
  }
  on(eventNames, listener) {
    assertListener(listener);
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    for (const eventName of eventNames) {
      assertEventName(eventName);
      let set = getListeners(this, eventName);
      if (!set) {
        set = /* @__PURE__ */ new Set();
        const events = eventsMap.get(this);
        events.set(eventName, set);
      }
      set.add(listener);
      this.logIfDebugEnabled("subscribe", eventName, void 0);
      if (!isMetaEvent(eventName)) {
        emitMetaEvent(this, listenerAdded, { eventName, listener });
      }
    }
    return this.off.bind(this, eventNames, listener);
  }
  off(eventNames, listener) {
    assertListener(listener);
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    for (const eventName of eventNames) {
      assertEventName(eventName);
      const set = getListeners(this, eventName);
      if (set) {
        set.delete(listener);
        if (set.size === 0) {
          const events = eventsMap.get(this);
          events.delete(eventName);
        }
      }
      this.logIfDebugEnabled("unsubscribe", eventName, void 0);
      if (!isMetaEvent(eventName)) {
        emitMetaEvent(this, listenerRemoved, { eventName, listener });
      }
    }
  }
  once(eventNames) {
    let off_;
    const promise = new Promise((resolve) => {
      off_ = this.on(eventNames, (data) => {
        off_();
        resolve(data);
      });
    });
    promise.off = off_;
    return promise;
  }
  events(eventNames) {
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    for (const eventName of eventNames) {
      assertEventName(eventName);
    }
    return iterator(this, eventNames);
  }
  async emit(eventName, eventData) {
    assertEventName(eventName);
    if (isMetaEvent(eventName) && !canEmitMetaEvents) {
      throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
    }
    this.logIfDebugEnabled("emit", eventName, eventData);
    enqueueProducers(this, eventName, eventData);
    const listeners = getListeners(this, eventName) ?? /* @__PURE__ */ new Set();
    const anyListeners = anyMap.get(this);
    const staticListeners = [...listeners];
    const staticAnyListeners = isMetaEvent(eventName) ? [] : [...anyListeners];
    await resolvedPromise;
    await Promise.all([
      ...staticListeners.map(async (listener) => {
        if (listeners.has(listener)) {
          return listener(eventData);
        }
      }),
      ...staticAnyListeners.map(async (listener) => {
        if (anyListeners.has(listener)) {
          return listener(eventName, eventData);
        }
      })
    ]);
  }
  async emitSerial(eventName, eventData) {
    assertEventName(eventName);
    if (isMetaEvent(eventName) && !canEmitMetaEvents) {
      throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
    }
    this.logIfDebugEnabled("emitSerial", eventName, eventData);
    const listeners = getListeners(this, eventName) ?? /* @__PURE__ */ new Set();
    const anyListeners = anyMap.get(this);
    const staticListeners = [...listeners];
    const staticAnyListeners = [...anyListeners];
    await resolvedPromise;
    for (const listener of staticListeners) {
      if (listeners.has(listener)) {
        await listener(eventData);
      }
    }
    for (const listener of staticAnyListeners) {
      if (anyListeners.has(listener)) {
        await listener(eventName, eventData);
      }
    }
  }
  onAny(listener) {
    assertListener(listener);
    this.logIfDebugEnabled("subscribeAny", void 0, void 0);
    anyMap.get(this).add(listener);
    emitMetaEvent(this, listenerAdded, { listener });
    return this.offAny.bind(this, listener);
  }
  anyEvent() {
    return iterator(this);
  }
  offAny(listener) {
    assertListener(listener);
    this.logIfDebugEnabled("unsubscribeAny", void 0, void 0);
    emitMetaEvent(this, listenerRemoved, { listener });
    anyMap.get(this).delete(listener);
  }
  clearListeners(eventNames) {
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    for (const eventName of eventNames) {
      this.logIfDebugEnabled("clear", eventName, void 0);
      if (typeof eventName === "string" || typeof eventName === "symbol" || typeof eventName === "number") {
        const set = getListeners(this, eventName);
        if (set) {
          set.clear();
        }
        const producers = getEventProducers(this, eventName);
        if (producers) {
          for (const producer of producers) {
            producer.finish();
          }
          producers.clear();
        }
      } else {
        anyMap.get(this).clear();
        for (const [eventName2, listeners] of eventsMap.get(this).entries()) {
          listeners.clear();
          eventsMap.get(this).delete(eventName2);
        }
        for (const [eventName2, producers] of producersMap.get(this).entries()) {
          for (const producer of producers) {
            producer.finish();
          }
          producers.clear();
          producersMap.get(this).delete(eventName2);
        }
      }
    }
  }
  listenerCount(eventNames) {
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    let count = 0;
    for (const eventName of eventNames) {
      if (typeof eventName === "string") {
        count += anyMap.get(this).size + (getListeners(this, eventName)?.size ?? 0) + (getEventProducers(this, eventName)?.size ?? 0) + (getEventProducers(this)?.size ?? 0);
        continue;
      }
      if (typeof eventName !== "undefined") {
        assertEventName(eventName);
      }
      count += anyMap.get(this).size;
      for (const value of eventsMap.get(this).values()) {
        count += value.size;
      }
      for (const value of producersMap.get(this).values()) {
        count += value.size;
      }
    }
    return count;
  }
  bindMethods(target, methodNames) {
    if (typeof target !== "object" || target === null) {
      throw new TypeError("`target` must be an object");
    }
    methodNames = defaultMethodNamesOrAssert(methodNames);
    for (const methodName of methodNames) {
      if (target[methodName] !== void 0) {
        throw new Error(`The property \`${methodName}\` already exists on \`target\``);
      }
      Object.defineProperty(target, methodName, {
        enumerable: false,
        value: this[methodName].bind(this)
      });
    }
  }
};
var allEmitteryMethods = Object.getOwnPropertyNames(Emittery.prototype).filter((v2) => v2 !== "constructor");
Object.defineProperty(Emittery, "listenerAdded", {
  value: listenerAdded,
  writable: false,
  enumerable: true,
  configurable: false
});
Object.defineProperty(Emittery, "listenerRemoved", {
  value: listenerRemoved,
  writable: false,
  enumerable: true,
  configurable: false
});
var DEFAULT_LOG_LEVEL = 2;
var OmniLogLevels = ((OmniLogLevels2) => {
  OmniLogLevels2[OmniLogLevels2["silent"] = Number.NEGATIVE_INFINITY] = "silent";
  OmniLogLevels2[OmniLogLevels2["fatal"] = 0] = "fatal";
  OmniLogLevels2[OmniLogLevels2["warning"] = 1] = "warning";
  OmniLogLevels2[OmniLogLevels2["normal"] = 2] = "normal";
  OmniLogLevels2[OmniLogLevels2["info"] = 3] = "info";
  OmniLogLevels2[OmniLogLevels2["debug"] = 4] = "debug";
  OmniLogLevels2[OmniLogLevels2["trace"] = 5] = "trace";
  OmniLogLevels2[OmniLogLevels2["verbose"] = Number.POSITIVE_INFINITY] = "verbose";
  return OmniLogLevels2;
})(OmniLogLevels || {});
var _OmniLog = class _OmniLog2 {
  constructor() {
    this._status_priority = consola.create({ level: OmniLogLevels.verbose });
    this._void = (_msg) => {
    };
    this.__log = (msg) => consola.log(msg);
    this._log = DEFAULT_LOG_LEVEL >= 3 ? this.__log : this._void;
    if (_OmniLog2._instance !== void 0) {
      throw new Error("Log instance duplicate error");
    }
    consola.level = DEFAULT_LOG_LEVEL;
    _OmniLog2._instance = this;
  }
  get level() {
    return consola.level;
  }
  set level(value) {
    this._status_priority.level = value < 0 ? value : OmniLogLevels.verbose;
    this._log = value >= 3 ? this.__log : this._void;
    consola.level = value;
  }
  get warn() {
    return consola.warn;
  }
  get error() {
    return consola.error;
  }
  get info() {
    return consola.info;
  }
  get debug() {
    return consola.debug;
  }
  get verbose() {
    return consola.verbose;
  }
  get ready() {
    return consola.ready;
  }
  get success() {
    return consola.success;
  }
  get trace() {
    return consola.trace;
  }
  get log() {
    return this._log;
  }
  status_start(msg) {
    this._status_priority.start(msg);
  }
  status_success(msg) {
    this._status_priority.success(msg);
  }
  status_fail(msg) {
    this._status_priority.fail(msg);
  }
  createWithTag(id) {
    return consola.withTag(id);
  }
  wrapConsoleLogger() {
    consola.wrapConsole();
  }
  restoreConsoleLogger() {
    consola.restoreConsole();
  }
};
_OmniLog._instance = new _OmniLog();
var OmniLog = _OmniLog;
var omnilog = OmniLog._instance;
var Manager = class {
  constructor(app) {
    this.app = app;
    this.children = /* @__PURE__ */ new Map();
    const logInstance = omnilog.createWithTag("Services");
    this.info = logInstance.info;
    this.success = logInstance.success;
    this.debug = logInstance.debug;
    this.verbose = logInstance.verbose;
    this.warn = logInstance.warn;
    this.error = logInstance.error;
  }
  register(Ctor, config, wrapper) {
    throw new Error("Manager register method not implemented");
  }
  async load() {
    const success = true;
    for (const [id, child] of this.children) {
      this.verbose(`${id} load`);
      await child.load?.();
    }
    return success;
  }
  async start() {
    for (const [id, child] of this.children) {
      omnilog.log(`child ${id} start`);
      try {
        await child.start?.();
      } catch (e) {
        omnilog.warn(`child ${id} failed to start with error: ${e}`);
      }
    }
    omnilog.log("All children started");
    return true;
  }
  async stop() {
    this.debug("stopping children...");
    for (const child of Array.from(this.children.values()).reverse()) {
      this.verbose(`${child.id} stop`);
      await child.stop?.();
    }
    this.success("children stopped");
    return true;
  }
  get(id) {
    return this.children.get(id);
  }
  has(id) {
    return this.children.has(id);
  }
};
var IntegrationsManager = class extends Manager {
  constructor(app) {
    super(app);
    Object.defineProperty(this, "integrations", { get: () => this.children });
    this._integrations = [];
  }
  // Unlike services, we want to delay the creation until all the services have loaded, so we
  // just store an array here which we process for the actual registration step in load()
  register(Ctor, config) {
    this.verbose(`pre-registering ${config.id} integration`);
    this._integrations.push([Ctor, config]);
  }
  async load() {
    for (const [Ctor, config] of this._integrations) {
      this.verbose(`registering integration ${config.id}...`);
      const integration = new Ctor(config.id, this, config);
      this.children.set(config.id, integration);
      integration.create?.();
    }
    this.debug("loading integrations...");
    const result = await super.load();
    this.success("integrations loaded");
    return result;
  }
  async start() {
    this.debug("starting integrations...");
    await super.start();
    this.success("integrations started");
    return true;
  }
};
var ServiceManager = class extends Manager {
  constructor(app) {
    super(app);
    Object.defineProperty(this, "services", { get: () => this.children });
  }
  register(Ctor, config, wrapper) {
    this.debug(`registering ${config.id} service`);
    let service = new Ctor(config.id, this, config);
    if (wrapper && typeof wrapper === "function") {
      service = wrapper(service);
    }
    this.children.set(config.id, service);
    service.create?.();
    return service;
  }
  async load() {
    this.debug("loading services...");
    const success = await super.load();
    if (!success) {
      this.error("failed to load services");
      return false;
    }
    this.success("services loaded");
    return true;
  }
  async start() {
    this.debug("starting services...");
    await super.start();
    this.success("services started");
    return true;
  }
};
var VOID = -1;
var PRIMITIVE = 0;
var ARRAY = 1;
var OBJECT = 2;
var DATE = 3;
var REGEXP = 4;
var MAP = 5;
var SET = 6;
var ERROR = 7;
var BIGINT = 8;
var env2 = typeof self === "object" ? self : globalThis;
var deserializer = ($2, _2) => {
  const as = (out, index) => {
    $2.set(index, out);
    return out;
  };
  const unpair = (index) => {
    if ($2.has(index))
      return $2.get(index);
    const [type, value] = _2[index];
    switch (type) {
      case PRIMITIVE:
      case VOID:
        return as(value, index);
      case ARRAY: {
        const arr = as([], index);
        for (const index2 of value)
          arr.push(unpair(index2));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index);
        for (const [key, index2] of value)
          object[unpair(key)] = unpair(index2);
        return object;
      }
      case DATE:
        return as(new Date(value), index);
      case REGEXP: {
        const { source, flags } = value;
        return as(new RegExp(source, flags), index);
      }
      case MAP: {
        const map = as(/* @__PURE__ */ new Map(), index);
        for (const [key, index2] of value)
          map.set(unpair(key), unpair(index2));
        return map;
      }
      case SET: {
        const set = as(/* @__PURE__ */ new Set(), index);
        for (const index2 of value)
          set.add(unpair(index2));
        return set;
      }
      case ERROR: {
        const { name, message } = value;
        return as(new env2[name](message), index);
      }
      case BIGINT:
        return as(BigInt(value), index);
      case "BigInt":
        return as(Object(BigInt(value)), index);
    }
    return as(new env2[type](value), index);
  };
  return unpair;
};
var deserialize = (serialized) => deserializer(/* @__PURE__ */ new Map(), serialized)(0);
var EMPTY = "";
var { toString } = {};
var { keys } = Object;
var typeOf = (value) => {
  const type = typeof value;
  if (type !== "object" || !value)
    return [PRIMITIVE, type];
  const asString = toString.call(value).slice(8, -1);
  switch (asString) {
    case "Array":
      return [ARRAY, EMPTY];
    case "Object":
      return [OBJECT, EMPTY];
    case "Date":
      return [DATE, EMPTY];
    case "RegExp":
      return [REGEXP, EMPTY];
    case "Map":
      return [MAP, EMPTY];
    case "Set":
      return [SET, EMPTY];
  }
  if (asString.includes("Array"))
    return [ARRAY, asString];
  if (asString.includes("Error"))
    return [ERROR, asString];
  return [OBJECT, asString];
};
var shouldSkip = ([TYPE, type]) => TYPE === PRIMITIVE && (type === "function" || type === "symbol");
var serializer = (strict, json, $2, _2) => {
  const as = (out, value) => {
    const index = _2.push(out) - 1;
    $2.set(value, index);
    return index;
  };
  const pair = (value) => {
    if ($2.has(value))
      return $2.get(value);
    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case "bigint":
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case "function":
          case "symbol":
            if (strict)
              throw new TypeError("unable to serialize " + type);
            entry = null;
            break;
          case "undefined":
            return as([VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type)
          return as([type, [...value]], value);
        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case "BigInt":
              return as([type, value.toString()], value);
            case "Boolean":
            case "Number":
            case "String":
              return as([type, value.valueOf()], value);
          }
        }
        if (json && "toJSON" in value)
          return pair(value.toJSON());
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const { source, flags } = value;
        return as([TYPE, { source, flags }], value);
      }
      case MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index;
      }
    }
    const { message } = value;
    return as([TYPE, { name: type, message }], value);
  };
  return pair;
};
var serialize = (value, { json, lossy } = {}) => {
  const _2 = [];
  return serializer(!(json || lossy), !!json, /* @__PURE__ */ new Map(), _2)(value), _2;
};
var { parse: $parse, stringify: $stringify } = JSON;
var options = { json: true, lossy: true };
var parse = (str) => deserialize($parse(str));
var stringify = (any) => $stringify(serialize(any, options));
var STATE = /* @__PURE__ */ ((STATE2) => {
  STATE2[STATE2["CREATED"] = 0] = "CREATED";
  STATE2[STATE2["CONFIGURED"] = 1] = "CONFIGURED";
  STATE2[STATE2["LOADED"] = 2] = "LOADED";
  STATE2[STATE2["STARTED"] = 3] = "STARTED";
  STATE2[STATE2["STOPPED"] = 4] = "STOPPED";
  return STATE2;
})(STATE || {});
var App = class {
  constructor(id, config, opts) {
    this.state = 0;
    this.id = id;
    opts ?? (opts = {
      integrationsManagerType: IntegrationsManager
    });
    this.config = config;
    this.logger = omnilog;
    this.services = new ServiceManager(this);
    this.integrations = new (opts.integrationsManagerType || IntegrationsManager)(this);
    const loginstance = this.logger.createWithTag(id);
    this.info = loginstance.info;
    this.success = loginstance.success;
    this.debug = loginstance.debug;
    this.error = loginstance.error;
    this.verbose = loginstance.verbose;
    this.warn = loginstance.warn;
    this.events = new Emittery(
      omnilog.level >= 4 ? { debug: { name: "app.events", enabled: true } } : void 0
    );
  }
  // registers a service or integration
  use(middleware, config, middlewareType, wrapper) {
    this.verbose("[APP.USE] use", middleware.name);
    if (middlewareType === "service" || middleware.name.endsWith("Service")) {
      const service = middleware;
      this.services.register(service, config, wrapper);
    } else if (middlewareType === "integration" || middleware.name.endsWith("Integration")) {
      const integration = middleware;
      this.integrations.register(integration, config);
    } else {
      this.warn(`[APP.USE] Unknown middleware type ${middleware.name}`);
    }
    return this;
  }
  // ----- messaging
  async emit(event, data) {
    this.debug("[APP.EMIT Global] emit", event);
    await this.events.emit(event, data);
  }
  // ----- app state control
  async load() {
    if (this.state >= 2) {
      omnilog.warn("Cannot load more than once, ignoring call");
      return true;
    }
    const owner = this;
    if (owner.onConfigure != null) {
      await owner.onConfigure();
    }
    this.state = 1;
    if (!await this.services.load()) {
      throw new Error("Failed to load services, see console for details");
    }
    await this.integrations.load();
    if (owner.onLoad != null) {
      await owner.onLoad();
    }
    await this.emit("loaded", {});
    this.success("app loaded");
    this.state = 2;
    return true;
  }
  async start() {
    if (this.state === 3) {
      omnilog.warn("Cannot start more than once, ignoring call");
      return true;
    }
    const owner = this;
    await this.services.start();
    await this.integrations.start();
    if (owner.onStart != null) {
      await owner.onStart();
    }
    this.success("app started");
    this.state = 3;
    await this.emit("started", {});
    return true;
  }
  async stop() {
    this.info("app stopping");
    await this.integrations.stop();
    await this.services.stop();
    await this.emit("stopped", {});
    this.success("app stopped");
    this.state = 4;
    return true;
  }
  subscribeToGlobalEvent(event, handler) {
    this.info(`[APP.SUB Global] ${this.id} subscribed to GlobalEvent ${event}`);
    this.events.on(event, handler);
  }
  subscribeToServiceEvent(serviceOrId, event, handler) {
    const id = serviceOrId.id ?? serviceOrId;
    if (!this.services.has(id)) {
      this.warn(`[SERVICE.SUB Service] ${this.id} subscribed to unknown service '${id}'. This can be ok in some cases, but usually indicates a bug.`);
    }
    this.info(`[SERVICE.SUB App] ${this.id} subscribed to service event '${event}' on ${id}`);
    this.events.on(`${id}.${event}`, handler);
  }
  stringify(obj) {
    return stringify(obj, null, 2);
  }
  parse(str) {
    return parse(str);
  }
};
App.STATES = STATE;
var BaseWorkflow = class _BaseWorkflow {
  constructor(id, version, meta) {
    this.id = id;
    this.version = version;
    this.setMeta(meta || null);
    this.setRete(null);
    this.setAPI(null);
    this.langchain = null;
  }
  setMeta(meta) {
    var _a, _b;
    this.meta = meta ?? { name: "New Workflow", description: "No description.", pictureUrl: "omni.png" };
    this.meta.updated = Date.now();
    (_a = this.meta).created ?? (_a.created = Date.now());
    (_b = this.meta).tags ?? (_b.tags = []);
    this.meta.updated = Date.now();
    this.meta.name = (0, import_insane.default)(this.meta.name, { allowedTags: [], allowedAttributes: {} });
    this.meta.description = (0, import_insane.default)(this.meta.description, { allowedTags: [], allowedAttributes: {} });
    return this;
  }
  setRete(rete) {
    this.rete = rete;
    this.meta.updated = Date.now();
    return this;
  }
  setAPI(api) {
    this.api = api ?? { fields: {} };
    this.meta.updated = Date.now();
    return this;
  }
  toJSON() {
    return {
      id: this.id,
      version: this.version,
      meta: this.meta,
      rete: this.rete,
      api: this.api,
      langchain: this.langchain
    };
  }
  static fromJSON(json) {
    const result = new _BaseWorkflow(json.id, json.version);
    result.langchain = json.langchain;
    result.setMeta(json.meta);
    result.setRete(json.rete);
    result.setAPI(json.api);
    return result;
  }
};
var _Workflow = class _Workflow2 extends BaseWorkflow {
  // Either 'public', organisation IDs, group IDs, or user IDs
  constructor(id, version, data, meta) {
    super(id, version, meta);
    this._id = version == "draft" ? `wf:${id}` : `wf:${id}:${version}`;
    this.owner = data.owner;
    this.org = data.org;
    this.publishedTo = [];
  }
  toJSON() {
    return { ...super.toJSON(), _id: this._id, _rev: this._rev, owner: this.owner, org: this.org, publishedTo: this.publishedTo };
  }
  static fromJSON(json) {
    let id = json._id?.replace("wf:", "") || json.id;
    if (json.id && json.id.length > 16 && id.startsWith(json.id)) {
      id = json.id;
    }
    const result = new _Workflow2(id, json.version ?? "draft", { owner: json.owner || json.meta.owner, org: json.org });
    result.langchain = json.langchain;
    result.publishedTo = json.publishedTo;
    result.setMeta(json.meta);
    result.setRete(json.rete);
    result.setAPI(json.api);
    if (json._rev) {
      result._rev = json._rev;
    }
    return result;
  }
};
_Workflow.modelName = "Workflow";
var DBObject = class {
  constructor(id) {
    this._rev = void 0;
    this.id = id;
    this._id = `${Object.getPrototypeOf(this).constructor.name}:${this.id}`;
    this.createdAt = Date.now();
    this.lastUpdated = Date.now();
  }
  processAPIResponse(response) {
    if (response.ok) {
      this._id = response.id;
      this._rev = response.rev;
    }
  }
};
var Group = class extends DBObject {
  constructor(id, name) {
    super(id);
    this.name = name;
    this.credit = 0;
    this.organisation = null;
    this.members = [];
    this.permission = [];
  }
};
Group.modelName = "Group";
var Organisation = class extends DBObject {
  constructor(id, name) {
    super(id);
    this.name = name;
    this.members = [];
    this.groups = [];
  }
};
Organisation.modelName = "Organisation";
var _User = class _User2 extends DBObject {
  constructor(id, username) {
    super(id);
    this._id = `user:${this.id}`;
    this.email = null;
    this.username = username;
    this.status = "active";
    this.credit = 0;
    this.organisation = null;
    this.tier = null;
    this.password = null;
    this.salt = null;
    this.token = null;
    this.tags = [];
  }
  isAdmin() {
    return this.tags.some((tag) => tag === "admin");
  }
  static fromJSON(json) {
    const result = new _User2(json.id, json.username);
    result._id = json._id;
    result._rev = json._rev;
    result.id = json.id;
    result.createdAt = json.createdAt;
    result.lastUpdated = json.lastUpdated;
    result.email = json.email;
    result.username = json.username;
    result.status = json.status;
    result.externalId = json.externalId;
    result.authType = json.authType;
    result.credit = json.credit;
    result.organisation = json.organisation;
    result.tier = json.tier;
    result.password = json.password;
    result.salt = json.salt;
    result.token = json.token;
    result.tags = json.tags;
    return result;
  }
};
_User.modelName = "User";
var Tier = class extends DBObject {
  constructor(id, name) {
    super(id);
    this.name = name;
    this.limits = [];
  }
};
Tier.modelName = "Tier";
var APIKey = class extends DBObject {
  // _id of the owner
  constructor(id) {
    super(id);
    this.meta = {
      name: "",
      description: "",
      owner: {
        id: "",
        type: "",
        name: ""
      },
      revoked: false
    };
    this.key = "";
    this.vaultType = "local";
    this.owner = "";
    this.apiNamespace = "";
    this.variableName = "";
  }
};
APIKey.modelName = "APIKey";
var rnds8 = new Uint8Array(16);
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);

// utils/utils.js
var VERBOSE = true;
function is_valid(value) {
  if (value === null || value === void 0) {
    return false;
  }
  if (Array.isArray(value) && value.length === 0) {
    return false;
  }
  if (typeof value === "object" && Object.keys(value).length === 0) {
    return false;
  }
  if (typeof value === "string" && value.trim() === "") {
    return false;
  }
  return true;
}
function clean_string(original) {
  if (is_valid(original) == false) {
    return "";
  }
  let text2 = sanitizeString(original);
  text2 = text2.replace(/\n+/g, " ");
  text2 = text2.replace(/ +/g, " ");
  return text2;
}
function sanitizeString(original, use_escape_character = false) {
  return use_escape_character ? original.replace(/'/g, "\\'").replace(/"/g, '\\"') : original.replace(/'/g, "\u2018").replace(/"/g, "\u201C");
}
function console_log(...args) {
  if (VERBOSE == true) {
    omnilog.log(...args);
  }
}
function rebuildToTicketObjectsIfNeeded(data) {
  const documents = [];
  if (Array.isArray(data) && data.every((item) => typeof item === "object" && item !== null && item.ticket)) {
    return data;
  }
  if (Array.isArray(data) && data.every((item) => typeof item === "string")) {
    for (let i = 0; i < data.length; i++) {
      const url = data[i];
      const fidRegex = /\/fid\/(.+)/;
      const match = url.match(fidRegex);
      if (match) {
        const baseurl = url.substring(0, match.index);
        const fid = match[1];
        const filename = `${fid}.txt`;
        const rebuilt_cdn = {
          ticket: {
            fid,
            count: 1,
            url: baseurl,
            publicUrl: baseurl
          },
          fileName: filename,
          size: 0,
          url,
          furl: `fid://${filename}`,
          mimeType: "text/plain; charset=utf-8",
          expires: 0,
          meta: {
            created: 0
          }
        };
        documents.push(rebuilt_cdn);
        console_log(`rebuild url = ${url} into rebuilt_cdn = ${JSON.stringify(rebuilt_cdn)}`);
      }
    }
  }
  return documents;
}
function parse_text_to_array(candidate_text) {
  var texts = [];
  if (is_valid(candidate_text) == false)
    return texts;
  try {
    const parsedArray = JSON.parse(candidate_text);
    if (Array.isArray(parsedArray) && parsedArray.every((elem) => typeof elem === "string")) {
      texts = parsedArray;
    }
  } catch (error) {
    texts = [candidate_text];
  }
  console_log(`parse_text_to_array: texts = ${JSON.stringify(texts)}`);
  if (texts.length == 0)
    return null;
  if (texts.length == 1 && texts[0] == "")
    return [];
  return texts;
}

// utils/hashers.js
var HASHER_MODEL_SHA256 = "SHA256";
var DEFAULT_HASHER_MODEL = HASHER_MODEL_SHA256;
function initialize_hasher(hasher_model = DEFAULT_HASHER_MODEL) {
  let hasher = null;
  if (hasher_model == HASHER_MODEL_SHA256)
    hasher = new SHA256Hasher();
  else {
    throw new Error(`initialize_hasher: Unknown hasher model: ${hasher_model}`);
  }
  try {
    const validate_text = "this and that";
    const validate_hash1 = hasher.hash(validate_text);
    const validate_hash2 = hasher.hash(validate_text);
    if (validate_hash1 != validate_hash2)
      throw new Error(`hasher: ${hasher_model} is not stable`);
  } catch (e) {
    throw new Error(`get_hasher: Failed to initialize hasher_model ${hasher_model} with error: ${e}`);
  }
  return hasher;
}

// utils/database.js
var OMNITOOL_DOCUMENT_TYPES_USERDOC = "udoc";
function get_effective_key(ctx, key) {
  return `${ctx.userId}:${key}`;
}
function get_db(ctx) {
  const db = ctx.app.services.get("db");
  return db;
}
async function user_db_delete(ctx, key, rev = void 0) {
  const db = get_db(ctx);
  const effectiveKey = get_effective_key(ctx, key);
  console_log(`DELETING key: ${effectiveKey}`);
  let effective_rev = rev;
  if (effective_rev == void 0) {
    try {
      const get_result = await db.getDocumentById(OMNITOOL_DOCUMENT_TYPES_USERDOC, effectiveKey);
      effective_rev = get_result._rev;
      console_log(`fixing rev SUCCEEDED - deleteted rev ${effective_rev}`);
      try {
        await db.deleteDocumentById(OMNITOOL_DOCUMENT_TYPES_USERDOC, effectiveKey, effective_rev);
      } catch (e) {
        console.warn(`deleting ${key} = ${effectiveKey} failed with error: ${e}`);
      }
      return true;
    } catch (e) {
      console_log(`deleting: fixing rev failed`);
    }
  }
}
async function user_db_put(ctx, value, key, rev = void 0) {
  const db = get_db(ctx);
  const effectiveKey = get_effective_key(ctx, key);
  console_log(`put: ${key} = ${effectiveKey} with rev ${rev}`);
  let effective_rev = rev;
  if (effective_rev == void 0) {
    try {
      const get_result = await db.getDocumentById(OMNITOOL_DOCUMENT_TYPES_USERDOC, effectiveKey);
      effective_rev = get_result._rev;
      console_log(`fixing rev SUCCEEDED - deleteted rev ${effective_rev}`);
    } catch (e) {
      console_log(`fixing rev failed`);
    }
  }
  try {
    let json = await db.putDocumentById(OMNITOOL_DOCUMENT_TYPES_USERDOC, effectiveKey, { value }, effective_rev);
    if (json == null) {
      console_log(`put: ${key} = ${effectiveKey} failed`);
      return false;
    } else {
      console_log(`put: ${key} = ${effectiveKey} succeeded`);
    }
  } catch (e) {
    throw new Error(`put: ${key} = ${effectiveKey} failed with error: ${e}`);
  }
  return true;
}
async function user_db_get(ctx, key) {
  const effectiveKey = get_effective_key(ctx, key);
  const db = get_db(ctx);
  let json = null;
  try {
    json = await db.getDocumentById(OMNITOOL_DOCUMENT_TYPES_USERDOC, effectiveKey);
  } catch (e) {
    console_log(`usr_db_get: ${key} = ${effectiveKey} failed with error: ${e}`);
  }
  if (json == null)
    return null;
  const json_value = json.value;
  if (json_value == null) {
    console_log(`usr_db_get NULL VALUE. DELETING IT: ${key} = ${effectiveKey} json = ${JSON.stringify(json)}`);
    await db.deleteDocumentById(OMNITOOL_DOCUMENT_TYPES_USERDOC, effectiveKey, json._rev);
    return null;
  }
  return json_value;
}

// utils/cdn.js
async function save_text_to_cdn(ctx, text2) {
  const buffer = Buffer.from(text2);
  const cdn_response = await ctx.app.cdn.putTemp(buffer, { mimeType: "text/plain; charset=utf-8", userId: ctx.userId });
  console_log(`cdn_response = ${JSON.stringify(cdn_response)}`);
  return cdn_response;
}

// pdf_processing.js
async function parsePDFData(buffer) {
  const pdfParser = new PDFParser();
  const onDataReady = () => new Promise((resolve) => {
    pdfParser.on("pdfParser_dataReady", (pdfData2) => {
      resolve(pdfData2);
    });
  });
  pdfParser.on("pdfParser_dataError", (errData) => {
    throw new Error(`pdfParser_dataError : ${errData}`);
  });
  pdfParser.parseBuffer(buffer);
  const pdfData = await onDataReady();
  return pdfData;
}
async function parsePDF(buffer) {
  try {
    const pdfData = await parsePDFData(buffer);
    return pdfData;
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw error;
  }
}
function extractTextFields(jsonData) {
  if (is_valid(jsonData) == false)
    throw new Error(`extractTextFields: jsonData = ${JSON.stringify(jsonData)} is invalid`);
  const pages = jsonData.Pages;
  if (is_valid(pages) == false)
    throw new Error(`extractTextFields: pages = ${JSON.stringify(pages)} is invalid`);
  const concatenatedTexts = pages.map((page) => {
    const texts = page.Texts.map((textObj) => decodeURIComponent(textObj.R[0].T));
    return texts.join(" ");
  });
  return concatenatedTexts;
}

// PdfToDocComponent.js
var NS_ONMI = "document_processing";
var load_pdf_component = OAIBaseComponent.create(NS_ONMI, "pdf2doc").fromScratch().set("title", "Convert pdf to text document").set("category", "Text Manipulation").set("description", "Convert pdf files to omnitool document format.").setMethod("X-CUSTOM").setMeta({
  source: {
    summary: "Convert pdf files to omnitool document format",
    links: {
      "PDF-parse Github": "https://github.com/UpLab/pdf-parse"
    }
  }
});
var inputs = [
  { name: "documents", type: "array", customSocket: "documentArray", title: "Text document(s) to process", defaultValue: [] },
  { name: "url", type: "string", title: "and/or PDF url(s)", customSocket: "text" },
  { name: "overwrite", type: "boolean", defaultValue: false, description: "Overwrite the existing files in the CDN" }
];
load_pdf_component = setComponentInputs(load_pdf_component, inputs);
var controls = [
  { name: "documents", placeholder: "AlpineCodeMirrorComponent" }
];
load_pdf_component = setComponentControls(load_pdf_component, controls);
var outputs = [
  { name: "documents", type: "array", customSocket: "documentArray", description: "The converted documents" },
  { name: "files", type: "array", customSocket: "cdnObjectArray", description: "The converted files" },
  { name: "message", type: "string", customSocket: "text", description: "message from the block!" }
];
load_pdf_component = setComponentOutputs(load_pdf_component, outputs);
load_pdf_component.setMacro(OmniComponentMacroTypes.EXEC, load_pdf_parse);
async function load_pdf_parse(payload, ctx) {
  const documents = payload.documents;
  const url = payload.url;
  const overwrite = payload.overwrite;
  const function_result = await pdf_to_doc_function(ctx, documents, url, overwrite);
  const return_value = { result: { "ok": true }, documents: function_result.cdns, files: function_result.cdns };
  return return_value;
}
async function pdf_to_doc_function(ctx, passed_documents_cdns, url, overwrite = false) {
  console.time("load_pdf_component_processTime");
  let passed_documents_are_valid = passed_documents_cdns != null && passed_documents_cdns != void 0 && Array.isArray(passed_documents_cdns) && passed_documents_cdns.length > 0;
  if (passed_documents_are_valid) {
    console_log(`read #${passed_documents_cdns.lentgh} from "documents" input, passed_documents_cdns = ${JSON.stringify(passed_documents_cdns)}`);
  }
  const parsedArray = parse_text_to_array(url);
  console_log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console_log(`parsedArray #  ${parsedArray.length}`);
  console_log(`parsedArray  ${JSON.stringify(parsedArray)}`);
  const cdn_tickets = rebuildToTicketObjectsIfNeeded(parsedArray);
  console_log(`cdn_tickets #  ${cdn_tickets.length}`);
  console_log(`cdn_tickets  ${JSON.stringify(cdn_tickets)}`);
  let documents = [
    ...passed_documents_cdns || [],
    // If array1 is null, spread an empty array
    ...cdn_tickets || []
    // If array2 is null, spread an empty array
  ];
  console_log(`documents  ${JSON.stringify(documents)}`);
  if (is_valid(documents) == false)
    throw new Error(`load_pdf_component: documents_array = ${JSON.stringify(documents)} is invalid`);
  const pdfParser = new PDFParser();
  pdfParser.on("pdfParser_dataError", (errData) => console.error(`pdfParser_dataError in ${JSON.stringify(errData)}`));
  pdfParser.on("pdfParser_dataReady", (pdfData) => {
    console_log(pdfData);
  });
  const texts_cdns = [];
  for (let i = 0; i < documents.length; i++) {
    const documents_cdn = documents[i];
    console_log(`documents_cdn = ${JSON.stringify(documents_cdn)}`);
    if (!documents_cdn || !documents_cdn.ticket)
      throw new Error(`get_json_from_cdn: documents_cdn = ${JSON.stringify(documents_cdn)} is invalid`);
    const response_from_cdn = await ctx.app.cdn.get(documents_cdn.ticket, null, "asBase64");
    if (response_from_cdn == null)
      throw new Error(`get_json_from_cdn: document = ${JSON.stringify(response_from_cdn)} is invalid`);
    const str = response_from_cdn.data.toString();
    const dataBuffer = Buffer.from(str, "base64");
    const pdfData = await parsePDF(dataBuffer);
    const extractedTextFields = extractTextFields(pdfData);
    const all_texts = extractedTextFields.join(" ");
    const cleaned_texts = clean_string(all_texts);
    const hasher = initialize_hasher(DEFAULT_HASHER_MODEL);
    const texts_id = "converted_pdf_texts_" + ctx.userId + "_" + hasher.hash(cleaned_texts);
    let texts_cdn = null;
    if (overwrite) {
      await user_db_delete(ctx, texts_id);
    } else {
      texts_cdn = await user_db_get(ctx, texts_id);
    }
    if (is_valid(texts_cdn) == false) {
      console_log(`Could not find Texts CDN records for id = ${texts_id} in the DB. Saving to CDN...`);
      texts_cdn = await save_text_to_cdn(ctx, cleaned_texts);
      if (is_valid(texts_cdn) == false)
        throw new Error(`ERROR: could not save all_texts to cdn`);
      const success = await user_db_put(ctx, texts_cdn, texts_id);
      if (success == false)
        throw new Error(`ERROR: could not save texts_cdn to db`);
    } else {
      console_log(`Found Texts CDN records for id = ${texts_id} in the DB. Skipping saving to CDN...`);
    }
    texts_cdns.push(texts_cdn);
  }
  console.timeEnd("load_pdf_component_processTime");
  return { cdns: texts_cdns };
}
var PdfToDocComponent = load_pdf_component.toJSON();

// extension.js
var components = [PdfToDocComponent];
function CreateComponents() {
  return {
    blocks: components,
    patches: []
  };
}
var extension_default = { createComponents: CreateComponents };
export {
  extension_default as default
};
/*! Bundled license information:

@ungap/structured-clone/esm/json.js:
  (*! (c) Andrea Giammarchi - ISC *)
*/
/*! Bundled license information:

he/he.js:
  (*! http://mths.be/he v0.5.0 by @mathias | MIT license *)
*/
