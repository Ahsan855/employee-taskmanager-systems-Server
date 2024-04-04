import express from "express";
import taskRoutes from "./taskRoutes.js";
import userRoutes from "./userRoutes.js";
const router = express.Router();

router.use("/user", userRoutes); // api/user/login
router.use("/task", taskRoutes);

export default router;
