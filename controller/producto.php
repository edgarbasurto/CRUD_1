<?php

    require_once("../config/conexion.php");
    require_once("../config/Producto.php");
    $producto = new Producto();

    switch($_GET["op"]){

        case "listar":
            $datos = $producto -> get_producto();
            $datos = array();
            foreach ($datos as $row) {
                $sub_array = array();
                $sub_array[] = $row["prod_nom"];
                $sub_array[] = '<button type = "button" onClick = "editar('.$row["prod_id"].');" id= "'.$row["prod_id"].'" class="btn btn-outline-primary btn-icon"><div><i class="fa fa-edit"></i></div></button>';
                $sub_array[] = '<button type = "button" onClick = "eliminar('.$row["prod_id"].');" id= "'.$row["prod_id"].'" class="btn btn-outline-danger btn-icon"><div><i class="fa fa-trash"></i></div></button>';
                $sub_array[] = $sub_array;
                
            }

            $results = array(
                "sEcho"=>1,
                "iTotalRecords"=>count($data),
                "iTotalDisplayRecords"=>count($data),
                "aaData"=>$data
            );

            echo json_encode($results);
            break;
    }


?>