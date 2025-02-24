import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI;
const dataBase = process.env.DB;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  ssl:false,
  useUnifiedTopology: true,
});

// try {
//   // Connect the client to the server
//   await client.connect();
//   // Send a ping to confirm a successful connection
//   await client.db("admin").command({ ping: 1 });
//   console.log(
//    "Pinged your deployment. You successfully connected to MongoDB!"
//   );
// } catch(err) {
//   console.error(err);
// }

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

let db = client.db(dataBase);

export default db;