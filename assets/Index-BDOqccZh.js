import{d as b,E as g,D as f,e as I,o as y,h as s,B as t,f as o,t as m,g as i,u as a,U as u,q as S,X as D}from"./index-DfLKm71s.js";import{_ as P}from"./UserPage.vue_vue_type_style_index_0_lang-eMHXlRzL.js";const F={class:"section-content"},R={class:"section-content"},E={class:"section-content"},z={class:"section-content"},A={class:"section-content"},w=b({__name:"Index",setup(N){const{t:p}=g(),d=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],v=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],l=e=>{D({text:p("user.message.invitation.success",{user:e.email}),type:"success"})};return(e,n)=>{const r=f("SshPre");return y(),I(P,{title:e.$t("user.label.invitationForm"),class:"demo-invitation-form"},{toolbar:s(()=>[i(a(S),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=U=>e.$router.push("/user"))},null,8,["label"])]),default:s(()=>[n[16]||(n[16]=t()),o("section",null,[o("h2",null,m(e.$t("user.label.basic")),1),n[3]||(n[3]=t()),o("div",F,[i(a(u),{onSubmit:l}),n[2]||(n[2]=t()),i(r,{language:"html-vue"},{default:s(()=>n[1]||(n[1]=[t(`
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
        `)])),_:1})])]),n[17]||(n[17]=t()),o("section",null,[o("h2",null,m(e.$t("user.label.withAppField")),1),n[6]||(n[6]=t()),o("div",R,[i(a(u),{apps:v,onSubmit:l}),n[5]||(n[5]=t()),i(r,{language:"html-vue"},{default:s(()=>n[4]||(n[4]=[t(`
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
        `)])),_:1})])]),n[18]||(n[18]=t()),o("section",null,[o("h2",null,m(e.$t("user.label.withRoleField")),1),n[9]||(n[9]=t()),o("div",E,[i(a(u),{roles:d,onSubmit:l}),n[8]||(n[8]=t()),i(r,{language:"html-vue"},{default:s(()=>n[7]||(n[7]=[t(`
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
        `)])),_:1})])]),n[19]||(n[19]=t()),o("section",null,[o("h2",null,m(e.$t("user.label.withExpiryDate")),1),n[12]||(n[12]=t()),o("div",z,[i(a(u),{roles:d,"expiry-mode":"calendar",onSubmit:l}),n[11]||(n[11]=t()),i(r,{language:"html-vue"},{default:s(()=>n[10]||(n[10]=[t(`
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
        `)])),_:1})])]),n[20]||(n[20]=t()),o("section",null,[o("h2",null,m(e.$t("user.label.withExpiryDays")),1),n[15]||(n[15]=t()),o("div",A,[i(a(u),{roles:d,"expiry-mode":"days",onSubmit:l}),n[14]||(n[14]=t()),i(r,{language:"html-vue"},{default:s(()=>n[13]||(n[13]=[t(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{w as default};
