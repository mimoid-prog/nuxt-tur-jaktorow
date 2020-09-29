<template>
  <div>
    <h2 class="secondaryTitle viewTitle">Błąd 404</h2>
    <h2 class="viewTitle">nie ma takiej podstrony</h2>
    <Warning class="warning-icon" />
  </div>
</template>

<script>
import Warning from '~/assets/svgs/warning.svg';

export default {
  head: {
    title: 'Błąd 404',
    meta: [
      {
        name: 'description',
        content: 'Nie znaleziono takiej podstrony.',
      },
    ],
  },
  name: 'error',
  components: {
    Warning,
  },
};
</script>

<style lang="scss" scoped>
.warning-icon {
  width: 100px;
  display: block;
  margin: 10px auto 0;
}
</style>
