<script setup>
import countries from "./countries.json";
console.log('Total countries:', countries.length);
console.table(countries, ['code', 'i18n.en']);
</script>