import { createMathdocComment } from "../MathdocBlocks";
import { StandardHTMLCompiler } from "../StandardHTMLCompiler";

const compiler: StandardHTMLCompiler = new StandardHTMLCompiler(undefined)

describe("Block compilation", () => {
    it("Test Comment", () => {
        let actual: string = compiler.evaluateComment(createMathdocComment(""))
        let expect: string = ""
        chai.assert.equal(actual, expect)
    })
    it("Test Definition", () => {
        
    })
    it("Test Theorem", () => {
        
    })
    it("Test Proof", () => {
        
    })
    it("Test List", () => {
        
    })
    it("Test Image", () => {
        
    })
    it("Test HorizontalLine", () => {
        
    })
    it("Test H6", () => {
        
    })
    it("Test H5", () => {
        
    })
    it("Test H4", () => {
        
    })
    it("Test H3", () => {
        
    })
    it("Test H2", () => {
        
    })
    it("Test H1", () => {
        
    })
    it("Test TOC", () => {
        
    })
    it("Test MathBlock", () => {
        
    })
    it("Test CodeBlock", () => {
        
    })
    it("Test Quote", () => {
        
    })
    it("Test Paragraph", () => {
        
    })
    it("Test EmptyLine", () => {
        
    })


})