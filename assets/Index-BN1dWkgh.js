import{d as p,K as r,f as g,o as b,i as a,E as n,g as l,t as u,h as o,u as i,a1 as s,x as m,_ as v}from"./index--1kJlkFk.js";import{_ as f}from"./UiPage.vue_vue_type_style_index_0_lang-DP7rNQJ4.js";const C={class:"section-content"},B={class:"section-content"},y={class:"section-content"},$={class:"section-content"},k={class:"container"},z={class:"section-content"},w={class:"container"},I={class:"section-content"},L={class:"container"},S={class:"section-content"},P={class:"container"},N={class:"section-content"},R={class:"container"},V=p({__name:"Index",setup(A){return(t,e)=>{const d=r("SshPre");return b(),g(f,{title:t.$t("ui.badge.title"),class:"demo-badge"},{toolbar:a(()=>[o(i(m),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=D=>t.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[36]||(e[36]=n()),l("section",null,[l("h2",null,u(t.$t("ui.badge.usage.basic")),1),e[3]||(e[3]=n()),l("div",C,[o(i(s),{label:t.$t("ui.badge.label.basic")},null,8,["label"]),e[2]||(e[2]=n()),o(d,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[n(`
          <template>
            <BadgeComponent label="Basic" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[37]||(e[37]=n()),l("section",null,[l("h2",null,u(t.$t("ui.badge.usage.withI18n")),1),e[6]||(e[6]=n()),l("div",B,[o(i(s),{label:t.$t("ui.badge.label.addedIn")},null,8,["label"]),e[5]||(e[5]=n()),o(d,{language:"html-vue"},{default:a(()=>e[4]||(e[4]=[n(`
          <template>
            <BadgeComponent :label="t('ui.badge.label.addedIn')" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[38]||(e[38]=n()),l("section",null,[l("h2",null,u(t.$t("ui.badge.usage.rounded")),1),e[9]||(e[9]=n()),l("div",y,[o(i(s),{label:t.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"]),e[8]||(e[8]=n()),o(d,{language:"html-vue"},{default:a(()=>e[7]||(e[7]=[n(`
          <template>
            <BadgeComponent label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[39]||(e[39]=n()),l("section",null,[l("h2",null,u(t.$t("ui.badge.usage.severity")),1),e[17]||(e[17]=n()),l("div",$,[l("div",k,[o(i(s),{label:t.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e[10]||(e[10]=n()),o(i(s),{label:t.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e[11]||(e[11]=n()),o(i(s),{label:t.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e[12]||(e[12]=n()),o(i(s),{label:t.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e[13]||(e[13]=n()),o(i(s),{label:t.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e[14]||(e[14]=n()),o(i(s),{label:t.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])]),e[16]||(e[16]=n()),o(d,{language:"html-vue"},{default:a(()=>e[15]||(e[15]=[n(`
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
        `)])),_:1})])]),e[40]||(e[40]=n()),l("section",null,[l("h2",null,u(t.$t("ui.badge.usage.icon")),1),e[21]||(e[21]=n()),l("div",z,[l("div",w,[o(i(s),{"icon-left":"pi pi-thumbs-up"}),e[18]||(e[18]=n()),o(i(s),{"icon-right":"pi pi-thumbs-down"})]),e[20]||(e[20]=n()),o(d,{language:"html-vue"},{default:a(()=>e[19]||(e[19]=[n(`
          <template>
            <BadgeComponent icon-left="pi pi-thumbs-up" />
            <BadgeComponent icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[41]||(e[41]=n()),l("section",null,[l("h2",null,u(t.$t("ui.badge.usage.iconPackage")),1),e[25]||(e[25]=n()),l("div",I,[l("div",L,[o(i(s),{label:t.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[22]||(e[22]=n()),o(i(s),{label:t.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])]),e[24]||(e[24]=n()),o(d,{language:"html-vue"},{default:a(()=>e[23]||(e[23]=[n(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[42]||(e[42]=n()),l("section",null,[l("h2",null,u(t.$t("ui.badge.usage.iconAndLabel")),1),e[29]||(e[29]=n()),l("div",S,[l("div",P,[o(i(s),{label:t.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[26]||(e[26]=n()),o(i(s),{label:t.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])]),e[28]||(e[28]=n()),o(d,{language:"html-vue"},{default:a(()=>e[27]||(e[27]=[n(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[43]||(e[43]=n()),l("section",null,[l("h2",null,u(t.$t("ui.badge.usage.iconElement")),1),e[35]||(e[35]=n()),l("div",N,[l("div",R,[o(i(s),{label:t.$t("ui.badge.label.correct")},{iconLeft:a(()=>e[30]||(e[30]=[l("i",{class:"pi pi-check"},null,-1)])),_:1},8,["label"]),e[32]||(e[32]=n()),o(i(s),{label:t.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:a(()=>e[31]||(e[31]=[l("i",{class:"pi pi-times"},null,-1)])),_:1},8,["label"])]),e[34]||(e[34]=n()),o(d,{language:"html-vue"},{default:a(()=>e[33]||(e[33]=[n(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}}),W=v(V,[["__scopeId","data-v-ae3e574d"]]);export{W as default};
