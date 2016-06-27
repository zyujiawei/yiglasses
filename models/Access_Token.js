var keystone = require('keystone'),
    Types = keystone.Field.Types;
/**
 * Access Token Model
 * ==========
 */
var access_token = new keystone.List('Access_token', {
    map: { name: 'content' },
    autokey: { path: 'slug', from: 'content', unique: true },
    singular: '微信密匙',
    plural: '微信密匙'
});
access_token.add({
    content: { type: String,  label: 'Access_token'},
    expire: { type: Number,  label: '过期时间'},
    publishedDate: { type: Types.Datetime, index: true, label: '日期',default: Date.now},
});
access_token.defaultColumns = ' content|20%, expire|20%, publishedDate|20%';
access_token.register();
