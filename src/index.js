import app from "./app.js";
import connectDatabase from "./config/database.js";

connectDatabase();

app.listen(app.get("port"), () => {
  console.info("Server on port", app.get("port"));
});
