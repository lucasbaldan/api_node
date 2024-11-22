export interface defaultResponse {
    statusCode: number,
    status: boolean,
    errors: any,
    data: any
}

export interface resultGet<T> {
    items: T[],
    totalCount: number,
    filterCount?: number,
}