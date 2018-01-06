import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  // adaw
});

Meteor.publish('projects', function(){
  return Projects.find({});
});

Meteor.methods({
  projectsUpdate: function(barang){
    if(Projects.find({ tanggal: new Date().toISOString().slice(0,10) }).count() == 0) {
      Projects.insert({ tanggal: new Date().toISOString().slice(0,10), barang: [] });
      Projects.update({ tanggal: new Date().toISOString().slice(0,10) }, { $addToSet: { barang: { nama: barang.nama, harga: barang.harga, qty: barang.qty, total: barang.total } }});      
    } else {
      Projects.update({ tanggal: new Date().toISOString().slice(0,10) }, { $addToSet: { barang: { nama: barang.nama, harga: barang.harga, qty: barang.qty, total: barang.total } }});
    }
  }
});