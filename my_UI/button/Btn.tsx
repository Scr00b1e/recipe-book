import React from 'react'
import styles from './btn.module.scss'

type BtnProps = {
    btnText: any
}

const Btn: React.FC<BtnProps> = ({btnText}) => {
  return (
    <div className={styles.btn}>
        {btnText}
    </div>
  )
}

export default Btn