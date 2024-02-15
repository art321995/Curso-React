import { useRef } from "react";

const FormularioNoControlado = () => {
  const formulario = useRef(null);

  // Formulario no controlado
  const handleSubmit = (e) => {
    // console.log(formulario.current);
    e.preventDefault();

    const datos = new FormData(formulario.current);

    // spread operator: permite a un elemento iterable ser expandido
    // copia cada uno de sus elementos
    console.log(...datos.entries());

    // El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
    const objetoDatos = Object.fromEntries([...datos.entries()]);

    // console.log(objetoDatos);
    if (!objetoDatos.todoNombre.trim()) {
      return console.log("vacío");
    }

    console.log("pasó las validaciones!");
    formulario.current.reset();
  };

  return (
    <div className="container mt-2">
      <form
        onSubmit={handleSubmit}
        ref={formulario}
      >
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoNombre"
          defaultValue="Tarea #01"
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoDescripcion"
          defaultValue="Descripción tarea #01"
        />
        <select
          className="form-control mb-2"
          name="todoEstado"
          defaultValue="completado"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button
          className="btn btn-primary"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormularioNoControlado;