import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IServicesState } from './servicesSlice.interface'

const initialState: IServicesState = {
    modalOpened: false,
    currentId: ""
}

const servicesSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        openModal(state) {
            state.modalOpened = true
        },
        closeModal(state) {
            state.modalOpened = false
        },
        setCurrentId(state, {payload}: PayloadAction<number>) {
            state.currentId = payload
        }
    }
})

export const {openModal, closeModal, setCurrentId} = servicesSlice.actions

export default servicesSlice.reducer