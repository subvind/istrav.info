<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';
	import '../app.css';
</script>


<Navigation active="home" isOpen={true}/>
<div class="detail">
	<div class="container" style="width: 100%;height: 100%;">
		<slot />
	</div>
</div>

<style>
	.detail {
		height: 100%;
	}
</style>

