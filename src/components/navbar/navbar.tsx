import DarkSwitche from "../dark-switche/dark-switche.tsx";
import {NavLink} from "react-router-dom";
import {useRef} from "react";
import './navbar.style.scss';

interface Props {
    theme: string;
    setTheme: (newTheme: string) => void;
}

const Navbar = ({theme, setTheme}: Props) => {

    const headerRef = useRef(null);

    // const navigate = useNavigate();

    const scrollToWork = () => {
        const work = document.getElementById('work');
        if (work) {
            work.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    }

    return (
        <>
            <div>
                <div className="navbar-wrapper" id="navbar-wrapper" ref={headerRef}>
                    <div className="navbar-logo">
                        {/*<img src={logo} alt="" onClick={() => navigate("/")}/>*/}
                    </div>
                    <nav>
                        <NavLink to='/home' onClick={scrollToWork}
                                 className={({isActive}) => (isActive ? 'link active' : 'link')}>Home</NavLink>
                        <NavLink to="/#work"
                                 className={({isActive}) => (isActive ? 'link active' : 'link')}>Work</NavLink>
                        <NavLink to="about"
                                 className={({isActive}) => (isActive ? 'link active' : 'link')}>About</NavLink>
                    </nav>
                    <div className="filler-space">
                        <DarkSwitche theme={theme} setTheme={setTheme}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar