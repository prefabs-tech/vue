import{d as m,H as p,e as d,o as v,j as a,B as e,f as n,t as u,h as o,u as s,a0 as b,v as f}from"./index-DkE3xp_C.js";import{a as c}from"./data-CPcWa_8W.js";import{_ as h}from"./UserPage.vue_vue_type_style_index_0_lang-CT8OckQh.js";import{i as y}from"./data-gOxi8Wva.js";const B={class:"section-content"},x=m({__name:"InvitationTable",setup(C){const l=["email","appId","role","invitedBy","expiresAt","status"];return(i,t)=>{const r=p("SshPre");return v(),d(h,{title:i.$t("user.label.invitationTable"),class:"demo-invitation-table"},{toolbar:a(()=>[o(s(f),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=$=>i.$router.push("/user"))},null,8,["label"])]),default:a(()=>[t[4]||(t[4]=e()),n("section",null,[n("h2",null,u(i.$t("user.label.basic")),1),t[3]||(t[3]=e()),n("div",B,[o(s(b),{id:"invitation-table",apps:s(c),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":i.$t("user.label.inviteUser"),invitations:s(y),"visible-columns":l,"persist-state":""},null,8,["apps","invitation-modal-title","invitations"]),t[2]||(t[2]=e()),o(r,{language:"html-vue"},{default:a(()=>t[1]||(t[1]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{x as default};
