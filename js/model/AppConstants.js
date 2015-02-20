/**
 * Created by Rich on 20/02/2015.
 */

// Store the application constants required to access the Met Office DataPoint service
var ApplicationConstants = Backbone.Model.extend({

    apiKey: function () {
        return 'your-api-key';
    },

    locationId: function () {
        return 'location-id';
    }
});

var applicationConstants = new ApplicationConstants();