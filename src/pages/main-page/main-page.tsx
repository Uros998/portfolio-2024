import './main-page.style.scss';


const MainPage = () => {


    return (
        <div>
            <div className="generic-content-wrapper">
                <div className="main-content-wrapper">
                    <div className="main-subtitle-wrapper">
                        <div className="title-wrapper">
                            {/*<h2 className={'main-subtitle first-subtitle'}>Hey!</h2>*/}
                            {/*<h2 className={'main-subtitle'}>I am</h2>*/}
                            {/*<h2 className={'main-subtitle second-subtitle'}>Uroš</h2>*/}
                        </div>
                    </div>
                    <div className="mein-info-wrapper">
                        <div className="main-title-wrapper">
                            <div className="text-container">
                                <h1 className={'main-title'}>SOFTW</h1>
                                <h2 className={'fixed-first-text main-subtitle first-subtitle'}>Hey!</h2>
                            </div>
                            <div className="text-container">
                                <h1 className={'main-title'}>ARE ENG</h1>
                                <h2 className={'fixed-second-text main-subtitle first-subtitle'}>I am</h2>
                            </div>
                            <div className="text-container">
                                <h1 className={'main-title'}>INEER</h1>
                                <h2 className={'fixed-third-text main-subtitle first-subtitle'}>Uroš</h2>
                            </div>
                        </div>
                        <div className="main-text-wrapper">
                            <div className="text">
                                <div className="text-wrapper">
                                    <h3 className={'generic-subtitle'}>Currently</h3>
                                    <p className={'generic-paragraph'}>Looking for full-time opportunities</p>
                                </div>
                                <div className="text-wrapper">
                                    <h3 className={'generic-subtitle'}>Level of schooling</h3>
                                    <p className={'generic-paragraph'}>Graduated software engineer - Metropolitan
                                        University</p>
                                </div>
                                <div className="text-wrapper">
                                    <h3 className={'generic-subtitle'}>Main job</h3>
                                    <p className={'generic-paragraph'}>Frontend developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MainPage;