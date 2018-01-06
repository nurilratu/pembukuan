import { Mongo } from 'meteor/mongo';
import { Router } from 'meteor/iron:router'

Projects = new Mongo.Collection('projects');

Router.route('/', {name: 'home'});

Router.route('/cashier', {name: 'cashier'});

Router.route('/log', {name: 'log'});

Router.route('/detail', {
    name: 'detail',
    data: function() {
        return Projects.findOne(this.params._id);
    }
});