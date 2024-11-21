import{d as _,j as p,G as v,o as y,c as B,w as o,K as n,C as t,S as u,f as e,D as a,ao as i,ak as E,al as $}from"./index-d658739c-0fec2303.js";import{_ as z}from"./UiPage.vue_vue_type_style_index_0_lang-88ffecad.js";import{_ as k}from"./index-d4113c16.js";const d=r=>(E("data-v-69273c80"),r=r(),$(),r),O={class:"section-content"},S={class:"container"},C={class:"section-content"},I={class:"container"},w={class:"section-content"},D={class:"container"},L={class:"section-content"},T={class:"container"},N={class:"section-content"},P={class:"container"},R={class:"section-content"},M={class:"container"},V={class:"section-content"},A={class:"container"},H={class:"section-content"},W={className:"container"},j={class:"section-content"},G={className:"container"},K=d(()=>e("i",{class:"pi pi-user"},null,-1)),q=d(()=>e("i",{class:"pi pi-user"},null,-1)),F=d(()=>e("i",{class:"pi pi-user"},null,-1)),J={class:"section-content"},Q={class:"container"},U={class:"section-content"},X={class:"container"},Y={class:"container"},Z={class:"section-content"},x={class:"container"},tt=_({__name:"Index",setup(r){const m=p(void 0),c=p(!1),g=()=>{m.value=new Date},h=()=>{c.value=!0,setTimeout(()=>{c.value=!1},5e3)};return(l,b)=>{const f=v("router-link"),s=v("SshPre");return y(),B(z,{title:l.$t("ui.button.title"),class:"demo-button"},{toolbar:o(()=>[n(f,{to:{name:"ui"},class:"back"},{default:o(()=>[t(u(l.$t("common.back")),1)]),_:1})]),default:o(()=>[t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.basic")),1),t(),e("div",O,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",S,[n(a(i),{label:l.$t("ui.button.label.clickMe"),onClick:b[0]||(b[0]=et=>g())},null,8,["label"]),t(),e("span",null,u(m.value),1)])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.withI18n")),1),t(),e("div",C,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement :label="t('ui.button.label.next')" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),t(),e("div",I,[n(a(i),{label:l.$t("ui.button.label.next")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.loading")),1),t(),e("div",w,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template>
            <ButtonElement
              :loading="loading"
              label="Submit"
              @click="startLoading"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;

              setTimeout(() => {
                loading.value = false;
              }, 5000);
            };
          <\/script>
        `)]),_:1}),t(),e("div",D,[n(a(i),{label:l.$t("ui.button.label.submit"),loading:c.value,onClick:h},null,8,["label","loading"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.contentSlot")),1),t(),e("div",L,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement children>
              <template #buttonContent>
                <u>Click me</u>
              </template>
            </ButtonElement>
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",T,[n(a(i),{children:""},{buttonContent:o(()=>[e("u",null,u(l.$t("ui.button.label.clickMe")),1)]),_:1})])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.severity")),1),t(),e("div",N,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Primary" severity="primary" />
            <ButtonElement label="Secondary" severity="secondary" />
            <ButtonElement label="Alternate" severity="alternate" />
            <ButtonElement label="Success" severity="success" label="Success" />
            <ButtonElement label="Danger" severity="danger" label="Danger" />
            <ButtonElement label="Warning" severity="warning" label="Warning" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",P,[n(a(i),{severity:"primary",label:l.$t("ui.button.label.primary")},null,8,["label"]),t(),n(a(i),{severity:"secondary",label:l.$t("ui.button.label.secondary")},null,8,["label"]),t(),n(a(i),{severity:"alternate",label:l.$t("ui.button.label.alternate")},null,8,["label"]),t(),n(a(i),{severity:"success",label:l.$t("ui.button.label.success")},null,8,["label"]),t(),n(a(i),{severity:"danger",label:l.$t("ui.button.label.danger")},null,8,["label"]),t(),n(a(i),{severity:"warning",label:l.$t("ui.button.label.warning")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.size")),1),t(),e("div",R,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",M,[n(a(i),{size:"small",label:l.$t("ui.button.label.small")},null,8,["label"]),t(),n(a(i),{size:"medium",label:l.$t("ui.button.label.medium")},null,8,["label"]),t(),n(a(i),{size:"large",label:l.$t("ui.button.label.large")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.variant")),1),t(),e("div",V,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",A,[n(a(i),{size:"medium",label:l.$t("ui.button.label.textOnly"),variant:"textOnly"},null,8,["label"]),t(),n(a(i),{size:"medium",label:l.$t("ui.button.label.outlined"),variant:"outlined"},null,8,["label"]),t(),n(a(i),{size:"medium",label:l.$t("ui.button.label.default")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.icon")),1),t(),e("div",H,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",W,[n(a(i),{variant:"textOnly",severity:"secondary","icon-left":"pi pi-user"}),t(),n(a(i),{variant:"outlined",severity:"secondary","icon-left":"pi pi-user"}),t(),n(a(i),{variant:"filled","icon-left":"pi pi-user"})])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.iconElement")),1),t(),e("div",j,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement rounded severity="secondary" variant="textOnly">
                <template #iconLeft>
                  <i class="pi pi-user" >
                </template>
            </ButtonElement>

            <ButtonElement rounded variant="outlined">
              <template #iconRight>
                <i class="pi pi-user" >
              </template>
            </ButtonElement>

            <ButtonElement rounded variant="filled">
                <template #iconRight>
                  <i class="pi pi-user" >
                </template>
            </ButtonElement>
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",G,[n(a(i),{rounded:"",variant:"textOnly",severity:"secondary"},{iconLeft:o(()=>[K]),_:1}),t(),n(a(i),{rounded:"",severity:"secondary",variant:"outlined"},{iconRight:o(()=>[q]),_:1}),t(),n(a(i),{rounded:"",variant:"filled"},{iconRight:o(()=>[F]),_:1})])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.iconPackage")),1),t(),e("div",J,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement
              label="Home"
              icon-left="pi pi-home"
              variant="outlined"
            />

            <ButtonElement
              label="Home"
              icon-left="fa-solid fa-house"
              variant="outlined"
            />
          </template>

          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",Q,[n(a(i),{label:l.$t("ui.button.label.home"),"icon-left":"pi pi-home",variant:"outlined"},null,8,["label"]),t(),n(a(i),{label:l.$t("ui.button.label.home"),"icon-left":"fa-solid fa-house",variant:"outlined"},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.iconAndLabel")),1),t(),e("div",U,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Text only" icon-left="pi pi-user" variant="textOnly" />
            <ButtonElement label="Outlined" icon-left="pi pi-user" variant="outlined" />
            <ButtonElement label="Default" icon-left="pi pi-user" variant="filled" />
          </template> 

          <template> 
            <ButtonElement label="Text only" icon-right="pi pi-user" rounded 
              variant="textOnly" 
            />
            <ButtonElement label="Outlined" icon-right="pi pi-user" rounded variant="outlined" />
            <ButtonElement label="Default" icon-right="pi pi-user" rounded variant="filled" />
          </template>

          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",X,[n(a(i),{label:l.$t("ui.button.label.textOnly"),"icon-left":"pi pi-user",variant:"textOnly"},null,8,["label"]),t(),n(a(i),{label:l.$t("ui.button.label.outlined"),"icon-left":"pi pi-user",variant:"outlined"},null,8,["label"]),t(),n(a(i),{label:l.$t("ui.button.label.default"),"icon-left":"pi pi-user",variant:"filled"},null,8,["label"])]),t(),e("div",Y,[n(a(i),{label:l.$t("ui.button.label.textOnly"),"icon-right":"pi pi-user",rounded:"",variant:"textOnly"},null,8,["label"]),t(),n(a(i),{label:l.$t("ui.button.label.outlined"),"icon-right":"pi pi-user",rounded:"",variant:"outlined"},null,8,["label"]),t(),n(a(i),{label:l.$t("ui.button.label.default"),"icon-right":"pi pi-user",rounded:"",variant:"filled"},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.redirect")),1),t(),e("div",Z,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",x,[n(a(i),{label:l.$t("ui.button.label.home"),to:"/"},null,8,["label"]),t(),n(a(i),{label:l.$t("ui.button.label.back"),severity:"secondary",to:"/vue/#/ui"},null,8,["label"])])])])]),_:1},8,["title"])}}});const it=k(tt,[["__scopeId","data-v-69273c80"]]);export{it as default};
