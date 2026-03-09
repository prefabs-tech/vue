import{d as k,L as B,M as R,o as h,e as O,f as a,h as i,t as u,z as t,a as o,u as s,l as d,Y as m,r as v,i as D}from"./index-CNYYxeCo.js";import{_ as U}from"./UserPage.vue_vue_type_style_index_0_lang-BBm1Pfr4.js";import{_ as C}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-B3tqDFC6.js";import"./PrefabsTechVue3TanstackTable.es-Bja1zcm5.js";import"./PrefabsTechVue3Form.es-CNTcCXbR.js";const N={class:"section-content"},P={class:"section-content"},T={class:"section-content"},z={class:"section-content"},F={class:"section-content"},Z={class:"section-content"},L={class:"section-content"},V={name:"InvitationModalDemo"},H=k({...V,setup(W){const{t:l}=B(),f=v(!1),b=v(!1),w=v(!1),M=v(!1),g=v(!1),I=v(!1),y=v(!1),$=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],E=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],S=D(()=>[{description:l("user.documentation.eventDescription.invitation.close"),name:"on:close",payload:"-"},{description:l("user.documentation.eventDescription.invitation.submitted"),name:"submitted",payload:"-"}]),A=D(()=>[{default:"-",description:l("user.documentation.propsDescription.invitation.apps"),prop:"apps",type:"Array<InvitationAppOption>"},{default:"-",description:l("user.documentation.propsDescription.invitation.appSchema"),prop:"appSchema",type:"z.ZodType<string | number | string[] | number[]>"},{default:"false",description:l("user.documentation.propsDescription.invitation.dismissOnClickOut"),prop:"dismissOnClickOut",type:"Boolean"},{default:"-",description:l("user.documentation.propsDescription.invitation.expiresAfterSchema"),prop:"expiresAfterSchema",type:"z.ZodType<string | number>"},{default:"-",description:l("user.documentation.propsDescription.invitation.expiresAtSchema"),prop:"expiresAtSchema",type:"z.ZodType<string | number | Date | object>"},{default:"-",description:l("user.documentation.propsDescription.invitation.expiryMode"),prop:"expiryMode",type:'"calendar" | "days"'},{default:"-",description:l("user.documentation.propsDescription.invitation.invitationData"),prop:"invitationData",type:"InvitationPayload"},{default:"-",description:l("user.documentation.propsDescription.invitation.roles"),prop:"roles",type:"Array<InvitationRoleOption>"},{default:"-",description:l("user.documentation.propsDescription.invitation.roleSchema"),prop:"roleSchema",type:"z.ZodType<string | number | string[] | number[]>"},{default:"false",description:l("user.documentation.propsDescription.invitation.show"),prop:"show",type:"Boolean"},{default:"-",description:l("user.documentation.propsDescription.invitation.submitLabel"),prop:"submitLabel",type:"String"},{default:"-",description:l("user.documentation.propsDescription.invitation.title"),prop:"title",type:"String"}]);return(e,n)=>{const p=R("SshPre");return h(),O(U,{subtitle:e.$t("user.subtitle.invitationModal"),title:e.$t("user.label.invitationModal"),class:"demo-invitation-modal"},{default:a(()=>[i("section",null,[i("h2",null,u(e.$t("user.label.basic")),1),n[17]||(n[17]=t()),i("div",N,[o(s(d),{label:e.$t("user.label.invite"),onClick:n[0]||(n[0]=r=>g.value=!0)},null,8,["label"]),n[15]||(n[15]=t()),o(s(m),{show:g.value,"onOn:close":n[1]||(n[1]=r=>g.value=!1)},null,8,["show"]),n[16]||(n[16]=t()),o(p,{language:"html-vue"},{default:a(()=>[...n[14]||(n[14]=[t(`
          <template>
            <ButtonElement
              label="Invite"
              @click="showModal = true"
            />

            <InvitationModal
              :show="showModal"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);
          <\/script>
        `,-1)])]),_:1})])]),n[43]||(n[43]=t()),i("section",null,[i("h2",null,u(e.$t("user.label.withTitle")),1),n[21]||(n[21]=t()),i("div",P,[o(s(d),{label:e.$t("user.label.send"),onClick:n[2]||(n[2]=r=>y.value=!0)},null,8,["label"]),n[19]||(n[19]=t()),o(s(m),{show:y.value,title:e.$t("user.label.invite"),"onOn:close":n[3]||(n[3]=r=>y.value=!1)},null,8,["show","title"]),n[20]||(n[20]=t()),o(p,{language:"html-vue"},{default:a(()=>[...n[18]||(n[18]=[t(`
          <template>
            <ButtonElement
              label="Send"
              @click="showModal = true"
            />

            <InvitationModal
              :show="showModal"
              title="Invite"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);
          <\/script>
        `,-1)])]),_:1})])]),n[44]||(n[44]=t()),i("section",null,[i("h2",null,u(e.$t("user.label.enableDismiss")),1),n[25]||(n[25]=t()),i("div",T,[o(s(d),{label:e.$t("user.label.inviteUser"),onClick:n[4]||(n[4]=r=>b.value=!0)},null,8,["label"]),n[23]||(n[23]=t()),o(s(m),{show:b.value,title:e.$t("user.label.inviteUser"),"dismiss-on-click-out":"","onOn:close":n[5]||(n[5]=r=>b.value=!1)},null,8,["show","title"]),n[24]||(n[24]=t()),o(p,{language:"html-vue"},{default:a(()=>[...n[22]||(n[22]=[t(`
          <template>
            <ButtonElement
              label="Invite user"
              @click="showModal = true"
            />

            <InvitationModal
              :show="showModal"
              dismiss-on-click-out
              title="Invite user"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);
          <\/script>
        `,-1)])]),_:1})])]),n[45]||(n[45]=t()),i("section",null,[i("h2",null,u(e.$t("user.label.withAppField")),1),n[29]||(n[29]=t()),i("div",z,[o(s(d),{label:e.$t("user.label.invite"),onClick:n[6]||(n[6]=r=>f.value=!0)},null,8,["label"]),n[27]||(n[27]=t()),o(s(m),{apps:E,show:f.value,title:e.$t("user.label.inviteToApp"),"onOn:close":n[7]||(n[7]=r=>f.value=!1)},null,8,["show","title"]),n[28]||(n[28]=t()),o(p,{language:"html-vue"},{default:a(()=>[...n[26]||(n[26]=[t(`
          <template>
            <ButtonElement
              label="Invite"
              @click="showModal = true"
            />

            <InvitationModal
              :apps="apps"
              :show="showModal"
              title="Invite to app"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

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
        `,-1)])]),_:1})])]),n[46]||(n[46]=t()),i("section",null,[i("h2",null,u(e.$t("user.label.withRoleField")),1),n[33]||(n[33]=t()),i("div",F,[o(s(d),{label:e.$t("user.label.sendInvitation"),onClick:n[8]||(n[8]=r=>I.value=!0)},null,8,["label"]),n[31]||(n[31]=t()),o(s(m),{roles:$,show:I.value,title:e.$t("user.label.inviteWithRole"),"onOn:close":n[9]||(n[9]=r=>I.value=!1)},null,8,["show","title"]),n[32]||(n[32]=t()),o(p,{language:"html-vue"},{default:a(()=>[...n[30]||(n[30]=[t(`
          <template>
            <ButtonElement
              label="Send invitation"
              @click="showModal = true"
            />

            <InvitationModal
              :roles="roles"
              :show="showModal"
              title="Invite with role"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

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
        `,-1)])]),_:1})])]),n[47]||(n[47]=t()),i("section",null,[i("h2",null,u(e.$t("user.label.withExpiryDate")),1),n[37]||(n[37]=t()),i("div",Z,[o(s(d),{label:e.$t("user.label.inviteUser"),onClick:n[10]||(n[10]=r=>M.value=!0)},null,8,["label"]),n[35]||(n[35]=t()),o(s(m),{roles:$,show:M.value,title:e.$t("user.label.inviteWithExpiry"),"expiry-mode":"calendar","onOn:close":n[11]||(n[11]=r=>M.value=!1)},null,8,["show","title"]),n[36]||(n[36]=t()),o(p,{language:"html-vue"},{default:a(()=>[...n[34]||(n[34]=[t(`
          <template>
            <ButtonElement
              label="Invite user"
              @click="showModal = true"
            />

            <InvitationModal
              :roles="roles"
              :show="showModal"
              expiry-mode="calendar"
              title="Invite with expiry date"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];
          <\/script>
        `,-1)])]),_:1})])]),n[48]||(n[48]=t()),i("section",null,[i("h2",null,u(e.$t("user.label.withExpiryDays")),1),n[41]||(n[41]=t()),i("div",L,[o(s(d),{label:e.$t("user.label.sendInvitation"),onClick:n[12]||(n[12]=r=>w.value=!0)},null,8,["label"]),n[39]||(n[39]=t()),o(s(m),{roles:$,show:w.value,title:e.$t("user.label.inviteWithExpiry"),"expiry-mode":"days","onOn:close":n[13]||(n[13]=r=>w.value=!1)},null,8,["show","title"]),n[40]||(n[40]=t()),o(p,{language:"html-vue"},{default:a(()=>[...n[38]||(n[38]=[t(`
          <template>
            <ButtonElement
              label="Send invitation"
              @click="showModal = true"
            />

            <InvitationModal
              :roles="roles"
              :show="showModal"
              expiry-mode="days"
              title="Invite with expiry date"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];
          <\/script>
        `,-1)])]),_:1})])]),n[49]||(n[49]=t()),o(C,{"events-data":S.value,"props-data":A.value,"props-table-title":e.$t("common.properties",{value:"InvitationModalProperties"})},null,8,["events-data","props-data","props-table-title"]),n[50]||(n[50]=t()),i("section",null,[o(p,{language:"html-vue"},{default:a(()=>[...n[42]||(n[42]=[t(`
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
      `,-1)])]),_:1})])]),_:1},8,["subtitle","title"])}}});export{H as default};
