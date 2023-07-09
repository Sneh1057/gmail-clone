import {AppBar,Toolbar,styled,InputBase,Box} from '@mui/material';
import {Menu as MenuIcon,Search,Tune,HelpOutlineOutlined,SettingsOutlined,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material';
import {gmailLogo} from '../constants/constant';
const StyleAppBar = styled(AppBar)({
    background:'#f5F5F5',
    boxShadow:'none'
})
const SearchWrapper = styled(Box)({
    background:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 20px',
    '& > div':{
        width:'100%',
        padding:'0 10px'
    }
})
 const Optionswrapper = styled(Box)({
     width:'100%',
     display:'flex',
     justifyContent:'end',
     '& > svg': {
        marginLeft:20
     }
 })
 const Header = ({ toggleDrawer }) => {
    return(
        <StyleAppBar position='static'>
            <Toolbar>
              <MenuIcon color='action'onClick={toggleDrawer}/>
              <img src={gmailLogo} alt='logo' style={{width:110,marginLeft:15}} />
              <SearchWrapper>
                <Search color='action'/>
                 <InputBase
                  placeholder='Search mail'
                 />
                <Tune color='action'/>
              </SearchWrapper>
              <Optionswrapper>
              <HelpOutlineOutlined color='action'/>
              <SettingsOutlined color='action'/>
              <AppsOutlined color='action'/>
              <AccountCircleOutlined color='action'/>
              </Optionswrapper>
            </Toolbar>
        </StyleAppBar>
    )
}
export default Header;