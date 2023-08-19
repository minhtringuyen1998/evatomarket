import { RefObject, useEffect } from "react"

function useOnScreen(ref :RefObject<HTMLElement>) {


  const observer = new IntersectionObserver(
    ([entry ] : any) => {
      if(entry.isIntersecting) {
       let parentElement = entry.target
        setTimeout(() => {
         let imgElement = parentElement.children[0]
         imgElement.classList.remove("lazy")
         imgElement.src= imgElement.dataset.src
         imgElement.removeAttribute("loading")
       },500)
      }
    }
  )

  useEffect(() => {
    if(ref.current){
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])

}

export default useOnScreen