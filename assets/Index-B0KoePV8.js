import{v as E}from"./PrefabsTechVue3Form.es-CJrbuyVl.js";import{ab as rt,ac as at,ad as w,ae as A,af as q,ag as st,ah as V,ai as T,aj as Ce,ak as it,al as M,r as _,am as N,an as te,ao as Y,ap as G,w as oe,aq as ut,ar as ct,as as B,at as mt,au as le,av as ne,aw as re,i as W,ax as ae,ay as Pe,az as pt,aA as ft,aB as se,aC as ie,aD as ue,aE as ce,aF as me,aG as pe,aH as fe,a as d,aI as de,aJ as dt,aK as gt,aL as Ee,aM as vt,d as yt,M as bt,o as kt,e as St,f as C,h as i,t as P,z as r,u as y,O as Ft}from"./index-gsYvP72M.js";import{f as ge,n as ve}from"./np-DQ2uz8tk.js";import{_ as Ct}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CorU4Nr9.js";import{_ as Pt}from"./FormPage.vue_vue_type_style_index_0_lang-hGT_6CDO.js";import"./PrefabsTechVue3TanstackTable.es-ic69Yqey.js";const Et="9.1.10";function ht(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ee().__INTLIFY_PROD_DEVTOOLS__=!1)}function D(o,...n){return st(o,null,void 0)}const Q="__INTLIFY_META__",ye=B("__transrateVNode"),be=B("__datetimeParts"),ke=B("__numberParts"),Lt=B("__setPluralRules"),he=B("__injectWithOption");let Se=0;function Fe(o){return((n,s,f,m)=>o(s,f,q()||void 0,m))}function Le(o,n){const{messages:s,__i18n:f}=n,m=V(s)?s:T(f)?{}:{[o]:{}};if(T(f)&&f.forEach(({locale:p,resource:a})=>{p?(m[p]=m[p]||{},K(a,m[p])):K(a,m)}),n.flatJson)for(const p in m)Ce(m,p)&&it(m[p]);return m}const J=o=>!w(o)||T(o);function K(o,n){if(J(o)||J(n))throw D(20);for(const s in o)Ce(o,s)&&(J(o[s])||J(n[s])?n[s]=o[s]:K(o[s],n[s]))}const Nt=()=>{const o=q();return o&&o.type[Q]?{[Q]:o.type[Q]}:null};function Vt(o={}){const{__root:n}=o,s=n===void 0;let f=M(o.inheritLocale)?o.inheritLocale:!0;const m=_(n&&f?n.locale.value:N(o.locale)?o.locale:"en-US"),p=_(n&&f?n.fallbackLocale.value:N(o.fallbackLocale)||T(o.fallbackLocale)||V(o.fallbackLocale)||o.fallbackLocale===!1?o.fallbackLocale:m.value),a=_(Le(m.value,o)),v=_(V(o.datetimeFormats)?o.datetimeFormats:{[m.value]:{}}),b=_(V(o.numberFormats)?o.numberFormats:{[m.value]:{}});let S=n?n.missingWarn:M(o.missingWarn)||te(o.missingWarn)?o.missingWarn:!0,h=n?n.fallbackWarn:M(o.fallbackWarn)||te(o.fallbackWarn)?o.fallbackWarn:!0,$=n?n.fallbackRoot:M(o.fallbackRoot)?o.fallbackRoot:!0,I=!!o.fallbackFormat,X=Y(o.missing)?o.missing:null,O=Y(o.missing)?Fe(o.missing):null,u=Y(o.postTranslation)?o.postTranslation:null,e=M(o.warnHtmlMessage)?o.warnHtmlMessage:!0,k=!!o.escapeParameter;const g=n?n.modifiers:V(o.modifiers)?o.modifiers:{};let H=o.pluralRules||n&&n.pluralRules,c;function Ne(){return mt({version:Et,locale:m.value,fallbackLocale:p.value,messages:a.value,datetimeFormats:v.value,numberFormats:b.value,modifiers:g,pluralRules:H,missing:O===null?void 0:O,missingWarn:S,fallbackWarn:h,fallbackFormat:I,unresolving:!0,postTranslation:u===null?void 0:u,warnHtmlMessage:e,escapeParameter:k,__datetimeFormatters:V(c)?c.__datetimeFormatters:void 0,__numberFormatters:V(c)?c.__numberFormatters:void 0,__v_emitter:V(c)?c.__v_emitter:void 0,__meta:{framework:"vue"}})}c=Ne(),G(c,m.value,p.value);function Ve(){return[m.value,p.value,a.value,v.value,b.value]}const Te=W({get:()=>m.value,set:t=>{m.value=t,c.locale=m.value}}),De=W({get:()=>p.value,set:t=>{p.value=t,c.fallbackLocale=p.value,G(c,m.value,t)}}),Ae=W(()=>a.value),Ie=W(()=>v.value),Oe=W(()=>b.value);function Re(){return Y(u)?u:null}function Ue(t){u=t,c.postTranslation=t}function $e(){return X}function Me(t){t!==null&&(O=Fe(t)),X=t,c.missing=O}function R(t,l,L,F,Z,j){Ve();let U;if(__INTLIFY_PROD_DEVTOOLS__)try{ae(Nt()),U=t(c)}finally{ae(null)}else U=t(c);if(Pe(U)&&U===pt){const[nt,Sl]=l();return n&&$?F(n):Z(nt)}else{if(j(U))return U;throw D(14)}}function z(...t){return R(l=>ie(l,...t),()=>se(...t),"translate",l=>l.t(...t),l=>l,l=>N(l))}function _e(...t){const[l,L,F]=t;if(F&&!w(F))throw D(15);return z(l,L,A({resolvedMessage:!0},F||{}))}function Ge(...t){return R(l=>me(l,...t),()=>ce(...t),"datetime format",l=>l.d(...t),()=>ue,l=>N(l))}function We(...t){return R(l=>fe(l,...t),()=>pe(...t),"number format",l=>l.n(...t),()=>ue,l=>N(l))}function we(t){return t.map(l=>N(l)?d(de,null,l,0):l)}const Be={normalize:we,interpolate:t=>t,type:"vnode"};function Xe(...t){return R(l=>{let L;const F=l;try{F.processor=Be,L=ie(F,...t)}finally{F.processor=null}return L},()=>se(...t),"translate",l=>l[ye](...t),l=>[d(de,null,l,0)],l=>T(l))}function He(...t){return R(l=>fe(l,...t),()=>pe(...t),"number format",l=>l[ke](...t),()=>[],l=>N(l)||T(l))}function je(...t){return R(l=>me(l,...t),()=>ce(...t),"datetime format",l=>l[be](...t),()=>[],l=>N(l)||T(l))}function Ye(t){H=t,c.pluralRules=H}function Je(t,l){const L=N(l)?l:m.value,F=ee(L);return re(F,t)!==null}function Ke(t){let l=null;const L=ft(c,p.value,m.value);for(let F=0;F<L.length;F++){const Z=a.value[L[F]]||{},j=re(Z,t);if(j!=null){l=j;break}}return l}function Ze(t){const l=Ke(t);return l??(n?n.tm(t)||{}:{})}function ee(t){return a.value[t]||{}}function Qe(t,l){a.value[t]=l,c.messages=a.value}function qe(t,l){a.value[t]=a.value[t]||{},K(l,a.value[t]),c.messages=a.value}function xe(t){return v.value[t]||{}}function ze(t,l){v.value[t]=l,c.datetimeFormats=v.value,ne(c,t,l)}function et(t,l){v.value[t]=A(v.value[t]||{},l),c.datetimeFormats=v.value,ne(c,t,l)}function tt(t){return b.value[t]||{}}function ot(t,l){b.value[t]=l,c.numberFormats=b.value,le(c,t,l)}function lt(t,l){b.value[t]=A(b.value[t]||{},l),c.numberFormats=b.value,le(c,t,l)}return Se++,n&&(oe(n.locale,t=>{f&&(m.value=t,c.locale=t,G(c,m.value,p.value))}),oe(n.fallbackLocale,t=>{f&&(p.value=t,c.fallbackLocale=t,G(c,m.value,p.value))})),{id:Se,locale:Te,fallbackLocale:De,get inheritLocale(){return f},set inheritLocale(t){f=t,t&&n&&(m.value=n.locale.value,p.value=n.fallbackLocale.value,G(c,m.value,p.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:Ae,datetimeFormats:Ie,numberFormats:Oe,get modifiers(){return g},get pluralRules(){return H||{}},get isGlobal(){return s},get missingWarn(){return S},set missingWarn(t){S=t,c.missingWarn=S},get fallbackWarn(){return h},set fallbackWarn(t){h=t,c.fallbackWarn=h},get fallbackRoot(){return $},set fallbackRoot(t){$=t},get fallbackFormat(){return I},set fallbackFormat(t){I=t,c.fallbackFormat=I},get warnHtmlMessage(){return e},set warnHtmlMessage(t){e=t,c.warnHtmlMessage=t},get escapeParameter(){return k},set escapeParameter(t){k=t,c.escapeParameter=t},t:z,rt:_e,d:Ge,n:We,te:Je,tm:Ze,getLocaleMessage:ee,setLocaleMessage:Qe,mergeLocaleMessage:qe,getDateTimeFormat:xe,setDateTimeFormat:ze,mergeDateTimeFormat:et,getNumberFormat:tt,setNumberFormat:ot,mergeNumberFormat:lt,getPostTranslationHandler:Re,setPostTranslationHandler:Ue,getMissingHandler:$e,setMissingHandler:Me,[ye]:Xe,[ke]:He,[be]:je,[Lt]:Ye,[he]:o.__injectWithOption}}const x={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:o=>o==="parent"||o==="global",default:"parent"},i18n:{type:Object}};A({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:o=>Pe(o)||!isNaN(o)}},x);A({value:{type:Number,required:!0},format:{type:[String,Object]}},x);A({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},x);function Tt(o={}){const n=q();if(n==null)throw D(16);if(!n.appContext.app.__VUE_I18N_SYMBOL__)throw D(17);const s=rt(n.appContext.app.__VUE_I18N_SYMBOL__);if(!s)throw D(22);const f=s.mode==="composition"?s.global:s.global.__composer,m=at(o)?"__i18n"in n.type?"local":"global":o.useScope?o.useScope:"local";if(m==="global"){let v=w(o.messages)?o.messages:{};"__i18nGlobal"in n.type&&(v=Le(f.locale.value,{messages:v,__i18n:n.type.__i18nGlobal}));const b=Object.keys(v);if(b.length&&b.forEach(S=>{f.mergeLocaleMessage(S,v[S])}),w(o.datetimeFormats)){const S=Object.keys(o.datetimeFormats);S.length&&S.forEach(h=>{f.mergeDateTimeFormat(h,o.datetimeFormats[h])})}if(w(o.numberFormats)){const S=Object.keys(o.numberFormats);S.length&&S.forEach(h=>{f.mergeNumberFormat(h,o.numberFormats[h])})}return f}if(m==="parent"){let v=Dt(s,n,o.__useComponent);return v==null&&(v=f),v}if(s.mode==="legacy")throw D(18);const p=s;let a=p.__getInstance(n);if(a==null){const v=n.type,b=A({},o);v.__i18n&&(b.__i18n=v.__i18n),f&&(b.__root=f),a=Vt(b),At(p,n),p.__setInstance(n,a)}return a}function Dt(o,n,s=!1){let f=null;const m=n.root;let p=n.parent;for(;p!=null;){const a=o;if(o.mode==="composition")f=a.__getInstance(p);else{const v=a.__getInstance(p);v!=null&&(f=v.__composer),s&&f&&!f[he]&&(f=null)}if(f!=null||m===p)break;p=p.parent}return f}function At(o,n,s){ut(()=>{},n),ct(()=>{o.__deleteInstance(n)},n)}dt(vt);ht();if(__INTLIFY_PROD_DEVTOOLS__){const o=Ee();o.__INTLIFY__=!0,gt(o.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const It="Afghanistan",Ot="Albania",Rt="Angola",Ut="Argentina",$t="Australia",Mt="Belgium",_t="Brazil",Gt="Bulgaria",Wt="Canada",wt="Chile",Bt="China",Xt="Denmark",Ht="Dominican Republic",jt="Egypt",Yt="Spain",Jt="Ethiopia",Kt="Finland",Zt="France",Qt="Germany",qt="Ghana",xt="Greece",zt="India",eo="Indonesia",to="Ireland",oo="Japan",lo="Jordan",no="Kenya",ro="South Korea",ao="Lebanon",so="Lithuania",io="Malaysia",uo="Mexico",co="Netherlands",mo="Nepal",po="New Zealand",fo="Norway",go="Pakistan",vo="Philippines",yo="Poland",bo="Qatar",ko="Romania",So="Russia",Fo="Saudi Arabia",Co="Sweden",Po="Singapore",Eo="Thailand",ho="Turkey",Lo="Ukraine",No="United States",Vo="Vietnam",To="South Africa",Do="Zimbabwe",Ao="Auralis",Io="Borexia",Oo="Cyrenia",Ro="Draxonia",Uo="Eldwyn",$o="Farynth",Mo="Galenor",_o="Helior",Go="Ithoria",Wo="Jorvex",wo="Krythos",Bo="Lumeria",Xo="Mythara",Ho="Novera",jo="Orinthal",Yo="Pyronix",Jo="Quorath",Ko="Ravaryn",Zo="Sylvara",Qo="Thrylos",qo="Ulmaris",xo="Valthera",zo="Wyncrest",el="Xanthera",tl="Yloria",ol="Zephyron",ll={AF:It,AL:Ot,AO:Rt,AR:Ut,AU:$t,BE:Mt,BR:_t,BG:Gt,CA:Wt,CL:wt,CN:Bt,DK:Xt,DO:Ht,EG:jt,ES:Yt,ET:Jt,FI:Kt,FR:Zt,DE:Qt,GH:qt,GR:xt,IN:zt,ID:eo,IE:to,JP:oo,JO:lo,KE:no,KR:ro,LB:ao,LT:so,MY:io,MX:uo,NL:co,NP:mo,NZ:po,NO:fo,PK:go,PH:vo,PL:yo,QA:bo,RO:ko,RU:So,SA:Fo,SE:Co,SG:Po,TH:Eo,TR:ho,UA:Lo,US:No,VN:Vo,ZA:To,ZW:Do,XA:Ao,XB:Io,XC:Oo,XD:Ro,XE:Uo,XF:$o,XG:Mo,XH:_o,XI:Go,XJ:Wo,XK:wo,XL:Bo,XM:Xo,XN:Ho,XO:jo,XP:Yo,XQ:Jo,XR:Ko,XS:Zo,XT:Qo,XU:qo,XV:xo,XW:zo,XX:el,XY:tl,XZ:ol},nl={class:"section-content"},rl={class:"section-content"},al={class:"section-content"},sl={class:"section-content"},il={class:"section-content"},ul={class:"section-content"},cl={class:"section-content"},ml={class:"section-content"},pl={class:"section-content"},fl={class:"section-content"},dl={class:"section-content"},gl={class:"section-content"},vl={class:"section-content"},yl={class:"section-content"},Nl=yt({__name:"Index",setup(o){const{locale:n,t:s}=Tt(),f={en:{...ll,ASEAN:"ASEAN",EU:"European Union"},fr:{...ge,ASEAN:"ASEAN",EU:"Union Européenne"}},m=[{default:"[]",description:s("form.documentation.propsDescription.select.exclude"),prop:"exclude",type:"String[]"},{default:"en",description:s("form.documentation.propsDescription.select.fallbackLocale"),prop:"fallbackLocale",type:"String"},{default:"[]",description:s("form.documentation.propsDescription.select.favorites"),prop:"favorites",type:"String[]"},{default:"true",description:s("form.documentation.propsDescription.select.flags"),prop:"flags",type:"Boolean"},{default:"-",description:s("form.documentation.propsDescription.select.flagsPath"),prop:"flagsPath",type:"(code: string) => string"},{default:"left",description:s("form.documentation.propsDescription.select.flagsPosition"),prop:"flagsPosition",type:"left | right | right-edge"},{default:"rectangular",description:s("form.documentation.propsDescription.select.flagsStyle"),prop:"flagsStyle",type:"circle | rectangular | square"},{default:"-",description:s("form.documentation.propsDescription.countryPicker.groups"),prop:"groups",type:"CountryPickerGroups"},{default:"true",description:s("form.documentation.propsDescription.countryPicker.hasSortedOptions"),prop:"hasSortedOptions",type:"Boolean"},{default:"[]",description:s("form.documentation.propsDescription.select.include"),prop:"include",type:"String[]"},{default:"true",description:s("form.documentation.propsDescription.select.includeFavorites"),prop:"includeFavorites",type:"Boolean"},{default:"en",description:s("form.documentation.propsDescription.select.locale"),prop:"locale",type:"String"},{default:"{ en: defaultEnCatalogue }",description:s("form.documentation.propsDescription.select.locales"),prop:"locales",type:"CountryPickerLocales"},{default:"-",description:s("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | Number | Array<String|Number> | undefined"},{default:"false",description:s("form.documentation.propsDescription.select.multiple"),prop:"multiple",type:"Boolean"},{default:"-",description:s("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"}],p=[{description:s("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | undefined"}],a=Ft({basic:void 0,custom:[],customFlags:void 0,customLocale:void 0,excludedCountries:[],fallback:void 0,flags:void 0,groups:void 0,groupsWithTranslations:void 0,includedCountries:[],multiselect:[]}),v={"North America":["US","CA"],Europe:["FR","DE","IT","ES"]},b=["FR","CN","BR"],S=["NP","US","GB"],h={"North America HQ":["US","CA"],"Offshore Dev Center":["IN","VN","PH"],"European Hubs":["GB","DE","FR"]},$=["US","GB","DE","FR","JP"],I={EU:["FR","DE","IT","ES"],ASEAN:["VN","TH","SG"]},X=[{description:s("form.documentation.slotDescription.countryPicker.option"),name:"option",props:"{ multiple: boolean, option: SelectOption, selected: boolean }"}],O=u=>`https://flagcdn.com/${u.toLowerCase().trim()}.svg`;return(u,e)=>{const k=bt("SshPre");return kt(),St(Pt,{subtitle:u.$t("form.subtitle.countryPicker"),title:u.$t("form.label.countryPicker")},{default:C(()=>[i("section",null,[i("h2",null,P(u.$t("form.label.basicInput")),1),e[15]||(e[15]=r()),i("div",nl,[d(y(E),{modelValue:a.basic,"onUpdate:modelValue":e[0]||(e[0]=g=>a.basic=g),placeholder:u.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[14]||(e[14]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[13]||(e[13]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :placeholder="$t('form.placeholder.country')"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[54]||(e[54]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.multiselect")),1),e[18]||(e[18]=r()),i("div",rl,[d(y(E),{modelValue:a.multiselect,"onUpdate:modelValue":e[1]||(e[1]=g=>a.multiselect=g),placeholder:u.$t("form.placeholder.countries"),name:"multiselect",multiple:""},null,8,["modelValue","placeholder"]),e[17]||(e[17]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[16]||(e[16]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :placeholder="$t('form.placeholder.countries')"
              multiple
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[55]||(e[55]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.customLocale")),1),e[21]||(e[21]=r()),i("div",al,[d(y(E),{modelValue:a.customLocale,"onUpdate:modelValue":e[2]||(e[2]=g=>a.customLocale=g),locales:{np:y(ve)},placeholder:u.$t("form.placeholder.country"),locale:"np",name:"custom-locale"},null,8,["modelValue","locales","placeholder"]),e[20]||(e[20]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[19]||(e[19]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :locale="locale"
              :locales="locales"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';

          import nepaliTranslation from "./np.json";
          
          const locale = "np";
        
          const locales = {
            np: nepaliTranslation,
          };

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[56]||(e[56]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.fallbackLocale")),1),e[24]||(e[24]=r()),i("div",sl,[d(y(E),{modelValue:a.fallback,"onUpdate:modelValue":e[3]||(e[3]=g=>a.fallback=g),locales:{np:y(ve),fr:y(ge)},placeholder:u.$t("form.placeholder.country"),"fallback-locale":"fr",locale:"gb",name:"fallback-locale"},null,8,["modelValue","locales","placeholder"]),e[23]||(e[23]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[22]||(e[22]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :fallback-locale="fallbackLocale"
              :locale="locale"
              :locales="locales"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';

          import frenchTranslation from "./fr.json";
          import nepaliTranslation from "./np.json";
          
          const fallbackLocale = "fr";
          const locale = "gb";
          const locales = {
            fr: frenchTranslation,
            np: nepaliTranslation,
          };
          
          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[57]||(e[57]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.flagsStyle")),1),e[27]||(e[27]=r()),i("div",il,[d(y(E),{modelValue:a.flags,"onUpdate:modelValue":e[4]||(e[4]=g=>a.flags=g),placeholder:u.$t("form.placeholder.country"),"flags-position":"right-edge","flags-style":"circle",name:"flag-country"},null,8,["modelValue","placeholder"]),e[26]||(e[26]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[25]||(e[25]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :placeholder="$t('form.placeholder.country')"
              flags-position="right-edge"
              flags-style="circle"
              name="country"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
          import { useI18n } from "vue-i18n";
                  
          const { locale } = useI18n();

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[58]||(e[58]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.customFlagsPath")),1),e[30]||(e[30]=r()),i("div",ul,[d(y(E),{modelValue:a.customFlags,"onUpdate:modelValue":e[5]||(e[5]=g=>a.customFlags=g),"flags-path":O,placeholder:u.$t("form.placeholder.country"),name:"custom-flag-country"},null,8,["modelValue","placeholder"]),e[29]||(e[29]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[28]||(e[28]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :flags-path="flagsPath"
              :placeholder="$t('form.placeholder.country')"
              name="country"
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
        `,-1)])]),_:1})])]),e[59]||(e[59]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.include")),1),e[33]||(e[33]=r()),i("div",cl,[d(y(E),{modelValue:a.includedCountries,"onUpdate:modelValue":e[6]||(e[6]=g=>a.includedCountries=g),include:$,placeholder:u.$t("form.placeholder.country"),name:"include-country"},null,8,["modelValue","placeholder"]),e[32]||(e[32]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[31]||(e[31]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :include="includedCountries"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const includedCountries = ["US", "GB", "DE", "FR", "JP"];

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[60]||(e[60]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.exclude")),1),e[36]||(e[36]=r()),i("div",ml,[d(y(E),{modelValue:a.excludedCountries,"onUpdate:modelValue":e[7]||(e[7]=g=>a.excludedCountries=g),exclude:b,placeholder:u.$t("form.placeholder.country"),name:"exclude-country"},null,8,["modelValue","placeholder"]),e[35]||(e[35]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[34]||(e[34]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :exclude="excludedCountries"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          
          const excludedCountries = ["FR", "CN", "BR"];
          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[61]||(e[61]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.favorites")),1),e[39]||(e[39]=r()),i("div",pl,[d(y(E),{modelValue:a.favorites,"onUpdate:modelValue":e[8]||(e[8]=g=>a.favorites=g),favorites:S,placeholder:u.$t("form.placeholder.country"),name:"favorites-country"},null,8,["modelValue","placeholder"]),e[38]||(e[38]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[37]||(e[37]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :favorites="favoriteCountries"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          
          const favoriteCountries = ["NP", "US", "GB"];

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[62]||(e[62]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.includeFavorites")),1),e[42]||(e[42]=r()),i("div",fl,[d(y(E),{modelValue:a.includeFavorites,"onUpdate:modelValue":e[9]||(e[9]=g=>a.includeFavorites=g),favorites:S,"include-favorites":!1,placeholder:u.$t("form.placeholder.country"),name:"include-favorites-country"},null,8,["modelValue","placeholder"]),e[41]||(e[41]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[40]||(e[40]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :favorites="favoriteCountries"
              :include-favorites="false"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          
          const favoriteCountries = ["NP", "US", "GB"];

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[63]||(e[63]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.grouping")),1),e[45]||(e[45]=r()),i("div",dl,[d(y(E),{modelValue:a.groups,"onUpdate:modelValue":e[10]||(e[10]=g=>a.groups=g),groups:h,locale:y(n),placeholder:u.$t("form.placeholder.country"),name:"group-country"},null,8,["modelValue","locale","placeholder"]),e[44]||(e[44]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[43]||(e[43]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :groups="groups"
              :locale="locale"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from 'vue';

          const { locale } = useI18n();
          
          const groups = {
            "North America HQ": ["US", "CA"],
            "Offshore Dev Center": ["IN", "VN", "PH"],
            "European Hubs": ["GB", "DE", "FR"],
          };

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[64]||(e[64]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.groupingWithTranslations")),1),e[48]||(e[48]=r()),i("div",gl,[d(y(E),{modelValue:a.groupsWithTranslations,"onUpdate:modelValue":e[11]||(e[11]=g=>a.groupsWithTranslations=g),groups:I,locale:y(n),locales:f,placeholder:u.$t("form.placeholder.country"),name:"translated-country"},null,8,["modelValue","locale","placeholder"]),e[47]||(e[47]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[46]||(e[46]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :groups="groups"
              :locale="locale"
              :locales="locales"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from 'vue';

          import englishTranslation from "./en.json";
          import frenchTranslation from "./fr.json";

          const { locale } = useI18n();

          const groups = {
            EU: ["FR", "DE", "IT", "ES"],
            ASEAN: ["VN", "TH", "SG"],
          };
          const locales = {
            en: {
              ...englishTranslation,
              ASEAN: "ASEAN",
              EU: "European Union",
            },
            fr: {
              ...frenchTranslation,
              ASEAN: "ASEAN",
              EU: "Union Européenne",
            },
          };

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[65]||(e[65]=r()),i("section",null,[i("h2",null,P(u.$t("form.label.groupingWithFavroties")),1),e[51]||(e[51]=r()),i("div",vl,[d(y(E),{modelValue:a.groupsWithFavorites,"onUpdate:modelValue":e[12]||(e[12]=g=>a.groupsWithFavorites=g),favorites:["US","FR"],groups:v,"has-sorted-options":!1,locale:y(n),placeholder:u.$t("form.placeholder.country"),name:"group-favorites-country"},null,8,["modelValue","locale","placeholder"]),e[50]||(e[50]=r()),d(k,{language:"html-vue"},{default:C(()=>[...e[49]||(e[49]=[r(`
          <template>
            <CountryPicker
              v-model="input"
              :favorites="['US', 'FR']"
              :groups="groups"
              :has-sorted-options="false"
              :locale="locale"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from 'vue';

          const { locale } = useI18n();

          const groups = {
            "North America": ["US", "CA"],
            Europe: ["FR", "DE", "IT", "ES"],
          };

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[66]||(e[66]=r()),d(Ct,{"events-data":p,"props-data":m,"props-table-title":u.$t("common.properties",{value:"CountryPickerProperties"}),"slots-data":X},null,8,["props-table-title"]),e[67]||(e[67]=r()),i("section",null,[i("h2",null,P(u.$t("common.type")),1),e[53]||(e[53]=r()),i("div",yl,[d(k,{language:"html-vue"},{default:C(()=>[...e[52]||(e[52]=[r(`           
          type CountryPickerGroups = Record<string, string[]>;
          type CountryPickerLocales = Record<string, CountryPickerTranslation>;
          type CountryPickerTranslation = Record<string, string>;

          Example Locales: 
          { 
            en:{ "US": "USA" }, 
            fr: { "US": "États-Unis" } 
          }

          Example Groups:
          {
            "European Union": ["AT", "BE", "FR", "DE"],
            "North America": ["US", "CA", "MX"]
          }
        `,-1)])]),_:1})])])]),_:1},8,["subtitle","title"])}}});export{Nl as default};
