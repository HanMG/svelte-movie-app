<script>
    import { fade } from 'svelte/transition'
    import Router, { location } from 'svelte-spa-router'    
    import Header from '~/components/Header.svelte'
    import routes from '~/routes'
    import Footer from '~/components/Footer.svelte'   
</script>

<Header />
{#key $location}
    <div in:fade>
        <Router 
            {routes}
            restoreScrollState={true} />
    </div>
{/key}
<Footer />