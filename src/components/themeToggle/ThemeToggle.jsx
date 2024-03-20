import Image from 'next/image';
import styles from './themeToggle.module.css';

const ThemeToggle = () => {
    return (
        <div className={styles.container}>
            <Image src="/moon.png" alt='dark' width={14} height={14}></Image>
            <div className={styles.ball}></div>
            <Image src="/sun.png" alt='light' width={14} height={14}></Image>
        </div>
    );
};

export default ThemeToggle;