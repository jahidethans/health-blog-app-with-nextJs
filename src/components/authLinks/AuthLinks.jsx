import Link from 'next/link';
import styles from './authLinks.module.css';

const AuthLinks = () => {
    // temporery
    const status = "notAuthenticated"
    return (
        <>
            {status==="notAuthenticated" ? (
                <Link href="/login">Login</Link>
            ) : (
                <>
                <Link href="/write">write</Link>
                <span className='styles.link'>Logout</span>
                </>
            )}
        </>
    );
};

export default AuthLinks;