import { adapterResolver } from './../../adapters/apollo-server-resolver';
import { makeLoadLastRankingController } from './../../factories/load-last-ranking-controller';
export default {
    Query: {
        lastRanking: async () => adapterResolver(makeLoadLastRankingController())
    }
}