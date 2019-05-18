import { MathdocBlock } from "./MathdocBlocks";

export type PageConfig  = JSON

export type MathdocPage = {
    config: PageConfig
    blocks: [MathdocBlock]
}

export function createMathdocPage(config: PageConfig, blocks: [MathdocBlock]): MathdocPage {
    return {
        config: config,
        blocks: blocks
    }
}