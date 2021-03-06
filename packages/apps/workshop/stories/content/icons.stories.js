import { storiesOf } from '@storybook/html';

storiesOf('Content/Icons', module)
  .add(
    'Usage',
    () => `
    <p>
      <span class="oui-icon oui-icon-error_circle"></span>
      <span class="oui-icon oui-icon-info_circle"></span>
      <span class="oui-icon oui-icon-success_circle"></span>
      <span class="oui-icon oui-icon-warning_circle"></span>
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="oui-icon oui-icon-error_circle"></span><br />
      Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat. <span class="oui-icon oui-icon-info_circle"></span><br />
      Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu. <span class="oui-icon oui-icon-success_circle"></span><br />
      Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus. <span class="oui-icon oui-icon-warning_circle"></span>
    </p>
    `, {
      options: {
        showPanel: true,
      },
    },
  )
  .add(
    'Basic',
    () => `
    <div class="row">
      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-ovh" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-ovh</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-close" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-close</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-error_circle" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-error_circle</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-help_circle" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-help_circle</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-info_circle" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-info_circle</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-success_circle" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-success_circle</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-warning_circle" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-warning_circle</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-filter" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-filter</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-search" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-search</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-eye" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-eye</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-eye-blocked" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-eye-blocked</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-chevron-up" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-chevron-up</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-chevron-right</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-chevron-down</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-chevron-left</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-arrow-up" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-arrow-up</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-arrow-down" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-arrow-down</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-gear" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-gear</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-error" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-error</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-success" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-success</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-padlock-close" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-padlock-close</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-broken-chain" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-broken-chain</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-copy-error" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-copy-error</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-copy-normal" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-copy-normal</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-copy-success" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-copy-success</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-clock-wait" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-clock-wait</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-shape-dot" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-shape-dot</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-shape-circle" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-shape-circle</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-add" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-add</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-remove" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-remove</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-domain-dns" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-domain-dns</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-user" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-user</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-bell" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-bell</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-help" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-help</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-guides" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-guides</code></div>
      </div>
    </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  )
  .add(
    'Bicolor',
    () => `
    <div class="row">
      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code">
          <code>.oui-icon-error_circle</code>
          <code>.oui-icon_bicolor</code>
        </div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code">
          <code>.oui-icon-info_circle</code>
          <code>.oui-icon_bicolor</code>
        </div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code">
          <code>.oui-icon-success_circle</code>
          <code>.oui-icon_bicolor</code>
        </div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code">
          <code>.oui-icon-warning_circle</code>
          <code>.oui-icon_bicolor</code>
        </div>
      </div>
    </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  )
  .add(
    'Circled',
    () => `
    <div class="row">
      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-close oui-icon_circle" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code">
          <code>.oui-icon-close</code>
          <code>.oui-icon_circle</code>
        </div>
      </div>
    </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  )
  .add(
    'Line',
    () => `
    <div class="row">
      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-pen_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-pen_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-power_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-power_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-trash_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-trash_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-chat_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-chat_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-check_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-check_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-chevron-up_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-chevron-up_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-chevron-right_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-chevron-right_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-chevron-down_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-chevron-down_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-chevron-left_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-chevron-left_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-check-circle_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-check-circle_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-counter_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-counter_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-gear_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-gear_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-page_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-page_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-paperplane_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-paperplane_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-printer_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-printer_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-user_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-user_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-pdf_line" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-pdf_line</code></div>
      </div>

      <div class="oui-icon-badge">
        <div class="oui-icon-badge__preview"><span class="oui-icon oui-icon-external_link" aria-hidden="true"></span></div>
        <div class="oui-icon-badge__code"><code>.oui-icon-external_link</code></div>
      </div>
    </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  );
