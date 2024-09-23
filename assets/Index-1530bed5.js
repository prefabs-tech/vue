import{d as _,e as u,o as w,c as h,w as c,a as e,t as l,f as o,g as i,h as f,a5 as b,Y as M,Z as g,a6 as C,r as d,_ as x}from"./index-45a747cd.js";const $={class:"section-content"},k={class:"container"},y=_({__name:"Index",setup(B){const a=u(void 0),t=u(!1);function m(){a.value=new Date,t.value=!1}return(s,n)=>{const v=d("SshPre"),p=d("Page");return w(),h(p,{title:s.$t("ui.confirmationModal.title"),class:"demo"},{default:c(()=>[e("section",null,[e("h2",null,l(s.$t("ui.confirmationModal.usage.basic")),1),o(),e("div",$,[i(v,{language:"html-vue"},{default:c(()=>[o(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = false"
              />
              <span>`+l(a.value)+`</span>
            </div>

            <ConfirmationModal
              v-show="showModal"
              @on:close="showModal = false"
              @on:confirm="onConfirm()"
            />
          </template> 

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);

            function onConfirm() {
              currentTime.value = new Date();
              showModal.value = false;
            }
          <\/script>
        `,1)]),_:1}),o(),e("div",k,[i(f(b),{label:s.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[0]||(n[0]=r=>t.value=!0)},null,8,["label"]),o(),e("span",null,l(a.value),1)]),o(),M(i(f(C),{"onOn:close":n[1]||(n[1]=r=>t.value=!1),"onOn:confirm":n[2]||(n[2]=r=>m())},null,512),[[g,t.value]])])])]),_:1},8,["title"])}}});const I=x(y,[["__scopeId","data-v-2ba0b5f6"]]);export{I as default};
