import{d as f,r as p,s as y,j as B,o as E,w as o,A as e,e as t,t as u,g as n,u as a,B as i,M as _,O as $,_ as z}from"./index-hG40rBrG.js";import{_ as O}from"./UiPage.vue_vue_type_style_index_0_lang-gT5R6CJM.js";const m=r=>(_("data-v-6abf8185"),r=r(),$(),r),k={class:"section-content"},C={class:"container"},S={class:"section-content"},I={class:"container"},w={class:"section-content"},D={class:"container"},L={class:"section-content"},T={class:"container"},N={class:"section-content"},M={class:"container"},P={class:"section-content"},R={class:"container"},A={class:"section-content"},V={class:"container"},H={class:"section-content"},W={className:"container"},j={class:"section-content"},q={className:"container"},F=m(()=>t("i",{class:"pi pi-user"},null,-1)),G=m(()=>t("i",{class:"pi pi-user"},null,-1)),J=m(()=>t("i",{class:"pi pi-user"},null,-1)),K={class:"section-content"},Q={class:"container"},U={class:"section-content"},X={class:"container"},Y={class:"container"},Z={class:"section-content"},x={class:"container"},ee=f({__name:"Index",setup(r){const b=p(void 0),d=p(!1),v=()=>{b.value=new Date},g=()=>{d.value=!0,setTimeout(()=>{d.value=!1},5e3)};return(l,c)=>{const s=y("SshPre");return E(),B(O,{title:l.$t("ui.button.title"),class:"demo-button"},{toolbar:o(()=>[n(a(i),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:c[0]||(c[0]=h=>l.$router.push("/ui"))},null,8,["label"])]),default:o(()=>[e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.basic")),1),e(),t("div",k,[t("div",C,[n(a(i),{label:l.$t("ui.button.label.clickMe"),onClick:c[1]||(c[1]=h=>v())},null,8,["label"]),e(),t("span",null,u(b.value),1)]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.withI18n")),1),e(),t("div",S,[t("div",I,[n(a(i),{label:l.$t("ui.button.label.next")},null,8,["label"])])]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
        <template> 
          <ButtonElement :label="t('ui.button.label.next')" />
        </template>
        
        <script setup lang="ts"> 
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
        <\/script>
      `)]),_:1}),e()]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.loading")),1),e(),t("div",w,[t("div",D,[n(a(i),{label:l.$t("ui.button.label.submit"),loading:d.value,onClick:g},null,8,["label","loading"])]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.contentSlot")),1),e(),t("div",L,[t("div",T,[n(a(i),{children:""},{buttonContent:o(()=>[t("u",null,u(l.$t("ui.button.label.clickMe")),1)]),_:1})]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.severity")),1),e(),t("div",N,[t("div",M,[n(a(i),{severity:"primary",label:l.$t("ui.button.label.primary")},null,8,["label"]),e(),n(a(i),{severity:"secondary",label:l.$t("ui.button.label.secondary")},null,8,["label"]),e(),n(a(i),{severity:"alternate",label:l.$t("ui.button.label.alternate")},null,8,["label"]),e(),n(a(i),{severity:"success",label:l.$t("ui.button.label.success")},null,8,["label"]),e(),n(a(i),{severity:"danger",label:l.$t("ui.button.label.danger")},null,8,["label"]),e(),n(a(i),{severity:"warning",label:l.$t("ui.button.label.warning")},null,8,["label"])]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.size")),1),e(),t("div",P,[t("div",R,[n(a(i),{size:"small",label:l.$t("ui.button.label.small")},null,8,["label"]),e(),n(a(i),{size:"medium",label:l.$t("ui.button.label.medium")},null,8,["label"]),e(),n(a(i),{size:"large",label:l.$t("ui.button.label.large")},null,8,["label"])]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.variant")),1),e(),t("div",A,[t("div",V,[n(a(i),{size:"medium",label:l.$t("ui.button.label.textOnly"),variant:"textOnly"},null,8,["label"]),e(),n(a(i),{size:"medium",label:l.$t("ui.button.label.outlined"),variant:"outlined"},null,8,["label"]),e(),n(a(i),{size:"medium",label:l.$t("ui.button.label.default")},null,8,["label"])]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.icons.icon")),1),e(),t("div",H,[t("div",W,[n(a(i),{variant:"textOnly",severity:"secondary","icon-left":"pi pi-user"}),e(),n(a(i),{variant:"outlined",severity:"secondary","icon-left":"pi pi-user"}),e(),n(a(i),{variant:"filled","icon-left":"pi pi-user"})]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.icons.iconElement")),1),e(),t("div",j,[t("div",q,[n(a(i),{rounded:"",variant:"textOnly",severity:"secondary"},{iconLeft:o(()=>[F]),_:1}),e(),n(a(i),{rounded:"",severity:"secondary",variant:"outlined"},{iconRight:o(()=>[G]),_:1}),e(),n(a(i),{rounded:"",variant:"filled"},{iconRight:o(()=>[J]),_:1})]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.icons.iconPackage")),1),e(),t("div",K,[t("div",Q,[n(a(i),{label:l.$t("ui.button.label.home"),"icon-left":"pi pi-home",variant:"outlined"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.home"),"icon-left":"fa-solid fa-house",variant:"outlined"},null,8,["label"])]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.icons.iconAndLabel")),1),e(),t("div",U,[t("div",X,[n(a(i),{label:l.$t("ui.button.label.textOnly"),"icon-left":"pi pi-user",variant:"textOnly"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.outlined"),"icon-left":"pi pi-user",variant:"outlined"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.default"),"icon-left":"pi pi-user",variant:"filled"},null,8,["label"])]),e(),t("div",Y,[n(a(i),{label:l.$t("ui.button.label.textOnly"),"icon-right":"pi pi-user",rounded:"",variant:"textOnly"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.outlined"),"icon-right":"pi pi-user",rounded:"",variant:"outlined"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.default"),"icon-right":"pi pi-user",rounded:"",variant:"filled"},null,8,["label"])]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(l.$t("ui.button.usage.redirect")),1),e(),t("div",Z,[t("div",x,[n(a(i),{label:l.$t("ui.button.label.home"),to:"/"},null,8,["label"]),e(),n(a(i),{label:l.$t("ui.button.label.back"),severity:"secondary",to:"/vue/#/ui"},null,8,["label"])]),e(),n(s,{language:"html-vue"},{default:o(()=>[e(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}}),le=z(ee,[["__scopeId","data-v-6abf8185"]]);export{le as default};
