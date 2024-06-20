import { useState } from "react"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"
type props={
    images: string[]
}
const Carousel=({images}: props)=>{
    const [currentImage, setImage]=useState(0)
    const [imgString, setImgString]=useState(images[0])
    const incrementImg=()=>{
        if(currentImage+1>images.length-1){
            setImage(0)
        }else{
            setImage(currentImage+1)
        }
        setImgString(images[currentImage])
        console.log(imgString)
    }
    const decremenImg=()=>{
        if(currentImage-1<0){
            setImage(images.length-1)
        }else{
            setImage(currentImage-1)
        }
        setImgString(images[currentImage])
        console.log(imgString)
    }
    return(
        <div className="grid grid-cols-2 justify-center p-3 h-full">
            <div className="size-96 col-span-2  relative inset-0 p-5">
                {/* <div className="max-h-full max-w-full bg-eerieBlack"> */}
                <img  src={'./'+imgString} className="max-h-full text-center justify-center m-auto slide-in from-right fade-in rounded-xl"/>
                {/* </div> */}
            </div>
          <button onClick={decremenImg} className="button">
            <FaAngleLeft/>
          </button>
          <button className="button" onClick={incrementImg}>
            <FaAngleRight/>
          </button>
        </div>
    )
}
export default Carousel