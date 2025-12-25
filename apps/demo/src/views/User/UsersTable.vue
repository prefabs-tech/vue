<template>
  <UserPage :title="$t('user.label.usersTable')" class="demo-users-table">
    <section>
      <h2>{{ $t("user.label.basic") }}</h2>

      <div class="section-content">
        <UsersTable
          id="users-table"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :invitation-modal-title="$t('user.label.inviteUser')"
          :users="allUsers"
          :visible-columns="visibleColumns"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;UsersTable
              id="users-table"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :users="users"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite user"
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
import { UsersTable } from "@prefabs.tech/vue3-user";

import { allUsers } from "./data";
import UserPage from "./UserPage.vue";

const visibleColumns = ["email", "name", "roles", "signedUpAt", "disabled"];
</script>
