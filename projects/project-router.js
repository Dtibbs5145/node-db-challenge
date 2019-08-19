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
        for (var i = 0; i < projects.length; i++) {
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

router.get('/:id/tasks', async (req, res) => {
    try {
        const tasks = await db.getTasks(req.params.id);
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].completed === 0) {
                tasks[i].completed = false;
            } else {
                tasks[i].completed = true;
            }
        }
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Could not get task' });
    }
});

router.post('/resources', async (req, res) => {
    try {
        const resources = await db.insertRes(req.body);
        if (resources) {
            res.status(201).json(resources);
        } else {
            res.status(400).json({ message: 'Could not post resource' });
        }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error posting resource' });
    }
});

router.post('/projects', async (req, res) => {
    try {
        const projects = await db.insertPros(req.body);
        if (projects) {
            res.status(201).json(projects);
        } else {
            res.status(400).json({ message: 'Could not post project' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error posting project' });
    }
});

router.post('/tasks', async (req, res) => {
    try {
        const tasks = await db.insertTasks(req.body);
        if (tasks) {
            res.status(201).json(tasks);
        } else {
            res.status(400).json({ message: 'Could not post task' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error while trying to post task' });
    }
});

module.exports = router;