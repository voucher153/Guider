import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { useGetServiceQuery } from "../../../store/api/api"
import { closeModal } from "../../../store/reducers/toolSlice/ServicesSlice"
import styles from "./ModalContent.module.css"

export const ModalContent = () => {

    const dispatch = useAppDispatch()

    const currentId = useAppSelector(state => state.services.currentId)
    const {data = {}, isFetching} = useGetServiceQuery(currentId)

    return (
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.cross} onClick={() => dispatch(closeModal())}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            {isFetching ?
                <div>loading</div> :
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </div>
            }
        </div>
    )
}