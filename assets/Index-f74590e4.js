import{d as b,a5 as g,J as d,o as f,c as I,w as a,K as e,W as n,L as i,f as t,D as l}from"./index-729398ab-c88618b2.js";import{l as m,A as _}from"./index-9744a5b9.js";import{_ as y}from"./UserPage.vue_vue_type_style_index_0_lang-0c257b59.js";const h={class:"section-content"},S={class:"section-content"},D={class:"section-content"},P={class:"section-content"},F={class:"section-content"},U=b({__name:"Index",setup(R){const{t:p}=g(),u=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],c=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],s=o=>{_({text:p("user.message.invitation.success",{user:o.email}),type:"success"})};return(o,A)=>{const v=d("router-link"),r=d("SshPre");return f(),I(y,{title:o.$t("user.label.invitationForm"),class:"demo-invitation-form"},{toolbar:a(()=>[e(v,{to:{name:"user"},class:"back"},{default:a(()=>[n(i(o.$t("common.back")),1)]),_:1})]),default:a(()=>[n(),t("section",null,[t("h2",null,i(o.$t("user.label.basic")),1),n(),t("div",h,[e(l(m),{onSubmit:s}),n(),e(r,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,i(o.$t("user.label.withAppField")),1),n(),t("div",S,[e(l(m),{apps:c,onSubmit:s}),n(),e(r,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,i(o.$t("user.label.withRoleField")),1),n(),t("div",D,[e(l(m),{roles:u,onSubmit:s}),n(),e(r,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,i(o.$t("user.label.withExpiryDate")),1),n(),t("div",P,[e(l(m),{roles:u,"expiry-mode":"calendar",onSubmit:s}),n(),e(r,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,i(o.$t("user.label.withExpiryDays")),1),n(),t("div",F,[e(l(m),{roles:u,"expiry-mode":"days",onSubmit:s}),n(),e(r,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])])]),_:1},8,["title"])}}});export{U as default};
