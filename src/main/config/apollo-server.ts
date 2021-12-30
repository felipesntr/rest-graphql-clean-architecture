import typeDefs from '../graphql/type-defs';
import resolvers from '../graphql/resolvers';

import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';

export const setupApolloServer = async (app: Express) => {
    const server = new ApolloServer({
        resolvers,
        typeDefs
    })
    await server.start()
    server.applyMiddleware({ app })
}