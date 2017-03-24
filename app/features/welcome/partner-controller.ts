'use strict';

class TripboxController {

  $postLink() {
    setTimeout(() => {
      $('#partner img').hover(
        function() {
          var src = $(this).prop('src').replace('0.png', '1.png');
          $(this).prop('src', src);
        },
        function() {
          var src = $(this).prop('src').replace('1.png', '0.png');
          $(this).prop('src', src);
        }
      );
    }, 0);
  }

}

export class Controller extends TripboxController {}