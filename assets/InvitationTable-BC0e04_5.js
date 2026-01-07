import{d as m,J as p,e as d,o as v,i as n,f as e,B as a,t as u,h as o,u as s,$ as c}from"./index-BD1JkeeG.js";import{a as b}from"./data-CPcWa_8W.js";import{_ as f}from"./UserPage.vue_vue_type_style_index_0_lang-BJagt-xa.js";import{i as h}from"./data-gOxi8Wva.js";const B={class:"section-content"},T=m({__name:"InvitationTable",setup(_){const l=["email","appId","role","invitedBy","expiresAt","status"];return(t,i)=>{const r=p("SshPre");return v(),d(f,{title:t.$t("user.label.invitationTable"),class:"demo-invitation-table"},{default:n(()=>[e("section",null,[e("h2",null,u(t.$t("user.label.basic")),1),i[2]||(i[2]=a()),e("div",B,[o(s(c),{id:"invitation-table",apps:s(b),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":t.$t("user.label.inviteUser"),invitations:s(h),"visible-columns":l},null,8,["apps","invitation-modal-title","invitations"]),i[1]||(i[1]=a()),o(r,{language:"html-vue"},{default:n(()=>i[0]||(i[0]=[a(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{T as default};
