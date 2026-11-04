import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Montenyon — A place for what comes next', description: 'The home of Montenyon projects, stories, and digital spaces.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
