export default function DrawItens(originList: any[], quantity: number) {
  let length: number = quantity > originList.length ? originList.length : quantity
  let numbersList: number[] = []

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * (originList.length - 0) + 0);

    if (numbersList.length === 0) {
      numbersList.push(random)
    } else {
      const numberOnList: number = numbersList.find(num => num === random);
      while (numberOnList === random) {
        random = Math.floor(Math.random() * (originList.length - 0) + 0);
      }
      numbersList.push(random)
    }
  }

  const generatedList: any[] = []
  for (let i = 0; i < numbersList.length; i++) {
    generatedList.push(originList[numbersList[i]])
  }

  const readyList = doubleCheck(generatedList, originList)

  return readyList;
}

function doubleCheck(generatedList: any[], originalList: any[]) {
  let newList: any[] = []
  let excludedItens: number

  generatedList.forEach(item => {
    newList = generatedList.filter(compare => item.value !== compare.value)
    excludedItens = generatedList.filter(compare => item.value === compare.value).length
  })

  if (newList.length === generatedList.length) {
    return newList
  }

  for (let i = 0; i < excludedItens; i++) {
    let random = Math.floor(Math.random() * (originalList.length - 0) + 0)
    let newItem = originalList[random];

    while (newList.some(item => newItem.value === item.value)) {
      random = Math.floor(Math.random() * (originalList.length - 0) + 0)
      newItem = originalList[random];
    }
    newList.push(newItem)
  }

  return newList
}
