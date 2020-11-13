# utilities/_containers.scss

Containers are very usefull on many website, there are containers everywhere, so I wanted to improve them a bit, I started from bootstrap container and made a conclusion :

Bootstrap container are made with `margin` and `padding`, but I often needed background color or image on theses container and I hate use too much divs, so i make another container only made with padding which resolve the problem, from that I also made the same thing with only margin so you can add custom padding on your containers !

!> Please refer to <a href="#source-code">Source Code</a> To see how it works

Then theses containers work exactly the same as bootstrap containers, you'll have in the top of the file `$container-breakpoints` which is used to make containers, in `key` you have the value of media query, and in `value` the container size

!> You can declare others breakpoints if you want larger containers, by default i comment one I use for you `(1400: 1320px)`

Then you can use `.container-padding` for container with padding and so use `background-image` or `background` color or even `gradients`

And as I said you also have a container which is only set with margin, `.container-margin` you can use it like bootstrap container and if you want add more padding to him

!> Also, when you will be on mobile the `$container-gap` will go on and will be your only padding from mobile, by default it's set `5px` but you can increase it if you want to be far of smartphone borders

## Source Code
```scss
/// Breakpoints: container-values
/// ============================
$container-breakpoints: (
	0   : 540px,
	576 : 540px,
	768 : 720px,
	992 : 960px,
	1200: 1140px,
	// 1400: 1320px, // To make larger containers
) !default;
$container-gap: 5px;

/// Container set with padding, it allows you to add background
/// ============================
.container-padding {
	box-sizing: border-box;
	width: 100%;
	
	@each $breakpoint, $container-value in $container-breakpoints {
		@include above($breakpoint) {
			@if $breakpoint == 0 {
				padding-left: $container-gap;
				padding-right: $container-gap;
			} @else {
				padding-left: calc((50% - #{$container-value} / 2));
				padding-right: calc((50% - #{$container-value} / 2));
			}
		}
	}
}

/// Container set with margin, it allows you to set additionnal padding
/// ============================
.container-margin {
	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	
	@each $breakpoint, $container-value in $container-breakpoints {
		@include above($breakpoint) {
			@if $breakpoint == 0 {
				max-width: calc(100% - #{$container-gap} * 2);
			} @else {
				max-width: $container-value;
			}
		}
	}
}
```