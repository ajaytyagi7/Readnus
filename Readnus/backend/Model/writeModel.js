const {Schema,model, Types} = require('../connection');

const mySchema=new Schema({
    title:String,
    description:String,
    story:String,
    image:String,
    });

module.exports=model('write',mySchema)