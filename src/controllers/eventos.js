const Eventos = require("../models/eventos");

module.exports = (app) => {
    app.get("/eventos", (_req, res, next) => {
        Eventos.listar()
            .then((resultados) => res.json(resultados))
            .catch((erros) => next(erros));
    });

    app.get("/eventos/:id", (req, res, next) => {
        const id = parseInt(req.params.id);
        Eventos.buscarPorId(id)
            .then((evento) => (evento ? res.json(evento) : res.status(404).send()))
            .catch((erros) => next(erros));
    });

    app.post("/eventos", (req, res, next) => {
        const evento = req.body;
        Eventos.adicionar(evento)
            .then(() => res.status(201).json({ ...evento }))
            .catch((erros) => next(erros));
    });

    app.put("/eventos/:id", (req, res, next) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        Eventos.alterar(valores, id)
            .then((resultado) => {
                if (resultado) {
                    res.json({ id, ...valores });
                } else {
                    res.status(400).end();
                }
            })
            .catch((erros) => next(erros));
    });

    app.delete("/eventos/:id", (req, res, next) => {
        const id = parseInt(req.params.id);
        Eventos.excluir(id)
            .then((resultado) => res.json(resultado))
            .catch((erros) => next(erros));
    });

    app.get("/eventos/status/:status", (req, res, next) => {
        const status = req.params.status;
        Eventos.buscarPorStatus(status)
            .then((resultado) => {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(404).end();
                }
            })
            .catch((erros) => next(erros));
    });
};