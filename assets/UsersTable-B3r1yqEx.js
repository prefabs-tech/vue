import{D as e,E as t,On as n,St as r,_ as i,g as a,k as o,mt as s,qt as c,tr as l,v as u}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{E as d}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{i as f}from"./PrefabsTechVue3User.es-3IhSa1BI.js";import{t as p}from"./ComponentDocumentation-BPcopVAa.js";import{t as m}from"./UserPage-itluPCyW.js";import{t as h}from"./data-DcWUs_Ab.js";var g={class:`section-content`},_=o({name:`UsersTableDemo`,setup(o){let _=[`email`,`name`,`roles`,`signedUpAt`,`disabled`],{t:v}=d(),y=a(()=>[{description:v(`user.documentation.eventDescription.invitation.actionCustom`),name:`action:custom`,payload:`rowData: { action: string; data: UserType }`},{description:v(`user.documentation.eventDescription.invitation.fetchUsers`),name:`fetch:users`,payload:`-`},{description:v(`user.documentation.eventDescription.invitation.closeInvitation`),name:`on:closeInvitation`,payload:`-`},{description:v(`user.documentation.eventDescription.invitation.submitted`),name:`submitted`,payload:`-`},{description:v(`user.documentation.eventDescription.invitation.updateRequest`),name:`update:request`,payload:`request: TRequestJSON`}]),b=a(()=>[{default:`-`,description:v(`user.documentation.propsDescription.invitation.apps`),prop:`apps`,type:`InvitationAppOption[]`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.columnsData`),prop:`columnsData`,type:`TableColumnDefinition[]`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.dataActionMenu`),prop:`dataActionMenu`,type:`DataActionsMenuItem[] | (defaultActionsMenu: DataActionsMenuItem[]) => DataActionsMenuItem[]`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.expiryMode`),prop:`expiryMode`,type:`"calendar" | "days"`},{default:`"users-table"`,description:v(`user.documentation.propsDescription.invitation.id`),prop:`id`,type:`String`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.initialSorting`),prop:`initialSorting`,type:`SortingState`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.invitationModalTitle`),prop:`invitationModalTitle`,type:`String`},{default:`false`,description:v(`user.documentation.propsDescription.invitation.isLoading`),prop:`isLoading`,type:`Boolean`},{default:`false`,description:v(`user.documentation.propsDescription.invitation.isServerTable`),prop:`isServerTable`,type:`Boolean`},{default:`true`,description:v(`user.documentation.propsDescription.invitation.persistState`),prop:`persistState`,type:`Boolean`},{default:`"localStorage"`,description:v(`user.documentation.propsDescription.invitation.persistStateStorage`),prop:`persistStateStorage`,type:`"localStorage" | "sessionStorage"`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.roles`),prop:`roles`,type:`InvitationRoleOption[]`},{default:`true`,description:v(`user.documentation.propsDescription.invitation.showInviteAction`),prop:`showInviteAction`,type:`Boolean`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.submitLabel`),prop:`submitLabel`,type:`String`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.tableOptions`),prop:`tableOptions`,type:`Object`},{default:`0`,description:v(`user.documentation.propsDescription.invitation.totalRecords`),prop:`totalRecords`,type:`Number`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.users`),prop:`users`,type:`UserType[]`},{default:`-`,description:v(`user.documentation.propsDescription.invitation.visibleColumns`),prop:`visibleColumns`,type:`string[]`}]);return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:a.$t(`user.subtitle.usersTable`),title:a.$t(`user.label.usersTable`),class:`demo-users-table`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.basic`)),1),o[2]||=t(),i(`div`,g,[e(n(f),{id:`users-table`,"initial-sorting":[{id:`email`,desc:!1}],"invitation-modal-title":a.$t(`user.label.inviteUser`),users:n(h),"visible-columns":_},null,8,[`invitation-modal-title`,`users`]),o[1]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[0]||=[t(`
          <template>
            <UsersTable
              id="users-table"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :users="users"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite user"
            />
          </template>

          <script setup lang="ts">
          import { UsersTable } from "@prefabs.tech/vue3-user";

          import { allUsers } from "./data";

          const visibleColumns = [
            "email",
            "name",
            "roles",
            "signedUpAt",
            "disabled",
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[4]||=t(),e(p,{"events-data":y.value,"props-data":b.value,"props-table-title":a.$t(`common.properties`,{value:`UsersTableProperties`})},null,8,[`events-data`,`props-data`,`props-table-title`]),o[5]||=t(),i(`section`,null,[e(d,{language:`html-vue`},{default:c(()=>[...o[3]||=[t(`
        interface UserType extends EmailPasswordUserType {
          disabled?: boolean;
          givenName: string | null;
          isEmailVerified?: boolean;
          isProfileCompleted?: boolean;
          lastLoginAt: number;
          middleNames: string | null;
          name: string | null;
          roles: string[] | UserRole[];
          signedUpAt: number;
          surname: string | null;
          thirdParty?: {
            id: string;
            userId: string;
          };
        }
      `,-1)]]),_:1})])]),_:1},8,[`subtitle`,`title`])}}});export{_ as default};