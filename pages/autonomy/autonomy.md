
# A rational model of perceived control, negative thinking, and avoidance {.text-4xl!.translate-y-3}

<NonLocal r5 t5 text-sm text-right text-teal-500 force>

  **scroll** or **←**/**→** to navigate
  
  **↑**/**↓** skips animations

  **g** for search

  **o** for overview
</NonLocal>

<div translate-y-10>

Fred Callaway  
NYU & Harvard{.text-base}
</div>

---

<!-- <img src='./img/2025-10-15-23-22-42.png' full/> -->

<div v-click text-white italic l0 t8 text-base>make a new friend?</div>
<div v-click text-white italic l8 t16 >finally talk to Jesse?</div>
<div v-click text-white italic l16 t26 text-xl >drink too much?</div>
<div v-click text-white italic l24 t36 text-2xl>throw up on the host?!</div>


::background::

<img v-click=5 src='./img/bed.png' l90 h100 translate-y--1 />
<img src='./img/party.png' />

---

<Switch>
  <img src='./omni/cycle-noarrow.svg' full p5 clip-t50 />
  <img src='./omni/cycle-noarrow.svg' full p5/>
  <div>
    <div flex flex-wrap full  items-center justify-evenly gap-5 z-10 bg-white bg-opacity-90>
      <div font-bold text-gray-6 text-xl>Huys & Dayan (2009)</div>
      <div font-bold text-gray-6 text-xl>Seligman & Maier (1967)</div>
      <div font-bold text-gray-6 text-xl>De Raedt & Hooley (2016)</div>
      <div font-bold text-gray-6 text-xl>Russek et al. (2025)</div>
      <div font-bold text-gray-6 text-xl>Zorowitz et al. (2020)</div>
      <div font-bold text-gray-6 text-xl>Gagne & Dayan (2022)</div>
      <div font-bold text-gray-6 text-xl>Gallagher et al. (2014)</div>
      <div font-bold text-gray-6 text-xl>Huys et al. (2015)</div>
      <div font-bold text-gray-6 text-xl>Bandura (1997)</div>
      <div font-bold text-gray-6 text-xl>Moscarello & Hartley (2017)</div>
      <div font-bold text-gray-6 text-xl>Granwald et al. (2025)</div>
      <div font-bold text-gray-6 text-xl>Hartstra et al. (yesterday)</div>
    </div>
    <img src='./omni/cycle-noarrow.svg' full p5/>
  </div>
  <img src='./omni/cycle-noarrow.svg' full p5/>

  <img src='./omni/cycle.svg' full p5/>
</Switch>

---

<Switch>
  <Questions question=0 answer=0 />
  <Questions question=1 answer=0 />
  <Questions question=2 answer=0 />
  <Questions question=3 answer=0 />
  <Questions question=3 answer=0 highlight=1 />
</Switch>


---

# People think about bad things

<div flex="~ row" justify-between gap-4 mt-5>
  <fig v-click caption="Christianson & Loftus (1987)" cite>
    <img h40 w40 cover src='./img/cyber-crash.png' />
  </fig>
  <fig v-click caption="Sunstein & Zeckhauser (2011)" cite>
    <img h40 w40 cover src='./img/shock.png' />
  </fig>
  <fig v-click caption="Norbury et al. (2018)" cite>
    <img h40 w40 cover src='./img/dime.png' />
  </fig>
</div>

<div v-after r0 b1 text-xs italic>"catastrophic"</div>

<div v-click text-4xl fw-light>Why?</div>


<!-- 

Evidence from explicit probability judgments, revealed preference, and memory probes
suggest that people are hyper-attentive to catastrophic events, whether its a car crash...

Prevalence -> should be a rational

-->

---

# Why think about bad things?

<!-- hard question → let's try an easier one -->

---

# Should you go to the party?

<!-- <img v-click src='./omni/party-choice.svg' full clip-t56 /> -->

<img src='./omni/party-choice.svg' full clip-t56 />

<img src='./omni/party-choice.svg' full :class="(
  [
    'clip-t100',
    'clip-b44-r70',
    'clip-b44-r50',
    'clip-b44-r30',
    'clip-b44-r10',
  ][$clicks]
)" />

<Pos v-click l=24 y=30 s=15> <img  src='./img/x.png' /></Pos>
<Pos v-click l=51 y=30 s=15> <img  src='./img/bsky.png' /></Pos>
<Pos v-click r=51 y=30 s=15> <Text txt=🥰 w20 /> </Pos>
<Pos v-click r=24 y=30 s=15> <Text txt=🤮 w20 /> </Pos>
<div v-click>
  <Text txt="..." l40 w10 t17 />
  <Text txt="..." r40 w10 t17 />
</div>



<!-- <GridLines /> -->

---

# Should you go to the party?

<img src='./omni/party-choice.svg' full z--1 />

<img t9 l20 h38 src='/fig/uws/safe.svg' />
<img t9 r20 h38 src='/fig/uws/risky.svg' />

<Box t=10 x=75 w=120 h=70 v-click="['+1', '+1']">
   <img w80 src='/fig/uws/risky.svg' />
   <div font-light l10 w30 h20 t27 b0 text-center rotate-270 text-3xl >probability</div>
   <div font-light text-3xl b1 l50 >utility</div>
</Box>

<Box v-click=3 t=30 l=33 w=77 h=36 tilt-l text-red-7 border="~ red-7 15">
  <div mb2 style="font-family: Rockwell" text-2xl>RATIONAL CHOICE</div>
  <Tex tex="\argmax_a \sum_{o} p(o|a) U(o)" ></Tex>
</Box>

---
outcomes: [+1, 0, -1, 0, +2]
clicks: 6
---

# Should you go to the party?<br><span text-xl italic>for humans</span>

<div wfull t15 text-center>
  <Tex l28 t15 >x_i \sim p(o | a)</Tex>
  <Tex l83 top-10.4 >\hat{Q}(a) = \frac{1}{N} \sum_{i}^N U(x_i)</Tex>
</div>

<div v-click.hide>
  <div bg-white w30 h20 l100 b10 z-10/>
  <div bg-white w50 h20 l80 b36 z-10/>
</div>

<PartyDecision :click="$clicks-1" :outcomes="$frontmatter.outcomes" />

<!-- <Box w=100 h=50 x=75 y=50 v-click=7 >
  <img w80 src="/fig/uws/risky.svg" />
</Box> -->


---
outcomes: [+1, 0, -1, +1, 0]
clicks: 5
---

# Should you go to the party?<br><span text-xl italic>for humans in the real world</span>

<div wfull t15 text-center>
  <Tex l28 t15 >x_i \sim p(o | a)</Tex>
  <Tex l83 top-10.4 >\hat{Q}(a) = \frac{1}{N} \sum_{i}^N U(x_i)</Tex>
</div>


<PartyDecision dist=skew :click="$clicks" :outcomes="$frontmatter.outcomes" />

---
outcomes: [-3, +1, -2, -5]
clicks: 5
---

<h1>Should you go to the party?<br>
<span text-xl italic>for <span v-mark.pink=1>clever</span> humans in the real world</span></h1>


<div wfull t15 text-center>
  <div mt1 text-2xl fw-light italic v-click=5>"utility-weighted sampling"</div>
  <Tex l28 t15 >x_i \sim p(o | a) \cdot \big| U(o) \big|</Tex>
  <Tex l83 t11>\hat{Q}(a) =\frac{
    \sum_{i}^N 
      U(x_i) / \big| U(x_i) \big|
    }{
      \sum_{i}^N 1 / \big| U(x_i) \big|
    } 
   </Tex>
</div>

<!-- <Pointer x=61 y=40 rot=7 color=hotpink v-click/> -->

<div w17 h11 t28 l55 v-mark.circle.pink=1></div>


<PartyDecision dist=skew :click="$clicks-1" :outcomes="$frontmatter.outcomes" uws />

::cite::

Lieder et al. (2018)

---

<Switch>
  <h1>Utility-weighted sampling</h1>
  <h1>Utility-weighted sampling + negative skew</h1>
  <h1>Utility-weighted sampling + negative skew</h1>
</Switch>

<div flex="~ row" w-full items-center >
  <fig label="possible outcomes" text-baseline>
    <Tex text-baseline tex="\bar{p}(o)" />
    <Switch>
      <img w-100 src='/fig/uws/risky.svg' />
      <img w-100 src='/fig/uws/skew.svg' />
      <img w-100 src='/fig/uws/skew.svg' />
    </Switch>
  </fig>
  <fig text-100pt>×</fig>
  <fig label="extremity bias" text-bias>
    <Tex inline text-bias tex="|U(o)|" />
    <img w-100 src='/fig/uws/uws.svg' />
  </fig>
  <fig text-100pt>=</fig>
  <fig label="considered outcomes" text-sample>
    <Tex text-sample tex="\bar{p}(o) \cdot |U(o)|"/>
    <Switch>
      <img w-100 src='/fig/uws/risky-considered.svg' />
      <img w-100 src='/fig/uws/skew-considered.svg' />
      <img w-100 src='/fig/uws/skew-considered.svg' />
    </Switch>
  </fig>
</div>


<div flex="~ row" w-140 mx-auto items-center text-center text-lg justify-between
  v-click=2
>
  <div w-35 line-height-tight >realistic outcome distribution</div>
  <div w-35 >extremity bias</div>
  <div w-35 >negativity bias</div>
</div>


---

<Switch>
  <Questions question=3 answer=0 highlight=1 />
  <Questions question=3 answer=1 highlight=1 />
  <Questions question=3 answer=1 highlight=2 />
</Switch>

---

# People think about good things

<div flex="~ row" justify-between gap-4 mt-5 w130>
  <fig v-click caption="Callaway, Rangel, Griffiths (2021)" cite>
    <img h40  src='./img/snacks.png' />
  </fig>
  <fig v-click caption="Callaway, ... Lieder, Griffiths  (2022)" cite>
    <img h50  src='./img/mouselab.png' />
  </fig>
</div>

---

# People think about good things


<div flex="~ row gap-3">
  <div w60 mt-10>
  
  - Hours TV per day
  - Honks per week
  - Mins late for appointment
  - Times snooze alarm
  </div>

  <img src='./img/bear-direct.png' clip-t9 w90 v-click/>

</div>

<Box l=0 b=9 w=60 h=17 text-xl tilt-l v-click>
  Things we can control!
</Box>

::cite::
Bear, Bensinger, Jara-Ettinger, Knobe, Cushman (2020)

---

# Should you go to the party?

<img src='./omni/party-choice.svg' full clip-t56 />

<img t9 r20 h38 src='/fig/uws/skew.svg' />

<img t9 l20 h38 src='/fig/uws/safe.svg' />

---

<img src='./omni/party-extended.svg' full />


<div r30 t35 text-orange v-click>

$$\alpha$$
</div>

<div r56 t35 text-orange v-click>

$$1 - \alpha$$
</div>

<div r10 t39 text-orange text-xl italic underline v-click>control</div>

---
clicks: 7
---

<h1>How does control affect outcomes?</h1>

<BinTree t8 w20
  :current="['root', 'root', 'R', 'R', 'RR', 'RR', 'RRL', 'RRL'][$clicks]"
  :target="['', 'R', '', 'RR', '', 'RRR'][$clicks]"
/>

<div text-orange r30 b16 v-click=6 >slip!</div>


<div text-baseline font-bold b0 w141 flex="~ row" justify-between>
  <div w8 text-center v-for="(r, i) in [-1, -3, +1, -1, -4, 2, -6, 3]">{{ r }}</div>
</div>

<div v-click=7 b0 mb--2 l117 
  border-received border-6 w-10 text-center text-2xl font-bold text-received bg-white>
  -6</div>

<div text-received b0 mb--4 l128 v-click=7 >outcome</div>



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
  :path="(
    $clicks < 3 ? '/fig/tree_outcomes/normal-default' : 
    $clicks < 5 ? '/fig/tree_outcomes/normal-fit' : 
    $clicks < 6 ? '/fig/tree_outcomes/skew-fit' :
    '/fig/tree_outcomes/skew-uws'
  )"
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

<img l0 b0 w20 v-click=5 src='/fig/tree_outcomes/skew-baseline.svg' />



<div grid grid-cols-3 gap-5 items-center w-140 text-base>

  <div flex-center flex-col gap-2>
    <Tex text-baseline tex="\bar{p}(o)" />
    <Tex text-received tex="p_α(o)" v-click=1 />
  </div>

  <div flex-center flex-col gap-2>
    <Tex inline tex="p_α(o) / \bar{p}(0)" />
    <Tex v-if="$clicks >= 6" inline text-bias tex="e^{\beta U(o)} \cdot |U(o)|" />
    <Tex v-else v-click=3 inline text-bias tex="e^{\beta U(o)}" />
  </div>

  <div flex-center>
    <Tex v-if="$clicks >= 6" text-sample tex="\bar{p}(o) \cdot e^{\beta U(o)} \cdot |U(o)|"/>
    <Tex v-else text-sample tex="\bar{p}(o) \cdot e^{\beta U(o)}"/>
  </div>

</div>

<div l50 bg-white w-50 h70 v-click.hide=2 />
<div l100 bg-white w-50 h70 v-click.hide=4 />

---

<Switch>
  <Questions question=3 answer=1 highlight=2 />
  <Questions question=3 answer=2 highlight=2 />
  <Questions question=3 answer=2 highlight=3 />
</Switch>


---

<h1> Why do people think about bad things <span v-mark.purple="2">too much?</span> </h1>

<!-- <div t0 mt--5 l20>some</div> -->

<div text-3xl text-center>
  <span v-click=1>They think they have less control</span><br>
  <span v-click=3 v-mark="{ at: 3, color: '#be85ff', animate: false}" >
    than they actually have </span>
</div>

<div b5 v-click=4 text-4xl fw-bold>Why?</div>

---

# Why don't people learn they have high control?

<img src='./omni/cycle.svg' p5 v-click/>

<div v-click text-lg font-bold r21 t36>fewer experiences</div>
<div v-click text-lg font-bold r15>worse experiences</div>

---

# Low perceived control → fewer experiences

<img src='./omni/party-extended.svg' />

<div w27 h15 l38 t47 v-mark.circle.purple/>


---
clicks: 5
---

# Low perceived control → fewer experiences

<img l0 b0 mb--2 w20 src='/fig/avoidance/baseline.svg' />

<CurveVideo t0 :n-frame=76
  :init-frame=49
  :init-direction=-1
  :play="$clicks >= 3"
  :path="(
    $clicks < 4 ? '/fig/avoidance/0.8-9' :
    $clicks < 5 ? '/fig/avoidance/0.6-9' :
    '/fig/avoidance/0.7-9'
  )"
/>
<!-- 
<CurveVideo t0 init-direction=-1
  :name="(
    $clicks < 5 ? 'avoidance-0.7-1' :
    'avoidance-0.75-1-false'
  )"
  :init-frame="$clicks == 0 ? 79 : undefined"
  :n-frame="$clicks < 5 ? 79 : 101"
  :play="$clicks >= 2"
/> -->

<Pointer x=68 y=32 rot=5.8 v-click=4 color=hotpink />

<div t41 l94 rot270 >avg reward</div>
<div t64 l112 >approach rate</div>

<div t15 flex="~ row" w-146 mx-auto items-center text-lg justify-between text-center ml4>
  <div font-bold w-45 text-sample>sampled outcomes</div>
  <div font-bold w-45 text-received>achieved outcomes</div>
  <div font-bold w-45 text-black>approach & reward </div>
</div>

<div bg-white r52 w52 hfull v-click.hide=1 />
<div bg-white r0 w52 hfull v-click.hide=2 />


---

# Low perceived control → *worse* experiences

<img src='./omni/party-extended.svg' />

<div w80 h60 l70 t10 v-mark.circle.purple />

---
clicks: 5
---

# Low perceived control → *worse* experiences

<img l0 b0 mb--2 w20 src='/fig/tree_outcomes/skew-baseline.svg' />

<CurveVideo t0 
  :init-direction=-1
  :init-frame=81
  :path="(
    $clicks < 4 ? '/fig/policy/0.95-1' :
    '/fig/policy/0.75-1'
  )"
  :n-frame=81
  :play="$clicks >= 1"
/>

<div t41 l93 rot270 >achieved</div>
<div t64 l118 >predicted</div>

<Pointer x=85 y=55 rot=1 v-click="[3, 4]" color=hotpink />

<Pointer x=68 y=32 rot=5.8 v-click=4 color=hotpink />

<div t15 flex="~ row" w-146 mx-auto items-center text-lg justify-between text-center ml4>
  <div font-bold w-45 text-sample>sampled outcomes</div>
  <div font-bold w-45 text-received>achieved outcomes</div>
  <div font-bold w-45 text-black>average outcomes</div>
</div>

<div cite v-click=5 l130>c.f. Randy</div>

<!-- <div bg-white r52 w52 hfull v-click.hide=1 /> -->
<div bg-white r0 w52 hfull v-click.hide=2 />

---

<img src='./omni/cycle.svg' full p5/>

---

<img src='./omni/cycle-learning.png' full p5/>


<div bord border-6 r12 w72 b33 p3 tilt-l text-red-7 border="~ red-7 15" bg-white v-click >
  <img src='./img/2025-10-29-12-47-41.png' />
</div>


---

# Learning your control

<img t0 r0 w80 src='./img/2025-10-29-12-47-41.png' />

<Switch w150>
  <div>
    <img src='/fig/learning/ela.png' w140 clip-r63/>
    <div l48 t35 text-base>200 trials</div>
  </div>
  <div>
    <img src='/fig/learning/ela.png' w140 hfull clip-r47/>
    <div l66 t34 text-base>300 trials</div>
    <div l22 t24 text-gray6 font-bold text-base>traumatic event</div>
  </div>
</Switch>

---

# Early experience matters

<div w150>
  <img src='/fig/learning/ela.png' w140 hfull/>
  <div r2 t35 text-base>300 trials</div>
  <div l22 t24 text-gray6 font-bold text-base>traumatic event</div>
</div>

---

# Early experience matters a lot

<div w150>
  <img src='/fig/learning/ela-long.png' w140 hfull/>
  <div r2 t35 text-base>3000 trials</div>
</div>

---

<Switch>
  <Questions question=3 answer=2 highlight=3 />
  <Questions question=3 answer=3 highlight=3 />
  <Questions question=3 answer=3 />
</Switch>


---

# "The bigger picture"

<div flex="~ row" gap-3 w-145 text-lg text-center>
  <div bord p2 v-click>computational models can link mental and behavioral symptoms</div>
  <div bord p2 v-click>"maladaptive" cognitive traits can arise from adaptive processes</div>
</div>

## Open questions {v-click}

<div flex="~ row" gap-3 w-145 text-lg text-center >
  <div bord p2 v-click>reward or transition probabilities?</div>
  <div bord p2 v-click>helplessness or hopelessness?</div>
  <div bord p2 v-click>context-sensitivity & generalization</div>
</div>

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

<a href="mailto:fredcallaway@gmail.com" font-mono r2 b1 text-sm>fredcallaway@gmail.com</a>
<span font-mono l2 b1 text-sm>https://sites.dartmouth.edu/cogscigrad/</span>
