function showHomepage() {
    const sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.innerHTML = `
        <section>
            <h1>Bienvenue sur la Page d'Accueil</h1>
            <p>Bonjour et bienvenue sur mon site dédié aux jeux créés avec Python, Tkinter et PIL. Je suis passionné par le développement de jeux interactifs et j'explore les possibilités offertes par ces technologies pour offrir des expériences uniques.</p>
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
                    <p>Téléchargez les jeux créés avec Python, Tkinter et PIL.</p>
                </section>
            `;
            break;
        case 'contact':
            sectionContainer.innerHTML = `
                <section>
                    <h1>Contact</h1>
                    <p>Contactez-nous pour toute question ou collaboration.</p>
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
