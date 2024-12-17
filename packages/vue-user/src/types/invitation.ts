interface InvitationAppOption {
  id: number;
  name: string;
  origin: string;
  supportedRoles: InvitationRoleOption[];
  label?: string;
}

interface InvitationPayload {
  email: string;
  role: string;
  appId?: number;
}

interface InvitationRoleOption {
  name: string;
  id: number;
}

export type { InvitationAppOption, InvitationPayload, InvitationRoleOption };
