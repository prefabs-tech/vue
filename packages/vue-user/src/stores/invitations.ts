import { defineStore } from "pinia";

import {
  acceptInvitation as doAcceptInvitation,
  createInvitation as doCreateInvitation,
  deleteInvitation as doDeleteInvitation,
  getAllInvitations as doGetAllInvitations,
  getInvitationById as doGetInvitationById,
  getInvitationByToken as doGetInvitationByToken,
  revokeInvitation as doRevokeInvitation,
} from "../api/invitations";

import type { Invitation } from "../types";

const useInvitationsStore = defineStore("invitations", () => {
  const acceptInvitation = async (token: string, apiBaseUrl: string) => {
    return await doAcceptInvitation(token, apiBaseUrl);
  };

  const createInvitation = async (
    data: Partial<Invitation>,
    apiBaseUrl: string
  ) => {
    return await doCreateInvitation(data, apiBaseUrl);
  };

  const deleteInvitation = async (id: number, apiBaseUrl: string) => {
    return await doDeleteInvitation(id, apiBaseUrl);
  };

  const getAllInvitations = async (apiBaseUrl: string) => {
    return await doGetAllInvitations(apiBaseUrl);
  };

  const getInvitationById = async (id: number, apiBaseUrl: string) => {
    return await doGetInvitationById(id, apiBaseUrl);
  };

  const getInvitationByToken = async (token: string, apiBaseUrl: string) => {
    return await doGetInvitationByToken(token, apiBaseUrl);
  };

  const revokeInvitation = async (id: number, apiBaseUrl: string) => {
    return await doRevokeInvitation(id, apiBaseUrl);
  };

  return {
    acceptInvitation,
    createInvitation,
    deleteInvitation,
    getAllInvitations,
    getInvitationById,
    getInvitationByToken,
    revokeInvitation,
  };
});

export default useInvitationsStore;
