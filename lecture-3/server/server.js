const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

const header = {
  setHeaders: (res, path) => {
    // res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    // res.setHeader('Expires', '-1')
    // res.setHeader('Pragma', 'no-cache')
    if (path.endsWith(".html")) {
      res.setHeaders("Cache-Control", "no-cache");
    } else if (
      path.endsWith(".js") ||
      path.endsWith(".css") ||
      path.endsWith(".webp")
    ) {
      res.setHeaders("Cache-Control", "public", "max-age=31536000");
    } else {
      res.setHeaders("Cache-Control", "no-store");
    }
  },
};

app.use(express.static(path.join(__dirname, "../build"), header));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
