import CurrentDate from "./CurrentDate";
import Identifier from "./Identifier";
import styles from "./WorkspaceHeader.module.css";

function WorkspaceHeader({ user }) {
    return (
        <div className={`d-flex card mt-20 ${styles.headerContainer}`}>
            <div className={styles.headerContent}>
                <h2 className="mb-20">Workspace</h2>
                <CurrentDate/>
            </div>
            <Identifier user={ user } />    
        </div>
    );
}

export default WorkspaceHeader;