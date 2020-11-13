# utilities/_displays.scss

You can use displays class easily, just follow the table below :

| class   | css value              |
|---------|------------------------|
| .d-none | display: none;         |
| .inline | display: inline;       |
| .block  | display: block;        |
| .iblock | display: inline-block; |
| .flex   | display: flex;         |
| .iflex  | display: inline-flex;  |

There again you can use responsive class to set display only for some devices like that :
```html
<div class="d-flex md:d-none"></div>
```

In this example above `md breakpoint` the div is **display none** and under it is **display flex**

## Source Code
```scss
$displays: (
	'none'  : none,
	'inline': inline,
	'block' : block,
	'iblock': inline-block,
	'flex'  : flex,
	'iflex' : inline-flex,
);

@each $name, $value in $displays {
	@each $bp-name, $breakpoint in $breakpoints {
		@include above($breakpoint) {
			$infix: infix($bp-name, $breakpoints);
			.#{$infix}d-#{$name} { display: $value !important; }
		}
	}
}
```