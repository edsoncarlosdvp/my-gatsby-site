// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <Layout>
                <Link to="/">Voltar para Home</Link>
                <p>
                    Olá, eu sou Edson Carlos, estou estudando Gatsby. Atualmente faço parte do Squad WhiteLabel.
                    No desafio passado, cadastrei o Alexandre numa API e em apelido coloquei Ale e ele se
                    "amarrou"!
                </p>
            </Layout>
        </main>
    )
}

// Step 3: Export your component
export default AboutPage