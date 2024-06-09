export default function innerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
       {children}
       &copy Next.js is good
    </div>
  )
}
