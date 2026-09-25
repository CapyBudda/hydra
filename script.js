const burgerButton = document.querySelector('#burgerButton');
const headerMenu = document.querySelector('#headerMenu');

burgerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    burgerButton.classList.toggle('active');
});

const contacts = [
    document.querySelector('.contact-map'),
    document.querySelector('.contact-phone'),
    document.querySelector('.contact-mail')
];

const arrows = document.querySelectorAll('.arrow-button');

let currentContact = 0;

arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        if (index === 1) {
            currentContact++;
        } else {
            currentContact--;
        }

        if (currentContact > 2) {
            currentContact = 0;
        }

        if (currentContact < 0) {
            currentContact = 2;
        }

        contacts.forEach(contacts => {
            contacts.classList.remove('active');
        });
    
        contacts[currentContact].classList.add('active');
    });
});

const servicesMain = [
    document.querySelector('.simulation'),
    document.querySelector('.education'),
    document.querySelector('.self-care'),
    document.querySelector('.outdoor')
];

const servicesButtons = document.querySelectorAll('.services-button')

let currentTechnologies = 0;

servicesButtons.forEach((servicesButton, index) => {
    servicesButton.addEventListener('click', () => {
    if (index === 1) {
        currentTechnologies++;
    } else {
        currentTechnologies--;
    }

    if (currentTechnologies > 3) {
        currentTechnologies = 0;
    }
    if (currentTechnologies < 0) {
        currentTechnologies = 3;
    }

    servicesMain.forEach(servicesMain => {
        servicesMain.classList.remove('active');
    });

    servicesMain[currentTechnologies].classList.add('active');

    });
});

const partners = [
    document.querySelector('.unreal'),
    document.querySelector('.unity'),
    document.querySelector('.oculus'),
    document.querySelector('.vive')
];

const partnersButtons = document.querySelectorAll('.partners-button');

let currentPartners = 0;

partnersButtons.forEach((partnersButton, index) => {
    partnersButton.addEventListener('click', () => {
        if (index === 1 ) {
            currentPartners++;
        } else {
            currentPartners--;
        }

        if (currentPartners > 3) {
            currentPartners = 0;
        }
        if (currentPartners < 0) {
            currentPartners = 3;
        }
        
        partners.forEach(partners => {
            partners.classList.remove('active');
        });
        partners[currentPartners].classList.add('active')
    })
})

const technologies = [
    document.querySelector('.d-conception'),
    document.querySelector('.design'),
    document.querySelector('.user-testing'),
    document.querySelector('.deploy')
];

const technologiesButtons = document.querySelectorAll('.technologies-button');

let curentRoad = 0;

technologiesButtons.forEach((technologiesButton, index) => {
    technologiesButton.addEventListener('click', () => {
        if (index === 1) {
            curentRoad++;
        } else {
            curentRoad--;
        }

        if (curentRoad > 3) {
            curentRoad = 0;
        }
        if (curentRoad < 0) {
            curentRoad = 3;
        }

        technologies.forEach(technologies => {
            technologies.classList.remove('active');
        });
        technologies[curentRoad].classList.add('active');
    });
});

