import app from "./app.js";

app.listen(app.get("port"), () => {
  console.info("Server on port", app.get("port"));
});
