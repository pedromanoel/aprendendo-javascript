function fetchAveragePrices(start) {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve({nome: 'fetchAveragePrices', delta: Date.now() - start})
      }, 2000)
    )
}

function feedbackDelay(start) {
  return new Promise(resolve => setTimeout(resolve, 3000))
}

function feedbackDelayPromise(start) {
  const promise = new Promise(resolve => setTimeout(resolve, 3000))
  return () => promise
}

async function promiseAll() {
  const start = Date.now()

  const res = await Promise.all([
    fetchAveragePrices(start),
    feedbackDelay(start)
  ])

 console.log({res: res[0], delta: Date.now() - start})
}

async function promiseThen() {
  const start = Date.now()
  const res = await fetchAveragePrices(start).then(feedbackDelayPromise(start))

  console.log({res, delta: Date.now() - start})
}

console.log('PromiseAll')
promiseAll()
console.log('PromiseThen')
promiseThen()
