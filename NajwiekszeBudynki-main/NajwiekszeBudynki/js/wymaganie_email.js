const radio = document.getElementById("wyslac");
const email = document.getElementById("email");
const tel = document.getElementById("telefon");
const id = document.getElementById("nazwa");
const panstwo = document.getElementById("panstwo");
const miasto = document.getElementById("miasto");
const wysokosc = document.getElementById("wysokosc");
const lpieter = document.getElementById("lpieter");
const rok = document.getElementById("rok");
const form = document.querySelector(".fm");



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = "";
    inputControl.classList.remove('error');
};

const validacja = () => {
    const valueId = id.value.trim();
    const valuePanstwo = panstwo.value.trim();
    const valueMiasto = miasto.value.trim();
    const valueWysokosc = wysokosc.value.trim();
    const valueLPieter = lpieter.value.trim();
    const valueRok = rok.value.trim();
    const valueTelefon = tel.value.trim();
    const valueEmail = email.value.trim();

    if(valueId == ''){
        setError(id,"Nazwa jest wymagana");
    }else
        setSuccess(id);

    if(valuePanstwo ==''){
        setError(panstwo,"Panstwo jest wymagane");
    }else
        setSuccess(panstwo);

    if(valueMiasto ==''){
        setError(miasto,"Miasto jest wymagane");
    }else
        setSuccess(miasto);

    if(valueWysokosc ==''){
        setError(wysokosc,"Wysokosc jest wymagana");
    }
    else if(parseInt(valueWysokosc)<1000){
        setError(wysokosc,'Wysokosc musi byc wieksza');
    }
    else
        setSuccess(wysokosc);

    if(valueLPieter == 0){
        setError(lpieter,"Liczba pieter jest wymagana");
    }else
        setSuccess(lpieter);

    if(valueRok ==''){
        setError(rok,"Data jest wymagana");
    }
    else if(new Date() <= new Date(valueRok)){
        setError(rok,"Budowla musi być wybudowana");
    }
    else
        setSuccess(rok);

    if(radio.checked == true){
        if(valueEmail==''){
            setError(email,"Email jest wymagany");
            }
        else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueEmail))) {
            setError(email, "Email ma niepoprawny format");
            }
        else {
            setSuccess(email)
        };

        if(valueTelefon == ''){
             setError(tel,'Telefon jest wymagany');
        }
        else if (!(/^\d{9}$/.test(valueTelefon))) {
            setError(tel, 'Niepoprawny numer telefonu');
        }        
        else{
            setSuccess(tel);
        }
    }else
    {
        setSuccess(email);
        setSuccess(tel);
    }
};

form.addEventListener('submit', e=>{
    e.preventDefault();
    validacja();
});
form.addEventListener('reset', e=>{
    location.reload();
});

