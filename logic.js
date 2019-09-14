$(window).on('load',()=>{
    checkData();

    $('#sub-btn').on('click',(event)=>{
        event.preventDefault();
        let newRes={
            name: $('#reserve_name').val().trim(),
            phone: $('#reserve_phone').val().trim(),
            email: $('#reserve_email').val().trim(),
            id: $('#reserve_uniqueID').val().trim()
        };
        $.post('/api/tables', newRes).then((data)=>{
            console.log('sending '+data);
        });

    });

});
function checkData(){
    $.get('/api/tables').then((data)=>{
        console.log(data);
    })
}
function populateTables(){
    $.get('/api/tables').then((data)=>{
        data.forEach(index =>{
            let count = 1;
            let lister = $('<h2 class="tableList">');
            lister.appendTo('#tableSection');
            lister.html(`${count} | ${index.name}`);
            count++;

        });
    });
    $.get('/api/waitlist').then((data)=>{
        data.forEach(index =>{
            let count = 1;
            let resPlace = $('<h2 class="waitlist">');
            resPlace.appendTo('#waitlistSection');
            resPlace.html(`${count} | ${index.name}`);

        });

    });
}