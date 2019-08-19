const router = require('express').Router();
const db = require('./project-model');

router.get('/resources', async (req, res) => {
    try {
        const resources = await db.getRes();
        res.status(200).json(resources);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Could not retrieve resources' });
    }
});

router.get('/projects', async (req, res) => {
    try {
        const projects = await db.getPros();
        for (var i = 0; i < projects.completed; i++) {
            if (projects[i].completed === 0) {
                projects[i].completed = false;
            } else {
                projects[i].completed = true;
            }
        }
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Could not get projects' });
    }
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await db.getTasks();
        for (var i = 0; i < tasks.completed; i++) {
            if (tasks[i].completed === 0) {
                tasks[i].completed = false;
            } else {
                tasks[i].completed = true;
            }
        }
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Could not get tasks' });
    }
});

router.post('/resources', async (req, res) => {

});

router.post('/projects', async (req, res) => {

});

router.post('/tasks', async (req, res) => {

});

module.exports = router;