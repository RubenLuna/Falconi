



function fxShowmodal() {

    $('#DonasModal').modal('show');

}


function fxReset(){

    $('#txtQuantity').val('');
}


function fxSum() {

    var current = $('#txtQuantity').val();

    var intNew = parseInt(current) + 1;

    $('#txtQuantity').val(intNew);


}


function fxMinus() {

    var current = $('#txtQuantity').val();

    var intNew = parseInt(current) - 1;

    if (parseInt(intNew) < 0) {
        $('#txtQuantity').val(0);
    } else { 

        $('#txtQuantity').val(intNew);
    }


}

$(document).ready(function () {

    $('#txtQuantity').val(0);


    $('img').on('click', function () {

        var src = $(this).attr('src');
        var desc = $(this).next().text();
        $('#modalImgId').attr('src', src);
        $('#DonasModalLabel').text('');
        $('#DonasModalLabel').append('<strong>' + desc + '</strong>');
        $('#DonasModal').modal('show');

    });


    //alert('asd');





    //END DOCUMENT READY FUNCTION
});









