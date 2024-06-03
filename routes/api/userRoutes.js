const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/thoughts
router.route('/').get(getUsers).post(createUser);

// /api/thoughts/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/thoughts/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/thoughts/:userId/friends/:userId
router.route('/:userId/friends/:userId').delete(removeFriend);

module.exports = router;
