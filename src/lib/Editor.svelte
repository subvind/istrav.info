<script lang="ts">
	import {onMount} from 'svelte'

	export let value = `// nothing`
	const options = {
		mode: "markdown",
		lineNumbers: true,
		value
	}
	let editor: any
	let cursor_activity = false
	
	let CodeMirror: any

	export function onChange (value: string) {
		options.value = value
	}

	onMount(async ()=>{
		console.log("Editor: ", editor)

		await import('codemirror/mode/markdown/markdown.js');
		await import('codemirror/mode/javascript/javascript.js');
		const module = await import('./CodeMirror.svelte');
		CodeMirror = module.default;
	})
	
	function cursorMoved(event: any) {
		cursor_activity = true
		console.log('cursor activity')
		// console.log(event.detail)	
	}
	
	function changed(event: any) {
		let change = editor.getValue()
		console.log('changed', change)
		value = change
		// console.log(event.detail)
	}
</script>

<svelte:component this={CodeMirror} on:activity={cursorMoved} on:change={changed} bind:editor {options} class="editor" />

<!-- 
<p>
	Cursor Activity: {cursor_activity}
</p>
<div>
	<button on:click={() => editor.execCommand('selectAll')}>
		Select All
	</button>	
	<button on:click={() => editor.setCursor(0)}>
		Cursor at Start
	</button>	
	<button on:click={() => editor.setCursor(editor.getValue().length)}>
		Cursor at End
	</button>	
</div>
-->

<style>
	:global(.editor) {
		font-size: 1.1em;
		height: 100%;
	}
</style>