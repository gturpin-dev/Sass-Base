# _buttons.scss

Each type of buttons is looped over `$user-colors` (from [core/variables.scss](guide/core/variables)) so the generated buttons will depend of your colors array

| class                    | description                            |
| ------------------------ | -------------------------------------- |
| .button-primary          | classic button with a darken on :hover |
| .button-outlined-primary | outlined button become full on :hover  |
| .button-invert-primary   |                                        |

Buttons are generated with above classes and you can change "primary" with every `$user-colors` key. e.g. `.button-secondary` or `.button-lightgrey` etc...

## How to custom

If the default buttons don't fill your needs, you can update a bit by using **utilities class** to change padding, color, hover color, background color and more :

```html
<a href="#" class="button-primary px-250 py-75 color-blue hover:color-red">button</a>
```

You can also use the `%btn` placeholder which set default style for every buttons and create your own :

```scss
%btn {
	padding: .5em 2em;
	text-decoration: none !important;
	user-select: none !important;
	outline: none !important;
	cursor: pointer;
	transition: .4s;
}
```
