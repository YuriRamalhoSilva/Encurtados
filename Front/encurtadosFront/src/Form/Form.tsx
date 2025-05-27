import './Form.css'

export function Form () {
    return (
        <form action="">
            
            <p>Cole seu link abaixo para obter uma versão curta</p>
            <div className='inp-btn'>
                <input type="text" placeholder="Cole seu link" />
                <button type="submit">Enviar</button>
            </div>
        </form>
    )

}
