import styles from "./SubText.module.css"

export const SubText = () => {
    return (
        <div className={styles.subtextBlock}>
            <p className={styles.firstText}>От идеи до незабываемого и измеримого результата.</p>
            {/* <div className={styles.line}></div> */}
            <p className={styles.secondText}>Интеграция безупречного производства, передовых технологий и тщательного измерения производительности</p>
        </div>
    )
}