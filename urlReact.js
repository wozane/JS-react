updateURL(key, value) {
  const currentHash = this.props.location.hash || '#'
  const isIncluded = new RegExp(`${key}:.`)
  const newHash = isIncluded.test(currentHash) 
    ? (
      currentHash.replace(isIncluded, `${key}:${value}`)
    ) : (
      `${currentHash},${key}:${value}`
    )
  this.props.history.replace({ hash: newHash })
}
