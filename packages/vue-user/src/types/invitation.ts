import { UserType } from "./auth";

interface Invitation {
  acceptedAt: number | null;
  appId: number;
  createdAt: number;
  email: string;
  expiresAt: number;
  id: number;
  invitedBy?: UserType;
  invitedById: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
  revokedAt: number | null;
  role: string;
  token?: string;
  updatedAt: number;
}

interface InvitationAppOption {
  id: number;
  label?: string;
  name: string;
  origin: string;
  supportedRoles: InvitationRoleOption[];
}

interface InvitationPayload {
  appId?: number;
  email: string;
  expiresAt?: Date | string;
  role?: string;
}

interface InvitationRoleOption {
  id: number;
  name: string;
}

export type {
  Invitation,
  InvitationAppOption,
  InvitationPayload,
  InvitationRoleOption,
};
