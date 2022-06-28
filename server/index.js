const path = require("path");
const express = require("express");
const fs = require('fs');
const ApiRoutes = require('./routes/apiRoutes');

const app = express();
const port = 3000;

// 前端打包文件静态托管
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.use('/api', ApiRoutes);

app.listen(port, () => {
  console.log(`Express Server listening on port ${port}`);
  console.log("click link: %o", `http://localhost:${port}`);
});
