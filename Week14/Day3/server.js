const Parser = require("rss-parser");
const parser = new Parser();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

let feed = { items: [] };
let feedFiltered = [];
let categoriesAll = [];

app.get("/", async (req, res, next) => {
  res.locals.feed = feed;
  try {
    feed = await parser.parseURL("https://www.thefactsite.com/feed/");
    res.locals.feed = feed;
  } catch (err) {}
  res.render("index");
});

app.get("/search", async (req, res) => {
  feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  feed.items.forEach((item) => {
    categoriesAll.push(item.categories);
  });
  categoriesAll = [...new Set(categoriesAll.flat())];
  res.render("search", {
    feed: feed,
    categoriesAll: categoriesAll,
    feedFiltered: feedFiltered,
  });
});

app.post("/search", (req, res) => {
  feedFiltered = [];
  feed.items.forEach((item) => {
    if (req.body.title && item.title.toLowerCase().includes(req.body.title)) {
      feedFiltered.push(item);
    }
    if (
      req.body.category &&
      item.categories.join().includes(req.body.category)
    ) {
      feedFiltered.push(item);
    }
  });
  res.render("search", {
    feed: feed,
    categoriesAll: categoriesAll,
    feedFiltered: feedFiltered,
  });
});

app.listen(3000, () => console.log("Server listening on 3000"));
