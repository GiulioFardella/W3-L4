const bingoN = []


for (let i =1; i<= 90 ; i++){
bingoN.push(i)
}

console.log(bingoN)

const container = document.getElementById('container')
for (let i =1 ;i<=90; i++){
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.textContent= i 
    container.appendChild(cell)
}
 const buttonB = document.getElementById('buttonB')
 let lastCell = null 
 const generatedN = []


  function generate(){
    let random
    let selectedCell
    do{ random = Math.floor(Math.random()*90)+1
    const cells = document.querySelectorAll ('.cell')
    selectedCell = cells [random -1]
    } while (generatedN.includes(random))
        generatedN.push(random)
        selectedCell.classList.add('light')
        lastCell = selectedCell
    
    
  }
  buttonB.addEventListener('click',generate)