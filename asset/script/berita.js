const getDataBerita = async () => {
    const response = await fetch('https://64c9b196b2980cec85c25a6d.mockapi.io/berita')
    if (!response.ok) {
        throw new Error('API request failed')
    }
    const data = await response.json()
    return data
}

function getFirst20Words(text) {
    const words = text.split(/\s+/);
    const first20Words = words.slice(0, 30).join(" ");
    return first20Words;
}

const berita = async () => {
    let listBeritaTerkini = document.querySelector('#list-berita-terkini')

    const dataB = await getDataBerita()

    // let a = dataB.find((item) => {
    //     return item.title === 'Perumda Tirtanadi MoU KSO dengan Kabupaten Nias Barat'
    // })

    // console.log(a)

    dataB.map((item) => {
        let t = getFirst20Words(item.content) + '...'

        listBeritaTerkini.innerHTML += `
            <div class="section-berita-terkini">
                <img src="${item.posterImg}" alt="">
                <div class="content-berita-terkini">
                    <h3>${item.title}</h3>
                    <div class="info-berita">
                        <div class="list-info">
                            <img src="https://api.iconify.design/codicon/account.svg?color=%236a6a6a" alt="">
                            <p>${item.author}</p>
                        </div>
                        <div class="list-info">
                            <img src="https://api.iconify.design/carbon/time.svg?color=%236a6a6a" alt="">
                            <p>${item.releaseDate}</p>
                        </div>
                    </div>
                    <p>${t}</p>
                    <a href="" class="btn btn-secondary">Selengkapnya</a>
                </div>
            </div>
        `
    })
}

berita()