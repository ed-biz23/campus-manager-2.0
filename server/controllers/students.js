const Students = require("../models").Students;
const Campuses = require("../models").Campuses;

module.exports = {
  create(req, res) {
    return Students.create(req.body)
      .then(student => res.status(201).json(student))
      .catch(error => {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      });
  },

  list(_, res) {
    return Students.findAll()
      .then(students => res.json(students))
      .catch(error => {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      });
  },

  retrieve(req, res) {
    return Students.findByPk(req.params.id)
      .then(student => {
        if (!student) {
          return res.status(404).json({ message: "Student Not Found" });
        }
        return res.json(student);
      })
      .catch(error => {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      });
  },

  update(req, res) {
    return Students.findByPk(req.params.id)
      .then(student => {
        if (!student) {
          return res.status(404).json({ message: "Student Not Found." });
        }
        return student
          .update(req.body)
          .then(() => res.json({ student }))
          .catch(error => {
            error = JSON.parse(JSON.stringify(error)).errors[0].message;
            res.status(400).json({ error });
          });
      })
      .catch(error => {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error: error });
      });
  },

  delete(req, res) {
    return Students.findByPk(req.params.id)
      .then(student => {
        if (!student) {
          return res.status(404).json({ message: "Student Not Found" });
        }
        return student
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => {
            error = JSON.parse(JSON.stringify(error)).errors[0].message;
            res.status(400).json({ error });
          });
      })
      .catch(error => {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      });
  }
};
