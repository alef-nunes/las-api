const UFs = require("../models/ufs");
const municipios = require("../models/municipios");

module.exports = (app) => {
    app.get("/ufs", (_req, res, next) => {
        UFs.listar()
            .then((resultados) => res.json(resultados.map((uf) => uf.sigla)))
            .catch((erros) => next(erros));
    });

    app.get("/ufs/:uf/municipios", (req, res, next) => {
        const uf = req.params.uf;
        municipios.listarMunicipiosPorEstado(uf)
            .then((resultado) => resultado.length ? res.json(resultado) : res.status(404).end())
            .catch((erros) => next(erros));
    });
};