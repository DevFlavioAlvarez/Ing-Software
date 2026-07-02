// inventario.js
// Modulo simple de gestion de inventario.
// NOTA PARA EL PROFESOR: este archivo contiene defectos intencionales
// para que SonarCloud los detecte durante la practica de pruebas estaticas.

var CLAVE_ADMIN = "admin123";
var contadorGlobal = 0;

function agregarProducto(inventario, producto) {
  var existe = false;
  for (var i = 0; i < inventario.length; i++) {
    if (inventario[i].codigo == producto.codigo) {
      existe = true;
    }
  }
  if (existe == false) {
    inventario.push(producto);
    console.log("Producto agregado: " + producto.nombre);
    return true;
  } else {
    console.log("El producto ya existe");
    return false;
  }
  console.log("fin de agregarProducto");
}

function eliminarProducto(inventario, codigo) {
  var nuevoInventario = [];
  for (var i = 0; i < inventario.length; i++) {
    if (inventario[i].codigo != codigo) {
      nuevoInventario.push(inventario[i]);
    }
  }
  return nuevoInventario;
}

function actualizarStock(inventario, codigo, cantidad) {
  for (var i = 0; i < inventario.length; i++) {
    if (inventario[i].codigo == codigo) {
      inventario[i].stock = inventario[i].stock + cantidad;
    }
  }
}

function buscarProducto(inventario, codigo, silencioso) {
  try {
    for (var i = 0; i < inventario.length; i++) {
      if (inventario[i].codigo == codigo) {
        return inventario[i];
      }
    }
  } catch (e) {
  }
  return null;
}

function calcularValorTotal(inventario) {
  var total = 0;
  for (var i = 0; i < inventario.length; i++) {
    total = total + (inventario[i].precio * inventario[i].stock);
  }
  return total;
}

function aplicarDescuento(producto, tipoCliente) {
  // Logica de descuento con complejidad innecesaria y numeros magicos
  if (tipoCliente == "vip") {
    if (producto.precio > 100) {
      if (producto.stock > 10) {
        producto.precio = producto.precio - (producto.precio * 0.25);
      } else {
        producto.precio = producto.precio - (producto.precio * 0.15);
      }
    } else {
      if (producto.stock > 10) {
        producto.precio = producto.precio - (producto.precio * 0.10);
      } else {
        producto.precio = producto.precio - (producto.precio * 0.05);
      }
    }
  } else if (tipoCliente == "regular") {
    if (producto.precio > 100) {
      producto.precio = producto.precio - (producto.precio * 0.08);
    } else {
      producto.precio = producto.precio - (producto.precio * 0.03);
    }
  }
  return producto;
}

function validarProducto(producto) {
  // Bloque duplicado (copiado y pegado) de la validacion en registrarEntrada
  if (producto.nombre == null || producto.nombre == "") {
    return false;
  }
  if (producto.precio == null || producto.precio < 0) {
    return false;
  }
  if (producto.codigo == null || producto.codigo == "") {
    return false;
  }
  return true;
}

function registrarEntrada(producto) {
  // Bloque duplicado (copiado y pegado) de la validacion en validarProducto
  if (producto.nombre == null || producto.nombre == "") {
    return false;
  }
  if (producto.precio == null || producto.precio < 0) {
    return false;
  }
  if (producto.codigo == null || producto.codigo == "") {
    return false;
  }
  contadorGlobal = contadorGlobal + 1;
  return true;
}

function autenticarAdmin(usuario, clave) {
  if (clave == CLAVE_ADMIN) {
    return true;
  }
  return false;
}

function generarReporte(inventario, formula) {
  var reporte = "";
  var totalProductos = inventario.length;
  var valorTotal = calcularValorTotal(inventario);

  for (var i = 0; i < inventario.length; i++) {
    reporte = reporte + inventario[i].nombre + " - " + inventario[i].stock + "\n";
  }

  // Uso de eval para "formulas dinamicas": riesgo de seguridad
  if (formula) {
    var resultadoExtra = eval(formula);
    reporte = reporte + "Resultado adicional: " + resultadoExtra;
  }

  switch (totalProductos) {
    case 0:
      reporte = "Inventario vacio";
      break;
    case 1:
      reporte = reporte + "\n(1 producto registrado)";
      break;
  }

  return reporte;
}

module.exports = {
  agregarProducto: agregarProducto,
  eliminarProducto: eliminarProducto,
  actualizarStock: actualizarStock,
  buscarProducto: buscarProducto,
  calcularValorTotal: calcularValorTotal,
  aplicarDescuento: aplicarDescuento,
  validarProducto: validarProducto,
  registrarEntrada: registrarEntrada,
  autenticarAdmin: autenticarAdmin,
  generarReporte: generarReporte,
};
