( function() {
  'use strict';

  // my rgb to hsl. Based on http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
  // input rgb array [ r, g, b ] r,g,b 0-255
  // output hsl array [ h, s, l ] h 0-360 | s,l 0-100
  function rgbToHsl( array ) {
    // get r,g, & b values and normalise to 0 - 1
    var r = array[ 0 ] / 255,
      g = array[ 1 ] / 255,
      b = array[ 2 ] / 255;

    // get highest & lowest values
    var max = Math.max( r, g, b ),
      min = Math.min( r, g, b );

    // set lumiosity to the average of the highest & lowest values
    var l = ( max + min ) / 2;

    // init h, & s vars
    var h, s;

    // set delta
    var delta = max - min;

    // set saturation | I don't understant this bit
    if ( l > 0.5 ) {
      s = delta / ( 2 - max - min );
    } else {
      s = delta / ( max + min );
    }

    // set hue
    // if mostly red
    if ( max === r ) {
      h = ( g - b ) / delta + ( g < b ? 6 : 0 );
    }
    // if mostly green
    else if ( max === g ) {
      h = ( b - r ) / delta + 2;
    }
    // if mostly blue
    else if ( max === b ) {

      h = ( r - g ) / delta + 4;
    }
    h /= 6;

    // multiply by 100 and round to get senible values
    l = Math.round( l * 100 );
    s = Math.round( s * 100 );
    h = Math.round( h * 360 );

    // highest & lowest values are the same the color has 0 hue and 0 saturation
    if ( max === min ) {
      h = 0;
      s = 0;
    }

    return [ h, s, l ];
  }

  // my hsl to rgb. Based on http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
  // input hsl array [ h, s, l ] h 0-360 | s,l 0-100
  // output rgb array [ r, g, b ] r,g,b 0-255
  function hslToRgb( array ) {
    var h = array[ 0 ] / 360;
    var s = array[ 1 ] / 100;
    var l = array[ 2 ] / 100;

    function hue2rgb( p, q, t ) {
      if ( t < 0 ) t += 1;
      if ( t > 1 ) t -= 1;
      if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
      if ( t < 1 / 2 ) return q;
      if ( t < 2 / 3 ) return p + ( q - p ) * ( 2 / 3 - t ) * 6;
      return p;
    }

    var r, g, b;

    if ( s === 0 ) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * ( 1 + s ) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb( p, q, h + 1 / 3 );
      g = hue2rgb( p, q, h );
      b = hue2rgb( p, q, h - 1 / 3 );
    }

    r = Math.round( r * 255 );
    g = Math.round( g * 255 );
    b = Math.round( b * 255 );

    return [ r, g, b ];
  }

  // convert rgb to shortcode
  function rgbToShortCode( array ) {

  }

  var example = [ 123, 45, 225 ];

  console.log( "RGB", example );
  console.log( "HSL", rgbToHsl( example ) );
  console.log( "RGB", hslToRgb( [ 266, 75, 53 ] ) );

}() ); // end 'use strict'