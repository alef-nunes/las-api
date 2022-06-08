const repositorio = require("../repositorios/municipios");

class Municipios {
    listarMunicipiosPorEstado(uf) {
        return repositorio.listarMunicipiosPorEstado(uf)
            .then((resultado) => resultado.map((municipio) => municipio.nome));
    }
}

module.exports = new Municipios();