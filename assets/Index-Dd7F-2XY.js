import{d as v,x as b,s as g,j as f,o as I,w as a,A as n,e as t,t as r,g as e,u as i,Q as m,B as y,K as h}from"./index-hG40rBrG.js";import{_ as S}from"./UserPage.vue_vue_type_style_index_0_lang-CRyI1v82.js";const _={class:"section-content"},D={class:"section-content"},P={class:"section-content"},A={class:"section-content"},F={class:"section-content"},U=v({__name:"Index",setup(R){const{t:p}=b(),u=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],c=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],s=o=>{h({text:p("user.message.invitation.success",{user:o.email}),type:"success"})};return(o,d)=>{const l=g("SshPre");return I(),f(S,{title:o.$t("user.label.invitationForm"),class:"demo-invitation-form"},{toolbar:a(()=>[e(i(y),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:d[0]||(d[0]=z=>o.$router.push("/user"))},null,8,["label"])]),default:a(()=>[n(),t("section",null,[t("h2",null,r(o.$t("user.label.basic")),1),n(),t("div",_,[e(i(m),{onSubmit:s}),n(),e(l,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,r(o.$t("user.label.withExpiryDate")),1),n(),t("div",A,[e(i(m),{roles:u,"expiry-mode":"calendar",onSubmit:s}),n(),e(l,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n()])]),n(),t("section",null,[t("h2",null,r(o.$t("user.label.withExpiryDays")),1),n(),t("div",F,[e(i(m),{roles:u,"expiry-mode":"days",onSubmit:s}),n(),e(l,{language:"html-vue"},{default:a(()=>[n(`
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
