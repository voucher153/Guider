import { SubText } from "./SubText/SubText"
import styles from "./TextBlock.module.css"

export const TextBlock = () => {
    return (
        <div className={styles.textBlock}>
            <h3 className={styles.title}>Сервис</h3>
            <SubText />
        </div>
    )
}