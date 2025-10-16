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
grid: false
---

# A rational model of perceived control negative thinking, and avoidance

---

<img src='./img/2025-10-15-23-22-42.png' full/>

---


# Three questions

1. Why do people think about bad things?
2. Why do people _not_ think about bad things?
3. Why do some people think about bad things too much?

---

## why think about bad things?

---

TODO: examples

---

<img src='./omni/Canvas 1.png' full />

---

<img src='./omni/Canvas 2.png' full />

---

<img src='./omni/Canvas 3.png' full />

---

<img src='./omni/Canvas 3.png' full />


<Switch>

  <Box l=0 t=0 w=80 h=40 text-sm justify-between flex-col>

  ## rational choice
  $$ \sum_{o} p(o) U(o) > 0 $$

  _expected utility_
  </Box>

  <Box l=0 t=0 w=80 h=40 text-sm justify-between flex-col>

  ## bounded-rational choice
  $$ \frac{1}{N} \sum_{i}^N U(x_i) > 0,\quad x_i \sim p(o) $$
  _sampling_
  </Box>

  <Box l=0 t=0 w=80 h=40 text-sm justify-between flex-col>

  ## resource-rational choice
  $$ \sum_{i}^N \text{sign}(x_i) > 0,\quad x_i \sim p(o) \cdot \big| U(o) \big| $$

  _utility-weighted sampling_

  </Box>

</Switch>

---


