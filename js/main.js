const staff = [
    {
        nome: "Wayne Barnett",
        img: "img/wayne-barnett-founder-ceo.jpg",
        ruolo: "Founder & CEO",
    },
    {
        nome: "Angela Caroll",
        img: "img/angela-caroll-chief-editor.jpg",
        ruolo: "Founder & CEO",
    },
    {
        nome: "Walter Gordon",
        img: "img/walter-gordon-office-manager.jpg",
        ruolo: "Founder & CEO",
    },
    {
        nome: "Wayne Barnett",
        img: "img/angela-lopez-social-media-manager.jpg",
        ruolo: "Founder & CEO",
    },
    {
        nome: "Wayne Barnett",
        img: "img/scott-estrada-developer.jpg",
        ruolo: "Founder & CEO",
    },
    {
        nome: "Wayne Barnett",
        img: "img/barbara-ramos-graphic-designer.jpg",
        ruolo: "Founder & CEO",
    }

];

const teamContainer = document.querySelector(".team-container");

for (let i = 0; i < staff.length; i++) {
   const teamCard = `
        <div class="team-card">
        <div class="card-image">
            <img
            src="${staff[i].img}"
            alt="${staff[i].nome}" 
            />
        </div>
        <div class="card-text">
            <h3>${staff[i].nome}</h3>
            <p>${staff[i].ruolo}</p>
        </div>
        </div> 
   `;
   teamContainer.innerHTML += teamCard;
};

