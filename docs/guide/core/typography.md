# core/_typography.scss

This file is your configuration for everything about text in your project, start using it by uncomment the import of google font, change it with your fonts

Then i recommend you to uncomment the default fonts variables or set yours, by default i set `$font-primary` and `$font-secondary`, the primary is used by headings and the other is used for text by default  

I also set by default two css class to help you in you html files

I recommend you to add styles of your project in the body declaration like font size of document or change text color instead of `$color-grey` but this is a design tips of [Refactoring UI](https://refactoringui.com/)

## Source Code

```scss
/// Uncomment and Set your own fonts from GoogleFonts
/// ============================
// @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:400,400i,700|Raleway:400,400i,700&display=swap');

/// Uncomment to override default fonts of website
/// ============================
// $font-primary: "Be Vietnam", sans-serif;
// $font-secondary: "Raleway", sans-serif;

.font-primary { font-family: $font-primary !important; }
.font-secondary { font-family: $font-secondary !important; }

/// Basic fonts declaration
/// ============================
html, body {
	font-family: $font-secondary;
	color: $color-grey;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: $font-primary;
}
```