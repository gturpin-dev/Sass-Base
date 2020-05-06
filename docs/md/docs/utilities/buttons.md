# Buttons

Each type of buttons is looped over `$user-colors` so the generated buttons will depend of your colors array

| class                    | description                            |
|--------------------------|----------------------------------------|
| .button-primary          | classic button with a darken on :hover |
| .button-outlined-primary | outlined button become full on :hover  |
| .button-invert-primary   |                                        |

You can also use the `%btn` placeholder which set default style for every buttons :

```css | utilities/_buttons.scss
%btn {
  padding: .5em 2em;
  text-decoration: none !important;
  user-select: none !important;
  outline: none !important;
  cursor: pointer;
  transition: .4s;
}
```
