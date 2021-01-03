import  {useEffect, useState} from "react";

function useDelayUnmount(isMounted: boolean, delayTime: number) {
    const [ shouldRender, setShouldRender ] = useState(false);
    delayTime = delayTime * 1000;
    useEffect(() => {
        let timeoutId: number;
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        }
        else if(!isMounted && shouldRender) {
            timeoutId = window.setTimeout(
                () => setShouldRender(false), 
                delayTime
            );
        }
        return () => clearTimeout(timeoutId);
    }, [isMounted, delayTime, shouldRender]);
    return shouldRender;
}

export default useDelayUnmount; 