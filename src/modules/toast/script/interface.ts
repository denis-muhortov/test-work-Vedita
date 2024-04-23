export interface toast{
    type: string,
    title: string
}
export interface toastType{
    success: string,
    info: string,
    warning: string,
    error: string,
}
export interface arrayToast extends Array<toast>{}