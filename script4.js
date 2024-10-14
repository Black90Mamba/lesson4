const jmeno = "  Michal   "
const heslo = "fddfgfg5555565r"
const rodneCislo = "980514/3366"
const telCislo = "11122233333"
console.log(jmeno)
console.log(jmeno.trim()) //odstraneny bilych znaku jako mezery, tabulatory, nove radky napr. na zacatku nebo konci retezce voz const jmeno priklad


console.log(heslo.length) //pocet znaku, cisel
console.log(jmeno.length)
console.log(heslo.length)//lenght je vlastnost vraci pocet znaku

const castHesla = heslo.slice(0, 4)// od jakeho znaku zacinam az do jakoho znaku to seknu
console.log(heslo.indexOf("g")) //hleda index konkretniho znaku
const poziceLomitka = rodneCislo.indexOf("/")

console.log(rodneCislo.slice(poziceLomitka + 1, poziceLomitka + 5))
console.log(castHesla)

console.log(jmeno.toLowerCase()) //male pismena
console.log(jmeno.toUpperCase())// velke pismena

console.log(telCislo.padStart(13, "+420")) // automaticke doplnovani na zactku predvolba atd.
console.log(telCislo.padEnd(13, "0")) //doplnuje u konce

const zprava = `
<h1>Ahoj svete</h1>
<p>Tve dnesni stastne cislo je ${Math.floor(Math.random() * 1000)}</p>

<p>Tvoje mys je prave na souradnicich ${100 * 100}</p>
`


document.body.innerHTML = zprava

// ukol 1

const nazev = "pan prstenu"

console.log(nazev)
console.log(nazev.length)
console.log(nazev.toUpperCase())
console.log(nazev.slice(-5))
console.log(nazev.slice(5))

// ukol 2
const email = prompt("zadejte email")
console.log(email)
const delka = email.length
const alIndex = email.indexOf("@")



//ukol3

const ulice = "pod stajemi 67"
const mesto = "12345 Klysnov"


document.body.innerHTML += `<address> <p> ${ulice} </p> <p> ${mesto} </p> </address>`

//// druha cast hodiny


// < <= > >= === !== 

const vek = 18

// < <= > >= === !== 
if(vek >= 18) {
  document.body.innerHTML += "<h1>Vitej na strance s nejlepsim alkoholem v CR</h1>"

  const kategorie = prompt("Jakou kategorii alkoholu si prejes? (pivo, vino, tvrde)").toLowerCase()

  if(kategorie === "pivo") {
    document.body.innerHTML += "<p>Mame nejlepsi piva, treba StaroBrno </p>"
  } else if(kategorie === "vino") {
    document.body.innerHTML += "<p>Mame nejlepsi cervena, bila a mozna i jinak barevna vina</p>"
  } else if(kategorie === "tvrde") {
    document.body.innerHTML += "<p>Mame nejlepsi Becherovku, odebira od nas i Zeman</p>"
  } else {
    document.body.innerHTML += "<p>Error 404: alkohol not found</p>"
  }
} else {
  document.body.innerHTML = "<h1>Na tuto stranku nemuzes vstoupit</h1>"
}

