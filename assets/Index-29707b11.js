import{d as p,r as u,o as b,c as m,w as i,a as l,t as d,f as e,g as n,h as t,a4 as s,a0 as v,a1 as h,_}from"./index-fdd64217.js";const g=c=>(v("data-v-7444cb8f"),c=c(),h(),c),f={class:"section-content"},B={class:"section-content"},y={class:"section-content"},$={class:"section-content"},k={class:"container"},I={class:"section-content"},w={class:"container"},z={class:"section-content"},S={class:"container"},L={class:"section-content"},P={class:"container"},C={class:"section-content"},N={class:"container"},R=g(()=>l("i",{class:"pi pi-check"},null,-1)),V=g(()=>l("i",{class:"pi pi-times"},null,-1)),A=p({__name:"Index",setup(c){return(a,D)=>{const o=u("SshPre"),r=u("Page");return b(),m(r,{title:a.$t("ui.badge.title"),class:"demo-badge"},{default:i(()=>[l("section",null,[l("h2",null,d(a.$t("ui.badge.usage.basic")),1),e(),l("div",f,[n(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Basic" /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),n(t(s),{label:a.$t("ui.badge.label.basic")},null,8,["label"])])]),e(),l("section",null,[l("h2",null,d(a.$t("ui.badge.usage.withI18n")),1),e(),l("div",B,[n(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge :label=t("ui.badge.label.addedIn") /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),n(t(s),{label:a.$t("ui.badge.label.addedIn")},null,8,["label"])])]),e(),l("section",null,[l("h2",null,d(a.$t("ui.badge.usage.rounded")),1),e(),l("div",y,[n(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),n(t(s),{label:a.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"])])]),e(),l("section",null,[l("h2",null,d(a.$t("ui.badge.usage.severity")),1),e(),l("div",$,[n(o,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e(),l("div",k,[n(t(s),{label:a.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e(),n(t(s),{label:a.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e(),n(t(s),{label:a.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e(),n(t(s),{label:a.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e(),n(t(s),{label:a.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e(),n(t(s),{label:a.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,d(a.$t("ui.badge.usage.icon")),1),e(),l("div",I,[n(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge icon-left="pi pi-thumbs-up" />
            <Badge icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",w,[n(t(s),{"icon-left":"pi pi-thumbs-up"}),e(),n(t(s),{"icon-right":"pi pi-thumbs-down"})])])]),e(),l("section",null,[l("h2",null,d(a.$t("ui.badge.usage.iconPackage")),1),e(),l("div",z,[n(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",S,[n(t(s),{label:a.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),n(t(s),{label:a.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,d(a.$t("ui.badge.usage.iconAndLabel")),1),e(),l("div",L,[n(o,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",P,[n(t(s),{label:a.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),n(t(s),{label:a.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,d(a.$t("ui.badge.usage.iconElement")),1),e(),l("div",C,[n(o,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e(),l("div",N,[n(t(s),{label:a.$t("ui.badge.label.correct")},{iconLeft:i(()=>[R]),_:1},8,["label"]),e(),n(t(s),{label:a.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:i(()=>[V]),_:1},8,["label"])])])])]),_:1},8,["title"])}}});const W=_(A,[["__scopeId","data-v-7444cb8f"]]);export{W as default};
