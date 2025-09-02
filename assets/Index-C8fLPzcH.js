import{d as O,I as E,r as d,J as H,e as T,o as g,j as r,C as i,f as t,h as a,t as b,u as s,a9 as c,v as k,a as M,F as U,z as F,b as I,H as R}from"./index-DhI5jERR.js";import{_ as j}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-oyIqT1tE.js";import{_ as J}from"./UiPage.vue_vue_type_style_index_0_lang-DEgBIvre.js";import"./PrefabsTechVue3TanstackTable.es-BRRM-lG-.js";import"./PrefabsTechVue3Form.es-B5mCsZPN.js";const q={class:"section-content"},G={class:"section-content"},Q={class:"section-content"},W={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={class:"tab-button-group"},x={class:"section-content"},_={class:"section-content"},ee={class:"section-content"},ie={class:"section-content"},te={class:"section-content"},be=O({__name:"Index",setup(ne){const{t:l}=E(),w=d("1"),V=d(),h=d(),f=d("1"),D=d(),y=d(!1),m=d(!1),v=d(["1"]),P=[{description:l("ui.tabView.documentation.eventDescription.beforeTabChange"),name:"beforeTabChange",payload:"key"},{description:l("ui.tabView.documentation.eventDescription.beforeTabClose"),name:"beforeTabClose",payload:"key"},{description:l("ui.tabView.documentation.eventDescription.updateActiveKey"),name:"update:activeKey",payload:"key"},{description:l("ui.tabView.documentation.eventDescription.updateVisibleTabs"),name:"update:visibleTabs",payload:"key[]"}],$=[{children:"Description",key:"tab1",label:"Description"},{children:"Reviews",key:"tab2",label:"Reviews"},{children:"Specifications",key:"tab3",label:"Specifications"},{children:"Pricing",key:"tab4",label:"Pricing"},{children:"Installation Instructions",key:"tab5",label:"Installation"},{children:"Certifications",key:"tab6",label:"Certifications"}],K=[{default:"-",description:l("ui.tabView.documentation.propsDescription.activeKey"),prop:"activeKey",type:"string"},{default:"false",description:l("ui.tabView.documentation.propsDescription.enableHashRouting"),prop:"enableHashRouting",type:"boolean"},{default:"-",description:l("ui.tabView.documentation.propsDescription.id"),prop:"id",type:"string"},{default:"false",description:l("ui.tabView.documentation.propsDescription.interceptTabChange"),prop:"interceptTabChange",type:"boolean"},{default:"false",description:l("ui.tabView.documentation.propsDescription.interceptTabClose"),prop:"interceptTabClose",type:"boolean"},{default:"true",description:l("ui.tabView.documentation.propsDescription.lazy"),prop:"lazy",type:"boolean"},{default:"true",description:l("ui.tabView.documentation.propsDescription.persistState"),prop:"persistState",type:"boolean"},{default:"localStorage",description:l("ui.tabView.documentation.propsDescription.persistStateStorage"),prop:"persistStateStorage",type:'"localStorage" | "sessionStorage"'},{default:"top",description:l("ui.tabView.documentation.propsDescription.position"),prop:"position",type:'"top" | "left" | "bottom" | "right"'},{default:"-",description:l("ui.tabView.documentation.propsDescription.tabs"),prop:"tabs",type:"Tab[]"},{default:"-",description:l("ui.tabView.documentation.propsDescription.visibleTabs"),prop:"visibleTabs",type:"string[]"}],B=[{description:l("ui.tabView.documentation.slotDescription.default"),name:"default"}],S=[{key:"description",label:"Description"},{key:"review",label:"Reviews"},{key:"specifications",label:"Specifications"},{key:"pricing",label:"Pricing"},{key:"installation",label:"Installation"},{key:"certifications",label:"Certifications"}],u=[{children:"Description",key:"1",label:"Description"},{children:"Reviews",closable:!0,key:"2",label:"Reviews"},{children:"Specifications",closable:!0,key:"3",label:"Specifications"},{children:"Pricing",closable:!0,key:"4",label:"Pricing"},{children:"Installation Instructions",key:"5",label:"Installation"},{children:"Certifications",key:"6",label:"Certifications"}],C=n=>{v.value.includes(n)||(v.value=[...v.value,n]),w.value=n},z=n=>{m.value=!0,D.value=n},A=n=>{y.value=!0,V.value=n},L=()=>{f.value=D.value||f.value,m.value=!1},N=()=>{var n;(n=h.value)==null||n.closeTab(V.value),y.value=!1};return(n,e)=>{const p=H("SshPre");return g(),T(J,{"sub-title":n.$t("ui.tabView.subtitle"),title:n.$t("ui.tabView.title"),class:"tab-view"},{toolbar:r(()=>[a(s(k),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=o=>n.$router.push("/ui"))},null,8,["label"])]),default:r(()=>[e[47]||(e[47]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.basic")),1),e[11]||(e[11]=i()),t("div",q,[a(s(c),{id:"tab-view",tabs:u,"active-key":"1"}),e[10]||(e[10]=i()),a(p,{language:"html-vue"},{default:r(()=>e[9]||(e[9]=[i(`
          <template>
            <TabView id="tab-view" :tabs="tabs" active-key="1" />
          </template>

          <script setup lang="ts">
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])]),e[48]||(e[48]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.disableTabState.title")),1),e[15]||(e[15]=i()),t("div",G,[t("p",null,b(n.$t("ui.tabView.usage.disableTabState.subtitle")),1),e[13]||(e[13]=i()),a(s(c),{"persist-state":!1,tabs:u,"visible-tabs":["1","5","6"],"active-key":"1"}),e[14]||(e[14]=i()),a(p,{language:"html-vue"},{default:r(()=>e[12]||(e[12]=[i(`
          <template>
            <TabView
              :persist-state="false"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
            />
          </template>

          <script setup lang="ts">
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])]),e[49]||(e[49]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.positionBottom")),1),e[18]||(e[18]=i()),t("div",Q,[a(s(c),{id:"tab-view-bottom",tabs:u,"visible-tabs":["1","5","6"],"active-key":"1",position:"bottom"}),e[17]||(e[17]=i()),a(p,{language:"html-vue"},{default:r(()=>e[16]||(e[16]=[i(`
          <template>
            <TabView
              id="tab-view-bottom"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
              position="bottom"
            />
          </template>

          <script setup lang="ts">
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])]),e[50]||(e[50]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.positionLeft")),1),e[21]||(e[21]=i()),t("div",W,[a(s(c),{id:"tab-view-left",tabs:u,"visible-tabs":["1","5","6"],"active-key":"1",position:"left"}),e[20]||(e[20]=i()),a(p,{language:"html-vue"},{default:r(()=>e[19]||(e[19]=[i(`
          <template>
            <TabView
              id="tab-view-left"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
              position="left"
            />
          </template>

          <script setup lang="ts">
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])]),e[51]||(e[51]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.positionRight")),1),e[24]||(e[24]=i()),t("div",X,[a(s(c),{id:"tab-view-right",tabs:u,"visible-tabs":["1","5","6"],"active-key":"1",position:"right"}),e[23]||(e[23]=i()),a(p,{language:"html-vue"},{default:r(()=>e[22]||(e[22]=[i(`
          <template>
            <TabView
              id="tab-view-right"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
              position="right"
            />
          </template>

          <script setup lang="ts">
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])]),e[52]||(e[52]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.closableTab")),1),e[30]||(e[30]=i()),t("div",Y,[t("div",Z,[a(s(k),{label:"Add specifications tab",onClick:e[1]||(e[1]=o=>C("3"))}),e[25]||(e[25]=i()),a(s(k),{label:"Add reviews tab",onClick:e[2]||(e[2]=o=>C("2"))}),e[26]||(e[26]=i()),a(s(k),{label:"Add pricing tab",onClick:e[3]||(e[3]=o=>C("4"))})]),e[28]||(e[28]=i()),a(s(c),{id:"tab-view-closable","active-key":w.value,"onUpdate:activeKey":e[4]||(e[4]=o=>w.value=o),"visible-tabs":v.value,"onUpdate:visibleTabs":e[5]||(e[5]=o=>v.value=o),tabs:u},null,8,["active-key","visible-tabs"]),e[29]||(e[29]=i()),a(p,{language:"html-vue"},{default:r(()=>e[27]||(e[27]=[i(`
          <template>
            <div class="tab-button-group">
              <ButtonElement label="Add specifications tab" @click="addTab('3')" />
              <ButtonElement label="Add reviews tab" @click="addTab('2')" />
              <ButtonElement label="Add pricing tab" @click="addTab('4')" />
            </div>
            <TabView
              id="tab-view-closable"
              v-model:active-key="activeKey"
              v-model:visible-tabs="VisibleTabs"
              :tabs="tabs"    
            />
          </template>

          <script setup lang="ts">
          import { TabView } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const activeKey = ref<string>("1");
          const visibleTabs = ref<string[]>(["1"]);

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];

          const addTab = (key: string) => {
            if (!visibleTabs.value.includes(key)) {
              visibleTabs.value = [...visibleTabs.value, key];
            }

            activeKey.value = key;
          };
          <\/script>
        `)])),_:1})])]),e[53]||(e[53]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.withSlot")),1),e[33]||(e[33]=i()),t("div",x,[a(s(c),{id:"tab-view-slot",tabs:S,"visible-tabs":["description","installation","certifications"],"active-key":"description"},{default:r(()=>[(g(),M(U,null,F(S,o=>t("p",{key:o.key},b(o.label),1)),64))]),_:1}),e[32]||(e[32]=i()),a(p,{language:"html-vue"},{default:r(()=>e[31]||(e[31]=[i(`
          <template>
            <TabView
              id="tab-view-slot"
              :tabs="tabList"    
              :visible-tabs="['description', 'installation', 'certifications']"
              active-key="['description']"
            >
              <p v-for="tab in tabList" :key="tab.key">{{ tab.label }}</p>
            </TabView>
          </template>

          <script setup lang="ts">
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabList = [
            { key: "description", label: "Description" },
            { key: "review", label: "Reviews" },
            { key: "specifications", label: "Specifications" },
            { key: "pricing", label: "Pricing" },
            { key: "installation", label: "Installation" },
            { key: "certifications", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])]),e[54]||(e[54]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.interceptTabChange")),1),e[37]||(e[37]=i()),t("div",_,[a(s(c),{id:"tab-view-interception","active-key":f.value,"onUpdate:activeKey":e[6]||(e[6]=o=>f.value=o),tabs:u,"visible-tabs":["1","5","6"],"intercept-tab-change":"",onBeforeTabChange:z},null,8,["active-key"]),e[35]||(e[35]=i()),m.value?(g(),T(s(R),{key:0,"onOn:close":e[7]||(e[7]=o=>m.value=!1),"onOn:confirm":L})):I("",!0),e[36]||(e[36]=i()),a(p,{language:"html-vue"},{default:r(()=>e[34]||(e[34]=[i(`
          <template>
            <TabView
              id="tab-view-interception"
              v-model:active-key="activeKey"
              :tabs="tabs"
              :visible-tabs="['1', '5', '6']"
              intercept-tab-change
              @before-tab-change="beforeTabChange"
            />

            <ConfirmationModal
              v-if="showConfirmation"
              @on:close="showConfirmation = false"
              @on:confirm="onConfirmChange"
            />
          </template>

          <script setup lang="ts">
          import { ConfirmationModal, TabView } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const activeKey = ref<string>("1");
          const nextTabKey = ref<string>();
          const showConfirmation = ref<boolean>(false);

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];

          const beforeTabChange = (key: string) => {
            showConfirmation.value = true;
            nextTabKey.value = key;
          };

          const onConfirmChange = () => {
            activeKey.value = nextTabKey.value || activeKey.value;
            showConfirmation.value = false;
          };
          <\/script>
        `)])),_:1})])]),e[55]||(e[55]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.interceptTabClose")),1),e[41]||(e[41]=i()),t("div",ee,[a(s(c),{id:"tab-view-interception-close",ref_key:"dzangolabVueTabView",ref:h,tabs:u,"active-key":"1","intercept-tab-close":"",onBeforeTabClose:A},null,512),e[39]||(e[39]=i()),y.value?(g(),T(s(R),{key:0,"onOn:close":e[8]||(e[8]=o=>y.value=!1),"onOn:confirm":N})):I("",!0),e[40]||(e[40]=i()),a(p,{language:"html-vue"},{default:r(()=>e[38]||(e[38]=[i(`
          <template>
            <TabView
              id="tab-view-interception-close"
              ref="dzangolabVueTabView"
              :tabs="tabs"
              active-key="1"
              intercept-tab-close
              @before-tab-change="beforeTabClose"
            />

            <ConfirmationModal
              v-if="showConfirmation"
              @on:close="showConfirmation = false"
              @on:confirm="onConfirmChange"
            />
          </template>

          <script setup lang="ts">
          import { ConfirmationModal, TabView } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const closingKey = ref<string>();
          const dzangolabVueTabView = ref();
          const showConfirmation = ref<boolean>(false);

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];

          const beforeTabClose = (key: string) => {
            showConfirmation.value = true;
            closingKey.value = key;
          };

          const onConfirm = () => {
            dzangolabVueTabView.value?.closeTab(closingKey.value);
            showConfirmation.value = false;
          };
          <\/script>
        `)])),_:1})])]),e[56]||(e[56]=i()),t("section",null,[t("h2",null,b(n.$t("ui.tabView.usage.withHashRouting")),1),e[44]||(e[44]=i()),t("div",ie,[a(s(c),{id:"tab-view-hash-routing",tabs:$,"active-key":"tab1","enable-hash-routing":""}),e[43]||(e[43]=i()),a(p,{language:"html-vue"},{default:r(()=>e[42]||(e[42]=[i(`
          <template>
            <TabView id="tab-view" :tabs="tabs" active-key="tab1" enable-hash-routing />
          </template>

          <script setup lang="ts">
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "tab1", label: "Description" },
            { children: "Reviews", key: "tab2", label: "Reviews" },
            {
              children: "Specifications",
              key: "tab3",
              label: "Specifications",
            },
            { children: "Pricing", key: "tab4", label: "Pricing",  },
            { children: "Installation Instructions", key: "tab5", label: "Installation",  },
            { children: "Certifications", key: "tab6", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])]),e[57]||(e[57]=i()),a(j,{"events-data":P,"props-data":K,"props-table-title":n.$t("common.properties",{value:"TabViewProperties"}),"slots-data":B},null,8,["props-table-title"]),e[58]||(e[58]=i()),t("section",null,[t("h2",null,b(n.$t("common.type")),1),e[46]||(e[46]=i()),t("div",te,[a(p,{language:"html-vue"},{default:r(()=>e[45]||(e[45]=[i(`
            type Tab = {
              children?: VNode | string;
              closable?: boolean;
              icon?: string;
              key: string;
              label: string;
            };
          `)])),_:1})])])]),_:1},8,["sub-title","title"])}}});export{be as default};
