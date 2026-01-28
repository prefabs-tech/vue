import{d as T,I as M,r as b,J as A,b as f,o as c,h as l,e as o,y as t,g as a,u as s,a6 as r,t as p,a as E,D as w,l as v,a1 as P}from"./index-ChCRVvjK.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Cwz8Rx7k.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-CvkWhg10.js";import"./PrefabsTechVue3TanstackTable.es-CxF3R9ob.js";import"./PrefabsTechVue3Form.es-Hgzq1QlS.js";const W={class:"section-content"},N={class:"section-content"},V={class:"section-content"},I={class:"section-content"},H={class:"section-content"},O={class:"section-content"},J={class:"section-content"},j={class:"section-content"},q={class:"section-content"},R=T({__name:"Index",setup(z){const{t:i}=M(),D=[{description:i("ui.page.documentation.eventDescription.actionClick"),name:"action:click",payload:"ToolbarActionMenu"}],$=[{default:"false",description:i("ui.page.documentation.propsDescription.centered"),prop:"centered",type:"Boolean"},{default:"false",description:i("ui.page.documentation.propsDescription.loading"),prop:"loading",type:"Boolean"},{default:"-",description:i("ui.page.documentation.propsDescription.subtitle"),prop:"subtitle",type:"String"},{default:"-",description:i("ui.page.documentation.propsDescription.title"),prop:"title",type:"String"},{default:'"h1"',description:i("ui.page.documentation.propsDescription.titleElement"),prop:"titleElement",type:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"'},{default:"-",description:i("ui.page.documentation.propsDescription.titleTag"),prop:"titleTag",type:"String"},{default:"-",description:i("ui.page.documentation.propsDescription.toolbarActionMenu"),prop:"toolbarActionMenu",type:"ToolbarActionMenu[]"}],C=[{description:i("ui.page.documentation.slotDescription.default"),name:"default"},{description:i("ui.page.documentation.slotDescription.subtitle"),name:"subtitle"},{description:i("ui.page.documentation.slotDescription.toolbar"),name:"toolbar"},{description:i("ui.page.documentation.slotDescription.titleTag"),name:"titleTag"}],y=[{icon:"pi pi-plus",key:"add",label:"Add"},{icon:"pi pi-pencil",key:"edit",label:"Edit"},{class:"danger",icon:"pi pi-trash",key:"delete",label:"Delete",severity:"danger"}],g=b(i("ui.page.label.content")),d=b(!1),k=n=>{switch(n==null?void 0:n.key){case"add":g.value=i("ui.page.label.addContent");break;case"edit":g.value=i("ui.page.label.editContent");break;case"delete":d.value=!0;break}},B=()=>{g.value=i("ui.page.label.deleteContent"),d.value=!1};return(n,e)=>{const u=A("SshPre");return c(),f(h,{subtitle:n.$t("ui.page.subtitle"),title:n.$t("ui.page.title"),class:"demo"},{default:l(()=>[o("section",null,[o("div",W,[a(s(r),{title:n.$t("ui.page.usage.basic"),"title-element":"h2"},{default:l(()=>[t(p(n.$t("ui.page.label.content")),1)]),_:1},8,["title"]),e[3]||(e[3]=t()),a(u,{language:"html-vue"},{default:l(()=>[...e[2]||(e[2]=[t(`
          <template>
            <Page title="Basic">Page content</Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[21]||(e[21]=t()),o("section",null,[o("div",N,[a(s(r),{title:n.$t("ui.page.usage.toolbar"),"toolbar-actions-menu":y,"title-element":"h2","onAction:click":e[0]||(e[0]=m=>k(m))},{default:l(()=>[t(p(g.value),1)]),_:1},8,["title"]),e[4]||(e[4]=t()),d.value?(c(),f(s(w),{key:0,"onOn:close":e[1]||(e[1]=m=>d.value=!1),"onOn:confirm":B})):E("",!0),e[5]||(e[5]=t()),a(u,{language:"html-vue"},{default:l(()=>[t(`
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

          const pageContent = ref<string>("`+p(s(i)("ui.page.label.content"))+`");
          const showDeleteModal = ref<boolean>(false);

          const onActionClick = (actionMenu: ToolbarActionMenu) => {
            switch(actionMenu?.key) {
              case "add":
                pageContent.value = "`+p(s(i)("ui.page.label.addContent"))+`";
                break;
              case "edit":
                pageContent.value = "`+p(s(i)("ui.page.label.editContent"))+`";
                break;
              case "delete":
                showDeleteModal.value = true;
                break;
            }
          };

          const onConfirmDelete = () => {
            pageContent.value = "`+p(s(i)("ui.page.label.deleteContent"))+`";
            showDeleteModal.value = false;
          }
          <\/script>
        `,1)]),_:1})])]),e[22]||(e[22]=t()),o("section",null,[o("div",V,[a(s(r),{title:n.$t("ui.page.usage.toolbarSlot"),"title-element":"h2"},{toolbar:l(()=>[a(s(v),{label:n.$t("ui.page.label.edit")},null,8,["label"])]),default:l(()=>[t(p(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e[7]||(e[7]=t()),a(u,{language:"html-vue"},{default:l(()=>[...e[6]||(e[6]=[t(`
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
        `,-1)])]),_:1})])]),e[23]||(e[23]=t()),o("section",null,[o("div",I,[a(s(r),{title:n.$t("ui.page.usage.centerAligned"),centered:"","title-element":"h2"},{toolbar:l(()=>[a(s(v),{label:n.$t("ui.page.label.edit")},null,8,["label"])]),default:l(()=>[t(p(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e[9]||(e[9]=t()),a(u,{language:"html-vue"},{default:l(()=>[...e[8]||(e[8]=[t(`
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
        `,-1)])]),_:1})])]),e[24]||(e[24]=t()),o("section",null,[o("div",H,[a(s(r),{subtitle:n.$t("ui.page.label.subtitle"),title:n.$t("ui.page.usage.subtitle"),"title-element":"h2"},{default:l(()=>[t(p(n.$t("ui.page.label.content")),1)]),_:1},8,["subtitle","title"]),e[11]||(e[11]=t()),a(u,{language:"html-vue"},{default:l(()=>[...e[10]||(e[10]=[t(`
          <template>
            <Page subtitle="Page subtitle" title="With subtitle">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[25]||(e[25]=t()),o("section",null,[o("div",O,[a(s(r),{title:n.$t("ui.page.usage.subtitleSlot"),"title-element":"h2"},{subtitle:l(()=>[a(s(P),{label:n.$t("ui.page.label.subtitle")},null,8,["label"])]),default:l(()=>[t(p(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e[13]||(e[13]=t()),a(u,{language:"html-vue"},{default:l(()=>[...e[12]||(e[12]=[t(`
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
        `,-1)])]),_:1})])]),e[26]||(e[26]=t()),o("section",null,[o("div",J,[a(s(r),{title:n.$t("ui.page.usage.titleTag"),"title-tag":n.$t("ui.page.label.titleTag"),"title-element":"h2"},{default:l(()=>[t(p(n.$t("ui.page.label.content")),1)]),_:1},8,["title","title-tag"]),e[15]||(e[15]=t()),a(u,{language:"html-vue"},{default:l(()=>[...e[14]||(e[14]=[t(`
          <template>
            <Page title="With title tag" title-tag="Heading tag">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[27]||(e[27]=t()),o("section",null,[o("div",j,[a(s(r),{title:n.$t("ui.page.usage.titleTagSlot"),"title-element":"h2"},{titleTag:l(()=>[a(s(P),{label:n.$t("ui.page.label.titleTag"),severity:"success"},null,8,["label"])]),default:l(()=>[t(p(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e[17]||(e[17]=t()),a(u,{language:"html-vue"},{default:l(()=>[...e[16]||(e[16]=[t(`
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
        `,-1)])]),_:1})])]),e[28]||(e[28]=t()),o("section",null,[o("div",q,[a(s(r),{title:n.$t("ui.page.usage.titleElement"),"title-element":"h3"},{default:l(()=>[t(p(n.$t("ui.page.label.content")),1)]),_:1},8,["title"]),e[19]||(e[19]=t()),a(u,{language:"html-vue"},{default:l(()=>[...e[18]||(e[18]=[t(`
          <template>
            <Page title="With title element" title-element="h3">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[29]||(e[29]=t()),a(S,{"events-data":D,"props-data":$,"props-table-title":n.$t("common.properties",{value:"PageProperties"}),"slots-data":C},null,8,["props-table-title"]),e[30]||(e[30]=t()),a(u,{language:"html-vue"},{default:l(()=>[...e[20]||(e[20]=[t(`
      interface ToolbarActionMenu extends DropdownMenu, ButtonElementProps {}
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{R as default};
