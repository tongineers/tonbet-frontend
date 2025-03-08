import axios from 'axios'
import { apiUrl } from '@/network'

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 20000,
  headers: {
    'Content-type': 'application/json',
  },
})

export class Api {
  account = {
    getAccountState,
    getJettonState,
  };
  bets = {
    getBets,
    getBetsByAddress,
  }
}

const getJettonState = async (address: string): Promise<Jetton | Error> => {
  try {
    const { data: jetton } = await instance.request<Jetton>(
      {
        method: 'get',
        url: apiUrl + `/api/v1/jetton/${address}`,
      });
    return jetton;
  } catch (e) {
    return e as Error;
  }
}

const getAccountState = async (address: string): Promise<Account | Error> => {
  try {
    const { data: account } = await instance.request<Account>(
      {
        method: 'get',
        url: apiUrl + `/api/v1/account/${address}`,
      });
    return account;
  } catch (e) {
    return e as Error;
  }
}

const getBets = async (): Promise<Bet[] | Error> => {
  try {
    const { data: bets } = await instance.request<Bet[]>(
      {
        method: 'get',
        url: apiUrl + '/api/v1/bets',
      });
    return bets;
  } catch (e) {
    return e as Error;
  }
}

const getBetsByAddress = async (address: string): Promise<Bet[] | Error> => {
  try {
    const { data: bets } = await instance.request<Bet[]>(
      {
        method: 'get',
        url: apiUrl + `/api/v1/bets/${address}`,
      });
    return bets;
  } catch (e) {
    return e as Error;
  }
}
