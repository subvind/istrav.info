<script lang="ts">
	import Search from '$lib/Search.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="row" style="height: 100%;">
  <div class="col s12 m12 l7" style="height: 100%; padding: 0;">
    <slot></slot>
  </div>
  <div class="col s0 m0 l5" style="height: 100%; padding: 0;">
    <div class="sidebar">
      <Search />
      <Footer />
    </div>
  </div>
</div>

<style>
	.sidebar {
		border-left: 1px solid #333;
		position: fixed;
		overflow-y: auto;
		overflow-x: hidden;
    height: 100%;
    padding-left: 1em;
	}
</style>