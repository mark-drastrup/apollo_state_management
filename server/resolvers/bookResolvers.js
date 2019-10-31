const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile")[environment];
const db = require("knex")(config);
const resolvers = {
  Query: {
    books: async () => {
      const books = await db("books").select("*");
      return books;
    }
  },
  Mutation: {
    createBook: async (root, { title, description, author }) => {
      const book = await db("books")
        .insert({ title, description, author })
        .returning("*")
        .into("books");
      return book;
    },
    updateBook: async (root, { id, title, description, author }) => {
      const updatedBook = await db("books")
        .where({ id: id })
        .update({ title, description, author })
        .returning("*")
        .into("books");
      return updatedBook;
    }
  }
};

module.exports = resolvers;
