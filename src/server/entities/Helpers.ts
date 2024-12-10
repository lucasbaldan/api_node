export interface defaultResponse {
    acessToken?: string,
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