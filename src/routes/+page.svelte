
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
	<title>Ideal Talent: Ask/manage a team of AI powered IT bots - isTrav</title>
	<meta name="description" content="isTrav's natural language processor and artificial intelligence is trained to know how to use our software and is especially talented when it comes to networks." />
</svelte:head>

<div class="wrapper">
	<div class="pattern"></div>
	<div class="container" style="margin-top: -300px;">
		<h1 class="title" style="color: #fff;">
			Ideal Talent
		</h1>
		<div class="card">
			<div class="card-content">
				<div class="card" style="border: 1em solid #000;">
					<Editor bind:value={message} bind:onChange={onChangeTimeline} />
				</div>
				<br />
				<div class="card" style="background: #ee6e73;">
					<div class="card-content">
						<a href="https://github.com/trabur" class="btn btn-small black right" target="_blank">settings</a>
						<div class="card-title">Ask/manage a team of AI powered IT bots:</div>
						<div class="card-description">(run "> help" for assistance)</div>
						<br />
						<Editor bind:value={log} bind:onChange={onChangeLog} />
					</div>
					<div class="card-action log-action">
						<a href="https://github.com/trabur" class="btn btn-large grey" target="_blank">history</a>
						<a href="https://github.com/trabur" class="btn btn-large grey" target="_blank">templates</a>
						<button on:click={() => submit()} class="btn btn-large right" target="_blank">submit</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<br />
	<br />
	<br />
	<br />
</div>

<style>
	.pattern {
		height: 400px;
		background-color: #000000;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23222222' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		border-bottom: 1em solid #ee6e73;
	}
  .wrapper {
    min-height: 100vh;
  }

	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
	}

	.log-action {
		border-top: 1em solid #000;
		background: #222;
	}
</style>