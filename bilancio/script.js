/* Programma per calcolare i valori di bilancio, 
gli indici, i margini e fare un commento sulla situazione 
in cui si trova l'azienda alla fine dell'anno n */


const spRiclassificato = document.getElementById("sp-riclassificato-sintetico");
const submitBtn = document.getElementById("submitBtn");
let tipoAzienda = document.getElementById("tipo-azienda").value;
console.log(tipoAzienda);
let valoriBilancio = {
  AC: {
    nome: "AC", 
    percentuale: 0, 
    valore: 0, 
    classe: "AC",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  PB: {
    nome: "PB", 
    percentuale: 0, 
    valore: 0, 
    classe: "PB",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  IM: {
    nome: "IM", 
    percentuale: 0, 
    valore: 0, 
    classe: "IM",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  PC: {
    nome: "PC", 
    percentuale: 0, 
    valore: 0, 
    classe: "PC",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  PN: {
    nome: "PN", 
    percentuale: 0, 
    valore: 0, 
    classe: "PN",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  DL: {
    nome: "DL", 
    percentuale: 0, 
    valore: 0, 
    classe: "AC",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  DF: {
    nome: "DF", 
    percentuale: 0, 
    valore: 0, 
    classe: "AC",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  RIM: {
    nome: "RIM", 
    percentuale: 0, 
    valore: 0, 
    classe: "AC",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  IM_FIN: {
    nome: "IM-FIN", 
    percentuale: 0, 
    valore: 0, 
    classe: "IM",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  IM_IMM: {
    nome: "IM-IMM", 
    percentuale: 0, 
    valore: 0, 
    classe: "IM",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  IM_MAT: {
    nome: "IM-MAT", 
    percentuale: 0, 
    valore: 0, 
    classe: "IM",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  CP: {
    nome: "CP", 
    percentuale: 0, 
    valore: 0, 
    classe: "PN",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  REsp: {
    nome: "REsp", 
    percentuale: 0, 
    valore: 0, 
    classe: "PN",
    aggiorna_percentuale: true,
    documento: "sp",
    stampa: true
  },
  CD: {
    nome: "CD", 
    percentuale: 0, 
    valore: 0, 
    classe: "TI",
    aggiorna_percentuale: false,
    documento: "sp",
    formula: "PB+PC",
    stampa: true
  },
  TI: {
    nome: "TI", 
    percentuale: 100, 
    valore: 0, 
    classe: "TI",
    aggiorna_percentuale: false,
    documento: "sp",
    stampa: true
  },
  TF: {
    nome: "TF", 
    percentuale: 100, 
    valore: 0, 
    classe: "TF",
    aggiorna_percentuale: false,
    documento: "sp",
    stampa: true
  },

  RO: {
    nome: "RO",
    percentuale: 0,
    valore: 0,
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    stampa: false
  },
  RV: {
    nome: "RV",
    percentuale: 0,
    valore: 0,
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    stampa: false
  },
  A: {
    nome: "A",
    percentuale: 0,
    valore: 0,
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    stampa: true
  },
  B: {
    nome: "B",
    percentuale: 0,
    valore: 0,
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    stampa: true
  },
  C: {
    nome: "C",
    percentuale: 0,
    valore: 0,
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    stampa: true
  },
  D: {
    nome: "D",
    percentuale: 0,
    valore: 0,
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    stampa: true
  },
  RE: {
    nome: "RE", 
    percentuale: 0, 
    valore: 0, 
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    stampa: true
  },
  AB: {
    nome: "AB", 
    percentuale: 0, 
    valore: 0, 
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    formula: "A+B",
    stampa: true
  },
  RElordo: {
    nome: "RElordo", 
    percentuale: 0, 
    valore: 0, 
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    formula: "A+B+C+D",
    stampa: true
  },
  imposte: {
    nome: "imposte", 
    percentuale: 0, 
    valore: 0, 
    classe: "",
    aggiorna_percentuale: false,
    documento: "ce",
    formula: "RE-RElordo",
    stampa: true
  }
};
const nValoriBilancio = Object.keys(valoriBilancio).length;
const classiDaCalcolare = ["AB", "RElordo", "imposte"];
let datoIniziale = {
  classe: null,
  percentuale: null,
  valore: null
};
let indiciReddito = {
  ROE: {
    nome: "ROE",
    formula: "RE/CP*100",
    valore: 0
  },
  leverage: {
    nome: "leverage",
    formula: "TI/CP",
    valore: 0
  },
  gestioneNonOperativa: {
    nome: "indice di gestione non operativa",
    formula: "RE/RO",
    valore: 0
  },
  ROI: {
    nome: "ROI",
    formula: "RO/TI",
    valore: 0
  },
  ROS: {
    nome: "ROS",
    formula: "RO/RV",
    valore: 0
  },
  rotazioneImpieghi: {
    nome: "indice di rotazione degli impieghi",
    formula: "RV/TI",
    valore: 0
  }
};
let indiciPatrimoniali = {
  rigiditaImpieghi: {
    nome: "indice di rigidità degli impieghi",
    formula: "IM/TI",
    valore: 0
  },
  elasticitaImpieghi: {
    nome: "indice di elasticità degli impieghi",
    formula: "AC/TI",
    valore: 0
  },
  incidenzaDebitiBreve: {
    nome: "incidenza dei debiti a breve termine",
    formula: "PB/TF",
    valore: 0
  },
  incidenzaDebitiLungo: {
    nome: "incidenza dei debiti a medio/lungo termine",
    formula: "PC/TF",
    valore: 0
  },
  autonomia: {
    nome: "indice di autonomia finanziaria",
    formula: "CP/TF",
    valore: 0
  },
  incidenzaFontiPermanenti: {
    nome: "incidenza delle fonti permanenti",
    formula: "PC+CP/TF",
    valore: 0
  },
  dipendenzaFinanziaria: {
    nome: "indice di dipendenza finanziaria",
    formula: "CD/TF",
    valore: 0
  }
};
let indiciFinanziari = {
  autocoperturaImm: {
    nome: "autocopertura di immobilizzazioni",
    formula: "CP/IM",
    valore: 0
  },
  coperturaImm: {
    nome: "copertura di immobilizzazioni",
    formula: "PC+CP/IM",
    valore: 0
  },
  disponibilita: {
    nome: "indice di disponibilità",
    formula: "AC/PB",
    valore: 0
  },
  liquiditaImmediata: {
    nome: "indice di liquidità immediata",
    formula: "DL+DF/PB",
    valore: 0
  },
  rotazioneImm: {
    nome: "indice di rotazione delle immobilizzazioni",
    formula: "RV/IM",
    valore: 0
  },
  rotazioneAC: {
    nome: "indice di rotazione dell'attivo corrente",
    formula: "RV/AC",
    valore: 0
  }
};
let tuttiIndici = {...indiciReddito, ...indiciPatrimoniali, ...indiciFinanziari};


submitBtn.addEventListener("click", () => {
  tipoAzienda = document.getElementById("tipo-azienda").value;
  console.log("Ho preso il tipo azienda: ", tipoAzienda);
});

submitBtn.addEventListener("click", update_percentages);

// aggiorna le % nello SP
function update_percentages(event) {
  // impedisce il comportamento predefinito del bottone
  // all'interno di un form, che fa ricaricare la pagina
  event.preventDefault();

  // assegna % alle classi SP 
  for (let key in valoriBilancio) {

    if (valoriBilancio[key].aggiorna_percentuale) {
      let valCorrente = document.getElementById(valoriBilancio[key].nome).value;

      if (valCorrente !== "") {
        valCorrente = parseInt(valCorrente);
        valoriBilancio[key].percentuale = valCorrente;
        document.getElementById("sp-" + valoriBilancio[key].nome + "-percentuale").innerHTML = valCorrente + "%";
        if (document.getElementById("dato-iniziale").value === valoriBilancio[key].nome) {
          var percentualeValNominale = valoriBilancio[key].percentuale;
        }
      }
    }
  }

  valoriBilancio["CD"].percentuale = valoriBilancio["PB"].percentuale + valoriBilancio["PC"].percentuale;
  document.getElementById("sp-" + valoriBilancio["CD"].nome + "-percentuale").innerHTML = valoriBilancio["CD"].percentuale + "%";

  if (document.getElementById("val-nom").value !== null || document.getElementById("val-nom").value !== "") {
    datoIniziale.classe = document.getElementById("dato-iniziale").value;
    datoIniziale.percentuale = percentualeValNominale ?? 100;
    datoIniziale.valore = (document.getElementById("val-nom").value !== "") ? parseInt(document.getElementById("val-nom").value) : datoIniziale.valore;
    
    if (datoIniziale.valore !== null) update_values(datoIniziale);
  }
}


// SE CLASSE NOT NOME CALCOLA VALORE SU CLASSE
// aggiorna_percentuale i valori nominali basandosi su 1 solo e sulle %
function update_values(datoIniziale) {
  console.log("sono in update values");
  // calcolo TI
  valoriBilancio["TI"].valore = 
    Math.round(
      datoIniziale.valore / 
      datoIniziale.percentuale * 
      100
    );
  valoriBilancio["TF"].valore = valoriBilancio["TI"].valore;

  document.getElementById("sp-" + valoriBilancio["TI"].nome + "-valore").innerHTML = "€" + valoriBilancio["TI"].valore;
  document.getElementById("sp-" + valoriBilancio["TF"].nome + "-valore").innerHTML = "€" + valoriBilancio["TF"].valore;

  for (let key in valoriBilancio) {

    if (valoriBilancio[key].documento === "sp" && !classiDaCalcolare.includes(key)) {
      valoriBilancio[key].valore = 
        Math.round(
          valoriBilancio["TI"].valore / 
          100 * 
          valoriBilancio[key].percentuale
        );
    }
    else if (valoriBilancio[key].documento === "ce" && !classiDaCalcolare.includes(key)) {
      valoriBilancio[key].valore = parseInt(document.getElementById(valoriBilancio[key].nome).value);
    }
    else {
      valoriBilancio[key].valore = calcola_formula(valoriBilancio[key].formula);
    }

    if (valoriBilancio[key].stampa) {
      document.getElementById(valoriBilancio[key].documento + "-" + valoriBilancio[key].nome + "-valore").innerHTML = "€" + valoriBilancio[key].valore;
    }
  }

  calcola_indici();
}

function is_alpha(char) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return letters.includes(char);
}

function is_numeric(char) {
  const nums = "0123456789";
  return nums.includes(char);
}

function calcola_formula(formula) {
  let operatori = dividi_formula(formula);
  let valCorrente = 0;
  console.log(formula);
  console.log("op fuori: ", operatori);
  while (operatori.length > 0) {
    console.log(operatori);

    console.log("valCorrente: ", valCorrente);

    if (is_alpha(operatori[0][0])) {
      valCorrente += valoriBilancio[operatori[0]].valore;
    }
    else {
      if (operatori[0] === "/") {
        valCorrente /= valoriBilancio[operatori[1]].valore;
        operatori.shift();
      }
      else if (operatori[0] === "+") {
        valCorrente += valoriBilancio[operatori[1]].valore;
        operatori.shift();
      }
      else if (operatori[0] === "*") {
        valCorrente *= operatori[1];
        operatori.shift();
      }
      else if (operatori[0] === "-") {
        valCorrente -= valoriBilancio[operatori[1]].valore;
        operatori.shift();
      }
    }
    operatori.shift();
  }
  return parseFloat(valCorrente.toFixed(2));
}

function dividi_formula(formula) {
  let currentText = formula[0];
  let operatori = [];
  for (let i=1; i<formula.length; i++) {
    if (is_alpha(formula[i])) {
      if (!is_alpha(currentText[0])) {
        operatori.push(currentText);
        currentText = "";
      }
      currentText += formula[i];
    }
    else if (is_numeric(formula[i])) {
      if (!is_numeric(currentText[0])) {
        operatori.push(currentText);
        currentText = "";
      }
      currentText += formula[i]
    }
    else {
      operatori.push(currentText);
      currentText = formula[i];
    }
  }

  operatori.push(currentText);
  return operatori;
}

// calcola e stampa gli indici 
function calcola_indici() {
  for (let key in tuttiIndici) {
    tuttiIndici[key].valore = calcola_formula(tuttiIndici[key].formula);
  }
  stampa_indici();
}

// stampa gli indici a schermo
// DA RIVEDERE DOVE STAMPARLI
function stampa_indici() {
  const divIndici = document.getElementById("indici");
  for (let key in tuttiIndici) {
    const indice = document.createElement("p");
    indice.innerHTML = tuttiIndici[key].nome + " (" + tuttiIndici[key].formula + "): " + tuttiIndici[key].valore;
    divIndici.appendChild(indice);
  }
}
