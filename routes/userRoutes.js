import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);

// router.get("/get-team", protectRoute, isAdminRoute, getTeamList);
// router.get("/notifications", protectRoute, getNotificationsList);

// router.put("/profile", protectRoute, updateUserProfile);
// router.put("/read-noti", protectRoute, markNotificationRead);
// router.put("/change-password", protectRoute, changeUserPassword);

// //  // FOR ADMIN ONLY - ADMIN ROUTES
// router
//   .route("/:id")
//   .put(protectRoute, isAdminRoute, activateUserProfile)
//   .delete(protectRoute, isAdminRoute, deleteUserProfile);
export default router;
