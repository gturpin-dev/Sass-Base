# core/_typography.scss

This file is your configuration for everything about text in your project, start using it by uncomment the import of google font, change it with your fonts

Then i recommend you to uncomment the default fonts variables or set yours, by default i set `$font-primary` and `$font-secondary`, the primary is used by headings and the other is used for text by default  

I also set by default two css class to help you in you html files

> By default I set color of `$color-grey` that is a design tip from [Refactoring UI](https://refactoringui.com/) I also set up a font-size that takes `$font-size-base` variable

If you want to change the project font size you must change it from `$font-size-base` variable because it set all **headings** sizes, like below :

!> Note that I set ``16px`` by default which is the common font size used by most navigators nowadays

| Headings | Size ratio | Value in px |
| -------- | ---------- | ----------- |
| h1       | 2.5        | 40          |
| h2       | 2          | 32          |
| h3       | 1.75       | 28          |
| h4       | 1.5        | 24          |
| h5       | 1.25       | 20          |
| h6       | 1          | 16          |

## Source Code

```scss
/// Uncomment and Set your own fonts from GoogleFonts
/// ============================
// @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:400,400i,700|Raleway:400,400i,700&display=swap');

/// Uncomment to override default fonts of website
/// ============================
// $font-primary: "Be Vietnam", sans-serif;
// $font-secondary: "Raleway", sans-serif;
$font-size-base: 16px;

.font-primary { font-family: $font-primary !important; }
.font-secondary { font-family: $font-secondary !important; }

/// Basic fonts declaration
/// ============================
html, body {
	font-family: $font-secondary;
	color: $color-grey;
	font-size: $font-size-base;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: $font-primary;
}

/// Font sizes
/// ============================
$h1-font-size: $font-size-base * 2.5 !default;
$h2-font-size: $font-size-base * 2 !default;
$h3-font-size: $font-size-base * 1.75 !default;
$h4-font-size: $font-size-base * 1.5 !default;
$h5-font-size: $font-size-base * 1.25 !default;
$h6-font-size: $font-size-base !default;

h1, .h1 { font-size: $h1-font-size; }
h2, .h2 { font-size: $h2-font-size; }
h3, .h3 { font-size: $h3-font-size; }
h4, .h4 { font-size: $h4-font-size; }
h5, .h5 { font-size: $h5-font-size; }
h6, .h6 { font-size: $h6-font-size; }
```