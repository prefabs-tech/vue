import{d as k,a7 as D,j as m,K as y,o as z,c as P,w as i,L as l,C as n,M as u,f as o,E as a,au as v}from"./index-137faed7-93834ea2.js";import{l as p,A as B}from"./index-9b29a3a4.js";import{_ as R}from"./UserPage.vue_vue_type_style_index_0_lang-b6cd9194.js";const A={class:"section-content"},U={class:"section-content"},C={class:"section-content"},N={class:"section-content"},O={class:"section-content"},F={class:"section-content"},T={class:"section-content"},L=k({__name:"InvitationModal",setup(V){const{t:$}=D(),f=m(!1),b=m(!1),w=m(!1),c=m(!1),h=m(!1),M=m(!1),g=m(!1),I=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],E=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],r=t=>{B({text:$("user.message.invitation.success",{user:t.email}),type:"success"}),f.value=!1,b.value=!1,w.value=!1,c.value=!1,h.value=!1,M.value=!1,g.value=!1};return(t,e)=>{const S=y("router-link"),d=y("SshPre");return z(),P(R,{title:t.$t("user.label.invitationModal"),class:"demo-invitation-modal"},{toolbar:i(()=>[l(S,{to:{name:"user"},class:"back"},{default:i(()=>[n(u(t.$t("common.back")),1)]),_:1})]),default:i(()=>[n(),o("section",null,[o("h2",null,u(t.$t("user.label.basic")),1),n(),o("div",A,[l(d,{language:"html-vue"},{default:i(()=>[n(`
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
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          <\/script>
        `)]),_:1}),n(),l(a(v),{label:t.$t("user.label.invite"),onClick:e[0]||(e[0]=s=>h.value=!0)},null,8,["label"]),n(),l(a(p),{show:h.value,"onOn:close":e[1]||(e[1]=s=>h.value=!1),onSubmit:r},null,8,["show"])])]),n(),o("section",null,[o("h2",null,u(t.$t("user.label.withTitle")),1),n(),o("div",U,[l(d,{language:"html-vue"},{default:i(()=>[n(`
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
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          <\/script>
        `)]),_:1}),n(),l(a(v),{label:t.$t("user.label.send"),onClick:e[2]||(e[2]=s=>g.value=!0)},null,8,["label"]),n(),l(a(p),{show:g.value,title:t.$t("user.label.invite"),"onOn:close":e[3]||(e[3]=s=>g.value=!1),onSubmit:r},null,8,["show","title"])])]),n(),o("section",null,[o("h2",null,u(t.$t("user.label.disableDismiss")),1),n(),o("div",C,[l(d,{language:"html-vue"},{default:i(()=>[n(`
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
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          <\/script>
        `)]),_:1}),n(),l(a(v),{label:t.$t("user.label.inviteUser"),onClick:e[4]||(e[4]=s=>b.value=!0)},null,8,["label"]),n(),l(a(p),{"dismiss-on-click-out":!1,show:b.value,title:t.$t("user.label.inviteUser"),"onOn:close":e[5]||(e[5]=s=>b.value=!1),onSubmit:r},null,8,["show","title"])])]),n(),o("section",null,[o("h2",null,u(t.$t("user.label.withAppField")),1),n(),o("div",N,[l(d,{language:"html-vue"},{default:i(()=>[n(`
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
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
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
        `)]),_:1}),n(),l(a(v),{label:t.$t("user.label.invite"),onClick:e[6]||(e[6]=s=>f.value=!0)},null,8,["label"]),n(),l(a(p),{apps:E,show:f.value,title:t.$t("user.label.inviteToApp"),"onOn:close":e[7]||(e[7]=s=>f.value=!1),onSubmit:r},null,8,["show","title"])])]),n(),o("section",null,[o("h2",null,u(t.$t("user.label.withRoleField")),1),n(),o("div",O,[l(d,{language:"html-vue"},{default:i(()=>[n(`
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
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
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
        `)]),_:1}),n(),l(a(v),{label:t.$t("user.label.sendInvitation"),onClick:e[8]||(e[8]=s=>M.value=!0)},null,8,["label"]),n(),l(a(p),{roles:I,show:M.value,title:t.$t("user.label.inviteWithRole"),"onOn:close":e[9]||(e[9]=s=>M.value=!1),onSubmit:r},null,8,["show","title"])])]),n(),o("section",null,[o("h2",null,u(t.$t("user.label.withExpiryDate")),1),n(),o("div",F,[l(d,{language:"html-vue"},{default:i(()=>[n(`
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
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)]),_:1}),n(),l(a(v),{label:t.$t("user.label.inviteUser"),onClick:e[10]||(e[10]=s=>c.value=!0)},null,8,["label"]),n(),l(a(p),{roles:I,show:c.value,title:t.$t("user.label.inviteWithExpiry"),"expiry-mode":"calendar","onOn:close":e[11]||(e[11]=s=>c.value=!1),onSubmit:r},null,8,["show","title"])])]),n(),o("section",null,[o("h2",null,u(t.$t("user.label.withExpiryDays")),1),n(),o("div",T,[l(d,{language:"html-vue"},{default:i(()=>[n(`
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
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          <\/script>
        `)]),_:1}),n(),l(a(v),{label:t.$t("user.label.sendInvitation"),onClick:e[12]||(e[12]=s=>w.value=!0)},null,8,["label"]),n(),l(a(p),{roles:I,show:w.value,title:t.$t("user.label.inviteWithExpiry"),"expiry-mode":"days","onOn:close":e[13]||(e[13]=s=>w.value=!1),onSubmit:r},null,8,["show","title"])])])]),_:1},8,["title"])}}});export{L as default};
