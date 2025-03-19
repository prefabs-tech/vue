import{d as r,A as g,e as b,o as p,w as o,E as l,f as n,t as u,i,u as s,S as a,j as m,_ as v}from"./index-Bt1mySq5.js";import{_ as f}from"./UiPage.vue_vue_type_style_index_0_lang-DsTwf6lv.js";const B={class:"section-content"},y={class:"section-content"},$={class:"section-content"},k={class:"section-content"},z={class:"container"},w={class:"section-content"},I={class:"container"},L={class:"section-content"},S={class:"container"},C={class:"section-content"},P={class:"container"},A={class:"section-content"},N={class:"container"},R=r({__name:"Index",setup(V){return(t,e)=>{const d=g("SshPre");return p(),b(f,{title:t.$t("ui.badge.title"),class:"demo-badge"},{toolbar:o(()=>[i(s(m),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=D=>t.$router.push("/ui"))},null,8,["label"])]),default:o(()=>[e[36]||(e[36]=l()),n("section",null,[n("h2",null,u(t.$t("ui.badge.usage.basic")),1),e[3]||(e[3]=l()),n("div",B,[i(s(a),{label:t.$t("ui.badge.label.basic")},null,8,["label"]),e[2]||(e[2]=l()),i(d,{language:"html-vue"},{default:o(()=>e[1]||(e[1]=[l(`
          <template>
            <Badge label="Basic" /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[37]||(e[37]=l()),n("section",null,[n("h2",null,u(t.$t("ui.badge.usage.withI18n")),1),e[6]||(e[6]=l()),n("div",y,[i(s(a),{label:t.$t("ui.badge.label.addedIn")},null,8,["label"]),e[5]||(e[5]=l()),i(d,{language:"html-vue"},{default:o(()=>e[4]||(e[4]=[l(`
          <template>
            <Badge :label=t("ui.badge.label.addedIn") /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[38]||(e[38]=l()),n("section",null,[n("h2",null,u(t.$t("ui.badge.usage.rounded")),1),e[9]||(e[9]=l()),n("div",$,[i(s(a),{label:t.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"]),e[8]||(e[8]=l()),i(d,{language:"html-vue"},{default:o(()=>e[7]||(e[7]=[l(`
          <template>
            <Badge label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[39]||(e[39]=l()),n("section",null,[n("h2",null,u(t.$t("ui.badge.usage.severity")),1),e[17]||(e[17]=l()),n("div",k,[n("div",z,[i(s(a),{label:t.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e[10]||(e[10]=l()),i(s(a),{label:t.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e[11]||(e[11]=l()),i(s(a),{label:t.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e[12]||(e[12]=l()),i(s(a),{label:t.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e[13]||(e[13]=l()),i(s(a),{label:t.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e[14]||(e[14]=l()),i(s(a),{label:t.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])]),e[16]||(e[16]=l()),i(d,{language:"html-vue"},{default:o(()=>e[15]||(e[15]=[l(`
          <template>
            <Badge label="Primary" severity="primary" />
            <Badge label="Secondary" severity="secondary" />
            <Badge label="Alternate" severity="alternate" />
            <Badge label="Success" severity="success" />
            <Badge label="Danger" severity="danger" />
            <Badge label="Warning" severity="warning" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[40]||(e[40]=l()),n("section",null,[n("h2",null,u(t.$t("ui.badge.usage.icon")),1),e[21]||(e[21]=l()),n("div",w,[n("div",I,[i(s(a),{"icon-left":"pi pi-thumbs-up"}),e[18]||(e[18]=l()),i(s(a),{"icon-right":"pi pi-thumbs-down"})]),e[20]||(e[20]=l()),i(d,{language:"html-vue"},{default:o(()=>e[19]||(e[19]=[l(`
          <template>
            <Badge icon-left="pi pi-thumbs-up" />
            <Badge icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[41]||(e[41]=l()),n("section",null,[n("h2",null,u(t.$t("ui.badge.usage.iconPackage")),1),e[25]||(e[25]=l()),n("div",L,[n("div",S,[i(s(a),{label:t.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[22]||(e[22]=l()),i(s(a),{label:t.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])]),e[24]||(e[24]=l()),i(d,{language:"html-vue"},{default:o(()=>e[23]||(e[23]=[l(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[42]||(e[42]=l()),n("section",null,[n("h2",null,u(t.$t("ui.badge.usage.iconAndLabel")),1),e[29]||(e[29]=l()),n("div",C,[n("div",P,[i(s(a),{label:t.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[26]||(e[26]=l()),i(s(a),{label:t.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])]),e[28]||(e[28]=l()),i(d,{language:"html-vue"},{default:o(()=>e[27]||(e[27]=[l(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[43]||(e[43]=l()),n("section",null,[n("h2",null,u(t.$t("ui.badge.usage.iconElement")),1),e[35]||(e[35]=l()),n("div",A,[n("div",N,[i(s(a),{label:t.$t("ui.badge.label.correct")},{iconLeft:o(()=>e[30]||(e[30]=[n("i",{class:"pi pi-check"},null,-1)])),_:1},8,["label"]),e[32]||(e[32]=l()),i(s(a),{label:t.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:o(()=>e[31]||(e[31]=[n("i",{class:"pi pi-times"},null,-1)])),_:1},8,["label"])]),e[34]||(e[34]=l()),i(d,{language:"html-vue"},{default:o(()=>e[33]||(e[33]=[l(`
          <template>
            <Badge label="Correct">
              <template #iconLeft>
                <i class="pi pi-check" >
              </template>
            </Badge>

            <Badge label="Wrong" severity="danger">
              <template #iconRight>
                <i class="pi pi-times" >
              </template>
            </Badge>
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}}),W=v(R,[["__scopeId","data-v-6f4cd0b3"]]);export{W as default};
