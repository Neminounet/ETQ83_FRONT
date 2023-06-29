import { Suspense, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Outlet } from "react-router-dom";
import WorkspaceMenu from "./components/WorkspaceMenu";
import WorkspaceHeader from "./components/WorkspaceHeader";
import Loader from "../../components/Loader/Loader";
import styles from "./Workspace.module.css";

function Workspace() {
    const { user } = useContext(AuthContext)

    return (
        <div className={`pagesContainer`}>
            <WorkspaceMenu user={ user }/>
            <div className={styles.workspaceContainer}>
                <WorkspaceHeader user={ user}/>
                <div className={styles.workspaceContent}>
                    <Suspense fallback={<Loader/>}>
                        <Outlet/>   
                    </Suspense>
                </div>
            </div>
        </div>  
    );
}

export default Workspace;