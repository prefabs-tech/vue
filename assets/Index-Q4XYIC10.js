import{j as k}from"./DzangolabVue3TanstackTable.es-C_FzoFVn.js";import{d as R,r as p,K as A,f as V,o as w,i as r,D as t,g as i,t as s,h as l,u as a,a8 as d,v as y,a as z,F as B,y as N,b as L,I as E}from"./index-BQkQtk9A.js";import{_ as j}from"./UiPage.vue_vue_type_style_index_0_lang-Mc4zh2YL.js";import"./DzangolabVue3Form.es-BMWt6Uf1.js";const O={class:"section-content"},U={class:"section-content"},F={class:"section-content"},M={class:"section-content"},q={class:"section-content"},G={class:"section-content"},H={class:"tab-button-group"},J={class:"section-content"},Q={class:"section-content"},W={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={class:"section-content"},le=R({__name:"Index",setup(x){const g=p("1"),v=p("1"),T=p(),f=p(!1),u=p(["1"]),S=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],I=[{description:"Triggers before tab actually change",id:1,name:"beforeTabChange"},{description:"Triggers on active key change",id:2,name:"update:activeKey"},{description:"Triggers on visible tabs change",id:3,name:"update:visibleTabs"}],h=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],D=[{default:"-",description:"Active key of TabView.",id:1,prop:"activeKey",type:"string"},{default:"-",description:"Id of tab to save the state. Should provide 'id' in case of tab state persistence.",id:2,prop:"id",type:"string"},{default:"false",description:"Enable event emitting before tab actually change.",id:3,prop:"interceptTabChange",type:"boolean"},{default:"true",description:"If true, tab state is saved either in localStorage or sessionStorage.",id:4,prop:"persistState",type:"boolean"},{default:"localStorage",id:5,description:"Storage to save tab state.",prop:"persistStateStorage",type:'"localStorage" | "sessionStorage"'},{default:"top",id:6,description:"Position of the tab panel header relative to its content.",prop:"position",type:'"top" | "left" | "bottom" | "right"'},{default:"-",id:7,description:"Array of tab object.",prop:"tabs",type:"Tab[]"},{default:"-",description:"Array of visible tabs.",id:8,prop:"visibleTabs",type:"string[]"}],K=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],C=[{key:"description",label:"Description"},{key:"review",label:"Reviews"},{key:"specifications",label:"Specifications"},{key:"pricing",label:"Pricing"},{key:"installation",label:"Installation"},{key:"certifications",label:"Certifications"}],c=[{children:"Description",key:"1",label:"Description"},{children:"Reviews",closable:!0,key:"2",label:"Reviews"},{children:"Specifications",closable:!0,key:"3",label:"Specifications"},{children:"Pricing",closable:!0,key:"4",label:"Pricing"},{children:"Installation Instructions",key:"5",label:"Installation"},{children:"Certifications",key:"6",label:"Certifications"}],m=n=>{u.value.includes(n)||(u.value=[...u.value,n]),g.value=n},P=n=>{f.value=!0,T.value=n},$=()=>{v.value=T.value||v.value,f.value=!1};return(n,e)=>{const b=A("SshPre");return w(),V(j,{title:n.$t("ui.tabView.title"),class:"tab-view"},{toolbar:r(()=>[l(a(y),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=o=>n.$router.push("/ui"))},null,8,["label"])]),default:r(()=>[e[42]||(e[42]=t()),i("section",null,[i("h2",null,s(n.$t("ui.tabView.usage.basic")),1),e[10]||(e[10]=t()),i("div",O,[l(a(d),{id:"tab-view",tabs:c,"active-key":"1"}),e[9]||(e[9]=t()),l(b,{language:"html-vue"},{default:r(()=>e[8]||(e[8]=[t(`
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
        `)])),_:1})])]),e[43]||(e[43]=t()),i("section",null,[i("h2",null,s(n.$t("ui.tabView.usage.disableTabState.title")),1),e[14]||(e[14]=t()),i("div",U,[i("p",null,s(n.$t("ui.tabView.usage.disableTabState.subtitle")),1),e[12]||(e[12]=t()),l(a(d),{"persist-state":!1,tabs:c,"visible-tabs":["1","5","6"],"active-key":"1"}),e[13]||(e[13]=t()),l(b,{language:"html-vue"},{default:r(()=>e[11]||(e[11]=[t(`
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
        `)])),_:1})])]),e[44]||(e[44]=t()),i("section",null,[i("h2",null,s(n.$t("ui.tabView.usage.positionBottom")),1),e[17]||(e[17]=t()),i("div",F,[l(a(d),{id:"tab-view-bottom",tabs:c,"visible-tabs":["1","5","6"],"active-key":"1",position:"bottom"}),e[16]||(e[16]=t()),l(b,{language:"html-vue"},{default:r(()=>e[15]||(e[15]=[t(`
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
        `)])),_:1})])]),e[45]||(e[45]=t()),i("section",null,[i("h2",null,s(n.$t("ui.tabView.usage.positionLeft")),1),e[20]||(e[20]=t()),i("div",M,[l(a(d),{id:"tab-view-left",tabs:c,"visible-tabs":["1","5","6"],"active-key":"1",position:"left"}),e[19]||(e[19]=t()),l(b,{language:"html-vue"},{default:r(()=>e[18]||(e[18]=[t(`
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
        `)])),_:1})])]),e[46]||(e[46]=t()),i("section",null,[i("h2",null,s(n.$t("ui.tabView.usage.positionRight")),1),e[23]||(e[23]=t()),i("div",q,[l(a(d),{id:"tab-view-right",tabs:c,"visible-tabs":["1","5","6"],"active-key":"1",position:"right"}),e[22]||(e[22]=t()),l(b,{language:"html-vue"},{default:r(()=>e[21]||(e[21]=[t(`
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
        `)])),_:1})])]),e[47]||(e[47]=t()),i("section",null,[i("h2",null,s(n.$t("ui.tabView.usage.closableTab")),1),e[29]||(e[29]=t()),i("div",G,[i("div",H,[l(a(y),{label:"Add specifications tab",onClick:e[1]||(e[1]=o=>m("3"))}),e[24]||(e[24]=t()),l(a(y),{label:"Add reviews tab",onClick:e[2]||(e[2]=o=>m("2"))}),e[25]||(e[25]=t()),l(a(y),{label:"Add pricing tab",onClick:e[3]||(e[3]=o=>m("4"))})]),e[27]||(e[27]=t()),l(a(d),{id:"tab-view-closable","active-key":g.value,"onUpdate:activeKey":e[4]||(e[4]=o=>g.value=o),"visible-tabs":u.value,"onUpdate:visibleTabs":e[5]||(e[5]=o=>u.value=o),tabs:c},null,8,["active-key","visible-tabs"]),e[28]||(e[28]=t()),l(b,{language:"html-vue"},{default:r(()=>e[26]||(e[26]=[t(`
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
        `)])),_:1})])]),e[48]||(e[48]=t()),i("section",null,[i("h2",null,s(n.$t("ui.tabView.usage.withSlot")),1),e[32]||(e[32]=t()),i("div",J,[l(a(d),{id:"tab-view-slot",tabs:C,"visible-tabs":["description","installation","certifications"],"active-key":"description"},{default:r(()=>[(w(),z(B,null,N(C,o=>i("p",{key:o.key},s(o.label),1)),64))]),_:1}),e[31]||(e[31]=t()),l(b,{language:"html-vue"},{default:r(()=>e[30]||(e[30]=[t(`
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
        `)])),_:1})])]),e[49]||(e[49]=t()),i("section",null,[i("h2",null,s(n.$t("ui.tabView.usage.interceptTabChange")),1),e[36]||(e[36]=t()),i("div",Q,[l(a(d),{id:"tab-view-interception","active-key":v.value,"onUpdate:activeKey":e[6]||(e[6]=o=>v.value=o),tabs:c,"visible-tabs":["1","5","6"],"intercept-tab-change":"",onBeforeTabChange:P},null,8,["active-key"]),e[34]||(e[34]=t()),f.value?(w(),V(a(E),{key:0,"onOn:close":e[7]||(e[7]=o=>f.value=!1),"onOn:confirm":$})):L("",!0),e[35]||(e[35]=t()),l(b,{language:"html-vue"},{default:r(()=>e[33]||(e[33]=[t(`
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
        `)])),_:1})])]),e[50]||(e[50]=t()),i("section",null,[i("h2",null,s(n.$t("common.properties",{value:"TabViewProperties"})),1),e[37]||(e[37]=t()),i("div",W,[l(a(k),{"columns-data":h,data:D,paginated:!1})])]),e[51]||(e[51]=t()),i("section",null,[i("h2",null,s(n.$t("common.slots")),1),e[38]||(e[38]=t()),i("div",X,[l(a(k),{"columns-data":K,data:[{description:"Content for the tab, matched using the key attribute on each element",id:1,name:"default"}],paginated:!1})])]),e[52]||(e[52]=t()),i("section",null,[i("h2",null,s(n.$t("common.events")),1),e[39]||(e[39]=t()),i("div",Y,[l(a(k),{"columns-data":S,data:I,paginated:!1})])]),e[53]||(e[53]=t()),i("section",null,[i("h2",null,s(n.$t("common.type")),1),e[41]||(e[41]=t()),i("div",Z,[l(b,{language:"html-vue"},{default:r(()=>e[40]||(e[40]=[t(`
            type Tab = {
              children?: VNode | string;
              closable?: boolean;
              icon?: string;
              key: string;
              label: string;
            };
          `)])),_:1})])])]),_:1},8,["title"])}}});export{le as default};
