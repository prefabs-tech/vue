<template>
  <Page :title="$t('ui.button.title')" class="demo-button">
    <section>
      <h2>{{ $t("ui.button.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;BasicButton label="Click me" @click="onClick" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { BasicButton } from "@dzangolab/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <BasicButton
            :label="$t('ui.button.label.clickMe')"
            @click="onClick()"
          />

          <span>{{ currentTime }}</span>
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.buttonWithChild") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;BasicButton children&gt;
              &lt;template #buttonContent&gt;
                &lt;span&gt;Click me&lt;/span&gt;
              &lt;/template&gt;
            &lt;/BasicButton&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { BasicButton } from "@dzangolab/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <BasicButton children>
            <template #buttonContent>
              <span>{{ $t("ui.button.label.clickMe") }}</span>
            </template>
          </BasicButton>
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.severity") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;BasicButton label="Primary" severity="primary" /&gt;
            &lt;BasicButton label="Secondary" severity="secondary" /&gt;
            &lt;BasicButton label="Alternate" severity="alternate" /&gt;
            &lt;BasicButton label="Success" severity="success" label="Success" /&gt;
            &lt;BasicButton label="Danger" severity="danger" label="Danger" /&gt;
            &lt;BasicButton label="Warning" severity="warning" label="Warning" /&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { BasicButton } from "@dzangolab/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <BasicButton
            severity="primary"
            :label="$t('ui.button.label.primary')"
          />

          <BasicButton
            severity="secondary"
            :label="$t('ui.button.label.secondary')"
          />

          <BasicButton
            severity="alternate"
            :label="$t('ui.button.label.alternate')"
          />

          <BasicButton
            severity="success"
            :label="$t('ui.button.label.success')"
          />

          <BasicButton
            severity="danger"
            :label="$t('ui.button.label.danger')"
          />

          <BasicButton
            severity="warning"
            :label="$t('ui.button.label.warning')"
          />
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.size") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;BasicButton label="Small" size="small" /&gt;
            &lt;BasicButton label="Medium" size="medium" /&gt;
            &lt;BasicButton label="Large" size="large" /&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { BasicButton } from "@dzangolab/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <BasicButton size="small" :label="$t('ui.button.label.small')" />
          <BasicButton size="medium" :label="$t('ui.button.label.medium')" />
          <BasicButton size="large" :label="$t('ui.button.label.large')" />
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.variant") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;BasicButton label="Text only" size="medium" variant="textOnly" /&gt;
            &lt;BasicButton label="Outlined" size="medium" variant="outlined" /&gt;
            &lt;BasicButton label="Default" size="medium" /&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { BasicButton } from "@dzangolab/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <BasicButton
            size="medium"
            :label="$t('ui.button.label.textOnly')"
            variant="textOnly"
          />

          <BasicButton
            size="medium"
            :label="$t('ui.button.label.outlined')"
            variant="outlined"
          />

          <BasicButton size="medium" :label="$t('ui.button.label.default')" />
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.icons.iconName") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;BasicButton icon-right="pi pi-user" severity="secondary" variant="textOnly" /&gt;
            &lt;BasicButton icon-right="pi pi-user" variant="outlined" /&gt;
            &lt;BasicButton icon-right="pi pi-user" severity="secondary" variant="filled" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { BasicButton } from "@dzangolab/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div className="container">
          <BasicButton
            variant="textOnly"
            severity="secondary"
            icon-left="pi pi-user"
          />

          <BasicButton
            variant="outlined"
            severity="secondary"
            icon-left="pi pi-user"
          />

          <BasicButton variant="filled" icon-left="pi pi-user" />
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.icons.iconElement") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;BasicButton icon-left="true" rounded severity="secondary" variant="textOnly"&gt;
                &lt;template #iconLeft&gt;
                  &lt;i class="pi pi-user" &gt;
                &lt;/template&gt;
            &lt;/BasicButton&gt;

            &lt;BasicButton icon-right="true" rounded variant="outlined"&gt;
              &lt;template #iconRight&gt;
                &lt;i class="pi pi-user" &gt;
              &lt;/template&gt;
            &lt;/BasicButton&gt;

            &lt;BasicButton icon-right="true" rounded severity="secondary" variant="filled"&gt;
                &lt;template #iconRight&gt;
                  &lt;i class="pi pi-user" &gt;
                &lt;/template&gt;
            &lt;/BasicButton&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { BasicButton } from "@dzangolab/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div className="container">
          <BasicButton
            variant="textOnly"
            severity="secondary"
            icon-left="true"
            rounded
          >
            <template #iconLeft>
              <i class="pi pi-user" />
            </template>
          </BasicButton>

          <BasicButton
            severity="secondary"
            variant="outlined"
            icon-right="true"
            rounded
          >
            <template #iconRight>
              <i class="pi pi-user" />
            </template>
          </BasicButton>

          <BasicButton icon-right="true" variant="filled" rounded>
            <template #iconRight>
              <i class="pi pi-user" />
            </template>
          </BasicButton>
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.icons.iconWithText") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;BasicButton label="Text only" icon-left="pi pi-user" variant="textOnly" /&gt;
            &lt;BasicButton label="Outlined" icon-left="pi pi-user" variant="outlined" /&gt;
            &lt;BasicButton label="Default" icon-left="pi pi-user" variant="filled" /&gt;
          &lt;/template&gt; 

          &lt;template&gt; 
            &lt;BasicButton label="Text only" icon-right="pi pi-user" rounded variant="textOnly" /&gt;
            &lt;BasicButton label="Outlined" icon-right="pi pi-user" rounded variant="outlined" /&gt;
            &lt;BasicButton label="Default" icon-right="pi pi-user" rounded variant="filled" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt; 
            import { BasicButton } from "@dzangolab/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <BasicButton
            :label="$t('ui.button.label.textOnly')"
            icon-left="pi pi-user"
            variant="textOnly"
          />

          <BasicButton
            :label="$t('ui.button.label.outlined')"
            icon-left="pi pi-user"
            variant="outlined"
          />

          <BasicButton
            :label="$t('ui.button.label.default')"
            icon-left="pi pi-user"
            variant="filled"
          />
        </div>

        <div class="container">
          <BasicButton
            :label="$t('ui.button.label.textOnly')"
            icon-right="pi pi-user"
            rounded
            variant="textOnly"
          />

          <BasicButton
            :label="$t('ui.button.label.outlined')"
            icon-right="pi pi-user"
            rounded
            variant="outlined"
          />

          <BasicButton
            :label="$t('ui.button.label.default')"
            icon-right="pi pi-user"
            rounded
            variant="filled"
          />
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.link") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;BasicButton label="home" to="/" /&gt;
            &lt;BasicButton label="back" severity="secondary" to="/ui" /&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { BasicButton } from "@dzangolab/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <BasicButton :label="$t('ui.button.label.home')" to="/" />
          <BasicButton
            :label="$t('ui.button.label.back')"
            severity="secondary"
            to="/vue/#/ui"
          />
        </div>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { BasicButton } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const currentTime = ref(undefined as unknown as Date);

function onClick() {
  currentTime.value = new Date();
}
</script>

<style lang="css" scoped>
.demo-button .container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-button section {
  margin-bottom: 2.5em;
}

.demo-button .section-content {
  display: grid;
  gap: 1.5rem;
}
</style>
