// Entradas do usuário
let word = 'ouro'

let projectList = [
    'Gol de Ouro',
    'Jota quer ser',
    'Gol de Prata',
    'Juninho que quer ouro',
]

// Ferramenta de filtro
function searchEngine(word, list) {
    let resultArray = []
    word = word.toLowerCase()
    
    list.forEach(sentence => {
        if(sentence.toLowerCase().indexOf(word) > -1) {
            resultArray.push(sentence)
        }
    });

    return resultArray
}

searchresult = searchEngine(word, projectList)

console.log(searchresult)