import{d as m,I as u,e as d,o as p,i as l,E as t,f as i,t as b,g as a,u as o,a0 as f,x as v}from"./index-tzCncWcY.js";import{b as g}from"./data-CPcWa_8W.js";import{_ as c}from"./UserPage.vue_vue_type_style_index_0_lang-CVpWNxeL.js";const U={class:"section-content"},N=m({__name:"UsersTable",setup(C){const n=["email","name","roles","signedUpAt","disabled"];return(s,e)=>{const r=u("SshPre");return p(),d(c,{title:s.$t("user.label.usersTable"),class:"demo-users-table"},{toolbar:l(()=>[a(o(v),{label:s.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=$=>s.$router.push("/user"))},null,8,["label"])]),default:l(()=>[e[4]||(e[4]=t()),i("section",null,[i("h2",null,b(s.$t("user.label.basic")),1),e[3]||(e[3]=t()),i("div",U,[a(o(f),{id:"users-table","initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":s.$t("user.label.inviteUser"),users:o(g),"visible-columns":n,"persist-state":""},null,8,["invitation-modal-title","users"]),e[2]||(e[2]=t()),a(r,{language:"html-vue"},{default:l(()=>e[1]||(e[1]=[t(`
          <template>
            <UsersTable
              id="users-table"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :users="users"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite a user"
              persist-state
            />
          </template>

          <script setup lang="ts">
          import { UsersTable } from "@dzangolab/vue3-user";

          import { allUsers } from "./data";

          const visibleColumns = [
            "email",
            "name",
            "roles",
            "signedUpAt",
            "disabled",
          ];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};
