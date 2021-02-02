# mixins/_buttons.scss

Theses mixins have been separated from [utilities/_buttons.scss](guide/utilities/buttons.md) to add more flexibility, in case if you want to create your own buttons on a custom base.  
Then mixins below are only used to create `Sass Base Buttons`

!> In most of the case you won't use theses mixins

If you want more explanation, see [utilities/_buttons.scss](guide/utilities/buttons.md)

## Source Code

```scss
/// @param  {color} $bgColor main color of the button
/// @author Guillaume TURPIN
/// @since v-2.0.2
/// @output button with darken color
@mixin button-variant($bgColor, $amount: 15%) {
	background-color: $bgColor;
	border: 0;
	@include text-contrast($bgColor);
	
	&:hover,
	&:active,
	&.active {
		background-color: darken($bgColor, $amount);
	}
}

/// @param  {color} $bgColor main color of the button
/// @author Guillaume TURPIN
/// @since v-2.0.2
/// @output button with variation of the color
@mixin button-invert-variant($bgColor) {
	background-color: $bgColor;
	border: 1px solid $bgColor;
	@include text-contrast($bgColor);
	
	&:hover,
	&:active,
	&.active {
		background-color: transparent;
		color: $bgColor;
	}
}

/// @param  {color} $bgColor main color of the button
/// @author Guillaume TURPIN
/// @since v-2.0.2
/// @output button with inverted outlined variation
@mixin button-outline-variant($bgColor) {
	border: 1px solid $bgColor;
	background-color: transparent;
	color: $bgColor;
	
	&:hover,
	&:active,
	&.active {
		background-color: $bgColor;
		@include text-contrast($bgColor);
	}
}
```