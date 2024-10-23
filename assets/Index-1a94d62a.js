import{d as c,e as m,r as i,o as g,c as f,w as t,a as n,t as a,f as e,g as l,h as u,a8 as d}from"./index-45be5317.js";const v={class:"section-content"},w={class:"section-content"},b=n("div",{class:"trigger"},"...",-1),_={class:"section-content"},D=c({__name:"Index",setup(h){const s=m([{disabled:!0,label:"Change password",value:"password"},{label:"Profile",value:"profile"}]);return(o,y)=>{const r=i("SshPre"),p=i("Page");return g(),f(p,{title:o.$t("ui.dropdown.title"),class:"demo"},{default:t(()=>[n("section",null,[n("h2",null,a(o.$t("ui.dropdown.usage.basic")),1),e(),n("div",v,[l(r,{language:"html-vue"},{default:t(()=>[e(`
          <template>
            <Dropdown 
              label="User"
              :menu="menu"
              @select="onSelect"
            />
          </template>

          <script setup lang="ts">
            import { Dropdown } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const menu = ref([
              { disabled: true, label: "Change password", value: "password"  },
              { label: "Profile", value: "profile" },
            ]);

            const onSelect = (value: string | number) => {
              ...
            };
          <\/script>
        `)]),_:1}),e(),l(u(d),{label:o.$t("ui.dropdown.label.user"),menu:s.value},null,8,["label","menu"])])]),e(),n("section",null,[n("h2",null,a(o.$t("ui.dropdown.usage.withSlot")),1),e(),n("div",w,[l(r,{language:"html-vue"},{default:t(()=>[e(`
          <template>
            <Dropdown 
              :menu="menu"
              @select="onSelect"
            >
              <div class="trigger">...</div>
            </Dropdown>
          </template>

          <script setup lang="ts">
            import { Dropdown } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const menu = ref([
              { disabled: true, label: "Change password", value: "password"  },
              { label: "Profile", value: "profile" },
            ]);

            const onSelect = (value: string | number) => {
              ...
            };
          <\/script>
        `)]),_:1}),e(),l(u(d),{menu:s.value},{default:t(()=>[b]),_:1},8,["menu"])])]),e(),n("section",null,[n("h2",null,a(o.$t("ui.dropdown.usage.customStyle")),1),e(),n("div",_,[l(r,{language:"html-vue"},{default:t(()=>[e(`
          <template>
            <Dropdown 
              :label="$t('ui.dropdown.label.user')"
              :menu="menu"
              class="custom-style-dropdown"
            />
          </template>

          <script setup lang="ts">
            import { Dropdown } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const menu = ref([
              { disabled: true, label: "Change password", value: "password"  },
              { label: "Profile", value: "profile" },
            ]);
          <\/script>

          <style lang="css">
            .custom-style-dropdown .dropdown ul {
              --_min-width: 12rem;
            }

            .custom-style-dropdown .dropdown-trigger:hover,
            .custom-style-dropdown .dropdown-trigger.triggered {
              --_bg-color: var(--dz-primary-color);
              
              color: #fff;
            }

            .custom-style-dropdown ul > li.menu-item:hover:not(.disabled) {
              --_bg-color: var(--dz-primary-color);

              color: #fff;
            }
          <style>
        `)]),_:1}),e(),l(u(d),{label:o.$t("ui.dropdown.label.user"),menu:s.value,class:"custom-style-dropdown"},null,8,["label","menu"])])])]),_:1},8,["title"])}}});export{D as default};
