import{D as e,E as t,On as n,St as r,_ as i,b as a,bt as o,k as s,mt as c,o as l,qt as u,tr as d,v as f,vn as p,y as m}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{T as h,g,o as _}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{E as v}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as y}from"./ComponentDocumentation-BPcopVAa.js";import{t as b}from"./UiPage-3Ir0VIur.js";var x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E={class:`section-content`},D={class:`tab-button-group`},O={class:`section-content`},k={class:`section-content`},A={class:`section-content`},j={class:`section-content`},M={class:`section-content`},N=s({name:`TabViewDemo`,setup(s){let{t:N}=v(),P=p(`1`),F=p(),I=p(),L=p(`1`),R=p(),z=p(!1),B=p(!1),V=p([`1`]),H=[{description:N(`ui.tabView.documentation.eventDescription.beforeTabChange`),name:`beforeTabChange`,payload:`key`},{description:N(`ui.tabView.documentation.eventDescription.beforeTabClose`),name:`beforeTabClose`,payload:`key`},{description:N(`ui.tabView.documentation.eventDescription.updateActiveKey`),name:`update:activeKey`,payload:`key`},{description:N(`ui.tabView.documentation.eventDescription.updateVisibleTabs`),name:`update:visibleTabs`,payload:`key[]`}],U=[{children:`Description`,key:`tab1`,label:`Description`},{children:`Reviews`,key:`tab2`,label:`Reviews`},{children:`Specifications`,key:`tab3`,label:`Specifications`},{children:`Pricing`,key:`tab4`,label:`Pricing`},{children:`Installation Instructions`,key:`tab5`,label:`Installation`},{children:`Certifications`,key:`tab6`,label:`Certifications`}],W=[{default:`-`,description:N(`ui.tabView.documentation.propsDescription.activeKey`),prop:`activeKey`,type:`string`},{default:`false`,description:N(`ui.tabView.documentation.propsDescription.enableHashRouting`),prop:`enableHashRouting`,type:`boolean`},{default:`-`,description:N(`ui.tabView.documentation.propsDescription.id`),prop:`id`,type:`string`},{default:`false`,description:N(`ui.tabView.documentation.propsDescription.interceptTabChange`),prop:`interceptTabChange`,type:`boolean`},{default:`false`,description:N(`ui.tabView.documentation.propsDescription.interceptTabClose`),prop:`interceptTabClose`,type:`boolean`},{default:`true`,description:N(`ui.tabView.documentation.propsDescription.lazy`),prop:`lazy`,type:`boolean`},{default:`true`,description:N(`ui.tabView.documentation.propsDescription.persistState`),prop:`persistState`,type:`boolean`},{default:`localStorage`,description:N(`ui.tabView.documentation.propsDescription.persistStateStorage`),prop:`persistStateStorage`,type:`"localStorage" | "sessionStorage"`},{default:`top`,description:N(`ui.tabView.documentation.propsDescription.position`),prop:`position`,type:`"top" | "left" | "bottom" | "right"`},{default:`-`,description:N(`ui.tabView.documentation.propsDescription.tabs`),prop:`tabs`,type:`Tab[]`},{default:`-`,description:N(`ui.tabView.documentation.propsDescription.visibleTabs`),prop:`visibleTabs`,type:`string[]`}],G=[{description:N(`ui.tabView.documentation.slotDescription.default`),name:`default`}],K=[{key:`description`,label:`Description`},{key:`review`,label:`Reviews`},{key:`specifications`,label:`Specifications`},{key:`pricing`,label:`Pricing`},{key:`installation`,label:`Installation`},{key:`certifications`,label:`Certifications`}],q=[{children:`Description`,key:`1`,label:`Description`},{children:`Reviews`,closable:!0,key:`2`,label:`Reviews`},{children:`Specifications`,closable:!0,key:`3`,label:`Specifications`},{children:`Pricing`,closable:!0,key:`4`,label:`Pricing`},{children:`Installation Instructions`,key:`5`,label:`Installation`},{children:`Certifications`,key:`6`,label:`Certifications`}],J=e=>{V.value.includes(e)||(V.value=[...V.value,e]),P.value=e},Y=e=>{B.value=!0,R.value=e},X=e=>{z.value=!0,F.value=e},Z=()=>{L.value=R.value||L.value,B.value=!1},Q=()=>{I.value?.closeTab(F.value),z.value=!1};return(s,p)=>{let v=r(`SshPre`);return c(),f(b,{subtitle:s.$t(`ui.tabView.subtitle`),title:s.$t(`ui.tabView.title`),class:`tab-view`},{default:u(()=>[i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.basic`)),1),p[10]||=t(),i(`div`,x,[e(n(g),{id:`tab-view`,tabs:q,"active-key":`1`}),p[9]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[8]||=[t(`
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
        `,-1)]]),_:1})])]),p[46]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.disableTabState.title`)),1),p[14]||=t(),i(`div`,S,[i(`p`,null,d(s.$t(`ui.tabView.usage.disableTabState.subtitle`)),1),p[12]||=t(),e(n(g),{"persist-state":!1,tabs:q,"visible-tabs":[`1`,`5`,`6`],"active-key":`1`}),p[13]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[11]||=[t(`
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
        `,-1)]]),_:1})])]),p[47]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.positionBottom`)),1),p[17]||=t(),i(`div`,C,[e(n(g),{id:`tab-view-bottom`,tabs:q,"visible-tabs":[`1`,`5`,`6`],"active-key":`1`,position:`bottom`}),p[16]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[15]||=[t(`
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
        `,-1)]]),_:1})])]),p[48]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.positionLeft`)),1),p[20]||=t(),i(`div`,w,[e(n(g),{id:`tab-view-left`,tabs:q,"visible-tabs":[`1`,`5`,`6`],"active-key":`1`,position:`left`}),p[19]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[18]||=[t(`
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
        `,-1)]]),_:1})])]),p[49]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.positionRight`)),1),p[23]||=t(),i(`div`,T,[e(n(g),{id:`tab-view-right`,tabs:q,"visible-tabs":[`1`,`5`,`6`],"active-key":`1`,position:`right`}),p[22]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[21]||=[t(`
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
        `,-1)]]),_:1})])]),p[50]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.closableTab`)),1),p[29]||=t(),i(`div`,E,[i(`div`,D,[e(n(_),{label:`Add specifications tab`,onClick:p[0]||=e=>J(`3`)}),p[24]||=t(),e(n(_),{label:`Add reviews tab`,onClick:p[1]||=e=>J(`2`)}),p[25]||=t(),e(n(_),{label:`Add pricing tab`,onClick:p[2]||=e=>J(`4`)})]),p[27]||=t(),e(n(g),{id:`tab-view-closable`,"active-key":P.value,"onUpdate:activeKey":p[3]||=e=>P.value=e,"visible-tabs":V.value,"onUpdate:visibleTabs":p[4]||=e=>V.value=e,tabs:q},null,8,[`active-key`,`visible-tabs`]),p[28]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[26]||=[t(`
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
        `,-1)]]),_:1})])]),p[51]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.withSlot`)),1),p[32]||=t(),i(`div`,O,[e(n(g),{id:`tab-view-slot`,tabs:K,"visible-tabs":[`description`,`installation`,`certifications`],"active-key":`description`},{default:u(()=>[(c(),a(l,null,o(K,e=>i(`p`,{key:e.key},d(e.label),1)),64))]),_:1}),p[31]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[30]||=[t(`
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
        `,-1)]]),_:1})])]),p[52]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.interceptTabChange`)),1),p[36]||=t(),i(`div`,k,[e(n(g),{id:`tab-view-interception`,"active-key":L.value,"onUpdate:activeKey":p[5]||=e=>L.value=e,tabs:q,"visible-tabs":[`1`,`5`,`6`],"intercept-tab-change":``,onBeforeTabChange:Y},null,8,[`active-key`]),p[34]||=t(),B.value?(c(),f(n(h),{key:0,"onOn:close":p[6]||=e=>B.value=!1,"onOn:confirm":Z})):m(``,!0),p[35]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[33]||=[t(`
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
        `,-1)]]),_:1})])]),p[53]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.interceptTabClose`)),1),p[40]||=t(),i(`div`,A,[e(n(g),{id:`tab-view-interception-close`,ref_key:`dzangolabVueTabView`,ref:I,tabs:q,"active-key":`1`,"intercept-tab-close":``,onBeforeTabClose:X},null,512),p[38]||=t(),z.value?(c(),f(n(h),{key:0,"onOn:close":p[7]||=e=>z.value=!1,"onOn:confirm":Q})):m(``,!0),p[39]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[37]||=[t(`
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
        `,-1)]]),_:1})])]),p[54]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`ui.tabView.usage.withHashRouting`)),1),p[43]||=t(),i(`div`,j,[e(n(g),{id:`tab-view-hash-routing`,tabs:U,"active-key":`tab1`,"enable-hash-routing":``}),p[42]||=t(),e(v,{language:`html-vue`},{default:u(()=>[...p[41]||=[t(`
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
        `,-1)]]),_:1})])]),p[55]||=t(),e(y,{"events-data":H,"props-data":W,"props-table-title":s.$t(`common.properties`,{value:`TabViewProperties`}),"slots-data":G},null,8,[`props-table-title`]),p[56]||=t(),i(`section`,null,[i(`h2`,null,d(s.$t(`common.type`)),1),p[45]||=t(),i(`div`,M,[e(v,{language:`html-vue`},{default:u(()=>[...p[44]||=[t(`
            type Tab = {
              children?: VNode | string;
              closable?: boolean;
              icon?: string;
              key: string;
              label: string;
            };
          `,-1)]]),_:1})])])]),_:1},8,[`subtitle`,`title`])}}});export{N as default};