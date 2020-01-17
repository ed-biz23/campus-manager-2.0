const Campus = require("../models").Campus;
const dbError = "DB error";

module.exports = {
  create(req, res) {
    const { name, address } = req.body;
    if (!name)
      return res.status(400).json({ error: "Please enter campus name" });
    if (!address)
      return res.status(400).json({ error: "Please enter campus address" });

    return Campus.create({
      name,
      address
    })
      .then(campus => res.status(201).json(campus))
      .catch(error => res.status(400).json({ error: dbError }));
  },

  getAllCampuses(_, res) {
    return Campus.findAll()
      .then(campuses => res.json(campuses))
      .catch(error => res.status(400).json({ error: dbError }));
  },

  getCampus(req, res) {
    return Campus.findByPk(req.params.id)
      .then(campus => {
        if (!campus) {
          return res.status(404).json({ message: "Campus Not Found" });
        }
        return res.json(campus);
      })
      .catch(error => res.status(400).json({ error: dbError }));
  },

  updateCampus(req, res) {
    return Campus.findByPk(req.params.id)
      .then(campus => {
        if (!campus) {
          return res.status(404).json({ message: "Campus Not Found" });
        }
        return campus
          .update(req.body)
          .then(() => res.json({ campus }))
          .catch(error => res.status(400).json({ error: dbError }));
      })
      .catch(error => res.status(400).json({ error: dbError }));
  },

  deleteCampus(req, res) {
    return Campus.findByPk(req.params.id)
      .then(campus => {
        if (!campus) {
          return res.status(404).json({ message: "Campus Not Found" });
        }
        return campus
          .destroy()
          .then(() => res.status(200).json({ success: true }))
          .catch(error => res.status(400).json({ error: dbError }));
      })
      .catch(error => res.status(400).json({ error: dbError }));
  }
};
