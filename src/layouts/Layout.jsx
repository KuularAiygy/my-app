import { Link, Outlet } from "react-router-dom"
import styles from './Layout.module.css'
function Layout(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.header_nav}>
                    <div className={styles.nnav}>
                        <div><Link to="/">Главная</Link></div>
                        <div><Link to="/about">О нас</Link></div>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <Outlet/>
            </main>
        </>
    )
}
export default Layout