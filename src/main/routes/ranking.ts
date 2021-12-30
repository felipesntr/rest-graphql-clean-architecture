import { adapterRoute } from './../adapters/express-router';

import { Router } from 'express';
import { makeLoadLastRankingController } from '../factories';

export default (router: Router): void => {
    router.get('/rankings/last', adapterRoute(makeLoadLastRankingController()));
}