    // INITIALIZE DATE PICK BOOT
    $('.datepicker').datepicker({
        language: "es",
        clearBtn: true,
        format: "dd/mm/yyyy",
        autoclose: true
    });

    $('#agregarModal').on('hidden.bs.modal', function (e) {
        $('#formularioAgregar')[0].reset();
    });
