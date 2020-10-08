# core/_variables.scss

This file is probably the more useful one, firstly you'll have your main fonts, I recommend you to comment them and declare yours in [core/typography.scss](guide/core/typography.md)

After you can see your colors set, by default I set `$color-primary` and `$color-secondary` colors because this is most common on website, then `$color-grey` and `$color-lightgrey` correspond to [Refactoring UI](https://refactoringui.com/) design tips, then use `$color-grey` for text and `$color-lightgrey` for less important text, this bring nuance in the text  

!> Feel free to override them as you want

Now take a look at `$user-colors`, this sass map set all colors that will be use to generates [Utilities Class](guide/utilities) that depends on colors  
You can use it by set a `key` and after a variable that link the color, by default there are all above colors and two keys for generates `white` and `black`

If you don't have any ideas for cool colors for your website you can easily use a colors from [Color Palet](guide/core/color-palet.md) just add something like this in `$user-colors` :

```scss
	'yellow-1': map-get($color-palet, 'yellow-1'),
```

With this you'll generates `colors`, `background colors` and `buttons`, isn't this awesome ?

To finish, I set a `$breakpoints` map to generates responsive class, the values are based on [bootstrap](https://getbootstrap.com/) and [tailwind](https://tailwindcss.com/) breakpoints, you can change it if you want

## Source Code

```scss
// Main fonts
// Can be override in _typography.scss
@import url('https://fonts.googleapis.com/css?family=Cabin|BioRhyme:400,700&display=swap');
$font-primary: 'BioRhyme', sans-serif !default; // font for title
$font-secondary: 'Cabin', sans-serif !default;   // font for text

/// Default colors, feel free to override them
/// ============================
$color-primary  : #ff2f54 !default;
$color-secondary: #38b2ac !default;
$color-grey     : #4A4A4A !default;
$color-lightgrey: #737373 !default;
$color-danger   : #ff1919 !default;

/// Theme color, feel free to add your own, it will generate every class in heritance
/// ============================
$user-colors: (
	"primary"  : $color-primary,     // primary color of website
	"secondary": $color-secondary,   // secondary color of website
	"grey"     : $color-grey,        // color for more important text
	"lightgrey": $color-lightgrey,   // color for less important text
	"danger"   : $color-danger,      // color for alerts or something dangerous
	"white"    : #fff,             // generates white class
	"black"    : #000,             // generates black class

	/// You can add colors from palet by adding a line like under
	/// 'yellow-1': map-get($color-palet, 'yellow-1'),
);

/// Breakpoints for generates utilities responsive class
/// ============================
$breakpoints: (
	xs: 0,
	sm: 576px,
	md: 768px,
	lg: 992px,
	xl: 1200px,
) !default;
```