export type FileMessages = {
  archiveAction?: string;
  archiveConfirmationHeader?: string;
  archiveConfirmationMessage?: string;
  deleteAction?: string;
  deleteConfirmationHeader?: string;
  deleteConfirmationMessage?: string;
  downloadAction?: string;
  downloadCountHeader?: string;
  editDescriptionAction?: string;
  lastDownloadedAtHeader?: string;
  renameAction?: string;
  shareAction?: string;
  uploadedAtHeader?: string;
  uploadedByHeader?: string;
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

export type TableMessages = FileMessages & {
  fileSizeHeader?: string;
  searchPlaceholder?: string;
  tableEmpty?: string;
};
