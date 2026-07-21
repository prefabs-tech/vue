import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l,vn as u}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{o as d,u as f}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{t as p}from"./ComponentDocumentation-CFBF3GmY.js";import{t as m}from"./UiPage-eTNUnuuQ.js";var h={class:`section-content`},g={class:`container`},_=a({name:`LoadingPageDemo`,setup(a){let _=u(!1),v=[{default:`false`,description:`Controls the visibility of the loading overlay.`,prop:`loading`,type:`Boolean`}],y=()=>{_.value=!0,setTimeout(()=>{_.value=!1},5e3)};return(a,u)=>{let b=r(`SshPre`);return o(),l(m,{subtitle:a.$t(`ui.loading.subtitle`),title:a.$t(`ui.loading.title`),class:`demo-loading`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.loading.usage.basic`)),1),u[3]||=t(),i(`div`,h,[i(`div`,g,[e(n(d),{label:a.$t(`ui.loading.buttonLabel.clickMe`),onClick:y},null,8,[`label`]),u[0]||=t(),e(n(f),{loading:_.value},null,8,[`loading`])]),u[2]||=t(),e(b,{language:`html-vue`},{default:s(()=>[...u[1]||=[t(`
          <template>
            <ButtonElement label="Click me" @click="startLoading" />

            <LoadingPage :loading="loading" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement, LoadingPage } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;

              setTimeout(() => {
                loading.value = false;
              }, 5000);
            };
          <\/script>
        `,-1)]]),_:1})])]),u[4]||=t(),e(p,{"props-data":v,"props-table-title":a.$t(`common.properties`,{value:`LoadingPageProperties`})},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{_ as default};