import { NavLink } from "react-router-dom";
import styles from "./RGPD.module.css"

function RGPD(){
    return (
        <div className="pagesContainer">
            <div className={styles.RGPDContent}>
                <NavLink to="../"><button>Revenir à l'accueil</button></NavLink>
                <h2>Politique de Confidentialité</h2>
                <h3>Introduction</h3>
                <p>Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informera sur la manière dont nous utilisons vos données personnelles lorsque vous visitez notre site Web et vous informera de vos droits en matière de confidentialité et de la manière dont la loi vous protège.</p>
                <h3>Les données que nous collectons</h3>
                <p>Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant, que vous nous avez fournies, notamment :</p>
                <ul>
                    <li>Identité : nom et prénom</li>
                    <li>Contact : email et numéro de téléphone</li>
                </ul>
                <h3>Comment nous utilisons vos données</h3>
                <p>Nous utilisons vos données pour les besoins suivants :</p>
                <ul>
                    <li>Gérer et administrer votre compte</li>
                    <li>Vous fournir des informations sur notre site</li>
                </ul>
                <h3>Comment nous stockons vos données</h3>
                <p>Vos données sont stockées de manière sécurisée et ne sont accessibles qu'aux responsables nécessaires pour fournir les services de notre site Web.</p>
                <h3>Vos droits</h3>
                <p>Conformément à la législation européenne, vous avez le droit de demander l'accès à vos données personnelles, de demander la rectification de vos données personnelles, de demander l'effacement de vos données personnelles, ou de vous opposer à leur traitement. Pour exercer ces droits, veuillez nous contacter à <strong><a href="mailto:entoutequietude83@gmail.com" target="_blank" rel="noreferrer">entoutequietude83@gmail.com</a></strong>.</p>
            </div>
        </div>
    );
}

export default RGPD;