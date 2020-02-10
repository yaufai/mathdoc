import { MathdocPage } from "./MathdocPage";


export type DocumentConfig  = JSON

export type MathdocDocument = {
    config: DocumentConfig
    pages : [MathdocPage]
}

export function createMathdocDocument(config: DocumentConfig, pages: [MathdocPage]): MathdocDocument {
    return {
        config: config,
        pages : pages
    }
}

export function convertStringToMathdocDocument(content: string): MathdocDocument {
    // TODO: Throw an error if json is not MathdocDocument
    let json = JSON.parse(content)
    return json
}