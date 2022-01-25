const colors = document.querySelectorAll('.color')
const tilesContainer = document.querySelector('.tiles-container')

let tilesAmount = 22 * 22

//color button toggle
let colorsArray = []

colors.forEach(color => {
    color.addEventListener('click', () => {
        color.classList.toggle('on')
        if(color.classList.contains('on')) {
            colorsArray.push(color.id)
        } else {
            colorsArray = colorsArray.filter(item => item !== color.id)
        }
    })
})


//add tiles
for (let i = 0; i < tilesAmount; i++) {
    const tile = document.createElement('div')
    tile.classList.add('tile')

    tilesContainer.append(tile)
}

//select tiles & add hover color
const tiles = document.querySelectorAll('.tile')

tiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        tile.style.backgroundColor = randomColor
        tile.style.boxShadow = `0px 0px 20px 5px ${randomColor}`
    })

    tile.addEventListener('mouseleave', () => {
        tile.style.backgroundColor = 'rgb(53, 53, 53)'
        tile.style.boxShadow = 'none'
    })
})

