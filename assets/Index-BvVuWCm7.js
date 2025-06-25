import{d as E,r as b,I as $,e as z,o as O,i as s,E as n,f as e,g as l,t as a,u as o,x as u,_ as k}from"./index-_J_htfkm.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BOfXhcwf.js";import{_ as D}from"./UiPage.vue_vue_type_style_index_0_lang-B_XgebBS.js";import"./DzangolabVue3TanstackTable.es-Ivvz5Lww.js";import"./DzangolabVue3Form.es-D0sA9VA1.js";const L={class:"section-content"},I={class:"container"},C={class:"section-content"},w={class:"container"},T={class:"section-content"},R={class:"container"},N={class:"section-content"},P={class:"container"},A={class:"section-content"},M={class:"container"},H={class:"section-content"},V={class:"container"},W={class:"section-content"},U={class:"container"},j={class:"section-content"},q={className:"container"},F={class:"section-content"},G={className:"container"},J={class:"section-content"},K={class:"container"},Q={class:"section-content"},X={class:"container"},Y={class:"container"},Z={class:"section-content"},x={class:"container"},h=E({__name:"Index",setup(c){const p=b(void 0),d=b(!1),m=[{description:"Emitted when the button is clicked.",name:"click",payload:"-"}],v=[{default:'"button"',description:"Accessible label for the button element.",prop:"ariaLabel",type:"String"},{default:"false",description:"If true, the button will be disabled and non-interactive.",prop:"disabled",type:"Boolean"},{default:"-",description:"Icon to be displayed on the left side of the button.",prop:"iconLeft",type:"String | Boolean"},{default:"-",description:"Icon to be displayed on the right side of the button.",prop:"iconRight",type:"String | Boolean"},{default:"-",description:"Text label to display inside the button.",prop:"label",type:"String"},{default:"false",description:"If true, indicates that the button is in a loading state and disables user interaction.",prop:"loading",type:"Boolean"},{default:"false",description:"Applies rounded styling to the button.",prop:"rounded",type:"Boolean"},{default:'"primary"',description:"Defines the button color style.",prop:"severity",type:'"primary" | "secondary" | "alternate" | "success" | "danger" | "warning"'},{default:'"medium"',description:"Defines the size of the button.",prop:"size",type:'"small" | "medium" | "large"'},{default:"-",description:"If set, the button renders as a link pointing to this URL.",prop:"to",type:"String"},{default:"-",description:"HTML title attribute.",prop:"title",type:"String"},{default:'"filled"',description:"Defines the visual variant of the button.",prop:"variant",type:'"outlined" | "filled" | "textOnly"'}],g=[{description:"Slot for custom left icon content. Overrides `iconLeft` prop.",name:"iconLeft"},{description:"Slot for custom right icon content. Overrides `iconRight` prop.",name:"iconRight"},{description:"Slot for custom button content. Overrides `label` prop.",name:"label"}],f=()=>{p.value=new Date},y=()=>{d.value=!0,setTimeout(()=>{d.value=!1},5e3)};return(i,t)=>{const r=$("SshPre");return O(),z(D,{"sub-title":i.$t("ui.button.subtitle"),title:i.$t("ui.button.title"),class:"demo-button"},{toolbar:s(()=>[l(o(u),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=B=>i.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[t[62]||(t[62]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.basic")),1),t[5]||(t[5]=n()),e("div",L,[e("div",I,[l(o(u),{label:i.$t("ui.button.label.clickMe"),onClick:t[1]||(t[1]=B=>f())},null,8,["label"]),t[2]||(t[2]=n()),e("span",null,a(p.value),1)]),t[4]||(t[4]=n()),l(r,{language:"html-vue"},{default:s(()=>t[3]||(t[3]=[n(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])]),t[63]||(t[63]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.withI18n")),1),t[7]||(t[7]=n()),e("div",C,[e("div",w,[l(o(u),{label:i.$t("ui.button.label.next")},null,8,["label"])])]),t[8]||(t[8]=n()),l(r,{language:"html-vue"},{default:s(()=>t[6]||(t[6]=[n(`
        <template> 
          <ButtonElement :label="t('ui.button.label.next')" />
        </template>
        
        <script setup lang="ts"> 
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
        <\/script>
      `)])),_:1})]),t[64]||(t[64]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.loading")),1),t[11]||(t[11]=n()),e("div",T,[e("div",R,[l(o(u),{label:i.$t("ui.button.label.submit"),loading:d.value,onClick:y},null,8,["label","loading"])]),t[10]||(t[10]=n()),l(r,{language:"html-vue"},{default:s(()=>t[9]||(t[9]=[n(`
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
        `)])),_:1})])]),t[65]||(t[65]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.contentSlot")),1),t[14]||(t[14]=n()),e("div",N,[e("div",P,[l(o(u),null,{label:s(()=>[e("u",null,a(i.$t("ui.button.label.clickMe")),1)]),_:1})]),t[13]||(t[13]=n()),l(r,{language:"html-vue"},{default:s(()=>t[12]||(t[12]=[n(`
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
        `)])),_:1})])]),t[66]||(t[66]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.severity")),1),t[22]||(t[22]=n()),e("div",A,[e("div",M,[l(o(u),{severity:"primary",label:i.$t("ui.button.label.primary")},null,8,["label"]),t[15]||(t[15]=n()),l(o(u),{severity:"secondary",label:i.$t("ui.button.label.secondary")},null,8,["label"]),t[16]||(t[16]=n()),l(o(u),{severity:"alternate",label:i.$t("ui.button.label.alternate")},null,8,["label"]),t[17]||(t[17]=n()),l(o(u),{severity:"success",label:i.$t("ui.button.label.success")},null,8,["label"]),t[18]||(t[18]=n()),l(o(u),{severity:"danger",label:i.$t("ui.button.label.danger")},null,8,["label"]),t[19]||(t[19]=n()),l(o(u),{severity:"warning",label:i.$t("ui.button.label.warning")},null,8,["label"])]),t[21]||(t[21]=n()),l(r,{language:"html-vue"},{default:s(()=>t[20]||(t[20]=[n(`
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
        `)])),_:1})])]),t[67]||(t[67]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.size")),1),t[27]||(t[27]=n()),e("div",H,[e("div",V,[l(o(u),{size:"small",label:i.$t("ui.button.label.small")},null,8,["label"]),t[23]||(t[23]=n()),l(o(u),{size:"medium",label:i.$t("ui.button.label.medium")},null,8,["label"]),t[24]||(t[24]=n()),l(o(u),{size:"large",label:i.$t("ui.button.label.large")},null,8,["label"])]),t[26]||(t[26]=n()),l(r,{language:"html-vue"},{default:s(()=>t[25]||(t[25]=[n(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])]),t[68]||(t[68]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.variant")),1),t[32]||(t[32]=n()),e("div",W,[e("div",U,[l(o(u),{size:"medium",label:i.$t("ui.button.label.textOnly"),variant:"textOnly"},null,8,["label"]),t[28]||(t[28]=n()),l(o(u),{size:"medium",label:i.$t("ui.button.label.outlined"),variant:"outlined"},null,8,["label"]),t[29]||(t[29]=n()),l(o(u),{size:"medium",label:i.$t("ui.button.label.default")},null,8,["label"])]),t[31]||(t[31]=n()),l(r,{language:"html-vue"},{default:s(()=>t[30]||(t[30]=[n(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])]),t[69]||(t[69]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.icons.icon")),1),t[37]||(t[37]=n()),e("div",j,[e("div",q,[l(o(u),{variant:"textOnly",severity:"secondary","icon-left":"pi pi-user"}),t[33]||(t[33]=n()),l(o(u),{variant:"outlined",severity:"secondary","icon-left":"pi pi-user"}),t[34]||(t[34]=n()),l(o(u),{variant:"filled","icon-left":"pi pi-user"})]),t[36]||(t[36]=n()),l(r,{language:"html-vue"},{default:s(()=>t[35]||(t[35]=[n(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])]),t[70]||(t[70]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.icons.iconElement")),1),t[45]||(t[45]=n()),e("div",F,[e("div",G,[l(o(u),{rounded:"",variant:"textOnly",severity:"secondary"},{iconLeft:s(()=>t[38]||(t[38]=[e("i",{class:"pi pi-user"},null,-1)])),_:1}),t[41]||(t[41]=n()),l(o(u),{rounded:"",severity:"secondary",variant:"outlined"},{iconRight:s(()=>t[39]||(t[39]=[e("i",{class:"pi pi-user"},null,-1)])),_:1}),t[42]||(t[42]=n()),l(o(u),{rounded:"",variant:"filled"},{iconRight:s(()=>t[40]||(t[40]=[e("i",{class:"pi pi-user"},null,-1)])),_:1})]),t[44]||(t[44]=n()),l(r,{language:"html-vue"},{default:s(()=>t[43]||(t[43]=[n(`
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
        `)])),_:1})])]),t[71]||(t[71]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.icons.iconPackage")),1),t[49]||(t[49]=n()),e("div",J,[e("div",K,[l(o(u),{label:i.$t("ui.button.label.home"),"icon-left":"pi pi-home",variant:"outlined"},null,8,["label"]),t[46]||(t[46]=n()),l(o(u),{label:i.$t("ui.button.label.home"),"icon-left":"fa-solid fa-house",variant:"outlined"},null,8,["label"])]),t[48]||(t[48]=n()),l(r,{language:"html-vue"},{default:s(()=>t[47]||(t[47]=[n(`
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
        `)])),_:1})])]),t[72]||(t[72]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.icons.iconAndLabel")),1),t[57]||(t[57]=n()),e("div",Q,[e("div",X,[l(o(u),{label:i.$t("ui.button.label.textOnly"),"icon-left":"pi pi-user",variant:"textOnly"},null,8,["label"]),t[50]||(t[50]=n()),l(o(u),{label:i.$t("ui.button.label.outlined"),"icon-left":"pi pi-user",variant:"outlined"},null,8,["label"]),t[51]||(t[51]=n()),l(o(u),{label:i.$t("ui.button.label.default"),"icon-left":"pi pi-user",variant:"filled"},null,8,["label"])]),t[55]||(t[55]=n()),e("div",Y,[l(o(u),{label:i.$t("ui.button.label.textOnly"),"icon-right":"pi pi-user",rounded:"",variant:"textOnly"},null,8,["label"]),t[52]||(t[52]=n()),l(o(u),{label:i.$t("ui.button.label.outlined"),"icon-right":"pi pi-user",rounded:"",variant:"outlined"},null,8,["label"]),t[53]||(t[53]=n()),l(o(u),{label:i.$t("ui.button.label.default"),"icon-right":"pi pi-user",rounded:"",variant:"filled"},null,8,["label"])]),t[56]||(t[56]=n()),l(r,{language:"html-vue"},{default:s(()=>t[54]||(t[54]=[n(`
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
        `)])),_:1})])]),t[73]||(t[73]=n()),e("section",null,[e("h2",null,a(i.$t("ui.button.usage.redirect")),1),t[61]||(t[61]=n()),e("div",Z,[e("div",x,[l(o(u),{label:i.$t("ui.button.label.home"),to:"/"},null,8,["label"]),t[58]||(t[58]=n()),l(o(u),{label:i.$t("ui.button.label.back"),severity:"secondary",to:"/vue/#/ui"},null,8,["label"])]),t[60]||(t[60]=n()),l(r,{language:"html-vue"},{default:s(()=>t[59]||(t[59]=[n(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)])),_:1})])]),t[74]||(t[74]=n()),l(S,{"events-data":m,"props-data":v,"props-table-title":i.$t("common.properties",{value:"ButtonProperties"}),"slots-data":g},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}}),it=k(h,[["__scopeId","data-v-3f1a468f"]]);export{it as default};
