import logo from '../assets/shared/desktop/logo-dark.png';
import hamburgerIcon from '../assets/shared/mobile/icon-hamburger.svg';


export default function Navbar() {
    return (
        <div className='flex justify-between items-center px-6 sm:px-0 py-9'>
            <img className='w-52 h-auto' src={logo} alt="Logo"></img>
            <div>
                <ul className='hidden sm:flex justify-between gap-10 lg:gap-20'>
                    <li className='text-stiletto text-sm hover:underline underline-offset-4 cursor-pointer'><a href=''>OUR COMPANY </a> </li>
                    <li className='text-stiletto text-sm hover:underline underline-offset-4 cursor-pointer'><a href=''> LOCATIONS </a></li>
                    <li className='text-stiletto text-sm hover:underline underline-offset-4 cursor-pointer'><a href=''> CONTACT </a></li>
                </ul>
                <img className='w-6 h-auto sm:hidden' src={hamburgerIcon} alt="Logo"></img>
            </div>
        </div>
    )
}