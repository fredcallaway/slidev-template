---
theme: ./theme
drawings:
  persist: false
transition: none
mdc: true
colorSchema: 'light'
contextMenu: false
canvasWidth: 1600
---

# A big title that is too darn long
<Date />

---

# Shapes on a grid

<GridLines major />

<!-- todo: option to corner positions instead  -->
<Box bg-green l5 t10 w100 h40 />
<Box bg-red h10 w10 r10 t10 />
<Box bg-black border-red text-white l10 t20 w10 h10 label="A" font-bold />
<Box bg-amber border-4 b10 w130 h10 />
<!-- <PosBox x=80 y=40 w=44 h=24 /> -->

---

# Reasonable images

This text describes the image that you see. It is somewhat long but not that long.

<img src="https://dummyimage.com/500x500"/>

---

# Unreasonably wide image

This text describes the image that you see. It is somewhat long but not that long.

<img src="https://dummyimage.com/2000x500" w-100/>

---

# Using `<flex>` to align images and text

<flex>
This text describes the image that you see. It is somewhat long but not that long.
<img src="https://dummyimage.com/2000x500" w100/>
</flex>

---

# flex-1

<div flex-1 mx-2>
<img src="https://dummyimage.com/1000x1000"/>
</div>

<div flex-1 mx-2>
<img src="https://dummyimage.com/1000x1000"/>
</div>

<div flex-1 mx-2>
<img src="https://dummyimage.com/1000x1000"/>
</div>

<div flex-1 mx-2>
<img src="https://dummyimage.com/1000x1000"/>
</div>

::bottom::
Wow look at this text!

::cite::
Callaway

---

# Using `<div col/>`

<div col bord>
<img src="https://dummyimage.com/1500x500"/>
This text describes the image that you see. It is somewhat long but not that long.
</div>

<div col bord>
<img src="https://dummyimage.com/1500x500"/>
This image looks the same. But it is actually different!
</div>

---

# Using `<div col/>`

<div col bord flex-2>
<img src="https://dummyimage.com/1500x500"/>
This text describes the image that you see. It is somewhat long but not that long.
</div>

<div col bord flex-1>
<img src="https://dummyimage.com/1500x500"/>
This image looks the same. But it is actually different!
</div>

<div col bord flex-1>
<img src="https://dummyimage.com/1500x500"/>
This image looks the same. But it is actually different!
</div>



---

# Two wide images

This text describes the image that you see. It is somewhat long but not that long.
But there is a problem.

<flex gap-2>
  <img src="https://dummyimage.com/2000x500" flex-1/>
  <img src="https://dummyimage.com/2000x500" flex-1/>
</flex>

---

# Unreasonably tall image

<img src="https://dummyimage.com/500x2000"/>


---

::banner{.w60}
Section title
::

::flex-1{.-mt-10}
This text describes the section.
::