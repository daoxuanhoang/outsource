import { IDataStore } from "../app";
import { IParamsRequest, IResponse } from "../user";

export type ICallback = (results: any) => void;

export interface IPayload {
  formData: any;
  dataKey?: string;
}

export interface IActionPayload {
  payload: IPayload;
  callback?: ICallback;
}