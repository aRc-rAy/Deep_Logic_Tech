import express from "express";

const app = express();
const PORT = 3000;

// =========Routes================//
import storyRoutes from "./Routes/route_stories.js";
app.use("/getTimeStories", storyRoutes);
app.get("/", (req, res) => {
	res.status(200).send(`<h1>
    <a href="http://localhost:3000/getTimeStories">Get Latest Stories</a>
</h1>`);
});

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
