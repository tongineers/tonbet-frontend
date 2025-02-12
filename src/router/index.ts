import { createMemoryHistory, createRouter } from 'vue-router'

import DiceView from '@/views/Dice/index.vue'
import LiquidityView from '@/views/Liquidity/index.vue'

const routes = [
  { path: '/', component: LiquidityView },
  { path: '/yield', component: LiquidityView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
