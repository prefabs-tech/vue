import{D as e,E as t,On as n,St as r,_ as i,g as a,k as o,mt as s,qt as c,tr as l,v as u}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{T as d}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{r as f}from"./PrefabsTechVue3User.es-CdAxx7NP.js";import{t as p}from"./ComponentDocumentation-CFBF3GmY.js";import{i as m}from"./data-D-L-jgMw.js";import{t as h}from"./UserPage-msSnMBuM.js";import{n as g}from"./data-DcWUs_Ab.js";var _={class:`section-content`},v=o({name:`InvitationTableDemo`,setup(o){let{t:v}=d(),y=[`email`,`appId`,`role`,`invitedBy`,`expiresAt`,`status`],b=a(()=>[{description:v(`user.documentation.eventDescription.invitation.delete`),name:`action:delete`,payload:`invitation: Invitation`},{description:v(`user.documentation.eventDescription.invitation.resend`),name:`action:resend`,payload:`invitation: Invitation`},{description:v(`user.documentation.eventDescription.invitation.revoke`),name:`action:revoke`,payload:`invitation: Invitation`},{description:v(`user.documentation.eventDescription.invitation.closeInvitation`),name:`on:closeInvitation`,payload:`void`},{description:v(`user.documentation.eventDescription.invitation.submitted`),name:`submitted`,payload:`void`},{description:v(`user.documentation.eventDescription.invitation.updateRequest`),name:`update:request`,payload:`request: TRequestJSON`}]),x=a(()=>[{default:`-`,description:v(`user.documentation.propsDescription.invitation.appFilterOptions`),prop:`appFilterOptions`,type:`Array<FilterOption>`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.apps`),prop:`apps`,type:`Array<InvitationAppOption>`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.columnsData`),prop:`columnsData`,type:`TableColumnDefinition<any>[]`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.expiryMode`),prop:`expiryMode`,type:`"calendar" | "days"`},{default:`"invitation-table"`,description:v(`user.documentation.propsDescription.invitation.id`),prop:`id`,type:`String`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.initialSorting`),prop:`initialSorting`,type:`SortingState`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.invitationModalTitle`),prop:`invitationModalTitle`,type:`String`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.invitations`),prop:`invitations`,type:`Invitation[]`},{default:`false`,description:v(`user.documentation.propsDescription.invitation.isLoading`),prop:`isLoading`,type:`Boolean`},{default:`false`,description:v(`user.documentation.propsDescription.invitation.isServerTable`),prop:`isServerTable`,type:`Boolean`},{default:`true`,description:v(`user.documentation.propsDescription.invitation.persistState`),prop:`persistState`,type:`Boolean`},{default:`"localStorage"`,description:v(`user.documentation.propsDescription.invitation.persistStateStorage`),prop:`persistStateStorage`,type:`"localStorage" | "sessionStorage"`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.roleFilterOptions`),prop:`roleFilterOptions`,type:`Array<FilterOption>`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.roles`),prop:`roles`,type:`Array<InvitationRoleOption>`},{default:`true`,description:v(`user.documentation.propsDescription.invitation.showInviteAction`),prop:`showInviteAction`,type:`Boolean`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.statutsFilterOptions`),prop:`statusFilterOptions`,type:`Array<FilterOption>`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.submitLabel`),prop:`submitLabel`,type:`String`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.tableOptions`),prop:`tableOptions`,type:`Object`},{default:`0`,description:v(`user.documentation.propsDescription.invitation.totalRecords`),prop:`totalRecords`,type:`Number`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.visibleColumns`),prop:`visibleColumns`,type:`string[]`}]);return(a,o)=>{let d=r(`SshPre`);return s(),u(h,{subtitle:a.$t(`user.subtitle.invitationTable`),title:a.$t(`user.label.invitationTable`),class:`demo-invitation-table`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.basic`)),1),o[2]||=t(),i(`div`,_,[e(n(f),{id:`invitation-table`,apps:n(g),"columns-data":[{accessorKey:`invitedBy`,maxWidth:`20rem`,minWidth:`20rem`,width:`20rem`}],"initial-sorting":[{id:`email`,desc:!1}],"invitation-modal-title":a.$t(`user.label.inviteUser`),invitations:n(m),"visible-columns":y},null,8,[`apps`,`invitation-modal-title`,`invitations`]),o[1]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[0]||=[t(`
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
        `,-1)]]),_:1})])]),o[4]||=t(),e(p,{"events-data":b.value,"props-data":x.value,"props-table-title":a.$t(`common.properties`,{value:`InvitationTableProperties`})},null,8,[`events-data`,`props-data`,`props-table-title`]),o[5]||=t(),i(`section`,null,[e(d,{language:`html-vue`},{default:c(()=>[...o[3]||=[t(`
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
      `,-1)]]),_:1})])]),_:1},8,[`subtitle`,`title`])}}});export{v as default};