function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("dropdown-open");
}

function openSection(sectionName) {
    var sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.innerHTML = ""; // Efface le contenu existant

    switch (sectionName) {
        case 'information':
            sectionContainer.innerHTML = `
                <h1>Information</h1>
                <p>Informations sur le développement de jeux avec Python, Tkinter et PIL.</p>
            `;
            break;
        case 'telechargement':
            sectionContainer.innerHTML = `
                <h1>Téléchargement</h1>
                <p>Téléchargez le jeu Pokémon ici.</p>
            `;
            break;
        case 'contact':
            sectionContainer.innerHTML = `
                <h1>Contact</h1>
                <p>Contactez-moi pour toute question ou collaboration.</p>
            `;
            break;
        case 'patchnotes':
            sectionContainer.innerHTML = `
                <h1>Patch Notes</h1>
                <p>Découvrez les dernières mises à jour du jeu.</p>
            `;
            break;
        case 'classement':
            sectionContainer.innerHTML = `
                <h1>Classement</h1>
                <p>Consultez le classement des joueurs.</p>
            `;
            break;
        default:
            break;
    }
}

function showHomepage() {
    var sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.innerHTML = `
        <h1>Bienvenue sur la Page d'Accueil</h1>
        <p>Bonjour et bienvenue sur mon site dédié aux jeux créés avec Python, Tkinter et PIL. Je suis passionné par le développement de jeux interactifs et j'explore les possibilités offertes par ces technologies pour offrir des expériences uniques.</p>
        
        <h2>À Propos de Moi</h2>
        <p>Je suis un développeur autodidacte passionné par la programmation de jeux en utilisant Python. Mes créations combinent l'art du code avec des éléments visuels attrayants grâce à Tkinter et PIL.</p>
        
        <h2>Mes Projets</h2>
        <div class="project">
            <p><strong>Jeu Pokémon</strong> - Affrontez des adversaires avec vos Pokémon préférés.</p>
        </div>
    
        <h2>Qu'est-ce que Vous Trouverez Ici ?</h2>
        <p>Sur ce site, vous pouvez découvrir mes créations, en apprendre davantage sur mes techniques de développement et me contacter pour des collaborations ou des suggestions.</p>
    
        <h2>Contactez-moi</h2>
        <p>N'hésitez pas à me contacter si vous avez des questions, des idées ou si vous souhaitez en savoir plus sur mes projets. Je suis toujours ouvert aux discussions et aux nouvelles opportunités !</p>
        
        <h2>Crédit</h2>
        <p>Je remercie ma copine pour l'aide sur les bugs et les photos des Pokémon pour le premier jeu.</p>
    `;
}
