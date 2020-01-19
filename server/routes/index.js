const campusController = require("../controllers").campuses;
const studentController = require("../controllers").students;

module.exports = app => {
  app.get("/api", (_, res) => {
    res.json({ message: "Please specify valid endpoint." });
  });

  // Campus Routes
  app.post("/api/campuses", campusController.create);
  app.get("/api/campuses/all", campusController.list);
  app.get("/api/campuses/:campus_id", campusController.retrieve);
  app.put("/api/campuses/:campus_id", campusController.update);
  app.delete("/api/campuses/:campus_id", campusController.delete);

  // Student Routes
  app.post("/api/students", studentController.create);
  app.get("/api/students/all", studentController.list);
  app.get("/api/students/:student_id", studentController.retrieve);
  app.put("/api/students/:student_id", studentController.update);
  app.delete("/api/students/:student_id", studentController.delete);
};
