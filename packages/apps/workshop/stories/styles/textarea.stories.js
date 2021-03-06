import { storiesOf } from '@storybook/html';

storiesOf('Styles/Textarea', module)
  .add(
    'Native',
    () => `
    <textarea class="oui-textarea">Textarea text</textarea>
    <textarea class="oui-textarea" placeholder="Textarea text with placeholder"></textarea>
    <textarea class="oui-textarea" disabled="disabled">Textarea text disabled</textarea>
    <textarea class="oui-textarea" readonly="readonly">Textarea text readonly</textarea>
    <textarea class="oui-textarea oui-textarea_error">Textarea text Error</textarea>
    `,
  )
  .add(
    'Inline',
    () => `
    <textarea class="oui-textarea oui-textarea_inline">Textarea inline</textarea>
    `,
  )
  .add(
    'Sizes',
    () => `
    <textarea type="text" class="oui-input oui-input_xs" value="XS"></textarea>
    <textarea type="text" class="oui-input oui-input_s" value="S"></textarea>
    <textarea type="text" class="oui-input oui-input_m" value="M"></textarea>
    <textarea type="text" class="oui-input oui-input_l" value="L"></textarea>
    <textarea type="text" class="oui-input oui-input_xl" value="XL"></textarea>
    `,
  );
