# mixins/_variables.scss

For now this file contains only one function to help users using [CSS variables](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties) to call them faster

## v

```scss
/// Call a css variable faster by calling v(name);
/// @param  {variable} $var variable css
/// @return {variable}      css Variable
@function v($var) {
  @return var(--#{$var});
}
```

## Source Code

```scss
/// Call a css variable faster by calling v(name);
/// @param  {variable} $var variable css
/// @return {variable}      css Variable
@function v($var) {
  @return var(--#{$var});
}
```