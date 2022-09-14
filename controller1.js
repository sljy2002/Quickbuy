const exp=require('express')
const router=exp.Router()
const schema=require('../model/model1')

router.get('/',async (req,res)=>{
    try{
const a=await schema.find()
res.json(a)
    }
    catch(err)
    {
res.send("Error"+err)
    }
})
router.post('/',async (req,res) =>
{const x=new s2(
    {
        name:req.body.name,
        tech:req.body.tech,
        section:req.body.section
    }
)
try{
    const x1=await x.save()
    res.json(x1)
}
catch(err){
    res.send("Error"+err)
}
})

router.patch('/:id',async(res, req)=>{
    try{
        const a= await s2.findById(req.params.id)
        a.tech=req.body.tech
        const a1=a.save()
        res.json(a1)

    }catch(err){
        res.send('error'+err)
    }

})
module.exports=router