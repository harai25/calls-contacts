import Portal from "../Portal/Portal"
import styles from './Modal.module.scss'

interface Props {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

function Modal(props: Props) {
    if (!props.isOpen) {
        return null
    }

    return (
        <Portal>
            <div className={styles.modal}>
                <div className={styles.wrapper}>
                    {props.children}
                </div>

                <div className={styles.background} onClick={props.onClose}></div>
            </div>
        </Portal>
    )
}

export default Modal