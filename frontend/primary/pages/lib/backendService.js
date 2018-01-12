
export const backendUrl = "http://192.168.64.18:30583"


export async function getBreeders() {
  const res = await fetch(backendUrl + '/breeders/')
  return await res.json()
}

export async function getBreeder(pk) {
  const res = await fetch(backendUrl + '/breeders/' + pk)
  return await res.json()
}
