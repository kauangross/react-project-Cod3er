import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho></Cabecalho>
            <div className="flex h-screen">
                <Menu></Menu>
                <main className="bg-black p-8 w-full">{props.children}</main>
            </div>
            <Rodape></Rodape>
        </div>
    ) 
}