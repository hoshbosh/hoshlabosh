import { PropsWithChildren } from "react"
import './Section.css'
type props={
    isHighlight: boolean,
    title: String
}
const Section=(props:PropsWithChildren<props>)=>{
    // console.log('text '+(props.isHighlight?"text-charcoal":'text-plat'))
    // console.log('section '+!props.isHighlight?"pb-5":"box bg-gradient-to-t to-moonstone from-powderBlue")

    return(
        <div className={'section '+(!props.isHighlight?"pb-5 pt-5":"pt-20 box bg-gradient-to-t to-moonstone from-powderBlue")}>
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