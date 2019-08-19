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

function getTasks() {
    return db('tasks');
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
        .insert()
        .then(id => {
            return getRById(id[0]);
        });
}
function insertPros(projects) {
    return db('projects')
        .insert()
        .then(id => {
            return getRById(id[0]);
        });
}
function insertTasks(tasks) {
    return db('tasks')
        .insert()
        .then(id => {
            return getRById(id[0]);
        });
}