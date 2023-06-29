import styles from "./Homepage.module.css";

function Homepage(){
    return (
        <div className="pagesContainer">
            <div className="pagesContent">
                <div className={styles.homepageLogo}>
                    <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h3>En Toute Quiétude 83, aide aux devoirs et soutien scolaire du CP à la troisième.</h3>
                <div className={styles.homepageContent}>
                    <div className={styles.homepageContentImage1}>
                    </div>
                    <div className={styles.homepageContentText}>
                        <h4>Cours particuliers à domicile.</h4>
                        <ul>
                            <li>Séances ludiques, adaptées aux élèves en fonction des besoins</li>
                            <li><strong>Pour les élèves en élémentaire</strong>, aide dans toutes les matières.</li>
                            <li><strong>Pour les élèves au collège</strong>, aide en <em>Français</em>, <em>Mathématiques</em>, <em>Anglais</em>, <em>Espagnol</em>, <em>SVT</em>, <em>Physique/Chimie</em> et <em>Histoire/Géographie</em></li>
                            <li>Jusqu'à 50% de crédit d'impôt grâce au service à la personne</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.homepageContent}>
                    <div className={styles.homepageContentText}>
                        <h4>Qui suis-je ?</h4>
                        <p>Duplay Vanessa, 38 ans, ancienne <strong>AESH</strong> (Accompagnant d'élèves en situation de handicap), j'ai occupé ce poste pendant 5 ans, en collège.</p>
                        <p>Je prépare en candidat libre le <strong>CRPE</strong> (Concours de recrutement de professeur des écoles).</p>
                        <p>Passionnée d'enseignement, mon but est de transmettre mon savoir et d'aider les élèves à surmonter leurs difficultés afin de les faire progresser.</p>
                    </div>
                    <div className={styles.homepageContentImage2}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;