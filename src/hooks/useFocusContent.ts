import { useState } from "react"


const useFocusContent = () => {
    const [isFocus, setFocus] = useState<boolean>(false);
    
    const toggleFocusContent = () => {
        setFocus(!isFocus);
    }
    return {
        isFocus,
        toggleFocusContent
    }
}

export default useFocusContent;