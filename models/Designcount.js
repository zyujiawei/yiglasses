var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Designcount = new keystone.List('Designcount', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});

Designcount.add({
	name: { type: String, required: true, default:'new name'},
	model: { type: String, required: true,default:'new model' },
	limit: { type: Number, required: true,default:1000 },
	count: { type: Number, required: true,default:0},
		percentage: { type: Number,noedit:true, watch:'limit count',value:function(){
		return this.count * 100 / this.limit;
	}},
	image: { type: Types.LocalFile ,dest: __dirname+'/../public/images/designimgs/', label: '图像',allowedTypes :['image/jpeg'],filename: function(item, name){
		return item.name+'.'+name.extension;
	} ,format: function(item, file){
		return '<img src="/images/designimgs/'+file.filename+'" style="max-width: 300px">'
	}}
});

// Post.schema.virtual('content.full').get(function() {
// 	return this.content.extended || this.content.brief;
// });

Designcount.defaultColumns = 'name|20%, model|20%, limit|20%, limit|20%';
Designcount.register();
