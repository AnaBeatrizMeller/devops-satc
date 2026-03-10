import { useState } from "react";
import "./App.css";

function App() {

  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {

    if (tarefa.trim() === "") {
      return;
    }

    const novaLista = [...tarefas, tarefa];
    setTarefas(novaLista);

    setTarefa("");
  }

  return (
    <div className="container">

      <h1>Lista de Tarefas</h1>

      <div className="input-area">

        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />

        <button onClick={adicionarTarefa}>
          Enviar
        </button>

      </div>

      <table>

        <thead>
          <tr>
            <th>Número</th>
            <th>Tarefa</th>
          </tr>
        </thead>

        <tbody>

          {tarefas.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;