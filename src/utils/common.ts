const addressShortener = (address: string): string => {
    if (!address) {
        return '';
    }

    return address.substring(0, 4) + '...' + address.substring(address.length - 4);
}

const toGrams = (n: number): string => {
    return Number(n / 1000000000).toFixed(4);
}

const dateFormat = (raw: Date): string => {
    return new Date(raw).toLocaleTimeString();
}

export {
    addressShortener,
    toGrams,
    dateFormat,
}
