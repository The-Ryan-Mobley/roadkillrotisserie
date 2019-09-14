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