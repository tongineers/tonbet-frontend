<template>
  <section>
    <div class="mt-8 h-full">
      <!-- <ul class="flex justify-center py-3">
        <li
          :class="{ 'is-active': !myBets, 'p-2 border-b-2 font-spacegrotesk border-b-diceBlueLight text-sm font-bold text-white': true }">
          <a @click="myBets = false">{{ $t('allBets') }}</a>
        </li>
        <li
          :class="{ 'is-active': myBets, 'p-2 border-b-2 font-spacegrotesk border-b-transparent text-sm font-bold text-white': true }">
          <a @click="myBets = true" :disabled='myBetsDisabled'>{{ $t('myBets') }}</a>
        </li>
      </ul> -->

      <table class="w-full">
        <thead class="text-xs text-white">
          <tr>
            <th class="text-left">{{ $t('time') }}</th>
            <th class="text-left">{{ $t('bettor') }}</th>
            <th class="text-center">{{ $t('rollunder') }}</th>
            <th class="text-center">{{ $t('bet') }}</th>
            <th class="text-right">{{ $t('roll') }}</th>
            <th class="text-right">{{ $t('payout') }}</th>
          </tr>
        </thead>
        <tbody class="text-sm text-highlight">
          <tr v-for="(o, index) in orders" :key="index" class="h-14">
            <td class="text-left">{{ dateFormat(o.createdAt) }}</td>
            <td class="text-left">{{ addressShortener(o.playerAddress) }}</td>
            <td class="text-center">{{ o.rollUnder }}</td>
            <td class="text-center">{{ toGrams(o.amount) }}</td>
            <td class="text-right">
              {{ o.randomRoll }}
              <!-- 
                flex justify-center items-center gap-1
                <div class="flex justify-center items-center w-4 rounded-full bg-green-300 text-green-700 text-xs">
                  <span v-if="o.randomRoll < o.rollUnder" class="text-xs text-green-500 ">▼</span>
                  <span v-else class="text-xs">▲</span>
                </div> -->
            </td>
            <td class="text-right" :class="{ 'text-green-500': o.randomRoll < o.rollUnder }">
              {{ toGrams(o.payout) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="errored">
        <p align="center">We're sorry, we're not able to retrieve this information at the moment, please try back
          later.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useAccountStore } from '@/store/account';
import { toGrams, dateFormat, addressShortener } from '@/utils/common';
import { Api } from '@/services/apiService';

let orders = ref(<Bet[]>[]);
// let ordersByAddress = ref(<Bet[]>[]);

let myBets = ref(false);
let errored = ref(false);

const instance = new Api();
const { account, isAuthorized, updateAccount } = useAccountStore();

setInterval(async () => {
  orders.value = await instance.bets.getBets() as Bet[];
}, 1000);

const myBetsDisabled = () => {
  return !account?.address;
}
</script>

<style lang="postcss" scoped>
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
        background: #191854;
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
