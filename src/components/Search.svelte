<script>
    import _upperFirst from 'lodash/upperFirst'
    import { searchMovies } from '~/store/movie'

    // 영화타입옵션
    const types = [
        'movie',
        'series',
        'episode'
    ]

    // 연도 옵션
    const years = []
    for(let y = new Date().getFullYear(); y >= 1985; y-= 1){
        years.push(y)
    }

    // 아이템 개수
    const numbers = [
        10, 20, 30
    ]

    
    // 기본값
    let title = ''
    let type = 'movie'
    let year = ''
    let number = 10

    function apply(){
        searchMovies({
            title,
            type,
            year,
            number
        })
    }
</script>

<div class="search">
    <div class="text-field">
        <input 
            bind:value={title}
            placeholder="Search for Movies, Series & Episode"
            type="text"
            on:keydown={event => {
                event.key === 'Enter' && apply()
            }} />
    </div>

    <div class="select">
        <select bind:value={type}>
            {#each types as t (t)}
                <option value={t}>{_upperFirst(t)}</option>
            {/each}            
        </select>
    </div>

    <div class="select">
        <select bind:value={year}>
            <option value="">All years</option>
            {#each years as y (y)}
                <option>{y}</option>
            {/each}
        </select>
    </div>
    
    <div class="select">
        <select bind:value={number}>
            {#each numbers as n (n)}
                <option>{n}</option>    
            {/each}
            
        </select>
    </div>

    <button 
        class="btn"
        on:click={apply}>
        Apply
    </button>
</div>

<style lang="scss">
    .search {
        display: grid;
        grid-template-columns: 1fr repeat(4, 120px);
        grid-gap: 10px;
        @media #{$tablet} {
            grid-template-columns: repeat(3, 120px) 1fr;
            grid-template-rows: repeat(2, 50px);
        }
        @media #{$mobile} {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 50px);
        }
        .text-field {
            display: inline-block;
            height: 50px;
            @media #{$tablet} {
                grid-column: 1 / -1;
            }            
            input {
                width: 100%;
                height: 100%;
                background-color: $color--area;
                outline: none;
                border: none;
                padding: 0 20px;
                box-sizing: border-box;
                font-size: 14px;
                color: $color--white-60;
                border-radius: 4px;
                &::placeholder {
                    color: $color--white-30;
                }
            }
        }
        .select {
            height: 50px;
            position: relative;
            &::after {
                content: "";
                width: 0;
                height: 0;
                border-top: 5px solid #555;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                position: absolute;
                top: 50%;
                right: 15px;
                margin-top: -1px;
            }
            select{
                width: 100%;
                height: 100%;
                outline: none;
                border: none;
                font-size: 14px;
                color: $color--white-60;
                border-radius: 4px;
                background-color: $color--area;
                cursor: pointer;
                appearance: none;
                padding: 0 32px 0 20px;
                box-sizing: border-box;
            }
        }
        .btn {
            height: 50px;
            padding: 0 20px;
            border: none;
            outline: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 700;
            color: $color--black;
            background-color: $color--primary;
            transition: .4;
            @media #{$mobile} {
                grid-column: 1 / -1;
            }
            &:hover {
                background-color: darken($color--primary, 10%);
            }

        }
    }
</style>
