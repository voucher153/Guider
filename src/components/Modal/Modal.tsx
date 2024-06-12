import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { useGetServiceQuery } from "../../store/api/api"
import { closeModal } from "../../store/reducers/toolSlice/ServicesSlice"
import styles from "./Modal.module.css"
import { ModalContent } from "./ModalContent/ModalContent"

export const Modal = () => {

    const dispatch = useAppDispatch()
    const modalOpened = useAppSelector(state => state.services.modalOpened)

    return (
        <div className={modalOpened ? styles.modalOpened : styles.modal} onClick={() => dispatch(closeModal())}>
            <ModalContent />
        </div>
    )
}