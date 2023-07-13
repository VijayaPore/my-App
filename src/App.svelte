<script>
	import Navbar from "./components/Navbar.svelte"
</script>

<Navbar />
<main>
	
</main>

<style>
	:global(*){
        font-family:'Courier New', Courier, monospace;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: white;
	}

	:global(:root){
		--primary:red;
		--secondary: yellow;
		--dark: black;
		--light: white;
	}

	:global(body){
		background-color: #555555; 

} 


</style>