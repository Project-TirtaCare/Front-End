const nav = document.querySelector('#container-navbar')

const onScroll = () => {
    const scrollPosition = window.scrollY

    nav.classList.toggle("scrolled-down", scrollPosition > 100)
}

document.addEventListener("scroll", onScroll, {passive : true})

const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropDown-menu')

toggleBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu'
})

const handleGetFormData = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const city = document.getElementById('city').value
    const zipCode = document.getElementById('zip-code').value
    const status = document.getElementById('status').checked

    const data = {
        name,
        email,
        city,
        zipCode,
        status
    }

    return data
}

const isNumber = (x) => {
    for (let i = 0; i < x.length; i++) {
        if (isNaN(x[i])) {
            return false;
        }
    }
    return true;
}

const checkboxIsChecked = () => {
    const status = document.getElementById('status')
    if (status.checked) {
        return true
    } else {
        return false
    }
}

const validateFormData = (formData) => {
    if (formData.name.length !== 0 && formData.email.length !== 0 && formData.city.length !== 0 && formData.zipCode.length !== 0 && isNumber(formData.zipCode) && checkboxIsChecked()){
        return true
    } else {
        return false
    }
}
  
const submit = (event) => {
    event.preventDefault()
    const formData = handleGetFormData();
    const hasil = validateFormData(formData);
    if (hasil == false) {
      document.getElementById("warning").innerText = "Periksa form anda sekali lagi";
    } else {
      document.getElementById("warning").innerText = "";
    }
} 

document.getElementsByTagName("form")[0].addEventListener("submit", submit)



