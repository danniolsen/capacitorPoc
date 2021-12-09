import BottomNavigator from '../navigation/BottomNavigator'

const Layout = ({ children }) => {
  return (
    <div className="relative w-screen">
      {children}

      <BottomNavigator />
    </div>
  )
}

export default Layout
