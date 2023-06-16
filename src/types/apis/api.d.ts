
export type ICallback = (results: any) => void;

export interface IPayload {
  formData: any;
  dataKey?: string;
}

export interface IActionPayload {
  payload: IPayload;
  type: string,
  callback?: ICallback;
}