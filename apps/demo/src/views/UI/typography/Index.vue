<template>
  <UiPage :title="$t('ui.typography.title')">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back" type="button">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <h2>Heading level 2</h2>
    <section>
      <h3>Section h3 heading</h3>
      <section>
        <h4>Sub-section h4 heading</h4>
        <section>
          <h5>Sub-section h5 heading</h5>
          <section>
            <h6>Sub-section h6 heading</h6>
            <p>
              Vehicula curabitur ultrices a parturient elementum urna sed
              condimentum suspendisse sodales a litora a egestas.
            </p>
            <p>
              A vel nisl magna ut faucibus condimentum quis parturient ipsum eu
              nec fusce ullamcorper dis luctus id egestas vestibulum a.
              Imperdiet augue adipiscing eu est ullamcorper parturient donec
              potenti parturient vestibulum class tincidunt scelerisque mus
              ultricies accumsan nullam consectetur at cursus vestibulum laoreet
              morbi. Fermentum himenaeos cras scelerisque fermentum parturient
              blandit blandit adipiscing est id metus at id suspendisse conubia
              auctor sociosqu a semper odio amet a arcu diam a dis. Mauris
              hendrerit a gravida dictum torquent scelerisque mi a in magnis
              nulla a litora a eleifend. Iaculis luctus condimentum nam
              vestibulum metus a quisque consequat massa augue a a venenatis
              parturient ut fringilla enim accumsan luctus parturient a
              condimentum sapien fermentum nibh. Netus odio sem nisi blandit
              adipiscing suspendisse senectus at erat eleifend laoreet donec
              lorem magnis habitant.
            </p>
          </section>
          <p>
            Vehicula curabitur ultrices a parturient elementum urna sed
            condimentum suspendisse sodales a litora a egestas.
          </p>
        </section>
        <p>
          Vehicula curabitur ultrices a parturient elementum urna sed
          condimentum suspendisse sodales a litora a egestas.
        </p>
      </section>
      <p>
        Vehicula curabitur ultrices a parturient elementum urna sed condimentum
        suspendisse sodales a litora a egestas.
      </p>
    </section>
  </UiPage>
</template>

<script lang="ts">
export default {
  name: "TypographyPage",
};
</script>

<script lang="ts" setup>
import UiPage from "../UiPage.vue";
</script>
