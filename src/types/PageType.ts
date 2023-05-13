export type PageType = {
    index: number,
    size: number,
    mode: PageLoaderType
}

export enum PageLoaderType{
    Page,
    UnboundedList
}