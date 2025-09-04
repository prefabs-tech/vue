import{d as D,I as h,r as v,J as k,e as P,o as B,j as a,C as t,f as o,t as d,h as l,u as s,v as r,a0 as p,$ as R}from"./index-D8kpJ3AQ.js";import{_ as A}from"./UserPage.vue_vue_type_style_index_0_lang-BL9Fayda.js";const U={class:"section-content"},C={class:"section-content"},N={class:"section-content"},O={class:"section-content"},F={class:"section-content"},T={class:"section-content"},V={class:"section-content"},J=D({__name:"InvitationModal",setup(W){const{t:S}=h(),f=v(!1),b=v(!1),w=v(!1),M=v(!1),I=v(!1),y=v(!1),$=v(!1),g=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],E=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],u=e=>{R({text:S("user.message.invitation.success",{user:e.email}),type:"success"}),f.value=!1,b.value=!1,w.value=!1,M.value=!1,I.value=!1,y.value=!1,$.value=!1};return(e,n)=>{const m=k("SshPre");return B(),P(A,{title:e.$t("user.label.invitationModal"),class:"demo-invitation-modal"},{toolbar:a(()=>[l(s(r),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=i=>e.$router.push("/user"))},null,8,["label"])]),default:a(()=>[n[43]||(n[43]=t()),o("section",null,[o("h2",null,d(e.$t("user.label.basic")),1),n[18]||(n[18]=t()),o("div",U,[l(s(r),{label:e.$t("user.label.invite"),onClick:n[1]||(n[1]=i=>I.value=!0)},null,8,["label"]),n[16]||(n[16]=t()),l(s(p),{show:I.value,"onOn:close":n[2]||(n[2]=i=>I.value=!1),onSubmit:u},null,8,["show"]),n[17]||(n[17]=t()),l(m,{language:"html-vue"},{default:a(()=>n[15]||(n[15]=[t(`
          <template>
            <ButtonElement
              label="Invite"
              @click="showModal = true"
            />

            <InvitationModal
              :show="showModal"
              @on:close="showModal = false"
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";
          
          const showModal = ref(false);

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          <\/script>
        `)])),_:1})])]),n[44]||(n[44]=t()),o("section",null,[o("h2",null,d(e.$t("user.label.withTitle")),1),n[22]||(n[22]=t()),o("div",C,[l(s(r),{label:e.$t("user.label.send"),onClick:n[3]||(n[3]=i=>$.value=!0)},null,8,["label"]),n[20]||(n[20]=t()),l(s(p),{show:$.value,title:e.$t("user.label.invite"),"onOn:close":n[4]||(n[4]=i=>$.value=!1),onSubmit:u},null,8,["show","title"]),n[21]||(n[21]=t()),l(m,{language:"html-vue"},{default:a(()=>n[19]||(n[19]=[t(`
          <template>
            <ButtonElement
              label="Send"
              @click="showModal = true"
            />

            <InvitationModal
              :show="showModal"
              title="Invite"
              @on:close="showModal = false"
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";
          
          const showModal = ref(false);

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          <\/script>
        `)])),_:1})])]),n[45]||(n[45]=t()),o("section",null,[o("h2",null,d(e.$t("user.label.disableDismiss")),1),n[26]||(n[26]=t()),o("div",N,[l(s(r),{label:e.$t("user.label.inviteUser"),onClick:n[5]||(n[5]=i=>b.value=!0)},null,8,["label"]),n[24]||(n[24]=t()),l(s(p),{"dismiss-on-click-out":!1,show:b.value,title:e.$t("user.label.inviteUser"),"onOn:close":n[6]||(n[6]=i=>b.value=!1),onSubmit:u},null,8,["show","title"]),n[25]||(n[25]=t()),l(m,{language:"html-vue"},{default:a(()=>n[23]||(n[23]=[t(`
          <template>
            <ButtonElement
              label="Invite user"
              @click="showModal = true"
            />

            <InvitationModal
              :dismiss-on-click-out="false"
              :show="showModal"
              title="Invite user"
              @on:close="showModal = false"
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";
          
          const showModal = ref(false);

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          <\/script>
        `)])),_:1})])]),n[46]||(n[46]=t()),o("section",null,[o("h2",null,d(e.$t("user.label.withAppField")),1),n[30]||(n[30]=t()),o("div",O,[l(s(r),{label:e.$t("user.label.invite"),onClick:n[7]||(n[7]=i=>f.value=!0)},null,8,["label"]),n[28]||(n[28]=t()),l(s(p),{apps:E,show:f.value,title:e.$t("user.label.inviteToApp"),"onOn:close":n[8]||(n[8]=i=>f.value=!1),onSubmit:u},null,8,["show","title"]),n[29]||(n[29]=t()),l(m,{language:"html-vue"},{default:a(()=>n[27]||(n[27]=[t(`
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
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";
          
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

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          <\/script>
        `)])),_:1})])]),n[47]||(n[47]=t()),o("section",null,[o("h2",null,d(e.$t("user.label.withRoleField")),1),n[34]||(n[34]=t()),o("div",F,[l(s(r),{label:e.$t("user.label.sendInvitation"),onClick:n[9]||(n[9]=i=>y.value=!0)},null,8,["label"]),n[32]||(n[32]=t()),l(s(p),{roles:g,show:y.value,title:e.$t("user.label.inviteWithRole"),"onOn:close":n[10]||(n[10]=i=>y.value=!1),onSubmit:u},null,8,["show","title"]),n[33]||(n[33]=t()),l(m,{language:"html-vue"},{default:a(()=>n[31]||(n[31]=[t(`
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
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";
          
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

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)])),_:1})])]),n[48]||(n[48]=t()),o("section",null,[o("h2",null,d(e.$t("user.label.withExpiryDate")),1),n[38]||(n[38]=t()),o("div",T,[l(s(r),{label:e.$t("user.label.inviteUser"),onClick:n[11]||(n[11]=i=>M.value=!0)},null,8,["label"]),n[36]||(n[36]=t()),l(s(p),{roles:g,show:M.value,title:e.$t("user.label.inviteWithExpiry"),"expiry-mode":"calendar","onOn:close":n[12]||(n[12]=i=>M.value=!1),onSubmit:u},null,8,["show","title"]),n[37]||(n[37]=t()),l(m,{language:"html-vue"},{default:a(()=>n[35]||(n[35]=[t(`
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
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)])),_:1})])]),n[49]||(n[49]=t()),o("section",null,[o("h2",null,d(e.$t("user.label.withExpiryDays")),1),n[42]||(n[42]=t()),o("div",V,[l(s(r),{label:e.$t("user.label.sendInvitation"),onClick:n[13]||(n[13]=i=>w.value=!0)},null,8,["label"]),n[40]||(n[40]=t()),l(s(p),{roles:g,show:w.value,title:e.$t("user.label.inviteWithExpiry"),"expiry-mode":"days","onOn:close":n[14]||(n[14]=i=>w.value=!1),onSubmit:u},null,8,["show","title"]),n[41]||(n[41]=t()),l(m,{language:"html-vue"},{default:a(()=>n[39]||(n[39]=[t(`
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
              @submit="onSubmit"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{J as default};
