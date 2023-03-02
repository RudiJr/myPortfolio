const about = document.getElementById("btn-about");
const skill = document.getElementById("btn-skill");
const project = document.getElementById("btn-project"); 
const contact = document.getElementById("btn-contact");
const switchThemeBtn = document.getElementById("btn-theme");

// Dark / Light mode
    switchThemeBtn.addEventListener('click', () =>{
        const switchedTheme = document.body;
        switchedTheme.classList.toggle("light-mode");
    });

about.addEventListener('click', () => {
    const switchedText = document.querySelector(".main-text");
    switchedText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae voluptate itaque repudiandae illum ipsam libero possimus, esse aut laborum doloribus tempore repellat hic mollitia suscipit excepturi atque cupiditate iusto cumque dolore assumenda! Quibusdam culpa aliquam alias blanditiis dolorum eius autem nobis incidunt et doloribus, sit recusandae animi est eaque ab, necessitatibus libero tempore error distinctio. Aliquam facere necessitatibus id. Animi beatae aliquam quidem ipsum sit laudantium perspiciatis porro doloribus nostrum dignissimos velit illo recusandae voluptates eligendi, et amet commodi explicabo fugit cupiditate corrupti eveniet itaque esse libero. Cumque laborum odit vitae veniam. Dolorum, vitae fugiat quo consequatur rerum pariatur!"
})

skill.addEventListener('click', () => {
    const switchedText = document.querySelector(".main-text");
    switchedText.innerHTML = "HTML | CSS | Javascript | Git e Github";
});

project.addEventListener('click', () => {
    const switchedText = document.querySelector(".main-text");
    switchedText.innerHTML = "TODO: Colocar projetos aqui";
});

contact.addEventListener('click', () => {
    const switchedText = document.querySelector(".main-text");
    switchedText.innerHTML = "linkedin | github | twitter | instagram | email";
});
