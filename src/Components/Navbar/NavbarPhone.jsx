import Bars from '@iconscout/react-unicons/icons/uil-bars'
import './NavbarPhone.css';

const navigation = [
    { name: "Home", href: "/#", current: true },
    { name: "About", href: "/#about", current: false },
    { name: "Projects", href: "/#project", current: false },
    { name: "Technologies", href: "/#technology", current: false },
    { name: "Contact", href: "/#contact", current: false },
];

export default function Example() {
    return (
        <div className="NavbarPhone">
            <div className="Bars">
                <Bars color='black' size={40} />
            </div>
            <img src="./Images/myphoto-2.jpg" alt="my-photo" className='nav-photo' />
        </div>
    );
}
