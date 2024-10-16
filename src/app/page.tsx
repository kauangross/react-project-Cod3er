import Link from 'next/link';
import Pagina from "@/components/template/pagina";

export default function Home() {
    return (
        <div className="flex gap-2">
            <Pagina>
                <h1>Conteudo</h1>
            </Pagina>
        </div>
    )
}