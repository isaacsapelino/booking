const express = require('express');
const router = express.Router();
const agents = require('../controllers/agents.controller');

router.get('/', agents.getAgents);
router.post('/', agents.setAgents);

module.exports = router;