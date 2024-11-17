import { Router } from 'express';
const router = Router();

const users = [
	{
	"ID": 1,
	"firstName": "John",
	"lastName": "Doe"
	},
	{
	"ID": 2,
	"firstName": "Jane",
	"lastName": "Smith"
	},
	{
	"ID": 3,
	"firstName": "Michael",
	"lastName": "Johnson"
	},
	{
	"ID": 4,
	"firstName": "Emily",
	"lastName": "Davis"
	},
	{
	"ID": 5,
	"firstName": "Chris",
	"lastName": "Brown"
	}
]

// GET METHOD
router.get('/users', (req, res) => {
  res.json({ users });
});

// POST METHOD
router.post('/users', (req, res) => {
  const { firstName, lastName } = req.body;
  const newUser = {
    ID: users.length + 1,
    firstName,
    lastName
  };
  users.push(newUser);

  res.status(201).json({
    msg: 'User added successfully',
    user: newUser
  });
});

// PUT METHOD
router.put('/users/:id', (req, res) => {
  const { firstName, lastName } = req.body;
  const userId = parseInt(req.params.id);

  // Find the user with this ID
  const user = users.find(u => u.ID === userId);

  // If the user is not found, send a 404 status code
  if (!user) {
    return res.status(404).json({ msg: 'User not found' });
  }

  // Update the user's data
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }

  res.json({
    msg: 'User updated successfully',
    user
  });
});

// DELETE METHOD
router.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  // Find the index of the user with this ID
  const userIndex = users.findIndex(u => u.ID === userId);

  // If the user is not found, send a 404 status code
  if (userIndex === -1) {
    return res.status(404).json({ msg: 'User not found' });
  }

  // Remove the user from the array
  const deletedUser = users.splice(userIndex, 1);

  res.json({
    msg: 'User deleted successfully',
    user: deletedUser[0]
  });
});


export default router;