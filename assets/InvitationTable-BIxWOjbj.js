import{d as m,z as u,e as v,o as p,w as n,D as e,f as a,t as d,i as o,u as s,P as b,j as f}from"./index-XH3PV4Vq.js";import{_ as c}from"./UserPage.vue_vue_type_style_index_0_lang-7Y64nyRn.js";import{i as g}from"./data-C1SmRPuO.js";const $={class:"section-content"},y=m({__name:"InvitationTable",setup(T){const l=["email","app","role","invitedBy","expiresAt","status"];return(i,t)=>{const r=u("SshPre");return p(),v(c,{title:i.$t("user.label.invitationTable"),class:"demo-invitation-table"},{toolbar:n(()=>[o(s(f),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=C=>i.$router.push("/user"))},null,8,["label"])]),default:n(()=>[t[4]||(t[4]=e()),a("section",null,[a("h2",null,d(i.$t("user.label.basic")),1),t[3]||(t[3]=e()),a("div",$,[o(s(b),{"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":i.$t("user.label.inviteUser"),invitations:s(g),"visible-columns":l},null,8,["invitation-modal-title","invitations"]),t[2]||(t[2]=e()),o(r,{language:"html-vue"},{default:n(()=>t[1]||(t[1]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{y as default};
