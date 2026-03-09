---
theme: ./theme
drawings:
  persist: false
transition: none
mdc: true
colorSchema: 'light'
contextMenu: false
canvasWidth: 1600
date: 2026-03-11
title: culture-noga
outline: |
  - a model
  - a task
  - two experiments
  - some thoughts
---

# cultural evolution of compositional problem solving

---

# People are *wildly*{.text-comp} compositional

<v-clicks flex flex-row justify-between w-full > 
  <img h-55 src='./img/roux.png' />
  <img h-55 src='./img/joint.png' />
  <img h-55 src='./img/formal.png' />
</v-clicks>

---

# Modern AI is *mildly*{.text-bespoke} compositional

<style>
  ul > li { 
    list-style: none; 
    margin-bottom: 0.6em;
    font-weight: bold;
  }
  ul > li > ul > li { 
    list-style: square; 
    margin-bottom: 0.3em;
    font-weight: normal;
    font-size: 0.9em;
  }
</style>

<v-clicks depth="2">

  - Most "modern" AI systems show limited compositionality
    <br>[lake2017still, dasgupta2018evaluating, hupkes2020compositionality]{.cite}
  - Those that *are* compositional tend to fall into three types:<div h-1 />
    - explicit decomposition provided by a human
      <br>[dietterich2000hierarchical, erol1994umcp]{.cite}
    - strong inductive bias for one kind of decomposition
      <br>[chang2017compositional, kansky2017schema]{.cite}
    - learning from compositionally structured demonstrations or curricula
      <br>[luo2023learning, chen2021ask, silver2022inventing, lake2023humanlike]{.cite}

</v-clicks>

---

# A glaring exception

<img src='./img/elephant-gpt.png' scale-90 />

::rcite::
DALL-E (2024)

::cite::
farrell2025large


---

# What's in common here?

<div flex flex-row justify-between w-full items-center >
  <div h-55>
    <img h-55 mb--20 src='./img/roux.png' clip-0-0-50-0 />
    <img h-55 mv--20 src='./img/joint.png' clip-0-0-55-0 />
  </div>
  <img h-55 src='./img/formal.png' />
  <img h-35 src='./img/chat-gpt.png' />
</div>

<div fixed inset-0 w-full h-full z-10 flex-center bg="black/50" v-click>
  <Box w125 h-20 italic text-3xl bg-black text-white >
  They're all products of culture!
  </Box>
</div>

---

<Outline click />

---

<Outline at=1 />

