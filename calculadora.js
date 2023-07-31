    
    function calcularImpuestos() {
      var montoBase = parseFloat(document.getElementById("montoBase").value);
      var porcentajeImpuesto = parseFloat(document.getElementById("porcentajeImpuesto").value);

      if (isNaN(montoBase) || isNaN(porcentajeImpuesto)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa valores numéricos válidos.";
        return;
      }

      var impuestoCalculado = montoBase * (porcentajeImpuesto / 100);
      var totalConImpuestos = montoBase + impuestoCalculado;

      document.getElementById("resultado").innerText = "El impuesto calculado es: " + impuestoCalculado.toFixed(2) + " Bs.S" + " y el monto total con impuestos es: " + totalConImpuestos.toFixed(2) + " Bs.S";
    }

    function limpiarFormulario() {
        document.getElementById("montoBase").value = "";
        document.getElementById("porcentajeImpuesto").value = "";
        document.getElementById("resultado").innerText = "";
      }