// postman - we can do documentation of each response nd request 

const express = require("express");

//import routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

const app = express();

const PORT = 8081;


app.use(express.json());
// makes sure that the data is in json format
// const data = ["joshi", "dev"];
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running successfully",
    });
});

app.use("/users", usersRouter);
app.use("/books", booksRouter);

// 1st root
// app.get("/", (req,res) => {
//     res.status(404).json
//         // for sending multiple parameters we use .json({}) instead of ".send".

//         ({
//         message: "Server is up and is running successfully"
//     });
// });


app.get("*", (req, res) => {
    // * is used when something isnt defined but u wanna use it
    res.status(404).json({
        message: "This route doesn't exists",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

