const Booking = require('../models/booking');

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

exports.setBook = async (req, res) => {
    try {
        const { appointmentName, appointmentDate, appointmentTime, place } = req.body;
        const book = await Booking.create({
            appointmentName,
            appointmentDate,
            appointmentTime,
            place,
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