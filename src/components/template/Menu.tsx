import { IconClockDown, IconFirstAidKit, IconForms, IconHome, IconNumber1 } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu(){
    return (
        <aside className="bg-indigo-950 space-around w-[15%] p-8">
            <nav>   
                <div className="flex flex-col gap-3">
                    <MenuItem text="Início" href="/" icone={<IconHome />}/>
                    <MenuItem text="Primeiro Componente" href="/primeiro" icone={<IconNumber1 /> }/>
                    <MenuItem text="Componente com Estado" href="/contador" icone={<IconClockDown  />} />
                    <MenuItem text="Formulário" href="/formulario" icone={<IconForms />} />
                </div>
            </nav>
        </aside>
    )
}