# Read Me

This directory contains the Syne font used by the site.
The font is from [Google Fonts][google-fonts-syne],
but was downloaded from [Google Webfonts Helper][webfonts-syne].

[google-fonts-syne]: https://fonts.google.com/specimen/Syne
[webfonts-syne]: https://gwfh.mranftl.com/fonts/syne

[Subfont] was used to create a subset of the Syne font for the site.

[subfont]: https://github.com/Munter/subfont

```console
subfont -r --formats='woff2' --inline-css --root dist -o tmp
```

Unfortunately, `subfont` changes `index.html` in undesirable ways.
It mangles inline SVGs
and quotes attributes unnecessarily,
effectively undoing the work performed by
[`html-minifier-terser`][html-minifier-terser]
(part of [`astro-compress`][astro-compress]).

[html-minifier-terser]: https://github.com/terser/html-minifier-terser
[astro-compress]: https://www.npmjs.com/package/astro-compress

The Syne subset font is therefore created manually
and places in `public/fonts` for use by the site.
The unicode range is defined in `src/layouts/Base.astro`.

Should the text in `src/pages` change,
the font subset must be recreated to work correctly.
