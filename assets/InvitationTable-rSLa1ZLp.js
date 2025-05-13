import{d as m,H as u,e as d,o as v,h as n,B as e,f as a,t as p,g as s,u as o,a0 as b,q as f}from"./index-v8URLa41.js";import{_ as c}from"./UserPage.vue_vue_type_style_index_0_lang-BBO9BL6i.js";import{i as g}from"./data-G7xVDYni.js";const y={class:"section-content"},k=m({__name:"InvitationTable",setup(B){const l=["email","app","role","invitedBy","expiresAt","status"];return(i,t)=>{const r=u("SshPre");return v(),d(c,{title:i.$t("user.label.invitationTable"),class:"demo-invitation-table"},{toolbar:n(()=>[s(o(f),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=C=>i.$router.push("/user"))},null,8,["label"])]),default:n(()=>[t[4]||(t[4]=e()),a("section",null,[a("h2",null,p(i.$t("user.label.basic")),1),t[3]||(t[3]=e()),a("div",y,[s(o(b),{"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":i.$t("user.label.inviteUser"),invitations:o(g),"visible-columns":l},null,8,["invitation-modal-title","invitations"]),t[2]||(t[2]=e()),s(r,{language:"html-vue"},{default:n(()=>t[1]||(t[1]=[e(`
          <template>
            <InvitationTable
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
            />
          </template>

          <script setup lang="ts">
          import { InvitationTable } from "@dzangolab/vue3-user";

          import { invitations } from "../Table/data";

          const visibleColumns = [
            "email",
            "app",
            "role",
            "invitedBy",
            "expiresAt",
            "status",
          ];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{k as default};
