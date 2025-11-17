import express from 'express'
import { getClients, createClient } from '../Controller/clientController.js'
import { requireAuth } from '@clerk/express'

const router = express.Router();
router.use(requireAuth);

// router.use((req, res, next) => {
//   req.auth = { userId: "user_TEST_12345" }; // We pretend we are this user
//   next(); // Move to the controller
// });

router.route('/')
.get(getClients)
.post(createClient)

export default router;