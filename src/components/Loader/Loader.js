import styles from "./Loader.module.css";

function Loader(){
    return(
        <div className={`pagesContainer ${styles.containerAdd}`}>
            <i className={`fa-solid fa-spinner ${styles.loader}`}></i>
        </div>
    );
}

export default Loader;