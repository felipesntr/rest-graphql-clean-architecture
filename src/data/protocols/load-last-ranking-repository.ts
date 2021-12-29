import { RankingScoreDTO } from "../dto";

export interface LoadLastRankingRepository {
    loadLastRanking: () => Promise<RankingScoreDTO[]>;
}