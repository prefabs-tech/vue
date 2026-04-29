import{d as m,u as v,r as b,o as f,h as y,w as s,a as o,t as g,b as n,e as a,f as r,B as D,k as l}from"./index-DLqblxUV.js";import{a as I}from"./data-CPcWa_8W.js";import{_ as S}from"./UserPage.vue_vue_type_style_index_0_lang-BQaaG7ys.js";import{_ as O}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Cbg9pBb_.js";import{i as A}from"./data-Ds_gM0N4.js";import"./PrefabsTechVue3TanstackTable.es-mCRN2yKV.js";const T={class:"section-content"},B={name:"InvitationTableDemo"},$=m({...B,setup(C){const{t}=v(),d=["email","appId","role","invitedBy","expiresAt","status"],u=l(()=>[{description:t("user.documentation.eventDescription.invitation.delete"),name:"action:delete",payload:"invitation: Invitation"},{description:t("user.documentation.eventDescription.invitation.resend"),name:"action:resend",payload:"invitation: Invitation"},{description:t("user.documentation.eventDescription.invitation.revoke"),name:"action:revoke",payload:"invitation: Invitation"},{description:t("user.documentation.eventDescription.invitation.closeInvitation"),name:"on:closeInvitation",payload:"void"},{description:t("user.documentation.eventDescription.invitation.submitted"),name:"submitted",payload:"void"},{description:t("user.documentation.eventDescription.invitation.updateRequest"),name:"update:request",payload:"request: TRequestJSON"}]),c=l(()=>[{default:"-",description:t("user.documentation.propsDescription.invitation.appFilterOptions"),prop:"appFilterOptions",type:"Array<FilterOption>"},{default:"-",description:t("user.documentation.propsDescription.invitation.apps"),prop:"apps",type:"Array<InvitationAppOption>"},{default:"-",description:t("user.documentation.propsDescription.invitation.columnsData"),prop:"columnsData",type:"TableColumnDefinition<any>[]"},{default:"-",description:t("user.documentation.propsDescription.invitation.expiryMode"),prop:"expiryMode",type:'"calendar" | "days"'},{default:'"invitation-table"',description:t("user.documentation.propsDescription.invitation.id"),prop:"id",type:"String"},{default:"-",description:t("user.documentation.propsDescription.invitation.initialSorting"),prop:"initialSorting",type:"SortingState"},{default:"-",description:t("user.documentation.propsDescription.invitation.invitationModalTitle"),prop:"invitationModalTitle",type:"String"},{default:"-",description:t("user.documentation.propsDescription.invitation.invitations"),prop:"invitations",type:"Invitation[]"},{default:"false",description:t("user.documentation.propsDescription.invitation.isLoading"),prop:"isLoading",type:"Boolean"},{default:"false",description:t("user.documentation.propsDescription.invitation.isServerTable"),prop:"isServerTable",type:"Boolean"},{default:"true",description:t("user.documentation.propsDescription.invitation.persistState"),prop:"persistState",type:"Boolean"},{default:'"localStorage"',description:t("user.documentation.propsDescription.invitation.persistStateStorage"),prop:"persistStateStorage",type:'"localStorage" | "sessionStorage"'},{default:"-",description:t("user.documentation.propsDescription.invitation.roleFilterOptions"),prop:"roleFilterOptions",type:"Array<FilterOption>"},{default:"-",description:t("user.documentation.propsDescription.invitation.roles"),prop:"roles",type:"Array<InvitationRoleOption>"},{default:"true",description:t("user.documentation.propsDescription.invitation.showInviteAction"),prop:"showInviteAction",type:"Boolean"},{default:"-",description:t("user.documentation.propsDescription.invitation.statutsFilterOptions"),prop:"statusFilterOptions",type:"Array<FilterOption>"},{default:"-",description:t("user.documentation.propsDescription.invitation.submitLabel"),prop:"submitLabel",type:"String"},{default:"-",description:t("user.documentation.propsDescription.invitation.tableOptions"),prop:"tableOptions",type:"Object"},{default:"0",description:t("user.documentation.propsDescription.invitation.totalRecords"),prop:"totalRecords",type:"Number"},{default:"-",description:t("user.documentation.propsDescription.invitation.visibleColumns"),prop:"visibleColumns",type:"string[]"}]);return(e,i)=>{const p=b("SshPre");return f(),y(S,{subtitle:e.$t("user.subtitle.invitationTable"),title:e.$t("user.label.invitationTable"),class:"demo-invitation-table"},{default:s(()=>[o("section",null,[o("h2",null,g(e.$t("user.label.basic")),1),i[2]||(i[2]=n()),o("div",T,[a(r(D),{id:"invitation-table",apps:r(I),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":e.$t("user.label.inviteUser"),invitations:r(A),"visible-columns":d},null,8,["apps","invitation-modal-title","invitations"]),i[1]||(i[1]=n()),a(p,{language:"html-vue"},{default:s(()=>[...i[0]||(i[0]=[n(`
          <template>
            <InvitationTable
              id="invitation-table"
              :apps="apps"
              :columns-data="[{
                accessorKey: 'invitedBy',
                maxWidth: '20rem',
                minWidth: '20rem',
                width: '20rem',
              }]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :invitations="invitations"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite user"
            />
          </template>

          <script setup lang="ts">
          import { InvitationTable } from "@prefabs.tech/vue3-user";

          import { invitations } from "../Table/data";

          const visibleColumns = [
            "email",
            "appId",
            "role",
            "invitedBy",
            "expiresAt",
            "status",
          ];
          <\/script>
        `,-1)])]),_:1})])]),i[4]||(i[4]=n()),a(O,{"events-data":u.value,"props-data":c.value,"props-table-title":e.$t("common.properties",{value:"InvitationTableProperties"})},null,8,["events-data","props-data","props-table-title"]),i[5]||(i[5]=n()),o("section",null,[a(p,{language:"html-vue"},{default:s(()=>[...i[3]||(i[3]=[n(`
        interface Invitation {
          acceptedAt: number | null;
          appId: number;
          createdAt: number;
          email: string;
          expiresAt: number;
          id: number;
          invitedBy?: UserType;
          invitedById: string;
          payload: Record<string, unknown>;
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
      `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{$ as default};
