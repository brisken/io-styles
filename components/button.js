import { css } from 'lit-element'

const styles = css`
.fd-button,
[class*=fd-button--] {
  --fd-button-color: var(--fd-color-action-1);
  --fd-button-border-color: var(--fd-color-action-1);
  --fd-button-background-color: var(--fd-color-background-2);
  display: inline-block;
  margin: 0;
  padding: 0;
  font-smoothing: antialiased;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 0;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  height: var(--fd-forms-height);
  max-height: var(--fd-forms-height);
  min-width: var(--fd-forms-height);
  font-size: 1rem;
  line-height: 1.42857;
  font-weight: 400;
  line-height: 1;
  padding-left: 12px;
  padding-right: 12px;
  border-style: solid;
  border-width: 1px;
  color: var(--fd-button-color);
  border-color: var(--fd-button-border-color);
  background-color: var(--fd-button-background-color);
  -webkit-transition: all 125ms ease-in;
  transition: all 125ms ease-in
}
.fd-button::before,
[class*=fd-button--]::before {
  font-size: 1.14286rem;
  line-height: 1
}
.fd-button::after,
[class*=fd-button--]::after {
  font-size: 1.14286rem;
  line-height: 1
}
.fd-button::before,
[class*=fd-button--]::before {
  margin-right: 8px;
  vertical-align: text-bottom
}
.fd-button[dir=rtl]::before,
[class*=fd-button--][dir=rtl]::before,
[dir=rtl] .fd-button::before,
[dir=rtl] [class*=fd-button--]::before {
  margin-right: 0;
  margin-left: 8px
}
.fd-button::after,
[class*=fd-button--]::after {
  margin-left: 8px;
  vertical-align: middle
}
.fd-button[dir=rtl]::after,
[class*=fd-button--][dir=rtl]::after,
[dir=rtl] .fd-button::after,
[dir=rtl] [class*=fd-button--]::after {
  margin-left: 0;
  margin-right: 8px
}
.fd-button:empty,
[class*=fd-button--]:empty {
  padding: 0
}
.fd-button:empty::after,
.fd-button:empty::before,
[class*=fd-button--]:empty::after,
[class*=fd-button--]:empty::before {
  margin-right: 0;
  margin-left: 0
}
.fd-button.is-focus,
.fd-button:focus,
[class*=fd-button--].is-focus,
[class*=fd-button--]:focus {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-action-focus);
  box-shadow: 0 0 0 1px var(--fd-color-action-focus)
}
.fd-button .is-hover,
.fd-button:hover,
[class*=fd-button--] .is-hover,
[class*=fd-button--]:hover {
  --fd-button-background-color: var(--fd-color-action-hover);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button .is-hover.is-disabled,
.fd-button .is-hover:disabled,
.fd-button .is-hover[aria-disabled=true],
.fd-button:hover.is-disabled,
.fd-button:hover:disabled,
.fd-button:hover[aria-disabled=true],
[class*=fd-button--] .is-hover.is-disabled,
[class*=fd-button--] .is-hover:disabled,
[class*=fd-button--] .is-hover[aria-disabled=true],
[class*=fd-button--]:hover.is-disabled,
[class*=fd-button--]:hover:disabled,
[class*=fd-button--]:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-background-2);
  --fd-button-color: var(--fd-color-action-1)
}
.fd-button.is-active,
.fd-button.is-pressed,
.fd-button.is-selected,
.fd-button:active,
.fd-button[aria-pressed=true],
.fd-button[aria-selected=true],
[class*=fd-button--].is-active,
[class*=fd-button--].is-pressed,
[class*=fd-button--].is-selected,
[class*=fd-button--]:active,
[class*=fd-button--][aria-pressed=true],
[class*=fd-button--][aria-selected=true] {
  --fd-button-background-color: var(--fd-color-action-selected);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button.is-disabled,
.fd-button:disabled,
.fd-button[aria-disabled=true],
[class*=fd-button--].is-disabled,
[class*=fd-button--]:disabled,
[class*=fd-button--][aria-disabled=true] {
  opacity: .4;
  cursor: not-allowed
}
.fd-button--compact {
  height: var(--fd-forms-height-compact);
  max-height: var(--fd-forms-height-compact);
  min-width: var(--fd-forms-height-compact)
}
@media (min-width:600px) {
  .fd-button--compact {
    min-width: var(--fd-forms-height)
  }
}
.fd-button--emphasized {
  font-weight: 700;
  --fd-button-color: var(--fd-color-action-2);
  --fd-button-border-color: var(--fd-color-action-1);
  --fd-button-background-color: var(--fd-color-action-1)
}
.fd-button--emphasized .is-hover,
.fd-button--emphasized:hover {
  --fd-button-background-color: var(--fd-color-action-hover);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--emphasized .is-hover.is-disabled,
.fd-button--emphasized .is-hover:disabled,
.fd-button--emphasized .is-hover[aria-disabled=true],
.fd-button--emphasized:hover.is-disabled,
.fd-button--emphasized:hover:disabled,
.fd-button--emphasized:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-action-1);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--emphasized.fd-button--medium,
.fd-button--emphasized.fd-button--negative,
.fd-button--emphasized.fd-button--positive,
.fd-button--emphasized.fd-button--standard,
.fd-button-group .fd-button--emphasized.fd-button,
.fd-button-group .fd-button--emphasized[class*=fd-button--] {
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--emphasized.fd-button--medium .is-hover.is-disabled,
.fd-button--emphasized.fd-button--medium .is-hover:disabled,
.fd-button--emphasized.fd-button--medium .is-hover[aria-disabled=true],
.fd-button--emphasized.fd-button--medium:hover.is-disabled,
.fd-button--emphasized.fd-button--medium:hover:disabled,
.fd-button--emphasized.fd-button--medium:hover[aria-disabled=true],
.fd-button--emphasized.fd-button--negative .is-hover.is-disabled,
.fd-button--emphasized.fd-button--negative .is-hover:disabled,
.fd-button--emphasized.fd-button--negative .is-hover[aria-disabled=true],
.fd-button--emphasized.fd-button--negative:hover.is-disabled,
.fd-button--emphasized.fd-button--negative:hover:disabled,
.fd-button--emphasized.fd-button--negative:hover[aria-disabled=true],
.fd-button--emphasized.fd-button--positive .is-hover.is-disabled,
.fd-button--emphasized.fd-button--positive .is-hover:disabled,
.fd-button--emphasized.fd-button--positive .is-hover[aria-disabled=true],
.fd-button--emphasized.fd-button--positive:hover.is-disabled,
.fd-button--emphasized.fd-button--positive:hover:disabled,
.fd-button--emphasized.fd-button--positive:hover[aria-disabled=true],
.fd-button--emphasized.fd-button--standard .is-hover.is-disabled,
.fd-button--emphasized.fd-button--standard .is-hover:disabled,
.fd-button--emphasized.fd-button--standard .is-hover[aria-disabled=true],
.fd-button--emphasized.fd-button--standard:hover.is-disabled,
.fd-button--emphasized.fd-button--standard:hover:disabled,
.fd-button--emphasized.fd-button--standard:hover[aria-disabled=true],
.fd-button-group .fd-button--emphasized.fd-button .is-hover.is-disabled,
.fd-button-group .fd-button--emphasized.fd-button .is-hover:disabled,
.fd-button-group .fd-button--emphasized.fd-button .is-hover[aria-disabled=true],
.fd-button-group .fd-button--emphasized.fd-button:hover.is-disabled,
.fd-button-group .fd-button--emphasized.fd-button:hover:disabled,
.fd-button-group .fd-button--emphasized.fd-button:hover[aria-disabled=true],
.fd-button-group .fd-button--emphasized:hover.is-disabled[class*=fd-button--],
.fd-button-group .fd-button--emphasized:hover:disabled[class*=fd-button--],
.fd-button-group .fd-button--emphasized:hover[aria-disabled=true][class*=fd-button--],
.fd-button-group .fd-button--emphasized[class*=fd-button--] .is-hover.is-disabled,
.fd-button-group .fd-button--emphasized[class*=fd-button--] .is-hover:disabled,
.fd-button-group .fd-button--emphasized[class*=fd-button--] .is-hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--emphasized.fd-button--standard,
.fd-button-group .fd-button--emphasized.fd-button,
.fd-button-group .fd-button--emphasized[class*=fd-button--] {
  --fd-button-border-color: var(--fd-color-status-4);
  --fd-button-background-color: var(--fd-color-status-4)
}
.fd-button--emphasized.fd-button--standard .is-hover.is-disabled,
.fd-button--emphasized.fd-button--standard .is-hover:disabled,
.fd-button--emphasized.fd-button--standard .is-hover[aria-disabled=true],
.fd-button--emphasized.fd-button--standard:hover.is-disabled,
.fd-button--emphasized.fd-button--standard:hover:disabled,
.fd-button--emphasized.fd-button--standard:hover[aria-disabled=true],
.fd-button-group .fd-button--emphasized.fd-button .is-hover.is-disabled,
.fd-button-group .fd-button--emphasized.fd-button .is-hover:disabled,
.fd-button-group .fd-button--emphasized.fd-button .is-hover[aria-disabled=true],
.fd-button-group .fd-button--emphasized.fd-button:hover.is-disabled,
.fd-button-group .fd-button--emphasized.fd-button:hover:disabled,
.fd-button-group .fd-button--emphasized.fd-button:hover[aria-disabled=true],
.fd-button-group .fd-button--emphasized:hover.is-disabled[class*=fd-button--],
.fd-button-group .fd-button--emphasized:hover:disabled[class*=fd-button--],
.fd-button-group .fd-button--emphasized:hover[aria-disabled=true][class*=fd-button--],
.fd-button-group .fd-button--emphasized[class*=fd-button--] .is-hover.is-disabled,
.fd-button-group .fd-button--emphasized[class*=fd-button--] .is-hover:disabled,
.fd-button-group .fd-button--emphasized[class*=fd-button--] .is-hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-status-4)
}
.fd-button--emphasized.fd-button--negative {
  --fd-button-border-color: var(--fd-color-status-3);
  --fd-button-background-color: var(--fd-color-status-3)
}
.fd-button--emphasized.fd-button--negative .is-hover.is-disabled,
.fd-button--emphasized.fd-button--negative .is-hover:disabled,
.fd-button--emphasized.fd-button--negative .is-hover[aria-disabled=true],
.fd-button--emphasized.fd-button--negative:hover.is-disabled,
.fd-button--emphasized.fd-button--negative:hover:disabled,
.fd-button--emphasized.fd-button--negative:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-status-3)
}
.fd-button--emphasized.fd-button--medium {
  --fd-button-border-color: var(--fd-color-status-2);
  --fd-button-background-color: var(--fd-color-status-2)
}
.fd-button--emphasized.fd-button--medium .is-hover.is-disabled,
.fd-button--emphasized.fd-button--medium .is-hover:disabled,
.fd-button--emphasized.fd-button--medium .is-hover[aria-disabled=true],
.fd-button--emphasized.fd-button--medium:hover.is-disabled,
.fd-button--emphasized.fd-button--medium:hover:disabled,
.fd-button--emphasized.fd-button--medium:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-status-2)
}
.fd-button--emphasized.fd-button--positive {
  --fd-button-border-color: var(--fd-color-status-1);
  --fd-button-background-color: var(--fd-color-status-1)
}
.fd-button--emphasized.fd-button--positive .is-hover.is-disabled,
.fd-button--emphasized.fd-button--positive .is-hover:disabled,
.fd-button--emphasized.fd-button--positive .is-hover[aria-disabled=true],
.fd-button--emphasized.fd-button--positive:hover.is-disabled,
.fd-button--emphasized.fd-button--positive:hover:disabled,
.fd-button--emphasized.fd-button--positive:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-status-1)
}
.fd-button--light {
  --fd-button-border-color: transparent;
  --fd-button-background-color: transparent
}
.fd-button--light .is-hover,
.fd-button--light:hover {
  --fd-button-background-color: var(--fd-color-neutral-1);
  --fd-button-color: var(--fd-color-action-1)
}
.fd-button--light .is-hover.is-disabled,
.fd-button--light .is-hover:disabled,
.fd-button--light .is-hover[aria-disabled=true],
.fd-button--light:hover.is-disabled,
.fd-button--light:hover:disabled,
.fd-button--light:hover[aria-disabled=true] {
  --fd-button-background-color: transparent;
  --fd-button-color: var(--fd-color-action-1)
}
.fd-button--light.is-active,
.fd-button--light.is-pressed,
.fd-button--light.is-selected,
.fd-button--light:active,
.fd-button--light[aria-pressed=true],
.fd-button--light[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-action-selected);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--light.fd-button--medium,
.fd-button--light.fd-button--negative,
.fd-button--light.fd-button--positive,
.fd-button--light.fd-button--standard,
.fd-button-group .fd-button--light.fd-button,
.fd-button-group .fd-button--light[class*=fd-button--] {
  --fd-button-border-color: transparent;
  --fd-button-background-color: transparent
}
.fd-button--light.fd-button--medium .is-hover,
.fd-button--light.fd-button--medium:hover,
.fd-button--light.fd-button--negative .is-hover,
.fd-button--light.fd-button--negative:hover,
.fd-button--light.fd-button--positive .is-hover,
.fd-button--light.fd-button--positive:hover,
.fd-button--light.fd-button--standard .is-hover,
.fd-button--light.fd-button--standard:hover,
.fd-button-group .fd-button--light.fd-button .is-hover,
.fd-button-group .fd-button--light.fd-button:hover,
.fd-button-group .fd-button--light:hover[class*=fd-button--],
.fd-button-group .fd-button--light[class*=fd-button--] .is-hover {
  --fd-button-background-color: var(--fd-color-neutral-1)
}
.fd-button--light.fd-button--medium .is-hover.is-disabled,
.fd-button--light.fd-button--medium .is-hover:disabled,
.fd-button--light.fd-button--medium .is-hover[aria-disabled=true],
.fd-button--light.fd-button--medium:hover.is-disabled,
.fd-button--light.fd-button--medium:hover:disabled,
.fd-button--light.fd-button--medium:hover[aria-disabled=true],
.fd-button--light.fd-button--negative .is-hover.is-disabled,
.fd-button--light.fd-button--negative .is-hover:disabled,
.fd-button--light.fd-button--negative .is-hover[aria-disabled=true],
.fd-button--light.fd-button--negative:hover.is-disabled,
.fd-button--light.fd-button--negative:hover:disabled,
.fd-button--light.fd-button--negative:hover[aria-disabled=true],
.fd-button--light.fd-button--positive .is-hover.is-disabled,
.fd-button--light.fd-button--positive .is-hover:disabled,
.fd-button--light.fd-button--positive .is-hover[aria-disabled=true],
.fd-button--light.fd-button--positive:hover.is-disabled,
.fd-button--light.fd-button--positive:hover:disabled,
.fd-button--light.fd-button--positive:hover[aria-disabled=true],
.fd-button--light.fd-button--standard .is-hover.is-disabled,
.fd-button--light.fd-button--standard .is-hover:disabled,
.fd-button--light.fd-button--standard .is-hover[aria-disabled=true],
.fd-button--light.fd-button--standard:hover.is-disabled,
.fd-button--light.fd-button--standard:hover:disabled,
.fd-button--light.fd-button--standard:hover[aria-disabled=true],
.fd-button-group .fd-button--light.fd-button .is-hover.is-disabled,
.fd-button-group .fd-button--light.fd-button .is-hover:disabled,
.fd-button-group .fd-button--light.fd-button .is-hover[aria-disabled=true],
.fd-button-group .fd-button--light.fd-button:hover.is-disabled,
.fd-button-group .fd-button--light.fd-button:hover:disabled,
.fd-button-group .fd-button--light.fd-button:hover[aria-disabled=true],
.fd-button-group .fd-button--light:hover.is-disabled[class*=fd-button--],
.fd-button-group .fd-button--light:hover:disabled[class*=fd-button--],
.fd-button-group .fd-button--light:hover[aria-disabled=true][class*=fd-button--],
.fd-button-group .fd-button--light[class*=fd-button--] .is-hover.is-disabled,
.fd-button-group .fd-button--light[class*=fd-button--] .is-hover:disabled,
.fd-button-group .fd-button--light[class*=fd-button--] .is-hover[aria-disabled=true] {
  --fd-button-background-color: transparent
}
.fd-button--light.fd-button--standard,
.fd-button-group .fd-button--light.fd-button,
.fd-button-group .fd-button--light[class*=fd-button--] {
  --fd-button-color: var(--fd-color-status-4)
}
.fd-button--light.fd-button--standard .is-hover,
.fd-button--light.fd-button--standard:hover,
.fd-button-group .fd-button--light.fd-button .is-hover,
.fd-button-group .fd-button--light.fd-button:hover,
.fd-button-group .fd-button--light:hover[class*=fd-button--],
.fd-button-group .fd-button--light[class*=fd-button--] .is-hover {
  --fd-button-color: var(--fd-color-status-4)
}
.fd-button--light.fd-button--standard .is-hover.is-disabled,
.fd-button--light.fd-button--standard .is-hover:disabled,
.fd-button--light.fd-button--standard .is-hover[aria-disabled=true],
.fd-button--light.fd-button--standard:hover.is-disabled,
.fd-button--light.fd-button--standard:hover:disabled,
.fd-button--light.fd-button--standard:hover[aria-disabled=true],
.fd-button-group .fd-button--light.fd-button .is-hover.is-disabled,
.fd-button-group .fd-button--light.fd-button .is-hover:disabled,
.fd-button-group .fd-button--light.fd-button .is-hover[aria-disabled=true],
.fd-button-group .fd-button--light.fd-button:hover.is-disabled,
.fd-button-group .fd-button--light.fd-button:hover:disabled,
.fd-button-group .fd-button--light.fd-button:hover[aria-disabled=true],
.fd-button-group .fd-button--light:hover.is-disabled[class*=fd-button--],
.fd-button-group .fd-button--light:hover:disabled[class*=fd-button--],
.fd-button-group .fd-button--light:hover[aria-disabled=true][class*=fd-button--],
.fd-button-group .fd-button--light[class*=fd-button--] .is-hover.is-disabled,
.fd-button-group .fd-button--light[class*=fd-button--] .is-hover:disabled,
.fd-button-group .fd-button--light[class*=fd-button--] .is-hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-status-4)
}
.fd-button--light.fd-button--standard.is-active,
.fd-button--light.fd-button--standard.is-pressed,
.fd-button--light.fd-button--standard.is-selected,
.fd-button--light.fd-button--standard:active,
.fd-button--light.fd-button--standard[aria-pressed=true],
.fd-button--light.fd-button--standard[aria-selected=true],
.fd-button-group .fd-button--light.fd-button:active,
.fd-button-group .fd-button--light.fd-button[aria-pressed=true],
.fd-button-group .fd-button--light.fd-button[aria-selected=true],
.fd-button-group .fd-button--light.is-active.fd-button,
.fd-button-group .fd-button--light.is-active[class*=fd-button--],
.fd-button-group .fd-button--light.is-pressed.fd-button,
.fd-button-group .fd-button--light.is-pressed[class*=fd-button--],
.fd-button-group .fd-button--light.is-selected.fd-button,
.fd-button-group .fd-button--light.is-selected[class*=fd-button--],
.fd-button-group .fd-button--light:active[class*=fd-button--],
.fd-button-group .fd-button--light[aria-pressed=true][class*=fd-button--],
.fd-button-group .fd-button--light[aria-selected=true][class*=fd-button--] {
  --fd-button-background-color: var(--fd-color-status-4);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--light.fd-button--negative {
  --fd-button-color: var(--fd-color-status-3)
}
.fd-button--light.fd-button--negative .is-hover,
.fd-button--light.fd-button--negative:hover {
  --fd-button-color: var(--fd-color-status-3)
}
.fd-button--light.fd-button--negative .is-hover.is-disabled,
.fd-button--light.fd-button--negative .is-hover:disabled,
.fd-button--light.fd-button--negative .is-hover[aria-disabled=true],
.fd-button--light.fd-button--negative:hover.is-disabled,
.fd-button--light.fd-button--negative:hover:disabled,
.fd-button--light.fd-button--negative:hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-status-3)
}
.fd-button--light.fd-button--negative.is-active,
.fd-button--light.fd-button--negative.is-pressed,
.fd-button--light.fd-button--negative.is-selected,
.fd-button--light.fd-button--negative:active,
.fd-button--light.fd-button--negative[aria-pressed=true],
.fd-button--light.fd-button--negative[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-status-3);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--light.fd-button--positive {
  --fd-button-color: var(--fd-color-status-1)
}
.fd-button--light.fd-button--positive .is-hover,
.fd-button--light.fd-button--positive:hover {
  --fd-button-color: var(--fd-color-status-1)
}
.fd-button--light.fd-button--positive .is-hover.is-disabled,
.fd-button--light.fd-button--positive .is-hover:disabled,
.fd-button--light.fd-button--positive .is-hover[aria-disabled=true],
.fd-button--light.fd-button--positive:hover.is-disabled,
.fd-button--light.fd-button--positive:hover:disabled,
.fd-button--light.fd-button--positive:hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-status-1)
}
.fd-button--light.fd-button--positive.is-active,
.fd-button--light.fd-button--positive.is-pressed,
.fd-button--light.fd-button--positive.is-selected,
.fd-button--light.fd-button--positive:active,
.fd-button--light.fd-button--positive[aria-pressed=true],
.fd-button--light.fd-button--positive[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-status-1);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--light.fd-button--medium {
  --fd-button-color: var(--fd-color-status-2)
}
.fd-button--light.fd-button--medium .is-hover,
.fd-button--light.fd-button--medium:hover {
  --fd-button-color: var(--fd-color-status-2)
}
.fd-button--light.fd-button--medium .is-hover.is-disabled,
.fd-button--light.fd-button--medium .is-hover:disabled,
.fd-button--light.fd-button--medium .is-hover[aria-disabled=true],
.fd-button--light.fd-button--medium:hover.is-disabled,
.fd-button--light.fd-button--medium:hover:disabled,
.fd-button--light.fd-button--medium:hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-status-2)
}
.fd-button--light.fd-button--medium.is-active,
.fd-button--light.fd-button--medium.is-pressed,
.fd-button--light.fd-button--medium.is-selected,
.fd-button--light.fd-button--medium:active,
.fd-button--light.fd-button--medium[aria-pressed=true],
.fd-button--light.fd-button--medium[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-status-2);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--medium,
.fd-button--negative,
.fd-button--positive,
.fd-button--standard,
.fd-button-group .fd-button,
.fd-button-group [class*=fd-button--] {
  --fd-button-background-color: var(--fd-color-background-2)
}
.fd-button--medium .is-hover,
.fd-button--medium:hover,
.fd-button--negative .is-hover,
.fd-button--negative:hover,
.fd-button--positive .is-hover,
.fd-button--positive:hover,
.fd-button--standard .is-hover,
.fd-button--standard:hover,
.fd-button-group .fd-button .is-hover,
.fd-button-group .fd-button:hover,
.fd-button-group :hover[class*=fd-button--],
.fd-button-group [class*=fd-button--] .is-hover {
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--medium.is-active,
.fd-button--medium.is-pressed,
.fd-button--medium.is-selected,
.fd-button--medium:active,
.fd-button--medium[aria-pressed=true],
.fd-button--medium[aria-selected=true],
.fd-button--negative.is-active,
.fd-button--negative.is-pressed,
.fd-button--negative.is-selected,
.fd-button--negative:active,
.fd-button--negative[aria-pressed=true],
.fd-button--negative[aria-selected=true],
.fd-button--positive.is-active,
.fd-button--positive.is-pressed,
.fd-button--positive.is-selected,
.fd-button--positive:active,
.fd-button--positive[aria-pressed=true],
.fd-button--positive[aria-selected=true],
.fd-button--standard.is-active,
.fd-button--standard.is-pressed,
.fd-button--standard.is-selected,
.fd-button--standard:active,
.fd-button--standard[aria-pressed=true],
.fd-button--standard[aria-selected=true],
.fd-button-group .fd-button:active,
.fd-button-group .fd-button[aria-pressed=true],
.fd-button-group .fd-button[aria-selected=true],
.fd-button-group .is-active.fd-button,
.fd-button-group .is-active[class*=fd-button--],
.fd-button-group .is-pressed.fd-button,
.fd-button-group .is-pressed[class*=fd-button--],
.fd-button-group .is-selected.fd-button,
.fd-button-group .is-selected[class*=fd-button--],
.fd-button-group :active[class*=fd-button--],
.fd-button-group [aria-pressed=true][class*=fd-button--],
.fd-button-group [aria-selected=true][class*=fd-button--] {
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--standard,
.fd-button-group .fd-button,
.fd-button-group [class*=fd-button--] {
  --fd-button-color: var(--fd-color-status-4);
  --fd-button-border-color: var(--fd-color-status-4)
}
.fd-button--standard.is-focus,
.fd-button--standard:focus,
.fd-button-group .fd-button:focus,
.fd-button-group .is-focus.fd-button,
.fd-button-group .is-focus[class*=fd-button--],
.fd-button-group :focus[class*=fd-button--] {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-status-4);
  box-shadow: 0 0 0 1px var(--fd-color-status-4)
}
.fd-button--standard .is-hover,
.fd-button--standard:hover,
.fd-button-group .fd-button .is-hover,
.fd-button-group .fd-button:hover,
.fd-button-group :hover[class*=fd-button--],
.fd-button-group [class*=fd-button--] .is-hover {
  --fd-button-color: var(--fd-color-action-2);
  --fd-button-background-color: var(--fd-color-status-4)
}
.fd-button--standard .is-hover.is-disabled,
.fd-button--standard .is-hover:disabled,
.fd-button--standard .is-hover[aria-disabled=true],
.fd-button--standard:hover.is-disabled,
.fd-button--standard:hover:disabled,
.fd-button--standard:hover[aria-disabled=true],
.fd-button-group .fd-button .is-hover.is-disabled,
.fd-button-group .fd-button .is-hover:disabled,
.fd-button-group .fd-button .is-hover[aria-disabled=true],
.fd-button-group .fd-button:hover.is-disabled,
.fd-button-group .fd-button:hover:disabled,
.fd-button-group .fd-button:hover[aria-disabled=true],
.fd-button-group :hover.is-disabled[class*=fd-button--],
.fd-button-group :hover:disabled[class*=fd-button--],
.fd-button-group :hover[aria-disabled=true][class*=fd-button--],
.fd-button-group [class*=fd-button--] .is-hover.is-disabled,
.fd-button-group [class*=fd-button--] .is-hover:disabled,
.fd-button-group [class*=fd-button--] .is-hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-status-4)
}
.fd-button--standard.is-active,
.fd-button--standard.is-pressed,
.fd-button--standard.is-selected,
.fd-button--standard:active,
.fd-button--standard[aria-pressed=true],
.fd-button--standard[aria-selected=true],
.fd-button-group .fd-button:active,
.fd-button-group .fd-button[aria-pressed=true],
.fd-button-group .fd-button[aria-selected=true],
.fd-button-group .is-active.fd-button,
.fd-button-group .is-active[class*=fd-button--],
.fd-button-group .is-pressed.fd-button,
.fd-button-group .is-pressed[class*=fd-button--],
.fd-button-group .is-selected.fd-button,
.fd-button-group .is-selected[class*=fd-button--],
.fd-button-group :active[class*=fd-button--],
.fd-button-group [aria-pressed=true][class*=fd-button--],
.fd-button-group [aria-selected=true][class*=fd-button--] {
  --fd-button-background-color: var(--fd-color-status-4)
}
.fd-button--positive {
  --fd-button-color: var(--fd-color-status-1);
  --fd-button-border-color: var(--fd-color-status-1)
}
.fd-button--positive.is-focus,
.fd-button--positive:focus {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-status-1);
  box-shadow: 0 0 0 1px var(--fd-color-status-1)
}
.fd-button--positive .is-hover,
.fd-button--positive:hover {
  --fd-button-background-color: var(--fd-color-status-1)
}
.fd-button--positive .is-hover.is-disabled,
.fd-button--positive .is-hover:disabled,
.fd-button--positive .is-hover[aria-disabled=true],
.fd-button--positive:hover.is-disabled,
.fd-button--positive:hover:disabled,
.fd-button--positive:hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-status-1)
}
.fd-button--positive.is-active,
.fd-button--positive.is-pressed,
.fd-button--positive.is-selected,
.fd-button--positive:active,
.fd-button--positive[aria-pressed=true],
.fd-button--positive[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-status-1)
}
.fd-button--medium {
  --fd-button-color: var(--fd-color-status-2);
  --fd-button-border-color: var(--fd-color-status-2)
}
.fd-button--medium.is-focus,
.fd-button--medium:focus {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-status-2);
  box-shadow: 0 0 0 1px var(--fd-color-status-2)
}
.fd-button--medium .is-hover,
.fd-button--medium:hover {
  --fd-button-background-color: var(--fd-color-status-2)
}
.fd-button--medium .is-hover.is-disabled,
.fd-button--medium .is-hover:disabled,
.fd-button--medium .is-hover[aria-disabled=true],
.fd-button--medium:hover.is-disabled,
.fd-button--medium:hover:disabled,
.fd-button--medium:hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-status-2)
}
.fd-button--medium.is-active,
.fd-button--medium.is-pressed,
.fd-button--medium.is-selected,
.fd-button--medium:active,
.fd-button--medium[aria-pressed=true],
.fd-button--medium[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-status-2)
}
.fd-button--negative {
  --fd-button-color: var(--fd-color-status-3);
  --fd-button-border-color: var(--fd-color-status-3)
}
.fd-button--negative.is-focus,
.fd-button--negative:focus {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-status-3);
  box-shadow: 0 0 0 1px var(--fd-color-status-3)
}
.fd-button--negative .is-hover,
.fd-button--negative:hover {
  --fd-button-background-color: var(--fd-color-status-3)
}
.fd-button--negative .is-hover.is-disabled,
.fd-button--negative .is-hover:disabled,
.fd-button--negative .is-hover[aria-disabled=true],
.fd-button--negative:hover.is-disabled,
.fd-button--negative:hover:disabled,
.fd-button--negative:hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-status-3)
}
.fd-button--negative.is-active,
.fd-button--negative.is-pressed,
.fd-button--negative.is-selected,
.fd-button--negative:active,
.fd-button--negative[aria-pressed=true],
.fd-button--negative[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-status-3)
}
.fd-button--shell {
  --fd-button-color: var(--fd-color-shell-2);
  --fd-button-border-color: transparent;
  --fd-button-background-color: transparent
}
.fd-button--shell[class*=sap-icon] {
  padding: 0
}
.fd-button--shell[class*=sap-icon]::after,
.fd-button--shell[class*=sap-icon]::before {
  margin-right: 0;
  margin-left: 0
}
.fd-button--shell:focus {
  -webkit-box-shadow: none;
  box-shadow: none
}
.fd-button--shell .is-hover,
.fd-button--shell:hover {
  --fd-button-color: var(--fd-color-shell-2);
  --fd-button-border-color: transparent;
  --fd-button-background-color: hsl(217, 21%, 25%)
}
.fd-button--shell .is-hover.is-disabled,
.fd-button--shell .is-hover:disabled,
.fd-button--shell .is-hover[aria-disabled=true],
.fd-button--shell:hover.is-disabled,
.fd-button--shell:hover:disabled,
.fd-button--shell:hover[aria-disabled=true] {
  --fd-button-color: var(--fd-color-shell-2);
  --fd-button-background-color: transparent
}
.fd-button--shell.is-active,
.fd-button--shell.is-pressed,
.fd-button--shell.is-selected,
.fd-button--shell:active,
.fd-button--shell[aria-pressed=true],
.fd-button--shell[aria-selected=true] {
  --fd-button-color: var(--fd-color-shell-2);
  --fd-button-border-color: transparent;
  --fd-button-background-color: hsl(217, 21%, 21%)
}
.fd-button--xs {
  font-size: .85714rem;
  line-height: 1.33333;
  font-weight: 400;
  height: 24px;
  max-height: 24px;
  min-width: 24px;
  line-height: 1;
  padding-left: 8px;
  padding-right: 8px
}
.fd-button--xs::before {
  font-size: .85714rem;
  line-height: 1
}
.fd-button--xs::after {
  font-size: .85714rem;
  line-height: 1
}
.fd-button--xs::after,
.fd-button--xs::before {
  vertical-align: baseline
}
.fd-button--xs::after {
  font-size: 14px;
  line-height: 1.42857
}
.fd-button--s {
  font-size: 1rem;
  line-height: 1.42857;
  font-weight: 400;
  height: 28px;
  max-height: 28px;
  min-width: 28px;
  line-height: 1
}
.fd-button--s::before {
  font-size: 1.14286rem;
  line-height: 1
}
.fd-button--s::after {
  font-size: 1.14286rem;
  line-height: 1
}
.fd-button--s::after {
  font-size: 14px;
  line-height: 1.42857
}
.fd-button--l {
  font-size: 1rem;
  line-height: 1.42857;
  font-weight: 400;
  height: 40px;
  max-height: 40px;
  min-width: 40px;
  line-height: 1;
  padding-left: 12px;
  padding-right: 12px
}
.fd-button--l::before {
  font-size: 1.42857rem;
  line-height: 1
}
.fd-button--l::after {
  font-size: 1.42857rem;
  line-height: 1
}
.fd-button--action-bar,
.fd-button--main {
  --fd-button-color: var(--fd-color-action-2);
  --fd-button-border-color: var(--fd-color-action-1);
  --fd-button-background-color: var(--fd-color-action-1)
}
.fd-button--action-bar .is-hover,
.fd-button--action-bar:hover,
.fd-button--main .is-hover,
.fd-button--main:hover {
  --fd-button-background-color: var(--fd-color-action-hover);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--action-bar .is-hover.is-disabled,
.fd-button--action-bar .is-hover:disabled,
.fd-button--action-bar .is-hover[aria-disabled=true],
.fd-button--action-bar:hover.is-disabled,
.fd-button--action-bar:hover:disabled,
.fd-button--action-bar:hover[aria-disabled=true],
.fd-button--main .is-hover.is-disabled,
.fd-button--main .is-hover:disabled,
.fd-button--main .is-hover[aria-disabled=true],
.fd-button--main:hover.is-disabled,
.fd-button--main:hover:disabled,
.fd-button--main:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-action-1);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--action-bar.fd-button--negative,
.fd-button--main.fd-button--negative {
  --fd-button-color: var(--fd-color-action-2);
  --fd-button-border-color: var(--fd-color-status-3);
  --fd-button-background-color: var(--fd-color-status-3)
}
.fd-button--action-bar.fd-button--negative .is-hover.is-disabled,
.fd-button--action-bar.fd-button--negative .is-hover:disabled,
.fd-button--action-bar.fd-button--negative .is-hover[aria-disabled=true],
.fd-button--action-bar.fd-button--negative:hover.is-disabled,
.fd-button--action-bar.fd-button--negative:hover:disabled,
.fd-button--action-bar.fd-button--negative:hover[aria-disabled=true],
.fd-button--main.fd-button--negative .is-hover.is-disabled,
.fd-button--main.fd-button--negative .is-hover:disabled,
.fd-button--main.fd-button--negative .is-hover[aria-disabled=true],
.fd-button--main.fd-button--negative:hover.is-disabled,
.fd-button--main.fd-button--negative:hover:disabled,
.fd-button--main.fd-button--negative:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-status-3);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--action-bar.fd-button--positive,
.fd-button--main.fd-button--positive {
  --fd-button-color: var(--fd-color-action-2);
  --fd-button-border-color: var(--fd-color-status-1);
  --fd-button-background-color: var(--fd-color-status-1)
}
.fd-button--action-bar.fd-button--positive .is-hover.is-disabled,
.fd-button--action-bar.fd-button--positive .is-hover:disabled,
.fd-button--action-bar.fd-button--positive .is-hover[aria-disabled=true],
.fd-button--action-bar.fd-button--positive:hover.is-disabled,
.fd-button--action-bar.fd-button--positive:hover:disabled,
.fd-button--action-bar.fd-button--positive:hover[aria-disabled=true],
.fd-button--main.fd-button--positive .is-hover.is-disabled,
.fd-button--main.fd-button--positive .is-hover:disabled,
.fd-button--main.fd-button--positive .is-hover[aria-disabled=true],
.fd-button--main.fd-button--positive:hover.is-disabled,
.fd-button--main.fd-button--positive:hover:disabled,
.fd-button--main.fd-button--positive:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-status-1);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--secondary {
  --fd-button-border-color: transparent
}
.fd-button--secondary .is-hover,
.fd-button--secondary:hover {
  --fd-button-background-color: var(--fd-color-neutral-1);
  --fd-button-color: var(--fd-color-action-1)
}
.fd-button--secondary .is-hover.is-disabled,
.fd-button--secondary .is-hover:disabled,
.fd-button--secondary .is-hover[aria-disabled=true],
.fd-button--secondary:hover.is-disabled,
.fd-button--secondary:hover:disabled,
.fd-button--secondary:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-background-2);
  --fd-button-color: var(--fd-color-action-1)
}
.fd-button--secondary.is-active,
.fd-button--secondary.is-pressed,
.fd-button--secondary.is-selected,
.fd-button--secondary:active,
.fd-button--secondary[aria-pressed=true],
.fd-button--secondary[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-action-selected);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--secondary.fd-button--negative {
  --fd-button-color: var(--fd-color-status-3);
  --fd-button-border-color: transparent;
  --fd-button-background-color: transparent
}
.fd-button--secondary.fd-button--negative .is-hover,
.fd-button--secondary.fd-button--negative:hover {
  --fd-button-background-color: var(--fd-color-neutral-1);
  --fd-button-color: var(--fd-color-status-3)
}
.fd-button--secondary.fd-button--negative .is-hover.is-disabled,
.fd-button--secondary.fd-button--negative .is-hover:disabled,
.fd-button--secondary.fd-button--negative .is-hover[aria-disabled=true],
.fd-button--secondary.fd-button--negative:hover.is-disabled,
.fd-button--secondary.fd-button--negative:hover:disabled,
.fd-button--secondary.fd-button--negative:hover[aria-disabled=true] {
  --fd-button-background-color: transparent;
  --fd-button-color: var(--fd-color-status-3)
}
.fd-button--secondary.fd-button--negative.is-active,
.fd-button--secondary.fd-button--negative.is-pressed,
.fd-button--secondary.fd-button--negative.is-selected,
.fd-button--secondary.fd-button--negative:active,
.fd-button--secondary.fd-button--negative[aria-pressed=true],
.fd-button--secondary.fd-button--negative[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-status-3);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--secondary.fd-button--positive {
  --fd-button-color: var(--fd-color-status-1);
  --fd-button-border-color: transparent;
  --fd-button-background-color: transparent
}
.fd-button--secondary.fd-button--positive .is-hover,
.fd-button--secondary.fd-button--positive:hover {
  --fd-button-background-color: var(--fd-color-neutral-1);
  --fd-button-color: var(--fd-color-status-1)
}
.fd-button--secondary.fd-button--positive .is-hover.is-disabled,
.fd-button--secondary.fd-button--positive .is-hover:disabled,
.fd-button--secondary.fd-button--positive .is-hover[aria-disabled=true],
.fd-button--secondary.fd-button--positive:hover.is-disabled,
.fd-button--secondary.fd-button--positive:hover:disabled,
.fd-button--secondary.fd-button--positive:hover[aria-disabled=true] {
  --fd-button-background-color: transparent;
  --fd-button-color: var(--fd-color-status-1)
}
.fd-button--secondary.fd-button--positive.is-active,
.fd-button--secondary.fd-button--positive.is-pressed,
.fd-button--secondary.fd-button--positive.is-selected,
.fd-button--secondary.fd-button--positive:active,
.fd-button--secondary.fd-button--positive[aria-pressed=true],
.fd-button--secondary.fd-button--positive[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-status-1);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--toolbar {
  --fd-button-color: var(--fd-color-text-2);
  --fd-button-border-color: var(--fd-color-neutral-3);
  --fd-button-background-color: var(--fd-color-neutral-1)
}
.fd-button--toolbar.is-focus,
.fd-button--toolbar:focus {
  -webkit-box-shadow: 0 0 0 1px var(--fd-color-neutral-3);
  box-shadow: 0 0 0 1px var(--fd-color-neutral-3)
}
.fd-button--toolbar.is-active,
.fd-button--toolbar.is-pressed,
.fd-button--toolbar.is-selected,
.fd-button--toolbar:active,
.fd-button--toolbar[aria-pressed=true],
.fd-button--toolbar[aria-selected=true] {
  --fd-button-background-color: var(--fd-color-action-selected);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--toolbar .is-hover,
.fd-button--toolbar:hover {
  --fd-button-background-color: var(--fd-color-action-hover);
  --fd-button-color: var(--fd-color-action-2)
}
.fd-button--toolbar .is-hover.is-disabled,
.fd-button--toolbar .is-hover:disabled,
.fd-button--toolbar .is-hover[aria-disabled=true],
.fd-button--toolbar:hover.is-disabled,
.fd-button--toolbar:hover:disabled,
.fd-button--toolbar:hover[aria-disabled=true] {
  --fd-button-background-color: var(--fd-color-neutral-3);
  --fd-button-color: var(--fd-color-text-2)
}
`
export default styles
