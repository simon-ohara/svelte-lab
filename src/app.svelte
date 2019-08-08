<script lang="ts">
  import Button from '@/button.svelte';
  export let title: string = 'Default Title';
</script>

<style lang="scss">
  $color: purple;

  h3 {
    color: $color;
  }
</style>

<h3>{title}</h3>
<Button label="Save Button"/>
