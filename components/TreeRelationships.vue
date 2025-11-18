<template>
  <GraphViewer
    ref="graphViewer"
    :graph-spec="spec.data"
    :layout="graphLayout"
    :style="graphStyle"
    show-immediately
    :width="w"
    :height="h"
    wfull
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'


const props = withDefaults(defineProps<{
  height?: number // of binary tree
  query?: string
  highlight?: string
  w?: number | string
  h?: number | string
}>(), {
  height: 3,
  query: 'root',
  w: '220px',
  h: '220px',
})


const graphViewer = ref<any>(null)

function generateCompleteBinaryTree(height: number) {
  const adjacency: Record<string, string[]> = {}
  
  // Generate all nodes up to the specified height
  const generateNodes = (path: string, queryHeight: number) => {
    if (queryHeight >= height) return
    
    const leftChild = path.replace('root', '') + 'L'
    const rightChild = path.replace('root', '') + 'R'
    
    adjacency[path] = [leftChild, rightChild]
    
    generateNodes(leftChild, queryHeight + 1)
    generateNodes(rightChild, queryHeight + 1)
  }
  
  // Start with root node
  generateNodes('root', 0)
  
  // Add empty children for leaf nodes
  for (const key of Object.keys(adjacency)) {
    for (const child of adjacency[key]) {
      if (!adjacency[child]) {
        adjacency[child] = []
      }
    }
  }
  
  return adjacency
}

// Generate the complete binary tree specification
const spec = computed(() => {
  const adjacency = generateCompleteBinaryTree(props.height)
  const leafNodes = Object.keys(adjacency).filter(key => adjacency[key].length === 0)
  
  return {
    data: {
      adjacency,
      classNodes: {
        'root': ['root'],
        'query': [props.query],
        'highlight': [props.highlight]
      }
    }
  }
})

const COLORS = {
  // inner: '#b8f',
  inner: 'black',
  frontier: 'hsl(359, 80%, 63%)',
  tail: 'hsl(359, 70%, 80%)',

  pruned: '#eee',
  root: 'hsl(359, 80%, 63%)',
}

const graphStyle = {
  'node.leaf': {
    backgroundColor: '#5FA3B4',
  },
  'node.query': {
    // backgroundColor: '#ff9553',
    label: '?',
    fontWeight: 'bold',
  },
  'node.highlight': {
    backgroundColor: '#ff9553',
  }
}

const graphLayout = {
  name: 'dagre',
  nodeSep: 20, // the separation between adjacent nodes in the same rank
  edgeSep: 10, // the separation between adjacent edges in the same rank
  rankSep: 40, // the separation between each rank in the layout
  fit: true,
  padding: 30,
  sort: (a: any, b: any) => a.id().localeCompare(b.id())
}

</script>


