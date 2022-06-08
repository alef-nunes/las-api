const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");
const request = supertest(customExpress());

jest.mock("../src/repositorios/ufs");

describe("API UFs", () => {
    test("Consultar lista de UFS", async () => {
        const resp = await request.get("/ufs");
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual(["RO", "AC", "AM", "RR", "PA", "AP", "TO", "MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA", "MG", "ES", "RJ", "SP", "PR", "SC", "RS", "MS"]);
    });

    test("Consultar lista de Municípios por UF", async () => {
        const resp = await request.get("/ufs/am/municipios");
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual([
            "Alvarães",
            "Amaturá",
            "Anamã",
            "Anori",
            "Apuí",
            "Atalaia do Norte",
            "Autazes",
            "Barcelos",
            "Barreirinha",
            "Benjamin Constant",
            "Beruri",
            "Boa Vista do Ramos",
            "Boca do Acre",
            "Borba",
            "Caapiranga",
            "Canutama",
            "Carauari",
            "Careiro",
            "Careiro da Várzea",
            "Coari",
            "Codajás",
            "Eirunepé",
            "Envira",
            "Fonte Boa",
            "Guajará",
            "Humaitá",
            "Ipixuna",
            "Iranduba",
            "Itacoatiara",
            "Itamarati",
            "Itapiranga",
            "Japurá",
            "Juruá",
            "Jutaí",
            "Lábrea",
            "Manacapuru",
            "Manaquiri",
            "Manaus",
            "Manicoré",
            "Maraã",
            "Maués",
            "Nhamundá",
            "Nova Olinda do Norte",
            "Novo Airão",
            "Novo Aripuanã",
            "Parintins",
            "Pauini",
            "Presidente Figueiredo",
            "Rio Preto da Eva",
            "Santa Isabel do Rio Negro",
            "Santo Antônio do Içá",
            "São Gabriel da Cachoeira",
            "São Paulo de Olivença",
            "São Sebastião do Uatumã",
            "Silves",
            "Tabatinga",
            "Tapauá",
            "Tefé",
            "Tonantins",
            "Uarini",
            "Urucará",
            "Urucurituba"
        ]);
    });
}); 