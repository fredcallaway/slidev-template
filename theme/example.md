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

---

# Shapes on a grid

<GridLines major />

<!-- todo: option to corner positions instead  -->
<Box bg-blue l5 t10 w100 h40 />
<Box bg-red h10 w10 r10 t10 />
<Box bord bg-white l10 t20 w10 h10 label="A" font-bold text-2xl/>
<Box bg-black l5 b10 w100 h10 />

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

---

# Math Component

<div class="test-math">
  <h2>Inline Math:</h2>
  <p>Here's some inline math: 
    <Math tex="\sum_x f(x)" inline /> and 
    <Math tex="\alpha + \beta = \gamma" inline />
  </p>
  
  <h2>Display Math:</h2>
  <Math tex="\sum_{i=1}^{n} x_i = \frac{n(n+1)}{2}" />
  
  <h2>Complex Expression:</h2>
  <Math tex="\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}" />
</div>

<style>
.test-math h2 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.test-math p {
  margin-bottom: 1rem;
}
</style>