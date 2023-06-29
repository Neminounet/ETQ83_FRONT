import styles from "./Loader.module.css";

function Loader(){
    return(
        <div className="pagesContainer">
            <i className={`fa-solid fa-spinner ${styles.loader}`}></i>
        </div>
    );
}

export default Loader;