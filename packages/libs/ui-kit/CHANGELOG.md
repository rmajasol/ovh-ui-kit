## [3.0.3](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.2...v3.0.3) (2019-05-13)


### Bug Fixes

* **clipboard:** set button type ([#397](https://github.com/ovh-ux/ovh-ui-kit/issues/397)) ([a87f98a](https://github.com/ovh-ux/ovh-ui-kit/commit/a87f98a))



## [3.0.1](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0...v3.0.1) (2019-04-26)


### Bug Fixes

* **button:** fix arrows button icon ([1460f96](https://github.com/ovh-ux/ovh-ui-kit/commit/1460f96))
* **calendar:** fix disabled state on alt input ([85ae5a0](https://github.com/ovh-ux/ovh-ui-kit/commit/85ae5a0))
* **file:** fix disabled state for multiple and droparea ([a303af5](https://github.com/ovh-ux/ovh-ui-kit/commit/a303af5))
* **file:** fix loading in preview mode ([8033343](https://github.com/ovh-ux/ovh-ui-kit/commit/8033343))



# [3.0.0](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.9...v3.0.0) (2019-04-25)


### Bug Fixes

* **icons:** fix circle icon size ([148fd36](https://github.com/ovh-ux/ovh-ui-kit/commit/148fd36))


### Documentation

* **readme:** remove deprecated link to ovh-ui-kit-documentation ([#390](https://github.com/ovh-ux/ovh-ui-kit/issues/390)) ([61c92be](https://github.com/ovh-ux/ovh-ui-kit/commit/61c92be))


### BREAKING CHANGES

* **readme:** module is now named as `@ovh-ux/ui-kit`

  ## Project

  * Package name has been renamed to `@ovh-ux/ui-kit`.
  * Files from `ovh-ui-angular` has been moved and merged in this 
repository. No need to use `ovh-ui-angular` anymore.
  * Files from `ovh-ui-kit-documentation` has been moved and merged in 
this repository. No need to use `ovh-ui-kit-documentation` anymore.
  * Drop of bower support.

  ## Components

  * __oui-formfield__: Deprecated component. Use `oui-field` instead.
  * __oui-popover__: Deprecated component. Use `oui-popover` directive 
instead.
  * __oui-tip__: Deprecated component. Use `oui-popover` instead.

  ### Tagnames changes

  * __extra-top__: Renamed to `oui-datagrid-topbar`.
  * __oui-column__: Renamed to `oui-datagrid-column`.
  * __oui-criteria-container__: Renamed to `oui-criteria`.
  * __oui-page-header__: Renamed to `oui-header`.

  ### Attributes changes

  * __oui-action-menu__: Attribute `align` renamed to `placement`.
  * __oui-action-menu__: Attribute `placement` is set to `start` by 
default.
  * __oui-action-menu-item__: Attribute `text` replaced by transclude 
value.
  * __oui-back-button__: Attributes `heading` and `title` replaced by 
transclude value.
  * __oui-button__: Attribute `text` replaced by transclude value.
  * __oui-checkbox__: Attribute `text` replaced by transclude value.
  * __oui-criteria-adder__: Attribute `align` renamed to `placement`.
  * __oui-dropdown__: Attribute `align` renamed to `placement`.
  * __oui-dropdown-item__: Attribute `text` replaced by transclude 
value.
  * __oui-guide-menu__: Attribute `align` renamed to `placement`.
  * __oui-guide-menu__: Attribute `placement` is set to `start` by 
default.
  * __oui-guide-menu-item__: Attribute `text` replaced by transclude 
value.
  * __oui-message__: Attribute `dismissable` is set to `false` by 
default for all types.
  * __oui-message__: Attribute `on-dismissed` renamed to `on-dismiss`.
  * __oui-modal__: Attribute `title` renamed to `heading`.
  * __oui-navbar-dropdown-menu__: Attribute `align` renamed to 
`placement`.
  * __oui-navbar-link__: Attribute `text` replaced by transclude value.
  * __oui-navbar-menu__: Attribute `align` renamed to `placement`.
  * __oui-navbar-notification__: Attribute `align` renamed to 
`placement`.
  * __oui-progress-bar__: Attribute `text` replaced by transclude value.
  * __oui-radio__: Attribute `text` replaced by transclude value.
  * __oui-select__: Unused `align` attribute removed.
  * __oui-select-picker__: Attribute `text` renamed to `label`.
  * __oui-select-picker__: Remove deprecated `span` tag as transclude 
slot. Use `oui-select-picker-section` tag instead.
  * __oui-slideshow-panel__: Attribute `text` replaced by transclude 
value.
  * __oui-tile-button__: Attribute `text` replaced by transclude value.

  ## Modules

  * __oui.criteria-adder__: Module has been removed. Use `oui.criteria` 
instead.
  * __oui.criteria-container__: Module has been renamed to 
`oui.criteria`.
  * __oui-header-tabs__: Module has been removed. Use `oui.header` 
instead.
  * __oui.page-header__: Module has been renamed to `oui.header`.

  ## Styles

  ### Classnames has been renamed

  * __oui-header__: Renamed to `.oui-heading`.
  * __oui-page-header__: Renamed to `.oui-header`.
  * __oui-datagrid-topbar__: Renamed to `.oui-criteria`.

  ### Component margin has been removed

  * oui-action-menu
  * oui-button
  * oui-button-group
  * oui-calendar
  * oui-clipboad
  * oui-checkbox
  * oui-dropdown
  * oui-file
  * oui-guide-menu
  * oui-input
  * oui-input-group
  * oui-numeric
  * oui-radio
  * oui-search
  * oui-select
  * oui-textarea
  * oui-timepicker

  ### Component margin has been added

  * oui-criteria
  * oui-dual-list
  * oui-header
  * oui-slideshow
  * oui-tabs

  ### Deprecated style has been removed

  * __oui-color-badge__: Used only for the documentation.
  * __oui-formfield__: Use `oui-field` instead.
  * __oui-icon-badge__: Used only for the documentation.
  * __oui-input-group_clipboard__: Use `.oui-clipboard` instead. This 
classname extend `.oui-input-group`.
  * __oui-list_steps__: Not used anymore
  * __oui-input-group_numeric__: Use `.oui-numeric` instead. This 
classname extend `.oui-input-group`.
  * __oui-input-group_search__: Use `.oui-search` instead. This 
classname extend `.oui-input-group`.

  ### Deprecated mixins has been removed

  * __oui-action-menu__:
    * action-menu-base
    * action-menu-button
    * action-menu-button_active
    * action-menu-item-base
    * action-menu-item-divider-base
  * __oui-back-button__:
    * back-button-base
  * __oui-box__:
    * box-base
    * box-light
  * __oui-button__:
    * button-base
    * button-action-menu
    * button-action-menu-compact
    * button-dropdown
    * button-dropdown-error
    * button-full-width
    * button-full-width-icon-left
    * button-full-width-icon-right
    * button-icon-alone
    * button-icon-base
    * button-icon-left
    * button-icon-right
    * button-link
    * button-normalize
    * button-small-width
    * button-large-height
  * __oui-button-group__:
    * button-group-base
  * __oui-checkbox__:
    * checkbox-normalize
  * __oui-dropdown__:
    * dropdown-base
  * __oui-field__:
    * field-sizes
  * __oui-icon__:
    * icon-bicolor
    * icon-circle
  * __oui-input-group__:
    * input-group-base
    * input-group-button
    * input-group-inline
    * input-group-numeric
    * input-group-search
  * __oui-label__:
    * label-base
  * __oui-list__:
    * list-steps
  * __oui-navbar__:
    * navbar
    * navbar-backdrop
    * navbar-helpers
    * navbar-link_external
    * navbar-link_menu
    * navbar-menu
    * navbar-menu_fixed
    * navbar-menu-animation_opacity
    * navbar-toggler
  * __oui-progress__:
    * progress
    * progress-bar
    * progress-bar-base
    * progress-bar-label
    * progress-bar-indeterminate
    * progress-bar-text-left
    * progress-bar-threshold
    * progress-base
    * progress-indeterminate
    * progress-normalize
  * __oui-radio__:
    * radio-normalize
  * __oui-select-picker__:
    * select-picker-normalize
  * __oui-spinner__:
    * spinner-base
    * spinner-s
    * spinner-m
    * spinner-l
  * __oui-tooltip__:
    * tooltip
    * tooltip-normalize
  * __oui-typography__:
    * headers
    * header-underline
    * horizontal-line-base
    * horizontal-line-dark
    * horizontal-line-thin
    * link-icon
  * __oui-ui-select__:
    * ui-select-container-base
    * ui-select-container-error-style
    * ui-select-choices-container-base
    * ui-select-choices-row-base
    * ui-select-normalize



# [3.0.0-rc.9](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.8...v3.0.0-rc.9) (2019-04-24)



# [3.0.0-rc.8](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.7...v3.0.0-rc.8) (2019-04-24)



# [3.0.0-rc.7](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.6...v3.0.0-rc.7) (2019-04-24)



# [3.0.0-rc.6](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.5...v3.0.0-rc.6) (2019-04-23)


### Bug Fixes

* **icons:** remove fixed colors and size ([7c3ac90](https://github.com/ovh-ux/ovh-ui-kit/commit/7c3ac90))


### Features

* **datagrid:** add page change event ([5486950](https://github.com/ovh-ux/ovh-ui-kit/commit/5486950))
* **icons:** add guides icon ([1eed018](https://github.com/ovh-ux/ovh-ui-kit/commit/1eed018))
* **password:** add confirm attribute ([1cab076](https://github.com/ovh-ux/ovh-ui-kit/commit/1cab076))
* **stepper:** add ability to change the current index ([40b92bd](https://github.com/ovh-ux/ovh-ui-kit/commit/40b92bd))



# [3.0.0-rc.5](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.4...v3.0.0-rc.5) (2019-04-18)


### Bug Fixes

* **action-menu:** set default attributes when used in datagrid ([ed465a8](https://github.com/ovh-ux/ovh-ui-kit/commit/ed465a8))
* **datagrid:** add default column type to string ([e8e4092](https://github.com/ovh-ux/ovh-ui-kit/commit/e8e4092))



# [3.0.0-rc.4](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.3...v3.0.0-rc.4) (2019-04-16)


### Features

* add css file with rem base 10px ([178acc9](https://github.com/ovh-ux/ovh-ui-kit/commit/178acc9))



# [3.0.0-rc.3](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.2...v3.0.0-rc.3) (2019-04-12)


### Bug Fixes

* **less:** fix imports in generated dist files ([1161031](https://github.com/ovh-ux/ovh-ui-kit/commit/1161031))
* **modal:** fix transclude loading by using ng-show ([eccfde3](https://github.com/ovh-ux/ovh-ui-kit/commit/eccfde3))



# [3.0.0-rc.2](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.1...v3.0.0-rc.2) (2019-04-11)


### Bug Fixes

* **radio:** fix wrong font-size for m-thumbnail ([e29e9ee](https://github.com/ovh-ux/ovh-ui-kit/commit/e29e9ee))


### Features

* add legacy icons from ovh-manager-webfont ([#367](https://github.com/ovh-ux/ovh-ui-kit/issues/367)) ([21a7a58](https://github.com/ovh-ux/ovh-ui-kit/commit/21a7a58))



# [3.0.0-rc.1](https://github.com/ovh-ux/ovh-ui-kit/compare/v3.0.0-rc.0...v3.0.0-rc.1) (2019-04-10)



# [3.0.0-rc.0](https://github.com/ovh-ux/ovh-ui-kit/compare/v2.29.0...v3.0.0-rc.0) (2019-04-09)


### Performance Improvements

* remove deprecated attributes ([89a2e65](https://github.com/ovh-ux/ovh-ui-kit/commit/89a2e65))
* remove deprecated components ([bf24f0d](https://github.com/ovh-ux/ovh-ui-kit/commit/bf24f0d))
* remove deprecated imports ([c80fbe0](https://github.com/ovh-ux/ovh-ui-kit/commit/c80fbe0))
* remove deprecated styles ([17eac47](https://github.com/ovh-ux/ovh-ui-kit/commit/17eac47))



