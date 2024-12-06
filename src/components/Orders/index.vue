<template>
  <section name="orders">
    <ul class="flex justify-center py-3">
      <li :class="{ 'is-active': !myBets, 'p-2 border-b-2 font-dicefont border-b-diceBlueLight text-white': true }">
        <a @click="myBets = false">All Bets</a>
      </li>
      <li :class="{ 'is-active': myBets, 'p-2 border-b-2 font-dicefont border-b-transparent text-white': true }">
        <a @click="myBets = true" :disabled='myBetsDisabled'>My Bets</a>
      </li>
    </ul>
    <table class="w-full">
      <thead class="font-dicefont text-white">
        <tr>
          <th class="text-left">Time</th>
          <th class="text-left">Bettor</th>
          <th class="text-center">Roll Under</th>
          <th class="text-center">Bet</th>
          <th class="text-right">Roll</th>
          <th class="text-right">Payout</th>
        </tr>
      </thead>
      <tbody class="text-sm text-white font-sans">
        <tr v-for="(o, index) in orders" :key="index" class="h-14">
          <td class="text-left">{{ dateFormat(o.createdAt) }}</td>
          <td class="text-left">{{ o.playerAddress }}</td>
          <td class="text-center">{{ o.rollUnder }}</td>
          <td class="text-center">{{ toGrams(o.amount) }}</td>
          <td class="text-right">
            {{ o.randomRoll }}
            <span v-if="o.randomRoll < o.rollUnder" class="text-xs text-green-500">▼</span>
            <span v-else class="text-xs">▲</span>
          </td>
          <td class="text-right" :class="{ 'text-green-500': o.randomRoll < o.rollUnder }">
            {{ toGrams(o.payout) }}
          </td>
        </tr>
      </tbody>
    </table>
    <section v-if="errored">
      <p align="center">We're sorry, we're not able to retrieve this information at the moment, please try back later
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useAccountStore } from '@/store/account';
import { toGrams, dateFormat } from '@/utils/common';
import { Api } from '@/services/api';

let orders = ref(<Bet[]>[]);
let ordersByAddress = ref(<Bet[]>[]);

let myBets = ref(false);
let errored = ref(false);

const api = new Api();
const { account, isAuthorized, updateAccount } = useAccountStore();

onMounted(() => {
  setInterval(async () => {
    orders.value = await api.bets.getBets() as Bet[];
  }, 1000);
})

// const fetchOrders = async() => {
//   orders.value = await getBets() as Bet[];
// }

const myBetsDisabled = () => {
  return !account?.address;
}
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate;
  border-spacing: 0 5px;

  thead {
    tr {
      th:first-child {
        padding-left: 15px;
      }

      th:last-child {
        padding-right: 15px;
      }
    }
  }

  tbody {
    tr {
      td {
        background: rgba(19, 51, 98, .4);
      }

      td:first-child {
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        padding-left: 15px;
      }

      td:last-child {
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        padding-right: 15px;
      }
    }
  }
}
</style>
