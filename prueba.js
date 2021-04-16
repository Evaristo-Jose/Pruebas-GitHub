$(document).ready(function () {
    $(".btn-danger").click(function () {
      swal
        .fire({
          title: "Eliminar",
          text: "Estás seguro que deseas eliminar este portátil??",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
        })
        .then((resultado) => {
          if (resultado.value) {
            // Hicieron click en "Sí"
            $(this).remove();
          } else {
            // Dijeron que no
            return false;
          }
        });
    });
});