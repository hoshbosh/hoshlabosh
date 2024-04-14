import { PropsWithChildren } from "react"
import './Section.css'
import { useEffect } from "react"
import { fadeIns } from "./observer"
type props={
    isHighlight: boolean,
    title: String
}
const Section=(props:PropsWithChildren<props>)=>{
    useEffect(()=>{
        fadeIns(props.isHighlight)
    }, [])
    return(
        <div className={'section fade-in'+(!props.isHighlight?"pb-5 pt-5 fade-in":"   pt-20 box bg-gradient-to-t to-moonstone from-powderBlue")}>
            <div className={'title text-center '+(props.isHighlight?'text-charcoal':'text-plat')}>
                {props.title}
            </div>
            <div className={'text '+(props.isHighlight?"text-charcoal":'text-plat')}>
                {props.children}
            </div>
        </div>
    )
}
export default Section