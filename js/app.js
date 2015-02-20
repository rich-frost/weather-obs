/**
 * Created by Rich on 20/02/2015.
 */

$(function(){

    // The main view of the application
    var App = Backbone.View.extend({

        // Base the view on an existing element
        el: $('#main'),

        initialize: function(){

            observations.fetch({
                success : function() {
                    observations.each(function(observation){
                        var view = new ObservationView({ model: observation });
                        $('#observations').append(view.render().el);

                    }, this);	// "this" is the context in the callback
                }
            });

        },

        render: function() {

            // Create views for every one of the observations in the
            // collection and add them to the page

            observations.each(function(observation){
                var view = new ObservationView({ model: observation });
                this.list.append(view.render().el);

            }, this);	// "this" is the context in the callback
        }
    });

    new App();

});