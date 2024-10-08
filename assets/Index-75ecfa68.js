import{d as y,e as p,r as v,o as B,c as E,w as o,a as e,t as u,f as t,g as n,h as i,a5 as a,a0 as $,a1 as z,_ as O}from"./index-d32261a6.js";const d=r=>($("data-v-ca1bdabf"),r=r(),z(),r),C={class:"section-content"},k={class:"container"},S={class:"section-content"},I={class:"container"},w={class:"section-content"},D={class:"container"},T={class:"section-content"},N={class:"container"},L={class:"section-content"},P={class:"container"},R={class:"section-content"},W={class:"container"},M={class:"section-content"},V={class:"container"},A={class:"section-content"},G={className:"container"},j={class:"section-content"},q={className:"container"},F=d(()=>e("i",{class:"pi pi-user"},null,-1)),H=d(()=>e("i",{class:"pi pi-user"},null,-1)),J=d(()=>e("i",{class:"pi pi-user"},null,-1)),K={class:"section-content"},Q={class:"container"},U={class:"container"},X={class:"section-content"},Y={class:"container"},Z=d(()=>e("h2",null,"Custom style",-1)),x={class:"section-content"},tt={class:"container"},et=y({__name:"Index",setup(r){const b=p(void 0),m=p(!1),g=()=>{b.value=new Date},h=()=>{m.value=!0,setTimeout(()=>{m.value=!1},5e3)};return(l,c)=>{const s=v("SshPre"),f=v("Page");return B(),E(f,{title:l.$t("ui.button.title"),class:"demo-button"},{default:o(()=>[e("section",null,[e("h2",null,u(l.$t("ui.button.usage.basic")),1),t(),e("div",C,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",k,[n(i(a),{label:l.$t("ui.button.label.clickMe"),onClick:c[0]||(c[0]=_=>g())},null,8,["label"]),t(),e("span",null,u(b.value),1)])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.withI18n")),1),t(),e("div",S,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement :label="t('ui.button.label.next')" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),t(),e("div",I,[n(i(a),{label:l.$t("ui.button.label.next")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.loading")),1),t(),e("div",w,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template>
            <ButtonElement label="Submit" :loading="loading" />
          </template>

          <script setup lang="ts">
            import { ButtonElement } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;
            }
          <\/script>
        `)]),_:1}),t(),e("div",D,[n(i(a),{label:l.$t("ui.button.label.submit"),loading:m.value,onClick:c[1]||(c[1]=_=>h())},null,8,["label","loading"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.buttonWithChild")),1),t(),e("div",T,[n(s,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",N,[n(i(a),{children:""},{buttonContent:o(()=>[e("u",null,u(l.$t("ui.button.label.clickMe")),1)]),_:1})])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.severity")),1),t(),e("div",L,[n(s,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",P,[n(i(a),{severity:"primary",label:l.$t("ui.button.label.primary")},null,8,["label"]),t(),n(i(a),{severity:"secondary",label:l.$t("ui.button.label.secondary")},null,8,["label"]),t(),n(i(a),{severity:"alternate",label:l.$t("ui.button.label.alternate")},null,8,["label"]),t(),n(i(a),{severity:"success",label:l.$t("ui.button.label.success")},null,8,["label"]),t(),n(i(a),{severity:"danger",label:l.$t("ui.button.label.danger")},null,8,["label"]),t(),n(i(a),{severity:"warning",label:l.$t("ui.button.label.warning")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.size")),1),t(),e("div",R,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",W,[n(i(a),{size:"small",label:l.$t("ui.button.label.small")},null,8,["label"]),t(),n(i(a),{size:"medium",label:l.$t("ui.button.label.medium")},null,8,["label"]),t(),n(i(a),{size:"large",label:l.$t("ui.button.label.large")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.variant")),1),t(),e("div",M,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",V,[n(i(a),{size:"medium",label:l.$t("ui.button.label.textOnly"),variant:"textOnly"},null,8,["label"]),t(),n(i(a),{size:"medium",label:l.$t("ui.button.label.outlined"),variant:"outlined"},null,8,["label"]),t(),n(i(a),{size:"medium",label:l.$t("ui.button.label.default")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.iconName")),1),t(),e("div",A,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",G,[n(i(a),{variant:"textOnly",severity:"secondary","icon-left":"pi pi-user"}),t(),n(i(a),{variant:"outlined",severity:"secondary","icon-left":"pi pi-user"}),t(),n(i(a),{variant:"filled","icon-left":"pi pi-user"})])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.iconElement")),1),t(),e("div",j,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement icon-left="true" rounded severity="secondary" variant="textOnly">
                <template #iconLeft>
                  <i class="pi pi-user" >
                </template>
            </ButtonElement>

            <ButtonElement icon-right="true" rounded variant="outlined">
              <template #iconRight>
                <i class="pi pi-user" >
              </template>
            </ButtonElement>

            <ButtonElement icon-right="true" rounded severity="secondary" variant="filled">
                <template #iconRight>
                  <i class="pi pi-user" >
                </template>
            </ButtonElement>
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",q,[n(i(a),{variant:"textOnly",severity:"secondary","icon-left":"true",rounded:""},{iconLeft:o(()=>[F]),_:1}),t(),n(i(a),{severity:"secondary",variant:"outlined","icon-right":"true",rounded:""},{iconRight:o(()=>[H]),_:1}),t(),n(i(a),{"icon-right":"true",variant:"filled",rounded:""},{iconRight:o(()=>[J]),_:1})])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.iconWithText")),1),t(),e("div",K,[n(s,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",Q,[n(i(a),{label:l.$t("ui.button.label.textOnly"),"icon-left":"pi pi-user",variant:"textOnly"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.outlined"),"icon-left":"pi pi-user",variant:"outlined"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.default"),"icon-left":"pi pi-user",variant:"filled"},null,8,["label"])]),t(),e("div",U,[n(i(a),{label:l.$t("ui.button.label.textOnly"),"icon-right":"pi pi-user",rounded:"",variant:"textOnly"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.outlined"),"icon-right":"pi pi-user",rounded:"",variant:"outlined"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.default"),"icon-right":"pi pi-user",rounded:"",variant:"filled"},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.redirect")),1),t(),e("div",X,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",Y,[n(i(a),{label:l.$t("ui.button.label.home"),to:"/"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.back"),severity:"secondary",to:"/vue/#/ui"},null,8,["label"])])])]),t(),e("section",null,[Z,t(),e("div",x,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Custom" icon-right="pi pi-user" class="custom-button" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css" scoped>
            .custom-button {
              --_button-color: #e9527e;
              --_button-font-size: 1.5rem;
              --_button-font-width: 800;
              --_button-icon-size: 1.5rem;
              --_button-outlined-hover-color: #f5bcdb;
              --_button-padding: 1rem 2rem;
              --_button-text-color: #ffffff;
            }
          </style>
        `)]),_:1}),t(),e("div",tt,[n(i(a),{label:"Custom","icon-right":"pi pi-user",class:"custom-button"})])])])]),_:1},8,["title"])}}});const lt=O(et,[["__scopeId","data-v-ca1bdabf"]]);export{lt as default};
