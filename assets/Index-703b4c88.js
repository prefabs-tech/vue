import{d as g,a6 as b,K as u,o as f,c as _,w as a,L as o,C as n,M as i,f as t,E as m}from"./index-66214709-91038599.js";import{$ as l,A as I}from"./index-280454ac.js";import{_ as S}from"./UserPage.vue_vue_type_style_index_0_lang-f458f1e7.js";const h={class:"section-content"},R={class:"section-content"},A={class:"section-content"},E=g({__name:"Index",setup(D){const{t:d}=b(),p=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],c=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],s=e=>{I({text:d("user.message.invitation.success",{user:e.email}),type:"success"})};return(e,P)=>{const v=u("router-link"),r=u("SshPre");return f(),_(S,{title:e.$t("user.label.invitationForm"),class:"demo-invitation-form"},{toolbar:a(()=>[o(v,{to:{name:"user"},class:"back"},{default:a(()=>[n(i(e.$t("common.back")),1)]),_:1})]),default:a(()=>[n(),t("section",null,[t("h2",null,i(e.$t("user.label.basic")),1),n(),t("div",h,[o(r,{language:"html-vue"},{default:a(()=>[n(`
          <template>
            <InvitationForm @submit="onSubmit" />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)]),_:1}),n(),o(m(l),{onSubmit:s})])]),n(),t("section",null,[t("h2",null,i(e.$t("user.label.withAppField")),1),n(),t("div",R,[o(r,{language:"html-vue"},{default:a(()=>[n(`
          <template>
            <InvitationForm :apps="apps" @submit="onSubmit" />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

          const apps = [
            {
              id: 1,
              name: "Admin",
              origin: "admin-origin",
              supportedRoles: [
                {
                  id: 1,
                  name: "ADMIN",
                },
                {
                  id: 2,
                  name: "SUPERADMIN",
                },
              ],
            },
            {
              id: 2,
              name: "User",
              origin: "user-origin",
              supportedRoles: [
                {
                  id: 3,
                  name: "USER",
                },
              ],
            },
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)]),_:1}),n(),o(m(l),{apps:c,onSubmit:s})])]),n(),t("section",null,[t("h2",null,i(e.$t("user.label.withRoleField")),1),n(),t("div",A,[o(r,{language:"html-vue"},{default:a(()=>[n(`
          <template>
            <InvitationForm :roles="roles" @submit="onSubmit" />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

          const roles = [
            {
              id: 1,
              name: "ADMIN",
            },
            {
              id: 2,
              name: "SUPERADMIN",
            },
            {
              id: 3,
              name: "USER",
            },
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)]),_:1}),n(),o(m(l),{roles:p,onSubmit:s})])])]),_:1},8,["title"])}}});export{E as default};
