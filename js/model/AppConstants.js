/**
 * Created by Rich on 20/02/2015.
 */

// Store the application constants required to access the Met Office DataPoint service
var ApplicationConstants = Backbone.Model.extend({

    apiKey: function () {
        return '{api-key}';
    },

    locationId: function () {
        return '{location-id}';
    },

    beachDirection: function () {
        return 'ESE';
    },

    offShoreWindDirections: function() {
        return ['E', 'ESE', 'SE'];
    },

    crossShoreWindDirections: function() {
        return ['NNE', 'NE', 'ENE', 'SSE', 'S', 'SSW'];
    },

    offShoreWindColour: function() {
        return 'success';
    },

    crossShoreWindColour: function() {
        return 'warning';
    },

    onShoreWindColour: function() {
        return 'danger';
    }
});

var applicationConstants = new ApplicationConstants();