class: center, middle

# Unit 5
## JavaScript (JS)
### Interactivity & Custom Behaviors

???

* HTML markup: "structural" layer of web pages
* CSS rules: "presentational" layer of web pages
* JavaScript: "behavioral" layer of web pages
---
name: js-history
class: center, middle
# Brief History of JavaScript
### - .red-text[1995]: created in 10 days by Brendan Eich at Netscape ("LiveScript")
### - .red-text[December 1995]: JS server-side scripting (Netscape Enterprise Server)
### - .red-text[1996]: standardized by ECMA ("ECMAScript")
### - .red-text[June 2015]: ECMAScript standard 6 released

???
[Wikipedia: JavaScript](https://en.wikipedia.org/wiki/JavaScript)

---
name: js-what-is

# .red-text[What is JavaScript?]

### - client-side scripting language
### - reliant on browser's capabilities and settings
### - dynamic programming language (browser interprets code on the fly, no compiler)
### - loosely typed ( don't necessarily have to tell JS what a variable is)



---
name: js-can-do

# .red-text[What can JavaScript do?]

### - controls the "behavioral" layer of web pages
### - all elements, attributes, and text on a web page can be accessed by scripts via the DOM
### - scripts can react to user input (alter contents, styles or browser behavior "on the fly")
### - request content and info from server and inject into page without refresh ("ajax")
### - test for browser features and capabilities (e.g. Modernizr.js)
### - fill in browser functionality gaps or add modern features to old browsers (e.g html5shiv.js)

???
[Modernizr](https://modernizr.com/) tells you what HTML, CSS and JavaScript features the user's browser has to offer.

The [HTML5 Shiv](https://github.com/afarkas/html5shiv) enables use of HTML5 sectioning elements in legacy Internet Explorer and provides basic HTML5 styling for IE 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x.
---
name: js-basics
class:

# .red-text[The Basics]

### - JavaScript is .red-text[case-sensitive] (myVariable is NOT the same as myvariable)
### - whitespace such as tabs and spaces are ignored unless its part of a string enclosed in quotes

```javascript
// this is a single-line comment
```

```javascript
/* This is a multi-line comment.

Anything in here will be
completely ignored
when the script runs.

*/
```

---

name: js-sample-script

# .red-text[A Sample Script]

### - a script is a series of instructions that the computer can follow one-by-one

```javascript
var today = new Date(); // each individual instruction is a statement
var hourNow = today.getHours(); // each statement starts on a new line
var greeting; // statements end with a semicolon

// statements enclosed in curly braces are known as code blocks

if (hourNow > 18) {
  greeting = "Good evening";
} else if (hourNow > 12) {
  greeting = "Good afternoon";
} else if (hourNow > 0) {
  greeting = "Good morning";
} else {
  greeting = "Welcome";
}

document.write(greeting);
```
---
name: js-sample-script-clean

# .red-text[Sample Script Without Comments]

```javascript
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Good evening";
} else if (hourNow > 12) {
  greeting = "Good afternoon";
} else if (hourNow > 0) {
  greeting = "Good morning";
} else {
  greeting = "Welcome";
}

document.write(greeting);
```
---

name: js-embed

# .red-text[Adding JavaScript to a Page]

## Embedded script

```html
<script>

  var header = $('header');

  $(window).scroll(function() {
    header.addClass('lower-opacity');

    if($(this).scrollTop() === 0) {
      header.removeClass('lower-opacity');
    }
  });

</script>
```
---
name: js-external-script

# .red-text[Adding JavaScript to a Page]

## External scripts

```html
<script src="my_script.js"></script>
```

???

- apply the same script to multiple pages

- each external script requires an additional HTTP request, which impacts performance
---
name: js-script-placement

# .red-text[Script Placement]

### JavaScript runs where it's found in the HTML
### `<script>` element can go anywhere in the document
### Most common places are in `<head>` and just before `</body>`

- Browser encounters a `<script>` element
- stops to load the script
- then checks if it needs to do anything

### This has implications for `<script>` placement, and can affect the loading time of pages.

???

- Don't sprinkle `<script>` elements throughout the HTML document, because that makes them difficult to find and maintain.

---
