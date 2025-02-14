import{d as S,a5 as E,j as m,J as D,o as z,c as k,w as i,K as t,D as a,ao as u,W as n,f as o,L as v}from"./index-729398ab-97e0bd19.js";import{N as p,A as P}from"./index-4c2549d2.js";import{_ as B}from"./UserPage.vue_vue_type_style_index_0_lang-5d975b0e.js";const R={class:"section-content"},A={class:"section-content"},N={class:"section-content"},U={class:"section-content"},C={class:"section-content"},O={class:"section-content"},F={class:"section-content"},J=S({__name:"InvitationModal",setup(T){const{t:y}=E(),f=m(!1),b=m(!1),w=m(!1),h=m(!1),M=m(!1),c=m(!1),g=m(!1),I=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],$=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],r=l=>{P({text:y("user.message.invitation.success",{user:l.email}),type:"success"}),f.value=!1,b.value=!1,w.value=!1,h.value=!1,M.value=!1,c.value=!1,g.value=!1};return(l,e)=>{const d=D("SshPre");return z(),k(B,{title:l.$t("user.label.invitationModal"),class:"demo-invitation-modal"},{toolbar:i(()=>[t(a(u),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>l.$router.push("/user"))},null,8,["label"])]),default:i(()=>[n(),o("section",null,[o("h2",null,v(l.$t("user.label.basic")),1),n(),o("div",R,[t(a(u),{label:l.$t("user.label.invite"),onClick:e[1]||(e[1]=s=>M.value=!0)},null,8,["label"]),n(),t(a(p),{show:M.value,"onOn:close":e[2]||(e[2]=s=>M.value=!1),onSubmit:r},null,8,["show"]),n(),t(d,{language:"html-vue"},{default:i(()=>[n(`
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
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,v(l.$t("user.label.withTitle")),1),n(),o("div",A,[t(a(u),{label:l.$t("user.label.send"),onClick:e[3]||(e[3]=s=>g.value=!0)},null,8,["label"]),n(),t(a(p),{show:g.value,title:l.$t("user.label.invite"),"onOn:close":e[4]||(e[4]=s=>g.value=!1),onSubmit:r},null,8,["show","title"]),n(),t(d,{language:"html-vue"},{default:i(()=>[n(`
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
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,v(l.$t("user.label.disableDismiss")),1),n(),o("div",N,[t(a(u),{label:l.$t("user.label.inviteUser"),onClick:e[5]||(e[5]=s=>b.value=!0)},null,8,["label"]),n(),t(a(p),{"dismiss-on-click-out":!1,show:b.value,title:l.$t("user.label.inviteUser"),"onOn:close":e[6]||(e[6]=s=>b.value=!1),onSubmit:r},null,8,["show","title"]),n(),t(d,{language:"html-vue"},{default:i(()=>[n(`
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
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,v(l.$t("user.label.withAppField")),1),n(),o("div",U,[t(a(u),{label:l.$t("user.label.invite"),onClick:e[7]||(e[7]=s=>f.value=!0)},null,8,["label"]),n(),t(a(p),{apps:$,show:f.value,title:l.$t("user.label.inviteToApp"),"onOn:close":e[8]||(e[8]=s=>f.value=!1),onSubmit:r},null,8,["show","title"]),n(),t(d,{language:"html-vue"},{default:i(()=>[n(`
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
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,v(l.$t("user.label.withRoleField")),1),n(),o("div",C,[t(a(u),{label:l.$t("user.label.sendInvitation"),onClick:e[9]||(e[9]=s=>c.value=!0)},null,8,["label"]),n(),t(a(p),{roles:I,show:c.value,title:l.$t("user.label.inviteWithRole"),"onOn:close":e[10]||(e[10]=s=>c.value=!1),onSubmit:r},null,8,["show","title"]),n(),t(d,{language:"html-vue"},{default:i(()=>[n(`
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
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,v(l.$t("user.label.withExpiryDate")),1),n(),o("div",O,[t(a(u),{label:l.$t("user.label.inviteUser"),onClick:e[11]||(e[11]=s=>h.value=!0)},null,8,["label"]),n(),t(a(p),{roles:I,show:h.value,title:l.$t("user.label.inviteWithExpiry"),"expiry-mode":"calendar","onOn:close":e[12]||(e[12]=s=>h.value=!1),onSubmit:r},null,8,["show","title"]),n(),t(d,{language:"html-vue"},{default:i(()=>[n(`
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
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,v(l.$t("user.label.withExpiryDays")),1),n(),o("div",F,[t(a(u),{label:l.$t("user.label.sendInvitation"),onClick:e[13]||(e[13]=s=>w.value=!0)},null,8,["label"]),n(),t(a(p),{roles:I,show:w.value,title:l.$t("user.label.inviteWithExpiry"),"expiry-mode":"days","onOn:close":e[14]||(e[14]=s=>w.value=!1),onSubmit:r},null,8,["show","title"]),n(),t(d,{language:"html-vue"},{default:i(()=>[n(`
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
        `)]),_:1}),n()])])]),_:1},8,["title"])}}});export{J as default};
