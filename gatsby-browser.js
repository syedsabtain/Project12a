import "firebase/app"
import "firebase/auth"
import './src/styles/all.min.css'
import './src/styles/bootstrap.min.css'
import './src/styles/style.min.css'

// import "firebase/firestore"
// import "firebase/functions"
import wrapWithProvider from './wrap-with-provider'
export const wrapRootElement = wrapWithProvider

