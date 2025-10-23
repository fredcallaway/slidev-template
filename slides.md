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

<h1>How does control affect outcomes?</h1>


---
clicks: 6
---

<h1 v-if="$clicks < 4">How does control affect outcomes?</h1>
<h1 v-else>
  How <em>should</em> control affect
  <!-- How does <span text-bias>perceived control</span> affect -->
  <span text-sample>sampled</span> outcomes?
</h1>

<CurveVideo t5 
  :show0="$clicks == 0"
  :play="$clicks > 0"
  :name="(
    $clicks < 3 ? 'normal-default' : 
    $clicks < 5 ? 'normal-fit' : 
    $clicks < 6 ? 'skew-fit' :
    'skew-uws'
  )"
  :nFrame="$clicks < 6 ? 99 : 50"
/>


<div t12 flex="~ row" w-146 mx-auto items-center text-lg justify-between text-center ml4>
  <div v-if="$clicks == 0" font-bold w-45 line-height-tight text-baseline>
    possible outcomes
  </div>
  <div v-else font-bold w-45 line-height-tight text-received>
    achieved outcomes
  </div>
  <div font-bold w-45>
    <span v-if="$clicks < 4" text-black>relative probability</span>
    <!-- <span v-else-if="$clicks < 3" text-bias>relative probability</span> -->
    <span v-else-if="$clicks" text-bias>sampling bias</span>
    <!-- <span v-else>relative probability</span> -->
  </div>
  <div font-bold w-45 text-sample>sampled outcomes</div>
</div>

<div t9 l89 text-bias text-base tilt v-click=6>+UWS </div>

<img l0 b0 w20 v-click=5 src='./fig/curves/baseline-skew.svg' />



<div grid grid-cols-3 gap-5 items-center w-140 text-base>

  <div flex-center flex-col gap-2>
    <Math text-baseline tex="\bar{p}(o)" />
    <Math text-received tex="p_α(o)" v-click=1 />
  </div>

  <div flex-center flex-col gap-2>
    <Math inline tex="p_α(o) / \bar{p}(0)" />
    <Math v-if="$clicks >= 6" inline text-bias tex="e^{\beta U(o)} \cdot |U(o)|" />
    <Math v-else v-click=3 inline text-bias tex="e^{\beta U(o)}" />
  </div>

  <div flex-center>
    <Math v-if="$clicks >= 6" text-sample tex="\bar{p}(o) \cdot e^{\beta U(o)} \cdot |U(o)|"/>
    <Math v-else text-sample tex="\bar{p}(o) \cdot e^{\beta U(o)}"/>
  </div>

</div>

<div l50 bg-white w-50 h70 v-click.hide=2 />
<div l100 bg-white w-50 h70 v-click.hide=4 />

---

# Summary

- people over-sample extreme outcomes; this is rational 
- if bad outcomes tend to be more extreme, this yields negativity bias
- having control over the outcomes makes good ones more likely
- this is well-approximated by a softmax

---

<h1> Why do people think about bad things <span v-mark.purple="2">too much?</span> </h1>

<!-- <div t0 mt--5 l20>some</div> -->

<div text-3xl text-center>
  <span v-click=1>They think they have less control</span><br>
  <span v-click=3 v-mark="{ at: 3, color: '#be85ff', animate: false}" >
    than they actually have </span>
</div>

<img w10 r10 b10 src='./faces/meh.svg' v-click=4 />

---

- less data
- worse performance
- biased learning

---
clicks: 1
---

# Pessimism is self-fulfilling


<CurveVideo t0 play
  :name="(
    $clicks == 0 ? 'policy-0.95-10' :
    $clicks == 1 ? 'policy-0.75-10' :
    'NOPE'
  )"
  :n-frame="101"
/>


<div t15 flex="~ row" w-146 mx-auto items-center text-lg justify-between text-center ml4>
  <div font-bold w-45 text-sample>sampled outcomes</div>
  <div font-bold w-45 text-received>achieved outcomes</div>
  <div font-bold w-45 text-black>average outcomes</div>
</div>


---

- captures helplessness and hopelessness
- unifies reward-based and transition-based notions of control

