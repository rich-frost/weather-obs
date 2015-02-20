/**
 * Created by Rich on 20/02/2015.
 */

// Site list
// http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/xml/sitelist?key={api-key}

// Site Observations
// http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/xml/{locationId}?res=hourly&key={api-key}


// Create a collection of observations for the location
var ObservationsList = Backbone.Collection.extend({

    url:"http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json/" + applicationConstants.locationId() + "?res=hourly&key=" + applicationConstants.apiKey(),

    parse: function(response) {

        //Return just the times for the last period (i.e. last day)
        var periods = response.SiteRep.DV.Location.Period;

        return periods[periods.length-1].Rep.reverse();
    }

});

var observations = new ObservationsList();
