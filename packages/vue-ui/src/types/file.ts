export type FileMessages = {
  archiveAction?: string;
  archiveConfirmationHeader?: string;
  archiveConfirmationMessage?: string;
  downloadAction?: string;
  editDescriptionAction?: string;
  renameAction?: string;
  deleteAction?: string;
  deleteConfirmationHeader?: string;
  deleteConfirmationMessage?: string;
  downloadCountHeader?: string;
  lastDownloadedAtHeader?: string;
  uploadedByHeader?: string;
  uploadedAtHeader?: string;
  shareAction?: string;
  viewAction?: string;
};

export interface IFile {
  id: number | string;
  originalFileName: string;
  description?: string;
  size?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadedBy: any;
  uploadedAt: number;
  downloadCount?: number;
  lastDownloadedAt?: number;
}

export type TableMessages = {
  searchPlaceholder?: string;
  tableEmpty?: string;
  fileSizeHeader?: string;
} & FileMessages;
