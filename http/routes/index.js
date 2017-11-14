const router = require('express').Router();

/* MODEL */
const vagas = require('../../db/vagas');

/* ROUTES */

router.get('/vagas', (req, res) => {
  vagas.all()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post('/vagas/:id', async (req, res) => {
  const id = req.params.id;

  const vaga = await vagas.find(id);

  const state = !vaga.state;

  vagas.update(id, {state})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
