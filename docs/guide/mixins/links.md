# mixins/_breakpoints.scss

Theses mixins have been separated from [utilities/_links.scss](guide/utilities/links.md) to add more flexibility, in case if you want to create your own buttons on a custom base.  
Then mixins below are only used to create `Sass Base Buttons`

!> In most of the case you won't use theses mixins

If you want more explanation, see [utilities/_links.scss](guide/utilities/links.md)

## Source Code

```scss
/// to prevent repetition for other mixins
/// @author Guillaume TURPIN
/// @since v-2.0.3
@mixin link-default() {
	position: relative;
	
	&:after {
		content: '';
		position: absolute;
	}
}

/// display classic link
/// @param  {color}  $color link color
/// @author Guillaume TURPIN
/// @since v-2.0.3
@mixin link-classic($color) {
	color: $color !important;
	text-decoration: none;
	
	&:hover {
		text-decoration: underline;
	}
}

/// display link from underline to full background
/// @param  {color}  $color link color
/// @author Guillaume TURPIN
/// @since v-2.0.3
@mixin link-bg-bottom-top($color) {
	@include link-default();
	
	&:after {
		bottom: -3px;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: $color;
		transition: .4s;
		z-index: -1;
	}
	
	&:hover:after {
		height: 100%;
	}
}

/// display link from left to right with default visible state
/// @param  {color}  $color link color
/// @author Guillaume TURPIN
/// @since v-2.0.3
@mixin link-full-left-right($color) {
	@include link-default();
	
	&:after {
		bottom: -3px;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: $color;
		transition: transform .4s;
		transform-origin: center left;
	}
	
	&:hover:after {
		transform: scaleX(0);
		transform-origin: center right;
	}
}

/// display link from right to left with default invisible state
/// @param  {color}  $color link color
/// @author Guillaume TURPIN
/// @since v-2.0.3
@mixin link-empty-right-left($color) {
	@include link-full-left-right($color);
	&:after {
		transform: scaleX(0);
	}
	
	&:hover:after {
		transform: scaleX(1);
	}
}

/// display link from left to right with default invisible state
/// @param  {color}  $color link color
/// @author Guillaume TURPIN
/// @since v-2.0.3
@mixin link-empty-left-right($color) {
	@include link-full-right-left($color);
	&:after {
		transform: scaleX(0);
	}
	
	&:hover:after {
		transform: scaleX(1);
	}
}

/// display link from right to left with default visible state
/// @param  {color}  $color link color
/// @author Guillaume TURPIN
/// @since v-2.0.3
@mixin link-full-right-left($color) {
	@include link-default();
	
	&:after {
		bottom: -3px;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: $color;
		transition: transform .4s;
		transform-origin: center right;
	}
	
	&:hover:after {
		transform: scaleX(0);
		transform-origin: center left;
	}
}
```
