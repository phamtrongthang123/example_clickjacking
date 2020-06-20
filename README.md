# Demo clickjacking attacking and defense

## Samesite cookies

>Cookies with a `SameSite` attribute of either `strict` or `lax` will not be included in requests made to a page within an `<iframe>`. This means that if the session cookies are marked as `SameSite`, any Clickjacking attack that requires the victim to be authenticated will not work, as the cookie will not be sent. An article on the Netsparker blog provides further details on which types of requests cookies are sent for with the different SameSite policies.

I couldn't produce an example because it requires authentication or some kind of operation to produce cookies.

## X-Frame-Option

I created an example using Express with bonus a false meta example.

## CSP

Using Express and helmet could achive the same result as XFO.

## Twitter + Facebook

Show that twitter + facebook also using some methods to prevent clickjacking.

If you want to see how clickjacking attack facebook Like, probably youtube is the way.

## Best-for-now Legacy Browser Frame Breaking Script

Using framebusting (frame breaking) to break out iframe of the attack page. Even with work around to attack framebusting, we still prevent attacker use our website through `display: none`.

## Reference

- <https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html>
