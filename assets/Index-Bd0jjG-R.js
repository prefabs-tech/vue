import{d as B,I as M,r as f,J as A,e as c,o as v,j as l,C as t,f as s,h as i,u as o,a8 as r,t as p,b as E,H as w,v as b,a4 as P}from"./index-DO1TBNbP.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CqQcwUQC.js";import{_ as W}from"./UiPage.vue_vue_type_style_index_0_lang-D9LBOqwv.js";import"./PrefabsTechVue3TanstackTable.es-B2DwPya4.js";import"./PrefabsTechVue3Form.es-C3-yZ6Wf.js";const h={class:"section-content"},N={class:"section-content"},V={class:"section-content"},H={class:"section-content"},I={class:"section-content"},O={class:"section-content"},j={class:"section-content"},z={class:"section-content"},J={class:"section-content"},R=B({__name:"Index",setup(q){const{t:a}=M(),$=[{description:a("ui.page.documentation.eventDescription.actionClick"),name:"action:click",payload:"ToolbarActionMenu"}],C=[{default:"false",description:a("ui.page.documentation.propsDescription.centered"),prop:"centered",type:"Boolean"},{default:"false",description:a("ui.page.documentation.propsDescription.loading"),prop:"loading",type:"Boolean"},{default:"-",description:a("ui.page.documentation.propsDescription.subTitle"),prop:"subTitle",type:"String"},{default:"-",description:a("ui.page.documentation.propsDescription.title"),prop:"title",type:"String"},{default:'"h1"',description:a("ui.page.documentation.propsDescription.titleElement"),prop:"titleElement",type:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"'},{default:"-",description:a("ui.page.documentation.propsDescription.titleTag"),prop:"titleTag",type:"String"},{default:"-",description:a("ui.page.documentation.propsDescription.toolbarActionMenu"),prop:"toolbarActionMenu",type:"ToolbarActionMenu[]"}],D=[{description:a("ui.page.documentation.slotDescription.default"),name:"default"},{description:a("ui.page.documentation.slotDescription.subtitle"),name:"subtitle"},{description:a("ui.page.documentation.slotDescription.toolbar"),name:"toolbar"},{description:a("ui.page.documentation.slotDescription.titleTag"),name:"titleTag"}],y=[{icon:"pi pi-plus",key:"add",label:"Add"},{icon:"pi pi-pencil",key:"edit",label:"Edit"},{class:"danger",icon:"pi pi-trash",key:"delete",label:"Delete",severity:"danger"}],g=f(a("ui.page.label.content")),d=f(!1),k=n=>{switch(n==null?void 0:n.key){case"add":g.value=a("ui.page.label.addContent");break;case"edit":g.value=a("ui.page.label.editContent");break;case"delete":d.value=!0;break}},T=()=>{g.value=a("ui.page.label.deleteContent"),d.value=!1};return(n,e)=>{const u=A("SshPre");return v(),c(W,{"sub-title":n.$t("ui.page.subtitle"),title:n.$t("ui.page.title"),class:"demo"},{toolbar:l(()=>[i(o(b),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=m=>n.$router.push("/ui"))},null,8,["label"])]),default:l(()=>[e[22]||(e[22]=t()),s("section",null,[s("div",h,[i(o(r),{title:n.$t("ui.page.usage.basic"),"title-element":"h2"},{default:l(()=>[t(p(n.$t("ui.page.label.content")),1)]),_:1},8,["title"]),e[4]||(e[4]=t()),i(u,{language:"html-vue"},{default:l(()=>e[3]||(e[3]=[t(`
          <template>
            <Page title="Basic">Page content</Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[23]||(e[23]=t()),s("section",null,[s("div",N,[i(o(r),{title:n.$t("ui.page.usage.toolbar"),"toolbar-actions-menu":y,"title-element":"h2","onAction:click":e[1]||(e[1]=m=>k(m))},{default:l(()=>[t(p(g.value),1)]),_:1},8,["title"]),e[5]||(e[5]=t()),d.value?(v(),c(o(w),{key:0,"onOn:close":e[2]||(e[2]=m=>d.value=!1),"onOn:confirm":T})):E("",!0),e[6]||(e[6]=t()),i(u,{language:"html-vue"},{default:l(()=>[t(`
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

          const pageContent = ref<string>("`+p(o(a)("ui.page.label.content"))+`");
          const showDeleteModal = ref<boolean>(false);

          const onActionClick = (actionMenu: ToolbarActionMenu) => {
            switch(actionMenu?.key) {
              case "add":
                pageContent.value = "`+p(o(a)("ui.page.label.addContent"))+`";
                break;
              case "edit":
                pageContent.value = "`+p(o(a)("ui.page.label.editContent"))+`";
                break;
              case "delete":
                showDeleteModal.value = true;
                break;
            }
          };

          const onConfirmDelete = () => {
            pageContent.value = "`+p(o(a)("ui.page.label.deleteContent"))+`";
            showDeleteModal.value = false;
          }
          <\/script>
        `,1)]),_:1})])]),e[24]||(e[24]=t()),s("section",null,[s("div",V,[i(o(r),{title:n.$t("ui.page.usage.toolbarSlot"),"title-element":"h2"},{toolbar:l(()=>[i(o(b),{label:n.$t("ui.page.label.edit")},null,8,["label"])]),default:l(()=>[t(p(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e[8]||(e[8]=t()),i(u,{language:"html-vue"},{default:l(()=>e[7]||(e[7]=[t(`
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
        `)])),_:1})])]),e[25]||(e[25]=t()),s("section",null,[s("div",H,[i(o(r),{title:n.$t("ui.page.usage.centerAligned"),centered:"","title-element":"h2"},{toolbar:l(()=>[i(o(b),{label:n.$t("ui.page.label.edit")},null,8,["label"])]),default:l(()=>[t(p(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e[10]||(e[10]=t()),i(u,{language:"html-vue"},{default:l(()=>e[9]||(e[9]=[t(`
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
        `)])),_:1})])]),e[26]||(e[26]=t()),s("section",null,[s("div",I,[i(o(r),{"sub-title":n.$t("ui.page.label.subtitle"),title:n.$t("ui.page.usage.subtitle"),"title-element":"h2"},{default:l(()=>[t(p(n.$t("ui.page.label.content")),1)]),_:1},8,["sub-title","title"]),e[12]||(e[12]=t()),i(u,{language:"html-vue"},{default:l(()=>e[11]||(e[11]=[t(`
          <template>
            <Page sub-title="Page subtitle" title="With subtitle">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[27]||(e[27]=t()),s("section",null,[s("div",O,[i(o(r),{title:n.$t("ui.page.usage.subtitleSlot"),"title-element":"h2"},{subtitle:l(()=>[i(o(P),{label:n.$t("ui.page.label.subtitle")},null,8,["label"])]),default:l(()=>[t(p(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e[14]||(e[14]=t()),i(u,{language:"html-vue"},{default:l(()=>e[13]||(e[13]=[t(`
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
        `)])),_:1})])]),e[28]||(e[28]=t()),s("section",null,[s("div",j,[i(o(r),{title:n.$t("ui.page.usage.titleTag"),"title-tag":n.$t("ui.page.label.titleTag"),"title-element":"h2"},{default:l(()=>[t(p(n.$t("ui.page.label.content")),1)]),_:1},8,["title","title-tag"]),e[16]||(e[16]=t()),i(u,{language:"html-vue"},{default:l(()=>e[15]||(e[15]=[t(`
          <template>
            <Page title="With title tag" title-tag="Heading tag">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[29]||(e[29]=t()),s("section",null,[s("div",z,[i(o(r),{title:n.$t("ui.page.usage.titleTagSlot"),"title-element":"h2"},{titleTag:l(()=>[i(o(P),{label:n.$t("ui.page.label.titleTag"),severity:"success"},null,8,["label"])]),default:l(()=>[t(p(n.$t("ui.page.label.content"))+" ",1)]),_:1},8,["title"]),e[18]||(e[18]=t()),i(u,{language:"html-vue"},{default:l(()=>e[17]||(e[17]=[t(`
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
        `)])),_:1})])]),e[30]||(e[30]=t()),s("section",null,[s("div",J,[i(o(r),{title:n.$t("ui.page.usage.titleElement"),"title-element":"h3"},{default:l(()=>[t(p(n.$t("ui.page.label.content")),1)]),_:1},8,["title"]),e[20]||(e[20]=t()),i(u,{language:"html-vue"},{default:l(()=>e[19]||(e[19]=[t(`
          <template>
            <Page title="With title element" title-element="h3">
              Page content
            </Page>
          </template>

          <script setup lang="ts">
          import { Page } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[31]||(e[31]=t()),i(S,{"events-data":$,"props-data":C,"props-table-title":n.$t("common.properties",{value:"PageProperties"}),"slots-data":D},null,8,["props-table-title"]),e[32]||(e[32]=t()),i(u,{language:"html-vue"},{default:l(()=>e[21]||(e[21]=[t(`
      interface ToolbarActionMenu extends DropdownMenu, ButtonElementProps {}
    `)])),_:1})]),_:1},8,["sub-title","title"])}}});export{R as default};
