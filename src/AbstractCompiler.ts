import { MathdocDocument } from "./MathdocDocument";
import { MathdocComment, MathdocDefinition, MathdocTheorem, MathdocProof, MathdocList, MathdocImage, MathdocHorizontalLine, MathdocH6, MathdocH5, MathdocH4, MathdocH3, MathdocH2, MathdocH1, MathdocTOC, MathdocMathBlock, MathdocCodeBlock, MathdocQuote, MathdocParagraph, MathdocEmptyLine } from "./MathdocBlocks";
import { MathdocBold, MathdocItalic, MathdocLink, MathdocMathInline, MathdocCodeInline, MathdocRawChars } from "./MathdocInlines";

export abstract class AbstractCompiler {
    document: MathdocDocument

    constructor(document: MathdocDocument) {
        this.document = document
    }

    abstract compile(document: MathdocDocument): string
    abstract evaluateComment(block: MathdocComment): string
    abstract evaluateDefinition(block: MathdocDefinition): string
    abstract evaluateTheorem(block: MathdocTheorem): string
    abstract evaluateProof(block: MathdocProof): string
    abstract evaluateList(block: MathdocList): string
    abstract evaluateImage(block: MathdocImage): string
    abstract evaluateHorizontalLine(block: MathdocHorizontalLine): string
    abstract evaluateH6(block: MathdocH6): string
    abstract evaluateH5(block: MathdocH5): string
    abstract evaluateH4(block: MathdocH4): string
    abstract evaluateH3(block: MathdocH3): string
    abstract evaluateH2(block: MathdocH2): string
    abstract evaluateH1(block: MathdocH1): string
    abstract evaluateTOC(block: MathdocTOC): string
    abstract evaluateMathBlock(block: MathdocMathBlock): string
    abstract evaluateCodeBlock(block: MathdocCodeBlock): string
    abstract evaluateQuote(block: MathdocQuote): string
    abstract evaluateParagraph(block: MathdocParagraph): string
    abstract evaluateEmptyLine(block: MathdocEmptyLine): string


    abstract evaluateBold(inline: MathdocBold): string
    abstract evaluateItalic(inline: MathdocItalic): string
    abstract evaluateLink(inline: MathdocLink): string
    abstract evaluateMathInline(inline: MathdocMathInline): string
    abstract evaluateCodeInline(inline: MathdocCodeInline): string
    abstract evaluateRawChars(inline: MathdocRawChars): string
    
}