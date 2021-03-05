<footer>
    <div>
        <a href="https://github.com/HanMG/svelte-movie-app">
            This Site Repo.
        </a>
    </div>
    <div>
        <a href="https://github.com/HanMG">
            @{new Date().getFullYear()}
            HMG Github
        </a>
    </div>  
</footer>

<style lang="scss">
    footer {
        padding: 70px;
        text-align: center;
        a {
            color: $color--white-30;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>