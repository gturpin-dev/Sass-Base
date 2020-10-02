# Folders

This is a quick overview of Sass Base folders and how I organized them to a skeleton `Sass` starter.  
See this quick table of content :

- [Folders](#folders)
	- [Structure](#structure)
	- [Details](#details)
		- [Core Folder](#core-folder)
		- [Dev Folder](#dev-folder)
		- [Mixins Folder](#mixins-folder)
		- [Utilities Folder](#utilities-folder)
		- [Vendor Folder](#vendor-folder)

## Structure

All of these files are located in `src/` folder and are separated by section.
They are detailed [here](#details)

``` | --no-wmbar 
core/
  _base.scss
  _color-palet.scss
  _reset.scss
  _typography.scss
  _variables.scss

dev/
  _main.scss

mixins/
  _base-mixins.scss
  _breakpoints.scss
  _buttons.scss
  _links.scss
  _text.scss
  _typography.scss
  _variables.scss
  _mixins.scss

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
  _utilities.scss

vendor/
  gridlex/
    _gridlex-classes.scss
    _gridlex-mixins.scss
    _gridlex-preprocessing.scss
    _gridlex-vars.scss
    _gridlex.scss
  _family.scss

app.scss
```

## Details

### Core Folder

* Starting with `core/` folder which contains the core code as indicated by his name...
So indeed you'll find `_base.scss` empty by default because it's where you will place your base code that need to acts on all app

* Then let's talk about `_color-palet.scss`, this is a color palet that can help you to choose color if you are lack of inspiration. It comes from https://github.com/yeun/open-color

> Note that the palet is set on a sass map, which means it's not compiled so it doesn't add extra weight

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

Mixins folder regroup every mixins for utilities class or even for yourself, let's get an overview :

* `_base-mixins.scss`, here is every mixins that are uncategorized, like a mixins for displays font-awesome icon in pseudo-elements or a triangle

* `_breakpoints.scss` contains mixins for responsive, "above" for min-width or under for max-width, and a mixin for looping on `$breakpoints` named "infix"

* `_buttons.scss`, you only have mixins for variant of buttons used in `utilities.scss`

* `_links.scss`, same thing here

* `_text.scss`, interesting one because "excerpt-text" is used for displaying only a precise number of line in your text, usefull for cards, also you can get contrast of a color, to set black or white text according to background color

* `_typography.scss` for now you only have font-face mixin, that allow you to easily add custom font to your website

* `_variables.scss` if you want to use CSS variables, a little shortcut can help you

* `mixins.scss` this is the importer file, it import every \_partials of mixins

### Utilities Folder

This is the main thing of the skeleton, utilities class, see that like tailwind class, they are different and according to my personnal experience, we won't describe everything here, the documentation is there for that.

* `_buttons.scss` a sets of buttons you can want in your website

* `_colors.scss` adds class for color and background color using `$user-colors` set in `_variables.scss`

* `_containers.scss` a responsive containers sets with margin or padding to allow background colors or background image without wrapper

* `_displays.scss` a responsive set of different displays for elements like `d-flex` or `d-block`

* `_emmet.scss` everybody know emmet, so I have add class with their shortcut mixed with responsive way

* `_flex.scss` a responsive set of flex rules and some helpers

* `_images.scss` some helpers to add object-fit easily or image to contains in his parent

* `_links.scss` a little collection of links effect you can want in your website to add some customization

* `_loaders.scss` if you want to add loaders to your page awaiting an ajax response for example...

* `_sizing.scss` must use, a huge set of spacing class goes from `.m-150` that's set a little margin to `.child-mx-150` which add horizontal margin to every child of this elements

* `_text.scss` everything related to text like font-weight, font-size, white-space etc...

* `utilities.scss` as always the file importer for utilities

### Vendor Folder

The vendor folder is here to help you to add external libraries and compiling them with the rest of your project, by default it adds [Gridlex](http://gridlex.devlint.fr/) and [Family scss](https://lukyvj.github.io/family.scss/) which can help you in your project to add column layout and helpers mixins to manage the style of :nth-child’ified elements. If you won't use them, just disabled them in app.scss by commenting the line :)
