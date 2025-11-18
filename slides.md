---
date: 2025-11-18
theme: ./theme
titleTemplate: "%s"
drawings:
  persist: false
transition: none
mdc: true
colorSchema: 'light'
contextMenu: false
canvasWidth: 1600
outline: |
  - cognition as action
  - optimal attention in preferential choice
  - optimal planning algorithms
  - working memory constraints might be important
---

# cognition as action


Fred Callaway

NYU & Harvard

<Box w30 l100 b19 tilt text-dartmouth border-dartmouth text-lg>
  <span italic text-sm>starting fall '26</span>
  Dartmouth!
</Box>

---
src: ./pages/intro/intro.md
hide: true
---

---

<Outline click/>

---

<Outline at=1 />

---
src: ./pages/theory/theory.md
hide: false
---

---

<OutlineTransition at=2 />

---
src: ./pages/attention/attention.md
hide: false
---
---

<OutlineTransition at=3 />

---
src: ./pages/planning/planning.md
hide: false
---

---
src: ./pages/planning22/planning22.md
hide: false
---
---

<OutlineTransition at=4 />

---
src: ./pages/eyeplan/eyeplan.md
hide: false
---

---

## what next?

---

# Learning representations for planning

<Profile name="Sixing Chen" src="/people/sixing.png" />

<img src='./img/metamdp-rnn.png' mt-2 scale-90/>

---

# Learning representations for planning

<Profile name="Sixing Chen" src="/people/sixing.png" />

![](./img/sixing-rnn-backups.png)


<Pointer x=110 y=46 rot=-1 v-click/>

<Box text-sm r5 b2 w31 tilt-l shadow-xl v-click>
  predecessor representation?
</Box>


---

# WM maintenance for planning

<img l0 v-click src="./pages/zhuojun/task.svg" mt-10 scale-95 style="clip-path: inset(0% 0% 50% 0%);" />

<img l0 src="./pages/zhuojun/task.svg" mt-10 scale-95 style="clip-path: inset(50% 0 0 0);" />

<Profile name="Zhuojun Ying" src="/people/zhuojun.avif"  />



---

# Iterated rate-distortion for planning

<img src='./pages/zhuojun/model.svg' full scale-95/>
<Profile name="Zhuojun Ying" src="/people/zhuojun.avif"  />

<Box r48 b24 w37 tilt shadow-xl italic>
  variational RNN
</Box>

::rcite::
in CogSci 2024 & 2025


---

# Better memory for better paths

<div flex flex-row gap-10 mt-5>
  <div text-center>
    <div ml-25 font-bold translate-y-5>participants</div>
    <img src="./pages/zhuojun/6n_human/path_rank_discrete.svg" w-60 /></div>
  <div text-center>
    <div ml-25 font-bold translate-y-5>model</div>
    <img src="./pages/zhuojun/6n_model/path_rank_discrete.svg" w-60 /></div>
</div>

<Profile name="Zhuojun Ying" src="/people/zhuojun.avif"  />
<p l0 b0>
  <span font-500 text="#cbc9dc">exposure</span>
  <br>
  <span font-500 text="#8e5572">planning</span>
</p>

---

# Parent reward facilitates memory for child

<img src='./img/parent-leaf.png' l0 t13 w19 />

<div flex flex-row gap-10 mt-5 ml-10>
  <div text-center>
    <div ml-25 font-bold translate-y-10>participants</div>
    <img src="./pages/zhuojun/6n_human/other_reward_discrete.svg" w-60 /></div>
  <div text-center>
    <div ml-25 font-bold translate-y-10>model</div>
    <img src="./pages/zhuojun/6n_model/other_reward_discrete.svg" w-60 /></div>
</div>

<Profile name="Zhuojun Ying" src="/people/zhuojun.avif"  />
<p l0 b0>
  <span font-500 text="#cbc9dc">exposure</span>
  <br>
  <span font-500 text="#8e5572">planning</span>
</p>

---

# Cultural evolution of compositional abstractions

<div b0 r0 w76 h80 bg-white v-click.hide />

<img src='./img/culture-model.svg' />

<!-- <img src='./img/comp-social.png' l87 t18 w50 /> -->

---

### is that it?

---

## Nope!

<Box v-click l16 t15 tilt-l label="computational<br>psychiatry"  />
<Box v-click r15 t30 rotate-15 label="metacognitive control<br>of memory recall" />
<Box v-click l30 t60 rotate-5 label="computer-assisted<br>decision making" />

---

## come work with me!

<div text-center mt-5 v-click>
  
  _and these cool folks too!_
  
  <div flex="~ row gap-30" mt-3 items-center>
    <div text-center w-20>
      <img src='./img/jphil.jpg' style="height: 300px; width: 300px; object-fit: cover;" />
      <p>Jonathan Phillips</p>
    </div>
    <div text-center w-20>
      <img src='./img/sfrank.png' style="height: 300px; width: 300px; object-fit: cover;" />
      <p>Steven Frankland</p>
    </div>
  </div>

</div>


<div r2 b1 text-gray-500>fredcallaway@gmail.com</div>

---


### that's all folks!