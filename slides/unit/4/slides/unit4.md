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
