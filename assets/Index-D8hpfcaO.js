import{d as f,I as b,J as I,e as y,o as g,i as s,f as e,B as t,t as l,h as o,u as m,W as u,Y as S}from"./index-CLlYJ0SI.js";import{_ as D}from"./UserPage.vue_vue_type_style_index_0_lang-zefvAd0e.js";const P={class:"section-content"},F={class:"section-content"},R={class:"section-content"},A={class:"section-content"},N={class:"section-content"},$=f({__name:"Index",setup(E){const{t:d}=b(),p=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],v=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],r=i=>{S(d("user.message.invitation.success",{user:i.email}),{type:"success"})};return(i,n)=>{const a=I("SshPre");return g(),y(D,{title:i.$t("user.label.invitationForm"),class:"demo-invitation-form"},{default:s(()=>[e("section",null,[e("h2",null,l(i.$t("user.label.basic")),1),n[2]||(n[2]=t()),e("div",P,[o(m(u),{onSubmit:r}),n[1]||(n[1]=t()),o(a,{language:"html-vue"},{default:s(()=>n[0]||(n[0]=[t(`
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
        `)])),_:1})])]),n[15]||(n[15]=t()),e("section",null,[e("h2",null,l(i.$t("user.label.withAppField")),1),n[5]||(n[5]=t()),e("div",F,[o(m(u),{apps:v,onSubmit:r}),n[4]||(n[4]=t()),o(a,{language:"html-vue"},{default:s(()=>n[3]||(n[3]=[t(`
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
        `)])),_:1})])]),n[16]||(n[16]=t()),e("section",null,[e("h2",null,l(i.$t("user.label.withRoleField")),1),n[8]||(n[8]=t()),e("div",R,[o(m(u),{roles:p,onSubmit:r}),n[7]||(n[7]=t()),o(a,{language:"html-vue"},{default:s(()=>n[6]||(n[6]=[t(`
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
        `)])),_:1})])]),n[17]||(n[17]=t()),e("section",null,[e("h2",null,l(i.$t("user.label.withExpiryDate")),1),n[11]||(n[11]=t()),e("div",A,[o(m(u),{roles:p,"expiry-mode":"calendar",onSubmit:r}),n[10]||(n[10]=t()),o(a,{language:"html-vue"},{default:s(()=>n[9]||(n[9]=[t(`
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
        `)])),_:1})])]),n[18]||(n[18]=t()),e("section",null,[e("h2",null,l(i.$t("user.label.withExpiryDays")),1),n[14]||(n[14]=t()),e("div",N,[o(m(u),{roles:p,"expiry-mode":"days",onSubmit:r}),n[13]||(n[13]=t()),o(a,{language:"html-vue"},{default:s(()=>n[12]||(n[12]=[t(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{$ as default};
