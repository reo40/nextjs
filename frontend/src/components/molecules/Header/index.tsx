import Separator from 'components/atoms/Separator'
import Box from 'components/layout/Box'

interface LayoutProps {
  children: React.ReactNode
}

const Header = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Separator />
      <Box padding={3}>
      </Box>
    </>
  )
}

export default Header
