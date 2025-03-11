import{d as r,z as m,e as u,o as v,w as n,D as e,f as a,t as p,i as o,u as s,P as d,j as f}from"./index-C-Eehmak.js";import{_ as b}from"./UserPage.vue_vue_type_style_index_0_lang-CiBCOuaO.js";import{i as g}from"./data-C1SmRPuO.js";const $={class:"section-content"},z=r({__name:"InvitationTable",setup(c){return(i,t)=>{const l=m("SshPre");return v(),u(b,{title:i.$t("user.label.invitationTable"),class:"demo-invitation-table"},{toolbar:n(()=>[o(s(f),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=T=>i.$router.push("/user"))},null,8,["label"])]),default:n(()=>[t[4]||(t[4]=e()),a("section",null,[a("h2",null,p(i.$t("user.label.basic")),1),t[3]||(t[3]=e()),a("div",$,[o(s(d),{"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":i.$t("user.label.inviteUser"),invitations:s(g)},null,8,["invitation-modal-title","invitations"]),t[2]||(t[2]=e()),o(l,{language:"html-vue"},{default:n(()=>t[1]||(t[1]=[e(`
          <template>
            <InvitationTable
              :initial-sorting="[{ id: 'email', desc: false }]"
              :invitations="invitations"
              invitation-modal-title="Invite a user" 
            />
          </template>

          <script setup lang="ts">
          import { InvitationTable } from "@dzangolab/vue3-user";

          import { invitations } from "../Table/data";
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{z as default};
