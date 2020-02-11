import { ReactElement } from "react"
import { BOX_HEADER_FLAG, BOX_HEADER_BODY, BOX_HEADER_WHOLE, BOX_WHOLE, BOX_BODY } from "./css_const"
import React = require("react")

type AbstractBoxProps = {
    flag : string
    title  : ReactElement
    content: ReactElement
}

type BoxProps = {
    title  : ReactElement
    content: ReactElement
}

const BoxHeader = (props: {flag: string, title: ReactElement}) => {
    const HeaderFlag = () => {
        return <span className={BOX_HEADER_FLAG}>{props.flag}</span>
    }

    const HeaderBody = () => {
        return <span className={BOX_HEADER_BODY}>{props.title}</span>
    }
    return (
        <div className={BOX_HEADER_WHOLE}>
            <HeaderFlag />
            <HeaderBody />
        </div> 
    )
}

const BoxBody = (props: {content: ReactElement}) => {
    return <div className={BOX_BODY}>{props.content}</div>
}

export const HTMLBox = (props:AbstractBoxProps) => {
    return (
        <div className={BOX_WHOLE}>
            <BoxHeader
                flag ={props.flag}
                title={props.title}
            />
            <BoxBody
                content={props.content}
            />
        </div>
    )
}

export const DefinitionBox = (props:BoxProps) => {
    return <HTMLBox
        flag   ='def.'
        title  ={props.title}
        content={props.content}
    /> 
}
export const TheoremBox = (props:BoxProps) => {
    return <HTMLBox
        flag   ='theorem.'
        title  ={props.title}
        content={props.content}
    /> 
}
export const ProofBox = (props:BoxProps) => {
    return <HTMLBox
        flag   ='proof.'
        title  ={props.title}
        content={props.content}
    /> 
}