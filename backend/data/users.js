import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'admin',
    email:'admin@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true
  },
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    email:'tara@example.com',
    password:bcrypt.hashSync('123456',10)
  },
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    email:'kasra@example.com',
    password:bcrypt.hashSync('123456',10)
  }
]

export default users
