// UsersController.js
const UserModel = require('../models/Users');

const getUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({});
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
const createUser=async (req,res)=>{
    try {
        const create=await UserModel.create(req.body) 
        res.json(create);
      } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
      }

}
const getUser=async(req,res)=>{

        const id=req.params.id;
        const users=await UserModel.findById({_id:id})
        .then((users)=>res.json(users))
        .catch((err)=>console.log(err))


}

const updateUser=async (req,res)=>{
    const id=req.params.id;
    const update=await UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then((users)=>res.json(users))
    .catch((err)=>console.log(err))

}
const deleteUser=async(req,res)=>{
    const id=req.params.id;
    const deleteuser=await UserModel.findByIdAndDelete({_id:id})
    .then((users)=>res.json(users))
    .catch((err)=>console.log(err))
}
const viewUser=async(req,res)=>{
    const id=req.params.id
    const view=await UserModel.findById({_id:id})
    .then((users)=>res.json(users))
    .catch((err)=>console.log(err))
}


module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  viewUser
  
};
