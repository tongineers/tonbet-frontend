import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import Storage from '@/utils/storage'

export const accountStorage = new Storage<Account>('account')

export const isAuthorized = (): boolean => !!accountStorage.get()

export const useAccountStore = defineStore('account', () => {
  const account = ref(accountStorage.get())
  const isAuthorized = computed(() => !!account.value)

  function updateAccount(accountData?: Account | null) {
    if (accountData) {
      accountStorage.set(accountData)
      account.value = accountData
    }
    else {
      accountStorage.remove()
      account.value = null
    }
  }

  return {
    account,
    isAuthorized,
    updateAccount,
  }
})
