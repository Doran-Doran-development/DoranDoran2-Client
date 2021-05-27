import { useState } from "react";

const usePagination = (maxPage : number) => {
    const [page, setPage] = useState(1);
    const incresePage = () => {
        if(page + 1 < maxPage) setPage(page + 1)
        else alert("더 이상 페이지가 존재하지 않습니다.")
    }
    const decreasePage = () => {
        if (page - 1 > 0) setPage(page - 1)
        else alert("더 이상 페이지가 존재하지 않습니다.")
    }
    return {page, incresePage, decreasePage};
}
 
export default usePagination;