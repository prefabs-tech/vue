import{d as f,r as b,K as y,f as B,o as E,i as s,D as n,g as l,t as a,h as e,u as o,v as u,_ as $}from"./index-DI-rzpkK.js";import{_ as z}from"./UiPage.vue_vue_type_style_index_0_lang-Cwwg4SvK.js";const k={class:"section-content"},O={class:"container"},C={class:"section-content"},S={class:"container"},D={class:"section-content"},L={class:"container"},T={class:"section-content"},w={class:"container"},I={class:"section-content"},N={class:"container"},P={class:"section-content"},R={class:"container"},M={class:"section-content"},V={class:"container"},A={class:"section-content"},H={className:"container"},W={class:"section-content"},K={className:"container"},j={class:"section-content"},q={class:"container"},F={class:"section-content"},G={class:"container"},J={class:"container"},Q={class:"section-content"},U={class:"container"},X=f({__name:"Index",setup(Y){const m=b(void 0),d=b(!1),p=()=>{m.value=new Date},v=()=>{d.value=!0,setTimeout(()=>{d.value=!1},5e3)};return(i,t)=>{const r=y("SshPre");return E(),B(z,{title:i.$t("ui.button.title"),class:"demo-button"},{toolbar:s(()=>[e(o(u),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=g=>i.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[t[62]||(t[62]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.basic")),1),t[5]||(t[5]=n()),l("div",k,[l("div",O,[e(o(u),{label:i.$t("ui.button.label.clickMe"),onClick:t[1]||(t[1]=g=>p())},null,8,["label"]),t[2]||(t[2]=n()),l("span",null,a(m.value),1)]),t[4]||(t[4]=n()),e(r,{language:"html-vue"},{default:s(()=>t[3]||(t[3]=[n(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])]),t[63]||(t[63]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.withI18n")),1),t[7]||(t[7]=n()),l("div",C,[l("div",S,[e(o(u),{label:i.$t("ui.button.label.next")},null,8,["label"])])]),t[8]||(t[8]=n()),e(r,{language:"html-vue"},{default:s(()=>t[6]||(t[6]=[n(`
        <template> 
          <ButtonElement :label="t('ui.button.label.next')" />
        </template>
        
        <script setup lang="ts"> 
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
        <\/script>
      `)])),_:1})]),t[64]||(t[64]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.loading")),1),t[11]||(t[11]=n()),l("div",D,[l("div",L,[e(o(u),{label:i.$t("ui.button.label.submit"),loading:d.value,onClick:v},null,8,["label","loading"])]),t[10]||(t[10]=n()),e(r,{language:"html-vue"},{default:s(()=>t[9]||(t[9]=[n(`
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
        `)])),_:1})])]),t[65]||(t[65]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.contentSlot")),1),t[14]||(t[14]=n()),l("div",T,[l("div",w,[e(o(u),{children:""},{buttonContent:s(()=>[l("u",null,a(i.$t("ui.button.label.clickMe")),1)]),_:1})]),t[13]||(t[13]=n()),e(r,{language:"html-vue"},{default:s(()=>t[12]||(t[12]=[n(`
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
        `)])),_:1})])]),t[66]||(t[66]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.severity")),1),t[22]||(t[22]=n()),l("div",I,[l("div",N,[e(o(u),{severity:"primary",label:i.$t("ui.button.label.primary")},null,8,["label"]),t[15]||(t[15]=n()),e(o(u),{severity:"secondary",label:i.$t("ui.button.label.secondary")},null,8,["label"]),t[16]||(t[16]=n()),e(o(u),{severity:"alternate",label:i.$t("ui.button.label.alternate")},null,8,["label"]),t[17]||(t[17]=n()),e(o(u),{severity:"success",label:i.$t("ui.button.label.success")},null,8,["label"]),t[18]||(t[18]=n()),e(o(u),{severity:"danger",label:i.$t("ui.button.label.danger")},null,8,["label"]),t[19]||(t[19]=n()),e(o(u),{severity:"warning",label:i.$t("ui.button.label.warning")},null,8,["label"])]),t[21]||(t[21]=n()),e(r,{language:"html-vue"},{default:s(()=>t[20]||(t[20]=[n(`
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
        `)])),_:1})])]),t[67]||(t[67]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.size")),1),t[27]||(t[27]=n()),l("div",P,[l("div",R,[e(o(u),{size:"small",label:i.$t("ui.button.label.small")},null,8,["label"]),t[23]||(t[23]=n()),e(o(u),{size:"medium",label:i.$t("ui.button.label.medium")},null,8,["label"]),t[24]||(t[24]=n()),e(o(u),{size:"large",label:i.$t("ui.button.label.large")},null,8,["label"])]),t[26]||(t[26]=n()),e(r,{language:"html-vue"},{default:s(()=>t[25]||(t[25]=[n(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])]),t[68]||(t[68]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.variant")),1),t[32]||(t[32]=n()),l("div",M,[l("div",V,[e(o(u),{size:"medium",label:i.$t("ui.button.label.textOnly"),variant:"textOnly"},null,8,["label"]),t[28]||(t[28]=n()),e(o(u),{size:"medium",label:i.$t("ui.button.label.outlined"),variant:"outlined"},null,8,["label"]),t[29]||(t[29]=n()),e(o(u),{size:"medium",label:i.$t("ui.button.label.default")},null,8,["label"])]),t[31]||(t[31]=n()),e(r,{language:"html-vue"},{default:s(()=>t[30]||(t[30]=[n(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])]),t[69]||(t[69]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.icons.icon")),1),t[37]||(t[37]=n()),l("div",A,[l("div",H,[e(o(u),{variant:"textOnly",severity:"secondary","icon-left":"pi pi-user"}),t[33]||(t[33]=n()),e(o(u),{variant:"outlined",severity:"secondary","icon-left":"pi pi-user"}),t[34]||(t[34]=n()),e(o(u),{variant:"filled","icon-left":"pi pi-user"})]),t[36]||(t[36]=n()),e(r,{language:"html-vue"},{default:s(()=>t[35]||(t[35]=[n(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])]),t[70]||(t[70]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.icons.iconElement")),1),t[45]||(t[45]=n()),l("div",W,[l("div",K,[e(o(u),{rounded:"",variant:"textOnly",severity:"secondary"},{iconLeft:s(()=>t[38]||(t[38]=[l("i",{class:"pi pi-user"},null,-1)])),_:1}),t[41]||(t[41]=n()),e(o(u),{rounded:"",severity:"secondary",variant:"outlined"},{iconRight:s(()=>t[39]||(t[39]=[l("i",{class:"pi pi-user"},null,-1)])),_:1}),t[42]||(t[42]=n()),e(o(u),{rounded:"",variant:"filled"},{iconRight:s(()=>t[40]||(t[40]=[l("i",{class:"pi pi-user"},null,-1)])),_:1})]),t[44]||(t[44]=n()),e(r,{language:"html-vue"},{default:s(()=>t[43]||(t[43]=[n(`
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
        `)])),_:1})])]),t[71]||(t[71]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.icons.iconPackage")),1),t[49]||(t[49]=n()),l("div",j,[l("div",q,[e(o(u),{label:i.$t("ui.button.label.home"),"icon-left":"pi pi-home",variant:"outlined"},null,8,["label"]),t[46]||(t[46]=n()),e(o(u),{label:i.$t("ui.button.label.home"),"icon-left":"fa-solid fa-house",variant:"outlined"},null,8,["label"])]),t[48]||(t[48]=n()),e(r,{language:"html-vue"},{default:s(()=>t[47]||(t[47]=[n(`
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
        `)])),_:1})])]),t[72]||(t[72]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.icons.iconAndLabel")),1),t[57]||(t[57]=n()),l("div",F,[l("div",G,[e(o(u),{label:i.$t("ui.button.label.textOnly"),"icon-left":"pi pi-user",variant:"textOnly"},null,8,["label"]),t[50]||(t[50]=n()),e(o(u),{label:i.$t("ui.button.label.outlined"),"icon-left":"pi pi-user",variant:"outlined"},null,8,["label"]),t[51]||(t[51]=n()),e(o(u),{label:i.$t("ui.button.label.default"),"icon-left":"pi pi-user",variant:"filled"},null,8,["label"])]),t[55]||(t[55]=n()),l("div",J,[e(o(u),{label:i.$t("ui.button.label.textOnly"),"icon-right":"pi pi-user",rounded:"",variant:"textOnly"},null,8,["label"]),t[52]||(t[52]=n()),e(o(u),{label:i.$t("ui.button.label.outlined"),"icon-right":"pi pi-user",rounded:"",variant:"outlined"},null,8,["label"]),t[53]||(t[53]=n()),e(o(u),{label:i.$t("ui.button.label.default"),"icon-right":"pi pi-user",rounded:"",variant:"filled"},null,8,["label"])]),t[56]||(t[56]=n()),e(r,{language:"html-vue"},{default:s(()=>t[54]||(t[54]=[n(`
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
        `)])),_:1})])]),t[73]||(t[73]=n()),l("section",null,[l("h2",null,a(i.$t("ui.button.usage.redirect")),1),t[61]||(t[61]=n()),l("div",Q,[l("div",U,[e(o(u),{label:i.$t("ui.button.label.home"),to:"/"},null,8,["label"]),t[58]||(t[58]=n()),e(o(u),{label:i.$t("ui.button.label.back"),severity:"secondary",to:"/vue/#/ui"},null,8,["label"])]),t[60]||(t[60]=n()),e(r,{language:"html-vue"},{default:s(()=>t[59]||(t[59]=[n(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}}),h=$(X,[["__scopeId","data-v-6abf8185"]]);export{h as default};
