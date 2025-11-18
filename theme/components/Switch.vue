<!-- USAGE

<q-switch at="2">
  <div>Number one</div>
  <span>Number two</span>
</q-switch>

will be rendered as

<v-switch at="2">
  <template #1> 
    <div>Number one</div>
  </template>
  <template #2> 
    <span>Number two</span>
  </template>
</v-switch>

-->


<script>
import { h } from 'vue'
import VSwitch from '@slidev/client/builtin/VSwitch.ts'

const isCommentNode = (node) => String(node.type) == 'Symbol(v-cmt)'

export default {
  // name: 'FSwitch',
  props: {
    at: {
      type: [Number, String],
      default: '1',
    }
  },
  render() {
    const children = this.$slots.default?.() || []
    console.log('children', children.length)

    const namedSlots = {}
    children.filter(vnode => !isCommentNode(vnode)).forEach((vnode, index) => {
      namedSlots[index.toString()] = () => [vnode]
    })
    console.log('namedSlots', Object.keys(namedSlots).length)

    return h(VSwitch, {
      at: this.at,
    }, namedSlots)
  },
}
</script>

<style scoped>


</style>
