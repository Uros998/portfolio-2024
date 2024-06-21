import './dark-switche.style.scss';
import ReactSwitch from "react-switch";
import Moon from '../../../public/assets/Icons/DarkMode.png';
import Sun from '../../../public/assets/Icons/lightMode.png';


interface DarkSwitcheProps {
    theme: string;
    setTheme: (newTheme: string) => void;
}

const DarkSwitche = ({theme, setTheme}: DarkSwitcheProps) => {


    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div>
            <ReactSwitch
                onChange={toggleTheme}
                checked={theme === 'light'}
                checkedIcon={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            color: 'red',
                            paddingRight: 0,
                        }}
                    >
                        <img src={Moon} alt="" style={{width: '20px'}}/>
                    </div>
                }
                uncheckedIcon={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            paddingRight: 2,
                        }}
                    >
                        <img src={Sun} alt="" style={{width: '20px'}}/>
                    </div>
                }
                height={30}
                width={60}
                handleDiameter={20}
                offColor={'#292929'}
                onColor={'#292929'}
                offHandleColor={'#7f5b41'}
                onHandleColor={'#7f5b41'}
            />
        </div>
    );
}

export default DarkSwitche;