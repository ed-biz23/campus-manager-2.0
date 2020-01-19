const Campuses = require("../models").Campuses;
const Students = require("../models").Students;

module.exports = {
  create(req, res) {
    return Campuses.create(req.body)
      .then(campus => res.status(201).json(campus))
      .catch(error => {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      });
  },

  list(_, res) {
    return Campuses.findAll({
      include: [
        {
          model: Students,
          as: "students"
        }
      ],
      order: [
        ["createdAt", "DESC"],
        [{ model: Students, as: "students" }, "createdAt", "ASC"]
      ]
    })
      .then(campuses => res.json(campuses))
      .catch(error => {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      });
  },

  retrieve(req, res) {
    return Campuses.findByPk(req.params.id, {
      include: [
        {
          model: Students,
          as: "students"
        }
      ]
    })
      .then(campus => {
        if (!campus) {
          return res.status(404).json({ message: "Campus Not Found." });
        }
        return res.json(campus);
      })
      .catch(error => {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      });
  },

  update(req, res) {
    return Campuses.findByPk(req.params.id, {
      include: [
        {
          model: Students,
          as: "students"
        }
      ]
    })
      .then(campus => {
        if (!campus) {
          return res.status(404).json({ message: "Campus Not Found." });
        }
        return campus
          .update(req.body)
          .then(() => res.json({ campus }))
          .catch(error => {
            error = JSON.parse(JSON.stringify(error)).errors[0].message;
            res.status(400).json({ error: error });
          });
      })
      .catch(error => {
        error = JSON.parse(JSON.stringify(error)).errors[0].message;
        res.status(400).json({ error });
      });
  },

  delete(req, res) {
    return Campuses.findByPk(req.params.id)
      .then(campus => {
        if (!campus) {
          return res.status(404).json({ message: "Campus Not Found" });
        }
        return campus
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
