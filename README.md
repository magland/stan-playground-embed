# Stan Playground Embed

This JavaScript library creates a custom `<stan-playground-embed>` HTML element that allows you to embed interactive Stan Playground instances in your web pages.

## Usage

You can include the library in two ways:

### 1. Remote Script
```html
<script src="https://cdn.jsdelivr.net/gh/magland/stan-playground-embed@main/stan-playground-embed-v1.js"></script>
```

### 2. Include the Script Directly
Copy the `stan-playground-embed-v1.js` file into your project and include it in your HTML.

### Basic Example
```html
<stan-playground-embed>
<iframe width="100%" height="500" frameborder="0"></iframe>
<script type="text/plain" class="stan-program">
// Your Stan program here
</script>
<script type="text/plain" class="stan-data">
// Your JSON data here
</script>
</stan-playground-embed>
```

See a [live example here](https://magland.github.io/stan-playground-embed/stan-playground-embed-example-remote-script).

The component requires three elements:
- An `iframe` for displaying the Stan Playground
- A script element with class `stan-program` containing your Stan model
- A script element with class `stan-data` containing your model's data in JSON format
