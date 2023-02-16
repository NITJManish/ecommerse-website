const router=require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");


//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password:CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
        
    });
  
    try {
      const savedUser = await newUser.save();
    res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

  //login
  router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                email: req.body.email
            }
        );

        if(!user) return res.status(401).json({error:"Wrong User Name"});

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
       if(Originalpassword !== req.body.password) return res.status(401).json({error:"Wrong Password"});

   

     

        return res.status(200).json(user);

    }catch(err){
        console.log(err);
       return res.status(500).json({err});
    }

});



module.exports =router;