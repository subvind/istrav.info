
<script lang="ts">
	import { onMount } from "svelte";
	import Editor from "$lib/Editor.svelte";

	let messages: any = [
	  `> help`,
	]
	let message = messages.join('\n')
	let log  = 'Hello World!'

	let socket: any
	onMount(() => {
		socket = io('https://istrav.dev');

		socket.on('connect', function () {
			console.log('Connected');

			socket.emit('my-event', '> help');
		});
		socket.on('my-event', function (data) {
			message = `${message}\n${data}`
			console.log('event', data);
			onChangeTimeline(message)
		});
		socket.on('exception', function (data) {
			console.log('event', data);
		});
		socket.on('disconnect', function () {
			console.log('Disconnected');
		});
	})

	function submit () {
		message = `${message}\n${log}`
		let payload = {
			container: 'test',
			language: 'en',
			message: log,
			verbose: false
		}
		socket.emit('my-event', payload);
		log = ''
		onChangeTimeline(message)
		onChangeLog(log)
	}

	let onChangeTimeline: any;
	let onChangeLog: any;
</script>
	
<svelte:head>
	<title>Information - isTrav</title>
	<meta name="description" content="isTrav's natural language processor and artificial intelligence is trained to know how to use our software and is especially talented when it comes to networks." />
</svelte:head>

<div class="card" style="background: #ee6e73; color: #000; margin: 0.5em;">
	<div class="card-content">
		<a href="https://github.com/trabur" class="btn btn-small grey right black-text" target="_blank">audience</a>
		<div class="card-title">What's happening?</div>
		<div class="card-description">(everyone can reply)</div>
		<br />
		<Editor bind:value={log} bind:onChange={onChangeLog} />
	</div>
	<div class="card-action log-action">
		<a href="https://github.com/trabur" class="btn btn-small btn-floating white" target="_blank"><i class="material-icons black-text">movie</i></a>
		<a href="https://github.com/trabur" class="btn btn-small btn-floating white" target="_blank"><i class="material-icons black-text">gif</i></a>
		<a href="https://github.com/trabur" class="btn btn-small btn-floating white" target="_blank"><i class="material-icons black-text">poll</i></a>
		<a href="https://github.com/trabur" class="btn btn-small btn-floating white" target="_blank"><i class="material-icons black-text">insert_emoticon</i></a>
		<button on:click={() => submit()} class="btn btn right white black-text" target="_blank">submit</button>
	</div>
</div>

<div class="refresh">
	<button class="btn black">Show 100 Intel</button>
</div>

<div class="card">
	<Editor bind:value={message} bind:onChange={onChangeTimeline} />
</div>
<br />

<style>
	.refresh {
		border-top: 1px solid #333;
		border-bottom: 1px solid #333;
		text-align: center;
		padding: 0.5em;
	}

	.log-action {
		border-top: 1px solid #000;
		background: #ee6e73;
	}
</style>