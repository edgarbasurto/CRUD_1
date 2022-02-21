var tabla;
function init() {}

$(document).ready(function () {
  tabla = $("#producto_data")
    .dataTable({
      aProcessing: true, //activamos el procedimiento del datatables
      aServerSide: true, //Paginacion y filtrado realizados por el sevidor
      dom: "Bfrtip", //Definimos los elementos del control de tabla
      buttons: ["copyHtmld5", "excelHtml5", "csvHtml5", "pdf"],
      ajax: {
        url: "../../controller/Producto.php?op=listar",
        type: "get",
        dataType: "json",
        error: function (e) {
          consosle.log(e.responseText);
        },
      },
      bDestroy: true,
      responsive: true,
      bInfo: true,
      iDisplayLenght: 2, //por cada 10 registros hace una paginacion
      order: [[0, "asc"]], //ordenar por (columna,orden ascendente)
      languaje: {
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_ registros",
        sZeroRecords: "No se encontro resultados",
        sEmptyTable: "Ningun dato disponible en esta tabla",
        sInfo: "Mostrando un total de _TOTAL_ registros",
        sInfoEmpty: "Mostrando un total de 0 registros",
        sInfoFiltered: "(Filtrado de un total de _MAX_registros)",
        sInfoPostFix: "",
        sSearch: "Buscar:",
        sUrl: "",
        sInfoThousands: ",",
        sLoadingRecords: "Cargando...",
        oPaginate: {
          sFirst: "Primero",
          sLast: "Ultmo",
          sNext: "Siguiente",
          sPrevious: "Anterior",
        },
        oAria: {
          sSortAscending:
            ": Activar para ordenar la columna demanera ascendente",
          sSortDescending:
            ": Activar para ordenar la columna demanera descendente",
        },
      },
    })
    .dataTable();
});

init();
