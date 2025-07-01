import{d as m,I as p,e as d,o as u,i as s,E as e,f as n,t as v,g as o,u as a,$ as b,x as f}from"./index-CcZ_F--3.js";import{a as c}from"./data-CPcWa_8W.js";import{_ as g}from"./UserPage.vue_vue_type_style_index_0_lang-DPqoEoi9.js";import{i as y}from"./data-gOxi8Wva.js";const $={class:"section-content"},k=m({__name:"InvitationTable",setup(B){const l=["email","appId","role","invitedBy","expiresAt","status"];return(t,i)=>{const r=p("SshPre");return u(),d(g,{title:t.$t("user.label.invitationTable"),class:"demo-invitation-table"},{toolbar:s(()=>[o(a(f),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:i[0]||(i[0]=C=>t.$router.push("/user"))},null,8,["label"])]),default:s(()=>[i[4]||(i[4]=e()),n("section",null,[n("h2",null,v(t.$t("user.label.basic")),1),i[3]||(i[3]=e()),n("div",$,[o(a(b),{apps:a(c),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":t.$t("user.label.inviteUser"),invitations:a(y),"visible-columns":l},null,8,["apps","invitation-modal-title","invitations"]),i[2]||(i[2]=e()),o(r,{language:"html-vue"},{default:s(()=>i[1]||(i[1]=[e(`
          <template>
            <InvitationTable
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
            />
          </template>

          <script setup lang="ts">
          import { InvitationTable } from "@dzangolab/vue3-user";

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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{k as default};
