( function() {
  'use strict';

  // set background to data-shortcode attribute
  function paintShortCode( elm ) {
    elm.css( 'background', elm.attr( 'data-shortcode' ) );
  }

  // set text to data-shortcode attribute
  function printShortCode( elm ) {
    elm.children().text( elm.attr( 'data-shortcode' ).substring( 1 ) );
  }

  // set button colors & text
  $( 'button' ).each( function() {
    paintShortCode( $( this ) );
    printShortCode( $( this ) );
  } );

  // set current code color
  paintShortCode( $( '.vals-container' ) );

  // get currect shortcode
  var currentCode = $( '.vals-container' ).attr( 'data-shortcode' );

  // set currect code text
  $( '.R-val span' ).text( currentCode.charAt( 1 ) );
  $( '.G-val span' ).text( currentCode.charAt( 2 ) );
  $( '.B-val span' ).text( currentCode.charAt( 3 ) );

}() ); // end 'use strict'