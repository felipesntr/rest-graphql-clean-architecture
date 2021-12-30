import { RankingScore } from "../../domain/entities"

export class RankingScoreViewModel {
    static map(entity: RankingScore): RankingScoreViewModel {
        return {
            ...entity,
            matchDate: entity.matchDate.toISOString()
        }
    }

    static mapCollection(entities: RankingScore[]): RankingScoreViewModel[] {
        return entities.map(RankingScoreViewModel.map);
    }
}

export type Player = {
    name: string
    country: string
}

export type Hero = {
    name: string
    level: number
}