
exports.up = function(knex) {
  return knex.schema.createTable('projects', pros => {
      pros.increments();
      pros.string('name', 130).notNullable();
      pros.string('description', 500);
      pros.boolean('completed').defaultTo(false);
  }).createTable('resources', res => {
      res.increments();
      res.string('name', 130).notNullable();
      res.string('description', 500);
  }).createTable('tasks', tasks => {
      tasks.increments();
      tasks.string('description', 500).notNullable();
      tasks.string('notes');
      tasks.boolean('completed').defaultTo(false)
      tasks
        .integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('pros')
    .dropTableIfExists('res')
    .dropTableIfExists('tasks');
};
