const {Schema,model, Types} = require('../connection');

const mySchema=new Schema({
    title:String,
    date:Number,
    details:String,
    image:String,
    });

module.exports=model('blog',mySchema)