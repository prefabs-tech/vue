import{d as m,J as p,b as d,o as v,h as n,e,y as a,t as u,g as o,u as s,$ as c}from"./index-CcgkNhek.js";import{a as b}from"./data-CPcWa_8W.js";import{_ as f}from"./UserPage.vue_vue_type_style_index_0_lang-uMyzPju6.js";import{i as h}from"./data-gOxi8Wva.js";const y={class:"section-content"},I=m({__name:"InvitationTable",setup(_){const l=["email","appId","role","invitedBy","expiresAt","status"];return(i,t)=>{const r=p("SshPre");return v(),d(f,{title:i.$t("user.label.invitationTable"),class:"demo-invitation-table"},{default:n(()=>[e("section",null,[e("h2",null,u(i.$t("user.label.basic")),1),t[2]||(t[2]=a()),e("div",y,[o(s(c),{id:"invitation-table",apps:s(b),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":i.$t("user.label.inviteUser"),invitations:s(h),"visible-columns":l},null,8,["apps","invitation-modal-title","invitations"]),t[1]||(t[1]=a()),o(r,{language:"html-vue"},{default:n(()=>[...t[0]||(t[0]=[a(`
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{I as default};
