import { RefObject, useEffect, useRef, useState } from "react"
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch =  useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useOutsideClick = (value: boolean, ref: RefObject<HTMLDivElement>) => {
    const [isActive, setIsActive] = useState(value)

    useEffect(() => {
        const handleClick = (e: any) => {
            
            if (ref.current && !ref.current.contains(e.target)) {
                setIsActive(false)
            }
        }

        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [ isActive ])

    return {isActive, setIsActive}
}