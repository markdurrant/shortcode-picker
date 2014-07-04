( function() {
  'use strict';

  // cache elements
  var rPlusElm = $( '.R-plus' ),
    gPlusElm = $( '.G-plus' ),
    bPlusElm = $( '.B-plus' ),
    rMinusElm = $( '.R-minus' ),
    gMinusElm = $( '.G-minus' ),
    bMinusElm = $( '.B-minus' ),
    rgbPlusElm = $( '.RGB-plus' ),
    rgbMinusElm = $( '.RGB-minus' ),
    satPlusElm = $( '.sat-plus' ),
    satMinusElm = $( '.sat-minus' ),
    curentCodeElm = $( '.current-code-container' );

  // set background to data-shortcode attribute
  function paintShortCode( elm ) {
    elm.css( 'background', elm.attr( 'data-shortcode' ) );
  }

  // set text to data-shortcode attribute
  function printShortCode( elm ) {
    elm.children().text( elm.attr( 'data-shortcode' ) );
  }

  // set button colors & text
  $( 'button' ).each( function() {
    paintShortCode( $( this ) );
    printShortCode( $( this ) );
  } );

  // set current code color & text
  paintShortCode( curentCodeElm );
  printShortCode( curentCodeElm );

}() ); // end 'use strict'