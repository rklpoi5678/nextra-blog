import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = 
    <Banner storageKey="metaos-banner">
       📡 현재 페이지는 실험 중입니다 - MetaOS 프로젝트에 기록되고 있습니다.
    </Banner>

const navbar = (
    <Navbar
        logo={<span style={{ fontWeight: 'bold', fontSize: '1.2rem'}}>Meta OS.Log</span>}
        // ... Your additional navbar options
    />
)

const footer =(
 <Footer>© {new Date().getFullYear()} MetaOS. All experiments logged by rklpoi5678</Footer>
)

export default async function RootLayout({children}) {
    return (
        <html
            // Not required, but good for SEO
            lang="ko"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            <link rel="shortcut icon" href="/images/general/icon.svg"/>
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/rklpoi5678/nextra-blog.git"
            footer={footer}
            // ... Your additional layout options
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}