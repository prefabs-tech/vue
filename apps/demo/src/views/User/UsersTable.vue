<template>
  <UserPage :title="$t('user.label.usersTable')" class="demo-users-table">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/user')"
      />
    </template>

    <section>
      <h2>{{ $t("user.label.basic") }}</h2>

      <div class="section-content">
        <UsersTable
          id="users-table"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :invitation-modal-title="$t('user.label.inviteUser')"
          :users="allUsers"
          :visible-columns="visibleColumns"
          persist-state
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;UsersTable
              id="users-table"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :users="users"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite a user"
              persist-state
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { UsersTable } from "@prefabs.tech/vue3-user";

          import { allUsers } from "./data";

          const visibleColumns = [
            "email",
            "name",
            "roles",
            "signedUpAt",
            "disabled",
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UserPage>
</template>

<script setup lang="ts">
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { UsersTable } from "@prefabs.tech/vue3-user";

import { allUsers } from "./data";
import UserPage from "./UserPage.vue";

const visibleColumns = ["email", "name", "roles", "signedUpAt", "disabled"];
</script>
