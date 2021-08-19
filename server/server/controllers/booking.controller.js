const Booking = require('../models/booking');
const Agents = require('../models/agents');

exports.getBook = async (req, res) => {
    const { id } = req.params;
    const book = await Booking.findOne({ where: { id } })
                .then(result => {
                    console.log(result);
                    
                    if (!result) {
                        throw new Error(`Error`);
                    }

                    res.status(201).json({
                        success: true,
                        payload: result,
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json({
                        success: false,
                        message: `No appointment has been found at id ${id}`
                    })
                });
}

exports.getBookAll = async (req, res) => {
    const book = await Booking.findAll()
        .then(result => {
            res.status(201).json({
                success: true,
                payload: result,
            })
        })
        .catch(err => {
            res.status(400).json({
                success: false,
                message: `${err}`,
            })
        });
}

exports.setBook = async (req, res) => {
    try {
        const { propertyName, property, propertyLocation, agName, agentsName, appointmentDate, appointmentTime } = req.body;
        const book = await Booking.create({
            propertyName,
            propertyLocation,
            property,
            agName,
            appointmentDate,
            appointmentTime,
            agentsName,
        }).then(result => {
            console.log(result.dataValues);
            res.status(201).json({
                success: true,
                payload: result
            });
        }).catch(err => {
            console.log(err);
            res.status(400).json({
                success: false,
                message: `${err}`,
            })
        });

    } catch (e) {
        console.log(e);
    }
}