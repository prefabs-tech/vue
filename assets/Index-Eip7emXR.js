import{D as e,E as t,On as n,St as r,_ as i,g as a,k as o,mt as s,qt as c,tr as l,v as u}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{T as d}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{n as f}from"./PrefabsTechVue3User.es-CdAxx7NP.js";import{t as p}from"./ComponentDocumentation-CFBF3GmY.js";import{t as m}from"./UserPage-msSnMBuM.js";var h={class:`section-content`},g={class:`section-content`},_={class:`section-content`},v={class:`section-content`},y={class:`section-content`},b=o({name:`InvitaionFormDemo`,setup(o){let{t:b}=d(),x=[{id:1,name:`ADMIN`},{id:2,name:`SUPERADMIN`},{id:3,name:`USER`}],S=[{id:1,name:`Admin`,origin:`admin-origin`,supportedRoles:[{id:1,name:`ADMIN`},{id:2,name:`SUPERADMIN`}]},{id:2,name:`User`,origin:`user-origin`,supportedRoles:[{id:3,name:`USER`}]}],C=a(()=>[{description:b(`user.documentation.eventDescription.invitation.cancel`),name:`cancel`,payload:`-`},{description:b(`user.documentation.eventDescription.invitation.submitted`),name:`submitted`,payload:`-`}]),w=a(()=>[{default:`-`,description:b(`user.documentation.propsDescription.invitation.apps`),prop:`apps`,type:`Array<InvitationAppOption>`},{default:`z.coerce.number().gte(1)`,description:b(`user.documentation.propsDescription.invitation.appSchema`),prop:`appSchema`,type:`z.ZodType<string | number | string[] | number[]>`},{default:`z.coerce.number().gte(1)`,description:b(`user.documentation.propsDescription.invitation.expiresAfterSchema`),prop:`expiresAfterSchema`,type:`z.ZodType<string | number>`},{default:`z.coerce.date().min(new Date(new Date().setHours(0,0,0,0)))`,description:b(`user.documentation.propsDescription.invitation.expiresAtSchema`),prop:`expiresAtSchema`,type:`z.ZodType<string | number | Date | object>`},{default:`-`,description:b(`user.documentation.propsDescription.invitation.expiryMode`),prop:`expiryMode`,type:`"calendar" | "days"`},{default:`-`,description:b(`user.documentation.propsDescription.invitation.invitationData`),prop:`invitationData`,type:`InvitationPayload`},{default:`-`,description:b(`user.documentation.propsDescription.invitation.roles`),prop:`roles`,type:`Array<InvitationRoleOption>`},{default:`z.string()`,description:b(`user.documentation.propsDescription.invitation.roleSchema`),prop:`roleSchema`,type:`z.ZodType<string | number | string[] | number[]>`},{default:`"Invite user"`,description:b(`user.documentation.propsDescription.invitation.submitLabel`),prop:`submitLabel`,type:`String`}]);return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:a.$t(`user.subtitle.invitationForm`),title:a.$t(`user.label.invitationForm`),class:`demo-invitation-form`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.basic`)),1),o[2]||=t(),i(`div`,h,[e(n(f)),o[1]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[0]||=[t(`
          <template>
            <InvitationForm />
          </template>

          <script setup lang="ts">
          import { InvitationForm } from "@prefabs.tech/vue3-user";
          <\/script>
        `,-1)]]),_:1})])]),o[16]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.withAppField`)),1),o[5]||=t(),i(`div`,g,[e(n(f),{apps:S}),o[4]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[3]||=[t(`
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
        `,-1)]]),_:1})])]),o[17]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.withRoleField`)),1),o[8]||=t(),i(`div`,_,[e(n(f),{roles:x}),o[7]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[6]||=[t(`
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
        `,-1)]]),_:1})])]),o[18]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.withExpiryDate`)),1),o[11]||=t(),i(`div`,v,[e(n(f),{roles:x,"expiry-mode":`calendar`}),o[10]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[9]||=[t(`
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
        `,-1)]]),_:1})])]),o[19]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.withExpiryDays`)),1),o[14]||=t(),i(`div`,y,[e(n(f),{roles:x,"expiry-mode":`days`}),o[13]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[12]||=[t(`
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
        `,-1)]]),_:1})])]),o[20]||=t(),e(p,{"events-data":C.value,"props-data":w.value,"props-table-title":a.$t(`common.properties`,{value:`InvitationFormProperties`})},null,8,[`events-data`,`props-data`,`props-table-title`]),o[21]||=t(),i(`section`,null,[e(d,{language:`html-vue`},{default:c(()=>[...o[15]||=[t(`
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
      `,-1)]]),_:1})])]),_:1},8,[`subtitle`,`title`])}}});export{b as default};