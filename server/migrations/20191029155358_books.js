exports.up = function(knex) {
  return knex.schema.createTable("books", t => {
    t.increments().index();
    t.string("author").notNullable();
    t.string("title").notNullable();
    t.text("description").notNullable();
    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("books");
};
