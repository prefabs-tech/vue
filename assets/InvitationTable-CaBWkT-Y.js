import{d as m,M as p,o as d,e as v,f as n,h as e,t as u,z as a,a as o,u as s,Z as c}from"./index-CFIu6tXg.js";import{a as b}from"./data-CPcWa_8W.js";import{_ as f}from"./UserPage.vue_vue_type_style_index_0_lang-DjyVU2OW.js";import{i as _}from"./data-Ds_gM0N4.js";const h={class:"section-content"},y={name:"InvitationTableDemo"},x=m({...y,setup(B){const l=["email","appId","role","invitedBy","expiresAt","status"];return(i,t)=>{const r=p("SshPre");return d(),v(f,{title:i.$t("user.label.invitationTable"),class:"demo-invitation-table"},{default:n(()=>[e("section",null,[e("h2",null,u(i.$t("user.label.basic")),1),t[2]||(t[2]=a()),e("div",h,[o(s(c),{id:"invitation-table",apps:s(b),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":i.$t("user.label.inviteUser"),invitations:s(_),"visible-columns":l},null,8,["apps","invitation-modal-title","invitations"]),t[1]||(t[1]=a()),o(r,{language:"html-vue"},{default:n(()=>[...t[0]||(t[0]=[a(`
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{x as default};
