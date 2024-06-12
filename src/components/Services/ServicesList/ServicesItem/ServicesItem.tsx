import React, { useState } from "react"
import styles from "./ServicesItem.module.css"
import { MoreInfoButton } from "./MoreInfoButton/MoreInfoButton"
import { IServicesProps } from "../servicesList.interface"

export const ServiceItem = ({text, icon, subText, id}: IServicesProps) => {

    const [hovered, setHovered] = useState(false)

    return (
        <div className={styles.toolBlock} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className={hovered ? styles.toolContentHover : styles.toolContent}>
                <div className={styles.upBlock}>
                    <div className={styles.iconBlock}>
                        {icon}
                    </div>
                    <h4 className={hovered ? styles.titleHover : styles.title}>
                        {text}
                    </h4>
                </div>
                <div className={styles.lowBlock}>
                    <p className={styles.subText}>{subText}</p>
                    <MoreInfoButton id={id} />
                </div>
            </div>
        </div>
    )
}