class: center, middle

# Unit 4
## Cascading Style Sheets (CSS)
### Styling Markup (HTML) Documents

???

* style sheet language for formatting / styling markup languages such as HTML
* enables the separation of content (HTML) and presentation (CSS)

---
name: css-browser
background-image: url(slides/css-browser.png)

---
class:

# .red-text[Every] HTML Element is a Box
### - block level elements are boxes

```html
<h1> <p> <section>
```

### - inline level elements are boxes

```html
<img> <span> <em>
```

???
[The CSS "Ah-ha!" Moment](https://css-tricks.com/the-css-ah-ha-moment/)

---
class:

# Simulate Boxes in Chrome DevTools

```css
* {
    outline: solid 1px hotpink;
  }
```  

```css
img {
      outline: dotted 1px lime;
    }  
```

```css
em {
      outline: dashed 1px tan;
    }  
```

```css
span {
      outline: double 1px salmon;
    }  
```

???
[Outlined HTML Elements in Chrome DevTools](https://www.youtube.com/watch?v=4CZveCrrGS0)

---
class:

## CSS allows us to create rules that control the way that each individual box (and its content) is presented.

```css
h1 {
  font-family: Arial sans-serif;
  font-size: 2em;
  color: tomato;
}
```

```css
p {
  border-bottom: 1px solid black;
}
```

```css
section {
    width: 100px;
    height: 100px;
    background-color: tomato;
  }
```

???

## Boxes
* width and height
* borders (color, with, style)
* background color and images
* position in browser window

## Text
* typeface
* size
* color

---
class: center, middle

# CSS Associates Style Rules with HTML Elements
## Fundamental CSS syntax:
### - rules
### - selectors
### - declarations
### - properties
### - values

???
## Learn more

* [Getting to Know CSS](http://learn.shayhowe.com/html-css/getting-to-know-css/)
* [The Best Way to Learn CSS](http://webdesign.tutsplus.com/tutorials/the-best-way-to-learn-css--webdesign-11906)

---
name: css-rule
class:
background-image: url(slides/css-rule.png)

???
* CSS rules govern how the content of the specified element should be displayed

---
name: css-selector-declaration
class:
background-image: url(slides/css-selector-declaration.png)

???
* selectors indicate which element the rule applies to
* declarations indicate how the element referred to in the selector should be styled

---
name: css-property-value
class:
background-image: url(slides/css-property-value.png)

???
* properties indicate the aspects of the element to be changed (color, font, border, etc.)
* values specify the settings to use for the chosen property

---
name: css-inline
class:

## Inline CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>
  </head>
  <body>

    <h1 style="color: red;">Welcome to Thimble</h1>

    <p>Make something <span style="font-weight: bold;">amazing</span>!</p>

  </body>
</html>
```

---
name: css-internal
class:

## Internal CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>

    <style type="text/css">

      body {font: 200%/1.5 Bradley Hand, Segoe Script, cursive;}

      header {
        background-color: white;
        padding-left: 5%;
      }

      h1 {font: 150%/1.5 'Yanone Kaffeesatz';}

    </style>

  </head>
  <body>

  </body>
</html>
```  

---
name: css-external
class:

## External CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>

    <link rel="stylesheet" href="css/style.css">

  </head>
  <body>
    <h1>Welcome to Thimble</h1>
    <p>Make something <strong>amazing</strong> with the web!</p>
  </body>
</html>
```

---
name: css-external
class:

## Multiple External Stylesheets

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>

    <link rel="stylesheet" href="reset/normalize.css">
    <link rel="stylesheet" href="bootstrap/main.css">
    <link rel="stylesheet" href="css/custom.css">

  </head>
  <body>
    <h1>Welcome to Thimble</h1>
    <p>Make something <strong>amazing</strong> with the web!</p>
  </body>
</html>
```

---
name: css-selectors
class: center, middle

# .red-text[CSS Selectors]

## - ID Selector
## - Class Selector
## - Tag Selector
## - Child Selector
## - Descendant Selector

---
name: css-id-selector
class:

## ID Selector

.float-left[

### .red-text[CSS]
```css
#happy-cake {

}
```
]

.float-right[

### .red-text[HTML]
```html
<!-- WILL match -->
<div id="happy-cake"></div>

<!-- WILL match -->
<aside id="happy-cake"></aside>

<!-- Will NOT match -->
<div id="sad-cake">Wrong ID!</div>

<!-- Will NOT match -->
<div class="happy-cake">That's not an ID!</div>
```
]

???

ID selectors are the most powerful type of selector in terms of CSS specificity. Meaning that they beat out other types of selectors and the styles defined within win. That sounds good, but that's typically considered bad, because it's nice to have lower-specificity selectors that are easier to override when needed.

---
name: css-class-selector
class:

## Class Selector

.float-left[

### .red-text[CSS]
```css
.module {

}
```
]

.float-right[

### .red-text[HTML]
```html
<!-- WILL match -->
<div class="module"></div>

<!-- WILL match -->
<aside class="country module iceland"></aside>

<!-- Will NOT match -->
<div class=".module">The dot is for CSS, not HTML</div>

<!-- Will NOT match -->
<div class="bigmodule">Wrong class</div>
```
]

???

Class selectors are your friend. They are probably the most useful and versatile selectors out there. In part because they are well supported in all browsers. In part because you can add multiple classes (just separated by a space) on HTML elements. In part because there are JavaScript things you can do specifically for manipulating classes.

---
name: css-tag-selector
class:

## Tag Selector

.float-left[

### .red-text[CSS]
```css
h2 {

}
```
]

.float-right[

### .red-text[HTML]
```html
<!-- WILL match -->
<h2>Hi, Mom</h2>

<main>
  <div>
     <!-- WILL match -->
     <h2>Anywhere</h2>
  </div>
</main>

<!-- Will NOT match -->
<div class="h2">Wrong tag, can't trick it</div>

<!-- Will NOT match -->
<h2class="yolo">Make sure that tag has a space after it!</h2>
```
]

???

Tag selectors are at their most useful when changing properties that are unique to that HTML element. Like setting the list-style on a <ul> or tab-size on a <pre>. Also in reset stylesheets where you are specifically trying to unset styles that browsers apply to certain elements.

Don't rely on the them too much though. It's typically more useful to have a class define styling that you can use on any HTML element.

---
name: css-child-selector
class:

## Child Selector

.float-left[

### .red-text[CSS]
```css
ol > li {
  margin: 5px;
}
```
]

.float-right[

### .red-text[HTML]
```html
<ol>
  <li>WILL be selected</li>
  <li>WILL be selected</li>
  <ul>
     <li>Will NOT be selected</li>
     <li>Will NOT be selected</li>
  </ul>
  <li>WILL be selected</li>
</ol>
```
]

???

A child selector in CSS is the "greater than" symbol. It means "select elements that are direct descendants only". In this case: "select list items that are direct descendants of an ordered list".


---
name: css-descendant-selector
class:

## Descendant Selector

.float-left[

### .red-text[CSS]
```css
ul li {  }
header h2  {  }
footer a  {  }
.module div {  }
#info-toggle span  {  }
div span  {  }
```
]

.float-right[

### .red-text[HTML]
```html
<div>
  <span>I will match</span>
  <ul>
    <li>
       <span>I will match too</span>
    </ul>
  </ul>
</div>
```
]

???

A descendant selector in CSS is any selector with white space between two selectors without a combinator. Descendant means anywhere nested within it in the DOM tree. Could be a direct child, could be five levels deep, it is still a descendant. This is different than a child combinator (>) which requires the element to be the next nested level down.
