import { RankingScoreDTO } from './../../data/dto/ranking-score';
import { LoadLastRankingRepository } from "../../data/protocols";
import { ranking } from "../data-sources";

export class FakeRankingRepository implements LoadLastRankingRepository {
    async loadLastRanking(): Promise<RankingScoreDTO[]> {
        return ranking.map(item => ({
            player: item.user,
            score: item.score,
            matchDate: new Date(item.date),
            heroes: item.heroes
        }));
    }
}