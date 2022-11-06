<script>
  import { onMount } from "svelte";

  let instances
  export let active
  export let isOpen
  $: { reMount(isOpen) }
  function reMount (value) {
    console.log('remount', value)
    if (instances) {
      if (value) {
        instances[0].open()
      } else {
        instances[0].close()
      }
    }
  }

  onMount(() => {
    var elems = document.querySelectorAll('.sidenav');
    instances = window['M'].Sidenav.init(elems, {
      isOpen: true,
      isFixed: true
    });
    if (isOpen) {
      instances[0].open()
    }
  })
</script>

<ul id="slide-out" class="sidenav sidenav-fixed" style="width: 250px;">
  <div style="padding: 0 1em;">
    <a href="/" style="color: #ccc;">
      <img src="/anchor.png" alt="isTrav" style="width: 75px; padding: 1em">
    </a>
  </div>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <li class={active === 'home' ? 'active' : null}><a href="/home" on:click={() => {active = 'home'}} class="waves-effect"><i class={`material-icons`}>home</i>Home</a></li>
  <li class={active === 'architecture' ? 'active' : null}><a href="/architecture" on:click={() => {active = 'architecture'}} class="waves-effect"><i class={`material-icons`}>directions_boat</i>Explore</a></li>
  <li class={active === 'infrastructure' ? 'active' : null}><a href="/infrastructure" on:click={() => {active = 'infrastructure'}} class="waves-effect"><i class={`material-icons`}>notifications</i>Notifications</a></li>
  <li class={active === 'engineering' ? 'active' : null}><a href="/engineering" on:click={() => {active = 'engineering'}} class="waves-effect"><i class={`material-icons`}>message</i>Messages</a></li>
  <li class={active === 'construction' ? 'active' : null}><a href="/construction" on:click={() => {active = 'construction'}} class="waves-effect"><i class={`material-icons`}>bookmark</i>Bookmarks</a></li>
  <li class={active === 'construction' ? 'active' : null}><a href="/construction" on:click={() => {active = 'construction'}} class="waves-effect"><i class={`material-icons`}>format_list_bulleted</i>Lists</a></li>
  <li class={active === 'construction' ? 'active' : null}><a href="/construction" on:click={() => {active = 'construction'}} class="waves-effect"><i class={`material-icons`}>person</i>Profile</a></li>
  <li class={active === 'construction' ? 'active' : null}><a href="/construction" on:click={() => {active = 'construction'}} class="waves-effect"><i class={`material-icons`}>more_vert</i>More</a></li>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <div style="margin: 0.5em;">
    <a href="/" class="btn btn-large red lighten-2" style="width: 100%;">+information</a>
  </div>
</ul>

<style>
  #slide-out {
    background: #000;
    border-right: 1px solid #333;
  }

  .sidenav li:hover {
    background: #222;
  }

  .sidenav li.active {
    background: #333;
  }

  .sidenav li > a {
    padding-right: 0;
    color: #ccc;
  }

  .sidenav li > a > i {
    color: #ccc;
  }
</style>