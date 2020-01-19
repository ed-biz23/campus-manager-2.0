const Campuses = require("../models").Campuses;
const Students = require("../models").Students;

module.exports = {
  async create(req, res) {
    try {
      campus = await Campuses.create(req.body, {
        include: [
          {
            model: Students,
            as: "students"
          }
        ]
      });
      await campus.reload();
      res.status(201).json(campus);
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
      const campuses = await Campuses.findAll({
        include: [
          {
            model: Students,
            as: "students"
          }
        ]
      });
      res.json(campuses);
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
      campus = await Campuses.findByPk(req.params.campus_id, {
        include: [
          {
            model: Students,
            as: "students"
          }
        ]
      });
      if (!campus) {
        return res.status(404).json({ message: "Campus Not Found." });
      }
      return res.json(campus);
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
      const campus = await Campuses.findByPk(req.params.campus_id, {
        include: [
          {
            model: Students,
            as: "students"
          }
        ]
      });
      if (!campus) {
        return res.status(404).json({ message: "Campus Not Found." });
      }
      await campus.update(req.body);
      res.json(campus);
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
      const campus = await Campuses.findByPk(req.params.campus_id);
      if (!campus) {
        return res.status(404).json({ message: "Campus Not Found." });
      }
      await campus.destroy();
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
