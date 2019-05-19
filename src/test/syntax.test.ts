import * as chai from 'chai'
import { Mathdoc } from '../Mathdoc';
import { MathdocBlock, createMathdocDefinition, createIndentedLine } from '../MathdocBlocks';
import { createMathdocRawChars } from '../MathdocInlines';

function getFirstBlockFrom(mathdoc: Mathdoc): MathdocBlock {
    return mathdoc.getSyntaxTree().pages[0].blocks[0]
}

describe("Block elements", () => {
    it("Definition box", () => {
        let test: string = "def. Title\n    Content1\n    Content2"

        let mathdoc = new Mathdoc(test)
        let actual = getFirstBlockFrom(mathdoc)
        let expect = createMathdocDefinition(
            [createMathdocRawChars("Title")],
            [ 
                createIndentedLine("    ", [createMathdocRawChars("Content1")]),
                createIndentedLine("    ", [createMathdocRawChars("Content2")])
            ]
        )
        chai.assert.deepEqual(actual, expect)
    })
})