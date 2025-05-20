import{d as D,L as z,r as m,K as k,f as P,o as B,i as a,D as l,g as e,t as v,h as o,u as s,v as u,X as p,V as R}from"./index-C-aoaGfb.js";import{_ as A}from"./UserPage.vue_vue_type_style_index_0_lang-D9v9DiE2.js";const U={class:"section-content"},C={class:"section-content"},N={class:"section-content"},O={class:"section-content"},F={class:"section-content"},T={class:"section-content"},V={class:"section-content"},X=D({__name:"InvitationModal",setup(W){const{t:E}=z(),f=m(!1),b=m(!1),w=m(!1),M=m(!1),g=m(!1),I=m(!1),y=m(!1),$=[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"},{id:3,name:"USER"}],S=[{id:1,name:"Admin",origin:"admin-origin",supportedRoles:[{id:1,name:"ADMIN"},{id:2,name:"SUPERADMIN"}]},{id:2,name:"User",origin:"user-origin",supportedRoles:[{id:3,name:"USER"}]}],r=t=>{R({text:E("user.message.invitation.success",{user:t.email}),type:"success"}),f.value=!1,b.value=!1,w.value=!1,M.value=!1,g.value=!1,I.value=!1,y.value=!1};return(t,n)=>{const d=k("SshPre");return B(),P(A,{title:t.$t("user.label.invitationModal"),class:"demo-invitation-modal"},{toolbar:a(()=>[o(s(u),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=i=>t.$router.push("/user"))},null,8,["label"])]),default:a(()=>[n[43]||(n[43]=l()),e("section",null,[e("h2",null,v(t.$t("user.label.basic")),1),n[18]||(n[18]=l()),e("div",U,[o(s(u),{label:t.$t("user.label.invite"),onClick:n[1]||(n[1]=i=>g.value=!0)},null,8,["label"]),n[16]||(n[16]=l()),o(s(p),{show:g.value,"onOn:close":n[2]||(n[2]=i=>g.value=!1),onSubmit:r},null,8,["show"]),n[17]||(n[17]=l()),o(d,{language:"html-vue"},{default:a(()=>n[15]||(n[15]=[l(`
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
        `)])),_:1})])]),n[44]||(n[44]=l()),e("section",null,[e("h2",null,v(t.$t("user.label.withTitle")),1),n[22]||(n[22]=l()),e("div",C,[o(s(u),{label:t.$t("user.label.send"),onClick:n[3]||(n[3]=i=>y.value=!0)},null,8,["label"]),n[20]||(n[20]=l()),o(s(p),{show:y.value,title:t.$t("user.label.invite"),"onOn:close":n[4]||(n[4]=i=>y.value=!1),onSubmit:r},null,8,["show","title"]),n[21]||(n[21]=l()),o(d,{language:"html-vue"},{default:a(()=>n[19]||(n[19]=[l(`
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
        `)])),_:1})])]),n[45]||(n[45]=l()),e("section",null,[e("h2",null,v(t.$t("user.label.disableDismiss")),1),n[26]||(n[26]=l()),e("div",N,[o(s(u),{label:t.$t("user.label.inviteUser"),onClick:n[5]||(n[5]=i=>b.value=!0)},null,8,["label"]),n[24]||(n[24]=l()),o(s(p),{"dismiss-on-click-out":!1,show:b.value,title:t.$t("user.label.inviteUser"),"onOn:close":n[6]||(n[6]=i=>b.value=!1),onSubmit:r},null,8,["show","title"]),n[25]||(n[25]=l()),o(d,{language:"html-vue"},{default:a(()=>n[23]||(n[23]=[l(`
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
        `)])),_:1})])]),n[46]||(n[46]=l()),e("section",null,[e("h2",null,v(t.$t("user.label.withAppField")),1),n[30]||(n[30]=l()),e("div",O,[o(s(u),{label:t.$t("user.label.invite"),onClick:n[7]||(n[7]=i=>f.value=!0)},null,8,["label"]),n[28]||(n[28]=l()),o(s(p),{apps:S,show:f.value,title:t.$t("user.label.inviteToApp"),"onOn:close":n[8]||(n[8]=i=>f.value=!1),onSubmit:r},null,8,["show","title"]),n[29]||(n[29]=l()),o(d,{language:"html-vue"},{default:a(()=>n[27]||(n[27]=[l(`
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
        `)])),_:1})])]),n[47]||(n[47]=l()),e("section",null,[e("h2",null,v(t.$t("user.label.withRoleField")),1),n[34]||(n[34]=l()),e("div",F,[o(s(u),{label:t.$t("user.label.sendInvitation"),onClick:n[9]||(n[9]=i=>I.value=!0)},null,8,["label"]),n[32]||(n[32]=l()),o(s(p),{roles:$,show:I.value,title:t.$t("user.label.inviteWithRole"),"onOn:close":n[10]||(n[10]=i=>I.value=!1),onSubmit:r},null,8,["show","title"]),n[33]||(n[33]=l()),o(d,{language:"html-vue"},{default:a(()=>n[31]||(n[31]=[l(`
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
        `)])),_:1})])]),n[48]||(n[48]=l()),e("section",null,[e("h2",null,v(t.$t("user.label.withExpiryDate")),1),n[38]||(n[38]=l()),e("div",T,[o(s(u),{label:t.$t("user.label.inviteUser"),onClick:n[11]||(n[11]=i=>M.value=!0)},null,8,["label"]),n[36]||(n[36]=l()),o(s(p),{roles:$,show:M.value,title:t.$t("user.label.inviteWithExpiry"),"expiry-mode":"calendar","onOn:close":n[12]||(n[12]=i=>M.value=!1),onSubmit:r},null,8,["show","title"]),n[37]||(n[37]=l()),o(d,{language:"html-vue"},{default:a(()=>n[35]||(n[35]=[l(`
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
        `)])),_:1})])]),n[49]||(n[49]=l()),e("section",null,[e("h2",null,v(t.$t("user.label.withExpiryDays")),1),n[42]||(n[42]=l()),e("div",V,[o(s(u),{label:t.$t("user.label.sendInvitation"),onClick:n[13]||(n[13]=i=>w.value=!0)},null,8,["label"]),n[40]||(n[40]=l()),o(s(p),{roles:$,show:w.value,title:t.$t("user.label.inviteWithExpiry"),"expiry-mode":"days","onOn:close":n[14]||(n[14]=i=>w.value=!1),onSubmit:r},null,8,["show","title"]),n[41]||(n[41]=l()),o(d,{language:"html-vue"},{default:a(()=>n[39]||(n[39]=[l(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{X as default};
