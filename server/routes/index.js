const campusController = require("../controllers").campuses;
const studentController = require("../controllers").students;

module.exports = app => {
  app.get("/api", (_, res) => {
    res.json({ message: "Please specify valid endpoint." });
  });

  // Campus Routes
  app.post("/api/campuses", campusController.create);
  app.get("/api/campuses/all", campusController.list);
  app.get("/api/campuses/:id", campusController.retrieve);
  app.put("/api/campuses/:id", campusController.update);
  app.delete("/api/campuses/:id", campusController.delete);

  // Student Routes
  app.post("/api/students", studentController.create);
  app.get("/api/students/all", studentController.list);
  app.get("/api/students/:id", studentController.retrieve);
  app.put("/api/students/:id", studentController.update);
  app.delete("/api/students/:id", studentController.delete);
};
