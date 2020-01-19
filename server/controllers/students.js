const Students = require("../models").Students;
const Campuses = require("../models").Campuses;

module.exports = {
  async create(req, res) {
    try {
      const student = await Students.create(req.body, {
        include: [
          {
            model: Campuses,
            as: "campus"
          }
        ]
      });
      await student.reload();
      res.status(201).json(student);
    } catch (error) {
      try {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      } catch (error) {
        res.status(501).json({ error: "Not Implemented." });
      }
    }
  },

  async list(_, res) {
    try {
      const students = await Students.findAll({
        include: [
          {
            model: Campuses,
            as: "campus"
          }
        ]
      });
      res.json(students);
    } catch (error) {
      try {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      } catch (error) {
        res.status(501).json({ error: "Not Implemented." });
      }
    }
  },

  async retrieve(req, res) {
    try {
      const student = await Students.findByPk(req.params.student_id, {
        include: [
          {
            model: Campuses,
            as: "campus"
          }
        ]
      });
      console.log(student);
      if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
      }
      res.json(student);
    } catch (error) {
      try {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      } catch (error) {
        res.status(501).json({ error: "Not Implemented." });
      }
    }
  },

  async update(req, res) {
    try {
      const student = await Students.findByPk(req.params.student_id, {
        include: [
          {
            model: Campuses,
            as: "campus"
          }
        ]
      });
      if (!student) {
        return res.status(404).json({ message: "Student Not Found." });
      }
      await student.update(req.body);
      await student.reload();
      res.json(student);
    } catch (error) {
      try {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      } catch (error) {
        res.status(501).json({ error: "Not Implemented." });
      }
    }
  },

  async delete(req, res) {
    try {
      const student = await Students.findByPk(req.params.student_id);
      if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
      }
      await student.destroy();
      res.status(204).send();
    } catch (error) {
      try {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      } catch (error) {
        res.status(501).json({ error: "Not Implemented." });
      }
    }
  }
};
