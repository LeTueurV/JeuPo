function showHomepage() {
    const sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.innerHTML = `
        <section>
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
        </section>
    `;
}

function openSection(sectionName) {
    const sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.innerHTML = ""; // Efface le contenu existant

    switch (sectionName) {
        case 'information':
            sectionContainer.innerHTML = `
                <section>
                    <h1>Information</h1>
                    <p>Informations sur le développement de jeux avec Python, Tkinter et PIL.</p>
                </section>
            `;
            break;
        case 'telechargement':
            sectionContainer.innerHTML = `
                <section>
                    <h1>Téléchargement</h1>
                    <p>Téléchargez le jeu Pokémon ici.</p>
                </section>
            `;
            break;
        case 'contact':
            sectionContainer.innerHTML = `
                <section>
                    <h1>Contact</h1>
                    <p>Contactez-moi pour toute question ou collaboration.</p>
                </section>
            `;
            break;
        case 'classement':
            sectionContainer.innerHTML = `
                <section>
                    <h1>Classement</h1>
                    <p>Consultez le classement des joueurs.</p>
                </section>
            `;
            break;
        default:
            break;
    }
}

function openSubSection(subSectionName) {
    const sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.innerHTML = ""; // Efface le contenu existant

    switch (subSectionName) {
        case 'python':
            sectionContainer.innerHTML = `
                <section>
                    <h1>Python</h1>
                    <p>Python est un langage puissant utilisé pour le développement de jeux.</p>
                </section>
            `;
            break;
        case 'tkinter':
            sectionContainer.innerHTML = `
                <section>
                    <h1>Tkinter</h1>
                    <p>Tkinter est une bibliothèque graphique pour créer des interfaces utilisateur en Python.</p>
                </section>
            `;
            break;
        case 'pillow':
            sectionContainer.innerHTML = `
                <section>
                    <h1>PIL (Pillow)</h1>
                    <p>PIL (ou Pillow) est une bibliothèque pour le traitement d'images en Python.</p>
                </section>
            `;
            break;
        default:
            break;
    }
}
