import './Form.css'

export function Form () {
    return (
        <form action="">
            <div className='form-content'>
                <p>Cole seu link abaixo para obter uma versão curta</p>
                <input type="text" placeholder="Cole seu link" />
                <button type="submit">Enviar</button>
            </div>
        </form>
    )

}
