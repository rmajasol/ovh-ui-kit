import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

const moduleName = 'oui-checkbox-stories';
angular.module(moduleName, [
  'oui.checkbox',

  // For examples
  'oui.field',
  'oui.radio',
]);

storiesOf('Components/Checkbox', module)
  .add(
    'Simple checkbox',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-checkbox
      aria-label="Allow ponies in your server"
      model="$ctrl.model2"
      on-change="$ctrl.onChange(modelValue)">
      Allow ponies in your server
    </oui-checkbox>

    <oui-checkbox
      aria-label="Track ponies"
      model="$ctrl.model3"
      on-change="$ctrl.onChange(modelValue)">
      Track ponies
    </oui-checkbox>
    `, {
      $ctrl: {
        onChange: action('onChange'),
      },
    })),
  )
  .add(
    'Enabling content with checkboxes',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-checkbox aria-label="Enable rainbows" model="$ctrl.checked">Enable rainbows</oui-checkbox>
    <oui-field label="Rainbow amount">
      <oui-radio-toggle-group model="$ctrl.amount">
        <oui-radio value="small" disabled="!$ctrl.checked">A subtle pinch</oui-radio>
        <oui-radio value="medium" disabled="!$ctrl.checked">A moderate amount</oui-radio>
        <oui-radio value="large" disabled="!$ctrl.checked">Everywhere!</oui-radio>
      </oui-radio-toggle-group>
    </oui-field>
    `, {
      $ctrl: {
        checked: boolean('Checked state', true),
      },
    })),
  )
  .add(
    'Indeterminate state',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-checkbox model="$ctrl.model">Normal</oui-checkbox>
    <oui-checkbox model="$ctrl.model" disabled>Disabled</oui-checkbox>
    `, {
      $ctrl: {
        model: null,
      },
    })),
  )
  .add(
    'Validation',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form name="form">
      <oui-checkbox model="$ctrl.agreements" name="agreements" required>Agreements</oui-checkbox>
      Is this form valid? : {{ form.$valid ? "yes" : "no" }}
    </form>
    `)),
  )
  .add(
    'With description',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-checkbox description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." model="$ctrl.model">Normal</oui-checkbox>
    <oui-checkbox description="Pellentesque euismod magna rutrum lectus gravida semper." model="$ctrl.model" disabled>Disabled</oui-checkbox>
    `)),
  );
