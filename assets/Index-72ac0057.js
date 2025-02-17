import{d as v,a5 as b,J as g,o as f,c as I,w as a,K as e,D as i,ao as y,W as n,f as t,L as r}from"./index-729398ab-b294403d.js";import{h as m,A as h}from"./index-2f56db22.js";import{_ as S}from"./UserPage.vue_vue_type_style_index_0_lang-d4ecfef6.js";const _={class:"section-content"},D={class:"section-content"},P={class:"section-content"},F={class:"section-content"},R={class:"section-content"},$=v({__name:"Index",setup(A){const{t:d}=b(),u=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],c=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],s=o=>{h({text:d("user.message.invitation.success",{user:o.email}),type:"success"})};return(o,p)=>{const l=g("SshPre");return f(),I(S,{title:o.$t("user.label.invitationForm"),class:"demo-invitation-form"},{toolbar:a(()=>[e(i(y),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:p[0]||(p[0]=z=>o.$router.push("/user"))},null,8,["label"])]),default:a(()=>[n(),t("section",null,[t("h2",null,r(o.$t("user.label.basic")),1),n(),t("div",_,[e(i(m),{onSubmit:s}),n(),e(l,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,r(o.$t("user.label.withAppField")),1),n(),t("div",D,[e(i(m),{apps:c,onSubmit:s}),n(),e(l,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,r(o.$t("user.label.withRoleField")),1),n(),t("div",P,[e(i(m),{roles:u,onSubmit:s}),n(),e(l,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,r(o.$t("user.label.withExpiryDate")),1),n(),t("div",F,[e(i(m),{roles:u,"expiry-mode":"calendar",onSubmit:s}),n(),e(l,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,r(o.$t("user.label.withExpiryDays")),1),n(),t("div",R,[e(i(m),{roles:u,"expiry-mode":"days",onSubmit:s}),n(),e(l,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])])]),_:1},8,["title"])}}});export{$ as default};
