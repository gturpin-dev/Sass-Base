# utilities/_flex.scss

Flexbox are usefull when you have to manage positionning, then I also set utilities classes to help you with

| class            | category    | css value                                     |
| ---------------- | ----------- | --------------------------------------------- |
| .flex-row        | additionnal | display: flex; flex-direction: row;           |
| .flex-col        | additionnal | display: flex; flex-direction: column;        |
| .flex-center     | additionnal | align-items: center; justify-content: center; |
| .flex-wrap       | wrap        | flex-wrap: wrap;                              |
| .flex-nowrap     | wrap        | flex-wrap: nowrap;                            |
| .justify-center  | justify     | justify-content: center;                      |
| .justify-start   | justify     | justify-content: flex-start;                  |
| .justify-end     | justify     | justify-content: flex-end;                    |
| .justify-between | justify     | justify-content: space-between;               |
| .justify-around  | justify     | justify-content: spacee-around;               |
| .align-center    | align       | align-items: center;                          |
| .align-start     | align       | align-items: flex-start;                      |
| .align-end       | align       | align-items: flex-end;                        |
| .align-between   | align       | align-items: space-between;                   |
| .align-around    | align       | align-items: space-around;                    |
| .content-center  | content     | align-content: center;                        |
| .content-start   | content     | align-content: flex-start;                    |
| .content-end     | content     | align-content: flex-end;                      |
| .content-between | content     | align-content: space-between;                 |
| .content-around  | content     | align-content: space-around;                  |
| .self-center     | self        | align-self: center;                           |
| .self-start      | self        | align-self: flex-start;                       |
| .self-end        | self        | align-self: flex-end;                         |
| .self-between    | self        | align-self: space-between;                    |
| .self-around     | self        | align-self: space-around;                     |
| .flex-fill       | behavior    | flex: 1 1 auto;                               |
| .flex-grow-0     | behavior    | flex-grow: 0;                                 |
| .flex-grow-1     | behavior    | flex-grow: 1;                                 |
| .flex-shrink-0   | behavior    | flex-shrink: 0;                               |
| .flex-shrink-1   | behavior    | flex-shrink: 1;                               |

There again you can use responsive class to set these classes only for some devices like that :
```html
<div class="flex-row flex-wrap md:flex-nowrap"></div>
```

In this example above `md breakpoint` the div is **display: flex and in row direction** and under **flex wrap is set to wrap**

## Source Code
```scss
/// Reponsive class
/// ============================
@each $bp-name, $breakpoint in $breakpoints {
	@include above($breakpoint) {
		$infix: infix($bp-name, $breakpoints);
		/// Flex variations
		/// ============================
		.#{$infix}flex-row {
			display: flex !important;
			flex-direction: row !important;
		}
		
		.#{$infix}flex-col {
			display: flex !important;
			flex-direction: column !important;
		}
		
		.#{$infix}flex-center {
			align-items: center !important;
			justify-content: center !important;
		}
		
		.#{$infix}flex-wrap { flex-wrap: wrap !important; }
		.#{$infix}flex-nowrap { flex-wrap: nowrap !important; }
		
		.#{$infix}justify-center { justify-content: center !important; }
		.#{$infix}justify-start { justify-content: flex-start !important; }
		.#{$infix}justify-end { justify-content: flex-end !important; }
		.#{$infix}justify-between { justify-content: space-between !important; }
		.#{$infix}justify-around { justify-content: space-around !important; }
		
		.#{$infix}align-center { align-items: center !important; }
		.#{$infix}align-start { align-items: flex-start !important; }
		.#{$infix}align-end { align-items: flex-end !important; }
		.#{$infix}align-between { align-items: space-between !important; }
		.#{$infix}align-around { align-items: space-around !important; }
		
		.#{$infix}content-center { align-content: center !important; }
		.#{$infix}content-start { align-content: flex-start !important; }
		.#{$infix}content-end { align-content: flex-end !important; }
		.#{$infix}content-between { align-content: space-between !important; }
		.#{$infix}content-around { align-content: space-around !important; }
		
		.#{$infix}self-center { align-self: center !important; }
		.#{$infix}self-start { align-self: flex-start !important; }
		.#{$infix}self-end { align-self: flex-end !important; }
		.#{$infix}self-between { align-self: space-between !important; }
		.#{$infix}self-around { align-self: space-around !important; }
		
		.#{$infix}flex-fill { flex: 1 1 auto !important; }
		.#{$infix}flex-grow-0 { flex-grow: 0 !important; }
		.#{$infix}flex-grow-1 { flex-grow: 1 !important; }
		.#{$infix}flex-shrink-0 { flex-shrink: 0 !important; }
		.#{$infix}flex-shrink-1 { flex-shrink: 1 !important; }
	}
}
```