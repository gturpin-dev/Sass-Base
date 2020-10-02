# utilities/_buttons.scss

Each type of buttons is looped over `$user-colors` (from [core/variables.scss](guide/core/variables)) so the generated buttons will depend of your colors array

| class                      | description                            |
| -------------------------- | -------------------------------------- |
| .button-{color}            | classic button with a darken on :hover |
| .button-outlined-{color} | outlined button become full on :hover  |
| .button-invert-{color}   | the reverse of outlined button |

Buttons are generated with above classes and you can change "primary" with every `$user-colors` key. e.g. `.button-secondary` or `.button-lightgrey` etc...

They are also generated with a color contrasted from his background, then if the background is darker, the color will automatically change into white (this behavior comes from [text mixins](guide/mixins/text.md?id=text-contrast))

[Buttons Demo](https://codepen.io/ThPrGanesha/full/yLOdbYm ':include :type=iframe width=100% height=660px')

## How to custom

If the default buttons don't fill your needs, you can update a bit by using [utilities class](guide/utilities) to change padding, color, hover color, background color, font-size and more :

```html
<a href="#" class="button-primary px-250 py-75 color-blue hover:color-red fs-18">button</a>
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

you can use button for input/button/a