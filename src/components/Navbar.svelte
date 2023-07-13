<script>
    let isMenuOpen = true;

    function toggleMenu(){
        isMenuOpen = !isMenuOpen;
    }
    let current = 0;
</script>

<div class="navbar">
    <a href="/" class="logo"><h1>Logo</h1></a>
    <nav class:open={isMenuOpen}>
        <ul>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => (isMenuOpen = false)}><a class:current={current === 0} on:click={() => (current = 0)} href="/">Home</a></li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => (isMenuOpen = false)}><a class:current={current === 1} on:click={() => (current = 1)} href="/">Features</a></li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => (isMenuOpen = false)}><a class:current={current === 2} on:click={() => (current = 2)} href="/">Pricing</a></li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => (isMenuOpen = false)}><a class:current={current === 3} on:click={() => (current = 3)} href="/">Blog</a></li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => (isMenuOpen = false)} class="sign-in-btn"><a on:click={() => (current = 4)} href="/">Sign In</a></li>
        </ul>
    </nav>
    <div>
        <button class="burger" on:click={toggleMenu}>
        <div class="bar-1" />
        <div class="bar-2" />
        <div class="bar-3" />
        </button>
</div>
</div>

<style>
    .navbar {
        background-color: var(--dark);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 4rem;
    }

    .logo {
        margin-left: 6vw;
    }

    nav {
        display: none;
    }

    nav.open {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--dark);
        width: 100%;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5vh;
        margin-top: 2vh;
        margin-bottom: 4vh;
        list-style: none;
        font-size: 1.1rem;
    }

    .current {
        position: relative;
    }

    .current::after {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
    }

    .sign-in-btn {
        background-color: var(--primary);
        padding: 0.4rem 1rem;
        border-radius: 10px;
        font-weight: 500;
    }

    .burger {
        height: 28px;
        aspect-ratio: 1;
        border: 2px solid var(--light);
        background-color: transparent;
        border-radius: 5px;
        margin-right: 6vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .burger > div {
        height: 2px;
        width: 14px;
        background-color: var(--light);
        position: absolute;
    }

    .bar-1{
        transform: translate(-5px);
    }

    .bar-3{
        transform: translate(5px);
    }
</style>