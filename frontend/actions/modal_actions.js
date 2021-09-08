export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

const openModal = () => {
    return {
        type: OPEN_MODAL
    }
}