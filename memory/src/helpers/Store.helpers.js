// enum
const validationRules = Object.freeze({
  lengthRule: {
    rule: [3, 24],
    message: `Minimal length is ${3} and max is ${24}`
  }
})

export const validateUsername = (users, username) => {
  const [minLength, maxLength] = validationRules.lengthRule.rule
  const usernameLength = username?.length

  let errorMessage = validationRules.lengthRule.message
  const isUsernameBetweenLengthThresholds = usernameLength >= minLength && usernameLength <= maxLength

  if (isUsernameBetweenLengthThresholds) {
    errorMessage = checkIfUserAlreadyExist(users, username) ? `Username: ${username} is already taken` : ''
  }

  return errorMessage
}

export const checkIfUserAlreadyExist = (users = [], username = '') => !!~users?.findIndex(user => user?.username.toLowerCase() === username.toLowerCase())
