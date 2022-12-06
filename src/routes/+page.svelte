<script>
    let city = ''
    const submit = () => {
        if (city != '') {
            window.open(city)
        } else{
            alert('Input Cannot Be Empty!')
        }
    }
</script>

<style>
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        border: 0px;
    }
    body{
        overflow: hidden;
        background-image: url(bg_day.png);
        background-repeat: no-repeat;
        background-position: center;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        height: 100vh;
    }
    .search-area, .logo-area{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
    }

    .search-area{
        width: 60%;
    }

    .search-area > *{
        margin-top: 4vh;
        margin-bottom: 4vh;
    }

    h1{
        font-size: 6vw;
    }

    span{
        color: #FF7180;
    }

    input{
        font-size: 2vw;
        width: 30vw;
        height: 9.25vh;
        text-align: center;
    }

    button{
        background-color: #FF7180;
        width: 20.8vw;
        height: 9.25vh;
        color: white;
        font-size: 3vw;
        border-radius: 20vw;
    }

    .logo{
        width: 31.25vw;
        height: auto;
        margin-right: 6.8vw;
    }

    
</style>

<body>
    <div class="container">
        <div class="search-area">
            <h1>Find Your <span>Weather</span></h1>
            <input type="text" placeholder="Enter your city" bind:value={city}>
            <button on:click={submit}>Search</button>
        </div>
        <div class="logo-area">
            <img src="cloud_logo.png" alt="cloud" class="logo">
        </div>
    </div>
</body>

