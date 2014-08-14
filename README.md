Rocket Popup 🚀
==============

Flexible and responsive popup library


How to use
----------

### Include the files

```html
<link rel="stylesheet" href="rocket-popup.css">

<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="rocket-popup.js"></script>
```

### Launch a Popup

Rocket popup doesn't have a javascript API (yet).
All configuration is handled by HTML5 data attributes.

The only requirements to launch a popup are to have:
* `rkt-launcher` as a class
* the HTML you want in the popup in an attribute called `data-cargo`

```html
<a class="rkt-launcher" data-cargo="<h1>We have liftoff!</h1>Click anywhere to close">5, 4, 3, 2, 1</a>
```

### Overlay

If you want a nice overlay to help users focus on the popup just add `rkt-atmosphere` to your main wrapping element.

```html
<body>
	<div class="container rkt-atmosphere">
```

### Configuration Options

| Attribute        | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| cargo            | The content that will be shown in the popup                                         |
| class            | Adds a class to the popup                                                           |
| flight-plan      | Put any javascript here that you want to run on the cargo before the popup is shown |
| height           | Adds height in pixels as an inline CSS style                                        |
| landing-sequence | Put and javascript here that you want to run before the cargo is destroyed          |
| max-height       | Adds max-height in pixels as an inline CSS style                                    |
| max-width        | Adds max-width in pixels as an inline CSS style                                     |
| min-height       | Adds min-height in pixels as an inline CSS style                                    |
| min-width        | Adds min-width in pixels as an inline CSS style                                     |
| width            | Adds width in pixels as an inline CSS style                                         |

_For all **height** and **width** settings, Rocket takes padding and border into concideration so you only have to worry about the size you want your content to be._


### Advanced Example

You can easily combine Rocket with other javascript libraries to create any kind of functionality.
Rocket just gets out of your way.

This example uses a great carousel plugin called [Owl Carousel](http://owlcarousel.owlgraphic.com/) to create a responsive carousel popup of videos:

```html
<!doctype html>
<html>
	<head>
		<title>Responsive Popup Video Carousel</title>
		<meta name="viewport" content="width=device-width, user-scalable=no">

		<!-- CSS -->
		<link rel="stylesheet" href="rocket-popup.css">
		<link rel="stylesheet" href="owlcarousel/owl.carousel.min.css">
		<link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css">

	</head>

	<body>
		<div class="container rkt-atmosphere">
			<a class="rkt-launcher" data-width="640"
									data-flight-plan="$('#rkt-shuttle .owl-carousel').owlCarousel({ items:1, nav:true, video:true, lazyLoad:true });"
									data-cargo='
										<div class="owl-carousel">
											<div class="item-video">
												<a class="owl-video" href="https://www.youtube.com/watch?v=FohBsp2eYqg"></a>
											</div>
											<div class="item-video">
												<a class="owl-video" href="https://www.youtube.com/watch?v=ViBzl1eQT0A"></a>
											</div>
										</div>'>
				Modal 3
			</a>
		</div>

		<!-- JavaScript -->
		<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
		<script src="rocket-popup.js"></script>
		<script src="owlcarousel/owl.carousel.min.js"></script>
	</body>
</html>

