//1.INCAPSULAREA
/*class ContES6 {
    #suma;
    #titular
    constructor(titular, suma) {
        this.titular = titular;
        this.#suma = suma;
    }
    get suma() {
        return this.#suma;
    }
    get titular() {
        return this.#titular;
    }
    set titular(value) {
        if (value.length > 15) {
            throw new Error("Erroare. Numele nu poate depasi 15 caractere");
        } else {
            this.#titular = value;
        }
    }
    depune(val) {
        this.#suma += val;
    }
    extrage(val) {
        if (this.#suma - val < 0)
            this.#suma = 0;
        else
            this.#suma -= val;
    };
    afiseaza() {
        console.log(`${this.#titular} are ${this.#suma} lei in cont.`);
    }

}

const c = new ContES6('Ion Popescu', 45);
console.log(c);*/


//2.MOSTENIREA
/*function Persoana(nume, prenume){
    this.nume = nume;
    this.prenume = prenume;
}

Persoana.prototype.salut = function(){
    console.log(`salut, ma numesc ${this.nume} ${this.prenume}`);
};

function Angajat(nume, prenume, meserie)
{
    Persoana.call(this, nume, prenume);
    this.meserie = meserie;
}

Angajat.prototype = Object.create(Persoana.prototype);

Angajat.prototype.constructor = Angajat;

Angajat.prototype.primesteSalariu = function(){
    console.log("Am mrimit salariul.")
};

Angajat.prototype.salut = function(){
    console.log(`salut, ma numesc ${this.nume} ${this.prenume} si sunt ${this.meserie} si am salariul de 2k $`);
}
const p = new Persoana('Marcu', 'Elena');
console.log(p);

const a = new Angajat('Tanase', 'Ana', 'profesoara');
console.log(a);*/


//MOSTENIREA IN ES6

class Persoana {
    #nume;
    #prenume;
    #dataNasterii;
    constructor(nume, prenume, data) {
        if (nume == undefined || prenume == undefined || data == undefined) {
            throw new Error('Error. Invalid arguments.');
        }
        this.#nume = nume;
        this.#prenume = prenume;
        this.#dataNasterii = data;
    }
    get nume() {
        return this.#nume;
    }
    get prenume() {
        return this.#prenume;
    }
    get dataNasterii() {
        return this.#dataNasterii;
    }
    salut() {
        console.log(`salut, ma numesc ${this.#nume} ${this.#prenume} `);
    }
}

class Angajat extends Persoana{
    #salariu
    get salariu(){
        return this.#salariu;
    }
    constructor(nume, prenume, data, meserie){
        super(nume, prenume, data);
        this.meserie = meserie;
        this.#salariu = 1000;
    }
    salut(){
        console.log(`salut. ma numesc ${super.nume} ${super.prenume} si sunt de meserie: ${this.meserie}`)
    }
}

//OBIECTELE SI AFISAREA IN MOSTENIRE
/*const a = new Angajat('Marcu', 'Andrei', new Date('1998/05/02'), 'inginer');
console.log(a.nume, a.prenume);
a.salut();

const p = new Persoana('Ionescu', 'Dana', new Date('1998/06/05'));
p.salut();*/

//POLIMORFISM
class Manager extends Angajat{
    salut(){
        console.log(`salut. ma numesc ${super.nume} ${super.prenume} si sunt manager.`)
    }
}

const p = new Persoana('Popa', 'Elena', new Date());
const a = new Angajat('Dobre', 'Dana', new Date(), 'secretara');
const m = new Manager('Stefanescu', 'Irina', new Date(), 'inginer');

const arr = [p, a, m];

for(let i = 0; i < arr.length; i++){
    let e = arr[i];
    e.salut();
}