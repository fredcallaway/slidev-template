---
theme: ./theme
titleTemplate: "%s"
drawings:
  persist: false
transition: none
mdc: true
colorSchema: 'light'
contextMenu: false
canvasWidth: 1600
layout: default
---

<SimpleFrame scale-135 translate-y-13 full
  src="/graphnav-demo/index.html?block=main&fast=1&hover_rewards=0&hover_edges=0&two_stage=0"
  scrolling="no"
  width="700"
  height="800"
  t-2
/>

<Box v-click text-sm l5 t16 w38 tilt-l shadow-xl>
  points and arrows change on every trial
</Box>

<Box v-click text-sm r5 t7 w48 tilt shadow-xl>
  scrambled structure forces internal maintenance of paths and values
</Box>

---

# Eye tracking

<Box r5 t5 tilt w-45 z-1 v-click title="Gaze contingent display">
Reward appears when gaze is nearby
</Box>

<img full src="./img/task.png" mt-3>

::background::
<div fixed inset-0 style="background-color: #989898; width: 100%; height: 100%"/>

---

<div l0 r0 v-click  />

<SlidevVideo full :key=$clicks :autoplay="$clicks == 1" autoreset="slide">
  <source src="./videos/P01-16.mp4" type="video/mp4"/>
</SlidevVideo> 

---

<TrialViewer trials="pid=1&trial=16" />

---

# Basic performance

<img src='./fig/eyeplan/true-optimal/nfix_score.png' w-60 mt-2 />

---

## where do people look?

---

# Fixations by depth

<img src='./fig/eyeplan/best-first/trial_props-depth.png' />

---

# Fixations by reward

<img src='./fig/eyeplan/best-first/trial_props-reward-alt.png' />

---

### not looking great

---

# Another perspective

![](./img/pfeifer2013.png)

::cite::
Pfeifer & Foster (2013)

---

<TrialViewer trials="pid=2&trial=30&timeline=0"  />

<div v-click text-lg l30 t16 w40 tilt-l italic>
  "rollouts"
</div>

---

# Tree-search or rollouts?

<div flex="~ row gap-10" mr-10>
  <Fig label="tree search" h-60>
    <img src="./img/tree-search.svg" />
  </Fig>
  <Fig label="rollouts" h-60>
    <img src="./img/rollouts.svg" />
  </Fig>
</div>


<Box v-click text-sm l0 t16 w40 tilt-l shadow-xl>
  explicit reasoning about alternatives
</Box>

<Box v-click text-sm r0 t16 w40 tilt shadow-xl>
  implicit learning from simulated experience
</Box>

<Box v-click text-sm l0 b5 w35 tilt shadow-xl>
  fast but<br> memory-intensive
</Box>

<Box v-click text-sm r0 b5 w35 tilt-l shadow-xl>
  low-memory<br> but slow
</Box>


---

# Fixations by depth

<img src='./fig/eyeplan/basic/trial_props-depth.png' />


---

# Fixations by reward

<img src='./fig/eyeplan/basic/trial_props-reward-alt.png' />

---

### rollouts look pretty good

---

## where do people look _next_? 

---

# Keep it in the family

<img src='./img/relationships.svg'/>

---

# Saccades reflect local search

<img src='./img/relationships.svg' r0 t0 w-25/>
<img src='./fig/eyeplan/basic/saccades-simple_type-deep.png' mt-10 scale-90/>

---

# Child or sibling?

<img src='./img/relationships.svg' r0 t0 w-25/>
<img src='./fig/eyeplan/basic/saccades-this_reward.png' mt-10 scale-90/>


---

### well now it looks more like best-first

---

# Sophie's Choice (which child?)

<img src='./omni/child-v-child.png' r0 t0 translate-y--1 w-18/>
<img src='./fig/eyeplan/basic/which_child-action_value.png' mt-10/>


---

# Depth over time

<img src='./fig/eyeplan/basic/saccades-time-depth-simple.png' />


---

<h3 class="!text-3xl">...</h3>

---

## is there something in between?

---

# What's in between

<div flex="~ row gap-5" >
  <Fig label="rollouts" h-60>
    <img src="./img/rollouts.svg" />
  </Fig>
  <Fig label="???" h-60 v-click >
    <img src="./img/limited-capacity.svg" />
  </Fig>
  <Fig label="tree search" h-60>
    <img src="./img/tree-search.svg" />
  </Fig>
</div>

---
hide: true
---

# Best-first search with limited memory

<div flex="~ row gap-5" >
  <Fig label="capacity 1" h-60>
    <img src="./img/rollouts.svg" />
  </Fig>
  <Fig label="capacity 3" h-60>
    <img src="./img/limited-capacity.svg" />
  </Fig>
  <Fig label="capacity ∞" h-60>
    <img src="./img/tree-search.svg" />
  </Fig>
</div>

---

# Best-first search with limited memory


<div column w91>

<v-click>

**Working memory** holds a **decision tree**
</v-click>

- tracks exact path values and a search frontier {v-click}
- hard capacity constraint {v-click}
- best-first search {v-click}

<v-click>

**Short-term memory** (?) holds a **value function**
</v-click>

- tracks statistical state-reward associations {v-click}
- no capacity constraint, but inexact learning {v-click}
- RL-style exploration (UCB) {v-click}

</div>


<img src="./img/limited-capacity.svg" h60 float-end translate-y--5 />


---

# Fixations by depth

<img src='./fig/eyeplan/capacity/trial_props-depth.png' />

---

# Fixations by reward

<img src='./fig/eyeplan/capacity/trial_props-reward-alt.png' />


---

# Local search

<img src='./img/relationships.svg' r0 t0 w-25/>
<img src='./fig/eyeplan/capacity/saccades-simple_type-deep.png' mt-10/>


---

# Child or sibling?

<img src='./img/relationships.svg' r0 t0 w-25/>
<img src='./fig/eyeplan/capacity/saccades-this_reward.png' mt-10 />

---

# Which child?

<img src='./omni/child-v-child.png' r0 t0 w-20/>
<img src='./fig/eyeplan/capacity/which_child-action_value.png' mt-10/>

---

### they all look the same

---



# Depth over time

<img src='./fig/eyeplan/capacity/saccades-time-depth-simple.png' />

---


# Distant relatives

<img src='./fig/eyeplan/capacity/saccades-complex_type.png' />


---

# Pruning?

<img src='./fig/eyeplan/capacity/lag-reward-child-first.png' />

<Pointer x=29 y=40 rot=5.5 v-click=1 />
<Pointer x=85 y=40 rot=5.5 v-click=1 />

::cite::
c.f. huys2012bonsai

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

<img l0 v-click src="./zhuojun/task.svg" mt-10 scale-95 style="clip-path: inset(0% 0% 50% 0%);" />

<img l0 src="./zhuojun/task.svg" mt-10 scale-95 style="clip-path: inset(50% 0 0 0);" />

<Profile name="Zhuojun Ying" src="/people/zhuojun.avif"  />



---

# Iterated rate-distortion for planning

<img src='./zhuojun/model.svg' full scale-95/>
<Profile name="Zhuojun Ying" src="./zhuojun.avif"  />

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
    <img src="./zhuojun/6n_human/path_rank_discrete.svg" w-60 /></div>
  <div text-center>
    <div ml-25 font-bold translate-y-5>model</div>
    <img src="./zhuojun/6n_model/path_rank_discrete.svg" w-60 /></div>
</div>

<Profile name="Zhuojun Ying" src="./zhuojun.avif"  />
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
    <img src="./zhuojun/6n_human/other_reward_discrete.svg" w-60 /></div>
  <div text-center>
    <div ml-25 font-bold translate-y-10>model</div>
    <img src="./zhuojun/6n_model/other_reward_discrete.svg" w-60 /></div>
</div>

<Profile name="Zhuojun Ying" src="./zhuojun.avif"  />
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