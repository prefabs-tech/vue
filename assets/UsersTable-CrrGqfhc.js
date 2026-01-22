import{d as m,J as u,e as d,o as p,i,f as t,B as l,t as b,h as a,u as o,a0 as f}from"./index-Bb0NF83y.js";import{b as c}from"./data-CPcWa_8W.js";import{_ as v}from"./UserPage.vue_vue_type_style_index_0_lang-81oAGWxH.js";const g={class:"section-content"},B=m({__name:"UsersTable",setup(U){const r=["email","name","roles","signedUpAt","disabled"];return(s,e)=>{const n=u("SshPre");return p(),d(v,{title:s.$t("user.label.usersTable"),class:"demo-users-table"},{default:i(()=>[t("section",null,[t("h2",null,b(s.$t("user.label.basic")),1),e[2]||(e[2]=l()),t("div",g,[a(o(f),{id:"users-table","initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":s.$t("user.label.inviteUser"),users:o(c),"visible-columns":r},null,8,["invitation-modal-title","users"]),e[1]||(e[1]=l()),a(n,{language:"html-vue"},{default:i(()=>e[0]||(e[0]=[l(`
          <template>
            <UsersTable
              id="users-table"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :users="users"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite user"
            />
          </template>

          <script setup lang="ts">
          import { UsersTable } from "@prefabs.tech/vue3-user";

          import { allUsers } from "./data";

          const visibleColumns = [
            "email",
            "name",
            "roles",
            "signedUpAt",
            "disabled",
          ];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{B as default};
