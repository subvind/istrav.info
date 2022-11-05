<script lang="ts">
	import { page } from '$app/stores';

	let name = 'isTrav'
	let letters: any = null
	let timer: any = null

	function arrayRotate(arr: any, reverse: boolean) {
		if (reverse) arr.unshift(arr.pop());
		else arr.push(arr.shift());
		return arr;
	}

	function go() {
		// console.log('go')
		timer = setInterval(() => {
			let rotate: string[] = letters || name.split('')
			letters = arrayRotate(rotate, true)
			name = letters.join('')
		}, 500)
	}

	function stop() {
		// console.log('stop')
		clearInterval(timer)
	}
</script>

<header on:mouseenter={() => go()} on:mouseleave={() => stop()}>
	<div class="row top">
		<div class="col m1" style="background: #111; text-align: center;">
			<nav class="white">
				<div class="nav-wrapper" style="text-align: center;">
					<ul>
						<li style="float: none;">
							<a href="/about" style="height: 64px;">
								<img src="/anchor.png" alt="about" style="height: 50px; margin: 0.5em 0;">
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<div class="col m11">
			<nav class="red lighten-2">
				<div class="nav-wrapper">
					<a href="/" class="brand-logo center">{name}</a>
		
					<a href="//meta.istrav.net" class="btn black white-text left" style="margin: 1em;">community</a>
					<!-- <a href="//istrav.pro" class="btn right white black-text " style="margin: 1em 0.5em;">pro</a>
					<a href="/ideal-talent" class="btn right white black-text " style="margin: 1em 0.5em;">it</a> -->
					<ul id="nav-mobile" class="left hide-on-med-and-down">
						<li class:active={$page.url.pathname.startsWith('/client-area')}>
							<a sveltekit:prefetch href="/client-area">Client Area</a>
						</li>
						<li class:active={$page.url.pathname.startsWith('/pricing')}>
							<a sveltekit:prefetch href="/pricing">Pricing</a>
						</li>
					</ul>
					<ul id="nav-mobile" class="right hide-on-med-and-down">
						<li class:active={$page.url.pathname === '/production'}>
							<a sveltekit:prefetch href="/production">Production</a>
						</li>
						<li class:active={$page.url.pathname === '/innovation'}>
							<a sveltekit:prefetch href="/innovation">Innovation</a>
						</li>
						<li class:active={$page.url.pathname.startsWith('/apps')}>
							<a sveltekit:prefetch href="/apps">Apps</a>
						</li>
						<li class:active={$page.url.pathname.startsWith('/platforms')}>
							<a sveltekit:prefetch href="/platforms">Platforms</a>
						</li>
						<li class:active={$page.url.pathname.startsWith('/projects')}>
							<a sveltekit:prefetch href="/projects">Projects</a>
						</li>
					</ul>
				<div>
			</nav>

		</div>
	</div>
</header>

<style>
	header {
		height: 4.25em;
	}
  .top {
    z-index: 1000;
    position: fixed;
    right: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
  .top > .col {
    margin: 0;
    padding: 0;
  }

  .top > .col .row {
    margin: 0;
  }
</style>