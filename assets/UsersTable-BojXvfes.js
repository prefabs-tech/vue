import{d as m,J as u,b as d,o as p,h as i,e as t,y as l,t as b,g as a,u as o,a0 as c}from"./index-ChCRVvjK.js";import{b as f}from"./data-CPcWa_8W.js";import{_ as v}from"./UserPage.vue_vue_type_style_index_0_lang-BcaJSiuO.js";const g={class:"section-content"},$=m({__name:"UsersTable",setup(U){const r=["email","name","roles","signedUpAt","disabled"];return(s,e)=>{const n=u("SshPre");return p(),d(v,{title:s.$t("user.label.usersTable"),class:"demo-users-table"},{default:i(()=>[t("section",null,[t("h2",null,b(s.$t("user.label.basic")),1),e[2]||(e[2]=l()),t("div",g,[a(o(c),{id:"users-table","initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":s.$t("user.label.inviteUser"),users:o(f),"visible-columns":r},null,8,["invitation-modal-title","users"]),e[1]||(e[1]=l()),a(n,{language:"html-vue"},{default:i(()=>[...e[0]||(e[0]=[l(`
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{$ as default};
