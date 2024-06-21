import { PropsWithChildren } from "react"
import './Section.css'
import { useEffect } from "react"
import { fadeIns } from "./observer"
// import Carousel from '../Carousel/Carousel'


type props={
    isHighlight: boolean,
    title: String,
    images: string[],
    subtitle: String
}
const Section=(props:PropsWithChildren<props>)=>{
    const ifImg=props.images.length==0
    useEffect(()=>{
        fadeIns(props.isHighlight)
    }, [])
    if(ifImg){
        return(
        <div className={'section fade-in'+(!props.isHighlight?"pb-5 pt-5 fade-in":"   pt-20 box bg-gradient-to-t to-moonstone from-powderBlue")}>
            <div className={' title text-center '+(props.isHighlight?'text-charcoal':'text-plat')}>
                {props.title}
            <div className={' font-normal text-center '+(props.isHighlight?'text-charcoal':'text-plat')}>
                {props.subtitle}
            </div>
            </div>


            <div className={'text '+(props.isHighlight?"text-charcoal":'text-plat')}>
                {props.children}

            </div>
        </div>
        )
    }
    return(
        <div className={'section fade-in '+(!props.isHighlight?"pb-5 pt-5 fade-in":"   pt-20 box bg-gradient-to-t to-moonstone from-powderBlue")}>
            <div className={'title text-center '+(props.isHighlight?'text-charcoal':'text-plat')}>
                {props.title}

            <div className={' font-normal text-center '+(props.isHighlight?' text-charcoal':'text-plat')}>
                {props.subtitle}
            </div>
            </div>

            <div className={'text '+(props.isHighlight?"text-charcoal":'text-plat')}>
                {props.children}
                {/* <Carousel images={props.images} /> */}


            </div>
        </div>
    )
}
export default Section