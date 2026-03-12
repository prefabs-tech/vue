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
  description?: string;
  downloadCount?: number;
  id: number | string;
  lastDownloadedAt?: number;
  originalFileName: string;
  size?: number;
  uploadedAt: number;
  uploadedBy: Record<string, string>;
}

export type TableMessages = {
  searchPlaceholder?: string;
  tableEmpty?: string;
  fileSizeHeader?: string;
} & FileMessages;
