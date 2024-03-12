import cutie from '../assets/cutie.jpg'

import '../components/header.css'

function Header(){
    return(
        <div>
            <nav className='navbar'>
                <img className='logo' src={cutie} alt='a cute girl'/>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>about</a></li>
                    <li><a href='#'>contact</a></li>
                    <li><a href='#'>CHEEEE</a></li>
                </ul>
            </nav>
        </div>
    )
}



export {Header}