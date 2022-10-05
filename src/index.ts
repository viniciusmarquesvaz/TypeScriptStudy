function sendSpaceship(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: []
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

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)
const speed = Number(prompt('insira a velocidade para a qual deseja acelear: '))
accelerate(speed, currentShip)

// exemplos de tuplas

//primeiro exemplo
let point: [number, string]
point = [1, 'oii']
//segundo exemplo
let arrayString: string[]
arrayString = ['1', 'ojasd']

//exemplo de Enums
enum PLanets {
  MERCURIO = 'mercurio',
  VENUS = 'venus',
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
function testeFunc(spaceship: { pilot: string, copilot?: string }) {
  //codigo aq 
}
testeFunc({ pilot: 'Han Solo', copilot: 'chewbaca' })
testeFunc({ pilot: 'luke' })

//2-  atribuição a variavel desconhecida(nao importa a atribuição do tipo)
let teste: unknown
teste = 'test'
teste = 20
teste = []
// obs: nao consegue atribuir uma variavel unknow para outro tipo exemplo abaixo:
// let text: string 
// input = text        // vai dar erro

// 3 - Forma mais radical que permite atribuições de variaveis de outros tipos
let teste2: any
teste2 = 'test'
teste2 = 20
teste2 = []
let text: string
teste2 = text

/// Tipos literias
let literal: "hello"
let pi: 3.1459
const test = 5 // toda variavel const vira literal o tipo

let option: number | boolean
option = 2
option = false

//Criando tipos
type teste = "Mercurio" | "Terra" | "Marte" | "Saturno" | "Urano" | "Netuno"
let planet: teste

//criar tipos de função
type GreetingCallback = (name: string) => void
//criando interfaces, usadas pra tipar objetos
interface CelestialBody {
  name: string
  mass: number

}
type Planeta = {
  name: string
  mass: number
}
interface Star extends CelestialBody {
  age: number
  planets: Planeta[]
}

interface Planet extends CelestialBody {
  population: number
  createSatellite: (name: string) => void
}

let sun: Star

sun.name = 'Sol'
sun.mass = 1989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = []

//implementar a interface de tipos em uma classe

class testando implements Planeta {
  name: string;
  mass: number

}

// usando Omit e pick  

//exemplo de interfaces
interface GithubUserResponse {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: boolean
  bio: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface GithubRepoResponse {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  html_url: string
  description: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: string
  size: number
  stargazers_count: number
  watchers_count: number
  language: string
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  forks_count: number
  mirror_url: string
  archived: boolean
  disabled: boolean
  open_issues_count: number
  license: string
  allow_forking: boolean
  is_template: boolean
  topics: string[]
  visibility: string
  forks: number
  open_issues: number
  watchers: number
  default_branch: string
}


type LocalGithubUser = Pick<GithubUserResponse, 'id' | 'login' | 'name' | 'bio' | 'public_repos' | 'repos_url'>

type LocalGithubRepository = Pick<GithubRepoResponse, 'name' | 'description' | 'fork' | 'stargazers_count'>

let localUser: LocalGithubUser
let localRepository: LocalGithubRepository

// Vemos no autocompletar as propriedades de ambos os objetos
localUser.name = ''
localRepository.name = ''

// tipos genericos

function first(array) {
  return array[0]
}

function last<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1]
}

const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']

// Tipo any
const firstPilot = first(pilots)

// Tipo inferido
const lastPilot = last(pilots)
