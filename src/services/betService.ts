import { Api } from '@/services/apiService';

const instance = new Api();

export async function monitorBetResult(address: string, fromLT: Date): Promise<{ message: string; roll: number }> {
    return new Promise((resolve) => {
        const intervalID = setInterval(async () => {
            try {
                const result = await instance.bets.getBetsByAddress(address) as Bet[];
    
                result.forEach(bet => {
                    const betDate = new Date(Date.parse(bet.createdAt as unknown as string))
                    if (bet.randomRoll > 0 && betDate > fromLT) {
                        clearInterval(intervalID);

                        let message = 'You are won! 🎉';
                        if (bet.randomRoll >= bet.rollUnder) {
                            message = 'Just try again'
                        }

                        resolve({
                            message: message,
                            roll: bet.randomRoll
                        });                        
                    }
                });
            } catch (e) {
                return e
            }
        }, 100);
    });
}
