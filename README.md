portable-network-graphics.js
======
![](./swagg.jpg)
A PNG decoder in JS. Node only.
 
## Usage
Install the module

    yarn add elliotberry/portable-network-graphics.js
    
import the module and decode a PNG

    var PNG = require('png-js');
    PNG.decode('some.png', function(pixels) {
        // pixels is a 1d array (in rgba order) of decoded pixel data
    });
    
You can also call `PNG.load` if you want to load the PNG (but not decode the pixels) synchronously.  If you already
have the PNG data in a buffer, simply use `new PNG(buffer)`.  In both of these cases, you need to call `png.decode`
yourself which passes your callback the decoded pixels as a buffer.  If you already have a buffer you want the pixels
copied to, call `copyToImageData` with your buffer and the decoded pixels as returned from `decodePixels`.