import Calendar from '@ovh-ux/ui-kit.calendar';

import Timepicker from './js/timepicker.component';

const moduleName = 'oui.timepicker';

angular
  .module(moduleName, [
    Calendar,
  ])
  .component('ouiTimepicker', Timepicker);

export default moduleName;
