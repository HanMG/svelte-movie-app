<div class="error-page">
    <img class="face" src="/assets/dead.svg" alt="Page Not Found!">
    <div class="status-wrap">
        <div class="status">404</div>
        <div class="status-text">Page Not Found!</div>
    </div>    
</div>

<style lang="scss">
    .error-page {
        display: flex;
        line-height: 1.2;
        text-align: center;
        font-family: 'Oswald', sans-serif;
        padding: 80px 20px;
        justify-content: center;
        align-items: center;        
        .face {
            width: 300px;
            height: 300px;                        
            margin-right: 30px;
        }
        .status-wrap {
            flex-direction: row;
            .status {
                font-size: 160px;
                color: $color--primary;
            }
            .status-text {
                font-size: 50px;
            }
        }
        
    }
</style>