# utilities/_colors.scss

Colors are looped over `$user-colors`, it means the more colors you have, the more class you get, see the table below to see different classes you'll get


| class                    | description                     |
| ------------------------ | ------------------------------- |
| .color-**{color}**       | add color to element            |
| .bg-**{color}**          | add backgroung color to element |
| .hover:color-**{color}** | add color to element on hover   |
| .hover:bg-**{color}**    | add backgroung color to element |

!> Note that `{color}` replace every key from `$user-colors`

Then you can use theses class to change color of element and even if you want with hover, all of this is made to use less css as possible for nothing because it's annoying to select an element in css to add a color  
You can replace "color" with every `$user-colors` key e.g. `.color-secondary` or `.bg-lightgrey` etc...

## Examples

For example to make a link which is black and on hover become blue you can try something like this :

```html
<a href="#" class="color-black hover:color-blue">link</a>
```

!> You must have a `blue` key in `$user-colors` to make it work

## Source Code
```scss
/// colors and background
/// ============================
@each $name, $color in $user-colors {
	.color-#{$name} {
		color: $color !important;
	}
	
	.bg-#{$name} {
		background-color: $color !important;
	}
	
	.hover\:color-#{$name}:hover {
		color: $color !important;
	}
	
	.hover\:bg-#{$name}:hover {
		background-color: $color !important;
	}
}
```