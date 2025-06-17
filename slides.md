---
theme: ./theme
drawings:
  persist: true
transition: none
mdc: true
colorSchema: 'light'
contextMenu: false
canvasWidth: 1600
addons:
  - slidev-component-scroll
---

## Capacity limit plots

<!--
these are meeting notes
-->

---

::div{.h-90 .-mt-15 .-ml-5 .bg-primary .w40 .flex .flex-col .justify-center .p3 .text-4xl .font-bold .text-white}
Goal
::

::div{.p10 .flex .flex-col .justify-center .flex-1}
Find a simple result that motivates the conclusion that people are not doing pure best-first search, and are instead searching more locally (due to a capacity constraint).
::


--- 

# Distribution of saccade distances

::flex-1{.text-sm}

We define distance as the number of steps in the tree to get from the previously fixated state to the newly fixated state.
At first glance, people look a lot like the high-capacity model. However, they do show a slightly reduced proportion of saccades with distance over 2.
::

<fig src="./figs/e3/human/saccade_types-distance.png" h-35/>
<fig src="./figs/e3/capacity/saccade_types-distance.png"/>

--- 

# Relative probability by distance

::flex-1{.text-sm}
We get a clearer picture by looking at the probability relative to chance. The kink at distance 3 is striking, and sort of resembles capacity 3. I suspect that the flat part arises because most of those saccades are noise (i.e. not dependent on distance).
::

<fig src="./figs/e3/human/saccade_types_baseline-distance.png" h-35/>
<fig src="./figs/e3/capacity/saccade_types_baseline-distance.png"/>


--- 

# Saccade Types Baseline - Path Types

::flex-1{.text-sm}
Breaking down distance into its two components gives a more complete picture. In people, we see that the large distances are mostly 0 or 1 steps forward---these likely correspond to a "root" saccade.

It's subtle, but the high-capacity models have clear structure within the >1 forward area (red box) that is absent in the human data. In addition to the effect of total distance (brighter towards bottom-left), we also see a within-difference preference for backward over forward steps (towards bottom right)
::

<fig src="./figs/e3/human/saccade_types_baseline-path_types.png" h-35/>
<fig src="./figs/e3/capacity/saccade_types_baseline-path_types.png"/>

<!-- <Box bord  border-red l10 t11 w25 h17 absolute/> -->
<!-- <Box bord  border-red l112 t50 w22 h17 absolute/> -->

---

# Action value

::flex-1{.text-sm}
If the more distant jumps are truly just noise, then they should not be sensitive to value. To make a fair comparison of value-sensitivity at different distances, we identify fixations where there were exactly two states with the same path-type as the one that was actually fixated. We then ask how the choice between those two states depends on their relative Q values.

**Result**: People are quite sensitive to value at most distances. Oddly, increasing capacity reduces value sensitivity in the model.
::

<fig src="./figs/e3/human/child_vs_jump-action_value_distance.png" h-35/>
<fig src="./figs/e3/capacity/child_vs_jump-action_value_distance.png"/>


---

# Action value

::flex-1{.text-sm}
Same thing, only including saccades to states at depth 2 or greater.
::

<fig src="./figs/e3/human/child_vs_jump-action_value_distance_deep.png" h-35/>
<fig src="./figs/e3/capacity/child_vs_jump-action_value_distance_deep.png"/>


