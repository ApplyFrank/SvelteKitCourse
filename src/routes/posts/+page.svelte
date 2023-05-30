<script lang="ts">
	import { onDestroy, onMount } from "svelte"

    onMount(() => console.log('Posts page mount')) 
    onDestroy(() => console.log('Posts page destroy'))
</script>

<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/posts">Posts</a>
        </li>
    </ul>
</nav>

<h1>Posts page</h1>