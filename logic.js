$(window).on('load',()=>{
    checkData();
    populateTables();

    $('#sub-btn').on('click',(event)=>{
        event.preventDefault();
        var newName = $('#reserve_name').val().trim();
        var newPhone = $('#reserve_phone').val().trim();
        var newEmail = $('#reserve_email').val().trim();
        var newID = $('#reserve_uniqueID').val().trim();
        if((newName)&&(newPhone)&&(newEmail)&&(newID)){
        let newRes={
            name: newName,
            phone: newPhone,
            email: newEmail,
            id: newID
        };
        $.post('/api/tables', newRes).then((data)=>{
            console.log('sending '+data);
        });
        $('#reserve_name').val('');
        $('#reserve_phone').val('');
        $('#reserve_email').val('');
        $('#reserve_uniqueID').val('');
        window.location.href='/tables';
            }
        else {
            console.log("MODAL TIME");
        $('.modal').modal();
        $('.modal').modal('open');
        }


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