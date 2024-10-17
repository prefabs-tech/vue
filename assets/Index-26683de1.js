import{d as _,e as p,r as v,o as y,c as B,w as o,a as t,t as u,f as e,g as n,h as a,a5 as i,a0 as E,a1 as $,_ as z}from"./index-66a9a14b.js";const d=r=>(E("data-v-8159c2af"),r=r(),$(),r),O={class:"section-content"},k={class:"container"},S={class:"section-content"},C={class:"container"},I={class:"section-content"},w={class:"container"},D={class:"section-content"},L={class:"container"},T={class:"section-content"},P={class:"container"},N={class:"section-content"},R={class:"container"},M={class:"section-content"},V={class:"container"},A={class:"section-content"},H={className:"container"},W={class:"section-content"},j={className:"container"},q=d(()=>t("i",{class:"pi pi-user"},null,-1)),F=d(()=>t("i",{class:"pi pi-user"},null,-1)),G=d(()=>t("i",{class:"pi pi-user"},null,-1)),J={class:"section-content"},K={class:"container"},Q={class:"section-content"},U={class:"container"},X={class:"container"},Y={class:"section-content"},Z={class:"container"},x=_({__name:"Index",setup(r){const m=p(void 0),c=p(!1),g=()=>{m.value=new Date},h=()=>{c.value=!0,setTimeout(()=>{c.value=!1},5e3)};return(l,b)=>{const s=v("SshPre"),f=v("Page");return y(),B(f,{title:l.$t("ui.button.title"),class:"demo-button"},{default:o(()=>[t("section",null,[t("h2",null,u(l.$t("ui.button.usage.basic")),1),e(),t("div",O,[n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",k,[n(a(i),{label:l.$t("ui.button.label.clickMe"),onClick:b[0]||(b[0]=ee=>g())},null,8,["label"]),e(),t("span",null,u(m.value),1)])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.withI18n")),1),e(),t("div",S,[n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement :label="t('ui.button.label.next')" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),t("div",C,[n(a(i),{label:l.$t("ui.button.label.next")},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.loading")),1),e(),t("div",I,[n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t("div",w,[n(a(i),{label:l.$t("ui.button.label.submit"),loading:c.value,onClick:h},null,8,["label","loading"])])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.contentSlot")),1),e(),t("div",D,[n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t("div",L,[n(a(i),{children:""},{buttonContent:o(()=>[t("u",null,u(l.$t("ui.button.label.clickMe")),1)]),_:1})])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.severity")),1),e(),t("div",T,[n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t("div",P,[n(a(i),{severity:"primary",label:l.$t("ui.button.label.primary")},null,8,["label"]),e(),n(a(i),{severity:"secondary",label:l.$t("ui.button.label.secondary")},null,8,["label"]),e(),n(a(i),{severity:"alternate",label:l.$t("ui.button.label.alternate")},null,8,["label"]),e(),n(a(i),{severity:"success",label:l.$t("ui.button.label.success")},null,8,["label"]),e(),n(a(i),{severity:"danger",label:l.$t("ui.button.label.danger")},null,8,["label"]),e(),n(a(i),{severity:"warning",label:l.$t("ui.button.label.warning")},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.size")),1),e(),t("div",N,[n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",R,[n(a(i),{size:"small",label:l.$t("ui.button.label.small")},null,8,["label"]),e(),n(a(i),{size:"medium",label:l.$t("ui.button.label.medium")},null,8,["label"]),e(),n(a(i),{size:"large",label:l.$t("ui.button.label.large")},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.variant")),1),e(),t("div",M,[n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",V,[n(a(i),{size:"medium",label:l.$t("ui.button.label.textOnly"),variant:"textOnly"},null,8,["label"]),e(),n(a(i),{size:"medium",label:l.$t("ui.button.label.outlined"),variant:"outlined"},null,8,["label"]),e(),n(a(i),{size:"medium",label:l.$t("ui.button.label.default")},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.icons.icon")),1),e(),t("div",A,[n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",H,[n(a(i),{variant:"textOnly",severity:"secondary","icon-left":"pi pi-user"}),e(),n(a(i),{variant:"outlined",severity:"secondary","icon-left":"pi pi-user"}),e(),n(a(i),{variant:"filled","icon-left":"pi pi-user"})])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.icons.iconElement")),1),e(),t("div",W,[n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t("div",j,[n(a(i),{rounded:"",variant:"textOnly",severity:"secondary"},{iconLeft:o(()=>[q]),_:1}),e(),n(a(i),{rounded:"",severity:"secondary",variant:"outlined"},{iconRight:o(()=>[F]),_:1}),e(),n(a(i),{rounded:"",variant:"filled"},{iconRight:o(()=>[G]),_:1})])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.icons.iconPackage")),1),e(),t("div",J,[n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t("div",K,[n(a(i),{label:l.$t("ui.button.label.home"),"icon-left":"pi pi-home",variant:"outlined"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.home"),"icon-left":"fa-solid fa-house",variant:"outlined"},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.icons.iconAndLabel")),1),e(),t("div",Q,[n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t("div",U,[n(a(i),{label:l.$t("ui.button.label.textOnly"),"icon-left":"pi pi-user",variant:"textOnly"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.outlined"),"icon-left":"pi pi-user",variant:"outlined"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.default"),"icon-left":"pi pi-user",variant:"filled"},null,8,["label"])]),e(),t("div",X,[n(a(i),{label:l.$t("ui.button.label.textOnly"),"icon-right":"pi pi-user",rounded:"",variant:"textOnly"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.outlined"),"icon-right":"pi pi-user",rounded:"",variant:"outlined"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.default"),"icon-right":"pi pi-user",rounded:"",variant:"filled"},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.redirect")),1),e(),t("div",Y,[n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",Z,[n(a(i),{label:l.$t("ui.button.label.home"),to:"/"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.back"),severity:"secondary",to:"/vue/#/ui"},null,8,["label"])])])])]),_:1},8,["title"])}}});const ne=z(x,[["__scopeId","data-v-8159c2af"]]);export{ne as default};
