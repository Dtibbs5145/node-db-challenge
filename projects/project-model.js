const db = require('../data/dbConfig');

module.exports = {
    getRes,
    getPros,
    getTasks,
    getRById,
    getPById,
    getTById,
    insertRes,
    insertPros,
    insertTasks,
}

function getRes() {
    return db('resources');
}

function getPros() {
    return db('projects');   
}

function getTasks(id) {
    return db('tasks')
    .innerJoin('projects', 'tasks.projects_id', '=', 'projects.id')
    .select('tasks.id', 'projects.name', 'projects.description')
    .where({ projects_id: id });
}

function getRById(id) {
    return db('resources')
        .where({ id })
        .first();
}

function getPById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function getTById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function insertRes(resources) {
    return db('resources')
        .insert(resources)
        .then(id => {
            return getRById(id[0]);
        });
}

function insertPros(projects) {
    return db('projects')
        .insert(projects)
        .then(id => {
            return getPById(id[0]);
        });
}

function insertTasks(tasks) {
    return db('tasks')
        .insert(tasks)
        .then(id => {
            return getTById(id[0]);
        });
}