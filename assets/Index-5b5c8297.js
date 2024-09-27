import{d as g,e as h,o as f,c as _,w as o,a as e,t as u,f as t,g as n,h as i,a5 as a,r as m,a0 as y,a1 as B,_ as E}from"./index-4f12a9e4.js";const c=r=>(y("data-v-b01658bc"),r=r(),B(),r),$={class:"section-content"},z={class:"container"},O={class:"section-content"},C={class:"container"},k={class:"section-content"},I={class:"container"},S={class:"section-content"},w={class:"container"},D={class:"section-content"},N={class:"container"},T={class:"section-content"},P={class:"container"},R={class:"section-content"},W={className:"container"},L={class:"section-content"},M={className:"container"},V=c(()=>e("i",{class:"pi pi-user"},null,-1)),A=c(()=>e("i",{class:"pi pi-user"},null,-1)),G=c(()=>e("i",{class:"pi pi-user"},null,-1)),j={class:"section-content"},q={class:"container"},F={class:"container"},H={class:"section-content"},J={class:"container"},K=c(()=>e("h2",null,"Custom style",-1)),Q={class:"section-content"},U={class:"container"},X=g({__name:"Index",setup(r){const d=h(void 0);function p(){d.value=new Date}return(l,b)=>{const s=m("SshPre"),v=m("Page");return f(),_(v,{title:l.$t("ui.button.title"),class:"demo-button"},{default:o(()=>[e("section",null,[e("h2",null,u(l.$t("ui.button.usage.basic")),1),t(),e("div",$,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",z,[n(i(a),{label:l.$t("ui.button.label.clickMe"),onClick:b[0]||(b[0]=Y=>p())},null,8,["label"]),t(),e("span",null,u(d.value),1)])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.withI18n")),1),t(),e("div",O,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement :label="t('ui.button.label.next')" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),t(),e("div",C,[n(i(a),{label:l.$t("ui.button.label.next")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.buttonWithChild")),1),t(),e("div",k,[n(s,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",I,[n(i(a),{children:""},{buttonContent:o(()=>[e("u",null,u(l.$t("ui.button.label.clickMe")),1)]),_:1})])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.severity")),1),t(),e("div",S,[n(s,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",w,[n(i(a),{severity:"primary",label:l.$t("ui.button.label.primary")},null,8,["label"]),t(),n(i(a),{severity:"secondary",label:l.$t("ui.button.label.secondary")},null,8,["label"]),t(),n(i(a),{severity:"alternate",label:l.$t("ui.button.label.alternate")},null,8,["label"]),t(),n(i(a),{severity:"success",label:l.$t("ui.button.label.success")},null,8,["label"]),t(),n(i(a),{severity:"danger",label:l.$t("ui.button.label.danger")},null,8,["label"]),t(),n(i(a),{severity:"warning",label:l.$t("ui.button.label.warning")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.size")),1),t(),e("div",D,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",N,[n(i(a),{size:"small",label:l.$t("ui.button.label.small")},null,8,["label"]),t(),n(i(a),{size:"medium",label:l.$t("ui.button.label.medium")},null,8,["label"]),t(),n(i(a),{size:"large",label:l.$t("ui.button.label.large")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.variant")),1),t(),e("div",T,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",P,[n(i(a),{size:"medium",label:l.$t("ui.button.label.textOnly"),variant:"textOnly"},null,8,["label"]),t(),n(i(a),{size:"medium",label:l.$t("ui.button.label.outlined"),variant:"outlined"},null,8,["label"]),t(),n(i(a),{size:"medium",label:l.$t("ui.button.label.default")},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.iconName")),1),t(),e("div",R,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",W,[n(i(a),{variant:"textOnly",severity:"secondary","icon-left":"pi pi-user"}),t(),n(i(a),{variant:"outlined",severity:"secondary","icon-left":"pi pi-user"}),t(),n(i(a),{variant:"filled","icon-left":"pi pi-user"})])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.iconElement")),1),t(),e("div",L,[n(s,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",M,[n(i(a),{variant:"textOnly",severity:"secondary","icon-left":"true",rounded:""},{iconLeft:o(()=>[V]),_:1}),t(),n(i(a),{severity:"secondary",variant:"outlined","icon-right":"true",rounded:""},{iconRight:o(()=>[A]),_:1}),t(),n(i(a),{"icon-right":"true",variant:"filled",rounded:""},{iconRight:o(()=>[G]),_:1})])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.icons.iconWithText")),1),t(),e("div",j,[n(s,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",q,[n(i(a),{label:l.$t("ui.button.label.textOnly"),"icon-left":"pi pi-user",variant:"textOnly"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.outlined"),"icon-left":"pi pi-user",variant:"outlined"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.default"),"icon-left":"pi pi-user",variant:"filled"},null,8,["label"])]),t(),e("div",F,[n(i(a),{label:l.$t("ui.button.label.textOnly"),"icon-right":"pi pi-user",rounded:"",variant:"textOnly"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.outlined"),"icon-right":"pi pi-user",rounded:"",variant:"outlined"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.default"),"icon-right":"pi pi-user",rounded:"",variant:"filled"},null,8,["label"])])])]),t(),e("section",null,[e("h2",null,u(l.$t("ui.button.usage.redirect")),1),t(),e("div",H,[n(s,{language:"html-vue"},{default:o(()=>[t(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),t(),e("div",J,[n(i(a),{label:l.$t("ui.button.label.home"),to:"/"},null,8,["label"]),t(),n(i(a),{label:l.$t("ui.button.label.back"),severity:"secondary",to:"/vue/#/ui"},null,8,["label"])])])]),t(),e("section",null,[K,t(),e("div",Q,[n(s,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),e("div",U,[n(i(a),{label:"Custom","icon-right":"pi pi-user",class:"custom-button"})])])])]),_:1},8,["title"])}}});const x=E(X,[["__scopeId","data-v-b01658bc"]]);export{x as default};
