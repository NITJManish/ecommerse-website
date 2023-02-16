const router=require("express").Router();

router.get("/usertest",(req,res)=>{
    res.send("user test successfully");
});

//http://localhost:8000/api/user/usertest

router.post("/usertestpost",(req,res)=>{
    //use post means some req,
    const username=req.body.username;
    res.send("your name is " + username);
})

module.exports=router;