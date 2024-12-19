export interface defaultResponse {
    statusCode: number,
    status: boolean,
    errors: any,
    data: any
}

export interface ResultGet<T> {
    items: T[],
    totalCount: number,
    filterCount?: number,
}