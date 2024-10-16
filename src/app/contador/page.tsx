import Contador from "@/components/contador";
import Pagina from "@/components/template/pagina";

export default function PaginaContador() {
    return (
        <Pagina>
            <Contador valor= {5} /> 
            <Contador valor= {1000} />
            <Contador />
        </Pagina>
    )
}''