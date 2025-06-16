import{j as C}from"./DzangolabVue3TanstackTable.es-BVrHDjwA.js";import{d as M,r as d,K as U,f as T,o as g,i as r,E as i,g as t,t as s,h as l,u as a,a8 as c,x as m,a as j,F,A as H,b as D,I as K}from"./index-Bx--TtBP.js";import{_ as q}from"./UiPage.vue_vue_type_style_index_0_lang-CI6J04AX.js";import"./DzangolabVue3Form.es-Pvv_Xib-.js";const G={class:"section-content"},J={class:"section-content"},Q={class:"section-content"},W={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={class:"tab-button-group"},x={class:"section-content"},_={class:"section-content"},ee={class:"section-content"},ie={class:"section-content"},te={class:"section-content"},ne={class:"section-content"},le={class:"section-content"},ae={class:"section-content"},ue=M({__name:"Index",setup(se){const k=d("1"),h=d(),V=d(),v=d("1"),S=d(),f=d(!1),y=d(!1),p=d(["1"]),P=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],R=[{description:"Triggers before tab actually change",id:1,name:"beforeTabChange"},{description:"Triggers before tab actually close",id:2,name:"beforeTabClose"},{description:"Triggers on active key change",id:3,name:"update:activeKey"},{description:"Triggers on visible tabs change",id:4,name:"update:visibleTabs"}],$=[{children:"Description",key:"tab1",label:"Description"},{children:"Reviews",key:"tab2",label:"Reviews"},{children:"Specifications",key:"tab3",label:"Specifications"},{children:"Pricing",key:"tab4",label:"Pricing"},{children:"Installation Instructions",key:"tab5",label:"Installation"},{children:"Certifications",key:"tab6",label:"Certifications"}],z=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],A=[{default:"-",description:"Active key of TabView.",id:1,prop:"activeKey",type:"string"},{default:"false",description:"Enable hash routing for the tab view URL.",id:2,prop:"enableHashRouting",type:"boolean"},{default:"-",description:"Id of tab to save the state. Should provide 'id' in case of tab state persistence.",id:3,prop:"id",type:"string"},{default:"false",description:"Enable event emitting before tab actually change.",id:4,prop:"interceptTabChange",type:"boolean"},{default:"false",description:"Enable event emitting before tab actually change.",id:5,prop:"interceptTabClose",type:"boolean"},{default:"true",description:"If true, tab state is saved either in localStorage or sessionStorage.",id:6,prop:"persistState",type:"boolean"},{default:"localStorage",description:"Storage to save tab state.",id:7,prop:"persistStateStorage",type:'"localStorage" | "sessionStorage"'},{default:"top",description:"Position of the tab panel header relative to its content.",id:8,prop:"position",type:'"top" | "left" | "bottom" | "right"'},{default:"-",description:"Array of tab object.",id:9,prop:"tabs",type:"Tab[]"},{default:"-",description:"Array of visible tabs.",id:10,prop:"visibleTabs",type:"string[]"}],B=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],I=[{key:"description",label:"Description"},{key:"review",label:"Reviews"},{key:"specifications",label:"Specifications"},{key:"pricing",label:"Pricing"},{key:"installation",label:"Installation"},{key:"certifications",label:"Certifications"}],u=[{children:"Description",key:"1",label:"Description"},{children:"Reviews",closable:!0,key:"2",label:"Reviews"},{children:"Specifications",closable:!0,key:"3",label:"Specifications"},{children:"Pricing",closable:!0,key:"4",label:"Pricing"},{children:"Installation Instructions",key:"5",label:"Installation"},{children:"Certifications",key:"6",label:"Certifications"}],w=n=>{p.value.includes(n)||(p.value=[...p.value,n]),k.value=n},E=n=>{y.value=!0,S.value=n},L=n=>{f.value=!0,h.value=n},N=()=>{v.value=S.value||v.value,y.value=!1},O=()=>{var n;(n=V.value)==null||n.closeTab(h.value),f.value=!1};return(n,e)=>{const b=U("SshPre");return g(),T(q,{title:n.$t("ui.tabView.title"),class:"tab-view"},{toolbar:r(()=>[l(a(m),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=o=>n.$router.push("/ui"))},null,8,["label"])]),default:r(()=>[e[50]||(e[50]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.basic")),1),e[11]||(e[11]=i()),t("div",G,[l(a(c),{id:"tab-view",tabs:u,"active-key":"1"}),e[10]||(e[10]=i()),l(b,{language:"html-vue"},{default:r(()=>e[9]||(e[9]=[i(`
          <template>
            <TabView id="tab-view" :tabs="tabs" active-key="1" />
          </template>

          <script setup lang="ts">
          import { TabView } from "@dzangolab/vue3-ui";

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
        `)])),_:1})])]),e[51]||(e[51]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.disableTabState.title")),1),e[15]||(e[15]=i()),t("div",J,[t("p",null,s(n.$t("ui.tabView.usage.disableTabState.subtitle")),1),e[13]||(e[13]=i()),l(a(c),{"persist-state":!1,tabs:u,"visible-tabs":["1","5","6"],"active-key":"1"}),e[14]||(e[14]=i()),l(b,{language:"html-vue"},{default:r(()=>e[12]||(e[12]=[i(`
          <template>
            <TabView
              :persist-state="false"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
            />
          </template>

          <script setup lang="ts">
          import { TabView } from "@dzangolab/vue3-ui";

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
        `)])),_:1})])]),e[52]||(e[52]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.positionBottom")),1),e[18]||(e[18]=i()),t("div",Q,[l(a(c),{id:"tab-view-bottom",tabs:u,"visible-tabs":["1","5","6"],"active-key":"1",position:"bottom"}),e[17]||(e[17]=i()),l(b,{language:"html-vue"},{default:r(()=>e[16]||(e[16]=[i(`
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
          import { TabView } from "@dzangolab/vue3-ui";

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
        `)])),_:1})])]),e[53]||(e[53]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.positionLeft")),1),e[21]||(e[21]=i()),t("div",W,[l(a(c),{id:"tab-view-left",tabs:u,"visible-tabs":["1","5","6"],"active-key":"1",position:"left"}),e[20]||(e[20]=i()),l(b,{language:"html-vue"},{default:r(()=>e[19]||(e[19]=[i(`
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
          import { TabView } from "@dzangolab/vue3-ui";

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
        `)])),_:1})])]),e[54]||(e[54]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.positionRight")),1),e[24]||(e[24]=i()),t("div",X,[l(a(c),{id:"tab-view-right",tabs:u,"visible-tabs":["1","5","6"],"active-key":"1",position:"right"}),e[23]||(e[23]=i()),l(b,{language:"html-vue"},{default:r(()=>e[22]||(e[22]=[i(`
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
          import { TabView } from "@dzangolab/vue3-ui";

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
        `)])),_:1})])]),e[55]||(e[55]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.closableTab")),1),e[30]||(e[30]=i()),t("div",Y,[t("div",Z,[l(a(m),{label:"Add specifications tab",onClick:e[1]||(e[1]=o=>w("3"))}),e[25]||(e[25]=i()),l(a(m),{label:"Add reviews tab",onClick:e[2]||(e[2]=o=>w("2"))}),e[26]||(e[26]=i()),l(a(m),{label:"Add pricing tab",onClick:e[3]||(e[3]=o=>w("4"))})]),e[28]||(e[28]=i()),l(a(c),{id:"tab-view-closable","active-key":k.value,"onUpdate:activeKey":e[4]||(e[4]=o=>k.value=o),"visible-tabs":p.value,"onUpdate:visibleTabs":e[5]||(e[5]=o=>p.value=o),tabs:u},null,8,["active-key","visible-tabs"]),e[29]||(e[29]=i()),l(b,{language:"html-vue"},{default:r(()=>e[27]||(e[27]=[i(`
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
          import { TabView } from "@dzangolab/vue3-ui";
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
        `)])),_:1})])]),e[56]||(e[56]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.withSlot")),1),e[33]||(e[33]=i()),t("div",x,[l(a(c),{id:"tab-view-slot",tabs:I,"visible-tabs":["description","installation","certifications"],"active-key":"description"},{default:r(()=>[(g(),j(F,null,H(I,o=>t("p",{key:o.key},s(o.label),1)),64))]),_:1}),e[32]||(e[32]=i()),l(b,{language:"html-vue"},{default:r(()=>e[31]||(e[31]=[i(`
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
          import { TabView } from "@dzangolab/vue3-ui";

          const tabList = [
            { key: "description", label: "Description" },
            { key: "review", label: "Reviews" },
            { key: "specifications", label: "Specifications" },
            { key: "pricing", label: "Pricing" },
            { key: "installation", label: "Installation" },
            { key: "certifications", label: "Certifications" },
          ];
          <\/script>
        `)])),_:1})])]),e[57]||(e[57]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.interceptTabChange")),1),e[37]||(e[37]=i()),t("div",_,[l(a(c),{id:"tab-view-interception","active-key":v.value,"onUpdate:activeKey":e[6]||(e[6]=o=>v.value=o),tabs:u,"visible-tabs":["1","5","6"],"intercept-tab-change":"",onBeforeTabChange:E},null,8,["active-key"]),e[35]||(e[35]=i()),y.value?(g(),T(a(K),{key:0,"onOn:close":e[7]||(e[7]=o=>y.value=!1),"onOn:confirm":N})):D("",!0),e[36]||(e[36]=i()),l(b,{language:"html-vue"},{default:r(()=>e[34]||(e[34]=[i(`
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
          import { ConfirmationModal, TabView } from "@dzangolab/vue3-ui";
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
        `)])),_:1})])]),e[58]||(e[58]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.interceptTabClose")),1),e[41]||(e[41]=i()),t("div",ee,[l(a(c),{id:"tab-view-interception-close",ref_key:"dzangolabVueTabView",ref:V,tabs:u,"active-key":"1","intercept-tab-close":"",onBeforeTabClose:L},null,512),e[39]||(e[39]=i()),f.value?(g(),T(a(K),{key:0,"onOn:close":e[8]||(e[8]=o=>f.value=!1),"onOn:confirm":O})):D("",!0),e[40]||(e[40]=i()),l(b,{language:"html-vue"},{default:r(()=>e[38]||(e[38]=[i(`
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
          import { ConfirmationModal, TabView } from "@dzangolab/vue3-ui";
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
        `)])),_:1})])]),e[59]||(e[59]=i()),t("section",null,[t("h2",null,s(n.$t("ui.tabView.usage.withHashRouting")),1),e[44]||(e[44]=i()),t("div",ie,[l(a(c),{id:"tab-view-hash-routing",tabs:$,"active-key":"tab1","enable-hash-routing":""}),e[43]||(e[43]=i()),l(b,{language:"html-vue"},{default:r(()=>e[42]||(e[42]=[i(`
          <template>
            <TabView id="tab-view" :tabs="tabs" active-key="tab1" enable-hash-routing />
          </template>

          <script setup lang="ts">
          import { TabView } from "@dzangolab/vue3-ui";

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
        `)])),_:1})])]),e[60]||(e[60]=i()),t("section",null,[t("h2",null,s(n.$t("common.properties",{value:"TabViewProperties"})),1),e[45]||(e[45]=i()),t("div",te,[l(a(C),{"columns-data":z,data:A,paginated:!1})])]),e[61]||(e[61]=i()),t("section",null,[t("h2",null,s(n.$t("common.slots")),1),e[46]||(e[46]=i()),t("div",ne,[l(a(C),{"columns-data":B,data:[{description:"Content for the tab, matched using the key attribute on each element",id:1,name:"default"}],paginated:!1})])]),e[62]||(e[62]=i()),t("section",null,[t("h2",null,s(n.$t("common.events")),1),e[47]||(e[47]=i()),t("div",le,[l(a(C),{"columns-data":P,data:R,paginated:!1})])]),e[63]||(e[63]=i()),t("section",null,[t("h2",null,s(n.$t("common.type")),1),e[49]||(e[49]=i()),t("div",ae,[l(b,{language:"html-vue"},{default:r(()=>e[48]||(e[48]=[i(`
            type Tab = {
              children?: VNode | string;
              closable?: boolean;
              icon?: string;
              key: string;
              label: string;
            };
          `)])),_:1})])])]),_:1},8,["title"])}}});export{ue as default};
