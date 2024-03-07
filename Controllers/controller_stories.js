import axios from "axios";
const URL = "https://time.com";

export const fetchLatestStories = async (req, res) => {
	try {
		const response = await axios.get(URL);
		const html = await response.data;
		const data = parseHTML(html);
		res.status(200).send(data);
	} catch (error) {
		console.error("Error fetching or parsing HTML:", error);
		res.status(400).send(error.message);
	}
};

function parseHTML(html) {
	const elements = [];
	const regex =
		/<li class="latest-stories__item">[\s\S]*?<a href="([^"]+)">[\s\S]*?<h3 class="latest-stories__item-headline">(.*?)<\/h3>/g;

	let match;
	while ((match = regex.exec(html)) !== null) {
		const href = match[1];
		const title = match[2].trim();
		const link = `${URL}${href}`;
		elements.push({ title, link });
	}

	return elements;
}
