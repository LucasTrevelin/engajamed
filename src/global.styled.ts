import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    background: '#EAF6FE',
    background_green: '#023C52',
    background_green_lighter: '#015A84',
    background_blue: '#4A9EDA',
    letter_highlight: '#1D49A7',
    subtitle: '#00000060',
    green_filter: '#023C52'
  }
}

export const theme = extendTheme({ colors })
