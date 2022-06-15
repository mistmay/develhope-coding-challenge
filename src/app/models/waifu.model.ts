export interface Waifu {
    url: string
    tags: Tags[]
}

export interface Tags {
    name: string
    description: string
}

export interface WaifuResponse {
    images: Waifu[]
}