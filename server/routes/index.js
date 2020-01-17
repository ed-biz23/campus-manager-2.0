const campusController = require("../controllers").campus;

module.exports = app => {
  app.get("/api", (req, res) => {
    res.json({ message: "Welcome!!" });
  });

  // Campus Routes
  app.post("/api/campus", campusController.create);
  app.get("/api/campus", campusController.getAllCampuses);
  app.get("/api/campus/:id", campusController.getCampus);
  app.put("/api/campus/:id", campusController.updateCampus);
  app.delete("/api/campus/:id", campusController.deleteCampus);
};
