/**
 * Created by Rich on 20/02/2015.
 */

// This view turns a Observation model into HTML. Will create LI elements.
var ObservationView = Backbone.View.extend({
    tagName: 'tr',

    initialize: function(){

        // Set up event listeners. The change backbone event
        // is raised when a property changes (like the checked field)

        this.render;
    },

    render: function(){

        var time = parseInt(this.model.get('$'))/60;
        var windDir = this.model.get('D');
        var windSpeed = this.model.get('S');

        // Create the HTML
        this.$el.html('<td>' + (String(time).length == 1 ? '0' : '') + time + ':00' + '</td>'
                        + '<td><svg class="icon icon-'+windDir+'"><use xlink:href="#icon-'+windDir.toLowerCase()+'"></use></svg>'
                            + '<span class="table-text">' + windSpeed + 'mph</span></td>');

        // Returning the object is a good practice
        // that makes chaining possible
        return this;
    }
});
