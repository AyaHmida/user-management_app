const AdminModel = require('../models/Admin');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const registreAdmin = async (req, res) => {
  const hashpassword=await bcrypt.hash(req.body.password,10)

  const {name,email}=req.body
  try {
    const registre = await AdminModel.create({name,email,password:hashpassword});
    res.json(registre);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const validPassword = await bcrypt.compare(password, admin.password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: admin._id }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ token, message: 'Logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const logout=async(req,res)=>{

}

module.exports = {
  registreAdmin,
  loginAdmin,
  logout
};
