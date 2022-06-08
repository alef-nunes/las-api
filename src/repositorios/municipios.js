const query = require("../infraestrutura/database/queries");

class Municipios {
    listarMunicipiosPorEstado(uf) {
        const sql = "SELECT nome FROM municipios WHERE siglaEstado = ?";
        return query(sql, uf);
    }
}

module.exports = new Municipios();