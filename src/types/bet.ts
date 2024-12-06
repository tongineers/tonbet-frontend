declare module 'types';

type Bet = {
    id: number;
    rollUnder: number;
    randomRoll: number;
    amount: number;
    payout: number;
    playerAddress: string;
    refAddress: string;
    refBonus: number;
    seed: string;
    lt: number;
    hash: string;
    createdAt: Date;
}
