import{d as m,A as u,e as d,o as v,w as n,E as e,f as s,t as p,i as a,u as o,R as b,p as f}from"./index-kD9y12Hd.js";import{_ as c}from"./UserPage.vue_vue_type_style_index_0_lang-DsxbFAWK.js";import{i as y}from"./data-C1SmRPuO.js";const g={class:"section-content"},k=m({__name:"InvitationTable",setup(B){const l=["email","app","role","invitedBy","expiresAt","status"];return(t,i)=>{const r=u("SshPre");return v(),d(c,{title:t.$t("user.label.invitationTable"),class:"demo-invitation-table"},{toolbar:n(()=>[a(o(f),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:i[0]||(i[0]=C=>t.$router.push("/user"))},null,8,["label"])]),default:n(()=>[i[4]||(i[4]=e()),s("section",null,[s("h2",null,p(t.$t("user.label.basic")),1),i[3]||(i[3]=e()),s("div",g,[a(o(b),{"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":t.$t("user.label.inviteUser"),invitations:o(y),"visible-columns":l},null,8,["invitation-modal-title","invitations"]),i[2]||(i[2]=e()),a(r,{language:"html-vue"},{default:n(()=>i[1]||(i[1]=[e(`
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
