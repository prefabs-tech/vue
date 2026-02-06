import{d as M,M as E,N as O,o as g,e as C,f as r,h as t,t as b,A as i,a as n,u as s,a9 as p,l as T,c as H,F as U,s as F,D as I,b as R,r as d}from"./index-DM9wUdee.js";import{_ as j}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CDdMtKGw.js";import{_ as q}from"./UiPage.vue_vue_type_style_index_0_lang-Cx5JgbVi.js";import"./PrefabsTechVue3TanstackTable.es-Cu5UvKBj.js";import"./PrefabsTechVue3Form.es-C9e69xVv.js";const G={class:"section-content"},J={class:"section-content"},Q={class:"section-content"},W={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={class:"tab-button-group"},x={class:"section-content"},_={class:"section-content"},ee={class:"section-content"},ie={class:"section-content"},te={class:"section-content"},be=M({__name:"Index",setup(ne){const{t:l}=E(),k=d("1"),V=d(),h=d(),f=d("1"),D=d(),y=d(!1),m=d(!1),v=d(["1"]),P=[{description:l("ui.tabView.documentation.eventDescription.beforeTabChange"),name:"beforeTabChange",payload:"key"},{description:l("ui.tabView.documentation.eventDescription.beforeTabClose"),name:"beforeTabClose",payload:"key"},{description:l("ui.tabView.documentation.eventDescription.updateActiveKey"),name:"update:activeKey",payload:"key"},{description:l("ui.tabView.documentation.eventDescription.updateVisibleTabs"),name:"update:visibleTabs",payload:"key[]"}],K=[{children:"Description",key:"tab1",label:"Description"},{children:"Reviews",key:"tab2",label:"Reviews"},{children:"Specifications",key:"tab3",label:"Specifications"},{children:"Pricing",key:"tab4",label:"Pricing"},{children:"Installation Instructions",key:"tab5",label:"Installation"},{children:"Certifications",key:"tab6",label:"Certifications"}],$=[{default:"-",description:l("ui.tabView.documentation.propsDescription.activeKey"),prop:"activeKey",type:"string"},{default:"false",description:l("ui.tabView.documentation.propsDescription.enableHashRouting"),prop:"enableHashRouting",type:"boolean"},{default:"-",description:l("ui.tabView.documentation.propsDescription.id"),prop:"id",type:"string"},{default:"false",description:l("ui.tabView.documentation.propsDescription.interceptTabChange"),prop:"interceptTabChange",type:"boolean"},{default:"false",description:l("ui.tabView.documentation.propsDescription.interceptTabClose"),prop:"interceptTabClose",type:"boolean"},{default:"true",description:l("ui.tabView.documentation.propsDescription.lazy"),prop:"lazy",type:"boolean"},{default:"true",description:l("ui.tabView.documentation.propsDescription.persistState"),prop:"persistState",type:"boolean"},{default:"localStorage",description:l("ui.tabView.documentation.propsDescription.persistStateStorage"),prop:"persistStateStorage",type:'"localStorage" | "sessionStorage"'},{default:"top",description:l("ui.tabView.documentation.propsDescription.position"),prop:"position",type:'"top" | "left" | "bottom" | "right"'},{default:"-",description:l("ui.tabView.documentation.propsDescription.tabs"),prop:"tabs",type:"Tab[]"},{default:"-",description:l("ui.tabView.documentation.propsDescription.visibleTabs"),prop:"visibleTabs",type:"string[]"}],B=[{description:l("ui.tabView.documentation.slotDescription.default"),name:"default"}],S=[{key:"description",label:"Description"},{key:"review",label:"Reviews"},{key:"specifications",label:"Specifications"},{key:"pricing",label:"Pricing"},{key:"installation",label:"Installation"},{key:"certifications",label:"Certifications"}],u=[{children:"Description",key:"1",label:"Description"},{children:"Reviews",closable:!0,key:"2",label:"Reviews"},{children:"Specifications",closable:!0,key:"3",label:"Specifications"},{children:"Pricing",closable:!0,key:"4",label:"Pricing"},{children:"Installation Instructions",key:"5",label:"Installation"},{children:"Certifications",key:"6",label:"Certifications"}],w=a=>{v.value.includes(a)||(v.value=[...v.value,a]),k.value=a},A=a=>{m.value=!0,D.value=a},z=a=>{y.value=!0,V.value=a},L=()=>{f.value=D.value||f.value,m.value=!1},N=()=>{h.value?.closeTab(V.value),y.value=!1};return(a,e)=>{const c=O("SshPre");return g(),C(q,{subtitle:a.$t("ui.tabView.subtitle"),title:a.$t("ui.tabView.title"),class:"tab-view"},{default:r(()=>[t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.basic")),1),e[10]||(e[10]=i()),t("div",G,[n(s(p),{id:"tab-view",tabs:u,"active-key":"1"}),e[9]||(e[9]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[8]||(e[8]=[i(`
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
        `,-1)])]),_:1})])]),e[46]||(e[46]=i()),t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.disableTabState.title")),1),e[14]||(e[14]=i()),t("div",J,[t("p",null,b(a.$t("ui.tabView.usage.disableTabState.subtitle")),1),e[12]||(e[12]=i()),n(s(p),{"persist-state":!1,tabs:u,"visible-tabs":["1","5","6"],"active-key":"1"}),e[13]||(e[13]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[11]||(e[11]=[i(`
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
        `,-1)])]),_:1})])]),e[47]||(e[47]=i()),t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.positionBottom")),1),e[17]||(e[17]=i()),t("div",Q,[n(s(p),{id:"tab-view-bottom",tabs:u,"visible-tabs":["1","5","6"],"active-key":"1",position:"bottom"}),e[16]||(e[16]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[15]||(e[15]=[i(`
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
        `,-1)])]),_:1})])]),e[48]||(e[48]=i()),t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.positionLeft")),1),e[20]||(e[20]=i()),t("div",W,[n(s(p),{id:"tab-view-left",tabs:u,"visible-tabs":["1","5","6"],"active-key":"1",position:"left"}),e[19]||(e[19]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[18]||(e[18]=[i(`
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
        `,-1)])]),_:1})])]),e[49]||(e[49]=i()),t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.positionRight")),1),e[23]||(e[23]=i()),t("div",X,[n(s(p),{id:"tab-view-right",tabs:u,"visible-tabs":["1","5","6"],"active-key":"1",position:"right"}),e[22]||(e[22]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[21]||(e[21]=[i(`
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
        `,-1)])]),_:1})])]),e[50]||(e[50]=i()),t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.closableTab")),1),e[29]||(e[29]=i()),t("div",Y,[t("div",Z,[n(s(T),{label:"Add specifications tab",onClick:e[0]||(e[0]=o=>w("3"))}),e[24]||(e[24]=i()),n(s(T),{label:"Add reviews tab",onClick:e[1]||(e[1]=o=>w("2"))}),e[25]||(e[25]=i()),n(s(T),{label:"Add pricing tab",onClick:e[2]||(e[2]=o=>w("4"))})]),e[27]||(e[27]=i()),n(s(p),{id:"tab-view-closable","active-key":k.value,"onUpdate:activeKey":e[3]||(e[3]=o=>k.value=o),"visible-tabs":v.value,"onUpdate:visibleTabs":e[4]||(e[4]=o=>v.value=o),tabs:u},null,8,["active-key","visible-tabs"]),e[28]||(e[28]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[26]||(e[26]=[i(`
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
        `,-1)])]),_:1})])]),e[51]||(e[51]=i()),t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.withSlot")),1),e[32]||(e[32]=i()),t("div",x,[n(s(p),{id:"tab-view-slot",tabs:S,"visible-tabs":["description","installation","certifications"],"active-key":"description"},{default:r(()=>[(g(),H(U,null,F(S,o=>t("p",{key:o.key},b(o.label),1)),64))]),_:1}),e[31]||(e[31]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[30]||(e[30]=[i(`
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
        `,-1)])]),_:1})])]),e[52]||(e[52]=i()),t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.interceptTabChange")),1),e[36]||(e[36]=i()),t("div",_,[n(s(p),{id:"tab-view-interception","active-key":f.value,"onUpdate:activeKey":e[5]||(e[5]=o=>f.value=o),tabs:u,"visible-tabs":["1","5","6"],"intercept-tab-change":"",onBeforeTabChange:A},null,8,["active-key"]),e[34]||(e[34]=i()),m.value?(g(),C(s(I),{key:0,"onOn:close":e[6]||(e[6]=o=>m.value=!1),"onOn:confirm":L})):R("",!0),e[35]||(e[35]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[33]||(e[33]=[i(`
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
        `,-1)])]),_:1})])]),e[53]||(e[53]=i()),t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.interceptTabClose")),1),e[40]||(e[40]=i()),t("div",ee,[n(s(p),{id:"tab-view-interception-close",ref_key:"dzangolabVueTabView",ref:h,tabs:u,"active-key":"1","intercept-tab-close":"",onBeforeTabClose:z},null,512),e[38]||(e[38]=i()),y.value?(g(),C(s(I),{key:0,"onOn:close":e[7]||(e[7]=o=>y.value=!1),"onOn:confirm":N})):R("",!0),e[39]||(e[39]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[37]||(e[37]=[i(`
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
        `,-1)])]),_:1})])]),e[54]||(e[54]=i()),t("section",null,[t("h2",null,b(a.$t("ui.tabView.usage.withHashRouting")),1),e[43]||(e[43]=i()),t("div",ie,[n(s(p),{id:"tab-view-hash-routing",tabs:K,"active-key":"tab1","enable-hash-routing":""}),e[42]||(e[42]=i()),n(c,{language:"html-vue"},{default:r(()=>[...e[41]||(e[41]=[i(`
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
        `,-1)])]),_:1})])]),e[55]||(e[55]=i()),n(j,{"events-data":P,"props-data":$,"props-table-title":a.$t("common.properties",{value:"TabViewProperties"}),"slots-data":B},null,8,["props-table-title"]),e[56]||(e[56]=i()),t("section",null,[t("h2",null,b(a.$t("common.type")),1),e[45]||(e[45]=i()),t("div",te,[n(c,{language:"html-vue"},{default:r(()=>[...e[44]||(e[44]=[i(`
            type Tab = {
              children?: VNode | string;
              closable?: boolean;
              icon?: string;
              key: string;
              label: string;
            };
          `,-1)])]),_:1})])])]),_:1},8,["subtitle","title"])}}});export{be as default};
