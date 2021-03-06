import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addBooleanParameter(this, 'compact');
    addBooleanParameter(this, 'disabled');
    addDefaultParameter(this, 'placement', (this.tile) ? 'end' : 'start');
  }

  $postLink() {
    this.$timeout(() => this.$element
      .removeAttr('aria-label'));
  }
}
