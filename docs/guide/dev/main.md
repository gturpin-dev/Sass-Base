# dev/_main.scss

This file can be used as you want, but the purpose is everything that is relative to your project must be there, for example in my common website I make folders like `pages` or `components`. I place some files like `header`, `footer`, or `card` in these folders, and `main.scss` acts like file importer, then I place every `@import` inside, this can be like this :

```scss
// pages
@import 'pages/home';
@import 'pages/content';
@import 'pages/contact';

// components
@import 'components/cards';
@import 'components/projects';

@import 'header';
@import 'footer';
```
