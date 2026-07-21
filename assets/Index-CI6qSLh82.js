import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{C as u}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{T as d}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as f}from"./ComponentDocumentation-CFBF3GmY.js";import{t as p}from"./UiPage-eTNUnuuQ.js";var m={class:`section-content`},h={class:`section-content`},g={class:`section-content`},_={class:`section-content`},v={class:`section-content`},y={class:`section-content`},b=a({name:`MessageDemo`,setup(a){let{t:b}=d(),x=[{description:b(`ui.message.documentation.eventDescription.close`),name:`close`,payload:`-`}],S=[{default:`true`,description:b(`ui.message.documentation.propsDescription.enableClose`),prop:`enableClose`,type:`Boolean`},{default:`-`,description:b(`ui.message.documentation.propsDescription.icon`),prop:`icon`,type:`String`},{default:`-`,description:b(`ui.message.documentation.propsDescription.message`),prop:`message`,type:`String | Array<string>`},{default:`"info"`,description:b(`ui.message.documentation.propsDescription.severity`),prop:`severity`,type:`"danger" | "info" | "success" | "tip" | "warning"`},{default:`true`,description:b(`ui.message.documentation.propsDescription.showIcon`),prop:`showIcon`,type:`Boolean`}],C=[{description:b(`ui.message.documentation.slotDescription.default`),name:`default`},{description:b(`ui.message.documentation.slotDescription.icon`),name:`icon`}];return(a,d)=>{let b=r(`SshPre`);return o(),l(p,{subtitle:a.$t(`ui.message.subtitle`),title:a.$t(`ui.message.title`),class:`demo-message`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.message.usage.basic`)),1),d[6]||=t(),i(`div`,m,[e(n(u),{message:a.$t(`ui.message.contents.info`),severity:`info`},null,8,[`message`]),d[1]||=t(),e(n(u),{message:a.$t(`ui.message.contents.success`),severity:`success`},null,8,[`message`]),d[2]||=t(),e(n(u),{message:a.$t(`ui.message.contents.danger`),severity:`danger`},null,8,[`message`]),d[3]||=t(),e(n(u),{message:a.$t(`ui.message.contents.warning`),severity:`warning`},null,8,[`message`]),d[4]||=t(),e(n(u),{message:a.$t(`ui.message.contents.tip`),severity:`tip`},null,8,[`message`]),d[5]||=t(),e(b,{language:`html-vue`},{default:s(()=>[...d[0]||=[t(`
          <template>
            <Message
              message="Your profile has been updated. Changes may take a few minutes to appear across all devices."
              severity="info"
            />
            <Message
              :message="Payment received! Your order is now being processed and you’ll receive a confirmation email shortly."
              severity="success"
            />
            <Message
              :message="Invalid credentials. Please check your email or password and try again."
              severity="danger"
            />
            <Message
              :message="Your session is about to expire in 2 minutes. Save your work to avoid losing changes."
              severity="warning"
            />
            <Message
              :message="Use a password with at least 8 characters to make your password stronger."
              severity="tip"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),d[23]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.message.usage.enableClose`)),1),d[9]||=t(),i(`div`,h,[e(n(u),{"enable-close":!1,message:a.$t(`ui.message.contents.content4`),"show-icon":!1},null,8,[`message`]),d[8]||=t(),e(b,{language:`html-vue`},{default:s(()=>[...d[7]||=[t(`
          <template>
            <Message
              :enable-close="false"
              :show-icon="false"
              message="We value your feedback: take our quick survey!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
          <\/script>
        `,-1)]]),_:1})])]),d[24]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.message.usage.withI18n`)),1),d[12]||=t(),i(`div`,g,[e(n(u),{message:a.$t(`ui.message.contents.content2`)},null,8,[`message`]),d[11]||=t(),e(b,{language:`html-vue`},{default:s(()=>[...d[10]||=[t(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
            import { useI18n } from "@prefabs.tech/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),d[25]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.message.usage.icons.icon`)),1),d[15]||=t(),i(`div`,_,[e(n(u),{message:a.$t(`ui.message.contents.content2`),icon:`pi pi-android`},null,8,[`message`]),d[14]||=t(),e(b,{language:`html-vue`},{default:s(()=>[...d[13]||=[t(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),d[26]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.message.usage.icons.iconSlot`)),1),d[19]||=t(),i(`div`,v,[e(n(u),{message:a.$t(`ui.message.contents.content3`)},{icon:s(()=>[...d[16]||=[i(`i`,{class:`fa-regular fa-bell`},null,-1)]]),_:1},8,[`message`]),d[18]||=t(),e(b,{language:`html-vue`},{default:s(()=>[...d[17]||=[t(`
          <template>
            <Message
              message="New Year, New You: Start fresh with our services!"
            >
              <template #icon>
                <i class="fa-regular fa-bell" />
              </template>
            </Message>
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),d[27]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.message.usage.messageArray`)),1),d[22]||=t(),i(`div`,y,[e(n(u),{message:[a.$t(`ui.message.contents.content1`),a.$t(`ui.message.contents.content2`),a.$t(`ui.message.contents.content3`),a.$t(`ui.message.contents.content4`)]},null,8,[`message`]),d[21]||=t(),e(b,{language:`html-vue`},{default:s(()=>[...d[20]||=[t(`
          <template>
            <Message
              message="[
                'Season Sale: Enjoy massive discounts with up to 50% off on a wide range of selected items — from fashion to electronics, don’t miss out on these limited-time offers!',
                'New features just launched! Check them out!',
                'New Year, New You: Start fresh with our services!',
                'We value your feedback: take our quick survey!',
              ]"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),d[28]||=t(),e(f,{"events-data":x,"props-data":S,"props-table-title":a.$t(`common.properties`,{value:`MessageProperties`}),"slots-data":C},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{b as default};