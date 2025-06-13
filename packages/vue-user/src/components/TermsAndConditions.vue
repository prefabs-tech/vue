<template>
  <div v-if="hasCheckbox" :class="`field ${name}`">
    <div class="input-field-checkbox">
      <Checkbox :name="name" :label="label" @update:model-value="onChange" />

      <slot>
        <template v-if="!label">
          <TermsText />
        </template>
      </slot>
    </div>
  </div>
  <p v-else :class="name" :aria-label="name">
    <slot>
      <template v-if="label">{{ label }}</template>
      <template v-else>
        <TermsText />
      </template>
    </slot>
  </p>
</template>

<script lang="ts">
// eslint-disable-next-line vue/one-component-per-file
export default {
  name: "TermsAndConditions",
};
</script>

<script setup lang="ts">
import { Checkbox } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { defineComponent, h } from "vue";
import { RouterLink, useRouter } from "vue-router";

import { useTranslations } from "../index";

const props = defineProps({
  hasCheckbox: {
    default: true,
    type: Boolean,
  },
  label: {
    default: undefined,
    required: false,
    type: String,
  },
  name: {
    default: "terms-and-conditions",
    type: String,
  },
  route: {
    default: "",
    type: String,
  },
});

const emit = defineEmits(["update:check"]);

const messages = useTranslations();

const router = useRouter();

const { t } = useI18n({ messages });

const isInternalRoute = () => {
  return router
    .getRoutes()
    .some(
      (routeData) =>
        routeData.name === props.route || routeData.path === props.route,
    );
};

// eslint-disable-next-line vue/one-component-per-file
const TermsText = defineComponent({
  name: "TermsText",
  setup() {
    return () =>
      h("div", { class: "terms-and-conditions" }, [
        t("user.signup.form.termsAndConditions.prefix") + " ",
        isInternalRoute()
          ? h(RouterLink, { to: props.route }, () =>
              t("user.signup.form.termsAndConditions.infix"),
            )
          : h("a", { href: props.route, target: "_blank" }, [
              t("user.signup.form.termsAndConditions.infix"),
            ]),
        " " + t("user.signup.form.termsAndConditions.suffix"),
      ]);
  },
});

const onChange = (value: boolean) => {
  emit("update:check", value);
};
</script>
<style lang="css">
.input-field-checkbox {
  align-items: baseline;
  color: #525252;
  display: flex;
  font-size: 14px;
  gap: 0.5rem;
  line-height: 1.35;
}

.input-field-checkbox input {
  width: fit-content;
}

.signup .terms-and-conditions a {
  color: var(--dz-primary-color, #1c4786);
  text-decoration: underline;
}

.signup .terms-and-conditions input[type="checkbox"],
.signup .terms-and-conditions input[type="checkbox"]:focus-visible {
  box-shadow: none;
  cursor: pointer;
  height: fit-content;
}
</style>
