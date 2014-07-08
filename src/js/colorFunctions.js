( function() {
  'use strict';
  /**
   * Converts an RGB color value to HSL. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes r, g, and b are contained in the set [0, 255] and
   * returns h, s, and l in the set [0, 1].
   *
   * @param   Number  r       The red color value
   * @param   Number  g       The green color value
   * @param   Number  b       The blue color value
   * @return  Array           The HSL representation
   */
  function rgbToHsl( r, g, b ) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max( r, g, b ),
      min = Math.min( r, g, b );

    var h, s, l = ( max + min ) / 2;

    if ( max == min ) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / ( 2 - max - min ) : d / ( max + min );
      switch ( max ) {
        case r:
          h = ( g - b ) / d + ( g < b ? 6 : 0 );
          break;
        case g:
          h = ( b - r ) / d + 2;
          break;
        case b:
          h = ( r - g ) / d + 4;
          break;
      }
      h /= 6;
    }

    return [ h, s, l ];
  }

  var example = [ 51, 153, 221 ];
  // example = [ 255, 255, 255 ];

  console.log( "old output", rgbToHsl( example[ 0 ], example[ 1 ], example[ 2 ] ) );

  // my rgb to hsl. Based on http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
  // input rgb array [ r, g, b ] r,g,b 0-255
  // output hsl array [ h, s, l ] h 0-360 | s,l 0-100
  function myHsl( array ) {
    // get r,g, & b values and normalise to 0 - 1
    var r = array[ 0 ] / 255,
      g = array[ 1 ] / 255,
      b = array[ 2 ] / 255;

    // get highest & lowest values
    var max = Math.max( r, g, b ),
      min = Math.min( r, g, b );


    // set lumiosity to the average of the highest & lowest values
    // multiply by 100 and round to get senible value
    var l = ( max + min ) / 2;
    l = parseInt( l * 100 );

    // init h, & s vars
    var h, s;

    // set delta
    var delta = max - min;

    // highest & lowest values are the same the color has 0 hue or saturation
    if ( max === min ) {
      h = 0;
      s = 0;
    }

    return [ "RGB", r, g, b, "HSL", h, s, l ];
  }

  console.log( myHsl( example ) );

}() ); // end 'use strict'