import Botao from '@/components/Botao';
import Pagina from '@/components/template/pagina';

export default function PrimeiraPagina() {
    return (
        <Pagina className="flex gap-2">
            <Botao label="Salvar" />
            <Botao label="Cancelar" />
        </Pagina>
    )
} 