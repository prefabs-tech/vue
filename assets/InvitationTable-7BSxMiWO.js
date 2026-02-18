import{d as m,M as p,o as d,e as v,f as n,h as e,t as u,z as a,a as o,u as s,$ as c}from"./index-xehVrwF-.js";import{a as b}from"./data-CPcWa_8W.js";import{_ as f}from"./UserPage.vue_vue_type_style_index_0_lang-BAU4_sRq.js";import{i as h}from"./data-Ds_gM0N4.js";const y={class:"section-content"},T=m({__name:"InvitationTable",setup(_){const l=["email","appId","role","invitedBy","expiresAt","status"];return(t,i)=>{const r=p("SshPre");return d(),v(f,{title:t.$t("user.label.invitationTable"),class:"demo-invitation-table"},{default:n(()=>[e("section",null,[e("h2",null,u(t.$t("user.label.basic")),1),i[2]||(i[2]=a()),e("div",y,[o(s(c),{id:"invitation-table",apps:s(b),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":t.$t("user.label.inviteUser"),invitations:s(h),"visible-columns":l},null,8,["apps","invitation-modal-title","invitations"]),i[1]||(i[1]=a()),o(r,{language:"html-vue"},{default:n(()=>[...i[0]||(i[0]=[a(`
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{T as default};
