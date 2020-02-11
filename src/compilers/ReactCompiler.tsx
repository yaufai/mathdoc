import { AbstractCompiler } from './AbstractCompiler'
import { ReactElement } from 'react'
import { MathdocBold, MathdocItalic, MathdocLink, MathdocMathInline, MathdocCodeInline, MathdocRawChars } from '../MathdocInlines'
import { MathdocComment, MathdocDefinition, MathdocTheorem, MathdocProof, MathdocList, MathdocImage, MathdocHorizontalLine, MathdocH6, MathdocH5, MathdocH4, MathdocH3, MathdocH2, MathdocH1, MathdocTOC, MathdocMathBlock, MathdocCodeBlock, MathdocQuoteBlock, MathdocParagraph, MathdocEmptyLine, isList, isMathBlock, BoxBody } from '../MathdocBlocks'
import { DefinitionBox, ProofBox, TheoremBox } from './react/boxes'
import React = require('react')

export class ReactCompiler extends AbstractCompiler<ReactElement> {
    concatOutput(targets: ReactElement[]): ReactElement {
        return (<span>{targets}</span>)
    }
    evaluateComment(block: MathdocComment): ReactElement {
        return <div></div>
    }

    private createContent(boxbody: BoxBody): ReactElement {
        let content = this.concatOutput(boxbody.map(
            (value) => {
                if (isList(value) || isMathBlock(value)) {
                    return this.evaluate(value)
                } else {
                    return this.evaluate(value.content)
                }
            }
        ))
        return content
    }
    evaluateDefinition(block: MathdocDefinition): ReactElement {
        return (
            <DefinitionBox
                title={this.evaluate(block.title)}
                content={this.createContent(block.content)}
            />
        )
    }
    evaluateTheorem(block: MathdocTheorem): ReactElement {
        return (
            <TheoremBox
                title={this.evaluate(block.title)}
                content={this.createContent(block.content)}
            />
        )
    }
    evaluateProof(block: MathdocProof): ReactElement {
        return (
            <ProofBox
                title={this.evaluate(block.title)}
                content={this.createContent(block.content)}
            />
        )
    }
    evaluateList(block: MathdocList): ReactElement {
        return (
            <ul>
                {block.items.map((item) => {
                return <li>{this.evaluate(item.content)}</li>
                })}
            </ul>
        )
    }
    evaluateImage(block: MathdocImage): ReactElement {
        return <img alt={block.alternative} src={block.reference}/>
    }
    evaluateHorizontalLine(block: MathdocHorizontalLine): ReactElement {
        return <hr />
    }
    evaluateH6(block: MathdocH6): ReactElement {
        return <h6>{this.evaluate(block.content)}</h6>
    }
    evaluateH5(block: MathdocH5): ReactElement {
        return <h5>{this.evaluate(block.content)}</h5>
    }
    evaluateH4(block: MathdocH4): ReactElement {
        return <h4>{this.evaluate(block.content)}</h4>
    }
    evaluateH3(block: MathdocH3): ReactElement {
        return <h3>{this.evaluate(block.content)}</h3>
    }
    evaluateH2(block: MathdocH2): ReactElement {
        return <h2>{this.evaluate(block.content)}</h2>
    }
    evaluateH1(block: MathdocH1): ReactElement {
        return <h1>{this.evaluate(block.content)}</h1>
    }
    evaluateTOC(block: MathdocTOC): ReactElement {
        // TODO: Implement
        return <div></div>
    }
    evaluateMathBlock(block: MathdocMathBlock): ReactElement {
        return <div>{"$$" + block.content + "$$"}</div>
    }
    evaluateCodeBlock(block: MathdocCodeBlock): ReactElement {
        return (<pre><code>{block.content}</code></pre>)
    }
    evaluateQuoteBlock(block: MathdocQuoteBlock): ReactElement {
        return <blockquote>{block.content.reduce((acc, cur) => acc + cur, "")}</blockquote>
    }
    evaluateParagraph(block: MathdocParagraph): ReactElement {
        return <p>{this.evaluate(block.content)}</p>
    }
    evaluateEmptyLine(block: MathdocEmptyLine): ReactElement {
        return <br />
    }
    evaluateBold(inline: MathdocBold): ReactElement {
        return <strong>{this.evaluate(inline.content)}</strong>
    }
    evaluateItalic(inline: MathdocItalic): ReactElement {
        return <i>{this.evaluate(inline.content)}</i>
    }
    evaluateLink(inline: MathdocLink): ReactElement {
        return <a href={inline.reference}>{this.evaluate(inline.content)}</a>
    }
    evaluateMathInline(inline: MathdocMathInline): ReactElement {
        return <span>{"$" + inline.content + "$"}</span>
    }
    evaluateCodeInline(inline: MathdocCodeInline): ReactElement {
        return <code>{inline.content}</code>
    }
    evaluateRawChars(inline: MathdocRawChars): ReactElement {
        return <span>{inline.content}</span>
    }
}