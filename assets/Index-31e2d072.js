import{d as g,e as h,o as y,c as f,w as u,a as t,t as o,f as e,g as n,h as i,a4 as a,r as p,a0 as _,a1 as B,_ as E}from"./index-4f538d53.js";const c=r=>(_("data-v-c6ad00d1"),r=r(),B(),r),$={class:"section-content"},z={class:"container"},O={class:"section-content"},k={class:"container"},C={class:"section-content"},S={class:"container"},w={class:"section-content"},D={class:"container"},I={class:"section-content"},N={class:"container"},T={class:"section-content"},P={className:"container"},R={class:"section-content"},W={className:"container"},L=c(()=>t("i",{class:"pi pi-user"},null,-1)),M=c(()=>t("i",{class:"pi pi-user"},null,-1)),V=c(()=>t("i",{class:"pi pi-user"},null,-1)),A={class:"section-content"},Y={class:"container"},j={class:"container"},q={class:"section-content"},F={class:"container"},G=g({__name:"Index",setup(r){const d=h(void 0);function b(){d.value=new Date}return(l,m)=>{const s=p("SshPre"),v=p("Page");return y(),f(v,{title:l.$t("ui.button.title"),class:"demo-button"},{default:u(()=>[t("section",null,[t("h2",null,o(l.$t("ui.button.usage.basic")),1),e(),t("div",$,[n(s,{language:"html-vue"},{default:u(()=>[e(`
          <template> 
            <ButtonElement label="Click me" @click="onClick" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",z,[n(i(a),{label:l.$t("ui.button.label.clickMe"),onClick:m[0]||(m[0]=H=>b())},null,8,["label"]),e(),t("span",null,o(d.value),1)])])]),e(),t("section",null,[t("h2",null,o(l.$t("ui.button.usage.buttonWithChild")),1),e(),t("div",O,[n(s,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e(),t("div",k,[n(i(a),{children:""},{buttonContent:u(()=>[t("u",null,o(l.$t("ui.button.label.clickMe")),1)]),_:1})])])]),e(),t("section",null,[t("h2",null,o(l.$t("ui.button.usage.severity")),1),e(),t("div",C,[n(s,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e(),t("div",S,[n(i(a),{severity:"primary",label:l.$t("ui.button.label.primary")},null,8,["label"]),e(),n(i(a),{severity:"secondary",label:l.$t("ui.button.label.secondary")},null,8,["label"]),e(),n(i(a),{severity:"alternate",label:l.$t("ui.button.label.alternate")},null,8,["label"]),e(),n(i(a),{severity:"success",label:l.$t("ui.button.label.success")},null,8,["label"]),e(),n(i(a),{severity:"danger",label:l.$t("ui.button.label.danger")},null,8,["label"]),e(),n(i(a),{severity:"warning",label:l.$t("ui.button.label.warning")},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,o(l.$t("ui.button.usage.size")),1),e(),t("div",w,[n(s,{language:"html-vue"},{default:u(()=>[e(`
          <template> 
            <ButtonElement label="Small" size="small" />
            <ButtonElement label="Medium" size="medium" />
            <ButtonElement label="Large" size="large" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",D,[n(i(a),{size:"small",label:l.$t("ui.button.label.small")},null,8,["label"]),e(),n(i(a),{size:"medium",label:l.$t("ui.button.label.medium")},null,8,["label"]),e(),n(i(a),{size:"large",label:l.$t("ui.button.label.large")},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,o(l.$t("ui.button.usage.variant")),1),e(),t("div",I,[n(s,{language:"html-vue"},{default:u(()=>[e(`
          <template> 
            <ButtonElement label="Text only" size="medium" variant="textOnly" />
            <ButtonElement label="Outlined" size="medium" variant="outlined" />
            <ButtonElement label="Default" size="medium" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",N,[n(i(a),{size:"medium",label:l.$t("ui.button.label.textOnly"),variant:"textOnly"},null,8,["label"]),e(),n(i(a),{size:"medium",label:l.$t("ui.button.label.outlined"),variant:"outlined"},null,8,["label"]),e(),n(i(a),{size:"medium",label:l.$t("ui.button.label.default")},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,o(l.$t("ui.button.usage.icons.iconName")),1),e(),t("div",T,[n(s,{language:"html-vue"},{default:u(()=>[e(`
          <template> 
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" />
            <ButtonElement icon-right="pi pi-user" variant="outlined" />
            <ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",P,[n(i(a),{variant:"textOnly",severity:"secondary","icon-left":"pi pi-user"}),e(),n(i(a),{variant:"outlined",severity:"secondary","icon-left":"pi pi-user"}),e(),n(i(a),{variant:"filled","icon-left":"pi pi-user"})])])]),e(),t("section",null,[t("h2",null,o(l.$t("ui.button.usage.icons.iconElement")),1),e(),t("div",R,[n(s,{language:"html-vue"},{default:u(()=>[e(`
          <template> 
            <ButtonElement icon-left="true" rounded severity="secondary" variant="textOnly">
                <template #iconLeft>
                  <i class="pi pi-user" >
                </template>
            </ButtonElement>

            <ButtonElement icon-right="true" rounded variant="outlined">
              <template #iconRight>
                <i class="pi pi-user" >
              </template>
            </ButtonElement>

            <ButtonElement icon-right="true" rounded severity="secondary" variant="filled">
                <template #iconRight>
                  <i class="pi pi-user" >
                </template>
            </ButtonElement>
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",W,[n(i(a),{variant:"textOnly",severity:"secondary","icon-left":"true",rounded:""},{iconLeft:u(()=>[L]),_:1}),e(),n(i(a),{severity:"secondary",variant:"outlined","icon-right":"true",rounded:""},{iconRight:u(()=>[M]),_:1}),e(),n(i(a),{"icon-right":"true",variant:"filled",rounded:""},{iconRight:u(()=>[V]),_:1})])])]),e(),t("section",null,[t("h2",null,o(l.$t("ui.button.usage.icons.iconWithText")),1),e(),t("div",A,[n(s,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e(),t("div",Y,[n(i(a),{label:l.$t("ui.button.label.textOnly"),"icon-left":"pi pi-user",variant:"textOnly"},null,8,["label"]),e(),n(i(a),{label:l.$t("ui.button.label.outlined"),"icon-left":"pi pi-user",variant:"outlined"},null,8,["label"]),e(),n(i(a),{label:l.$t("ui.button.label.default"),"icon-left":"pi pi-user",variant:"filled"},null,8,["label"])]),e(),t("div",j,[n(i(a),{label:l.$t("ui.button.label.textOnly"),"icon-right":"pi pi-user",rounded:"",variant:"textOnly"},null,8,["label"]),e(),n(i(a),{label:l.$t("ui.button.label.outlined"),"icon-right":"pi pi-user",rounded:"",variant:"outlined"},null,8,["label"]),e(),n(i(a),{label:l.$t("ui.button.label.default"),"icon-right":"pi pi-user",rounded:"",variant:"filled"},null,8,["label"])])])]),e(),t("section",null,[t("h2",null,o(l.$t("ui.button.usage.redirect")),1),e(),t("div",q,[n(s,{language:"html-vue"},{default:u(()=>[e(`
          <template> 
            <ButtonElement label="home" to="/" />
            <ButtonElement label="back" severity="secondary" to="/ui" />
          </template> 
          
          <script setup lang="ts"> 
            import { ButtonElement } from "@dzangolab/vue3-ui"; 
          <\/script>
        `)]),_:1}),e(),t("div",F,[n(i(a),{label:l.$t("ui.button.label.home"),to:"/"},null,8,["label"]),e(),n(i(a),{label:l.$t("ui.button.label.back"),severity:"secondary",to:"/vue/#/ui"},null,8,["label"])])])])]),_:1},8,["title"])}}});const K=E(G,[["__scopeId","data-v-c6ad00d1"]]);export{K as default};
