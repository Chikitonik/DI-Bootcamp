const express = require("express");
const app = express();
app.use(express.json());
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todos",
  password: "postgres",
  port: 5432,
});
// ----------------------------
// code below to avoid this error:
// Access to XMLHttpRequest at 'http://localhost:3001/' from origin 'http://localhost:3000'
// has been blocked by CORS policy: Response to preflight request doesn't pass access control
// check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// link
// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// ---------------------------------

const getTasks = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * from tasks", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const postTask = (text) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO tasks (task_text)
      values('${text}')`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};
const deleteTask = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`DELETE FROM tasks WHERE task_id=${id}`, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

app.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json([{ tasks }]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/", async (req, res) => {
  try {
    await postTask(req.body.text);
    const tasks = await getTasks();
    res.json([{ tasks }]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/:id", async (req, res) => {
  try {
    await deleteTask(req.params.id);
    const tasks = await getTasks();
    res.json([{ tasks }]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("listening on 3001");
});
