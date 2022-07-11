import { NextPage } from "next"
import { AppProps as NextAppProps} from "next/app"
import { ReactElement, ReactNode } from "react"

export type PageLayout = NextPage & {
  pageLayout?: (page: ReactElement) => ReactNode
}

export type AppProps = NextAppProps & {
  Component: PageLayout
}
