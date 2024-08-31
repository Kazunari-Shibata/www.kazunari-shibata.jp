import styles from '@/app/styles/home/components/Message.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface MessageProps {
    status: string;
    message: string;
    onClose: () => void; // Close handler
}

export function Message({ status, message, onClose }: MessageProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
            onClose(); // Call the close handler after hiding
        }, 10000);

        return () => clearTimeout(timer);
    }, [status, message, onClose]); // Re-run when status or message changes

    const handleClose = () => {
        setVisible(false);
        onClose(); // Call the close handler on manual close
    };

    if (!visible) return null;

    return (
        <section className={`${styles.container} ${styles[status]}`}>
            <div className={styles.info_icon}>
                <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
            </div>
            <div className={styles.message}>
                <p>{message}</p>
            </div>
            <button
                type="button"
                className={styles.close_icon}
                aria-label="Close"
                onClick={handleClose}
            >
                <Image
                    src="/Switcher_icon.svg"
                    alt="Close icon"
                    width={28}
                    height={28}
                    priority
                />
            </button>
        </section>
    );
}
