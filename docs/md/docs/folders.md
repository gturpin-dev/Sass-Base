# Folders

This is a quick overview of Sass Base folders and how I organized them to a skeleton `Sass` starter.  
See this quick table of content :

* [core](#core-folder)
* [dev](#dev-folder)
* [mixins](#mixins-folder)
* [utilities](#utilities-folder)
* [vendor](#vendor-folder)

## Structure

All of these files are located in `src/` folder and are separated by section.
They are detailed [here](#details).

```
core/
  _base.scss
  _color-palet.scss
  _reset.scss
  _typography.scss
  _variables.scss

dev/
  main.scss

mixins/
  _base-mixins.scss
  _breakpoints.scss
  _buttons.scss
  _links.scss
  _text.scss
  _typography.scss
  _variables.scss
  mixins.scss

utilities/
  _buttons.scss
  _colors.scss
  _containers.scss
  _displays.scss
  _emmet.scss
  _flex.scss
  _images.scss
  _links.scss
  _loaders.scss
  _sizing.scss
  _spacers.scss
  _text.scss
  utilities.scss

vendor/
  gridlex/
    gridlex-classes.scss
    gridlex-mixins.scss
    gridlex-preprocessing.scss
    gridlex-vars.scss
    gridlex.scss

  family.scss

app.scss
```

## Details

### Core Folder

* Starting with `core/` folder which contains the core code as indicated by his name...
So indeed you'll find `_base.scss` empty by default because it's where you will place your base code that need to acts on all app

* Then let's talk about `_color-palet.scss`, this is a color palet that can help you to choose color if you are lack of inspiration. It comes from https://github.com/yeun/open-color

> Note that the palet is set on sass map, which means it's not compiled so it doesn't add extra weight

* Now we came to the `_reset.scss` file, it is a modern css reset and do the job

* `_typography.scss` this file is pretty important because it contains logic from the skeleton.  
Firstly, you'll get a googlefont import example to help you if you want to add font easily.   
Secondly, you have two variables for primary and secondary fonts which overrides these sets from `_variables.scss` after that somes class are sets by theses font, and globally the primary font affect `headings` and secondary font affect `body`

* And so, the final file is `_variables.scss`, you can find variables here, a default sets of fonts from googlefonts, and a set of 5 colors.
Primary and secondary, i encourage you to change them to adapt to your project and `$color-grey` which is set for text (#000 is too aggressive) according to this one you have `$color-lightgrey`, which is set for less important text, this concept is a part of https://refactoringui.com/ and finally `$color-danger` set for alert or errors mainly. you can change this last one if you want.  
Now a map is set for looping through these colors `$user-colors`, you can add a key from the `$color-palet` we've seen before easily with :
```scss
  'yellow-1': map-get($color-palet, 'yellow-1')
```  
This file end with a `$breakpoints` map to obviously set the responsive class

### Dev Folder

Dev folder is by default serve with unique file named `main.scss`, the folder is your dev environment so every style only acts on your app must be here, do what you want in this, you can add multiple files/folders for example is often use `components/` or `pages/` and is use `main.scss` like `app.scss` which import everything in dev folder, to properly separate everything.

### Mixins Folder
