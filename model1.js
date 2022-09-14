const m=require('mongoose')
const s1=new m.Schema({
    name:{
        type:String,
    required:true},
    tech:{
        type:String,
        required:true
    },
    sub1:{
        type:Boolean,
        required:true,
        default:false
    }
})
module.exports=m.model("schema",s1)