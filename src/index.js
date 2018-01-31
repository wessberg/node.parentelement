/**
 * A spec-compliant polyfill for 'parentElement'.
 * @author Frederik Wessberg <https://github.com/wessberg>
 * @version 1.0.0
 */

(function () {
	"use strict";

	if (!("parentElement" in Document.prototype) || !("parentElement" in Text.prototype) || !("parentElement" in Attr.prototype)) {
		// Environment doesn't support 'parentElement' or only supports it on nodes that are Elements themselves.
		// To unify behavior between all browsers and to be spec-compliant, parentElement should be supported on any Node.

		function implementation () {
			return this.parentNode instanceof Element ? this.parentNode : null;
		}

		try {
			Object.defineProperty(Attr.prototype, "parentElement", { configurable: false, enumerable: false, get: implementation });
		} catch (e) {
			// IE8
			Attr.prototype.parentElement = implementation;
		}

		try {
			Object.defineProperty(Text.prototype, "parentElement", { configurable: false, enumerable: false, get: implementation });
		} catch (e) {
			// IE8
			Text.prototype.parentElement = implementation;
		}

		try {
			Object.defineProperty(Element.prototype, "parentElement", { configurable: false, enumerable: false, get: implementation });
		} catch (e) {
			// IE8
			Element.prototype.parentElement = implementation;
		}

		try {
			Object.defineProperty(Document.prototype, "parentElement", { configurable: false, enumerable: false, get: implementation });
		} catch (e) {
			// IE8
			Document.prototype.parentElement = implementation;
		}

	}
}());
