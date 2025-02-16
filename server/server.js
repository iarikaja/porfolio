import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

const allowedOrigins = [
  'https://iarikaja.github.io/porfolio',  // Modifie avec ton URL frontend
  'http://localhost:3000',  // Si tu utilises localhost pour le développement
];


app.use(cors
  ({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('CORS not allowed'), false);
      }
    }
  })
);
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});