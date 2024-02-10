const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      res.status(200).json({ msg: "User already exist" });
      return;
    }
    bcrypt.hash(password, 3, async (err, hash) => {
      if (err) {
        res.status(400).json({ msg: err.message });
        return;
      }
      const user = new UserModel({ name, email, password: hash });
      await user.save();
      req.session.isAuth=true
      req.session.user = { _id: user._id, name: user.name, email: user.email };
      res.status(200).json({
        msg: "user has been added",
        newUser: { _id: user._id, name: user.name, email: user.email },
      });
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(200).json({ msg: "Please register First" });
      return;
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if(result){
        req.session.isAuth = true;
        req.session.user = {
          _id: user._id,
          name: user.name,
          email: user.email,
        };
        res.status(200).json({msg:"Login successfull",user:{_id:user._id,name:user.name,email:user.email}})
      }else{
        res.status(400).json({msg:"incorrect password"})
      }
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { register, login };
