import React from 'react'
import { useDispatch } from 'react-redux'
import { clearItem } from '../../redux/slices/favoritesSlice'
import styles from './modal.module.scss'

type ModalType = {
    setModalOpen: any
}

const Modal: React.FC<ModalType> = ({ setModalOpen }) => {
    const dispatch = useDispatch()
    const onClickYes = () => {
        dispatch(clearItem())
        setModalOpen(false)
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <div className={styles.modal__closeBlock}>
                    <img src="./close.svg" alt="close"
                        className={styles.modal__close}
                        onClick={() => setModalOpen(false)} />
                </div>
                <h1 className={styles.modal__title}>Are you sure you wanna remove this item ?</h1>
                <div className={styles.modal__buttons}>
                    <button onClick={onClickYes}>Yes</button>
                    <button onClick={() => setModalOpen(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal