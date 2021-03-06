import Spinner from '@ovh-ux/ui-kit.spinner';

import Slideshow from './js/slideshow.component';
import SlideshowPanel from './js/panel/slideshow-panel.component';

const moduleName = 'oui.slideshow';

angular
  .module(moduleName, [
    Spinner,
  ])
  .component('ouiSlideshow', Slideshow)
  .component('ouiSlideshowPanel', SlideshowPanel);

export default moduleName;
