export interface Role {
  permissions: string[];
  role: string;
}

export interface RolePermissionsInput {
  permissions?: string[];
  role: string;
}
