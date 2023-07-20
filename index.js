"use strict";
var array = [];
document.addEventListener('DOMContentLoaded', init());
function init() {
    getShowCapi();
}
class Capo {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    getSaldoCapo() {
        return this.prezzoivainclusa * this.saldo / 100;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
function getShowCapi() {
    fetch('./Abbigliamento.json')
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        array = data;
        array.map(function (element) {
            let capo = new Capo(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
            console.log(`Totale saldo capo: €${capo.getSaldoCapo()}`);
            console.log(`Totale capo: €${capo.getAcquistoCapo()}`);
        });
        console.log(array);
    });
}
