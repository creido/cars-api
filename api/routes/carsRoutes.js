'use strict';

module.exports = function (app) {
    var controller = require('../controllers/carsController');

    // set up routes
    app.route('/cars')
        .get(controller.list_all)
        .post(controller.createItem);

    app.route('/cars/:id')
        .get(controller.readAPI)
        .put(controller.updateAPI)
        .delete(controller.deleteAPI);
};
