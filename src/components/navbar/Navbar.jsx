import React from 'react';
import styles from './navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" height={24} width={24}></Image>
                <Image src="/instagram.png" alt="instagram" height={24} width={24}></Image>
                <Image src="/tiktok.png" alt="tiktok" height={24} width={24}></Image>
                <Image src="/youtube.png" alt="youtube" height={24} width={24}></Image>
            </div>
            <div className={styles.logo}>HealthBlog.</div>
            <div className={styles.links}>
                <ThemeToggle></ThemeToggle>
                <Link href="/">HomePage</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
                <AuthLinks></AuthLinks>
            </div>
        </div>
    );
};

export default Navbar;