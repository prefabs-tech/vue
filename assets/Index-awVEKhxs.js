import{d as g,J as b,b as m,o as f,h as a,e as n,y as t,g as o,t as r,u as i,a1 as s,_ as v}from"./index-CcgkNhek.js";import{_ as y}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-3HTF-xmp.js";import{_ as B}from"./UiPage.vue_vue_type_style_index_0_lang-mZqaI-tE.js";import"./PrefabsTechVue3TanstackTable.es-CMugsYiG.js";import"./PrefabsTechVue3Form.es-CviYuyTJ.js";const C={class:"section-content"},$={class:"section-content"},k={class:"section-content"},w={class:"section-content"},I={class:"container"},L={class:"section-content"},S={class:"container"},P={class:"section-content"},R={class:"container"},D={class:"section-content"},U={class:"container"},A={class:"section-content"},N={class:"container"},V=g({__name:"Index",setup(T){const d=[{default:"-",description:"Icon class to show on the left side (e.g. `pi pi-check`).",prop:"iconLeft",type:"String"},{default:"-",description:"Icon class to show on the right side (e.g. `fa fa-lock`).",prop:"iconRight",type:"String"},{default:"-",description:"The text label to be displayed inside the badge.",prop:"label",type:"String"},{default:"false",description:"Applies rounded styling to the badge (pill shape).",prop:"rounded",type:"Boolean"},{default:'"primary"',description:"Severity level for styling.",prop:"severity",type:'"primary" | "secondary" | "alternate" | "success" | "danger" | "warning"'}],u=[{description:"Used to insert a custom icon element on the left side of the label.",name:"iconLeft"},{description:"Used to insert a custom icon element on the right side of the label.",name:"iconRight"}];return(l,e)=>{const p=b("SshPre");return f(),m(B,{subtitle:l.$t("ui.badge.subtitle"),title:l.$t("ui.badge.title"),class:"demo-badge"},{default:a(()=>[n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.basic")),1),e[2]||(e[2]=t()),n("div",C,[o(i(s),{label:l.$t("ui.badge.label.basic")},null,8,["label"]),e[1]||(e[1]=t()),o(p,{language:"html-vue"},{default:a(()=>[...e[0]||(e[0]=[t(`
          <template>
            <BadgeComponent label="Basic" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[35]||(e[35]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.withI18n")),1),e[5]||(e[5]=t()),n("div",$,[o(i(s),{label:l.$t("ui.badge.label.addedIn")},null,8,["label"]),e[4]||(e[4]=t()),o(p,{language:"html-vue"},{default:a(()=>[...e[3]||(e[3]=[t(`
          <template>
            <BadgeComponent :label="t('ui.badge.label.addedIn')" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)])]),_:1})])]),e[36]||(e[36]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.rounded")),1),e[8]||(e[8]=t()),n("div",k,[o(i(s),{label:l.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"]),e[7]||(e[7]=t()),o(p,{language:"html-vue"},{default:a(()=>[...e[6]||(e[6]=[t(`
          <template>
            <BadgeComponent label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[37]||(e[37]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.severity")),1),e[16]||(e[16]=t()),n("div",w,[n("div",I,[o(i(s),{label:l.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e[9]||(e[9]=t()),o(i(s),{label:l.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e[10]||(e[10]=t()),o(i(s),{label:l.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e[11]||(e[11]=t()),o(i(s),{label:l.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e[12]||(e[12]=t()),o(i(s),{label:l.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e[13]||(e[13]=t()),o(i(s),{label:l.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])]),e[15]||(e[15]=t()),o(p,{language:"html-vue"},{default:a(()=>[...e[14]||(e[14]=[t(`
          <template>
            <BadgeComponent label="Primary" severity="primary" />
            <BadgeComponent label="Secondary" severity="secondary" />
            <BadgeComponent label="Alternate" severity="alternate" />
            <BadgeComponent label="Success" severity="success" />
            <BadgeComponent label="Danger" severity="danger" />
            <BadgeComponent label="Warning" severity="warning" />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[38]||(e[38]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.icon")),1),e[20]||(e[20]=t()),n("div",L,[n("div",S,[o(i(s),{"icon-left":"pi pi-thumbs-up"}),e[17]||(e[17]=t()),o(i(s),{"icon-right":"pi pi-thumbs-down"})]),e[19]||(e[19]=t()),o(p,{language:"html-vue"},{default:a(()=>[...e[18]||(e[18]=[t(`
          <template>
            <BadgeComponent icon-left="pi pi-thumbs-up" />
            <BadgeComponent icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[39]||(e[39]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.iconPackage")),1),e[24]||(e[24]=t()),n("div",P,[n("div",R,[o(i(s),{label:l.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[21]||(e[21]=t()),o(i(s),{label:l.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])]),e[23]||(e[23]=t()),o(p,{language:"html-vue"},{default:a(()=>[...e[22]||(e[22]=[t(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[40]||(e[40]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.iconAndLabel")),1),e[28]||(e[28]=t()),n("div",D,[n("div",U,[o(i(s),{label:l.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[25]||(e[25]=t()),o(i(s),{label:l.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])]),e[27]||(e[27]=t()),o(p,{language:"html-vue"},{default:a(()=>[...e[26]||(e[26]=[t(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[41]||(e[41]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.iconElement")),1),e[34]||(e[34]=t()),n("div",A,[n("div",N,[o(i(s),{label:l.$t("ui.badge.label.correct")},{iconLeft:a(()=>[...e[29]||(e[29]=[n("i",{class:"pi pi-check"},null,-1)])]),_:1},8,["label"]),e[31]||(e[31]=t()),o(i(s),{label:l.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:a(()=>[...e[30]||(e[30]=[n("i",{class:"pi pi-times"},null,-1)])]),_:1},8,["label"])]),e[33]||(e[33]=t()),o(p,{language:"html-vue"},{default:a(()=>[...e[32]||(e[32]=[t(`
          <template>
            <BadgeComponent label="Correct">
              <template #iconLeft>
                <i class="pi pi-check" >
              </template>
            </BadgeComponent>

            <BadgeComponent label="Wrong" severity="danger">
              <template #iconRight>
                <i class="pi pi-times" >
              </template>
            </BadgeComponent>
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),e[42]||(e[42]=t()),o(y,{"props-data":d,"props-table-title":l.$t("common.properties",{value:"BadgeProperties"}),"slots-data":u},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}}),q=v(V,[["__scopeId","data-v-bd5f58a3"]]);export{q as default};
