import { type } from "os"

type Coin = { id: number, name: string, value: number, change: number }

export const Coins: Coin[] = [
    { id: 1, name: 'bitcoin', value: 8200.12, change: -0.9 },
    { id: 2, name: 'litecoin', value: 47.89, change: -0.36 },
    { id: 3, name: 'BNB', value: 14.54, change: -0.06 },
    { id: 4, name: 'ethereum', value: 143.49, change: 0.87 },
    { id: 5, name: 'bitcoin cash', value: 264.39, change: 0.92 }
]
