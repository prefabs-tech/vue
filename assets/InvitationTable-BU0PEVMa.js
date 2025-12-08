import{d as m,L as p,e as d,o as v,j as s,C as e,f as n,t as u,h as o,u as a,$ as b,v as f}from"./index-CmpcxswC.js";import{a as c}from"./data-CPcWa_8W.js";import{_ as C}from"./UserPage.vue_vue_type_style_index_0_lang-BX_BiOPR.js";import{i as y}from"./data-gOxi8Wva.js";const $={class:"section-content"},x=m({__name:"InvitationTable",setup(h){const l=["email","appId","role","invitedBy","expiresAt","status"];return(t,i)=>{const r=p("SshPre");return v(),d(C,{title:t.$t("user.label.invitationTable"),class:"demo-invitation-table"},{toolbar:s(()=>[o(a(f),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:i[0]||(i[0]=B=>t.$router.push("/user"))},null,8,["label"])]),default:s(()=>[i[4]||(i[4]=e()),n("section",null,[n("h2",null,u(t.$t("user.label.basic")),1),i[3]||(i[3]=e()),n("div",$,[o(a(b),{id:"invitation-table",apps:a(c),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":t.$t("user.label.inviteUser"),invitations:a(y),"visible-columns":l},null,8,["apps","invitation-modal-title","invitations"]),i[2]||(i[2]=e()),o(r,{language:"html-vue"},{default:s(()=>i[1]||(i[1]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{x as default};
