$(window).on('load',()=>{
    checkData();
    populateTables();

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
        $('#reserve_name').val('');
        $('#reserve_phone').val('');
        $('#reserve_email').val('');
        $('#reserve_uniqueID').val('');
        window.location.href='/tables';


    });

});
function checkData(){
    $.get('/api/tables').then((data)=>{
        console.log(data);
    })
}
function populateTables(){
    $.get('/api/tables').then((data)=>{
        let count = 1;
        data.forEach(index =>{
           
            let lister = $('<h2 class="tableList">');
            lister.appendTo('#tableSection');
            lister.html(`${count} | ${index.name}`);
            count++;

        });
    });
    $.get('/api/waitlist').then((data)=>{
        let count = 1;
        data.forEach(index =>{
            
            let resPlace = $('<h2 class="waitlist">');
            resPlace.appendTo('#waitlistSection');
            resPlace.html(`${count} | ${index.name}`);
            count++

        });

    });
}