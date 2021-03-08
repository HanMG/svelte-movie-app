<script>
    import { querystring } from 'svelte-spa-router'
    import qs from 'qs'

    console.log($querystring)
    console.log(qs.parse($querystring))

    $: query = qs.parse($querystring)
    $: name = query.name ||  'HanMoonGoo'    
    $: email = query.email || 'hanmoongoo@gmail.com'
    $: github = query.github || 'https://github.com/HanMG'
</script>

<div class="user-profile">
    <div class="photos">
        <div class="photo">
            <img src="/assets/svelte.png" alt="User">
        </div>
        <div class="photo">
            <img src="/assets/netlify.png" alt="User">
        </div>
    </div>
    <div class="details">
        <div class="name">{name}</div>
        <div class="email">{email}</div>
        <div class="github" >
            <a href={github}>{github}</a>
        </div>        
    </div>
</div>

<style lang="scss">
    .user-profile {
        padding: 80px 0;
        .photos {
            display: flex;
            justify-content: center;
            .photo {
                width: 230px;
                height: 230px;
                padding: 30px;
                box-sizing: border-box;
                background-color: $color--area;
                border-radius: 50%;
                border: 12px solid $color--black;
                &:first-child {
                    margin-right: -80px;
                }
                img {
                    width: 100%;
                }                
            }
        }
        .details {
            margin-top: 20px;
            text-align: center;
            .name {
                font-size: 40px;
                font-family: 'Oswald', sans-serif;
                margin-bottom: 20px;
            }
            .github {
                a {
                    text-decoration: none;
                    &:visited {
                        color: $color--primary;
                    }
                }

            }
        }
    }
</style>