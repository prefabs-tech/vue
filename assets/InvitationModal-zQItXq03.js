import{d as h,M as D,N as P,o as k,e as B,f as a,h as l,t as m,A as t,a as o,u as s,l as d,W as v,r as p,V as R}from"./index-CAiRitWL.js";import{_ as A}from"./UserPage.vue_vue_type_style_index_0_lang-COPrfSfS.js";const U={class:"section-content"},N={class:"section-content"},C={class:"section-content"},O={class:"section-content"},F={class:"section-content"},T={class:"section-content"},V={class:"section-content"},q=h({__name:"InvitationModal",setup(W){const{t:S}=D(),f=p(!1),b=p(!1),w=p(!1),M=p(!1),I=p(!1),y=p(!1),$=p(!1),g=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],E=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],r=e=>{R(S("user.message.invitation.success",{user:e.email}),{type:"success"}),f.value=!1,b.value=!1,w.value=!1,M.value=!1,I.value=!1,y.value=!1,$.value=!1};return(e,n)=>{const u=P("SshPre");return k(),B(A,{title:e.$t("user.label.invitationModal"),class:"demo-invitation-modal"},{default:a(()=>[l("section",null,[l("h2",null,m(e.$t("user.label.basic")),1),n[17]||(n[17]=t()),l("div",U,[o(s(d),{label:e.$t("user.label.invite"),onClick:n[0]||(n[0]=i=>I.value=!0)},null,8,["label"]),n[15]||(n[15]=t()),o(s(v),{show:I.value,"onOn:close":n[1]||(n[1]=i=>I.value=!1),onSubmit:r},null,8,["show"]),n[16]||(n[16]=t()),o(u,{language:"html-vue"},{default:a(()=>[...n[14]||(n[14]=[t(`
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
        `,-1)])]),_:1})])]),n[42]||(n[42]=t()),l("section",null,[l("h2",null,m(e.$t("user.label.withTitle")),1),n[21]||(n[21]=t()),l("div",N,[o(s(d),{label:e.$t("user.label.send"),onClick:n[2]||(n[2]=i=>$.value=!0)},null,8,["label"]),n[19]||(n[19]=t()),o(s(v),{show:$.value,title:e.$t("user.label.invite"),"onOn:close":n[3]||(n[3]=i=>$.value=!1),onSubmit:r},null,8,["show","title"]),n[20]||(n[20]=t()),o(u,{language:"html-vue"},{default:a(()=>[...n[18]||(n[18]=[t(`
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
        `,-1)])]),_:1})])]),n[43]||(n[43]=t()),l("section",null,[l("h2",null,m(e.$t("user.label.enableDismiss")),1),n[25]||(n[25]=t()),l("div",C,[o(s(d),{label:e.$t("user.label.inviteUser"),onClick:n[4]||(n[4]=i=>b.value=!0)},null,8,["label"]),n[23]||(n[23]=t()),o(s(v),{show:b.value,title:e.$t("user.label.inviteUser"),"dismiss-on-click-out":"","onOn:close":n[5]||(n[5]=i=>b.value=!1),onSubmit:r},null,8,["show","title"]),n[24]||(n[24]=t()),o(u,{language:"html-vue"},{default:a(()=>[...n[22]||(n[22]=[t(`
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
        `,-1)])]),_:1})])]),n[44]||(n[44]=t()),l("section",null,[l("h2",null,m(e.$t("user.label.withAppField")),1),n[29]||(n[29]=t()),l("div",O,[o(s(d),{label:e.$t("user.label.invite"),onClick:n[6]||(n[6]=i=>f.value=!0)},null,8,["label"]),n[27]||(n[27]=t()),o(s(v),{apps:E,show:f.value,title:e.$t("user.label.inviteToApp"),"onOn:close":n[7]||(n[7]=i=>f.value=!1),onSubmit:r},null,8,["show","title"]),n[28]||(n[28]=t()),o(u,{language:"html-vue"},{default:a(()=>[...n[26]||(n[26]=[t(`
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
        `,-1)])]),_:1})])]),n[45]||(n[45]=t()),l("section",null,[l("h2",null,m(e.$t("user.label.withRoleField")),1),n[33]||(n[33]=t()),l("div",F,[o(s(d),{label:e.$t("user.label.sendInvitation"),onClick:n[8]||(n[8]=i=>y.value=!0)},null,8,["label"]),n[31]||(n[31]=t()),o(s(v),{roles:g,show:y.value,title:e.$t("user.label.inviteWithRole"),"onOn:close":n[9]||(n[9]=i=>y.value=!1),onSubmit:r},null,8,["show","title"]),n[32]||(n[32]=t()),o(u,{language:"html-vue"},{default:a(()=>[...n[30]||(n[30]=[t(`
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
        `,-1)])]),_:1})])]),n[46]||(n[46]=t()),l("section",null,[l("h2",null,m(e.$t("user.label.withExpiryDate")),1),n[37]||(n[37]=t()),l("div",T,[o(s(d),{label:e.$t("user.label.inviteUser"),onClick:n[10]||(n[10]=i=>M.value=!0)},null,8,["label"]),n[35]||(n[35]=t()),o(s(v),{roles:g,show:M.value,title:e.$t("user.label.inviteWithExpiry"),"expiry-mode":"calendar","onOn:close":n[11]||(n[11]=i=>M.value=!1),onSubmit:r},null,8,["show","title"]),n[36]||(n[36]=t()),o(u,{language:"html-vue"},{default:a(()=>[...n[34]||(n[34]=[t(`
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
        `,-1)])]),_:1})])]),n[47]||(n[47]=t()),l("section",null,[l("h2",null,m(e.$t("user.label.withExpiryDays")),1),n[41]||(n[41]=t()),l("div",V,[o(s(d),{label:e.$t("user.label.sendInvitation"),onClick:n[12]||(n[12]=i=>w.value=!0)},null,8,["label"]),n[39]||(n[39]=t()),o(s(v),{roles:g,show:w.value,title:e.$t("user.label.inviteWithExpiry"),"expiry-mode":"days","onOn:close":n[13]||(n[13]=i=>w.value=!1),onSubmit:r},null,8,["show","title"]),n[40]||(n[40]=t()),o(u,{language:"html-vue"},{default:a(()=>[...n[38]||(n[38]=[t(`
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{q as default};
