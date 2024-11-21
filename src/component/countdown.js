
import Image from 'next/image';



const countdown = () => {
    return (

        <>
            <section className="countdownTime" id="countdown">
                <div className="countdown-container">
                    <h2>Countdown to Audition</h2>
                    <div className="countdown-timer" id="timer">
                        <div className="time-section">
                            <span className="time" id="days">
                                2
                            </span>
                            <hr width="15px" />
                            <p>Days</p>
                        </div>
                        <span className="colon">:</span>
                        <div className="time-section">
                            <span className="time" id="hours">
                                02
                            </span>
                            <hr width="15px" />
                            <p>Hours</p>
                        </div>
                        <span className="colon">:</span>
                        <div className="time-section">
                            <span className="time" id="minutes">
                                08
                            </span>
                            <hr width="15px" />
                            <p>Minutes</p>
                        </div>
                        <span className="colon">:</span>
                        <div className="time-section">
                            <span className="time" id="seconds">
                                06
                            </span>
                            <hr width="15px" />
                            <p>Seconds</p>
                        </div>
                    </div>
                    <img
                        id="logoBottom"
                        src="/shape-top-grey-80.png"
                        alt="Logo Bottom"
                        className="logoBottom"
                        width="100%"
                    />
                </div>
            </section>

            <Image />
        </>
    )
}
export default countdown;