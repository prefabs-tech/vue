import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l,vn as u}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{O as d,o as f}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{E as p,a as m}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{x as h}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as g}from"./ComponentDocumentation-BPcopVAa.js";import{t as _}from"./LayoutPage-Dm-FBSPY.js";var v={class:`section-content`},y={class:`section-content`},b=a({name:`StickyCollapsibleFooterDemo`,setup(a){let{t:b}=p(),x=u(),S=[{default:`true`,description:b(`layout.documentation.propsDescription.fixed`),prop:`fixed`,type:`Boolean`}],C=[{description:b(`layout.documentation.slotDescription.default`),name:`default`}],w=e=>{e&&alert(e)};return(a,u)=>{let p=r(`SshPre`);return o(),l(_,{subtitle:a.$t(`layout.subtitle.stickyCollapsibleFooter`),title:a.$t(`layout.label.stickyCollapsibleFooter`),class:`demo sticky-collapsible-footer`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`layout.label.footerFixed`)),1),u[7]||=t(),i(`div`,v,[e(n(m),null,{default:s(()=>[e(n(h),{modelValue:x.value,"onUpdate:modelValue":u[0]||=e=>x.value=e,placeholder:a.$t(`layout.placeholder.input`)},null,8,[`modelValue`,`placeholder`]),u[3]||=t(),e(n(f),{label:a.$t(`layout.label.submit`),size:`small`,onClick:u[1]||=e=>w(x.value)},null,8,[`label`]),u[4]||=t(),e(n(f),{label:a.$t(`layout.label.cancel`),severity:`secondary`,size:`small`,variant:`outlined`,onClick:u[2]||=e=>w(a.$t(`layout.label.cancelled`))},null,8,[`label`])]),_:1}),u[6]||=t(),e(p,{language:`html-vue`},{default:s(()=>[...u[5]||=[t(`
          <template>
            <StickyCollapsibleFooter>
              <Input
                v-model="input"
                :placeholder="$t('layout.placeholder.input')"
              />

              <ButtonElement
                :label="$t('layout.label.submit')"
                size="small"
                @click="showAlert(input)"
              />
              <ButtonElement
                :label="$t('layout.label.cancel')"
                severity="secondary"
                size="small"
                variant="outlined"
                @click="showAlert($t('layout.label.cancelled'))"
              />
            </StickyCollapsibleFooter>
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          import { StickyCollapsibleFooter } from "@prefabs.tech/vue3-layout";
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const input = ref();

          const showAlert = (message: string) => {
            if (message) {
              alert(message);
            }
          };
          <\/script>

          <style lang="css">
          .sticky-collapsible .content {
            display: flex;
            gap: 0.5rem;
          }
          </style>
        `,-1)]]),_:1})])]),u[11]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`layout.label.footerAbsolute`)),1),u[10]||=t(),i(`div`,y,[e(n(d),null,{default:s(()=>[t(c(a.$t(`layout.label.bodyContent`))+` `,1),e(n(m),{fixed:!1},{default:s(()=>[t(c(a.$t(`layout.label.stickyFooterContent`)),1)]),_:1})]),_:1}),u[9]||=t(),e(p,{language:`html-vue`},{default:s(()=>[...u[8]||=[t(`
          <template>
            <Card>
              Body content

              <StickyCollapsibleFooter :fixed="false">
                This is sticky footer content.
              </StickyCollapsibleFooter>
            </Card>
          </template>

          <script setup lang="ts">
          import { StickyCollapsibleFooter } from "@prefabs.tech/vue3-layout";
          import { Card } from "@prefabs.tech/vue3-ui";
          <\/script>

          <style lang="css">
          .card {
            position: relative;
          }
          </style>
        `,-1)]]),_:1})])]),u[12]||=t(),e(g,{"props-data":S,"props-table-title":a.$t(`common.properties`,{value:`StickyCollapsibleFooterProperties`}),"slots-data":C},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{b as default};