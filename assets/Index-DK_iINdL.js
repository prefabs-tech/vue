import{d as b,L as c,M as y,o as D,e as I,f as r,h as e,t as p,z as t,a as i,u as l,X as m,i as d}from"./index-BTg9-SpC.js";import{_ as A}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Bb-RllU6.js";import{_ as S}from"./UserPage.vue_vue_type_style_index_0_lang-Dk7AWpZ8.js";import"./PrefabsTechVue3TanstackTable.es-BrpHz2LW.js";import"./PrefabsTechVue3Form.es-B8QyJ7mw.js";const R={class:"section-content"},F={class:"section-content"},M={class:"section-content"},N={class:"section-content"},E={class:"section-content"},U={name:"InvitaionFormDemo"},T=b({...U,setup($){const{t:o}=c(),u=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],v=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],g=d(()=>[{description:o("user.documentation.eventDescription.invitation.cancel"),name:"cancel",payload:"-"},{description:o("user.documentation.eventDescription.invitation.submitted"),name:"submitted",payload:"-"}]),f=d(()=>[{default:"-",description:o("user.documentation.propsDescription.invitation.apps"),prop:"apps",type:"Array<InvitationAppOption>"},{default:"z.coerce.number().gte(1)",description:o("user.documentation.propsDescription.invitation.appSchema"),prop:"appSchema",type:"z.ZodType<string | number | string[] | number[]>"},{default:"z.coerce.number().gte(1)",description:o("user.documentation.propsDescription.invitation.expiresAfterSchema"),prop:"expiresAfterSchema",type:"z.ZodType<string | number>"},{default:"z.coerce.date().min(new Date(new Date().setHours(0,0,0,0)))",description:o("user.documentation.propsDescription.invitation.expiresAtSchema"),prop:"expiresAtSchema",type:"z.ZodType<string | number | Date | object>"},{default:"-",description:o("user.documentation.propsDescription.invitation.expiryMode"),prop:"expiryMode",type:'"calendar" | "days"'},{default:"-",description:o("user.documentation.propsDescription.invitation.invitationData"),prop:"invitationData",type:"InvitationPayload"},{default:"-",description:o("user.documentation.propsDescription.invitation.roles"),prop:"roles",type:"Array<InvitationRoleOption>"},{default:"z.string()",description:o("user.documentation.propsDescription.invitation.roleSchema"),prop:"roleSchema",type:"z.ZodType<string | number | string[] | number[]>"},{default:'"Invite user"',description:o("user.documentation.propsDescription.invitation.submitLabel"),prop:"submitLabel",type:"String"}]);return(s,n)=>{const a=y("SshPre");return D(),I(S,{subtitle:s.$t("user.subtitle.invitationForm"),title:s.$t("user.label.invitationForm"),class:"demo-invitation-form"},{default:r(()=>[e("section",null,[e("h2",null,p(s.$t("user.label.basic")),1),n[2]||(n[2]=t()),e("div",R,[i(l(m)),n[1]||(n[1]=t()),i(a,{language:"html-vue"},{default:r(()=>[...n[0]||(n[0]=[t(`
          <template>
            <InvitationForm />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";
          <\/script>
        `,-1)])]),_:1})])]),n[16]||(n[16]=t()),e("section",null,[e("h2",null,p(s.$t("user.label.withAppField")),1),n[5]||(n[5]=t()),e("div",F,[i(l(m),{apps:v}),n[4]||(n[4]=t()),i(a,{language:"html-vue"},{default:r(()=>[...n[3]||(n[3]=[t(`
          <template>
            <InvitationForm :apps="apps" />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";

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
          <\/script>
        `,-1)])]),_:1})])]),n[17]||(n[17]=t()),e("section",null,[e("h2",null,p(s.$t("user.label.withRoleField")),1),n[8]||(n[8]=t()),e("div",M,[i(l(m),{roles:u}),n[7]||(n[7]=t()),i(a,{language:"html-vue"},{default:r(()=>[...n[6]||(n[6]=[t(`
          <template>
            <InvitationForm :roles="roles" />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";

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
          <\/script>
        `,-1)])]),_:1})])]),n[18]||(n[18]=t()),e("section",null,[e("h2",null,p(s.$t("user.label.withExpiryDate")),1),n[11]||(n[11]=t()),e("div",N,[i(l(m),{roles:u,"expiry-mode":"calendar"}),n[10]||(n[10]=t()),i(a,{language:"html-vue"},{default:r(()=>[...n[9]||(n[9]=[t(`
          <template>
            <InvitationForm
              :roles="roles"
              expiry-mode="calendar"
            />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          const roles = [
            ...
          ];
          <\/script>
        `,-1)])]),_:1})])]),n[19]||(n[19]=t()),e("section",null,[e("h2",null,p(s.$t("user.label.withExpiryDays")),1),n[14]||(n[14]=t()),e("div",E,[i(l(m),{roles:u,"expiry-mode":"days"}),n[13]||(n[13]=t()),i(a,{language:"html-vue"},{default:r(()=>[...n[12]||(n[12]=[t(`
          <template>
            <InvitationForm
              :roles="roles"
              expiry-mode="days"
            />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          const roles = [
            ...
          ];
          <\/script>
        `,-1)])]),_:1})])]),n[20]||(n[20]=t()),i(A,{"events-data":g.value,"props-data":f.value,"props-table-title":s.$t("common.properties",{value:"InvitationFormProperties"})},null,8,["events-data","props-data","props-table-title"]),n[21]||(n[21]=t()),e("section",null,[i(a,{language:"html-vue"},{default:r(()=>[...n[15]||(n[15]=[t(`
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
      `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{T as default};
