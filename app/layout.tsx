import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://the-shadowverse-archive.toby-crome.chatgpt.site'),title:{default:'The Shadowverse — The Concealed Histories',template:'%s | The Shadowverse'},description:'Enter The Shadowverse: a supernatural alternate history series by Toby Crome.',alternates:{canonical:'/'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
