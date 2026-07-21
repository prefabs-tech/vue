import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{D as u}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{t as d}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{t as f}from"./ComponentDocumentation-CFBF3GmY.js";import{t as p}from"./UiPage-eTNUnuuQ.js";var m={class:`section-content`},h={class:`section-content`},g={class:`section-content`},_={class:`section-content`},v={class:`container`},y={class:`section-content`},b={class:`container`},x={class:`section-content`},S={class:`container`},C={class:`section-content`},w={class:`container`},T={class:`section-content`},E={class:`container`},D=d(a({name:`BadgeDemo`,setup(a){let d=[{default:`-`,description:"Icon class to show on the left side (e.g. `pi pi-check`).",prop:`iconLeft`,type:`String`},{default:`-`,description:"Icon class to show on the right side (e.g. `fa fa-lock`).",prop:`iconRight`,type:`String`},{default:`-`,description:`The text label to be displayed inside the badge.`,prop:`label`,type:`String`},{default:`false`,description:`Applies rounded styling to the badge (pill shape).`,prop:`rounded`,type:`Boolean`},{default:`"primary"`,description:`Severity level for styling.`,prop:`severity`,type:`"primary" | "secondary" | "alternate" | "success" | "danger" | "warning"`}],D=[{description:`Used to insert a custom icon element on the left side of the label.`,name:`iconLeft`},{description:`Used to insert a custom icon element on the right side of the label.`,name:`iconRight`}];return(a,O)=>{let k=r(`SshPre`);return o(),l(p,{subtitle:a.$t(`ui.badge.subtitle`),title:a.$t(`ui.badge.title`),class:`demo-badge`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.badge.usage.basic`)),1),O[2]||=t(),i(`div`,m,[e(n(u),{label:a.$t(`ui.badge.label.basic`)},null,8,[`label`]),O[1]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...O[0]||=[t(`
          <template>
            <BadgeComponent label="Basic" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),O[35]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.badge.usage.withI18n`)),1),O[5]||=t(),i(`div`,h,[e(n(u),{label:a.$t(`ui.badge.label.addedIn`)},null,8,[`label`]),O[4]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...O[3]||=[t(`
          <template>
            <BadgeComponent :label="t('ui.badge.label.addedIn')" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),O[36]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.badge.usage.rounded`)),1),O[8]||=t(),i(`div`,g,[e(n(u),{label:a.$t(`ui.badge.label.rounded`),rounded:``},null,8,[`label`]),O[7]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...O[6]||=[t(`
          <template>
            <BadgeComponent label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),O[37]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.badge.usage.severity`)),1),O[16]||=t(),i(`div`,_,[i(`div`,v,[e(n(u),{label:a.$t(`ui.badge.label.primary`),severity:`primary`},null,8,[`label`]),O[9]||=t(),e(n(u),{label:a.$t(`ui.badge.label.secondary`),severity:`secondary`},null,8,[`label`]),O[10]||=t(),e(n(u),{label:a.$t(`ui.badge.label.alternate`),severity:`alternate`},null,8,[`label`]),O[11]||=t(),e(n(u),{label:a.$t(`ui.badge.label.success`),severity:`success`},null,8,[`label`]),O[12]||=t(),e(n(u),{label:a.$t(`ui.badge.label.danger`),severity:`danger`},null,8,[`label`]),O[13]||=t(),e(n(u),{label:a.$t(`ui.badge.label.warning`),severity:`warning`},null,8,[`label`])]),O[15]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...O[14]||=[t(`
          <template>
            <BadgeComponent label="Primary" severity="primary" />
            <BadgeComponent label="Secondary" severity="secondary" />
            <BadgeComponent label="Alternate" severity="alternate" />
            <BadgeComponent label="Success" severity="success" />
            <BadgeComponent label="Danger" severity="danger" />
            <BadgeComponent label="Warning" severity="warning" />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),O[38]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.badge.usage.icon`)),1),O[20]||=t(),i(`div`,y,[i(`div`,b,[e(n(u),{"icon-left":`pi pi-thumbs-up`}),O[17]||=t(),e(n(u),{"icon-right":`pi pi-thumbs-down`})]),O[19]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...O[18]||=[t(`
          <template>
            <BadgeComponent icon-left="pi pi-thumbs-up" />
            <BadgeComponent icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),O[39]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.badge.usage.iconPackage`)),1),O[24]||=t(),i(`div`,x,[i(`div`,S,[e(n(u),{label:a.$t(`ui.badge.label.locked`),"icon-left":`pi pi-lock`},null,8,[`label`]),O[21]||=t(),e(n(u),{label:a.$t(`ui.badge.label.unLocked`),"icon-right":`fa-solid fa-lock-open`,severity:`success`},null,8,[`label`])]),O[23]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...O[22]||=[t(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),O[40]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.badge.usage.iconAndLabel`)),1),O[28]||=t(),i(`div`,C,[i(`div`,w,[e(n(u),{label:a.$t(`ui.badge.label.locked`),"icon-left":`pi pi-lock`},null,8,[`label`]),O[25]||=t(),e(n(u),{label:a.$t(`ui.badge.label.unLocked`),"icon-right":`pi pi-lock-open`,severity:`success`},null,8,[`label`])]),O[27]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...O[26]||=[t(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),O[41]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.badge.usage.iconElement`)),1),O[34]||=t(),i(`div`,T,[i(`div`,E,[e(n(u),{label:a.$t(`ui.badge.label.correct`)},{iconLeft:s(()=>[...O[29]||=[i(`i`,{class:`pi pi-check`},null,-1)]]),_:1},8,[`label`]),O[31]||=t(),e(n(u),{label:a.$t(`ui.badge.label.wrong`),severity:`danger`},{iconRight:s(()=>[...O[30]||=[i(`i`,{class:`pi pi-times`},null,-1)]]),_:1},8,[`label`])]),O[33]||=t(),e(k,{language:`html-vue`},{default:s(()=>[...O[32]||=[t(`
          <template>
            <BadgeComponent label="Correct">
              <template #iconLeft>
                <i class="pi pi-check" >
              </template>
            </BadgeComponent>

            <BadgeComponent label="Wrong" severity="danger">
              <template #iconRight>
                <i class="pi pi-times" >
              </template>
            </BadgeComponent>
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),O[42]||=t(),e(f,{"props-data":d,"props-table-title":a.$t(`common.properties`,{value:`BadgeProperties`}),"slots-data":D},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}}),[[`__scopeId`,`data-v-0c5eb68b`]]);export{D as default};