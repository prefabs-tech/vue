import{d as m,N as u,o as d,e as p,f as i,h as t,t as b,A as l,a,u as o,a0 as f}from"./index-DVqVAY7Y.js";import{b as c}from"./data-CPcWa_8W.js";import{_ as v}from"./UserPage.vue_vue_type_style_index_0_lang-DPOBQnUC.js";const g={class:"section-content"},N=m({__name:"UsersTable",setup(U){const r=["email","name","roles","signedUpAt","disabled"];return(s,e)=>{const n=u("SshPre");return d(),p(v,{title:s.$t("user.label.usersTable"),class:"demo-users-table"},{default:i(()=>[t("section",null,[t("h2",null,b(s.$t("user.label.basic")),1),e[2]||(e[2]=l()),t("div",g,[a(o(f),{id:"users-table","initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":s.$t("user.label.inviteUser"),users:o(c),"visible-columns":r},null,8,["invitation-modal-title","users"]),e[1]||(e[1]=l()),a(n,{language:"html-vue"},{default:i(()=>[...e[0]||(e[0]=[l(`
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{N as default};
