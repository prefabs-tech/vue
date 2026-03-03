import{d as c,L as g,M as I,o as D,e as S,f as s,h as e,t as m,z as t,a as o,u as l,X as u,i as v,Y as F}from"./index-DU1CL5Ch.js";import{_ as A}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-C0lNfsFK.js";import{_ as P}from"./UserPage.vue_vue_type_style_index_0_lang-DX7LUjC2.js";import"./PrefabsTechVue3TanstackTable.es-BR-gROdM.js";import"./PrefabsTechVue3Form.es-BUkR6pNZ.js";const R={class:"section-content"},M={class:"section-content"},N={class:"section-content"},x={class:"section-content"},E={class:"section-content"},Z=c({__name:"Index",setup(U){const{t:i}=g(),d=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],b=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],f=v(()=>[{description:i("user.documentation.eventDescription.invitationForm.cancel"),name:"cancel",payload:"-"},{description:i("user.documentation.eventDescription.invitationForm.submitted"),name:"submitted",payload:"-"}]),y=v(()=>[{default:"-",description:i("user.documentation.propsDescription.invitationForm.apps"),prop:"apps",type:"Array<InvitationAppOption>"},{default:"z.coerce.number().gte(1)",description:i("user.documentation.propsDescription.invitationForm.appSchema"),prop:"appSchema",type:"z.ZodType<string | number | string[] | number[]>"},{default:"z.coerce.number().gte(1)",description:i("user.documentation.propsDescription.invitationForm.expiresAfterSchema"),prop:"expiresAfterSchema",type:"z.ZodType<string | number>"},{default:"z.coerce.date().min(new Date(new Date().setHours(0,0,0,0)))",description:i("user.documentation.propsDescription.invitationForm.expiresAtSchema"),prop:"expiresAtSchema",type:"z.ZodType<string | number | Date | object>"},{default:"-",description:i("user.documentation.propsDescription.invitationForm.expiryMode"),prop:"expiryMode",type:'"calendar" | "days"'},{default:"-",description:i("user.documentation.propsDescription.invitationForm.invitationData"),prop:"invitationData",type:"InvitationPayload"},{default:"-",description:i("user.documentation.propsDescription.invitationForm.roles"),prop:"roles",type:"Array<InvitationRoleOption>"},{default:"z.string()",description:i("user.documentation.propsDescription.invitationForm.roleSchema"),prop:"roleSchema",type:"z.ZodType<string | number | string[] | number[]>"},{default:'"Invite user"',description:i("user.documentation.propsDescription.invitationForm.submitLabel"),prop:"submitLabel",type:"String"}]),p=r=>{F(i("user.message.invitation.success",{user:r.email}),{type:"success"})};return(r,n)=>{const a=I("SshPre");return D(),S(P,{subtitle:r.$t("user.subtitle.invitationForm"),title:r.$t("user.label.invitationForm"),class:"demo-invitation-form"},{default:s(()=>[e("section",null,[e("h2",null,m(r.$t("user.label.basic")),1),n[2]||(n[2]=t()),e("div",R,[o(l(u),{onSubmit:p}),n[1]||(n[1]=t()),o(a,{language:"html-vue"},{default:s(()=>[...n[0]||(n[0]=[t(`
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
        `,-1)])]),_:1})])]),n[16]||(n[16]=t()),e("section",null,[e("h2",null,m(r.$t("user.label.withAppField")),1),n[5]||(n[5]=t()),e("div",M,[o(l(u),{apps:b,onSubmit:p}),n[4]||(n[4]=t()),o(a,{language:"html-vue"},{default:s(()=>[...n[3]||(n[3]=[t(`
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
        `,-1)])]),_:1})])]),n[17]||(n[17]=t()),e("section",null,[e("h2",null,m(r.$t("user.label.withRoleField")),1),n[8]||(n[8]=t()),e("div",N,[o(l(u),{roles:d,onSubmit:p}),n[7]||(n[7]=t()),o(a,{language:"html-vue"},{default:s(()=>[...n[6]||(n[6]=[t(`
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
        `,-1)])]),_:1})])]),n[18]||(n[18]=t()),e("section",null,[e("h2",null,m(r.$t("user.label.withExpiryDate")),1),n[11]||(n[11]=t()),e("div",x,[o(l(u),{roles:d,"expiry-mode":"calendar",onSubmit:p}),n[10]||(n[10]=t()),o(a,{language:"html-vue"},{default:s(()=>[...n[9]||(n[9]=[t(`
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
        `,-1)])]),_:1})])]),n[19]||(n[19]=t()),e("section",null,[e("h2",null,m(r.$t("user.label.withExpiryDays")),1),n[14]||(n[14]=t()),e("div",E,[o(l(u),{roles:d,"expiry-mode":"days",onSubmit:p}),n[13]||(n[13]=t()),o(a,{language:"html-vue"},{default:s(()=>[...n[12]||(n[12]=[t(`
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
        `,-1)])]),_:1})])]),n[20]||(n[20]=t()),o(A,{"events-data":f.value,"props-data":y.value,"props-table-title":r.$t("common.properties",{value:"InvitationFormProperties"})},null,8,["events-data","props-data","props-table-title"]),n[21]||(n[21]=t()),e("section",null,[o(a,{language:"html-vue"},{default:s(()=>[...n[15]||(n[15]=[t(`
        interface InvitationAppOption {
          id: number;
          label?: string;
          name: string;
          origin: string;
          supportedRoles: InvitationRoleOption[];
        }

        interface InvitationPayload {
          appId?: number;
          email: string;
          expiresAt?: Date | string;
          role?: string;
        }

        interface InvitationRoleOption {
          id: number;
          name: string;
        }
      `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{Z as default};
