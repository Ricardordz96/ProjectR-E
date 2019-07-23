module.exports = (request, response) => {
    const { name = 'Ricardo Rodriguez' } = request.query
    response.send(`Hello ${name}!`)
}

// Ejemplo de API Node.js