import{j as f}from"./DzangolabVue3TanstackTable.es-BHB4KIwa.js";import{d as I,r as m,K as D,f as P,o as k,i as o,D as t,g as i,t as n,h as l,u as a,a8 as d,v as u,a as $,F as R,z as K}from"./index-CSsCuN9S.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-D8MPKkjX.js";import"./DzangolabVue3Form.es-BK79XLN0.js";const z={class:"section-content"},A={class:"section-content"},B={class:"section-content"},L={class:"section-content"},N={class:"section-content"},E={class:"section-content"},j={class:"tab-button-group"},F={class:"section-content"},U={class:"section-content"},O={class:"section-content"},q={class:"section-content"},G={class:"section-content"},X=I({__name:"Index",setup(H){const v=m("1"),c=m(["1"]),w=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],T=[{description:"Triggers on active key change",id:1,name:"update:activeKey"},{description:"Triggers on visible tabs change",id:1,name:"update:visibleTabs"}],S=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],V=[{default:"-",description:"Active key of TabView.",id:1,prop:"activeKey",type:"string"},{default:"-",description:"Id of tab to save the state. Should provide 'id' in case of tab state persistence.",id:2,prop:"id",type:"string"},{default:"true",description:"If true, tab state is saved either in localStorage or sessionStorage.",id:3,prop:"persistState",type:"boolean"},{default:"localStorage",description:"Storage to save tab state.",id:4,prop:"persistStateStorage",type:'"localStorage" | "sessionStorage"'},{default:"top",description:"Position of the tab panel header relative to its content.",id:5,prop:"position",type:'"top" | "left" | "bottom" | "right"'},{default:"-",description:"Array of tab object.",id:6,prop:"tabs",type:"Tab[]"},{default:"-",description:"Array of visible tabs.",id:7,prop:"visibleTabs",type:"string[]"}],C=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],g=[{key:"description",label:"Description"},{key:"review",label:"Reviews"},{key:"specifications",label:"Specifications"},{key:"pricing",label:"Pricing"},{key:"installation",label:"Installation"},{key:"certifications",label:"Certifications"}],p=[{children:"Description",key:"1",label:"Description"},{children:"Reviews",closable:!0,key:"2",label:"Reviews"},{children:"Specifications",closable:!0,key:"3",label:"Specifications"},{children:"Pricing",closable:!0,key:"4",label:"Pricing"},{children:"Installation Instructions",key:"5",label:"Installation"},{children:"Certifications",key:"6",label:"Certifications"}],y=s=>{c.value.includes(s)||(c.value=[...c.value,s]),v.value=s};return(s,e)=>{const b=D("SshPre");return k(),P(h,{title:s.$t("ui.tabView.title"),class:"tab-view"},{toolbar:o(()=>[l(a(u),{label:s.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=r=>s.$router.push("/ui"))},null,8,["label"])]),default:o(()=>[e[36]||(e[36]=t()),i("section",null,[i("h2",null,n(s.$t("ui.tabView.usage.basic")),1),e[8]||(e[8]=t()),i("div",z,[l(a(d),{id:"tab-view",tabs:p,"visible-tabs":["1","5","6"],"active-key":"1"}),e[7]||(e[7]=t()),l(b,{language:"html-vue"},{default:o(()=>e[6]||(e[6]=[t(`
          <template>
            <TabView
              id="tab-view"
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
        `)])),_:1})])]),e[37]||(e[37]=t()),i("section",null,[i("h2",null,n(s.$t("ui.tabView.usage.disableTabState.title")),1),e[12]||(e[12]=t()),i("div",A,[i("p",null,n(s.$t("ui.tabView.usage.disableTabState.subtitle")),1),e[10]||(e[10]=t()),l(a(d),{"persist-state":!1,tabs:p,"visible-tabs":["1","5","6"],"active-key":"1"}),e[11]||(e[11]=t()),l(b,{language:"html-vue"},{default:o(()=>e[9]||(e[9]=[t(`
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
        `)])),_:1})])]),e[38]||(e[38]=t()),i("section",null,[i("h2",null,n(s.$t("ui.tabView.usage.positionBottom")),1),e[15]||(e[15]=t()),i("div",B,[l(a(d),{id:"tab-view-bottom",tabs:p,"visible-tabs":["1","5","6"],"active-key":"1",position:"bottom"}),e[14]||(e[14]=t()),l(b,{language:"html-vue"},{default:o(()=>e[13]||(e[13]=[t(`
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
        `)])),_:1})])]),e[39]||(e[39]=t()),i("section",null,[i("h2",null,n(s.$t("ui.tabView.usage.positionLeft")),1),e[18]||(e[18]=t()),i("div",L,[l(a(d),{id:"tab-view-left",tabs:p,"visible-tabs":["1","5","6"],"active-key":"1",position:"left"}),e[17]||(e[17]=t()),l(b,{language:"html-vue"},{default:o(()=>e[16]||(e[16]=[t(`
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
        `)])),_:1})])]),e[40]||(e[40]=t()),i("section",null,[i("h2",null,n(s.$t("ui.tabView.usage.positionRight")),1),e[21]||(e[21]=t()),i("div",N,[l(a(d),{id:"tab-view-right",tabs:p,"visible-tabs":["1","5","6"],"active-key":"1",position:"right"}),e[20]||(e[20]=t()),l(b,{language:"html-vue"},{default:o(()=>e[19]||(e[19]=[t(`
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
        `)])),_:1})])]),e[41]||(e[41]=t()),i("section",null,[i("h2",null,n(s.$t("ui.tabView.usage.closableTab")),1),e[27]||(e[27]=t()),i("div",E,[i("div",j,[l(a(u),{label:"Add specifications tab",onClick:e[1]||(e[1]=r=>y("3"))}),e[22]||(e[22]=t()),l(a(u),{label:"Add reviews tab",onClick:e[2]||(e[2]=r=>y("2"))}),e[23]||(e[23]=t()),l(a(u),{label:"Add pricing tab",onClick:e[3]||(e[3]=r=>y("4"))})]),e[25]||(e[25]=t()),l(a(d),{id:"tab-view-closable","active-key":v.value,"onUpdate:activeKey":e[4]||(e[4]=r=>v.value=r),"visible-tabs":c.value,"onUpdate:visibleTabs":e[5]||(e[5]=r=>c.value=r),tabs:p},null,8,["active-key","visible-tabs"]),e[26]||(e[26]=t()),l(b,{language:"html-vue"},{default:o(()=>e[24]||(e[24]=[t(`
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
        `)])),_:1})])]),e[42]||(e[42]=t()),i("section",null,[i("h2",null,n(s.$t("ui.tabView.usage.withSlot")),1),e[30]||(e[30]=t()),i("div",F,[l(a(d),{id:"tab-view-slot",tabs:g,"visible-tabs":["description","installation","certifications"],"active-key":"description"},{default:o(()=>[(k(),$(R,null,K(g,r=>i("p",{key:r.key},n(r.label),1)),64))]),_:1}),e[29]||(e[29]=t()),l(b,{language:"html-vue"},{default:o(()=>e[28]||(e[28]=[t(`
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
        `)])),_:1})])]),e[43]||(e[43]=t()),i("section",null,[i("h2",null,n(s.$t("common.properties",{value:"TabViewProperties"})),1),e[31]||(e[31]=t()),i("div",U,[l(a(f),{"columns-data":S,data:V,paginated:!1})])]),e[44]||(e[44]=t()),i("section",null,[i("h2",null,n(s.$t("common.slots")),1),e[32]||(e[32]=t()),i("div",O,[l(a(f),{"columns-data":C,data:[{description:"Content for the tab, matched using the key attribute on each element",id:1,name:"default"}],paginated:!1})])]),e[45]||(e[45]=t()),i("section",null,[i("h2",null,n(s.$t("common.events")),1),e[33]||(e[33]=t()),i("div",q,[l(a(f),{"columns-data":w,data:T,paginated:!1})])]),e[46]||(e[46]=t()),i("section",null,[i("h2",null,n(s.$t("common.type")),1),e[35]||(e[35]=t()),i("div",G,[l(b,{language:"html-vue"},{default:o(()=>e[34]||(e[34]=[t(`
            type Tab = {
              children?: VNode | string;
              closable?: boolean;
              icon?: string;
              key: string;
              label: string;
            };
          `)])),_:1})])])]),_:1},8,["title"])}}});export{X as default};
