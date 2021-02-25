import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/66139103?s=460&u=be4cc0c0c59b59f4419c98620950198a36009fe5&v=4" alt="Mauricio Brito"/>
            <div>
                <strong>Mauricio Brito</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}