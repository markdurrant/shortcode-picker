( function() {
  'use strict';

  // set background to data-shortcode attribute
  function paintShortCode( elm ) {
    elm.css( 'background', elm.attr( 'data-shortcode' ) );
  }

  // set button colors
  $( 'button' ).each( function() {
    paintShortCode( $( this ) );
  } );

  // set current code color
  paintShortCode( $( '.vals-container' ) );

}() ); // end 'use strict'