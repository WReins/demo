const text = new Blotter.Text("Fill up on fun", {
    family: 'yanga',
    size: 200,
    fill: '#FA3C14',

})

const material = new Blotter.LiquidDistortMaterial()
material.uniforms.uSpeed.value = 0.3
material.uniforms.uVolatility.value = 0.02
material.uniforms.uSeed = 1

const blotter = new Blotter(material, {
    texts: text
})

const scope = blotter.forText(text)

scope.appendTo(document.body)