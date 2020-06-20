/*
DENY
    The page cannot be displayed in a frame, regardless of the site attempting to do so.
SAMEORIGIN
    The page can only be displayed in a frame on the same origin as the page itself. 
    The spec leaves it up to browser vendors to decide whether this option applies to the top level, the parent, 
    or the whole chain, although it is argued that the option is not very useful unless all ancestors are 
    also in the same origin (see bug 725490). Also see Browser compatibility for support details.
ALLOW-FROM uri 
    This is an obsolete directive that no longer works in modern browsers. 
    Don't use it. In supporting legacy browsers, a page can be displayed in a frame only on the specified origin uri. 
    Note that in the legacy Firefox implementation this still suffered from the same problem as SAMEORIGIN did 
    — it doesn't check the frame ancestors to see if they are in the same origin. 
    The Content-Security-Policy HTTP header has a frame-ancestors directive which you can use instead.
*/

const express = require('express')
const helmet = require('helmet');
const app = express()
const port = 3000
app.use(helmet.frameguard({ action: 'DENY' }));
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))