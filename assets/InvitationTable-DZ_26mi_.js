import{d as m,I as p,e as d,o as u,i as s,E as e,f as n,t as v,g as o,u as a,a0 as b,x as f}from"./index-DcmBGXRe.js";import{a as c}from"./data-CPcWa_8W.js";import{_ as g}from"./UserPage.vue_vue_type_style_index_0_lang-CrDxSEks.js";import{i as y}from"./data-gOxi8Wva.js";const B={class:"section-content"},k=m({__name:"InvitationTable",setup(C){const l=["email","appId","role","invitedBy","expiresAt","status"];return(i,t)=>{const r=p("SshPre");return u(),d(g,{title:i.$t("user.label.invitationTable"),class:"demo-invitation-table"},{toolbar:s(()=>[o(a(f),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=I=>i.$router.push("/user"))},null,8,["label"])]),default:s(()=>[t[4]||(t[4]=e()),n("section",null,[n("h2",null,v(i.$t("user.label.basic")),1),t[3]||(t[3]=e()),n("div",B,[o(a(b),{id:"invitation-table",apps:a(c),"columns-data":[{accessorKey:"invitedBy",maxWidth:"20rem",minWidth:"20rem",width:"20rem"}],"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":i.$t("user.label.inviteUser"),invitations:a(y),"visible-columns":l,"persist-state":""},null,8,["apps","invitation-modal-title","invitations"]),t[2]||(t[2]=e()),o(r,{language:"html-vue"},{default:s(()=>t[1]||(t[1]=[e(`
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
