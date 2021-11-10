// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <title>Sobre Mim</title>
            <h1>Sobre mim</h1>
            <Link to="/">Voltar para Home</Link>
            <p>
                Olá, eu sou Edson Carlos, estou estudando Gatsby. Atualmente faço parte do Squad WhiteLabel.
                No desafio passado, cadastrei o Alexandre numa API e em apelido coloquei Ale e ele se
                "amarrou"!
            </p>
        </main>
    )
}

// Step 3: Export your component
export default AboutPage