import { Suspense } from 'react';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthProvider from './components/AuthProvider/AuthProvider';
import { Outlet } from 'react-router-dom';
import Loader from './components/Loader/Loader';

function App() {
 
  return (
    <div className={styles.appContainer}>
      <AuthProvider>
        <Header/>
          <Suspense fallback={<Loader/>}>
            <Outlet/>
          </Suspense>
        <Footer/> 
      </AuthProvider>
    </div>
  );
}

export default App;
