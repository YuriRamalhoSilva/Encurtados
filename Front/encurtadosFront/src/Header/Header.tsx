import './Header.css'
import logoIcon from '../assets/ligacao.png';

export function Header() {
    return (

        <header>
            <img src={logoIcon} alt="" />
            <h1>Encurtados</h1>
        </header>
        
    )
}