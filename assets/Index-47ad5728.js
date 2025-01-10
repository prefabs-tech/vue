import{d as b,a7 as g,K as d,o as f,c as I,w as a,L as e,C as n,M as i,f as t,E as l}from"./index-8e1c3ab6-d459558c.js";import{Y as m,A as _}from"./index-55edaaac.js";import{_ as y}from"./UserPage.vue_vue_type_style_index_0_lang-ca88185c.js";const h={class:"section-content"},S={class:"section-content"},D={class:"section-content"},P={class:"section-content"},F={class:"section-content"},U=b({__name:"Index",setup(R){const{t:p}=g(),u=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],c=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],s=o=>{_({text:p("user.message.invitation.success",{user:o.email}),type:"success"})};return(o,A)=>{const v=d("router-link"),r=d("SshPre");return f(),I(y,{title:o.$t("user.label.invitationForm"),class:"demo-invitation-form"},{toolbar:a(()=>[e(v,{to:{name:"user"},class:"back"},{default:a(()=>[n(i(o.$t("common.back")),1)]),_:1})]),default:a(()=>[n(),t("section",null,[t("h2",null,i(o.$t("user.label.basic")),1),n(),t("div",h,[e(r,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),e(l(m),{onSubmit:s})])]),n(),t("section",null,[t("h2",null,i(o.$t("user.label.withAppField")),1),n(),t("div",S,[e(r,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),e(l(m),{apps:c,onSubmit:s})])]),n(),t("section",null,[t("h2",null,i(o.$t("user.label.withRoleField")),1),n(),t("div",D,[e(r,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),e(l(m),{roles:u,onSubmit:s})])]),n(),t("section",null,[t("h2",null,i(o.$t("user.label.withExpiryDate")),1),n(),t("div",P,[e(r,{language:"html-vue"},{default:a(()=>[n(`
          <template>
            <InvitationForm
              :roles="roles"
              expiry-mode="calendar"
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)]),_:1}),n(),e(l(m),{roles:u,"expiry-mode":"calendar",onSubmit:s})])]),n(),t("section",null,[t("h2",null,i(o.$t("user.label.withExpiryDays")),1),n(),t("div",F,[e(r,{language:"html-vue"},{default:a(()=>[n(`
          <template>
            <InvitationForm
              :roles="roles"
              expiry-mode="days"
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)]),_:1}),n(),e(l(m),{roles:u,"expiry-mode":"days",onSubmit:s})])])]),_:1},8,["title"])}}});export{U as default};
