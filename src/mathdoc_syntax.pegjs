{
    const MathdocDocument = require("./MathdocDocument")
    const MathdocInlines  = require("./MathdocInlines")
    const MathdocBlocks   = require("./MathdocBlocks")
    const MathdocPage     = require("./MathdocPage")
}

Document = docConfig:DocumentConfig? pages:Pages { return { DocumentConfig: docConfig, pages: pages }}
DocumentConfig = EmptyLine* DocumentConfigDeclaration? content:KeyValue* DocumentConfigDeclaration { return {name: "DocumentConfig", content:content}}
DocumentConfigDeclaration = "="+ LineBreak+
KeyValue = keyName:KeyName Sep value:Value LineBreak { return [keyName, value] }
KeyName  = $[a-zA-Z_0-9]+
Value    = $[a-zA-Z_0-9]+
Sep      = _* ":" _*

Pages      = pages:Page* term:PageTerm { return pages.concat([term]) }
Page       = LineBreak* config:PageConfig LineBreak* blocks:PageContent PageSep LineBreak* { return MathdocPage.createMathdocPage(config, blocks) }
PageTerm   = config:PageConfig blocks:PageContent  { return MathdocPage.createMathdocPage(config, blocks) }
PageConfig = KeyValue*
PageSep    = "-"+ _* "NewPage" _* "-"+
           / "-"+ _* "new page" _* "-"+

PageContent = Block+
Block       = !PageSep block:PureBlock { return block }
PureBlock   = Comment
			/ Definition
            / Theorem
            / Proof
			/ List
            / Image
            / HorizontalLine
            / H6
            / H5
            / H4
            / H3
            / H2
            / H1
            / TOC
            / MathBlock
            / CodeBlock
            / QuoteBlock
            / Paragraph
            / EmptyLine
Inlines     = Inline+
Inline      = Bold
			/ Italic
            / Link
            / MathInline
            / CodeInline
            / RawChars

Comment    = "<!--" _* content:$(!"-->" .)* _* "-->" {
    return MathdocBlocks.createMathdocComment(content)
}
Definition = DefinitionDeclaration _* title:Inlines? LineBreak content:IndentedLines {
    return MathdocBlocks.createMathdocDefinition(
        title,
        content
    )
}
    DefinitionDeclaration = "def." / "definition."
Theorem    = TheoremDeclaration    _* title:Inlines? LineBreak content:IndentedLines {
    return MathdocBlocks.createMathdocTheorem(
        title,
        content
    )
}
    TheoremDeclaration    = "th."/ "theorem."
Proof      = ProofDeclaration      _* title:Inlines? LineBreak content:IndentedLines {
    return MathdocBlocks.createMathdocProof(
        title,
        content
    )
}
    ProofDeclaration      = "pf." / "proof."
List       = items:ListItem+ {
    return MathdocBlocks.createMathdocList(items)
}
    ListItem = ListDeclaration content:Inlines LineBreak { 
        return MathdocBlocks.createListItem(content)
    }
    ListDeclaration = ("*" _+) / ("-" _+) / ("+" _+)
Image      = "!" alternative:BracketInlines reference:RoundedInlines {
    return MathdocBlocks.createMathdocImage(
        reference,
        alternative
    )
}
HorizontalLine = "---" "-"* LineBreak {
    return MathdocBlocks.createMathdocHorizontalLine()
}
H1 = "#" _*      content:Inlines LineBreak {
    return MathdocBlocks.createMathdocH1(content)
}

H2 = "##" _*     content:Inlines LineBreak {
    return MathdocBlocks.createMathdocH2(content)
}

H3 = "###" _*    content:Inlines LineBreak {
    return MathdocBlocks.createMathdocH3(content)
}

H4 = "####" _*   content:Inlines LineBreak {
    return MathdocBlocks.createMathdocH4(content)
}

H5 = "#####" _*  content:Inlines LineBreak {
    return MathdocBlocks.createMathdocH5(content)
}

H6 = "######" _* content:Inlines LineBreak {
    return MathdocBlocks.createMathdocH6(content)
}

TOC = ("[TOC]" / "[toc]") LineBreak {
    return MathdocBlocks.createMathdocTOC()
}

MathBlock  = _* "$$" content:MathExpression "$$" LineBreak {
    return MathdocBlocks.createMathdocMathBlock(content)
}
CodeBlock  = "```" name:RawChars? LineBreak content:SourceCode "```" LineBreak {
    return MathdocBlocks.MathdocCodeBlock(
        content
    )
}
QuoteBlock = content:QuoteLine+ {
    return MathdocBlocks.createQuote(content)
}
    QuoteLine = ">" _+ content:"[^\n]"+ LineBreak {
        return MathBlocks.createQuoteLine(content)
    }
Paragraph  = content:Inlines LineBreak {
    return MathdocBlocks.createMathdocParagraph(content)
}
EmptyLine  = LineBreak
IndentedLines = IndentedLine+
    IndentedLine = indent:_+ content:Inlines LineBreak {
        return MathdocBlocks.createIndentedLine(
            indent,
            content
        )
    }
Bold   = StaredBold
    StaredBold = "**" content:Inlines "**" {
    return MathdocInlines.createMathdocBold(content)
}
Italic = UnderbaredItalic
    UnderbaredItalic = "_" content:Inlines "_" {
    return MathdocInlines.createMathdocItalic(content)
}
Link   = content:BracketInlines reference:RoundedInlines {
    return MathdocInlines.createMathdocLink(content, reference)
}
MathInline = "$" content:MathExpression "$" {
    return MathdocInlines.createMathdocMathInline(content)
}
CodeInline = "`" content:SourceCode "`" {
    return MathdocInlines.createMathdocCodeInline(content)
}
RawChars   = content:$([^\n*$_\[])+ {
    return MathdocInlines.createRawChars(content)
}

BracketInlines = "[" content:$(!"]" .)* "]"  { return content }
RoundedInlines = "(" content:$[^)]+ ")"      { return content }

MathExpression = $[^$]+
SourceCode     = $[^`]*


LineBreak   = "\n"  {
    return MathdocBlocks.createEmptyLine()
}
_           = " "