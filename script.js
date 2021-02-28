let allChampionsName = []
let allChampionsData = []
const searchBar = document.getElementById('searchBar')

        async function getContent() {

            try {
                const response = await fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/pt_BR/champion.json')

                var allChampions = await response.json(response)
                allChampionsName = Object.keys(allChampions.data) // all champions names
                allChampionsData = Array(allChampions.data) // champion information

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
                <div class="champ${i}">
                    <p>${allChampionsData[e].name}</p>
                    <img src="http://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${allChampionsData[e].id}.png" class="champImg" alt="${allChampionsData[e].name}">
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
            let div = document.createElement("div");
            document.querySelector(`.modalContainer`).appendChild(div)
            div.className += `modal ${clickName}`

            showTagsModal(clickName, allChampionsData)
        }

        function showTagsModal(clickName, allChampionsData) {

            clickName = clickName.toLowerCase()

            let img = document.createElement("img");
            img.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${allChampionsData.id}_1.jpg`
            document.querySelector(`.modal `).appendChild(img);
            img.className += `champImgModal`

            let pTitle = document.createElement("p");
            pTitle.innerHTML = `<div>${allChampionsData.name}</div>`
            document.querySelector(`.modal `).appendChild(pTitle);
            pTitle.className += 'pTitleModal'

            let pSubtitle = document.createElement("p");
            pSubtitle.innerHTML = `<div>${allChampionsData.title}</div>`
            document.querySelector(`.modal `).appendChild(pSubtitle);
            pSubtitle.className += 'pSubtitleModal'

            let pDescription = document.createElement("p");
            pDescription.innerHTML = `<div>${allChampionsData.blurb} 
            <a class="linkModal" href="https://br.leagueoflegends.com/pt-br/champions/${clickName}/"
            target="_blank">Continue lendo</a> </div>`
            document.querySelector(`.modal `).appendChild(pDescription);
            pDescription.className += 'pDescriptionModal'

            let spanTags = document.createElement("span");
            spanTags.innerHTML = `<div>${allChampionsData.tags.join(' • ')}</div>`
            document.querySelector(`.modal `).appendChild(spanTags);
            spanTags.className += 'spanTagsModal'

            let spanResource = document.createElement("span");
            spanResource.innerHTML = `<div>${allChampionsData.partype}</div>`
            document.querySelector(`.modal `).appendChild(spanResource);
            spanResource.className += 'spanResourceModal'

            let closeButton = document.createElement("button");
            document.querySelector(`.modal `).appendChild(closeButton);
            closeButton.className += 'closeButtonModal fas fa-times'

            closeButton.onclick = function () {
                let modal = document.querySelector('.modal')
                let modalc = document.querySelector('.modalContainer')
                let main = document.querySelector('main')
                modalc.removeChild(modal)
                main.removeChild(modalc)

            }
        }

        getContent()