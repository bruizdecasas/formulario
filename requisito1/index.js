// Este es todo el html que queremos añadir como parte de la actividad

{/* <form>
<fieldset>
    <legend>Datos para la renovación del DNI</legend>
    <p>
        <label>DNI</label>
        <input type="text" placeholder="escriba su DNI" />
    </p>
    <p>
        <label>Nombre</label>
        <input type="text" placeholder="escriba su nombre" />
        <label>Apellidos</label>
        <input type="text" placeholder="escriba sus apellidos" />
    </p>
    <p>
        <label>Dirección</label>
        <input type="text" placeholder="escriba su dirección" />
    </p>
    <p>
        <label>Telefono</label>
        <input type="tel" placeholder="escriba su número de telefono" pattern="\d*" />
    </p>
</fieldset>
<fieldset>
    <legend>Seleccione la oficina dentro de Madrid:</legend>
    <input type="radio" id="arganzuela" name="oficina" value="arganzuela" checked>
    <label for="arganzuela">Arganzuela</label>
    <input type="radio" id="goya" name="oficina" value="goya">
    <label for="goya">Goya</label>
    <input type="radio" id="canal" name="oficina" value="canal">
    <label for="canal">Canal</label>
</fieldset>
<fieldset>
    <legend>Seleccione la oficina fuera de Madrid:</legend>
    <input type="radio" id="cuenca" name="oficina2" value="cuenca" checked>
    <label for="cuenca">Cuenca</label>
    <input type="radio" id="segovia" name="oficina2" value="segovia">
    <label for="segovia">Segovia</label>
    <input type="radio" id="toledo" name="oficina2" value="toledo">
    <label for="toledo">Toledo</label>
</fieldset>
<fieldset>
    <legend>Forma de pago:</legend>
    <input type="checkbox" id="efectivo" name="efectivo" value="efectivo">
    <label for="efectivo">Efectivo</label>
    <input type="checkbox" id="visa" name="visa" value="visa">
    <label for="visa">VISA</label>
    <input type="checkbox" id="aPlazos" name="aPlazos" value="aPlazos">
    <label for="aPlazos">A plazos</label>
    <input type="checkbox" id="transferencia" name="transferencia" value="transferencia">
    <label for="transferencia">Transferencia</label>
    <input type="checkbox" id="klarna" name="klarna" value="klarna">
    <label for="klarna">Klarna</label>
</fieldset>
<img src="pic_trulli.jpg" alt="Italian Trulli">
<img src="pic_trulli.jpg" alt="Italian Trulli">

<fieldset>
    <legend>Horario para la cita:</legend>
    <label for="horario">Elige una franja horaria:</label>
    <select name="franja" id="horario">
        <option value="manana">Mañana</option>
        <option value="mediaDia">Medio día</option>
        <option value="tarde">Tarde</option>
    </select>
</fieldset>
<p>
    <label for="otro">infromación adicional:</label>
    <textarea id="otro" name="otro" rows="4" cols="50">Escriba información adicional.</textarea>
</p>
<button type="submit">Submit</button>
</form> */}

// Primero seleccionamos en el DOM el que será el contenedor de los elementos que crearemos mendiante js y añadiremos un formulario
const contenedor = document.getElementById('root');
console.log(contenedor)
const form = document.createElement("form");
contenedor.appendChild(form)

// Ahora vamos a crear y posteriormente añadir al DOM el primer bloque de html
{/* <fieldset>
    <legend>Datos para la renovación del DNI</legend>
    <p>
        <label>DNI</label>
        <input type="text" placeholder="escriba su DNI" />
    </p>
    <p>
        <label>Nombre</label>
        <input type="text" placeholder="escriba su nombre" />
        <label>Apellidos</label>
        <input type="text" placeholder="escriba sus apellidos" />
    </p>
    <p>
        <label>Dirección</label>
        <input type="text" placeholder="escriba su dirección" />
    </p>
    <p>
        <label>Telefono</label>
        <input type="tel" placeholder="escriba su número de telefono" pattern="\d*" />
    </p>
</fieldset> */}

// APARTADO DEL DNI
const DNIfieldset = document.createElement("FIELDSET");
const DNILegend = document.createElement("LEGEND");
const DNILegendText = document.createTextNode("Datos para la renovación del DNI");
DNILegend.appendChild(DNILegendText);
DNIfieldset.appendChild(DNILegend);

const DNIParagraph = document.createElement("p");
const DNILabel = document.createElement("label");
const DNILabelText = document.createTextNode("DNI");
DNILabel.appendChild(DNILabelText);
DNIParagraph.appendChild(DNILabel);

const DNIInput = document.createElement("INPUT");
DNIInput.setAttribute("type", "text");
DNIInput.setAttribute("placeholder", "Escriba su DNI");
DNIParagraph.appendChild(DNIInput);

// APARTADO DEL NOMBRE Y APELLIDOS
const nombreYApellidosfieldset = document.createElement("FIELDSET");
const nombreYApellidosLegend = document.createElement("LEGEND");
const nombreYApellidosLegendText = document.createTextNode("Datos para la renovación del nombreYApellidos");
nombreYApellidosLegend.appendChild(nombreYApellidosLegendText);
nombreYApellidosfieldset.appendChild(nombreYApellidosLegend);

const nombreYApellidosParagraph = document.createElement("p");

const nombreLabel = document.createElement("label");
const nombreLabelText = document.createTextNode("Nombre");
nombreLabel.appendChild(nombreLabelText);
nombreYApellidosParagraph.appendChild(nombreLabel);

const nombreInput = document.createElement("INPUT");
nombreInput.setAttribute("type", "text");
nombreInput.setAttribute("placeholder", "Escriba su nombre");
nombreYApellidosParagraph.appendChild(DNIInput);

const apellidoLabel = document.createElement("label");
const apellidoLabelText = document.createTextNode("Apellidos");
apellidoLabel.appendChild(apellidoLabelText);
nombreYApellidosParagraph.appendChild(apellidoLabel);

const apellidoInput = document.createElement("INPUT");
apellidoInput.setAttribute("type", "text");
apellidoInput.setAttribute("placeholder", "Escriba sus apellidos");
nombreYApellidosParagraph.appendChild(apellidoInput);

/// APARTADO DE LA DIRECCIÓN
const direccionParagraph = document.createElement("p");
const direccionLabel = document.createElement("label");
const direccionLabelText = document.createTextNode("Dirección");
direccionLabel.appendChild(direccionLabelText);
direccionParagraph.appendChild(direccionLabel);

const direccionInput = document.createElement("INPUT");
direccionInput.setAttribute("type", "text");
direccionInput.setAttribute("placeholder", "Escriba su dirección");
direccionParagraph.appendChild(direccionInput);

/// APARTADO DEL TELEFONO
const telParagraph = document.createElement("p");
const telLabel = document.createElement("label");
const telLabelText = document.createTextNode("Teléfono");
telLabel.appendChild(telLabelText);
telParagraph.appendChild(telLabel);

const telInput = document.createElement("INPUT");
telInput.setAttribute("type", "tel");
telInput.setAttribute("placeholder", "Escriba su número de teléfono");
telInput.setAttribute("pattern", "\d*");
telParagraph.appendChild(telInput);

// UNIMOS TODO
DNIfieldset.appendChild(DNIParagraph);
DNIfieldset.appendChild(nombreYApellidosParagraph);
DNIfieldset.appendChild(direccionParagraph);
DNIfieldset.appendChild(telParagraph);
form.appendChild(DNIfieldset);

// Ahora haremos el segundo fieldset. 

{/* <fieldset>
    <legend>Seleccione la oficina dentro de Madrid:</legend>
    <input type="radio" id="arganzuela" name="oficina" value="arganzuela">
    <label for="arganzuela">Arganzuela</label>
    <input type="radio" id="goya" name="oficina" value="goya">
    <label for="goya">Goya</label>
    <input type="radio" id="canal" name="oficina" value="canal">
    <label for="canal">Canal</label>
</fieldset> */}

const oficinaMadridfieldset = document.createElement("FIELDSET");
const oficinaMadridLegend = document.createElement("LEGEND");
const oficinaMadridLegendText = document.createTextNode("Seleccione la oficina dentro de Madrid");
oficinaMadridLegend.appendChild(oficinaMadridLegendText);
oficinaMadridfieldset.appendChild(oficinaMadridLegend);

// creamos radio button de Arganzuela
const arganzuelaInputRadio = document.createElement("INPUT");
arganzuelaInputRadio.setAttribute("type", "radio");
arganzuelaInputRadio.setAttribute("id", "arganzuela");
arganzuelaInputRadio.setAttribute("name", "oficina");
arganzuelaInputRadio.setAttribute("value", "arganzuela");
oficinaMadridfieldset.appendChild(arganzuelaInputRadio);

const arganzuelaLabel = document.createElement("label");
const arganzuelaLabelText = document.createTextNode("Arganzuela");
arganzuelaLabel.setAttribute("for", "arganzuela")
arganzuelaLabel.appendChild(arganzuelaLabelText);
oficinaMadridfieldset.appendChild(arganzuelaLabel)

// creamos radio button de Goya
const goyaInputRadio = document.createElement("INPUT");
goyaInputRadio.setAttribute("type", "radio");
goyaInputRadio.setAttribute("id", "goya");
goyaInputRadio.setAttribute("name", "oficina");
goyaInputRadio.setAttribute("value", "goya");
oficinaMadridfieldset.appendChild(goyaInputRadio);

const goyaLabel = document.createElement("label");
const goyaLabelText = document.createTextNode("Goya");
goyaLabel.setAttribute("for", "goya")
goyaLabel.appendChild(goyaLabelText);
oficinaMadridfieldset.appendChild(goyaLabel)

// creamos radio button de Canal
const canalInputRadio = document.createElement("INPUT");
canalInputRadio.setAttribute("type", "radio");
canalInputRadio.setAttribute("id", "canal");
canalInputRadio.setAttribute("name", "oficina");
canalInputRadio.setAttribute("value", "canal");
oficinaMadridfieldset.appendChild(canalInputRadio);

const canalLabel = document.createElement("label");
const canalLabelText = document.createTextNode("Canal");
canalLabel.setAttribute("for", "canal")
canalLabel.appendChild(canalLabelText);
oficinaMadridfieldset.appendChild(canalLabel)

// UNIMOS TODO
form.appendChild(oficinaMadridfieldset);

// Ahora haremos el tercer fieldset. 

{/* <fieldset>
    <legend>Seleccione la oficina fuera de Madrid:</legend>
    <input type="radio" id="cuenca" name="oficina2" value="cuenca" checked>
    <label for="cuenca">Cuenca</label>
    <input type="radio" id="segovia" name="oficina2" value="segovia">
    <label for="segovia">Segovia</label>
    <input type="radio" id="toledo" name="oficina2" value="toledo">
    <label for="toledo">Toledo</label>
</fieldset> */}

const oficinaFueraMadridfieldset = document.createElement("FIELDSET");
const oficinaFueraMadridLegend = document.createElement("LEGEND");
const oficinaFueraMadridLegendText = document.createTextNode("Seleccione la oficina fuera de Madrid");
oficinaFueraMadridLegend.appendChild(oficinaFueraMadridLegendText);
oficinaFueraMadridfieldset.appendChild(oficinaFueraMadridLegend);

// creamos radio button de Cuenca
const cuencaInputRadio = document.createElement("INPUT");
cuencaInputRadio.setAttribute("type", "radio");
cuencaInputRadio.setAttribute("id", "cuenca");
cuencaInputRadio.setAttribute("name", "oficina");
cuencaInputRadio.setAttribute("value", "cuenca");
oficinaFueraMadridfieldset.appendChild(cuencaInputRadio);

const cuencaLabel = document.createElement("label");
const cuencaLabelText = document.createTextNode("Cuenca");
cuencaLabel.setAttribute("for", "cuenca")
cuencaLabel.appendChild(cuencaLabelText);
oficinaFueraMadridfieldset.appendChild(cuencaLabel)

// creamos radio button de Segovia
const segoviaInputRadio = document.createElement("INPUT");
segoviaInputRadio.setAttribute("type", "radio");
segoviaInputRadio.setAttribute("id", "segovia");
segoviaInputRadio.setAttribute("name", "oficina");
segoviaInputRadio.setAttribute("value", "segovia");
oficinaFueraMadridfieldset.appendChild(segoviaInputRadio);

const segoviaLabel = document.createElement("label");
const segoviaLabelText = document.createTextNode("Segovia");
segoviaLabel.setAttribute("for", "segovia")
segoviaLabel.appendChild(segoviaLabelText);
oficinaFueraMadridfieldset.appendChild(segoviaLabel)

// creamos radio button de Toledo
const toledoInputRadio = document.createElement("INPUT");
toledoInputRadio.setAttribute("type", "radio");
toledoInputRadio.setAttribute("id", "toledo");
toledoInputRadio.setAttribute("name", "oficina");
toledoInputRadio.setAttribute("value", "toledo");
oficinaFueraMadridfieldset.appendChild(toledoInputRadio);

const toledoLabel = document.createElement("label");
const toledoLabelText = document.createTextNode("Toledo");
toledoLabel.setAttribute("for", "toledo")
toledoLabel.appendChild(toledoLabelText);
oficinaFueraMadridfieldset.appendChild(toledoLabel)

// UNIMOS TODO
form.appendChild(oficinaFueraMadridfieldset);




