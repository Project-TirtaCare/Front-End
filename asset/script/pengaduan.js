const namaCabang = (kode) => {
    let cabang = ''

    switch (kode) {
        case '01' :
            cabang = 'Medan Kota'
            break
        case '02' :
            cabang = 'Sei Agul'
            break
        case '03' :
            cabang = 'Medan Denai'
            break
        case '04' :
            cabang = 'Medan Labuhan'
            break
        case '05' :
            cabang = 'Sibolangit'
            break
        case '06' :
            cabang = 'Berastagi'
            break
        case '07' :
            cabang = 'Sunggal'
            break
        case '08' :
            cabang = 'Padang Bulan'
            break
        case '09' :
            cabang = 'Deli Tua'
            break
    }

    return cabang
}

const jenisAduan = (kode) => {
    let aduan = ''

    switch (kode) {
        case '01' :
            aduan = 'Air Mati'
            break
        case '02' :
            aduan = 'Air Keruh'
            break
        case '03' :
            aduan = 'Perbaikan Lubang Bor'
            break
        case '04' :
            aduan = 'Bocor Pipa Dinas'
            break
        case '05' :
            aduan = 'Bocor Pipa Distribusi'
            break
        case '06' :
            aduan = 'Komplain Tagihan'
            break
        case '07' :
            aduan = 'Pencatat Meter Tidak Datang'
            break
        case '08' :
            aduan = 'Meter Mati'
            break
        case '09' :
            aduan = 'Konfirmasi No. Pelanggan'
            break
    }

    return aduan
}

const handleGetFormData = () => {
    const npa = document.getElementById('npa').value
    const nama = document.getElementById('nama').value
    const alamat = document.getElementById('alamat').value
    const noRumah = document.getElementById('no-rumah').value
    const email = document.getElementById('email').value
    const noHP = document.getElementById('no-hp').value
    const kodeCabang = document.getElementById('cabang').value
    const kodeJenisAduan = document.getElementById('jenis-aduan').value
    const detailAduan = document.getElementById('detail-aduan').value

    const cabang = namaCabang(kodeCabang)
    const aduan = jenisAduan(kodeJenisAduan)

    const data = {
        npa,
        nama,
        alamat,
        noRumah,
        email,
        noHP,
        cabang,
        aduan,
        detailAduan
    }

    return data
}

const addDataUser = async (data) => {
    try {
        const response = await fetch("https://645209d8bce0b0a0f73af0c9.mockapi.io/data-pengaduan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    
        const result = await response.json();
        window.location.href = '../success.html'
    } catch (error) {
        warning.innerText = `Error: ${error}`
    }
}

document.getElementById('submit-form').addEventListener('click', (event) => {
    event.preventDefault()

    const formData = handleGetFormData()
    console.log(formData)
    
    addDataUser(formData)
})
