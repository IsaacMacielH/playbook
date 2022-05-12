const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
console.log("----- Punto 1 y 2 -----")
explorers.forEach(explorer => console.log(explorer.name + " " + explorer.stack))

console.log("----- Punto 3 -----")
const explorersStacks = explorers.map(explorer => explorer.stack)
console.log(explorersStacks)

console.log("----- Punto 4 -----")
const explorersWithJs = explorers.filter((explorer) => explorer.stack.includes('js'))
console.log(explorersWithJs)

console.log("----- Punto 5 -----")
console.log(explorers.find((explorer) => explorer.city === 'CDMX'))

console.log("----- Punto 6 -----")
const exercises = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log(`The toal of oxercises completes is: ${exercises}`)

console.log("----- Punto 7 -----")
const areSome = explorers.some((finished) => finished.missions.frontend.exercisesFinished === true)
console.log(`Some of the explorers has finished the Front End mission: ${areSome}`)

console.log("----- Punto 8 -----")
const areEvery = explorers.every((finished) => finished.missions.onboarding.isFinished === true)
console.log(`Every explorer has finished the Onboarding mission: ${areEvery}`)