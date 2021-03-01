let allChampionsName = []
let allChampionsData = []
const searchBar = document.getElementById('searchBar')

async function getContent() {

    try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.2.1/data/pt_BR/champion.json')

        var allChampions = await response.json(response)
        allChampionsName = Object.keys(allChampions.data) // all champions names
        allChampionsData = Array(allChampions.data) // champions info

        showChampions(allChampionsName, allChampionsData)
    }

    catch (error) {
        console.log(error)
    }

}

// search

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase()
    const result = allChampionsName.filter((e) => {
        return e.toLowerCase().includes(searchString)
    })
    showChampions(result, allChampionsData)
})

// div w/ champion and img

function showChampions(allChampionsName, allChampionsData) {

    allChampionsData = allChampionsData[0]

    const htmlString = allChampionsName.map((e, i) => {
        return `
                <div class="champ${i} divChamp">
                    <p>${allChampionsData[e].name}</p>
                    <img src="https://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${allChampionsData[e].id}.png" class="champImg" alt="${allChampionsData[e].name}">
                </div>
                `
    }).join('')

    let container = document.querySelector(`.container`)
    container.innerHTML = htmlString
    showButton(allChampionsName, allChampionsData)
}

// div buttons

function showButton(allChampionsName, allChampionsData) {

    allChampionsName.map((e, i) => {
        var btInfo = document.createElement("button");
        btInfo.innerHTML = 'Saiba mais'
        document.querySelector(`.champ${i}`).appendChild(btInfo);
        btInfo.className += `btInfo champ${i}`
        var clickName = allChampionsName[i]

        btInfo.onclick = function () {
            var clickData = allChampionsData[clickName]
            var div = document.createElement("div");
            document.querySelector('main').appendChild(div)
            div.className += `modalContainer`

            showModal(clickName, clickData)
        }
    })
}

// modal

function showModal(clickName, allChampionsData) {
    clickName = clickName.toLowerCase()

    let htmlString = `
            <div class="modal ${clickName}">
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${allChampionsData.id}_0.jpg" alt="${allChampionsData.id}" class="champImgModal">
            <div><p class="pTitleModal">${allChampionsData.name}</p></div>
            <div><p class="pSubtitleModal">${allChampionsData.title}</p></div>
            <div>
            <p class="pDescriptionModal"> ${allChampionsData.blurb} </p>
            <a class="linkModal" href="https://br.leagueoflegends.com/pt-br/champions/${clickName}/"
            target="_blank">Continue lendo</a>
            </div>
            <span class="spanTagsModal"><div>${allChampionsData.tags.join(' • ')}</div></span>
            <span class="spanResourceModal"><div>${allChampionsData.partype}</div></span>
            <button type="button" class="closeButtonModal fas fa-times" onclick="closeButton()"></button>
            `

    let modalContainer = document.querySelector(`.modalContainer`)
    modalContainer.innerHTML = htmlString

    // closes the model when the container is clicked
    modalContainer.onclick = ((e) => {
        let modal = document.querySelector('.modal')
        let main = document.querySelector('main')
        modalContainer.removeChild(modal)
        main.removeChild(modalContainer)
    })

    document.addEventListener('mousemove',disableSearch)

    // disableSearch()
}

function disableSearch() {
    
    let modalContainer = document.querySelector('.modalContainer')

    if (modalContainer != null) {
        searchBar.style.pointerEvents = 'none'
    } else {
        searchBar.style.pointerEvents = 'all'
    }
}

function closeButton() {

    let modal = document.querySelector('.modal')
    let modalc = document.querySelector('.modalContainer')
    let main = document.querySelector('main')
    modalc.removeChild(modal)
    main.removeChild(modalc)
}

getContent()