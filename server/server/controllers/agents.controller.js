const Agents = require('../models/agents');

exports.getAgents = async (req, res) => {
    const agents = await Agents.findAll()
        .then(result => {
            res.status(201).json({
                success: true,
                payload: result,
            })
        }).catch(err => {
            console.log(err);
            res.status(400).json({
                success: false,
                message: 'No agents are available right now.',
            })
        });
}

exports.setAgents = async (req, res) => {
    try {  
        const { agentsName } = req.body;
        const agents = await Agents.create({
            agentsName
        }).then(result => {
            console.log(result.dataValues);
            res.status(201).json({
                success: true,
                payload: result,
            })
        }).catch(err => {
            res.status(400).json({
                success: false,
                message: 'No agents are available right now.',
            })
        })
    } catch (e) {
        console.log(e);
    }
}