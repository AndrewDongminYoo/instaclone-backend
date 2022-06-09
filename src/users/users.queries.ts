import client from "../client";

// A map of functions which return data for the schema.
export default {
  Query: {
    users: () => client.user.findMany(),
    user: (_: any, { id }: { id: number; }) => client.user.findUnique({ where: { id } }),
  },
}