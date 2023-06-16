import { database } from 'firebase.config'
import { onValue, ref, push, set, remove } from 'firebase/database'
import type { DatabaseReference } from 'firebase/database'
import type { ICardDrink, IRandomDrink } from 'types'

export async function addAndRemoveDrinkInDatabase(
  drink: IRandomDrink | ICardDrink,
  uid: string
): Promise<void> {
  const userBookmarksRef = ref(database, `bookmarks/${uid}`)
  const databaseResults = await checkDrinkInDatabase(
    drink.idDrink,
    userBookmarksRef
  )
  if (databaseResults === false) {
    const drinkToAddRef = push(userBookmarksRef)
    try {
      await set(drinkToAddRef, drink)
    } catch (error) {
      console.log(error)
    }
  } else if (typeof databaseResults === 'object') {
    const drinkToDeleteRef = ref(
      database,
      `bookmarks/${uid}/${databaseResults.key}`
    )
    try {
      await remove(drinkToDeleteRef)
    } catch (error) {
      console.log(error)
    }
  }
}

export async function checkDrinkInDatabase(
  drinkId: string,
  ref: DatabaseReference
): Promise<boolean | { isAvailable: boolean; key: string }> {
  // eslint-disable-next-line
  return new Promise((resolve) => {
    onValue(
      ref,
      (snapshot) => {
        const drinksSnapshot = snapshot.val()

        for (const key in drinksSnapshot) {
          if (drinksSnapshot[key].idDrink === drinkId) {
            resolve({ isAvailable: true, key })
          }
        }
        resolve(false)
      },
      {
        onlyOnce: true
      }
    )
  })
}

export async function getAllDrinksInDatabase(
  uid: string
): Promise<IRandomDrink[]> {
  // eslint-disable-next-line
  const bookmarkDrinksPromise = new Promise((resolve) => {
    onValue(
      ref(database, `bookmarks/${uid}`),
      (snapshot) => {
        const drinks = []
        const databaseDrinks = snapshot.val()
        for (const key in databaseDrinks) {
          drinks.push(databaseDrinks[key])
        }
        resolve(drinks)
      },
      { onlyOnce: true }
    )
  }) as Promise<IRandomDrink[]>

  // eslint-disable-next-line
  return bookmarkDrinksPromise
}
