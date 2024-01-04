import express from "express";

const app = express();

// MIDDLEWARE:
// set static folder
app.use(express.static("public"));
//parse url encoded stuff sent by html
app.use(express.urlencoded({ extended: true }));
// parse json stuff sent by the apui
app.use(express.json());

// Handle POST request for temp conversion
app.post("/convert", (req, res) => {
  setTimeout(() => {
    const fahrenheit = parseFloat(req.body.fahrenheit);
    const celsius = (fahrenheit - 32) * (5 / 9);

    res.send(`
        <p>
          ${fahrenheit} degrees Farenheit is equal to ${celsius} degrees Celsius :]
        </p>
      `);
  }, 2000);
});

// server started on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
