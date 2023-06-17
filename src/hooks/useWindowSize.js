import { useEffect,useState } from "react";


const useWindowSize = () => {
    const [windowSize,setWindowSize] = useState({
        width : undefined,
        height : undefined
    })

    useEffect(() => {
        const fetchSize = () => {
            setWindowSize({
                width : window.innerWidth,
                height : window.innerHeight
        })
    }
        fetchSize();
        window.addEventListener('resize', fetchSize);
        return () => window.removeEventListener('resize', fetchSize);
    },[])

    return windowSize
}

export default useWindowSize