import { useAppDispatch } from "../../../../../hooks/hooks"
import { openModal, setCurrentId } from "../../../../../store/reducers/toolSlice/ServicesSlice"
import styles from "./MoreInfoButton.module.css"

export const MoreInfoButton = ({id}: {id: number}) => {

    const dispatch = useAppDispatch()

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(openModal())
        dispatch(setCurrentId(id))
    }

    return (
        <div className={styles.button} onClick={handleClick}>
            Подробнее →
        </div>
    )
}