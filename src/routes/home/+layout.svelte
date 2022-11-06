<script lang="ts">
	import Footer from '$lib/Footer.svelte';
</script>

<div class="row" style="height: 100%;">
  <div class="col s12 m12 l7" style="height: 100%;">
    <slot></slot>
  </div>
  <div class="col s0 m0 l5" style="height: 100%; padding: 0;">
    <div class="sidebar">
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
	}
</style>