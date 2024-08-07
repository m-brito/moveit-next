import { useState, useEffect, useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >  
                    Ciclo encerrado
                    <img src="verify.png" alt="Ciclo encerrado" className={styles.countdownButtonImgVerify}/>
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button
                            type="button"
                            className={ `${styles.countdownButton} ${styles.countdownButtonActive}` }
                            onClick={resetCountdown}    
                        >
                            abandonar ciclo
                    </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}    
                        >
                            Iniciar um ciclo
                        </button>
                    ) }
                </>
            )}

            {/* { hasFinished ? (
                <p>terminou</p>
            ) : null}

            mesmo que...

            { hasFinished && (
                <p>terminou</p>
            )} */}


            

            
        </div>
    )
}