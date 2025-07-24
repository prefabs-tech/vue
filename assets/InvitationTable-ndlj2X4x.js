import{d as m,J as p,e as d,o as v,i as a,C as e,f as n,t as u,g as o,u as s,a0 as b,v as f}from"./index-DzMrXnDW.js";import{a as c}from"./data-CPcWa_8W.js";import{_ as y}from"./UserPage.vue_vue_type_style_index_0_lang-P2zB75Xf.js";import{i as C}from"./data-gOxi8Wva.js";const g={class:"section-content"},w=m({__name:"InvitationTable",setup(h){const l=["email","appId","role","invitedBy","expiresAt","status"];return(i,t)=>{const r=p("SshPre");return v(),d(y,{title:i.$t("user.label.invitationTable"),class:"demo-invitation-table"},{toolbar:a(()=>[o(s(f),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=B=>i.$router.push("/user"))},null,8,["label"])]),default:a(()=>[t[4]||(t[4]=e()),n("section",null,[n("h2",null,u(i.$t("user.label.basic")),1),t[3]||(t[3]=e()),n("div",g,[o(s(b),{id:"invitation-table",apps:s(c),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":i.$t("user.label.inviteUser"),invitations:s(C),"visible-columns":l,"persist-state":""},null,8,["apps","invitation-modal-title","invitations"]),t[2]||(t[2]=e()),o(r,{language:"html-vue"},{default:a(()=>t[1]||(t[1]=[e(`
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
              invitation-modal-title="Invite a user"
              persist-state
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{w as default};
