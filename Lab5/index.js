import PathParameters from "./pathParameters.js";
import QueryParameters from "./queryParameters.js";
import WorkingWithArrays from "./workingWithArrays.js";
import WorkingWithObjects from "./workingWithObjects.js";
export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
      res.send("Welcome to Lab 5");
    });
    PathParameters(app);
    QueryParameters(app);
    WorkingWithObjects(app);
    WorkingWithArrays(app);
  };
  
  