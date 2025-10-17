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
2. Why do people think about good things?
3. Why do some people think about bad things too much?

---

# People think about bad things

- car crashes(Christianson & Loftus, 1987)
- shocks (Sunstein & Zeckhauser, 2011)
- prediction errors (Rouhani et al., 2018)

<!-- img/shock.png -->

<!-- 

Evidence from judgments, memory recall, and incentivized choice suggest that people over-weight catastrophic events, whether its a car crash...

Prevalence -> should be a rational

-->

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

# Utility-weighted sampling

<div flex="~ row" w-full items-center text-sm>
  <fig label="possible outcomes">
    <img src='./fig/risky.png' />
  </fig>
  <fig text-100pt>×</fig>
  <fig label="utility-weighted sampling">
    <img  src='./fig/uws.png' />
  </fig>
  <fig text-100pt>=</fig>
  <fig label="considered outcomes">
    <img  src='./fig/uws_considered.png' />
  </fig>
</div>

---

### where's the negativity bias?

---

# Utility-weighted sampling

<div flex="~ row" w-full items-center text-sm>
  <fig label="possible outcomes">
    <img src='./fig/risky.png' />
  </fig>
  <fig text-100pt>×</fig>
  <fig label="utility-weighted sampling">
    <img  src='./fig/uws.png' />
  </fig>
  <fig text-100pt>=</fig>
  <fig label="considered outcomes">
    <img  src='./fig/uws_considered.png' />
  </fig>
</div>

<Pointer x=35 y=54 rot=1 v-click color=red />

---

# Utility-weighted sampling + negative skew

<div flex="~ row" w-full items-center text-sm>
  <fig label="possible outcomes">
    <img src='./fig/skew.png' />
  </fig>
  <div text-100pt>×</div>
  <fig label="utility-weighted sampling">
    <img src='./fig/uws.png' />
  </fig>
  <div text-100pt>=</div>
  <fig label="considered outcomes">
    <img src='./fig/considered_skew.png' />
  </fig>
</div>


::bottom::

<div flex="~ row" w-140 mx-auto items-center text-lg justify-between v-click>
  <div w-35 line-height-tight >realistic outcome distribution</div>
  <div w-35 >extremity bias</div>
  <div w-35 >negativity bias</div>
</div>

---

## why doesn't everyone do this?

---

# People think about good things

<!-- <img src='./img/bear-result.png' /> -->

- blurting things out bear
- causal judgments Icard...Knobe
- what is "normal" Bear & Knobe
- value-directed attention (gluth, anderson, me)
- attention/planning (me?)

---

# People think about good things

<img src='./img/bear-result.png' />


---

what's in common? it's things we can control!

---

<img src='./omni/Canvas 3.png' full />

<img l85 b41 opacity-100 w-40 src='./fig/skew.png' />

---

<img src='./omni/Canvas 5.png' full />


<div r30 t35 text-yellow v-click>

$$\alpha$$
</div>

<div r56 t35 text-yellow v-click>

$$1 - \alpha$$
</div>

<div r10 t39 text-yellow text-xl italic underline v-click>control</div>

---

# How does control affect outcomes?

<CurveVideo :autoplay="$clicks >= 1" :name="$clicks >= 3 ? 'normal-fit' : 'normal'"  />

<div t17 flex="~ row" w-146 mx-auto items-center text-lg justify-between text-center ml7>
  <div font-bold w-45 line-height-tight>achieved outcomes</div>
  <div font-bold w-45 >relative probability</div>
  <div font-bold w-45 >reconstructed</div>
</div>

<div l50 bg-white w-50 h70 v-click.hide=2 />
<div l100 bg-white w-50 h70 v-click.hide=4 />

---
clicks: 1
---

# How does control affect outcomes?

<CurveVideo :autoplay="$clicks >= 1" name="skew-fit" />

<div t17 flex="~ row" w-146 mx-auto items-center text-lg justify-between text-center ml7>
  <div font-bold w-45 line-height-tight>achieved outcomes</div>
  <div font-bold w-45 >relative probability</div>
  <div font-bold w-45 >reconstructed</div>
</div>

---



<div flex flex-row  items-center h-10 gap-10>

  <div flex flex-col>
    <Math text-baseline tex="\bar{p}(o)" />
    <Math text-received tex="p_α(o)" />
  </div>

  <div flex flex-col>
    <Math text-black tex="p_α(o) / \bar{p}(0)" />
    <Math text-bias tex="e^{\beta U(o)}" />
  </div>

  <Math text-sample tex="\bar{p}(o) \cdot e^{\beta U(o)}" />

</div>




---

- captures helplessness and hopelessness
- unifies reward-based and transition-based notions of control
- 
