/*
Common uses of CSP frame-ancestors:
- Content-Security-Policy: frame-ancestors 'none';
    This prevents any domain from framing the content. 
    This setting is recommended unless a specific need has been identified for framing.
- Content-Security-Policy: frame-ancestors 'self';
    This only allows the current site to frame the content.
- Content-Security-Policy: frame-ancestors 'self' *.somesite.com https://myfriend.site.com;
    This allows the current site, as well as any page on somesite.com (using any protocol), 
    and only the page myfriend.site.com, using HTTPS only on the default port (443).

    Note that the single quotes are required around self and none, but may not occur around other source expressions.
*/

const express = require('express')
const helmet = require('helmet');
const app = express()
const port = 3000
app.use(helmet.contentSecurityPolicy({
    directives: {
        frameAncestors: ["'none'"],        
      }
  }))
  
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))