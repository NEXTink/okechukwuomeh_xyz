import {useEffect} from "react";

export function useOutsideAlerter(ref,closeDropdown) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                closeDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref,closeDropdown]);
}


export function closePopup(e,ref,closeFunction) {
    console.log(ref)
    if (ref!==null || true){
         const refBound = ref.getBoundingClientRect();
         const xPos = e.clientX;
         const yPos = e.clientY;
         const _width = refBound.width;
         const _height = refBound.height;

         if (!(xPos>refBound.x && xPos<=_width) && !(yPos>refBound.y && yPos<=_height)){
              closeFunction();
         }
    }
    else{
         console.log('not working')
    }
}