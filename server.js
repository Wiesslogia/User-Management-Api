import app from "./app.js";

const PORT = 3000||process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running 127.0.0.1:${PORT}`);
});




