import { IValueType } from "types";
import moment from 'moment'

export const areEqual = (prev: any, next: any) => {
    try {
        return JSON?.stringify(prev) === JSON?.stringify(next);
    } catch (error) {
        // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        //     console.error(error);
        // }
        return false;
    }
};

export const getDataType = (value: any): IValueType =>
    Object.prototype.toString.call(value).slice(8, -1) as IValueType;

export const ValidateDate = (value: any) => {
    return moment(value, "YYYY-MM-DD", true).isValid()
}

export function colName(n: any) {
    var ordA = "A".charCodeAt(0);
    var ordZ = "Z".charCodeAt(0);
    var len = ordZ - ordA + 1;

    var s = "";
    while (n >= 0) {
        s = String.fromCharCode((n % len) + ordA) + s;
        n = Math.floor(n / len) - 1;
    }
    return s;
}