//Libs

//Local
import MainNavigation from './MainNavigation';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;