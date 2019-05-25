import { AbstractCompiler } from "./AbstractCompiler";
import { MathdocComment, MathdocDefinition, MathdocTheorem, MathdocProof, MathdocList, MathdocImage, MathdocHorizontalLine, MathdocH6, MathdocH5, MathdocH4, MathdocH3, MathdocH2, MathdocH1, MathdocTOC, MathdocMathBlock, MathdocCodeBlock, MathdocQuoteBlock, MathdocParagraph, MathdocEmptyLine } from "./MathdocBlocks";
import { MathdocBold, MathdocItalic, MathdocLink, MathdocMathInline, MathdocCodeInline, MathdocRawChars } from "./MathdocInlines";

function getBoxHTML(type: string, header: string, body: string): string {
    var box_body    = wrapHTML("p", body, {"class": type + "_box_body" })
    var header_flag = wrapHTML("span", type + ". ", {"class": type + "_box_flag"})
    var header_body = wrapHTML("span", header_flag + header, {"class": type + "_box_title"})
    return wrapHTML("div", header_body + box_body, { "class": '"' + type + '_box common_box"' })
}

export class StandardHTMLCompiler extends AbstractCompiler {
    evaluateComment(block: MathdocComment): string {
        throw new Error("Method not implemented.");
    }
    evaluateDefinition(block: MathdocDefinition): string {
        throw new Error("Method not implemented.");
    }
    evaluateTheorem(block: MathdocTheorem): string {
        throw new Error("Method not implemented.");
    }
    evaluateProof(block: MathdocProof): string {
        throw new Error("Method not implemented.");
    }
    evaluateList(block: MathdocList): string {
        throw new Error("Method not implemented.");
    }
    evaluateImage(block: MathdocImage): string {
        throw new Error("Method not implemented.");
    }
    evaluateHorizontalLine(block: MathdocHorizontalLine): string {
        throw new Error("Method not implemented.");
    }
    evaluateH6(block: MathdocH6): string {
        throw new Error("Method not implemented.");
    }
    evaluateH5(block: MathdocH5): string {
        throw new Error("Method not implemented.");
    }
    evaluateH4(block: MathdocH4): string {
        throw new Error("Method not implemented.");
    }
    evaluateH3(block: MathdocH3): string {
        throw new Error("Method not implemented.");
    }
    evaluateH2(block: MathdocH2): string {
        throw new Error("Method not implemented.");
    }
    evaluateH1(block: MathdocH1): string {
        throw new Error("Method not implemented.");
    }
    evaluateTOC(block: MathdocTOC): string {
        throw new Error("Method not implemented.");
    }
    evaluateMathBlock(block: MathdocMathBlock): string {
        throw new Error("Method not implemented.");
    }
    evaluateCodeBlock(block: MathdocCodeBlock): string {
        throw new Error("Method not implemented.");
    }
    evaluateQuoteBlock(block: MathdocQuoteBlock): string {
        throw new Error("Method not implemented.");
    }
    evaluateParagraph(block: MathdocParagraph): string {
        throw new Error("Method not implemented.");
    }
    evaluateEmptyLine(block: MathdocEmptyLine): string {
        throw new Error("Method not implemented.");
    }
    evaluateBold(inline: MathdocBold): string {
        throw new Error("Method not implemented.");
    }
    evaluateItalic(inline: MathdocItalic): string {
        throw new Error("Method not implemented.");
    }
    evaluateLink(inline: MathdocLink): string {
        throw new Error("Method not implemented.");
    }
    evaluateMathInline(inline: MathdocMathInline): string {
        throw new Error("Method not implemented.");
    }
    evaluateCodeInline(inline: MathdocCodeInline): string {
        throw new Error("Method not implemented.");
    }
    evaluateRawChars(inline: MathdocRawChars): string {
        throw new Error("Method not implemented.");
    }

    
}