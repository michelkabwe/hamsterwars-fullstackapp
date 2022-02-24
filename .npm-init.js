var cwd = process.cwd(),
  name = cwd.split("/").pop();

module.exports = {
  name: name,
  description: "",
  version: "1.0.0",
  main: "server.js",
  scripts: {
    start: "node server.js",
    dev: "start-frontend-dev.js"
  },
  keywords: [],
  author: "",
  license: ""
};