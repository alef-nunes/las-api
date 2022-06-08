// const query = require("../infraestrutura/database/queries");

const usuariosMock = require("./usuarios.json");
const usuariosDadosMock = require("./usuariosDados.json");

class Usuario {
    listar() {
        return Promise.resolve(usuariosMock);
    }

    buscarPorId(id) {
        return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
    }

    adicionar(usuario) {
        return Promise.resolve(usuario && { insertId: 99 });
    }

    isNomeUsuarioUtilizado(nome) {
        return Promise.resolve(!!usuariosMock.find((usuario) => usuario.nome === nome));
    }

    alterar(id) {
        return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
    }

    excluir(id) {
        return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
    }

    buscarPorNome(nome) {
        return Promise.resolve(usuariosMock.find((usuario) => usuario.nome === nome));
    }

    listarDadosPessoais(id) {
        return Promise.resolve(usuariosDadosMock.find((usuario) => usuario.id === id));
    }

    alterarDadosPessoais(id) {
        return Promise.resolve(usuariosDadosMock.find((usuario) => usuario.id === id));
    }

    listarContatos(id) {
        return Promise.resolve(usuariosDadosMock.find((contato) => contato.id === id));
    }

    alterarContatos(id) {
        return Promise.resolve(usuariosDadosMock.find((contatos) => contatos.id === id));
    }

    alterarSenha(valores, id) {
        if (valores.senha) {
            usuariosMock[id - 1].senha = valores.senha;
        }
        return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id))
            .then(({ senha }) => ({ senha }))
            .catch(() => undefined);
    }

    listarEndereco(id) {
        return Promise.resolve(usuariosDadosMock.find((usuario) => usuario.id === id));
    }

    alterarEndereco(id) {
        return Promise.resolve(usuariosDadosMock.find((usuario) => usuario.id === id));
    }
}

module.exports = new Usuario();