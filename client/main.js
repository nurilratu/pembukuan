import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.cashierlist.helpers({
    projects: function() {
        return Projects.find({ tanggal: new Date().toISOString().slice(0,10) }, { 'barang': 1, '_id': 0 });
    }
});

Template.cashiersubmit.events({
    'submit form.submit':(e) => { 
        e.preventDefault();         

        var barang = {
            nama: $('input#nama').val(),
            harga: $('input#harga').val(),
            qty: $('input#nama').val(),
            total: $('input#total').val()
        };

        Meteor.call('projectsUpdate', barang);        
        alert('success');
    },
    'change input#harga':(e) => {
        $('input#total').attr('value', $(e.target).val() * $('input#qty').val());
    },
    'change input#qty':(e) => {
        $('input#total').attr('value', $(e.target).val() * $('input#harga').val());
    }
});
