# mixins/_typography.scss

There you will find mixins that help you to manage text and typos

## excerpt-text

This mixin is usefull when you want to truncate text not by char number but per line, e.g. for cards to have same displays  
It is used in [utilities/_text.scss](guide/utilities/text.md) to create `.text-excerpt` class, but if you want to customize a bit you can call this mixin

For example this will create on your block a 3 line truncate with `...` at the end :

```scss
@include excerpt-text($lineCount: '3');
```

See the code below to go further

```scss
/// Excerpt some text and truncate him when he's over
/// @param  {number}  $lineHeight [1.2em]       line height of text
/// @param  {number}  $lineCount  [3]           number of line you want in excerpted text
/// @param  {Boolean} $multiline  [true]        enable multiline
/// @example scss - excerpt-text mixin
///   excerpt-text('1.2em', '3', 'true')
/// @since v-1.0.0
/// @author Guillaume TURPIN
/// @output style which permits the truncation by the number of line you want
@mixin excerpt-text($lineHeight: 1.2em, $lineCount: 3, $multiline: true) {
	@if $multiline {
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: $lineCount;
		-webkit-box-orient: vertical;
		line-height: $lineHeight;
		max-height: $lineHeight * $lineCount;
		
	} @else {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}
```

## text-contrast

This mixin is used to change color according to the background color of his content, you just have to set `$bgColor`  

!> This mixin is used to create buttons and change the color dynamically

```scss
/// Automatically color the text according to the $bgColor
/// @param  {color} $bgColor Background color of the current Tag
/// @example scss - text-contrast mixin
///   text-contrast(#ccc)
/// @since v-1.0.0
/// @author Guillaume TURPIN
/// @output add color: with the according color
@mixin text-contrast($bgColor) {
	$color-brightness: round((red($bgColor) * 299) + (green($bgColor) * 587) + (blue($bgColor) * 114) / 1000);
	$light-color: round((red(#ffffff) * 299) + (green(#ffffff) * 587) + (blue(#ffffff) * 114) / 1000);
	
	@if abs($color-brightness) < ($light-color/2) {
		color: white;
	} @else {
		color: black;
	}
}
```