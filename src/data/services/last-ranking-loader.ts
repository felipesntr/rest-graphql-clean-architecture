import { RankingUnavailableError } from './../../domain/errors/ranking-unavailable';
import { RankingScore } from '../../domain/entities';
import { LoadLastRankingRepository } from '../protocols';
import { LastRankingLoader } from './../../domain/usecases';

export class LastRankingLoaderService implements LastRankingLoader {
    constructor(private readonly loadLastRankingRepository: LoadLastRankingRepository) { }
    async load(): Promise<RankingScore[]> {
        if (new Date().getHours() > 21) throw new RankingUnavailableError();
        return this.loadLastRankingRepository.loadLastRanking();
    }
}