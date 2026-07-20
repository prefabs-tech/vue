import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l,vn as u}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{o as d}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{t as f}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{t as p}from"./ComponentDocumentation-BPcopVAa.js";import{t as m}from"./UiPage-3Ir0VIur.js";var h={class:`section-content`},g={class:`container`},_={class:`section-content`},v={class:`container`},y={class:`section-content`},b={class:`container`},x={class:`section-content`},S={class:`container`},C={class:`section-content`},w={class:`container`},T={class:`section-content`},E={class:`container`},D={class:`section-content`},O={class:`container`},k={class:`section-content`},A={className:`container`},j={class:`section-content`},M={className:`container`},N={class:`section-content`},P={class:`container`},F={class:`section-content`},I={class:`container`},L={class:`container`},R={class:`section-content`},z={class:`container`},B=f(a({name:`ButtonDemo`,setup(a){let f=u(void 0),B=u(!1),V=[{description:`Emitted when the button is clicked.`,name:`click`,payload:`-`}],H=[{default:`"button"`,description:`Accessible label for the button element.`,prop:`ariaLabel`,type:`String`},{default:`false`,description:`If true, the button will be disabled and non-interactive.`,prop:`disabled`,type:`Boolean`},{default:`-`,description:`Icon to be displayed on the left side of the button.`,prop:`iconLeft`,type:`String | Boolean`},{default:`-`,description:`Icon to be displayed on the right side of the button.`,prop:`iconRight`,type:`String | Boolean`},{default:`-`,description:`Text label to display inside the button.`,prop:`label`,type:`String`},{default:`false`,description:`If true, indicates that the button is in a loading state and disables user interaction.`,prop:`loading`,type:`Boolean`},{default:`false`,description:`Applies rounded styling to the button.`,prop:`rounded`,type:`Boolean`},{default:`"primary"`,description:`Defines the button color style.`,prop:`severity`,type:`"primary" | "secondary" | "alternate" | "success" | "danger" | "warning"`},{default:`"medium"`,description:`Defines the size of the button.`,prop:`size`,type:`"small" | "medium" | "large"`},{default:`-`,description:`If set, the button renders as a link pointing to this URL.`,prop:`to`,type:`String`},{default:`-`,description:`HTML title attribute.`,prop:`title`,type:`String`},{default:`"filled"`,description:`Defines the visual variant of the button.`,prop:`variant`,type:`"outlined" | "filled" | "textOnly"`}],U=[{description:"Slot for custom left icon content. Overrides `iconLeft` prop.",name:`iconLeft`},{description:"Slot for custom right icon content. Overrides `iconRight` prop.",name:`iconRight`},{description:"Slot for custom button content. Overrides `label` prop.",name:`label`}],W=()=>{f.value=new Date},G=()=>{B.value=!0,setTimeout(()=>{B.value=!1},5e3)};return(a,u)=>{let K=r(`SshPre`);return o(),l(m,{subtitle:a.$t(`ui.button.subtitle`),title:a.$t(`ui.button.title`),class:`demo-button`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.basic`)),1),u[4]||=t(),i(`div`,h,[i(`div`,g,[e(n(d),{label:a.$t(`ui.button.label.clickMe`),onClick:u[0]||=e=>W()},null,8,[`label`]),u[1]||=t(),i(`span`,null,c(f.value),1)]),u[3]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[2]||=[t(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)]]),_:1})])]),u[61]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.withI18n`)),1),u[6]||=t(),i(`div`,_,[i(`div`,v,[e(n(d),{label:a.$t(`ui.button.label.next`)},null,8,[`label`])])]),u[7]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[5]||=[t(`
        <template> 
          <ButtonElement :label="t('ui.button.label.next')" />
        </template>
        
        <script setup lang="ts"> 
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
        <\/script>
      `,-1)]]),_:1})]),u[62]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.loading`)),1),u[10]||=t(),i(`div`,y,[i(`div`,b,[e(n(d),{label:a.$t(`ui.button.label.submit`),loading:B.value,onClick:G},null,8,[`label`,`loading`])]),u[9]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[8]||=[t(`
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
        `,-1)]]),_:1})])]),u[63]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.labelSlot`)),1),u[13]||=t(),i(`div`,x,[i(`div`,S,[e(n(d),null,{label:s(()=>[i(`u`,null,c(a.$t(`ui.button.label.clickMe`)),1)]),_:1})]),u[12]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[11]||=[t(`
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
        `,-1)]]),_:1})])]),u[64]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.severity`)),1),u[21]||=t(),i(`div`,C,[i(`div`,w,[e(n(d),{severity:`primary`,label:a.$t(`ui.button.label.primary`)},null,8,[`label`]),u[14]||=t(),e(n(d),{severity:`secondary`,label:a.$t(`ui.button.label.secondary`)},null,8,[`label`]),u[15]||=t(),e(n(d),{severity:`alternate`,label:a.$t(`ui.button.label.alternate`)},null,8,[`label`]),u[16]||=t(),e(n(d),{severity:`success`,label:a.$t(`ui.button.label.success`)},null,8,[`label`]),u[17]||=t(),e(n(d),{severity:`danger`,label:a.$t(`ui.button.label.danger`)},null,8,[`label`]),u[18]||=t(),e(n(d),{severity:`warning`,label:a.$t(`ui.button.label.warning`)},null,8,[`label`])]),u[20]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[19]||=[t(`
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
        `,-1)]]),_:1})])]),u[65]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.size`)),1),u[26]||=t(),i(`div`,T,[i(`div`,E,[e(n(d),{size:`small`,label:a.$t(`ui.button.label.small`)},null,8,[`label`]),u[22]||=t(),e(n(d),{size:`medium`,label:a.$t(`ui.button.label.medium`)},null,8,[`label`]),u[23]||=t(),e(n(d),{size:`large`,label:a.$t(`ui.button.label.large`)},null,8,[`label`])]),u[25]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[24]||=[t(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)]]),_:1})])]),u[66]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.variant`)),1),u[31]||=t(),i(`div`,D,[i(`div`,O,[e(n(d),{size:`medium`,label:a.$t(`ui.button.label.textOnly`),variant:`textOnly`},null,8,[`label`]),u[27]||=t(),e(n(d),{size:`medium`,label:a.$t(`ui.button.label.outlined`),variant:`outlined`},null,8,[`label`]),u[28]||=t(),e(n(d),{size:`medium`,label:a.$t(`ui.button.label.default`)},null,8,[`label`])]),u[30]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[29]||=[t(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)]]),_:1})])]),u[67]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.icons.icon`)),1),u[36]||=t(),i(`div`,k,[i(`div`,A,[e(n(d),{variant:`textOnly`,severity:`secondary`,"icon-left":`pi pi-user`}),u[32]||=t(),e(n(d),{variant:`outlined`,severity:`secondary`,"icon-left":`pi pi-user`}),u[33]||=t(),e(n(d),{variant:`filled`,"icon-left":`pi pi-user`})]),u[35]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[34]||=[t(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)]]),_:1})])]),u[68]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.icons.iconElement`)),1),u[44]||=t(),i(`div`,j,[i(`div`,M,[e(n(d),{rounded:``,severity:`secondary`,variant:`textOnly`},{iconLeft:s(()=>[...u[37]||=[i(`i`,{class:`pi pi-user`},null,-1)]]),_:1}),u[40]||=t(),e(n(d),{rounded:``,severity:`secondary`,variant:`outlined`},{iconRight:s(()=>[...u[38]||=[i(`i`,{class:`pi pi-user`},null,-1)]]),_:1}),u[41]||=t(),e(n(d),{rounded:``,variant:`filled`},{iconRight:s(()=>[...u[39]||=[i(`i`,{class:`pi pi-user`},null,-1)]]),_:1})]),u[43]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[42]||=[t(`
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
        `,-1)]]),_:1})])]),u[69]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.icons.iconPackage`)),1),u[48]||=t(),i(`div`,N,[i(`div`,P,[e(n(d),{label:a.$t(`ui.button.label.home`),"icon-left":`pi pi-home`,variant:`outlined`},null,8,[`label`]),u[45]||=t(),e(n(d),{label:a.$t(`ui.button.label.home`),"icon-left":`fa-solid fa-house`,variant:`outlined`},null,8,[`label`])]),u[47]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[46]||=[t(`
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
        `,-1)]]),_:1})])]),u[70]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.icons.iconAndLabel`)),1),u[56]||=t(),i(`div`,F,[i(`div`,I,[e(n(d),{label:a.$t(`ui.button.label.textOnly`),"icon-left":`pi pi-user`,variant:`textOnly`},null,8,[`label`]),u[49]||=t(),e(n(d),{label:a.$t(`ui.button.label.outlined`),"icon-left":`pi pi-user`,variant:`outlined`},null,8,[`label`]),u[50]||=t(),e(n(d),{label:a.$t(`ui.button.label.default`),"icon-left":`pi pi-user`,variant:`filled`},null,8,[`label`])]),u[54]||=t(),i(`div`,L,[e(n(d),{label:a.$t(`ui.button.label.textOnly`),"icon-right":`pi pi-user`,rounded:``,variant:`textOnly`},null,8,[`label`]),u[51]||=t(),e(n(d),{label:a.$t(`ui.button.label.outlined`),"icon-right":`pi pi-user`,rounded:``,variant:`outlined`},null,8,[`label`]),u[52]||=t(),e(n(d),{label:a.$t(`ui.button.label.default`),"icon-right":`pi pi-user`,rounded:``,variant:`filled`},null,8,[`label`])]),u[55]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[53]||=[t(`
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
        `,-1)]]),_:1})])]),u[71]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.button.usage.redirect`)),1),u[60]||=t(),i(`div`,R,[i(`div`,z,[e(n(d),{label:a.$t(`ui.button.label.home`),to:`/`},null,8,[`label`]),u[57]||=t(),e(n(d),{label:a.$t(`ui.button.label.back`),severity:`secondary`,to:`/vue/#/ui`},null,8,[`label`])]),u[59]||=t(),e(K,{language:`html-vue`},{default:s(()=>[...u[58]||=[t(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          <\/script>
        `,-1)]]),_:1})])]),u[72]||=t(),e(p,{"events-data":V,"props-data":H,"props-table-title":a.$t(`common.properties`,{value:`ButtonProperties`}),"slots-data":U},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}}),[[`__scopeId`,`data-v-03e4c97d`]]);export{B as default};