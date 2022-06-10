require('dotenv').config();
import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './src/schema';
import { protectResolver, verifyToken } from './src/users/user.utils';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      SECRET_KEY: string;
      DATABASE_URL: string;
    }
  }
}

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    return {
      activeUser: await (token ? verifyToken(token) : null),
      protectResolver,
    };
  },
});

const PORT = process.env.PORT;

server.listen(PORT).then(({ url }: {
  url: String;
}) => {
  console.log(`🚀 Server ready at ${url}`);
});