import{d as m,L as v,M as b,o as f,e as g,f as a,h as o,t as D,z as i,a as s,u as p,$ as y,i as l}from"./index-C7ch2MF9.js";import{b as S}from"./data-CPcWa_8W.js";import{_ as T}from"./UserPage.vue_vue_type_style_index_0_lang-DyEJi5k2.js";import{_ as U}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-ClDG4-uz.js";import"./PrefabsTechVue3TanstackTable.es-BbS_od31.js";import"./PrefabsTechVue3Form.es-BmJfIqTO.js";const A={class:"section-content"},C={name:"UsersTableDemo"},P=m({...C,setup(I){const u=["email","name","roles","signedUpAt","disabled"],{t}=v(),d=l(()=>[{description:t("user.documentation.eventDescription.invitation.actionCustom"),name:"action:custom",payload:"rowData: { action: string; data: UserType }"},{description:t("user.documentation.eventDescription.invitation.fetchUsers"),name:"fetch:users",payload:"-"},{description:t("user.documentation.eventDescription.invitation.closeInvitation"),name:"on:closeInvitation",payload:"-"},{description:t("user.documentation.eventDescription.invitation.submitted"),name:"submitted",payload:"-"},{description:t("user.documentation.eventDescription.invitation.updateRequest"),name:"update:request",payload:"request: TRequestJSON"}]),c=l(()=>[{default:"-",description:t("user.documentation.propsDescription.invitation.apps"),prop:"apps",type:"InvitationAppOption[]"},{default:"-",description:t("user.documentation.propsDescription.invitation.columnsData"),prop:"columnsData",type:"TableColumnDefinition[]"},{default:"-",description:t("user.documentation.propsDescription.invitation.dataActionMenu"),prop:"dataActionMenu",type:"DataActionsMenuItem[] | (defaultActionsMenu: DataActionsMenuItem[]) => DataActionsMenuItem[]"},{default:"-",description:t("user.documentation.propsDescription.invitation.expiryMode"),prop:"expiryMode",type:'"calendar" | "days"'},{default:'"users-table"',description:t("user.documentation.propsDescription.invitation.id"),prop:"id",type:"String"},{default:"-",description:t("user.documentation.propsDescription.invitation.initialSorting"),prop:"initialSorting",type:"SortingState"},{default:"-",description:t("user.documentation.propsDescription.invitation.invitationModalTitle"),prop:"invitationModalTitle",type:"String"},{default:"false",description:t("user.documentation.propsDescription.invitation.isLoading"),prop:"isLoading",type:"Boolean"},{default:"false",description:t("user.documentation.propsDescription.invitation.isServerTable"),prop:"isServerTable",type:"Boolean"},{default:"true",description:t("user.documentation.propsDescription.invitation.persistState"),prop:"persistState",type:"Boolean"},{default:'"localStorage"',description:t("user.documentation.propsDescription.invitation.persistStateStorage"),prop:"persistStateStorage",type:'"localStorage" | "sessionStorage"'},{default:"-",description:t("user.documentation.propsDescription.invitation.roles"),prop:"roles",type:"InvitationRoleOption[]"},{default:"true",description:t("user.documentation.propsDescription.invitation.showInviteAction"),prop:"showInviteAction",type:"Boolean"},{default:"-",description:t("user.documentation.propsDescription.invitation.submitLabel"),prop:"submitLabel",type:"String"},{default:"-",description:t("user.documentation.propsDescription.invitation.tableOptions"),prop:"tableOptions",type:"Object"},{default:"0",description:t("user.documentation.propsDescription.invitation.totalRecords"),prop:"totalRecords",type:"Number"},{default:"-",description:t("user.documentation.propsDescription.invitation.users"),prop:"users",type:"UserType[]"},{default:"-",description:t("user.documentation.propsDescription.invitation.visibleColumns"),prop:"visibleColumns",type:"string[]"}]);return(n,e)=>{const r=b("SshPre");return f(),g(T,{subtitle:n.$t("user.subtitle.usersTable"),title:n.$t("user.label.usersTable"),class:"demo-users-table"},{default:a(()=>[o("section",null,[o("h2",null,D(n.$t("user.label.basic")),1),e[2]||(e[2]=i()),o("div",A,[s(p(y),{id:"users-table","initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":n.$t("user.label.inviteUser"),users:p(S),"visible-columns":u},null,8,["invitation-modal-title","users"]),e[1]||(e[1]=i()),s(r,{language:"html-vue"},{default:a(()=>[...e[0]||(e[0]=[i(`
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
        `,-1)])]),_:1})])]),e[4]||(e[4]=i()),s(U,{"events-data":d.value,"props-data":c.value,"props-table-title":n.$t("common.properties",{value:"UsersTableProperties"})},null,8,["events-data","props-data","props-table-title"]),e[5]||(e[5]=i()),o("section",null,[s(r,{language:"html-vue"},{default:a(()=>[...e[3]||(e[3]=[i(`
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
      `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{P as default};
