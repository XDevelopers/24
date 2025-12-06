import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.json());
app.use(express.static("public"));

app.use(cookieParser());

//rotues
// import Cartrouter from "./src/routes/cart.routes.js";
// import Complainrouter from "./src/routes/complain.routes.js";
// import Deliveryrouter from "./src/routes/delivery.routes.js";
// import Ordersrouter from "./src/routes/orders.routes.js";
// import Productrouter from "./src/routes/products.routes.js";
import Userrouter from "./src/routes/users.routes.js";

// app.use("/cart",Cartrouter)
// app.use("/complain",Complainrouter)
// app.use("/delivery",Deliveryrouter)
// app.use("/orders",Ordersrouter)
// app.use("/products",Productrouter) 
app.use("/user",Userrouter)

export { app };
