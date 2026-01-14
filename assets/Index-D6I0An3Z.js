import{f as m}from"./PrefabsTechVue3Form.es-CYU5iW1w.js";import{d as V,I as k,M as S,J as U,e as A,o as I,i as p,f as o,B as t,h as n,t as d,u}from"./index-oTn7Sb4k.js";import{_ as D}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CEozZe0s.js";import{_ as N}from"./FormPage.vue_vue_type_style_index_0_lang-DbEwy9d9.js";import{f as R}from"./fr-DKjb4DB6.js";import"./PrefabsTechVue3TanstackTable.es-DIWAwKmZ.js";const L="อัฟกานิสถาน",h="แอลเบเนีย",F="แอลจีเรีย",B="อาร์เจนตินา",E="อาร์เมเนีย",T="ออสเตรเลีย",K="ออสเตรีย",O="อาเซอร์ไบจาน",Q="บังกลาเทศ",w="เบลเยียม",G="บราซิล",H="บัลแกเรีย",M="แคนาดา",Z="ชิลี",j="จีน",J="โคลอมเบีย",q="โครเอเชีย",z="เช็ก",X="เดนมาร์ก",Y="อียิปต์",W="ฟินแลนด์",x="ฝรั่งเศส",_="เยอรมนี",ee="กรีซ",te="ฮ่องกง",oe="ฮังการี",le="อินเดีย",ne="อินโดนีเซีย",re="อิหร่าน",se="ไอร์แลนด์",ie="อิสราเอล",pe="อิตาลี",ue="ญี่ปุ่น",ae="เคนยา",de="เกาหลีใต้",me="มาเลเซีย",ce="เม็กซิโก",fe="เนเธอร์แลนด์",ge="นิวซีแลนด์",ve="นอร์เวย์",Ce="ปากีสถาน",ye="ฟิลิปปินส์",Pe="โปแลนด์",be="โปรตุเกส",$e="รัสเซีย",Ve="ซาอุดีอาระเบีย",ke="สิงคโปร์",Se="สเปน",Ue="สวีเดน",Ae={AF:L,AL:h,DZ:F,AR:B,AM:E,AU:T,AT:K,AZ:O,BD:Q,BE:w,BR:G,BG:H,CA:M,CL:Z,CN:j,CO:J,HR:q,CZ:z,DK:X,EG:Y,FI:W,FR:x,DE:_,GR:ee,HK:te,HU:oe,IN:le,ID:ne,IR:re,IE:se,IL:ie,IT:pe,JP:ue,KE:ae,KR:de,MY:me,MX:ce,NL:fe,NZ:ge,NO:ve,PK:Ce,PH:ye,PL:Pe,PT:be,RU:$e,SA:Ve,SG:ke,ES:Se,SE:Ue},Ie={class:"section-content"},De={class:"section-content"},Ne={class:"section-content"},Re={class:"section-content"},Le={class:"section-content"},he={class:"section-content"},Fe={class:"section-content"},Be={class:"section-content"},Ee={class:"section-content"},Te={class:"section-content"},Ke={class:"section-content"},je=V({__name:"Index",setup(Oe){const{locale:c,t:i}=k(),f={fr:R,th:Ae},v=[{default:"[]",description:i("form.documentation.propsDescription.select.exclude"),prop:"exclude",type:"String[]"},{default:"en",description:i("form.documentation.propsDescription.select.fallbackLocale"),prop:"fallbackLocale",type:"String"},{default:"[]",description:i("form.documentation.propsDescription.select.favorites"),prop:"favorites",type:"String[]"},{default:"true",description:i("form.documentation.propsDescription.select.flags"),prop:"flags",type:"Boolean"},{default:"-",description:i("form.documentation.propsDescription.select.flagsPath"),prop:"flagsPath",type:"(code: string) => string"},{default:"left",description:i("form.documentation.propsDescription.select.flagsPosition"),prop:"flagsPosition",type:"left | right | right-edge"},{default:"rectangular",description:i("form.documentation.propsDescription.select.flagsStyle"),prop:"flagsStyle",type:"circle | rectangular | square"},{default:"true",description:i("form.documentation.propsDescription.countryPicker.hasSortedOptions"),prop:"hasSortedOptions",type:"Boolean"},{default:"[]",description:i("form.documentation.propsDescription.select.include"),prop:"include",type:"String[]"},{default:"true",description:i("form.documentation.propsDescription.select.includeFavorites"),prop:"includeFavorites",type:"Boolean"},{default:"en",description:i("form.documentation.propsDescription.select.locale"),prop:"locale",type:"String"},{default:"{ en: defaultEnCatalogue }",description:i("form.documentation.propsDescription.select.locales"),prop:"locales",type:"Record<string, Record<string, string>>"},{default:"-",description:i("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | Number | Array<String|Number> | undefined"},{default:"false",description:i("form.documentation.propsDescription.select.multiple"),prop:"multiple",type:"Boolean"},{default:"-",description:i("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"}],C=[{description:i("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | undefined"}],r=S({basic:void 0,custom:[],customFlags:void 0,customLocale:[],excludedCountries:[],flags:void 0,includedCountries:[],multiselect:[]}),y=["US","AU","QA","IR","CI","CA"],g=["US","AU","QA","IR","CI","CA","NP","IN"],P=["US","CA","FR","AU","NP"],b=[{description:i("form.documentation.slotDescription.countryPicker.option"),name:"option",props:"{ multiple: boolean, option: NormalizedSelectOption, selected: boolean }"}],$=l=>`https://flagcdn.com/${l.toLowerCase().trim()}.svg`;return(l,e)=>{const a=U("SshPre");return I(),A(N,{subtitle:l.$t("form.subtitle.countryPicker"),title:l.$t("form.label.countryPicker")},{default:p(()=>[o("section",null,[o("h2",null,d(l.$t("form.label.basicInput")),1),e[12]||(e[12]=t()),o("div",Ie,[n(u(m),{modelValue:r.basic,"onUpdate:modelValue":e[0]||(e[0]=s=>r.basic=s),placeholder:l.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[11]||(e[11]=t()),n(a,{language:"html-vue"},{default:p(()=>e[10]||(e[10]=[t(`
         <template>
            <CountryPicker
              v-model="input"
              placeholder="$t('form.placeholder.country')"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();
          <\/script>
        `)])),_:1})])]),e[42]||(e[42]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.multiselect")),1),e[15]||(e[15]=t()),o("div",De,[n(u(m),{modelValue:r.multiselect,"onUpdate:modelValue":e[1]||(e[1]=s=>r.multiselect=s),placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[14]||(e[14]=t()),n(a,{language:"html-vue"},{default:p(()=>e[13]||(e[13]=[t(`
          <template>
            <CountryPicker
              v-model="input"
              multiple
              placeholder="$t('form.placeholder.countries')"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          <\/script>
        `)])),_:1})])]),e[43]||(e[43]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.customLocale")),1),e[18]||(e[18]=t()),o("div",Ne,[n(u(m),{modelValue:r.customLocale,"onUpdate:modelValue":e[2]||(e[2]=s=>r.customLocale=s),locale:u(c),locales:f,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","locale","placeholder"]),e[17]||(e[17]=t()),n(a,{language:"html-vue"},{default:p(()=>e[16]||(e[16]=[t(`
          <template>
              <CountryPicker
                v-model="input"
                :locale="locale"
                :locales="locales"
                multiple
                placeholder="$t('form.placeholder.countries')"
              />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          import { useI18n } from 'vue-i18n';
          import fr from "./fr.json";
          
          const { locale } = useI18n();
        
          const locales = {
            fr,
          };

          const input = ref();
          <\/script>
        `)])),_:1})])]),e[44]||(e[44]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.fallbackLocale")),1),e[21]||(e[21]=t()),o("div",Re,[n(u(m),{modelValue:r.fallbackDemo,"onUpdate:modelValue":e[3]||(e[3]=s=>r.fallbackDemo=s),locale:u(c),locales:f,placeholder:l.$t("form.placeholder.countries"),"fallback-locale":"th",multiple:""},null,8,["modelValue","locale","placeholder"]),e[20]||(e[20]=t()),n(a,{language:"html-vue"},{default:p(()=>e[19]||(e[19]=[t(`
      <template>
        <CountryPicker
          v-model="input"
          :locale="locale"
          :locales="locales"
          fallback-locale="th"
          multiple
          placeholder="$t('form.placeholder.countries')"
        />
      </template>

      <script setup lang="ts">
      import { ref } from 'vue';
      import { useI18n } from "vue-i18n";
      import fr from "./fr.json";
      import th from "./th.json";
      
      const { locale } = useI18n();

      const locales = {
        fr,
        th,
      };
      
      const input = ref();
      <\/script>
    `)])),_:1})])]),e[45]||(e[45]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.flagsStyle")),1),e[24]||(e[24]=t()),o("div",Le,[n(u(m),{modelValue:r.flags,"onUpdate:modelValue":e[4]||(e[4]=s=>r.flags=s),placeholder:l.$t("form.placeholder.country"),"flags-position":"right-edge","flags-style":"circle"},null,8,["modelValue","placeholder"]),e[23]||(e[23]=t()),n(a,{language:"html-vue"},{default:p(()=>e[22]||(e[22]=[t(`
         <template>
            <CountryPicker
              v-model="input"
              :placeholder="$t('form.placeholder.country')"
              flags-position="right-edge"
              flags-style="circle"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
          import { useI18n } from "vue-i18n";
                  
          const { locale } = useI18n();

          const input = ref();
          <\/script>
        `)])),_:1})])]),e[46]||(e[46]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.customFlagsPath")),1),e[27]||(e[27]=t()),o("div",he,[n(u(m),{modelValue:r.customFlags,"onUpdate:modelValue":e[5]||(e[5]=s=>r.customFlags=s),"flags-path":$,placeholder:l.$t("form.placeholder.country"),"flags-position":"right-edge","flags-style":"circle"},null,8,["modelValue","placeholder"]),e[26]||(e[26]=t()),n(a,{language:"html-vue"},{default:p(()=>e[25]||(e[25]=[t(`
         <template>
            <CountryPicker
              v-model="input"
              :flags-path="flagsPath"
              :placeholder="$t('form.placeholder.country')"
              flags-position="right-edge"
              flags-style="circle"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();

          const flagsPath = (code: string) => {
            return \`https://flagcdn.com/\${code.toLowerCase().trim()}.svg\`;
          };
          <\/script>
        `)])),_:1})])]),e[47]||(e[47]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.include")),1),e[30]||(e[30]=t()),o("div",Fe,[n(u(m),{modelValue:r.includedCountries,"onUpdate:modelValue":e[6]||(e[6]=s=>r.includedCountries=s),include:P,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[29]||(e[29]=t()),n(a,{language:"html-vue"},{default:p(()=>e[28]||(e[28]=[t(`
          <template>
            <CountryPicker
              v-model="input"
              :include="includedCountries"
              multiple
              placeholder="$t('form.placeholder.countries')"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const includedCountries = ["US", "CA", "FR", "AU", "NP"];

          const input = ref();
          <\/script>
        `)])),_:1})])]),e[48]||(e[48]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.exclude")),1),e[33]||(e[33]=t()),o("div",Be,[n(u(m),{modelValue:r.excludedCountries,"onUpdate:modelValue":e[7]||(e[7]=s=>r.excludedCountries=s),exclude:y,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[32]||(e[32]=t()),n(a,{language:"html-vue"},{default:p(()=>e[31]||(e[31]=[t(`
          <template>
            <CountryPicker
              v-model="input"
              :exclude="excludedCountries"
              multiple
              placeholder="$t('form.placeholder.countries')"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          
          const excludedCountries = ["US", "AU", "QA", "IR", "CI", "CA"];
          const input = ref();
          <\/script>
        `)])),_:1})])]),e[49]||(e[49]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.favorites")),1),e[36]||(e[36]=t()),o("div",Ee,[n(u(m),{modelValue:r.favorites,"onUpdate:modelValue":e[8]||(e[8]=s=>r.favorites=s),favorites:g,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[35]||(e[35]=t()),n(a,{language:"html-vue"},{default:p(()=>e[34]||(e[34]=[t(`
          <template>
              <CountryPicker
                v-model="input"
                :favorites="favoritesCountries"
                multiple
                placeholder="$t('form.placeholder.countries')"
              />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          
          const favoritesCountries = ["US", "AU", "QA", "IR", "CI", "CA", "NP", "IN"];

          const input = ref();
          <\/script>
        `)])),_:1})])]),e[50]||(e[50]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.includeFavorites")),1),e[39]||(e[39]=t()),o("div",Te,[n(u(m),{modelValue:r.favorites,"onUpdate:modelValue":e[9]||(e[9]=s=>r.favorites=s),favorites:g,"include-favorites":!1,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[38]||(e[38]=t()),n(a,{language:"html-vue"},{default:p(()=>e[37]||(e[37]=[t(`
          <template>
              <CountryPicker
                v-model="input"
                :favorites="favoritesCountries"
                :include-favorites="false"
                multiple
                placeholder="$t('form.placeholder.countries')"
              />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          
          const favoritesCountries = ["US", "AU", "QA", "IR", "CI", "CA", "NP", "IN"];

          const input = ref();
          <\/script>
        `)])),_:1})])]),e[51]||(e[51]=t()),n(D,{"events-data":C,"props-data":v,"props-table-title":l.$t("common.properties",{value:"CountryPickerProperties"}),"slots-data":b},null,8,["props-table-title"]),e[52]||(e[52]=t()),o("section",null,[o("h2",null,d(l.$t("common.type")),1),e[41]||(e[41]=t()),o("div",Ke,[n(a,{language:"typescript"},{default:p(()=>e[40]||(e[40]=[t(`           
            interface Locales {
              [key: string]: Translation;
            }

            interface Translation {
              [key: string]: string;
            }

            Example locales: 
            { 
              en:{ "US": "USA" }, 
              fr: { "US": "États-Unis" } 
            }
          `)])),_:1})])])]),_:1},8,["subtitle","title"])}}});export{je as default};
