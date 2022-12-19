const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of all users.
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get('/', userController.getAllUsers);

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary: Retrieve a single  user.
 *     description: Retrieve a user from the database.
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
*/
router.get('/:userId', userController.getOneUser);

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Create a new  user during signup.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
*/
router.post('/signup', userController.createUser);


router.post('/login', userController.getOneUser);


router.patch('/:userId', userController.updateUser);


router.delete('/:userId', userController.deleteUser);

module.exports = router;