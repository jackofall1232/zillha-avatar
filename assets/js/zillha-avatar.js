/**
 * Zillha Avatar — single front-end script for both shortcodes.
 * Vanilla JS, fetch API, no jQuery.
 */
(function () {
	'use strict';

	if (typeof window === 'undefined' || typeof document === 'undefined') {
		return;
	}

	var config = window.ZillhaAvatarConfig || null;
	if (!config || !config.ajaxUrl || !config.nonce) {
		return;
	}

	var i18n = config.i18n || {};

	function ready(fn) {
		if (document.readyState !== 'loading') {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

	function setButtonState(button, state) {
		if (!button) {
			return;
		}
		button.classList.remove('is-loading', 'is-success', 'is-error');
		if (state === 'loading') {
			button.classList.add('is-loading');
			button.setAttribute('aria-busy', 'true');
			button.disabled = true;
		} else if (state === 'success') {
			button.classList.add('is-success');
			button.removeAttribute('aria-busy');
			button.disabled = false;
		} else if (state === 'error') {
			button.classList.add('is-error');
			button.removeAttribute('aria-busy');
			button.disabled = false;
		} else {
			button.removeAttribute('aria-busy');
			button.disabled = false;
		}
	}

	function setMessage(target, text, kind) {
		if (!target) {
			return;
		}
		target.textContent = text || '';
		target.classList.remove('is-error', 'is-success');
		if (kind === 'error') {
			target.classList.add('is-error');
		} else if (kind === 'success') {
			target.classList.add('is-success');
		}
	}

	function postAjax(body) {
		return fetch(config.ajaxUrl, {
			method: 'POST',
			credentials: 'same-origin',
			body: body
		}).then(function (response) {
			return response.json().catch(function () {
				return { success: false, data: { message: i18n.genericError || 'Something went wrong.' } };
			}).then(function (json) {
				return { ok: response.ok, status: response.status, json: json };
			});
		});
	}

	function bustCache(url) {
		if (!url) { return url; }
		return url + (url.indexOf('?') === -1 ? '?' : '&') + 't=' + Date.now();
	}

	/* ----------------------------------------------------------------
	 * Generator shortcode
	 * ---------------------------------------------------------------- */

	function initGenerator(root) {
		var form = root.querySelector('[data-zag-form]');
		var resultSection = root.querySelector('[data-zag-result]');
		var preview = root.querySelector('[data-zag-preview]');
		var downloadLink = root.querySelector('[data-zag-download]');
		var generateButton = root.querySelector('[data-zag-generate]');
		var saveButton = root.querySelector('[data-zag-save]');
		var resetButton = root.querySelector('[data-zag-reset]');
		var formMessage = root.querySelector('[data-zag-form-message]');
		var resultMessage = root.querySelector('[data-zag-result-message]');
		var toggleButton = root.querySelector('[data-zag-toggle]');
		var collapsible = root.querySelector('[data-zag-collapsible]');

		var LS_KEY = 'zillha_avatar_form_open';

		function isCollapsibleOpen() {
			return collapsible && !collapsible.hasAttribute('hidden');
		}

		function openCollapsible() {
			if (collapsible) { collapsible.removeAttribute('hidden'); }
			if (toggleButton) { toggleButton.setAttribute('aria-expanded', 'true'); }
		}

		function closeCollapsible() {
			if (collapsible) { collapsible.setAttribute('hidden', ''); }
			if (toggleButton) { toggleButton.setAttribute('aria-expanded', 'false'); }
		}

		if (toggleButton) {
			try {
				if (window.localStorage && localStorage.getItem(LS_KEY) === '1') {
					openCollapsible();
				}
			} catch (e) {}

			toggleButton.addEventListener('click', function () {
				if (isCollapsibleOpen()) {
					closeCollapsible();
					try { localStorage.setItem(LS_KEY, '0'); } catch (e) {}
				} else {
					openCollapsible();
					try { localStorage.setItem(LS_KEY, '1'); } catch (e) {}
				}
			});
		}

		if (!form || !resultSection || !preview || !generateButton) {
			return;
		}

		function showForm() {
			resultSection.hidden = true;
			form.hidden = false;
			openCollapsible();
			setMessage(resultMessage, '');
		}

		function showResult(dataUri) {
			preview.src = dataUri;
			if (downloadLink) {
				downloadLink.setAttribute('href', dataUri);
				downloadLink.setAttribute('download', i18n.downloadName || 'zillha-avatar.webp');
			}
			form.hidden = true;				return { success: false, data: { message: i18n.genericError || 'Something went wrong.' } };
			}).then(function (json) {
				return { ok: response.ok, status: response.status, json: json };
			});
		});
	}

	function bustCache(url) {
		if (!url) { return url; }
		return url + (url.indexOf('?') === -1 ? '?' : '&') + 't=' + Date.now();
	}

	/* ----------------------------------------------------------------
	 * Generator shortcode
	 * ---------------------------------------------------------------- */

	function initGenerator(root) {
		var form = root.querySelector('[data-zag-form]');
		var resultSection = root.querySelector('[data-zag-result]');
		var preview = root.querySelector('[data-zag-preview]');
		var downloadLink = root.querySelector('[data-zag-download]');
		var generateButton = root.querySelector('[data-zag-generate]');
		var saveButton = root.querySelector('[data-zag-save]');
		var resetButton = root.querySelector('[data-zag-reset]');
		var formMessage = root.querySelector('[data-zag-form-message]');
		var resultMessage = root.querySelector('[data-zag-result-message]');
		var toggleButton = root.querySelector('[data-zag-toggle]');
		var collapsible = root.querySelector('[data-zag-collapsible]');

		var LS_KEY = 'zillha_avatar_form_open';

		function isCollapsibleOpen() {
			return collapsible && !collapsible.hasAttribute('hidden');
		}

		function openCollapsible() {
			if (collapsible) { collapsible.removeAttribute('hidden'); }
			if (toggleButton) { toggleButton.setAttribute('aria-expanded', 'true'); }
		}

		function closeCollapsible() {
			if (collapsible) { collapsible.setAttribute('hidden', ''); }
			if (toggleButton) { toggleButton.setAttribute('aria-expanded', 'false'); }
		}

		if (toggleButton) {
			try {
				if (window.localStorage && localStorage.getItem(LS_KEY) === '1') {
					openCollapsible();
				}
			} catch (e) {}

			toggleButton.addEventListener('click', function () {
				if (isCollapsibleOpen()) {
					closeCollapsible();
					try { localStorage.setItem(LS_KEY, '0'); } catch (e) {}
				} else {
					openCollapsible();
					try { localStorage.setItem(LS_KEY, '1'); } catch (e) {}
				}
			});
		}

		if (!form || !resultSection || !preview || !generateButton) {
			return;
		}

		function showForm() {
			resultSection.hidden = true;
			form.hidden = false;
			openCollapsible();
			setMessage(resultMessage, '');
		}

		function showResult(dataUri) {
			preview.src = dataUri;
			if (downloadLink) {
				downloadLink.setAttribute('href', dataUri);
				downloadLink.setAttribute('download', i18n.downloadName || 'zillha-avatar.webp');
			}
			form.hidden = true;
