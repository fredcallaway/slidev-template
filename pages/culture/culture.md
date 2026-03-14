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

# Model

<div w-70 h-full>
  <div relative w-90 h-full>
    <img t0 l0 src='./img/task-space.png' />
    <v-clicks>
      <img t0 l0 src='./img/task-bespoke.png' />
      <img t0 l0 src='./img/task-compositional.png' />
      <!-- <img t0 l0 src='./img/task-reuse.png' /> -->
    </v-clicks>
  </div>
</div>

<div flex flex-col h-70>
  <img h-50 mt--10 trx5 src='./img/model-reuse.png' v-click />
  
  <div w-50 h-full mt-5 text-sm v-click >
    <div class="grid grid-cols-[3em_25em] gap-1 items-center" >
      <Tex tex="S" />
      <div text-sm >environment size</div>
      <Tex tex="K" />
      <div text-sm >number of tasks to solve</div>
      <Tex tex="\lambda_\text{exec}" />
      <div text-sm >compositional execution cost</div>
      <Tex tex="\lambda_\text{disc}" />
      <div text-sm >compositional discovery cost</div>
    </div>
  </div>
</div>

---

# The costs and benefits of compositionality

<img try6 h55 src='./fig/individual-costs.png' />

<Switch>
  <img h55 trx-10 src='./img/model-reuse.png'  />
  <div>
    <img try6 h55 src='./fig/individual-costs-varied.png' />
    <img h-23 t0 r0 src='./img/model-reuse.png'  />
  </div>
</Switch>

::cite::

<Tex text-16pt tex="\lambda_\text{exec}=0.2,\; λ_\text{disc}=0.75,\; S = 10" />

---

# When should an individual be compositional?

<img src='./fig/individual-costs-SK.png' />

::cite::

<Tex text-16pt tex="\lambda_\text{exec}=0.2,\; λ_\text{disc}=0.75" />

---

# When should a *population* be compositional?

<img w-50 src='./fig/social-costs.png' />

::cite::

<Tex text-16pt tex="\lambda_\text{exec}=0.2,\; λ_\text{disc}=0.75,\; D=30" />

---

# When should a *population* be compositional?

<div w-70 relative>
  <img h55 src='./img/model-reuse.png' />
  <div text-xs l32 t55 font-bold text-purple>including other's!</div>
</div>

<img h-50 src='./fig/social-costs.png' />

::cite::

<Tex text-16pt tex="\lambda_\text{exec}=0.2,\; λ_\text{disc}=0.75,\; D=30" />

---

# A victory for compositional social learning

<img h-45 src='./fig/individual-costs-SK.png' />
<img h-45 src='./fig/social-costs.png' />

---

# A *problem* for compositional social learning?

<img h-45 src='./fig/individual-costs-SK.png' />
<img h-45 src='./fig/social-costs.png' />

---

# A *problem* for compositional social learning?

<img src='./fig/social-costs-SD.png' />

::cite::
<Tex tex="K=1" />

---

# Not always!

<img src='./fig/evolution2.png' />

---

# Not always... but sometimes

<img h50 src='./fig/evolution2.png' />
<img h50 src='./fig/evolution3.png' />

::cite::
<Tex tex="\lambda_\text{exec}=0.2,\; λ_\text{disc}=0.75" />

::rcite::
<Tex tex="\lambda_\text{exec}=0.2,\; λ_\text{disc}=0.85" />

---

## I ran out of time, just throwing stuff in now

---

# Code-breaker task

<SimpleFrame src='https://fredcallaway.com/expdemo/machine/exp1/?main=2' />

---

# Too much of a good thing

<Switch>
  <img h60 src='./fig/social-costs-SD.png' />
  <img h60 src='./fig/social-costs-SD-big.png' />
</Switch>


---

# Results

<img src='./fig/exp1/compositionality-curve.png' />

---

# Evolvable ≠ good for the population

<img src='./img/2026-03-11-12-56-50.png' />

---

# Results

<img src='./fig/exp2-comp-cost.png' />
