import { createMemoryHistory, createRouter } from 'vue-router'

import DiceView from '@/views/Dice/index.vue'
import SwapView from '@/views/Swap/index.vue'
import LiquidityView from '@/views/Liquidity/index.vue'

const routes = [
  { path: '/', component: DiceView },
  { path: '/swap', component: SwapView },
  { path: '/liquidity', component: LiquidityView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
