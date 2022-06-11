require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;
const app = express();

// middleware
const corsConfig = {
  origin: true,
  credentials: true,
};
// app.use(cors(origin, 'https://jikmunn-carmania.web.app/'));
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello there!');
});

// const uri = `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASS}@cluster0.vteap.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// const run = async () => {
//   try {
//     await client.connect();
//     const projectsCollection = client.db('projects').collection('project');

//     //  displaying projects
//     app.get('/projects', async (req, res) => {
//       const projects = await projectsCollection.find({}).toArray();
//       res.send(projects);
//     });
//   } finally {
//     // await client.close();
//   }
// };
// run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
