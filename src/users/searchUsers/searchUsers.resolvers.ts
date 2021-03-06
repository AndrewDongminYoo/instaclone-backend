import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    searchUser: async (_, { keyword }, { client }) => {
      try {
        if (!keyword) throw new Error("No keyword");
        if (keyword.length < 3) throw new Error("Keyword too short");
        const users = await client.user.findMany({
          where: {
            OR: [
              { username: { startsWith: keyword.toLowerCase() } },
              { firstName: { startsWith: keyword.toLowerCase() } },
            ],
          },
          take: 10,
        });
        return users;
      } catch (e: any) {
        return {
          error: e.message
        }
      }
    }
  }
}

export default resolvers;