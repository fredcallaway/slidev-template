
# Example: route-planning

::background::

<Switch>
  <img src="./robot-example/agents.png" />
  <img src="./robot-example/avoid.png" />
  
</Switch>

---

# Example: route-planning

::background::

<div t8 l88 font-bold>Time: </div>
<TimeBar :duration="10000" t9 l100/>

<img src="./robot-example/example full.png" />

---

### time's up! {.text-xs}

---

# Tree search

::background::

<Switch>
  <img src="./decision-tree/8.png" />
  <img src="./decision-tree/7.png" />
  <img src="./decision-tree/6.png" />
  <img src="./decision-tree/5.png" />
  <img src="./decision-tree/4.png" />
  <img src="./decision-tree/3.png" />
  <img src="./decision-tree/2.png" />
  <img src="./decision-tree/1.png" />
  <img src="./decision-tree/0.png" />
  <img src="./decision-tree/Goal.png" />
  <div>
    <img src="./decision-tree/Action.png" />
    <p t20 l115 text-yellow font-bold text-xl>act!</p>
  </div>
</Switch>



---

# The problem

<Box v-drag="[415,108,500,190,8]" v-click=1 >
  Which action do you consider next?
</Box>

::background::

<Switch>
<img src="./robot-example/tree.png" />
<img src="./robot-example/tree red.png" />
</Switch>

---

# The solution

<img full src="./planning-metamdp.png">
<div bg-white w-full h10 t0 l0/>

