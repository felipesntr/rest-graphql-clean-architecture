import { LastRankingLoader } from '../../domain/usecases';
import { HttpResponse } from '../protocols';
import { RankingScoreViewModel } from '../view-models';
import { Controller, serverError, ok } from './../protocols';
export class LoadLastRankingController implements Controller {
    constructor(private readonly lastRankingLoader: LastRankingLoader) { }
    async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
        try {
            const ranking = await this.lastRankingLoader.load();
            return ok(RankingScoreViewModel.mapCollection(ranking));
        } catch (error) {
            return serverError(error as any);
        }
    }
}