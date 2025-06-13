---
theme: ./theme
drawings:
  persist: false
transition: none
mdc: true
colorSchema: 'light'
contextMenu: false
canvasWidth: 1600
addons:
  - slidev-component-scroll
---

# A big title that is too darn long

2025-05-28

---

# Shapes on a grid

This is text. I'm not sure why it goes here.

<!-- todo: option to corner positions instead  -->
<box bg-blue l5 t10 w100 h30 />
<box bg-red h10 w10 r10 t10 />
<box bord bg-white l10 t20 w10 h10 label="A" font-bold text-2xl/>

:box{.bg-black.l5.b10.w100.h10}

---

# Reasonable images

This text takes up a full row. {.w-full}

:fig{src="https://dummyimage.com/500x500" border="black 10"}

<fig src="./img/500x500.png" border="10 red"/>


---

# Image and caption

This text tries to describe the image that you see. It is somewhat long but not that long. {.flex-1}

:fig{src="https://dummyimage.com/2000x2000" border="black 10"}



---

# Unreasonably wide image

The image is too wide but it fits automatically. You should not try to use a side caption for this kind of image.

<fig src="https://dummyimage.com/2000x500"/>

---

# Using `::row` for side captions

::row
  This text tries to describe the image that you see. It is somewhat long but not that long.
  :fig{src="https://dummyimage.com/1000x500"}
::

::row
  This text tries to describe the image that you see. It is somewhat long but not that long.
  :fig{src="https://dummyimage.com/1000x500"}
::

---

# Using `::row` for two wide images

This is my description of the images. There is space for it because we use a row to keep the images in the bottom section. 

::row
  :fig{src="https://dummyimage.com/2000x1000"}
  :fig{src="https://dummyimage.com/2000x1000"}
::

I can have text down here too!

---

# Using `column` to prevent wrapping

::column
  <!-- todo: fig doesn't work here because it adds padding -->
  :img{src="https://dummyimage.com/1500x500"}
  This text describes the image that you see. It is somewhat long but not that long.
::

::column
  :img{src="https://dummyimage.com/1500x500"}
  This image looks the same. But it is actually different!
::

--- 

# Any number of `column`s

::column{.bord .p3}
  :img{src="https://dummyimage.com/1500x500"}
  This text describes the image that you see. It is somewhat long but not that long.
::

::column{.bord .p3}
  :img{src="https://dummyimage.com/1500x500"}
  This image looks the same. But it is actually different!
::

::column{.bord .p3}
  :img{src="https://dummyimage.com/1500x500"}
  :img{src="https://dummyimage.com/1500x500"}
  :img{src="https://dummyimage.com/1000x500"}
  _much image_
::


---

# Use `flex-1` for unreasonably tall image

Nulla posuere fringilla lectus non ultrices. Proin eu condimentum ligula, nec egestas nibh. Nulla vel arcu vel augue semper accumsan. Phasellus ex lorem, volutpat ut velit vitae, dictum vestibulum augue. {.flex-1}

:fig{src="https://dummyimage.com/1000x1500"}


---

# Fig

:fig{src="https://dummyimage.com/3000x1500"}

---

# Fig 2

:fig{src="https://dummyimage.com/3000x3000" .bord}

:fig{src="https://dummyimage.com/3000x3000" .bord}
