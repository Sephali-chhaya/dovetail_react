import { ArrowClockwise, House, List } from 'react-bootstrap-icons';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import SiteLogo from '..//../Components/Assets/images/SiteLogo.jpg'
 const SideBar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%', textAlign: "center"}}>
      <Sidebar>
        <Menu>
        <img src={SiteLogo} height={30} width={150} className='ms-4 '/>
            <MenuItem>
            <List size={25} onClick={() => collapseSidebar()}/>
            </MenuItem >
        <SubMenu icon={<House color='blue' size={25}/>} label="Home">
          <MenuItem> 
          <House color='blue' size={25}/>
          Documentation
          </MenuItem>
          <MenuItem>
          <House color='blue' size={25}/>E-commerce
           </MenuItem>
          </SubMenu>
          <MenuItem> 
          <House color='blue' size={25}/>Calendar
          </MenuItem>
          <MenuItem>
          <House color='blue' size={25}/>E-commerce
           </MenuItem>
           <MenuItem>
          <House color='blue' size={25}/>E-commerce
           </MenuItem>
           <MenuItem>
          <House color='blue' size={25}/>E-commerce
           </MenuItem>
           <MenuItem>
          <House color='blue' size={25}/>E-commerce
           </MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main> */}
    </div>
  );
}
export default SideBar;