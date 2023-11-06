export default class RespostaModel {
    #valor: string
    #certa: boolean
    #revelada: boolean


    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }

    get valor(): string {
        return this.#valor;
    }

    get certa(): boolean {
        return this.#certa;
    }

    get revelada(): boolean {
        return this.#revelada;
    }

    static certa(valor: string) {
        return new RespostaModel(valor, true);
    }

    static errada(valor: string) {
        return new RespostaModel(valor, false);
    }

    paraObjeto(){
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }

    revelar(): RespostaModel {
        return new RespostaModel(this.#valor, this.#certa, true);
    }
}