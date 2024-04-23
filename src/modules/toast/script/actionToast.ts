import { storeToast } from "../stores/toast";
import { toast } from "./interface";

export const createToast = (type: string, title: string) => {
    const toast ={
        type: type,
        title: title
    } as toast;
    storeToast().arrayToast.push(toast);
    setTimeout(()=>{
        destroyToast(toast)
    }, 5000)
}
const destroyToast = (toast: toast) => {
    storeToast().arrayToast.pop()
}