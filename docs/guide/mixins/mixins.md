# mixins/_breakpoints.scss

This file act as file importer, it means that it's only used to import others mixins files, then if you want to add some mixins to your project you must import them here and in `mixins/` folder

## Source Code

```scss
// import all mixins that aren't categorized
@import 'base-mixins';

// import partials mixins
@import 'breakpoints';
@import 'buttons';
@import 'links';
@import 'typography';
@import 'text';
@import 'variables';
```
