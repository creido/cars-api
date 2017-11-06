'use strict';

module.exports = (app) => {
    const controller = require('../controllers/carsController');

    // set up routes
    app.route('/').get((req, res) => {
        res.render('index');
    });

    app.route('/cars')
        .get(controller.readAllItems)
        .post(controller.createItem);

    app.route('/cars/:id')
        .get(controller.readItem)
        .put(controller.updateItem)
        .delete(controller.deleteItem);
};
