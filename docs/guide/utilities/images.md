# utilities/_flex.scss

Theses images classes are there to help you manage them easily 

At the moment theses classes are cheap but I will enhance them in the future,
for now you have a default placeholder `%img` that set the following :

```scss
%img {
	width: 100% !important;
	height: auto !important;
	max-width: 100% !important;
	max-height: 100% !important;
}
```

You can use `.img-fluid` tu use only theses rules or if you prefer `object-fit` you can use `.img-contain` and `.img-cover` to add respectively an `object-fit: contain;` and an `object-fit: cover;`

!> It also means if you want to make you own image class you can extend the `%img` to have a base to work with

## Source Code
```scss
/// base of image container
/// ============================
%img {
	width: 100% !important;
	height: auto !important;
	max-width: 100% !important;
	max-height: 100% !important;
}

/// images class
/// ============================
.img-fluid {
	@extend %img;
}

.img-contain {
	@extend %img;
	object-fit: contain !important;
}

.img-cover {
	@extend %img;
	object-fit: cover !important;
}
```