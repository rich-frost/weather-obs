/**
 * Created by Rich on 20/02/2015.
 */

// Store the application constants required to access the Met Office DataPoint service
var ApplicationConstants = Backbone.Model.extend({

    apiKey: function () {
        return 'bee2e795-cf8d-4635-8e94-859105168328';
    },

    locationId: function () {
        return '3808';
    }
});

var applicationConstants = new ApplicationConstants();