

export interface IUploadSInitStep {
  onChange: (files: File[]) => void;
  myFiles: File[]
  removeFile: (file: File) => void;
  removeAll: () => void;
}

export interface IModal {
  open: boolean;
  onClose?: () => void;
}