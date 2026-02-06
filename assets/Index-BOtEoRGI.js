import{d as B,N as E,o as $,e as O,f as u,h as e,t as a,A as n,a as l,u as o,l as s,r as m,_ as k}from"./index-CAiRitWL.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-QrQ6mn2y.js";import{_ as z}from"./UiPage.vue_vue_type_style_index_0_lang-Cxmgi4ow.js";import"./PrefabsTechVue3TanstackTable.es-CCTu_o5f.js";import"./PrefabsTechVue3Form.es-Ql6BW1dZ.js";const L={class:"section-content"},D={class:"container"},I={class:"section-content"},w={class:"container"},C={class:"section-content"},T={class:"container"},R={class:"section-content"},N={class:"container"},A={class:"section-content"},P={class:"container"},M={class:"section-content"},H={class:"container"},V={class:"section-content"},U={class:"container"},W={class:"section-content"},j={className:"container"},q={class:"section-content"},F={className:"container"},G={class:"section-content"},J={class:"container"},K={class:"section-content"},Q={class:"container"},X={class:"container"},Y={class:"section-content"},Z={class:"container"},x=B({__name:"Index",setup(h){const d=m(void 0),p=m(!1),b=[{description:"Emitted when the button is clicked.",name:"click",payload:"-"}],v=[{default:'"button"',description:"Accessible label for the button element.",prop:"ariaLabel",type:"String"},{default:"false",description:"If true, the button will be disabled and non-interactive.",prop:"disabled",type:"Boolean"},{default:"-",description:"Icon to be displayed on the left side of the button.",prop:"iconLeft",type:"String | Boolean"},{default:"-",description:"Icon to be displayed on the right side of the button.",prop:"iconRight",type:"String | Boolean"},{default:"-",description:"Text label to display inside the button.",prop:"label",type:"String"},{default:"false",description:"If true, indicates that the button is in a loading state and disables user interaction.",prop:"loading",type:"Boolean"},{default:"false",description:"Applies rounded styling to the button.",prop:"rounded",type:"Boolean"},{default:'"primary"',description:"Defines the button color style.",prop:"severity",type:'"primary" | "secondary" | "alternate" | "success" | "danger" | "warning"'},{default:'"medium"',description:"Defines the size of the button.",prop:"size",type:'"small" | "medium" | "large"'},{default:"-",description:"If set, the button renders as a link pointing to this URL.",prop:"to",type:"String"},{default:"-",description:"HTML title attribute.",prop:"title",type:"String"},{default:'"filled"',description:"Defines the visual variant of the button.",prop:"variant",type:'"outlined" | "filled" | "textOnly"'}],f=[{description:"Slot for custom left icon content. Overrides `iconLeft` prop.",name:"iconLeft"},{description:"Slot for custom right icon content. Overrides `iconRight` prop.",name:"iconRight"},{description:"Slot for custom button content. Overrides `label` prop.",name:"label"}],g=()=>{d.value=new Date},y=()=>{p.value=!0,setTimeout(()=>{p.value=!1},5e3)};return(i,t)=>{const r=E("SshPre");return $(),O(z,{subtitle:i.$t("ui.button.subtitle"),title:i.$t("ui.button.title"),class:"demo-button"},{default:u(()=>[e("section",null,[e("h2",null,a(i.$t("ui.button.usage.basic")),1),t[4]||(t[4]=n()),e("div",L,[e("div",D,[l(o(s),{label:i.$t("ui.button.label.clickMe"),onClick:t[0]||(t[0]=c=>g())},null,8,["label"]),t[1]||(t[1]=n()),e("span",null,a(d.value),1)]),t[3]||(t[3]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[2]||(t[2]=[n(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[61]||(t[61]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.withI18n")),1),t[6]||(t[6]=n()),e("div",I,[e("div",w,[l(o(s),{label:i.$t("ui.button.label.next")},null,8,["label"])])]),t[7]||(t[7]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[5]||(t[5]=[n(`
        <template> 
          <ButtonElement :label="t('ui.button.label.next')" />
        </template>
        
        <script setup lang="ts"> 
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
        <\/script>
      `,-1)])]),_:1})]),t[62]||(t[62]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.loading")),1),t[10]||(t[10]=n()),e("div",C,[e("div",T,[l(o(s),{label:i.$t("ui.button.label.submit"),loading:p.value,onClick:y},null,8,["label","loading"])]),t[9]||(t[9]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[8]||(t[8]=[n(`
          <template>
            <ButtonElement
              :loading="loading"
              label="Submit"
              @click="startLoading"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;

              setTimeout(() => {
                loading.value = false;
              }, 5000);
            };
          <\/script>
        `,-1)])]),_:1})])]),t[63]||(t[63]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.labelSlot")),1),t[13]||(t[13]=n()),e("div",R,[e("div",N,[l(o(s),null,{label:u(()=>[e("u",null,a(i.$t("ui.button.label.clickMe")),1)]),_:1})]),t[12]||(t[12]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[11]||(t[11]=[n(`
          <template> 
            <ButtonElement children>
              <template #label>
                <u>Click me</u>
              </template>
            </ButtonElement>
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[64]||(t[64]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.severity")),1),t[21]||(t[21]=n()),e("div",A,[e("div",P,[l(o(s),{severity:"primary",label:i.$t("ui.button.label.primary")},null,8,["label"]),t[14]||(t[14]=n()),l(o(s),{severity:"secondary",label:i.$t("ui.button.label.secondary")},null,8,["label"]),t[15]||(t[15]=n()),l(o(s),{severity:"alternate",label:i.$t("ui.button.label.alternate")},null,8,["label"]),t[16]||(t[16]=n()),l(o(s),{severity:"success",label:i.$t("ui.button.label.success")},null,8,["label"]),t[17]||(t[17]=n()),l(o(s),{severity:"danger",label:i.$t("ui.button.label.danger")},null,8,["label"]),t[18]||(t[18]=n()),l(o(s),{severity:"warning",label:i.$t("ui.button.label.warning")},null,8,["label"])]),t[20]||(t[20]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[19]||(t[19]=[n(`
          <template> 
            <ButtonElement label="Primary" severity="primary" />
            <ButtonElement label="Secondary" severity="secondary" />
            <ButtonElement label="Alternate" severity="alternate" />
            <ButtonElement label="Success" severity="success" />
            <ButtonElement label="Danger" severity="danger" />
            <ButtonElement label="Warning" severity="warning" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[65]||(t[65]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.size")),1),t[26]||(t[26]=n()),e("div",M,[e("div",H,[l(o(s),{size:"small",label:i.$t("ui.button.label.small")},null,8,["label"]),t[22]||(t[22]=n()),l(o(s),{size:"medium",label:i.$t("ui.button.label.medium")},null,8,["label"]),t[23]||(t[23]=n()),l(o(s),{size:"large",label:i.$t("ui.button.label.large")},null,8,["label"])]),t[25]||(t[25]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[24]||(t[24]=[n(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[66]||(t[66]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.variant")),1),t[31]||(t[31]=n()),e("div",V,[e("div",U,[l(o(s),{size:"medium",label:i.$t("ui.button.label.textOnly"),variant:"textOnly"},null,8,["label"]),t[27]||(t[27]=n()),l(o(s),{size:"medium",label:i.$t("ui.button.label.outlined"),variant:"outlined"},null,8,["label"]),t[28]||(t[28]=n()),l(o(s),{size:"medium",label:i.$t("ui.button.label.default")},null,8,["label"])]),t[30]||(t[30]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[29]||(t[29]=[n(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[67]||(t[67]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.icons.icon")),1),t[36]||(t[36]=n()),e("div",W,[e("div",j,[l(o(s),{variant:"textOnly",severity:"secondary","icon-left":"pi pi-user"}),t[32]||(t[32]=n()),l(o(s),{variant:"outlined",severity:"secondary","icon-left":"pi pi-user"}),t[33]||(t[33]=n()),l(o(s),{variant:"filled","icon-left":"pi pi-user"})]),t[35]||(t[35]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[34]||(t[34]=[n(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[68]||(t[68]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.icons.iconElement")),1),t[44]||(t[44]=n()),e("div",q,[e("div",F,[l(o(s),{rounded:"",severity:"secondary",variant:"textOnly"},{iconLeft:u(()=>[...t[37]||(t[37]=[e("i",{class:"pi pi-user"},null,-1)])]),_:1}),t[40]||(t[40]=n()),l(o(s),{rounded:"",severity:"secondary",variant:"outlined"},{iconRight:u(()=>[...t[38]||(t[38]=[e("i",{class:"pi pi-user"},null,-1)])]),_:1}),t[41]||(t[41]=n()),l(o(s),{rounded:"",variant:"filled"},{iconRight:u(()=>[...t[39]||(t[39]=[e("i",{class:"pi pi-user"},null,-1)])]),_:1})]),t[43]||(t[43]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[42]||(t[42]=[n(`
          <template> 
            <ButtonElement rounded severity="secondary" variant="textOnly">
                <template #iconLeft>
                  <i class="pi pi-user" >
                </template>
            </ButtonElement>

            <ButtonElement rounded severity="secondary" variant="outlined">
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
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[69]||(t[69]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.icons.iconPackage")),1),t[48]||(t[48]=n()),e("div",G,[e("div",J,[l(o(s),{label:i.$t("ui.button.label.home"),"icon-left":"pi pi-home",variant:"outlined"},null,8,["label"]),t[45]||(t[45]=n()),l(o(s),{label:i.$t("ui.button.label.home"),"icon-left":"fa-solid fa-house",variant:"outlined"},null,8,["label"])]),t[47]||(t[47]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[46]||(t[46]=[n(`
          <template> 
            <ButtonElement
              icon-left="pi pi-home"
              label="Home"
              variant="outlined"
            />

            <ButtonElement
              icon-left="fa-solid fa-house"
              label="Home"
              variant="outlined"
            />
          </template>

          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[70]||(t[70]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.icons.iconAndLabel")),1),t[56]||(t[56]=n()),e("div",K,[e("div",Q,[l(o(s),{label:i.$t("ui.button.label.textOnly"),"icon-left":"pi pi-user",variant:"textOnly"},null,8,["label"]),t[49]||(t[49]=n()),l(o(s),{label:i.$t("ui.button.label.outlined"),"icon-left":"pi pi-user",variant:"outlined"},null,8,["label"]),t[50]||(t[50]=n()),l(o(s),{label:i.$t("ui.button.label.default"),"icon-left":"pi pi-user",variant:"filled"},null,8,["label"])]),t[54]||(t[54]=n()),e("div",X,[l(o(s),{label:i.$t("ui.button.label.textOnly"),"icon-right":"pi pi-user",rounded:"",variant:"textOnly"},null,8,["label"]),t[51]||(t[51]=n()),l(o(s),{label:i.$t("ui.button.label.outlined"),"icon-right":"pi pi-user",rounded:"",variant:"outlined"},null,8,["label"]),t[52]||(t[52]=n()),l(o(s),{label:i.$t("ui.button.label.default"),"icon-right":"pi pi-user",rounded:"",variant:"filled"},null,8,["label"])]),t[55]||(t[55]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[53]||(t[53]=[n(`
          <template> 
            <ButtonElement icon-left="pi pi-user" label="Text only" variant="textOnly" />
            <ButtonElement icon-left="pi pi-user" label="Outlined" variant="outlined" />
            <ButtonElement icon-left="pi pi-user" label="Default" variant="filled" />
          </template> 

          <template> 
            <ButtonElement icon-right="pi pi-user" label="Text only" rounded 
              variant="textOnly" 
            />
            <ButtonElement icon-right="pi pi-user" label="Outlined" rounded variant="outlined" />
            <ButtonElement icon-right="pi pi-user" label="Default" rounded variant="filled" />
          </template>

          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[71]||(t[71]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.redirect")),1),t[60]||(t[60]=n()),e("div",Y,[e("div",Z,[l(o(s),{label:i.$t("ui.button.label.home"),to:"/"},null,8,["label"]),t[57]||(t[57]=n()),l(o(s),{label:i.$t("ui.button.label.back"),severity:"secondary",to:"/vue/#/ui"},null,8,["label"])]),t[59]||(t[59]=n()),l(r,{language:"html-vue"},{default:u(()=>[...t[58]||(t[58]=[n(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)])]),_:1})])]),t[72]||(t[72]=n()),l(S,{"events-data":b,"props-data":v,"props-table-title":i.$t("common.properties",{value:"ButtonProperties"}),"slots-data":f},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}}),it=k(x,[["__scopeId","data-v-70f523eb"]]);export{it as default};
