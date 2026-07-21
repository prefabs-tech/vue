import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l,vn as u,y as d}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{D as f,T as p,_ as m,o as h}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{T as g}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as _}from"./ComponentDocumentation-CFBF3GmY.js";import{t as v}from"./UiPage-eTNUnuuQ.js";var y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E={class:`section-content`},D={class:`section-content`},O=a({name:`PageDemo`,setup(a){let{t:O}=g(),k=[{description:O(`ui.page.documentation.eventDescription.actionClick`),name:`action:click`,payload:`ToolbarActionMenu`}],A=[{default:`false`,description:O(`ui.page.documentation.propsDescription.centered`),prop:`centered`,type:`Boolean`},{default:`false`,description:O(`ui.page.documentation.propsDescription.loading`),prop:`loading`,type:`Boolean`},{default:`-`,description:O(`ui.page.documentation.propsDescription.subtitle`),prop:`subtitle`,type:`String`},{default:`-`,description:O(`ui.page.documentation.propsDescription.title`),prop:`title`,type:`String`},{default:`"h1"`,description:O(`ui.page.documentation.propsDescription.titleElement`),prop:`titleElement`,type:`"h1" | "h2" | "h3" | "h4" | "h5" | "h6"`},{default:`-`,description:O(`ui.page.documentation.propsDescription.titleTag`),prop:`titleTag`,type:`String`},{default:`-`,description:O(`ui.page.documentation.propsDescription.toolbarActionMenu`),prop:`toolbarActionMenu`,type:`ToolbarActionMenu[]`}],j=[{description:O(`ui.page.documentation.slotDescription.default`),name:`default`},{description:O(`ui.page.documentation.slotDescription.subtitle`),name:`subtitle`},{description:O(`ui.page.documentation.slotDescription.toolbar`),name:`toolbar`},{description:O(`ui.page.documentation.slotDescription.titleTag`),name:`titleTag`}],M=[{icon:`pi pi-plus`,key:`add`,label:`Add`},{icon:`pi pi-pencil`,key:`edit`,label:`Edit`},{class:`danger`,icon:`pi pi-trash`,key:`delete`,label:`Delete`,severity:`danger`}],N=u(O(`ui.page.label.content`)),P=u(!1),F=e=>{switch(e?.key){case`add`:N.value=O(`ui.page.label.addContent`);break;case`delete`:P.value=!0;break;case`edit`:N.value=O(`ui.page.label.editContent`);break}},I=()=>{N.value=O(`ui.page.label.deleteContent`),P.value=!1};return(a,u)=>{let g=r(`SshPre`);return o(),l(v,{subtitle:a.$t(`ui.page.subtitle`),title:a.$t(`ui.page.title`),class:`demo`},{default:s(()=>[i(`section`,null,[i(`div`,y,[e(n(m),{title:a.$t(`ui.page.usage.basic`),"title-element":`h2`},{default:s(()=>[t(c(a.$t(`ui.page.label.content`)),1)]),_:1},8,[`title`]),u[3]||=t(),e(g,{language:`html-vue`},{default:s(()=>[...u[2]||=[t(`
          <template>
            <Page title="Basic">Page content</Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),u[21]||=t(),i(`section`,null,[i(`div`,b,[e(n(m),{title:a.$t(`ui.page.usage.toolbar`),"toolbar-actions-menu":M,"title-element":`h2`,"onAction:click":u[0]||=e=>F(e)},{default:s(()=>[t(c(N.value),1)]),_:1},8,[`title`]),u[4]||=t(),P.value?(o(),l(n(p),{key:0,"onOn:close":u[1]||=e=>P.value=!1,"onOn:confirm":I})):d(``,!0),u[5]||=t(),e(g,{language:`html-vue`},{default:s(()=>[t(`
          <template>
            <Page
              :toolbar-actions-menu="actions"
              title="With toolbar"
            >
              {{ pageContent }}
            </Page>

            <ConfirmationModal
              v-if="showDeleteModal"
              @on:close="showDeleteModal = false"
              @on:confirm="onConfirmDelete"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement, ConfirmationModal, Page } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          import type { ToolbarActionMenu } from "@prefabs.tech/vue3-ui";

          const actions = [
            {
              icon: "pi pi-plus",
              key: "add",
              label: "Add",
            },
            {
              icon: "pi pi-pencil",
              key: "edit",
              label: "Edit",
            },
            {
              class: "danger",
              icon: "pi pi-trash",
              key: "delete",
              label: "Delete",
              severity: "danger",
            },
          ];

          const pageContent = ref<string>("`+c(n(O)(`ui.page.label.content`))+`");
          const showDeleteModal = ref<boolean>(false);

          const onActionClick = (actionMenu: ToolbarActionMenu) => {
            switch(actionMenu?.key) {
              case "add":
                pageContent.value = "`+c(n(O)(`ui.page.label.addContent`))+`";
                break;
              case "edit":
                pageContent.value = "`+c(n(O)(`ui.page.label.editContent`))+`";
                break;
              case "delete":
                showDeleteModal.value = true;
                break;
            }
          };

          const onConfirmDelete = () => {
            pageContent.value = "`+c(n(O)(`ui.page.label.deleteContent`))+`";
            showDeleteModal.value = false;
          }
          <\/script>
        `,1)]),_:1})])]),u[22]||=t(),i(`section`,null,[i(`div`,x,[e(n(m),{title:a.$t(`ui.page.usage.toolbarSlot`),"title-element":`h2`},{toolbar:s(()=>[e(n(h),{label:a.$t(`ui.page.label.edit`)},null,8,[`label`])]),default:s(()=>[t(c(a.$t(`ui.page.label.content`))+` `,1)]),_:1},8,[`title`]),u[7]||=t(),e(g,{language:`html-vue`},{default:s(()=>[...u[6]||=[t(`
          <template>
            <Page title="With toolbar">
              Page content

              <template #toolbar>
                <ButtonElement label="Edit" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),u[23]||=t(),i(`section`,null,[i(`div`,S,[e(n(m),{title:a.$t(`ui.page.usage.centerAligned`),centered:``,"title-element":`h2`},{toolbar:s(()=>[e(n(h),{label:a.$t(`ui.page.label.edit`)},null,8,[`label`])]),default:s(()=>[t(c(a.$t(`ui.page.label.content`))+` `,1)]),_:1},8,[`title`]),u[9]||=t(),e(g,{language:`html-vue`},{default:s(()=>[...u[8]||=[t(`
          <template>
            <Page title="With center aligned contents" centered>
              Page content

              <template #toolbar>
                <ButtonElement label="Edit" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Page } from "@prefabs.tech/vue3-ui";
          <\/script>

          <style lang="css">
          .page[data-centered="true"] {
            --page-max-width: 400px;
          }
          </style>
        `,-1)]]),_:1})])]),u[24]||=t(),i(`section`,null,[i(`div`,C,[e(n(m),{subtitle:a.$t(`ui.page.label.subtitle`),title:a.$t(`ui.page.usage.subtitle`),"title-element":`h2`},{default:s(()=>[t(c(a.$t(`ui.page.label.content`)),1)]),_:1},8,[`subtitle`,`title`]),u[11]||=t(),e(g,{language:`html-vue`},{default:s(()=>[...u[10]||=[t(`
          <template>
            <Page subtitle="Page subtitle" title="With subtitle">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),u[25]||=t(),i(`section`,null,[i(`div`,w,[e(n(m),{title:a.$t(`ui.page.usage.subtitleSlot`),"title-element":`h2`},{subtitle:s(()=>[e(n(f),{label:a.$t(`ui.page.label.subtitle`)},null,8,[`label`])]),default:s(()=>[t(c(a.$t(`ui.page.label.content`))+` `,1)]),_:1},8,[`title`]),u[13]||=t(),e(g,{language:`html-vue`},{default:s(()=>[...u[12]||=[t(`
          <template>
            <Page title="With subtitle slot">
              Page content

              <template #subtitle>
                <BadgeComponent label="Page subtitle" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { BadgeComponent, Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),u[26]||=t(),i(`section`,null,[i(`div`,T,[e(n(m),{title:a.$t(`ui.page.usage.titleTag`),"title-tag":a.$t(`ui.page.label.titleTag`),"title-element":`h2`},{default:s(()=>[t(c(a.$t(`ui.page.label.content`)),1)]),_:1},8,[`title`,`title-tag`]),u[15]||=t(),e(g,{language:`html-vue`},{default:s(()=>[...u[14]||=[t(`
          <template>
            <Page title="With title tag" title-tag="Heading tag">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),u[27]||=t(),i(`section`,null,[i(`div`,E,[e(n(m),{title:a.$t(`ui.page.usage.titleTagSlot`),"title-element":`h2`},{titleTag:s(()=>[e(n(f),{label:a.$t(`ui.page.label.titleTag`),severity:`success`},null,8,[`label`])]),default:s(()=>[t(c(a.$t(`ui.page.label.content`))+` `,1)]),_:1},8,[`title`]),u[17]||=t(),e(g,{language:`html-vue`},{default:s(()=>[...u[16]||=[t(`
          <template>
            <Page title="With title tag slot">
              Page content

              <template #titleTag>
                <BadgeComponent label="Heading tag" severity="success" />
              </template>
            </Page>
          </template>

          <script setup lang="ts">
          import { BadgeComponent, Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),u[28]||=t(),i(`section`,null,[i(`div`,D,[e(n(m),{title:a.$t(`ui.page.usage.titleElement`),"title-element":`h3`},{default:s(()=>[t(c(a.$t(`ui.page.label.content`)),1)]),_:1},8,[`title`]),u[19]||=t(),e(g,{language:`html-vue`},{default:s(()=>[...u[18]||=[t(`
          <template>
            <Page title="With title element" title-element="h3">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),u[29]||=t(),e(_,{"events-data":k,"props-data":A,"props-table-title":a.$t(`common.properties`,{value:`PageProperties`}),"slots-data":j},null,8,[`props-table-title`]),u[30]||=t(),e(g,{language:`html-vue`},{default:s(()=>[...u[20]||=[t(`
      interface ToolbarActionMenu extends DropdownMenu, ButtonElementProps {}
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{O as default};