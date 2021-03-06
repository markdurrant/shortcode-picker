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
    curentCodeElm = $( '.current-code-container' ),
    allButons = $( '.picker-container button' );

  // get elements shortcode
  function getShortCode( elm ) {
    return elm.attr( 'data-shortcode' );
  }

  // set elements shortcode
  function setShortCode( elm, shortCode ) {
    elm.attr( 'data-shortcode', shortCode );
  }

  // set background to data-shortcode attribute
  function paintShortCode( elm ) {
    elm.css( 'background', getShortCode( elm ) );
  }

  // set text to data-shortcode attribute
  function printShortCode( elm ) {
    elm.children().text( getShortCode( elm ) );
  }

  // shift a value up or down
  function shiftValue( value, shift ) {
    var newValue = parseInt( value, 16 ) + shift;
    if ( newValue > 15 ) {
      newValue = 15;
    } else if ( newValue < 0 ) {
      newValue = 0;
    }
    newValue = newValue.toString( 16 ).toUpperCase();
    return newValue;
  }

  // shift shortcode
  function shiftShortCode( shortCode, array ) {
    return "#" +
      shiftValue( shortCode.charAt( 1 ), array[ 0 ] ) +
      shiftValue( shortCode.charAt( 2 ), array[ 1 ] ) +
      shiftValue( shortCode.charAt( 3 ), array[ 2 ] );
  }

  // shift a shortcode by sat
  function shiftSat( shortcode, shift ) {
    var hsl = shortcodeToHsl( shortcode );
    hsl[ 1 ] += shift;
    if ( hsl[ 1 ] > 100 ) {
      hsl[ 1 ] = 100;
    }

    if ( hsl[ 1 ] < 0 ) {
      hsl[ 1 ] = 0;
    }
    return hslToShortcode( hsl );
  }

  // set the current shortcode value
  var curentCode = rgbToShortCode( [
    Math.random() * 255,
    Math.random() * 255,
    Math.random() * 255
  ] );

  // set all shortcode data attribute
  function setAllShortcodes() {
    // set current code data attribute
    setShortCode( curentCodeElm, curentCode );

    // set data attributes for eveything else
    setShortCode( rPlusElm, shiftShortCode( curentCode, [ 1, 0, 0 ] ) );
    setShortCode( gPlusElm, shiftShortCode( curentCode, [ 0, 1, 0 ] ) );
    setShortCode( bPlusElm, shiftShortCode( curentCode, [ 0, 0, 1 ] ) );
    setShortCode( rMinusElm, shiftShortCode( curentCode, [ -1, 0, 0 ] ) );
    setShortCode( gMinusElm, shiftShortCode( curentCode, [ 0, -1, 0 ] ) );
    setShortCode( bMinusElm, shiftShortCode( curentCode, [ 0, 0, -1 ] ) );
    setShortCode( bMinusElm, shiftShortCode( curentCode, [ 0, 0, -1 ] ) );
    setShortCode( rgbPlusElm, shiftShortCode( curentCode, [ 1, 1, 1 ] ) );
    setShortCode( rgbMinusElm, shiftShortCode( curentCode, [ -1, -1, -1 ] ) );
    setShortCode( satPlusElm, shiftSat( curentCode, 10 ) );
    setShortCode( satMinusElm, shiftSat( curentCode, -10 ) );
  }
  setAllShortcodes();

  function paintAndPrintAll() {
    // set button colors & text
    allButons.each( function() {
      paintShortCode( $( this ) );
      printShortCode( $( this ) );
    } );

    // set current code color & text
    paintShortCode( curentCodeElm );
    printShortCode( curentCodeElm );
  }
  paintAndPrintAll();

  allButons.click( function() {
    curentCode = $( this ).attr( 'data-shortcode' );
    setAllShortcodes();
    paintAndPrintAll();
  } );

}() ); // end 'use strict'