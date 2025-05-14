import{T as f}from"./DzangolabVue3TanstackTable.es-VpnN5DDE.js";import{d as C,r as g,K as I,f as D,o as P,i as o,D as i,g as t,t as n,h as s,u as a,a8 as d,v as u}from"./index-Dncpa1QU.js";import{_ as $}from"./UiPage.vue_vue_type_style_index_0_lang-CK4fi2ux.js";import"./DzangolabVue3Form.es-bnw6dzXM.js";const R={class:"section-content"},K={class:"section-content"},h={class:"section-content"},A={class:"section-content"},z={class:"section-content"},B={class:"section-content"},N={class:"tab-button-group"},L={class:"section-content"},E={class:"section-content"},U={class:"section-content"},j={class:"section-content"},O={class:"section-content"},M=C({__name:"Index",setup(q){const v=g("1"),c=g(["1"]),k=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],m=[{description:"Triggers on active key change",id:1,name:"update:activeKey"},{description:"Triggers on visible tabs change",id:1,name:"update:visibleTabs"}],w=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],T=[{default:"-",description:"Active key of TabView.",id:1,prop:"activeKey",type:"string"},{default:"-",description:"Id of tab to save the state. Should provide 'id' in case of tab state persistence.",id:2,prop:"id",type:"string"},{default:"true",description:"If true, tab state is saved either in localStorage or sessionStorage.",id:3,prop:"persistState",type:"boolean"},{default:"localStorage",description:"Storage to save tab state.",id:4,prop:"persistStateStorage",type:'"localStorage" | "sessionStorage"'},{default:"top",description:"Position of the tab panel header relative to its content.",id:5,prop:"position",type:'"top" | "left" | "bottom" | "right"'},{default:"-",description:"Array of tab object.",id:6,prop:"tabs",type:"Tab[]"},{default:"-",description:"Array of visible tabs.",id:7,prop:"visibleTabs",type:"string[]"}],S=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],V=[{key:"description",label:"Description"},{key:"review",label:"Reviews"},{key:"specifications",label:"Specifications"},{key:"pricing",label:"Pricing"},{key:"installation",label:"Installation"},{key:"certifications",label:"Certifications"}],p=[{children:"Description",key:"1",label:"Description"},{children:"Reviews",closable:!0,key:"2",label:"Reviews"},{children:"Specifications",closable:!0,key:"3",label:"Specifications"},{children:"Pricing",closable:!0,key:"4",label:"Pricing"},{children:"Installation Instructions",key:"5",label:"Installation"},{children:"Certifications",key:"6",label:"Certifications"}],y=l=>{c.value.includes(l)||(c.value=[...c.value,l]),v.value=l};return(l,e)=>{const r=I("SshPre");return P(),D($,{title:l.$t("ui.tabView.title"),class:"tab-view"},{toolbar:o(()=>[s(a(u),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=b=>l.$router.push("/ui"))},null,8,["label"])]),default:o(()=>[e[37]||(e[37]=i()),t("section",null,[t("h2",null,n(l.$t("ui.tabView.usage.basic")),1),e[8]||(e[8]=i()),t("div",R,[s(a(d),{id:"tab-view",tabs:p,"visible-tabs":["1","5","6"],"active-key":"1"}),e[7]||(e[7]=i()),s(r,{language:"html-vue"},{default:o(()=>e[6]||(e[6]=[i(`
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
        `)])),_:1})])]),e[38]||(e[38]=i()),t("section",null,[t("h2",null,n(l.$t("ui.tabView.usage.disableTabState.title")),1),e[12]||(e[12]=i()),t("div",K,[t("p",null,n(l.$t("ui.tabView.usage.disableTabState.subtitle")),1),e[10]||(e[10]=i()),s(a(d),{"persist-state":!1,tabs:p,"visible-tabs":["1","5","6"],"active-key":"1"}),e[11]||(e[11]=i()),s(r,{language:"html-vue"},{default:o(()=>e[9]||(e[9]=[i(`
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
        `)])),_:1})])]),e[39]||(e[39]=i()),t("section",null,[t("h2",null,n(l.$t("ui.tabView.usage.positionBottom")),1),e[15]||(e[15]=i()),t("div",h,[s(a(d),{id:"tab-view-bottom",tabs:p,"visible-tabs":["1","5","6"],"active-key":"1",position:"bottom"}),e[14]||(e[14]=i()),s(r,{language:"html-vue"},{default:o(()=>e[13]||(e[13]=[i(`
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
        `)])),_:1})])]),e[40]||(e[40]=i()),t("section",null,[t("h2",null,n(l.$t("ui.tabView.usage.positionLeft")),1),e[18]||(e[18]=i()),t("div",A,[s(a(d),{id:"tab-view-left",tabs:p,"visible-tabs":["1","5","6"],"active-key":"1",position:"left"}),e[17]||(e[17]=i()),s(r,{language:"html-vue"},{default:o(()=>e[16]||(e[16]=[i(`
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
        `)])),_:1})])]),e[41]||(e[41]=i()),t("section",null,[t("h2",null,n(l.$t("ui.tabView.usage.positionRight")),1),e[21]||(e[21]=i()),t("div",z,[s(a(d),{id:"tab-view-right",tabs:p,"visible-tabs":["1","5","6"],"active-key":"1",position:"right"}),e[20]||(e[20]=i()),s(r,{language:"html-vue"},{default:o(()=>e[19]||(e[19]=[i(`
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
        `)])),_:1})])]),e[42]||(e[42]=i()),t("section",null,[t("h2",null,n(l.$t("ui.tabView.usage.closableTab")),1),e[27]||(e[27]=i()),t("div",B,[t("div",N,[s(a(u),{label:"Add specifications tab",onClick:e[1]||(e[1]=b=>y("3"))}),e[22]||(e[22]=i()),s(a(u),{label:"Add reviews tab",onClick:e[2]||(e[2]=b=>y("2"))}),e[23]||(e[23]=i()),s(a(u),{label:"Add pricing tab",onClick:e[3]||(e[3]=b=>y("4"))})]),e[25]||(e[25]=i()),s(a(d),{id:"tab-view-closable","active-key":v.value,"onUpdate:activeKey":e[4]||(e[4]=b=>v.value=b),"visible-tabs":c.value,"onUpdate:visibleTabs":e[5]||(e[5]=b=>c.value=b),tabs:p},null,8,["active-key","visible-tabs"]),e[26]||(e[26]=i()),s(r,{language:"html-vue"},{default:o(()=>e[24]||(e[24]=[i(`
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
        `)])),_:1})])]),e[43]||(e[43]=i()),t("section",null,[t("h2",null,n(l.$t("ui.tabView.usage.withSlot")),1),e[31]||(e[31]=i()),t("div",L,[s(a(d),{id:"tab-view-slot",tabs:V,"visible-tabs":["description","installation","certifications"],"active-key":"description"},{default:o(()=>e[28]||(e[28]=[t("p",{key:"description"},"Description",-1),i(),t("p",{key:"installation"},"Installation",-1),i(),t("p",{key:"certifications"},"Certifications",-1)])),_:1}),e[30]||(e[30]=i()),s(r,{language:"html-vue"},{default:o(()=>e[29]||(e[29]=[i(`
          <template>
            <TabView
              id="tab-view-slot"
              :tabs="tabList"    
              :visible-tabs="['description', 'installation', 'certifications']"
              active-key="['description']"
            />
              <p key="description">Description</p>
              <p key="installation">Installation</p>
              <p key="certifications">Certifications</p>
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
        `)])),_:1})])]),e[44]||(e[44]=i()),t("section",null,[t("h2",null,n(l.$t("common.properties",{value:"TabViewProperties"})),1),e[32]||(e[32]=i()),t("div",E,[s(a(f),{"columns-data":w,data:T,paginated:!1})])]),e[45]||(e[45]=i()),t("section",null,[t("h2",null,n(l.$t("common.slots")),1),e[33]||(e[33]=i()),t("div",U,[s(a(f),{"columns-data":S,data:[{description:"Content for the tab, matched using the key attribute on each element",id:1,name:"default"}],paginated:!1})])]),e[46]||(e[46]=i()),t("section",null,[t("h2",null,n(l.$t("common.events")),1),e[34]||(e[34]=i()),t("div",j,[s(a(f),{"columns-data":k,data:m,paginated:!1})])]),e[47]||(e[47]=i()),t("section",null,[t("h2",null,n(l.$t("common.type")),1),e[36]||(e[36]=i()),t("div",O,[s(r,{language:"html-vue"},{default:o(()=>e[35]||(e[35]=[i(`
            type Tab = {
              children?: VNode | string;
              closable?: boolean;
              icon?: string;
              key: string;
              label: string;
            };
          `)])),_:1})])])]),_:1},8,["title"])}}});export{M as default};
