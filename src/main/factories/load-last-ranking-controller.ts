import { LastRankingLoaderService } from "../../data/services";
import { FakeRankingRepository } from "../../infra/repositories";
import { LoadLastRankingController } from "../../presentation/controllers";
import { Controller } from "../../presentation/protocols";

export const makeLoadLastRankingController = (): Controller => {
    const repo = new FakeRankingRepository();
    const loader = new LastRankingLoaderService(repo);
    const controller = new LoadLastRankingController(loader);
    return controller;
}