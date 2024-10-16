'use client'

import { useState } from "react";

interface ContadorProp {
    valor?: number;
}

export default function Contador(propriedades: ContadorProp) {
    const estado = useState(propriedades.valor ?? 0);
    const num = estado[0];
    const alterarNumero = estado[1];

    function incrementar() {       
        alterarNumero(num + 1);
    }
    function decrementar() {
        if(num > 0)
            alterarNumero(num - 1);
    }

    return (
        <div>
                <h1 className="m-3">Contador</h1>
                <span className="m-3">{num}</span>
                <div>
                    <button onClick={incrementar} className="bg-green-800 m-3 p-2 gap-2">Incrementar</button>
                    <button onClick={decrementar} className="bg-red-300 m-3 p-2 gap-2">Decrementar</button>
                </div>
        </div>
    )
}