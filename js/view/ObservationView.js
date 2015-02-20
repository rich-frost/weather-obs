/**
 * Created by Rich on 20/02/2015.
 */

// This view turns a Observation model into HTML. Will create LI elements.
var ObservationView = Backbone.View.extend({
    tagName: 'tr',

    render: function(){

        var time = parseInt(this.model.get('$'))/60;
        var windDir = this.model.get('D');
        var windSpeed = this.model.get('S');

        var colourState = applicationConstants.onShoreWindColour();
        colourState = ($.inArray(windDir, applicationConstants.offShoreWindDirections()) ==! -1) ? applicationConstants.offShoreWindColour : colourState;
        colourState = ($.inArray(windDir, applicationConstants.crossShoreWindDirections()) ==! -1) ? applicationConstants.crossShoreWindColour: colourState;


        this.$el.attr("class", colourState);

        // Create the HTML
        this.$el.html('<td>' + (String(time).length == 1 ? '0' : '') + time + ':00' + '</td>'
                        + '<td><svg class="icon icon-'+windDir.toLowerCase()+'"><use xlink:href="#icon-'+windDir.toLowerCase()+'"></use></svg>'
                            + '<span class="table-text">' + windSpeed + 'mph</span></td>');

        // Returning the object is a good practice
        // that makes chaining possible
        return this;
    }
});
