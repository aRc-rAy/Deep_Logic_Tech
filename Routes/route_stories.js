import express from "express";
import { fetchLatestStories } from "../Controllers/controller_stories.js";

const router = express.Router();

router.get("/", fetchLatestStories);

export default router;
