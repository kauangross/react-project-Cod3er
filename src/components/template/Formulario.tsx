export default function Formulario() {
    return (
        <form className="my-4">
            <input type="email" placeholder="Informe o email" className="bg-zinc-600 p-2 mr-4 rounded-md outline-none" id="form"/>
            <input type="password" placeholder="Informe a senha" className="bg-zinc-600 p-2 mr-4 rounded-md outline-none" id="form"/>
            <button className="bg-zinc-700 p-2 rounded-md">Salvar</button>
        </form>
    )
}