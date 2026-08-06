<script>
  import { Link } from '@inertiajs/svelte'
</script>

<svelte:head>
  <title>Homepage</title>
</svelte:head>

<div class="bg-amber-50 w-screen h-screen flex items-center justify-center flex-col gap-2">
  <h1 class="text-xl font-semibold">Adonis / Inertia / Svelte</h1>
  <span>This is the home page! Go to <Link href="/about" class="underline">about</Link></span>
</div>
