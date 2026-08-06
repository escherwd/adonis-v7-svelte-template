<script>
// export let error

const { error } = $props();
</script>

<div>
  <div class="container">
    <div class="title">Server Error</div>

    <span>{error.message}</span>
  </div>
</div>