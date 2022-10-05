import React from 'react'
import styles from './Luxury.module.css'
import { luxuryData } from './LuxuryData'

const Luxury = () => {
    return (
        <div className={styles.luxury}>
            <div className={styles.heading}>
                <h2>Luxury Selection</h2>
                <div className={styles.text_bg}>
                    <p>
                        <span>Select from the top luxury vehicles to roll in style</span>
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                {
                    luxuryData.map((luxuryData, index) => {
                        return <div className={styles.card} key={index}>
                            <img src={luxuryData.image} alt="" />
                            <div className={styles.content}>
                                <h3>{luxuryData.title}</h3>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Luxury