function sendSpaceship(name: string,captain: string){
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew : []
    }
    alert(`A nave ${spaceship.name}, comanda pelo capitao ${spaceship.captain} foi enviada para uma missao `)
    return spaceship
}
//exemplo de tipagem de parametros de função
function accelerate(targetSpeed: number, spaceship: { name: string; speed: number; }) {
    if (spaceship.speed > targetSpeed) {
      alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else if (spaceship.speed < targetSpeed) {
      alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else {
      alert(`Mantendo a velocidade da ${spaceship.name}...`)
    }
  }

  const spaceshipName = prompt('insira o nome da nave a ser enviada abaixo:')
  const spaceshipCaptain = prompt('insira o nome do capitão da nave abaixo:')

  const currentShip = sendSpaceship(spaceshipName,spaceshipCaptain)
  const speed = Number(prompt('insira a velocidade para a qual deseja acelear: '))
  accelerate(speed,currentShip)

 // exemplos de tuplas

 //primeiro exemplo
  let point : [number,string]
  point = [1,'oii']
  //segundo exemplo
  let arrayString : string[]
  arrayString = ['1','ojasd']

//exemplo de Enums
 enum PLanets {
  MERCURIO ='mercurio',
  VENUS ='venus',
  TERRA = 'terra',
  MARTE = 'marte',
 }
 PLanets.TERRA
 enum Roles {
  ADMIN,
  USER
 }

 //evitando tipagem , formas:

 // 1 - o ponto de interrogação define o parametro como opcional
 function testeFunc(spaceship: {pilot:string,copilot?: string}){
//codigo aq 
 }
 testeFunc({pilot:'Han Solo',copilot:'chewbaca'})
 testeFunc({pilot : 'luke'})

 //2-  atribuição a variavel desconhecida(nao importa a atribuição do tipo)
 let teste : unknown
 teste = 'test'
 teste = 20
 teste  = []
 // obs: nao consegue atribuir uma variavel unknow para outro tipo exemplo abaixo:
 // let text: string 
 // input = text        // vai dar erro

 // 3 - Forma mais radical que permite atribuições de variaveis de outros tipos
 let teste2 : any
 teste2 = 'test'
 teste2 = 20
 teste2  = []
 let text: string
 teste2 = text

 /// Tipos literias
 let literal: "hello"
 let pi: 3.1459
 const test = 5 // toda variavel const vira literal o tipo

 let option: number | boolean
 option = 2
 option = false

 type Planet = "Mercurio" | "Terra" | "Marte" |"Saturno" | "Urano" | "Netuno"
 let planet: Planet

 

