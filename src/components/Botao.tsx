export default function Botao(propriedades: any){
    return <button className="bg-green-500 p-2 rounded-md">
        {propriedades.label}
    </button>
}