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

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api//:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/:userId/friends/:userId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
