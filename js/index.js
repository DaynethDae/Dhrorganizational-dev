$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
      interval: 2000
    });

    $('#exampleModal').on('show.bs.modal', function (e) {
      console.log("Muestra el modal");
      $('#myModalbtn').removeClass('btn-secondary', true);
      $('#myModalbtn').addClass('btn-danger');
      $('#myModalbtn').prop('disabled', true);
    })
    $('#exampleModal').on('shown.bs.modal', function (e) {
      console.log("Muestró el modal")
    })
    $('#exampleModal').on('hide.bs.modal', function (e) {
      console.log("Oculta el modal")
    })
    $('#exampleModal').on('hidden.bs.modal', function (e) {
      console.log("Ocultó el modal");
      $('#myModalbtn').prop('disabled', false);
    })

});