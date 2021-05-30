const server = require("./src/app");

//settings
server.set("port", 3001);

//server listening
server.listen(server.get("port"), () => {
  console.log("Server on port", server.get("port"));
});
