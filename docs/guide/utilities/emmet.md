# utilities/_emmet.scss

In Sass Base I set a lot of features of [Emmet.io](https://docs.emmet.io/cheat-sheet/) which you must have it in your IDE, then if you want to use utilities classes but keep your html clean you can use emmet classes, I set the usefull one for me, feel free to add yours if you need

| class  | category | css value                   |
| ------ | -------- | --------------------------- |
| .posa  | position | position: absolute;         |
| .posr  | position | position: relative;         |
| .ovh   | overflow | overflow: hidden;           |
| .ovv   | overflow | overflow: visible;          |
| .ovs   | overflow | overflow: scroll;           |
| .ovxh  | overflow | overflow-x: hidden;         |
| .ovxv  | overflow | overflow-x: visible;        |
| .ovxs  | overflow | overflow-x: scroll;         |
| .ovyh  | overflow | overflow-y: hidden;         |
| .ovyv  | overflow | overflow-y: visible;        |
| .ovys  | overflow | overflow-y: scroll;         |
| .cup   | cursor   | cursor: pointer;            |
| .fwb   | fonts    | font-weight: bold;          |
| .fwn   | fonts    | font-weight: normal;        |
| .fsi   | fonts    | font-style: italic;         |
| .vab   | text     | vertical-align: bottom;     |
| .vat   | text     | vertical-align: top;        |
| .vam   | text     | vertical-align: middle;     |
| .tac   | text     | text-align: center;         |
| .tar   | text     | text-align: right;          |
| .tal   | text     | text-align: left;           |
| .tdn   | text     | text-decoration: none;      |
| .tdu   | text     | text-decoration: underline; |
| .ttu   | text     | text-transform: uppercase;  |
| .ttc   | text     | text-transform: capitalize; |
| .ttn   | text     | text-transform: none;       |
| .ttl   | text     | text-transform: lowercase;  |
| .whsnw | text     | white-space: nowrap;        |
| .oln   | text     | outline: none;              |
| .lisn  | list     | list-style: none;           |

There again you can use responsive class to set these classes only for some devices like that :
```html
<div class="tac md:tar"></div>
```

In this example above `md breakpoint` the div is **aligned at right** and under it is **centered**

## Source Code
```scss
/// Responsive Emmet abbreviation in classes
/// ============================
@each $bp-name, $breakpoint in $breakpoints {
	@include above($breakpoint) {
		$infix: infix($bp-name, $breakpoints);
		/// Position
		/// ============================
		.#{$infix}posa { position: absolute !important; }
		.#{$infix}posr { position: relative !important; }
		
		/// Overflow
		/// ============================
		.#{$infix}ovh { overflow: hidden !important; }
		.#{$infix}ovv { overflow: visible !important; }
		.#{$infix}ovs { overflow: scroll !important; }
		.#{$infix}ovxh { overflow-x: hidden !important; }
		.#{$infix}ovxv { overflow-x: visible !important; }
		.#{$infix}ovxs { overflow-x: scroll !important; }
		.#{$infix}ovyh { overflow-y: hidden !important; }
		.#{$infix}ovyv { overflow-y: visible !important; }
		.#{$infix}ovys { overflow-y: scroll !important; }
		
		/// Cursor
		/// ============================
		.#{$infix}cup { cursor: pointer !important; }
		
		/// Fonts
		/// ============================
		.#{$infix}fwb { font-weight: bold !important; }
		.#{$infix}fwn { font-weight: normal !important; }
		.#{$infix}fsi { font-style: italic !important; }
		
		/// Text
		/// ============================
		.#{$infix}vab { vertical-align: bottom !important; }
		.#{$infix}vat { vertical-align: top !important; }
		.#{$infix}vam { vertical-align: middle !important; }
		
		.#{$infix}tac { text-align: center !important; }
		.#{$infix}tar { text-align: right !important; }
		.#{$infix}tal { text-align: left !important; }
		
		.#{$infix}tdn { text-decoration: none !important; }
		.#{$infix}tdu { text-decoration: underline !important; }
		
		.#{$infix}ttu { text-transform: uppercase !important; }
		.#{$infix}ttc { text-transform: capitalize !important; }
		.#{$infix}ttn { text-transform: none !important; }
		.#{$infix}ttl { text-transform: lowercase !important; }
		
		.#{$infix}whsnw { white-space: nowrap !important; }
		
		.#{$infix}oln { outline: none !important; }
		
		/// List
		/// ============================
		.#{$infix}lisn { list-style: none !important; }
	}
}
```