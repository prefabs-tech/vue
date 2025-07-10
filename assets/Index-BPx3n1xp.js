import{d as g,I as b,e as m,o as f,i as a,E as n,f as t,g as o,t as p,u as i,a2 as s,x as v,_ as y}from"./index-DBPDEvuK.js";import{_ as B}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CgOyndWM.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-CzX1JeJ0.js";import"./DzangolabVue3TanstackTable.es-85Hmg7nS.js";import"./DzangolabVue3Form.es-Cubaro3U.js";const $={class:"section-content"},k={class:"section-content"},w={class:"section-content"},I={class:"section-content"},z={class:"container"},L={class:"section-content"},S={class:"container"},P={class:"section-content"},R={class:"container"},D={class:"section-content"},U={class:"container"},A={class:"section-content"},N={class:"container"},V=g({__name:"Index",setup(E){const r=[{default:"-",description:"Icon class to show on the left side (e.g. `pi pi-check`).",prop:"iconLeft",type:"String"},{default:"-",description:"Icon class to show on the right side (e.g. `fa fa-lock`).",prop:"iconRight",type:"String"},{default:"-",description:"The text label to be displayed inside the badge.",prop:"label",type:"String"},{default:"false",description:"Applies rounded styling to the badge (pill shape).",prop:"rounded",type:"Boolean"},{default:'"primary"',description:"Severity level for styling.",prop:"severity",type:'"primary" | "secondary" | "alternate" | "success" | "danger" | "warning"'}],u=[{description:"Used to insert a custom icon element on the left side of the label.",name:"iconLeft"},{description:"Used to insert a custom icon element on the right side of the label.",name:"iconRight"}];return(l,e)=>{const d=b("SshPre");return f(),m(C,{"sub-title":l.$t("ui.badge.subtitle"),title:l.$t("ui.badge.title"),class:"demo-badge"},{toolbar:a(()=>[o(i(v),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=T=>l.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[36]||(e[36]=n()),t("section",null,[t("h2",null,p(l.$t("ui.badge.usage.basic")),1),e[3]||(e[3]=n()),t("div",$,[o(i(s),{label:l.$t("ui.badge.label.basic")},null,8,["label"]),e[2]||(e[2]=n()),o(d,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[n(`
          <template>
            <BadgeComponent label="Basic" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[37]||(e[37]=n()),t("section",null,[t("h2",null,p(l.$t("ui.badge.usage.withI18n")),1),e[6]||(e[6]=n()),t("div",k,[o(i(s),{label:l.$t("ui.badge.label.addedIn")},null,8,["label"]),e[5]||(e[5]=n()),o(d,{language:"html-vue"},{default:a(()=>e[4]||(e[4]=[n(`
          <template>
            <BadgeComponent :label="t('ui.badge.label.addedIn')" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[38]||(e[38]=n()),t("section",null,[t("h2",null,p(l.$t("ui.badge.usage.rounded")),1),e[9]||(e[9]=n()),t("div",w,[o(i(s),{label:l.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"]),e[8]||(e[8]=n()),o(d,{language:"html-vue"},{default:a(()=>e[7]||(e[7]=[n(`
          <template>
            <BadgeComponent label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[39]||(e[39]=n()),t("section",null,[t("h2",null,p(l.$t("ui.badge.usage.severity")),1),e[17]||(e[17]=n()),t("div",I,[t("div",z,[o(i(s),{label:l.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e[10]||(e[10]=n()),o(i(s),{label:l.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e[11]||(e[11]=n()),o(i(s),{label:l.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e[12]||(e[12]=n()),o(i(s),{label:l.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e[13]||(e[13]=n()),o(i(s),{label:l.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e[14]||(e[14]=n()),o(i(s),{label:l.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])]),e[16]||(e[16]=n()),o(d,{language:"html-vue"},{default:a(()=>e[15]||(e[15]=[n(`
          <template>
            <BadgeComponent label="Primary" severity="primary" />
            <BadgeComponent label="Secondary" severity="secondary" />
            <BadgeComponent label="Alternate" severity="alternate" />
            <BadgeComponent label="Success" severity="success" />
            <BadgeComponent label="Danger" severity="danger" />
            <BadgeComponent label="Warning" severity="warning" />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[40]||(e[40]=n()),t("section",null,[t("h2",null,p(l.$t("ui.badge.usage.icon")),1),e[21]||(e[21]=n()),t("div",L,[t("div",S,[o(i(s),{"icon-left":"pi pi-thumbs-up"}),e[18]||(e[18]=n()),o(i(s),{"icon-right":"pi pi-thumbs-down"})]),e[20]||(e[20]=n()),o(d,{language:"html-vue"},{default:a(()=>e[19]||(e[19]=[n(`
          <template>
            <BadgeComponent icon-left="pi pi-thumbs-up" />
            <BadgeComponent icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[41]||(e[41]=n()),t("section",null,[t("h2",null,p(l.$t("ui.badge.usage.iconPackage")),1),e[25]||(e[25]=n()),t("div",P,[t("div",R,[o(i(s),{label:l.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[22]||(e[22]=n()),o(i(s),{label:l.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])]),e[24]||(e[24]=n()),o(d,{language:"html-vue"},{default:a(()=>e[23]||(e[23]=[n(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[42]||(e[42]=n()),t("section",null,[t("h2",null,p(l.$t("ui.badge.usage.iconAndLabel")),1),e[29]||(e[29]=n()),t("div",D,[t("div",U,[o(i(s),{label:l.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[26]||(e[26]=n()),o(i(s),{label:l.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])]),e[28]||(e[28]=n()),o(d,{language:"html-vue"},{default:a(()=>e[27]||(e[27]=[n(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[43]||(e[43]=n()),t("section",null,[t("h2",null,p(l.$t("ui.badge.usage.iconElement")),1),e[35]||(e[35]=n()),t("div",A,[t("div",N,[o(i(s),{label:l.$t("ui.badge.label.correct")},{iconLeft:a(()=>e[30]||(e[30]=[t("i",{class:"pi pi-check"},null,-1)])),_:1},8,["label"]),e[32]||(e[32]=n()),o(i(s),{label:l.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:a(()=>e[31]||(e[31]=[t("i",{class:"pi pi-times"},null,-1)])),_:1},8,["label"])]),e[34]||(e[34]=n()),o(d,{language:"html-vue"},{default:a(()=>e[33]||(e[33]=[n(`
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
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[44]||(e[44]=n()),o(B,{"props-data":r,"props-table-title":l.$t("common.properties",{value:"BadgeProperties"}),"slots-data":u},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}}),G=y(V,[["__scopeId","data-v-63366ffb"]]);export{G as default};
