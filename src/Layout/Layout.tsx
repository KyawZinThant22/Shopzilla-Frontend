import { Footer } from '../section';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full bg-red-400 h-screen">
      <div className="w-[1800px] mx-auto ">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
