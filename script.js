navigator.geolocation.getCurrentPosition(function(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    let bt = document.querySelector('a')
    bt.href = 'https://www.google.ru/maps/@' + position.coords.latitude + ',' + position.coords.longitude + ',20z?hl=ru';
    let switch_1 = 0;
    let bt_1 = document.querySelector('button');
    bt_1.addEventListener("click",function(){
        if(switch_1 == 0){
        bt.style.display = 'block';
        switch_1 = 1;}
        else{
            bt.style.display = 'none';
            switch_1 = 0;
        }
    })
})

