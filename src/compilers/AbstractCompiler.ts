import { MathdocDocument } from "../MathdocDocument";
import { MathdocComment, MathdocDefinition, MathdocTheorem, MathdocProof, MathdocList, MathdocImage, MathdocHorizontalLine, MathdocH6, MathdocH5, MathdocH4, MathdocH3, MathdocH2, MathdocH1, MathdocTOC, MathdocMathBlock, MathdocCodeBlock, MathdocQuoteBlock, MathdocParagraph, MathdocEmptyLine, MathdocBlock, QuoteLine, ListItem, isComment, isDefinition, isTheorem, isProof, isList, isImage, isHorizontalLine, isH6, isH5, isH4, isH3, isH2, isH1, isTOC, isMathBlock, isCodeBlock, isQuoteBlock, isParagraph, isEmptyLine, IndentedLine, BoxBody } from "../MathdocBlocks";
import { MathdocBold, MathdocItalic, MathdocLink, MathdocMathInline, MathdocCodeInline, MathdocRawChars, MathdocInline, isBold, isItalic, isLink, isMathInline, isCodeInline, isRawChars } from "../MathdocInlines";
import { isArray } from "util";

export type Evaluatable
    = MathdocBlock
    | MathdocInline
    | Array<MathdocBlock|MathdocInline>

export function isEvaluatableArray(arg: any): arg is Array<MathdocBlock|MathdocInline> {
    // TODO: implement a strict judge
    return isArray(arg)
}

export abstract class AbstractCompiler<OutputType> {
    document: MathdocDocument

    constructor(document: MathdocDocument) {
        this.document = document
    }

    abstract concatOutput(targets: OutputType[]): OutputType

    compile(document: MathdocDocument): OutputType {
        // Adopt multiple pages
        return this.evaluate(document.pages[0].blocks)
    }
    evaluate(element: Evaluatable): OutputType {
        if (isEvaluatableArray(element)) {
            let evalResults = element.map((value) => {
                return this.evaluate(value)
            })
            return this.concatOutput(evalResults)
        } else if (isComment(element)) {
            return this.evaluateComment(element)
        } else if (isDefinition(element)) {
            return this.evaluateDefinition(element)
        } else if (isTheorem(element)) {
            return this.evaluateTheorem(element)
        } else if (isProof(element)) {
            return this.evaluateProof(element)
        } else if (isList(element)) {
            return this.evaluateList(element)
        } else if (isImage(element)) {
            return this.evaluateImage(element)
        } else if (isHorizontalLine(element)) {
            return this.evaluateHorizontalLine(element)
        } else if (isH6(element)) {
            return this.evaluateH6(element)
        } else if (isH5(element)) {
            return this.evaluateH5(element)
        } else if (isH4(element)) {
            return this.evaluateH4(element)
        } else if (isH3(element)) {
            return this.evaluateH3(element)
        } else if (isH2(element)) {
            return this.evaluateH2(element)
        } else if (isH1(element)) {
            return this.evaluateH1(element)
        } else if (isTOC(element)) {
            return this.evaluateTOC(element)
        } else if (isMathBlock(element)) {
            return this.evaluateMathBlock(element)
        } else if (isCodeBlock(element)) {
            return this.evaluateCodeBlock(element)
        } else if (isQuoteBlock(element)) {
            return this.evaluateQuoteBlock(element)
        } else if (isParagraph(element)) {
            return this.evaluateParagraph(element)
        } else if (isEmptyLine(element)) {
            return this.evaluateEmptyLine(element)
        } else if (isBold(element)) {
            return this.evaluateBold(element)
        } else if (isItalic(element)) {
            return this.evaluateItalic(element)
        } else if (isLink(element)) {
            return this.evaluateLink(element)
        } else if (isMathInline(element)) {
            return this.evaluateMathInline(element)
        } else if (isCodeInline(element)) {
            return this.evaluateCodeInline(element)
        } else if (isRawChars(element)) {
            return this.evaluateRawChars(element)
        } else {
            return undefined
        }
    }
    abstract evaluateComment(block: MathdocComment): OutputType
    abstract evaluateDefinition(block: MathdocDefinition): OutputType
    abstract evaluateTheorem(block: MathdocTheorem): OutputType
    abstract evaluateProof(block: MathdocProof): OutputType
    abstract evaluateList(block: MathdocList): OutputType
    abstract evaluateImage(block: MathdocImage): OutputType
    abstract evaluateHorizontalLine(block: MathdocHorizontalLine): OutputType
    abstract evaluateH6(block: MathdocH6): OutputType
    abstract evaluateH5(block: MathdocH5): OutputType
    abstract evaluateH4(block: MathdocH4): OutputType
    abstract evaluateH3(block: MathdocH3): OutputType
    abstract evaluateH2(block: MathdocH2): OutputType
    abstract evaluateH1(block: MathdocH1): OutputType
    abstract evaluateTOC(block: MathdocTOC): OutputType
    abstract evaluateMathBlock(block: MathdocMathBlock): OutputType
    abstract evaluateCodeBlock(block: MathdocCodeBlock): OutputType
    abstract evaluateQuoteBlock(block: MathdocQuoteBlock): OutputType
    abstract evaluateParagraph(block: MathdocParagraph): OutputType
    abstract evaluateEmptyLine(block: MathdocEmptyLine): OutputType


    abstract evaluateBold(inline: MathdocBold): OutputType
    abstract evaluateItalic(inline: MathdocItalic): OutputType
    abstract evaluateLink(inline: MathdocLink): OutputType
    abstract evaluateMathInline(inline: MathdocMathInline): OutputType
    abstract evaluateCodeInline(inline: MathdocCodeInline): OutputType
    abstract evaluateRawChars(inline: MathdocRawChars): OutputType
    
}