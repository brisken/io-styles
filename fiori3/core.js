import { css } from 'lit-element'

const styles = css`
:host {
  --fd-color-action-1: #0a6ed1;
  --fd-color-action-2: white;
  --fd-color-text-1: #32363a;
  --fd-color-text-2: #51555a;
  --fd-color-text-3: #6a6d70;
  --fd-color-text-4: #74777a;
  --fd-color-text-5: white;
  --fd-color-background-1: #edeef0;
  --fd-color-background-2: white;
  --fd-color-background-3: #f1fdf6;
  --fd-color-background-4: #fef7f1;
  --fd-color-background-5: #ffebeb;
  --fd-color-background-6: #f5faff;
  --fd-color-neutral-1: #fafafa;
  --fd-color-neutral-2: #eeeeef;
  --fd-color-neutral-3: #d9d9d9;
  --fd-color-neutral-4: #89919a;
  --fd-color-status-1: #107f3e;
  --fd-color-status-2: #e9730c;
  --fd-color-status-3: #bd0000;
  --fd-color-status-4: #6d7678;
  --fd-color-accent-1: #e38b16;
  --fd-color-accent-2: #dc7474;
  --fd-color-accent-3: #db1f77;
  --fd-color-accent-4: #c0399f;
  --fd-color-accent-5: #6367de;
  --fd-color-accent-6: #5899da;
  --fd-color-accent-7: #13a4b4;
  --fd-color-accent-8: #7ca10c;
  --fd-color-accent-9: #955ecf;
  --fd-color-accent-10: #6c8893;
  --fd-color-accent-11: #d17f15;
  --fd-color-accent-12: #d04343;
  --fd-color-accent-13: #2b78c5;
  --fd-color-accent-14: #0f828f;
  --fd-color-accent-15: #647887;
  --fd-color-shell-1: #354a5f;
  --fd-color-shell-2: #d1e8ff;
  --fd-color: var(--fd-color-text-1);
  --fd-background-color: var(--fd-color-background-1);
  --fd-color-background-hover: #fafafa;
  --fd-color-background-selected: rgba(10, 110, 209, 0.07);
  --fd-color-background-selected-hover: rgba(10, 110, 209, 0.1);
  --fd-color-background-information: #f5faff;
  --fd-color-background-positive: #f1fdf6;
  --fd-color-background-alert: #fef7f1;
  --fd-color-background-negative: #ffebeb;
  --fd-color-action: var(--fd-color-action-1);
  --fd-color-action-hover: #085caf;
  --fd-color-action-focus: #085caf;
  --fd-color-action-selected: #0254a7;
  --fd-color-action-disabled: rgba(10, 110, 209, 0.4);
  --fd-color-action-visited: #3c0ad1;
  --fd-color-positive: #107f3e;
  --fd-color-negative: #bd0000;
  --fd-color-alert: #e9730c;
  --fd-forms-color: #32363a;
  --fd-forms-border-color: #89919a;
  --fd-forms-background-color: white;
  --fd-forms-height: 36px;
  --fd-forms-height-compact: 36px;
  --fd-padding-ui: 8px;
  --fd-width-gutter: 8px
}
.fd-for-touch {
  --fd-forms-height-compact: 36px
}
.fd-for-compact {
  --fd-forms-height-compact: 28px
}
@media (min-width:600px) {
  :host {
    --fd-forms-height-compact: 28px
  }
}
@media (min-width:600px) {
  :host {
    --fd-padding-ui: 32px;
    --fd-width-gutter: 16px
  }
}
@media (min-width:1440px) {
  :host {
    --fd-padding-ui: 48px
  }
}
/*!
* @section Root Element
* Default styles for root elements
*/
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 100%
}
body,
html {
  font-size: 14px;
  font-family: '72',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  line-height: 1.42857
}
* {
  -webkit-box-sizing: inherit;
  box-sizing: inherit
}
::after,
::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit
}
body {
  margin: 0;
  background-color: var(--fd-background-color);
  -webkit-font-smoothing: antialiased;
  color: var(--fd-color)
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-rendering: optimizeLegibility;
  margin-bottom: 12px;
  margin-top: 0
}
/*!
* @section Block Elements
* Default styles for block elements
*/
blockquote,
figure,
ol,
p,
table,
ul {
  margin-top: 0;
  margin-bottom: 12px
}
blockquote:last-child,
figure:last-child,
ol:last-child,
p:last-child,
table:last-child,
ul:last-child {
  margin-bottom: 0
}
/*!
* @section List Elements
* Default styles for lists
*/
ol,
ul {
  padding: 0
}
/*!
* @section Phrases Elements
* Default styles for phrase elements
*/
img {
  line-height: 0;
  vertical-align: middle
}
a {
  text-decoration: none;
  display: inline-block;
  -webkit-transition: all 125ms ease-in;
  transition: all 125ms ease-in;
  color: var(--fd-color-action)
}
a .is-hover,
a:hover {
  color: var(--fd-color-action-hover)
}
a.is-active,
a.is-pressed,
a.is-selected,
a:active,
a[aria-pressed=true],
a[aria-selected=true] {
  color: var(--fd-color-action-selected);
  outline: 0
}
a:focus {
  outline-style: dotted;
  outline-width: 1px;
  outline-color: var(--fd-color-action-focus)
}
a.is-disabled,
a:disabled,
a[aria-disabled=true] {
  outline-color: var(--fd-color-action-disabled);
  cursor: not-allowed
}
code,
pre {
  font-family: monospace
}
/*!
* @section Button Elements
* Default styles for button elements
*/
button::-moz-focus-inner,
input[type=submit]::-moz-focus-inner {
  border: 0;
  padding: 0
}
.fd-checkbox,
.fd-radio,
input[type=checkbox],
input[type=radio] {
  font-size: 14px;
  line-height: 1.42857;
  color: var(--fd-color-text-1);
  font-family: '72',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 1rem;
  line-height: 1.42857;
  font-weight: 400;
  appearance: none;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  font-size: inherit;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  border-style: solid;
  border-width: 1px;
  color: var(--fd-forms-color);
  border-color: var(--fd-forms-border-color);
  background-color: var(--fd-forms-background-color);
  border-radius: 4px;
  -webkit-transition: border-color 125ms;
  transition: border-color 125ms;
  -webkit-transition: border-color 125ms ease-in,background-color 125ms ease-in,background-image 125ms ease-in;
  transition: border-color 125ms ease-in,background-color 125ms ease-in,background-image 125ms ease-in
}
.fd-checkbox .is-hover,
.fd-checkbox:hover,
.fd-radio .is-hover,
.fd-radio:hover,
input:hover[type=checkbox],
input:hover[type=radio],
input[type=checkbox] .is-hover,
input[type=radio] .is-hover {
  --fd-forms-border-color: var(--fd-color-action-hover)
}
.fd-checkbox:focus,
.fd-radio:focus,
.is-focus.fd-checkbox,
.is-focus.fd-radio,
input.is-focus[type=checkbox],
input.is-focus[type=radio],
input:focus[type=checkbox],
input:focus[type=radio] {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-action-focus);
  box-shadow: 0 0 0 1px var(--fd-color-action-focus);
  --fd-forms-border-color: var(--fd-color-action-focus)
}
.is-invalid.fd-checkbox,
.is-invalid.fd-radio,
input.is-invalid[type=checkbox],
input.is-invalid[type=radio] {
  --fd-forms-border-color: var(--fd-color-negative);
  border-width: 2px
}
.is-valid.fd-checkbox,
.is-valid.fd-radio,
input.is-valid[type=checkbox],
input.is-valid[type=radio] {
  --fd-forms-border-color: var(--fd-color-positive);
  border-width: 2px
}
.is-alert.fd-checkbox,
.is-alert.fd-radio,
.is-warning.fd-checkbox,
.is-warning.fd-radio,
input.is-alert[type=checkbox],
input.is-alert[type=radio],
input.is-warning[type=checkbox],
input.is-warning[type=radio] {
  --fd-forms-border-color: var(--fd-color-alert);
  border-width: 2px
}
.fd-checkbox:disabled,
.fd-checkbox[aria-disabled=true],
.fd-radio:disabled,
.fd-radio[aria-disabled=true],
.is-disabled.fd-checkbox,
.is-disabled.fd-radio,
input.is-disabled[type=checkbox],
input.is-disabled[type=radio],
input:disabled[type=checkbox],
input:disabled[type=radio],
input[aria-disabled=true][type=checkbox],
input[aria-disabled=true][type=radio] {
  cursor: not-allowed;
  --fd-forms-color: var(--fd-color-text-3);
  --fd-forms-border-color: var(--fd-color-neutral-2);
  --fd-forms-background-color: var(--fd-color-neutral-1)
}
.fd-checkbox[readonly],
.fd-radio[readonly],
.is-readonly.fd-checkbox,
.is-readonly.fd-radio,
input.is-readonly[type=checkbox],
input.is-readonly[type=radio],
input[readonly][type=checkbox],
input[readonly][type=radio] {
  --fd-forms-color: var(--fd-forms-color);
  --fd-forms-border-color: var(--fd-color-neutral-2);
  border-width: 0 0 1px;
  border-radius: 0
}
.fd-checkbox::after,
.fd-radio::after,
input[type=checkbox]::after,
input[type=radio]::after {
  -webkit-transition: border-color 125ms ease-in;
  transition: border-color 125ms ease-in
}
fieldset {
  border: 0;
  padding: 0;
  margin: 0
}
.fd-input,
input[type=date],
input[type=email],
input[type=number],
input[type=password],
input[type=search],
input[type=tel],
input[type=text],
input[type=time],
input[type=url] {
  font-size: 14px;
  line-height: 1.42857;
  color: var(--fd-color-text-1);
  font-family: '72',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 1rem;
  line-height: 1.42857;
  font-weight: 400;
  appearance: none;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  font-size: inherit;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  border-style: solid;
  border-width: 1px;
  color: var(--fd-forms-color);
  border-color: var(--fd-forms-border-color);
  background-color: var(--fd-forms-background-color);
  border-radius: 4px;
  -webkit-transition: border-color 125ms;
  transition: border-color 125ms;
  padding-left: 12px;
  padding-right: 12px;
  height: var(--fd-forms-height);
  width: 100%
}
.fd-input .is-hover,
.fd-input:hover,
input[type=date] .is-hover,
input[type=date]:hover,
input[type=email] .is-hover,
input[type=email]:hover,
input[type=number] .is-hover,
input[type=number]:hover,
input[type=password] .is-hover,
input[type=password]:hover,
input[type=search] .is-hover,
input[type=search]:hover,
input[type=tel] .is-hover,
input[type=tel]:hover,
input[type=text] .is-hover,
input[type=text]:hover,
input[type=time] .is-hover,
input[type=time]:hover,
input[type=url] .is-hover,
input[type=url]:hover {
  --fd-forms-border-color: var(--fd-color-action-hover)
}
.fd-input.is-focus,
.fd-input:focus,
input[type=date].is-focus,
input[type=date]:focus,
input[type=email].is-focus,
input[type=email]:focus,
input[type=number].is-focus,
input[type=number]:focus,
input[type=password].is-focus,
input[type=password]:focus,
input[type=search].is-focus,
input[type=search]:focus,
input[type=tel].is-focus,
input[type=tel]:focus,
input[type=text].is-focus,
input[type=text]:focus,
input[type=time].is-focus,
input[type=time]:focus,
input[type=url].is-focus,
input[type=url]:focus {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-action-focus);
  box-shadow: 0 0 0 1px var(--fd-color-action-focus);
  --fd-forms-border-color: var(--fd-color-action-focus)
}
.fd-input.is-invalid,
input[type=date].is-invalid,
input[type=email].is-invalid,
input[type=number].is-invalid,
input[type=password].is-invalid,
input[type=search].is-invalid,
input[type=tel].is-invalid,
input[type=text].is-invalid,
input[type=time].is-invalid,
input[type=url].is-invalid {
  --fd-forms-border-color: var(--fd-color-negative);
  border-width: 2px
}
.fd-input.is-valid,
input[type=date].is-valid,
input[type=email].is-valid,
input[type=number].is-valid,
input[type=password].is-valid,
input[type=search].is-valid,
input[type=tel].is-valid,
input[type=text].is-valid,
input[type=time].is-valid,
input[type=url].is-valid {
  --fd-forms-border-color: var(--fd-color-positive);
  border-width: 2px
}
.fd-input.is-alert,
.fd-input.is-warning,
input[type=date].is-alert,
input[type=date].is-warning,
input[type=email].is-alert,
input[type=email].is-warning,
input[type=number].is-alert,
input[type=number].is-warning,
input[type=password].is-alert,
input[type=password].is-warning,
input[type=search].is-alert,
input[type=search].is-warning,
input[type=tel].is-alert,
input[type=tel].is-warning,
input[type=text].is-alert,
input[type=text].is-warning,
input[type=time].is-alert,
input[type=time].is-warning,
input[type=url].is-alert,
input[type=url].is-warning {
  --fd-forms-border-color: var(--fd-color-alert);
  border-width: 2px
}
.fd-input.is-disabled,
.fd-input:disabled,
.fd-input[aria-disabled=true],
input[type=date].is-disabled,
input[type=date]:disabled,
input[type=date][aria-disabled=true],
input[type=email].is-disabled,
input[type=email]:disabled,
input[type=email][aria-disabled=true],
input[type=number].is-disabled,
input[type=number]:disabled,
input[type=number][aria-disabled=true],
input[type=password].is-disabled,
input[type=password]:disabled,
input[type=password][aria-disabled=true],
input[type=search].is-disabled,
input[type=search]:disabled,
input[type=search][aria-disabled=true],
input[type=tel].is-disabled,
input[type=tel]:disabled,
input[type=tel][aria-disabled=true],
input[type=text].is-disabled,
input[type=text]:disabled,
input[type=text][aria-disabled=true],
input[type=time].is-disabled,
input[type=time]:disabled,
input[type=time][aria-disabled=true],
input[type=url].is-disabled,
input[type=url]:disabled,
input[type=url][aria-disabled=true] {
  cursor: not-allowed;
  --fd-forms-color: var(--fd-color-text-3);
  --fd-forms-border-color: var(--fd-color-neutral-2);
  --fd-forms-background-color: var(--fd-color-neutral-1)
}
.fd-input.is-readonly,
.fd-input[readonly],
input[type=date].is-readonly,
input[type=date][readonly],
input[type=email].is-readonly,
input[type=email][readonly],
input[type=number].is-readonly,
input[type=number][readonly],
input[type=password].is-readonly,
input[type=password][readonly],
input[type=search].is-readonly,
input[type=search][readonly],
input[type=tel].is-readonly,
input[type=tel][readonly],
input[type=text].is-readonly,
input[type=text][readonly],
input[type=time].is-readonly,
input[type=time][readonly],
input[type=url].is-readonly,
input[type=url][readonly] {
  --fd-forms-color: var(--fd-forms-color);
  --fd-forms-border-color: var(--fd-color-neutral-2);
  border-width: 0 0 1px;
  border-radius: 0
}
.fd-input::-webkit-input-placeholder,
input[type=date]::-webkit-input-placeholder,
input[type=email]::-webkit-input-placeholder,
input[type=number]::-webkit-input-placeholder,
input[type=password]::-webkit-input-placeholder,
input[type=search]::-webkit-input-placeholder,
input[type=tel]::-webkit-input-placeholder,
input[type=text]::-webkit-input-placeholder,
input[type=time]::-webkit-input-placeholder,
input[type=url]::-webkit-input-placeholder {
  color: var(--fd-color-neutral-4)
}
.fd-input:-ms-input-placeholder,
input[type=date]:-ms-input-placeholder,
input[type=email]:-ms-input-placeholder,
input[type=number]:-ms-input-placeholder,
input[type=password]:-ms-input-placeholder,
input[type=search]:-ms-input-placeholder,
input[type=tel]:-ms-input-placeholder,
input[type=text]:-ms-input-placeholder,
input[type=time]:-ms-input-placeholder,
input[type=url]:-ms-input-placeholder {
  color: var(--fd-color-neutral-4)
}
.fd-input::-ms-input-placeholder,
input[type=date]::-ms-input-placeholder,
input[type=email]::-ms-input-placeholder,
input[type=number]::-ms-input-placeholder,
input[type=password]::-ms-input-placeholder,
input[type=search]::-ms-input-placeholder,
input[type=tel]::-ms-input-placeholder,
input[type=text]::-ms-input-placeholder,
input[type=time]::-ms-input-placeholder,
input[type=url]::-ms-input-placeholder {
  color: var(--fd-color-neutral-4)
}
.fd-input::placeholder,
input[type=date]::placeholder,
input[type=email]::placeholder,
input[type=number]::placeholder,
input[type=password]::placeholder,
input[type=search]::placeholder,
input[type=tel]::placeholder,
input[type=text]::placeholder,
input[type=time]::placeholder,
input[type=url]::placeholder {
  color: var(--fd-color-neutral-4)
}
input.fd-input--compact {
  height: var(--fd-forms-height-compact)
}
.fd-textarea,
textarea {
  font-size: 14px;
  line-height: 1.42857;
  color: var(--fd-color-text-1);
  font-family: '72',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 1rem;
  line-height: 1.42857;
  font-weight: 400;
  appearance: none;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  font-size: inherit;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  border-style: solid;
  border-width: 1px;
  color: var(--fd-forms-color);
  border-color: var(--fd-forms-border-color);
  background-color: var(--fd-forms-background-color);
  border-radius: 4px;
  -webkit-transition: border-color 125ms;
  transition: border-color 125ms;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  height: calc(var(--fd-forms-height) * 2);
  padding-top: 12px
}
.fd-textarea .is-hover,
.fd-textarea:hover,
textarea .is-hover,
textarea:hover {
  --fd-forms-border-color: var(--fd-color-action-hover)
}
.fd-textarea.is-focus,
.fd-textarea:focus,
textarea.is-focus,
textarea:focus {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-action-focus);
  box-shadow: 0 0 0 1px var(--fd-color-action-focus);
  --fd-forms-border-color: var(--fd-color-action-focus)
}
.fd-textarea.is-invalid,
textarea.is-invalid {
  --fd-forms-border-color: var(--fd-color-negative);
  border-width: 2px
}
.fd-textarea.is-valid,
textarea.is-valid {
  --fd-forms-border-color: var(--fd-color-positive);
  border-width: 2px
}
.fd-textarea.is-alert,
.fd-textarea.is-warning,
textarea.is-alert,
textarea.is-warning {
  --fd-forms-border-color: var(--fd-color-alert);
  border-width: 2px
}
.fd-textarea.is-disabled,
.fd-textarea:disabled,
.fd-textarea[aria-disabled=true],
textarea.is-disabled,
textarea:disabled,
textarea[aria-disabled=true] {
  cursor: not-allowed;
  --fd-forms-color: var(--fd-color-text-3);
  --fd-forms-border-color: var(--fd-color-neutral-2);
  --fd-forms-background-color: var(--fd-color-neutral-1)
}
.fd-textarea.is-readonly,
.fd-textarea[readonly],
textarea.is-readonly,
textarea[readonly] {
  --fd-forms-color: var(--fd-forms-color);
  --fd-forms-border-color: var(--fd-color-neutral-2);
  border-width: 0 0 1px;
  border-radius: 0
}
.fd-textarea--compact {
  height: calc(var(--fd-forms-height-compact) * 2);
  padding-top: 12px
}
.fd-select,
select {
  font-size: 14px;
  line-height: 1.42857;
  color: var(--fd-color-text-1);
  font-family: '72',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 1rem;
  line-height: 1.42857;
  font-weight: 400;
  appearance: none;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  font-size: inherit;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  border-style: solid;
  border-width: 1px;
  color: var(--fd-forms-color);
  border-color: var(--fd-forms-border-color);
  background-color: var(--fd-forms-background-color);
  border-radius: 4px;
  -webkit-transition: border-color 125ms;
  transition: border-color 125ms;
  padding-left: 12px;
  padding-right: 12px;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: none;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzOSAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGQUZCRkMiIGQ9Ik0xIDBoMzd2MzZIMXoiLz48cGF0aCBkPSJNMSAwdjM2TTM4IDB2MzYiIHN0cm9rZT0iI0NFQ0VEMCIvPjxwYXRoIGQ9Ik0yNi45MTkgMTYuODQzbC03LjY2NyA4LjA1OGEuMzY0LjM2NCAwIDAgMS0uMjUzLjA5OS4zNjQuMzY0IDAgMCAxLS4yNTItLjFsLTcuNjY0LTguMDU3YS4yODMuMjgzIDAgMCAxIC4wMzQtLjQyOGwxLjcyMS0xLjM0MWEuMzUyLjM1MiAwIDAgMSAuMjE4LS4wNzRsLjAyNS4wMDFjLjA4OC4wMDYuMTcuMDQ1LjIyOC4xMDdMMTkgMjEuMjAybDUuNjkzLTYuMDk0Yy4xMi0uMTMuMzMtLjE0NS40Ny0uMDM0bDEuNzIyIDEuMzQxYS4yOTcuMjk3IDAgMCAxIC4xMTUuMjA3LjI4My4yODMgMCAwIDEtLjA4LjIyMXoiIGZpbGw9IiMwQTZFRDEiLz48L2c+PC9zdmc+);
  background-repeat: no-repeat;
  background-position: calc(100% + 1px) center;
  padding-right: 48px;
  width: 100%;
  height: var(--fd-forms-height)
}
.fd-select .is-hover,
.fd-select:hover,
select .is-hover,
select:hover {
  --fd-forms-border-color: var(--fd-color-action-hover)
}
.fd-select.is-focus,
.fd-select:focus,
select.is-focus,
select:focus {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-action-focus);
  box-shadow: 0 0 0 1px var(--fd-color-action-focus);
  --fd-forms-border-color: var(--fd-color-action-focus)
}
.fd-select.is-invalid,
select.is-invalid {
  --fd-forms-border-color: var(--fd-color-negative);
  border-width: 2px
}
.fd-select.is-valid,
select.is-valid {
  --fd-forms-border-color: var(--fd-color-positive);
  border-width: 2px
}
.fd-select.is-alert,
.fd-select.is-warning,
select.is-alert,
select.is-warning {
  --fd-forms-border-color: var(--fd-color-alert);
  border-width: 2px
}
.fd-select.is-disabled,
.fd-select:disabled,
.fd-select[aria-disabled=true],
select.is-disabled,
select:disabled,
select[aria-disabled=true] {
  cursor: not-allowed;
  --fd-forms-color: var(--fd-color-text-3);
  --fd-forms-border-color: var(--fd-color-neutral-2);
  --fd-forms-background-color: var(--fd-color-neutral-1)
}
.fd-select.is-readonly,
.fd-select[readonly],
select.is-readonly,
select[readonly] {
  --fd-forms-color: var(--fd-forms-color);
  --fd-forms-border-color: var(--fd-color-neutral-2);
  border-width: 0 0 1px;
  border-radius: 0
}
.fd-select[dir=rtl],
[dir=rtl] .fd-select,
[dir=rtl] select,
select[dir=rtl] {
  background-position: -1px center;
  padding-right: 12px;
  padding-left: 48px
}
.fd-select:focus,
.fd-select:hover,
select:focus,
select:hover {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzOSAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGQUZCRkMiIGQ9Ik0xIDBoMzd2MzZIMXoiLz48cGF0aCBkPSJNMSAwdjM2TTM4IDB2MzYiIHN0cm9rZT0iI0NFQ0VEMCIvPjxwYXRoIGQ9Ik0yNi45MTkgMTYuODQzbC03LjY2NyA4LjA1OGEuMzY0LjM2NCAwIDAgMS0uMjUzLjA5OS4zNjQuMzY0IDAgMCAxLS4yNTItLjFsLTcuNjY0LTguMDU3YS4yODMuMjgzIDAgMCAxIC4wMzQtLjQyOGwxLjcyMS0xLjM0MWEuMzUyLjM1MiAwIDAgMSAuMjE4LS4wNzRsLjAyNS4wMDFjLjA4OC4wMDYuMTcuMDQ1LjIyOC4xMDdMMTkgMjEuMjAybDUuNjkzLTYuMDk0Yy4xMi0uMTMuMzMtLjE0NS40Ny0uMDM0bDEuNzIyIDEuMzQxYS4yOTcuMjk3IDAgMCAxIC4xMTUuMjA3LjI4My4yODMgMCAwIDEtLjA4LjIyMXoiIGZpbGw9IiMwQTZFRDEiLz48L2c+PC9zdmc+)
}
.fd-select.is-expanded,
.fd-select[aria-expanded=true],
select.is-expanded,
select[aria-expanded=true] {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzOSAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGQUZCRkMiIGQ9Ik0xIDBoMzd2MzZIMXoiLz48cGF0aCBkPSJNMSAwdjM2TTM4IDB2MzYiIHN0cm9rZT0iI0NFQ0VEMCIvPjxwYXRoIGQ9Ik0yNi45MTkgMTYuODQzbC03LjY2NyA4LjA1OGEuMzY0LjM2NCAwIDAgMS0uMjUzLjA5OS4zNjQuMzY0IDAgMCAxLS4yNTItLjFsLTcuNjY0LTguMDU3YS4yODMuMjgzIDAgMCAxIC4wMzQtLjQyOGwxLjcyMS0xLjM0MWEuMzUyLjM1MiAwIDAgMSAuMjE4LS4wNzRsLjAyNS4wMDFjLjA4OC4wMDYuMTcuMDQ1LjIyOC4xMDdMMTkgMjEuMjAybDUuNjkzLTYuMDk0Yy4xMi0uMTMuMzMtLjE0NS40Ny0uMDM0bDEuNzIyIDEuMzQxYS4yOTcuMjk3IDAgMCAxIC4xMTUuMjA3LjI4My4yODMgMCAwIDEtLjA4LjIyMXoiIGZpbGw9IiMwQTZFRDEiLz48L2c+PC9zdmc+)
}
.fd-select.is-disabled,
.fd-select:disabled,
.fd-select[aria-disabled=true],
select.is-disabled,
select:disabled,
select[aria-disabled=true] {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzOSAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGQUZCRkMiIGQ9Ik0xIDBoMzd2MzZIMXoiLz48cGF0aCBkPSJNMSAwdjM2TTM4IDB2MzYiIHN0cm9rZT0iI0VCRUJFQyIvPjxwYXRoIGQ9Ik0yNi45MTkgMTYuODQzbC03LjY2NyA4LjA1OGEuMzY0LjM2NCAwIDAgMS0uMjUzLjA5OS4zNjQuMzY0IDAgMCAxLS4yNTItLjFsLTcuNjY0LTguMDU3YS4yODMuMjgzIDAgMCAxIC4wMzQtLjQyOGwxLjcyMS0xLjM0MWEuMzUyLjM1MiAwIDAgMSAuMjE4LS4wNzRsLjAyNS4wMDFjLjA4OC4wMDYuMTcuMDQ1LjIyOC4xMDdMMTkgMjEuMjAybDUuNjkzLTYuMDk0Yy4xMi0uMTMuMzMtLjE0NS40Ny0uMDM0bDEuNzIyIDEuMzQxYS4yOTcuMjk3IDAgMCAxIC4xMTUuMjA3LjI4My4yODMgMCAwIDEtLjA4LjIyMXoiIGZpbGw9IiNFQkVCRUMiLz48L2c+PC9zdmc+)
}
.fd-select::after,
select::after {
  content: "";
  width: 10px;
  height: 5px;
  border-color: transparent;
  border-style: solid;
  border-width: 0 0 2px 2px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  position: absolute;
  z-index: 2;
  top: calc(50% - 4px);
  left: calc(50% - 10px/2)
}
.fd-select[multiple],
select[multiple] {
  height: calc(var(--fd-forms-height) * 3);
  background-image: none;
  padding-top: 12px
}
.fd-select--compact {
  height: var(--fd-forms-height-compact)
}
[multiple].fd-select--compact {
  height: calc(var(--fd-forms-height-compact) * 3)
}
@-moz-document url-prefix() {
  .fd-checkbox,
  input[type=checkbox] {
    -moz-appearance: checkbox
  }
  .fd-radio,
  input[type=radio] {
    -moz-appearance: radio
  }
}
.fd-checkbox,
.fd-radio,
input[type=checkbox],
input[type=radio] {
  height: 16px;
  width: 16px;
  margin: 0;
  vertical-align: middle;
  position: relative;
  cursor: pointer
}
.fd-checkbox .is-hover,
.fd-checkbox:hover,
.fd-radio .is-hover,
.fd-radio:hover,
input[type=checkbox] .is-hover,
input[type=checkbox]:hover,
input[type=radio] .is-hover,
input[type=radio]:hover {
  border-width: 2px
}
.fd-checkbox .is-hover.is-disabled,
.fd-checkbox .is-hover:disabled,
.fd-checkbox .is-hover[aria-disabled=true],
.fd-checkbox:hover.is-disabled,
.fd-checkbox:hover:disabled,
.fd-checkbox:hover[aria-disabled=true],
.fd-radio .is-hover.is-disabled,
.fd-radio .is-hover:disabled,
.fd-radio .is-hover[aria-disabled=true],
.fd-radio:hover.is-disabled,
.fd-radio:hover:disabled,
.fd-radio:hover[aria-disabled=true],
input[type=checkbox] .is-hover.is-disabled,
input[type=checkbox] .is-hover:disabled,
input[type=checkbox] .is-hover[aria-disabled=true],
input[type=checkbox]:hover.is-disabled,
input[type=checkbox]:hover:disabled,
input[type=checkbox]:hover[aria-disabled=true],
input[type=radio] .is-hover.is-disabled,
input[type=radio] .is-hover:disabled,
input[type=radio] .is-hover[aria-disabled=true],
input[type=radio]:hover.is-disabled,
input[type=radio]:hover:disabled,
input[type=radio]:hover[aria-disabled=true] {
  border-width: 1px
}
.fd-checkbox:checked,
.fd-radio:checked,
input[type=checkbox]:checked,
input[type=radio]:checked {
  --fd-forms-border-color: var(--fd-color-action-selected);
  --fd-forms-background-color: var(--fd-color-action-selected)
}
.fd-checkbox:checked.is-disabled,
.fd-checkbox:checked:disabled,
.fd-checkbox:checked[aria-disabled=true],
.fd-radio:checked.is-disabled,
.fd-radio:checked:disabled,
.fd-radio:checked[aria-disabled=true],
input[type=checkbox]:checked.is-disabled,
input[type=checkbox]:checked:disabled,
input[type=checkbox]:checked[aria-disabled=true],
input[type=radio]:checked.is-disabled,
input[type=radio]:checked:disabled,
input[type=radio]:checked[aria-disabled=true] {
  --fd-forms-border-color: var(--fd-color-action-disabled);
  --fd-forms-background-color: var(--fd-color-action-disabled)
}
.fd-checkbox:checked .is-hover,
.fd-checkbox:checked:hover,
.fd-radio:checked .is-hover,
.fd-radio:checked:hover,
input[type=checkbox]:checked .is-hover,
input[type=checkbox]:checked:hover,
input[type=radio]:checked .is-hover,
input[type=radio]:checked:hover {
  border-width: 1px
}
.fd-radio,
input[type=radio] {
  border-radius: 50%
}
.fd-radio::after,
input[type=radio]::after {
  content: "";
  border-radius: 50%;
  width: 8px;
  height: 8px;
  position: absolute;
  top: calc(50% - (8px/2));
  left: calc(50% - (8px/2));
  -webkit-transition: background-color 125ms ease-in;
  transition: background-color 125ms ease-in;
  background-color: transparent
}
.fd-radio:checked,
input[type=radio]:checked {
  --fd-forms-background-color: var(--fd-forms-background-color)
}
.fd-radio:checked::after,
input[type=radio]:checked::after {
  --fd-forms-background-color: var(--fd-color-action-selected);
  background-color: var(--fd-forms-background-color)
}
.fd-radio:checked.is-disabled,
.fd-radio:checked:disabled,
.fd-radio:checked[aria-disabled=true],
input[type=radio]:checked.is-disabled,
input[type=radio]:checked:disabled,
input[type=radio]:checked[aria-disabled=true] {
  --fd-forms-background-color: var(--fd-forms-background-color)
}
.fd-radio:checked.is-disabled::after,
.fd-radio:checked:disabled::after,
.fd-radio:checked[aria-disabled=true]::after,
input[type=radio]:checked.is-disabled::after,
input[type=radio]:checked:disabled::after,
input[type=radio]:checked[aria-disabled=true]::after {
  --fd-forms-background-color: var(--fd-color-action-disabled)
}
.fd-checkbox::before,
input[type=checkbox]::before {
  content: "";
  width: 10px;
  height: 5px;
  border-color: transparent;
  border-style: solid;
  border-width: 0 0 2px 2px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  position: absolute;
  z-index: 2;
  top: calc(50% - 4px);
  left: calc(50% - 10px/2)
}
.fd-checkbox:checked::before,
input[type=checkbox]:checked::before {
  --fd-forms-border-color: var(--fd-color-action-2);
  border-color: var(--fd-forms-border-color)
}
.fd-checkbox:indeterminate,
input[type=checkbox]:indeterminate {
  --fd-forms-border-color: var(--fd-color-action-2);
  --fd-forms-background-color: var(--fd-color-action-selected);
  border-width: 3px;
  border-style: solid;
  -webkit-box-shadow: 0 0 0 1px var(--fd-forms-background-color);
  box-shadow: 0 0 0 1px var(--fd-forms-background-color)
}
`

export default styles


