import dotenv from 'dotenv'

if (process.env && process.env.NODE_ENV) {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
} else {
  dotenv.config({ path: '.env.development' })
}

const secret = process.env.SECRET

export {
  secret
}
