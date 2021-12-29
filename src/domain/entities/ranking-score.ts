export type RankingScore = {
    player: Player
    score: number
    matchDate: Date
    heroes: Array<Hero>
}

export type Player = {
    name: string
    country: string
}

export type Hero = {
    name: string
    level: number
}