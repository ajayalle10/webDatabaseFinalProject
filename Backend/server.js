const http = require("http");
const path = require("path");
const fs = require("fs");
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://ajay:alle@cluster0.9zhmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function findsomedata(client, res) {
  const cursor = client.db("finalProjectDB").collection("blogsCollection").find({});
  const results = await cursor.toArray();
  //console.log(results);
  //const js= (JSON.stringify(results));
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(results)); // Convert the array to JSON and send it
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  } else if (req.url === "/api") {
    try {
      await client.connect();
      const data = await findsomedata(client, res);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  } else {
    res.end("<h1> 404 nothing is here</h1>");
  }
});

const PORT = process.env.PORT || 6038;

server.listen(PORT, () =>
  console.log(`Great our server is running on port ${PORT} `)
);