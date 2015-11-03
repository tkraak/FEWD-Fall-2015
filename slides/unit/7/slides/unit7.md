class: center, middle

## Unit 7
# .red-text[Responsive Web Design]

---
name: rwd-definition
class: center, middle
# What is Responsive Web Design (RWD)?

![Responsive Web Design](/slides/unit/7/slides/rwd.jpg)

---
name: rwd-ethan-marcotte

# .red-text[Ethan Marcotte:]

> ## <em>"The web's moved beyond the desktop, and it's not looking back. The number of devices we're designing for is growing just as quickly as mobile traffic."</em>

### - .red-text[2010:] alistapart.com/article/responsive-web-design/
### - .red-text[2011:] Responsive Web Design (first edition)
### - .red-text[2014:] Responsive Web Design (2nd edition)

???
A List Apart: [Responsive Web Design](http://alistapart.com/article/responsive-web-design/) by Ethan Marcotte

A Book Apart: [Responsive Web Design](http://abookapart.com/products/responsive-web-design)

Creative Bloq: [Ethan Marcotte on responsive web design](http://www.creativebloq.com/netmag/ethan-marcotte-responsive-web-design-1126512)

---
name: rwd-timeline

# .red-text[Ethan Marcotte:]

> ## <em>"I think of responsive design as an alternative to mobile sites."</em>

# Desktop & Laptop &rarr; iPhone .red-text[(2007)] &rarr; EM RWD .red-text[(2010)] &rarr;

# EM RWD Book .red-text[(2011 1st ed.)] &rarr; EM RWD Book .red-text[(2014 2nd ed.)]

---

name: rwd-principles
class: center

# .red-text[3 Core Components of RWD]

### - Fluid grid
### - Flexible images
### - Media queries


---
name: rwd-layouts
class: center, middle

# Fixed Width Layout .red-text[(rigid px)] &rarr; Liquid Layout .red-text[(arbitrary %)]
# &rarr; Fluid Grid .red-text[(smart % proportions)]

---

name: rwd-fluid-grid
class: center

# .red-text[Fluid Grid]

## target / context = result

### 960px / 1920px = 50%

.float-left[<img src="/slides/unit/7/slides/rwd-fluid-grid.png" alt="Fluid Grid" style="width: 600px;"/>]

## &#9825;

#### smart proportions

#### .red-text[sidebar:] 300px / 960px = 31.25%
#### .red-text[main content:] 640px / 960px = 66.66667%
#### .red-text[margin:] 20px / 960px = 2.08334%

???
Treehouse: [The 2014 Guide to Responsive Web Design](http://blog.teamtreehouse.com/modern-field-guide-responsive-web-design)

---

name: rwd-flexible-image
class: center

# .red-text[Flexible Images]

```html
img { max-width: 100%; }
```

### - images should only ever be as large as their physical width in pixels
### - if nested inside a smaller parent container, then the image should shrink
### - height will be calculated automatically, will maintain original aspect ratio
