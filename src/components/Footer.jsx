import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            
            <p>&copy; {new Date().getFullYear()} All Hail for the Rights are Reserved</p>
        </footer>
    )
}
export default Footer;