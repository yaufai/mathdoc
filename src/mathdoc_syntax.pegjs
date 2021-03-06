{
    const MathdocDocument = require("./MathdocDocument")
    const MathdocInlines  = require("./MathdocInlines")
    const MathdocBlocks   = require("./MathdocBlocks")
    const MathdocPage     = require("./MathdocPage")
    function convertTuplesToAssociatedArray(data) {
        let obj = {};
        data.forEach((pair) => {
            obj[pair[0]] = pair[1];
        })
        return obj;
    }
    function getRegularBoxTitle(title) {
        return title ? title : [MathdocInlines.createMathdocRawChars("")]
    }
}

Document = docConfig:DocumentConfig? pages:Pages { return { DocumentConfig: docConfig, pages: pages }}
DocumentConfig = EmptyLine* DocumentConfigDeclaration? kv:KeyValue* DocumentConfigDeclaration { return {name: "DocumentConfig", content:convertTuplesToAssociatedArray(kv)}}
DocumentConfigDeclaration = "="+ LineBreak+
KeyValue = keyName:KeyName Sep value:Value LineBreak { return [keyName, value] }
KeyName  = $[a-zA-Z_0-9]+
Value    = $[^\n]+
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
        getRegularBoxTitle(title),
        content
    )
}
    DefinitionDeclaration = "def." / "definition."
Theorem    = TheoremDeclaration    _* title:Inlines? LineBreak content:IndentedLines {
    return MathdocBlocks.createMathdocTheorem(
        getRegularBoxTitle(title),
        content
    )
}
    TheoremDeclaration    = "th."/ "theorem."
Proof      = ProofDeclaration      _* title:Inlines? LineBreak content:IndentedLines {
    return MathdocBlocks.createMathdocProof(
        getRegularBoxTitle(title),
        content
    )
}
    ProofDeclaration      = "pf." / "proof."
List       = items:ListItem+ {
    return MathdocBlocks.createMathdocList(items)
}
    ListItem = indent:$Indent? ListDeclaration content:Inlines LineBreak { 
        return MathdocBlocks.createListItem(content, indent)
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

MathBlock  = Indent? "$$" content:MathExpression "$$" _* LineBreak {
    return MathdocBlocks.createMathdocMathBlock(content)
}
CodeBlock  = "```" name:RawChars? LineBreak content:SourceCode "```" LineBreak {
    return MathdocBlocks.createMathdocCodeBlock(
        content
    )
}
QuoteBlock = content:QuoteLine+ {
    return MathdocBlocks.createMathdocQuote(content)
}
    QuoteLine = ">" _+ content:"[^\n]"+ LineBreak {
        return MathBlocks.createQuoteLine(content)
    }
Paragraph  = content:Inlines LineBreak {
    return MathdocBlocks.createMathdocParagraph(content)
}
EmptyLine  = LineBreak
IndentedLines = IndentedComponents+
    IndentedComponents = IndentedList / IndentedLine / IndentedMathBlock
    IndentedLine = indent:$Indent content:Inlines LineBreak {
        return MathdocBlocks.createIndentedLine(
            indent,
            content
        )
    }
    IndentedMathBlock = Indent "$$" content:MathExpression "$$" _* LineBreak {
        return MathdocBlocks.createMathdocMathBlock(content)
    }
    IndentedList = items:IndentedListItem+ {
        return MathdocBlocks.createMathdocList(items)
    }
        IndentedListItem = Indent indent:$Indent? ListDeclaration content:Inlines LineBreak { 
            return MathdocBlocks.createListItem(content, indent)
        }
Bold   = StaredBold
    StaredBold = "**" content:Inlines "**" {
    return MathdocInlines.createBold(content)
}
Italic = UnderbaredItalic
    UnderbaredItalic = "_" content:Inlines "_" {
    return MathdocInlines.createItalic(content)
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
RawChars   = content:$([^`\n*$_\[])+ {
    return MathdocInlines.createMathdocRawChars(content)
}

BracketInlines = "[" content:$(!"]" .)* "]"  { return MathdocInlines.createMathdocRawChars(content) }
RoundedInlines = "(" content:$[^)]+ ")"      { return content }

MathExpression = $[^$]+
SourceCode     = $[^`]*

Indent      = "\t" / " "+
LineBreak   = "\n"  {
    return MathdocBlocks.createMathdocEmptyLine()
}
_           = " "