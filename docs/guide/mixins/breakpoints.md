# mixins/_breakpoints.scss

I will present you my favorites mixins, is used them everyday to make my website responsive

## under

Simply use this one when you want to make a rule with max-width

```scss
/// return the content under the breakpoint param
/// @param {number} $size the breakpoint
/// @output {content} content to add
/// @require {mixin} strip-unit - to call mixin without unit
/// @example scss - above mixin
///   under(1200) { display: block; }
/// @author Guillaume TURPIN
/// @since v-1.0.1
@mixin under($size) {
	$size: strip-unit($size);
	@media (max-width: #{$size}px) { @content; }
}
```

You can use it like this :

```scss
@include under(1200) { 
	display: block;
}
```

!> Note that you can put value without `px` thanks to [strip-unit mixin](guide/mixins/base-mixins.md?id=strip-unit)

<hr>

## above

If you prefer mobile first approach, i have something for you :

```scss
/// return the content above the breakpoint param
/// @param {number} $size the breakpoint
/// @output {content} content to add
/// @require {mixin} strip-unit - to call mixin without unit
/// @example scss - above mixin
///   above(1200) { display: block; }
/// @author Guillaume TURPIN
/// @since v-1.0.1
@mixin above($size) {
	$size: strip-unit($size);
	@media (min-width: #{$size}px) { @content; }
}
```

This acts the same as `under` but with min-width

<hr>

## infix

This function is used by the framework to make responsive class across the `$breakpoints` variable, you must not use it normally

```scss

/// return blank string for global bp or the bp for others
/// @param {string} $bp-name the name of the breakpoint
/// @param {map} $breakpoints array of breakpoints
/// @example scss - infix mixin
///   infix(xs, $breakpoints)
/// @author Guillaume TURPIN
/// @since v-3.0.1
@function infix($bp-name, $breakpoints: $breakpoints) {
	$bp-value: map-get($breakpoints, $bp-name);
	
	@if ($bp-value != 0) {
		@return "#{$bp-name}\\:";
	} @else {
		@return '';
	}
}
```

## Source Code

```scss
/// return the content under the breakpoint param
/// @param {number} $size the breakpoint
/// @output {content} content to add
/// @require {mixin} strip-unit - to call mixin without unit
/// @example scss - above mixin
///   under(1200) { display: block; }
/// @author Guillaume TURPIN
/// @since v-1.0.1
@mixin under($size) {
	$size: strip-unit($size);
	@media (max-width: #{$size}px) { @content; }
}

/// return the content above the breakpoint param
/// @param {number} $size the breakpoint
/// @output {content} content to add
/// @require {mixin} strip-unit - to call mixin without unit
/// @example scss - above mixin
///   above(1200) { display: block; }
/// @author Guillaume TURPIN
/// @since v-1.0.1
@mixin above($size) {
	$size: strip-unit($size);
	@media (min-width: #{$size}px) { @content; }
}

/// return blank string for global bp or the bp for others
/// @param {string} $bp-name the name of the breakpoint
/// @param {map} $breakpoints array of breakpoints
/// @example scss - infix mixin
///   infix(xs, $breakpoints)
/// @author Guillaume TURPIN
/// @since v-3.0.1
@function infix($bp-name, $breakpoints: $breakpoints) {
	$bp-value: map-get($breakpoints, $bp-name);
	
	@if ($bp-value != 0) {
		@return "#{$bp-name}\\:";
	} @else {
		@return '';
	}
}
```