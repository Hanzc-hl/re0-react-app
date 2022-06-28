const { client, dbName } = require("./config");

async function blogOperation(op) {
  async function runOperation() {
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection("blog");
    return { db, coll };
  }
  await runOperation()
    .then(op)
    .catch(console.log)
    .finally(client.close);
}

module.exports = blogOperation;
