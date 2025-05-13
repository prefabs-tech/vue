import{d as m,H as u,e as d,o as v,h as a,B as i,f as l,t as b,g as n,u as t,aa as g,q as c}from"./index-v8URLa41.js";import{_ as p}from"./UserPage.vue_vue_type_style_index_0_lang-BBO9BL6i.js";const U=[{id:"user-1",email:"john@dzangolab.com",givenName:"John",roles:["USER"],surname:"Doe",username:"johndoe",isActiveUser:!0,invitedBy:null,signedUpAt:"2023-08-10T08:00:00Z",disabled:!1},{id:"invitation-123",email:"jane@dzangolab.com",givenName:"Jane",roles:["ADMIN"],surname:"Smith",username:"janesmith",isActiveUser:!1,invitedBy:{id:"user-2",email:"admin@dzangolab.com",givenName:"Admin",roles:["USER"],surname:"User",username:"admin",isActiveUser:!0},disabled:!0},{id:"user-3",email:"alice@dzangolab.com",givenName:"Alice",roles:["USER"],surname:"Johnson",username:"alicej",isActiveUser:!0,invitedBy:null,signedUpAt:"2023-08-08T10:30:00Z",disabled:!1},{id:"invitation-456",email:"bob@dzangolab.com",givenName:"Bob",roles:["ADMIN"],surname:"Williams",username:"bobw",isActiveUser:!1,disabled:!1,invitedBy:{id:"user-4",email:"charlie@dzangolab.com",givenName:"Charlie",roles:["USER"],surname:"Brown",username:"charlieb",isActiveUser:!0}},{id:"user-6",email:"george@dzangolab.com",givenName:"george",roles:["USER"],surname:"williams",username:"george",isActiveUser:!0,invitedBy:null,signedUpAt:"2023-10-10T08:00:00Z",disabled:!0}],f={class:"section-content"},z=m({__name:"UsersTable",setup(A){const r=["email","name","roles","signedUpAt","status"];return(s,e)=>{const o=u("SshPre");return v(),d(p,{title:s.$t("user.label.usersTable"),class:"demo-users-table"},{toolbar:a(()=>[n(t(c),{label:s.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=N=>s.$router.push("/user"))},null,8,["label"])]),default:a(()=>[e[4]||(e[4]=i()),l("section",null,[l("h2",null,b(s.$t("user.label.basic")),1),e[3]||(e[3]=i()),l("div",f,[n(t(g),{"initial-sorting":[{id:"email",desc:!1}],"invitation-modal-title":s.$t("user.label.inviteUser"),users:t(U),"visible-columns":r},null,8,["invitation-modal-title","users"]),e[2]||(e[2]=i()),n(o,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[i(`
          <template>
            <UsersTable
              :initial-sorting="[{ id: 'email', desc: false }]"
              :users="users"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite a user"
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
            "status",
          ];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{z as default};
