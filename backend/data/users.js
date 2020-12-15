import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shmulik',
    email: 'shmulik@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'May',
    email: 'may@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
