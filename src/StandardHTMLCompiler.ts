import { AbstractCompiler } from "./AbstractCompiler";
import { MathdocComment, MathdocDefinition, MathdocTheorem, MathdocProof, MathdocList, MathdocImage, MathdocHorizontalLine, MathdocH6, MathdocH5, MathdocH4, MathdocH3, MathdocH2, MathdocH1, MathdocTOC, MathdocMathBlock, MathdocCodeBlock, MathdocQuoteBlock, MathdocParagraph, MathdocEmptyLine, BoxBody } from "./MathdocBlocks";
import { MathdocBold, MathdocItalic, MathdocLink, MathdocMathInline, MathdocCodeInline, MathdocRawChars, MathdocInline } from "./MathdocInlines";
import { wrapHTML } from "./CompilationUtils";


export class StandardHTMLCompiler extends AbstractCompiler {
    getBoxHTML(type: string, header: MathdocInline[], body: BoxBody): string {
        var box_content = body.reduce(
            (acc, cur, _) => {
                return acc + this.evaluate(cur.content)
            },
            ""
        )
        var box_body    = wrapHTML("p", box_content, {"class": type + "_box_body" })
        var header_flag = wrapHTML("span", type + ". ", {"class": type + "_box_flag"})
        var header_body = wrapHTML("span", header_flag + this.evaluate(header), {"class": type + "_box_title"})
        return wrapHTML("div", header_body + box_body, { "class": '"' + type + '_box common_box"' })
    }
    evaluateComment(block: MathdocComment): string {
        return ""
    }
    evaluateDefinition(block: MathdocDefinition): string {
        return this.getBoxHTML("def", block.title, block.content) 
    }
    evaluateTheorem(block: MathdocTheorem): string {
        return this.getBoxHTML("th", block.title, block.content)
    }
    evaluateProof(block: MathdocProof): string {
        return this.getBoxHTML("pf", block.title, block.content)
    }
    evaluateList(block: MathdocList): string {
        return wrapHTML("ul", block.items.reduce(
            (acc, cur) => {
                return acc + wrapHTML("li", this.evaluate(cur.content), {})
            }, ""
        ), {}
        )
    }
    evaluateImage(block: MathdocImage): string {
        return '<img alt="' + block.alternative + '" src="' + block.reference + '">'
    }
    evaluateHorizontalLine(block: MathdocHorizontalLine): string {
        return "<hr>"
    }
    evaluateH6(block: MathdocH6): string {
        return wrapHTML("h6", this.evaluate(block.content), {})
    }
    evaluateH5(block: MathdocH5): string {
        return wrapHTML("h5", this.evaluate(block.content), {})
    }
    evaluateH4(block: MathdocH4): string {
        return wrapHTML("h4", this.evaluate(block.content), {})
    }
    evaluateH3(block: MathdocH3): string {
        return wrapHTML("h3", this.evaluate(block.content), {})
    }
    evaluateH2(block: MathdocH2): string {
        return wrapHTML("h2", this.evaluate(block.content), {})
    }
    evaluateH1(block: MathdocH1): string {
        return wrapHTML("h1", this.evaluate(block.content), {})
    }
    evaluateTOC(block: MathdocTOC): string {
        // TODO: Implement
        return ""
    }
    evaluateMathBlock(block: MathdocMathBlock): string {
        return "$$" + block.content + "$$"
    }
    evaluateCodeBlock(block: MathdocCodeBlock): string {
        return wrapHTML(
            "pre",
            wrapHTML("code", block.content, {}),
            {}
        )
    }
    evaluateQuoteBlock(block: MathdocQuoteBlock): string {
        return wrapHTML("blockquote", block.content.reduce((acc, cur) => acc + cur, ""), {})
    }
    evaluateParagraph(block: MathdocParagraph): string {
        return wrapHTML("p", this.evaluate(block.content), {})
    }
    evaluateEmptyLine(block: MathdocEmptyLine): string {
        return "<br>"
    }
    evaluateBold(inline: MathdocBold): string {
        return wrapHTML("strong", this.evaluate(inline.content), {})
    }
    evaluateItalic(inline: MathdocItalic): string {
        return wrapHTML("i", this.evaluate(inline.content), {})
    }
    evaluateLink(inline: MathdocLink): string {
        return wrapHTML("a", this.evaluate(inline.content), {"href": inline.reference})
    }
    evaluateMathInline(inline: MathdocMathInline): string {
        return "$" + inline.content + "$"
    }
    evaluateCodeInline(inline: MathdocCodeInline): string {
        return wrapHTML(
            "pre",
            wrapHTML("code", inline.content, {}),
            {}
        )
    }
    evaluateRawChars(inline: MathdocRawChars): string {
        return inline.content
    }

    
}