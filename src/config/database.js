import mongoose from "mongoose";

const connectDatabase = async () => {
  mongoose
    .connect(`${process.env.DATABASE_URL}`)
    .then((_res) => console.info("Databse connected 123å"))
    .catch((err) => console.error("Error Connection Database: ", err));
};

export default connectDatabase;
