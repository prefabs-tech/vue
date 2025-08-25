import{d as f,I as b,J as I,e as y,o as g,j as s,C as t,f as e,t as m,h as o,u as r,W as u,v as S,$ as D}from"./index-CT2_3BjD.js";import{_ as P}from"./UserPage.vue_vue_type_style_index_0_lang-Bsggy8bI.js";const F={class:"section-content"},R={class:"section-content"},A={class:"section-content"},E={class:"section-content"},N={class:"section-content"},w=f({__name:"Index",setup($){const{t:d}=b(),p=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],v=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],a=i=>{D({text:d("user.message.invitation.success",{user:i.email}),type:"success"})};return(i,n)=>{const l=I("SshPre");return g(),y(P,{title:i.$t("user.label.invitationForm"),class:"demo-invitation-form"},{toolbar:s(()=>[o(r(S),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=U=>i.$router.push("/user"))},null,8,["label"])]),default:s(()=>[n[16]||(n[16]=t()),e("section",null,[e("h2",null,m(i.$t("user.label.basic")),1),n[3]||(n[3]=t()),e("div",F,[o(r(u),{onSubmit:a}),n[2]||(n[2]=t()),o(l,{language:"html-vue"},{default:s(()=>n[1]||(n[1]=[t(`
          <template>
            <InvitationForm @submit="onSubmit" />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)])),_:1})])]),n[17]||(n[17]=t()),e("section",null,[e("h2",null,m(i.$t("user.label.withAppField")),1),n[6]||(n[6]=t()),e("div",R,[o(r(u),{apps:v,onSubmit:a}),n[5]||(n[5]=t()),o(l,{language:"html-vue"},{default:s(()=>n[4]||(n[4]=[t(`
          <template>
            <InvitationForm :apps="apps" @submit="onSubmit" />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

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
        `)])),_:1})])]),n[18]||(n[18]=t()),e("section",null,[e("h2",null,m(i.$t("user.label.withRoleField")),1),n[9]||(n[9]=t()),e("div",A,[o(r(u),{roles:p,onSubmit:a}),n[8]||(n[8]=t()),o(l,{language:"html-vue"},{default:s(()=>n[7]||(n[7]=[t(`
          <template>
            <InvitationForm :roles="roles" @submit="onSubmit" />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

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
        `)])),_:1})])]),n[19]||(n[19]=t()),e("section",null,[e("h2",null,m(i.$t("user.label.withExpiryDate")),1),n[12]||(n[12]=t()),e("div",E,[o(r(u),{roles:p,"expiry-mode":"calendar",onSubmit:a}),n[11]||(n[11]=t()),o(l,{language:"html-vue"},{default:s(()=>n[10]||(n[10]=[t(`
          <template>
            <InvitationForm
              :roles="roles"
              expiry-mode="calendar"
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)])),_:1})])]),n[20]||(n[20]=t()),e("section",null,[e("h2",null,m(i.$t("user.label.withExpiryDays")),1),n[15]||(n[15]=t()),e("div",N,[o(r(u),{roles:p,"expiry-mode":"days",onSubmit:a}),n[14]||(n[14]=t()),o(l,{language:"html-vue"},{default:s(()=>n[13]||(n[13]=[t(`
          <template>
            <InvitationForm
              :roles="roles"
              expiry-mode="days"
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{w as default};
