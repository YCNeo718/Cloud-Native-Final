import express from "npm:express@4";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, Deno with Express!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

