<script>
    export let data

    const {weather} = data
    const city = data.city.params.city

    const temp_c = weather.temp_c
    const temp_f = weather.temp_f
    const is_day = weather.is_day

    //CSS Variable
    let body_bg = "url(\"bg_day.png\")"
    let text_color = "black"
    if(is_day == 0){
        body_bg = "url(\"bg_night.png\")"
        text_color = "white"
    }

    let temp = "hot.png"
    if(temp_c < 15){
        temp = "cold.png"
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
        background-image: var(--bg-image);
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
    }
    h1{
        text-align: center;
        font-size: 8vw;
        margin: 2vw;
        color: #FF7180;
    }
    .flex-horizontal{
        display: flex;
        width: 100%;
        height: 70%;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
    }
    h2{
        font-size: 12vw;
        color: var(--text-color);
    }
    img{
        width: 20vw;
    }
</style>


<body style="--bg-image: {body_bg}; --text-color: {text_color}">
    <h1>{city}</h1>
    <div class="flex-horizontal">
        <div class="container">
            <h2>{temp_c} C</h2>
            <h2>{temp_f} F</h2>
        </div>
        <div class="container">
            <img src={temp} alt="hot">
        </div>
        
    </div>
    
</body>

