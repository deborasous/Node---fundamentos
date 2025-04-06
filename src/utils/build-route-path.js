// /users/:id
export function buildRoutePath(path){
  const routeParametersRegex= /:([a-zA-Z]+)/g

  const pathWithParams= path.replaceAll(
    routeParametersRegex,
    (_, key) => `(?<${key}>[a-zA-Z0-9\-_]+)`
  )

  return new RegExp(`^${pathWithParams}$`)
}