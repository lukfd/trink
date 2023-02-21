module.exports = {
  async convertGender(gender) {
    gender = gender.toUpperCase()
    switch (gender) {
      case 'MALE':
        return 'MASCHIO'
      case 'FEMALE':
        return 'FEMMINA'
      case 'M':
        return 'MASCHIO'
      case 'F':
        return 'FEMMINA'
      default:
        return 'MASCHIO'
    }
  },
}
