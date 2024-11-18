constante Avanza = documento.consultaSelectorAll('.btn-proximo');

Avanza.Para cada uno(botón => {
    botón.agregarEventListener('hacer clic', función(){
        constante actual = documento.Selector de consultas('.ativo');
        constante próximoPasso = 'paso-' + este.Obtener atributo('datos próximos');

        actual.Lista de clases.eliminar('ativo');
        documento.obtenerElementoPorId(próximoPasso).Lista de clases.agregar('ativo');
    })
})
