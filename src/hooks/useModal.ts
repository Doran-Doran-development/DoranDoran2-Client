import { useState } from "react";


const useModal = () => {
    const [isShow, setIsShow] = useState<boolean>(false);

    const toggleModal = () => {
        setIsShow(!isShow)
    }
    return {
        isShow,
        toggleModal
    }
}

export default useModal;