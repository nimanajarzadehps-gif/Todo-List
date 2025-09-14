import * as React from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Button, fabClasses, Stack, Switch, TextField } from '@mui/material';
import { red } from '@mui/material/colors';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from '@mui/icons-material/Settings'; // 👈 اینو اضافه کن
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TaskIcon from '@mui/icons-material/Task';
import CardActionArea from '@mui/material/CardActionArea';
import LoopIcon from '@mui/icons-material/Loop';
import EditIcon from '@mui/icons-material/Edit';
import { Task } from '@mui/icons-material';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DoneIcon from '@mui/icons-material/Done';
import Alert from '@mui/material/Alert';
import DarkModeIcon from '@mui/icons-material/DarkMode';


// ---------- Search bar styling ----------
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// ---------- Main App ----------
export default function App() {
  const [mode,setmode] = React.useState("light")
  const darktheme = createTheme({
    palette : {
      mode : mode
    }
  })
  return (
    <ThemeProvider theme={darktheme}>
  <Box bgcolor={"background.default"} color={"text.primary"}>
      <PrimarySearchAppBar />
      <Stack direction="row">
        <Sidebar setmode={setmode} mode={mode} />
        <Feed />
      </Stack>
    </Box>
    </ThemeProvider>
  
  );
}

// ---------- Navbar ----------
function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Todo
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
// ---------- Sidebar ----------
function Sidebar({mode,setmode}) {
  function handlemode() {
    if (mode==="light") {
      setmode("dark")
    }
    else{
      setmode("light")
    }
  }
  return (
    <Box sx={{ display: "flex", flex: 1, minHeight: "100vh" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><InboxIcon sx={{  }} /></ListItemIcon>
            <ListItemText primary="Inbox" sx={{  }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><MailIcon sx={{  }} /></ListItemIcon>
            <ListItemText primary="Messages" sx={{  }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><NotificationsIcon sx={{  }} /></ListItemIcon>
            <ListItemText primary="Notifications" sx={{  }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><SearchIcon sx={{  }} /></ListItemIcon>
            <ListItemText primary="Search" sx={{  }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><AccountCircle sx={{  }} /></ListItemIcon>
            <ListItemText primary="Profile" sx={{  }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><SettingsIcon sx={{  }} /></ListItemIcon>
            <ListItemText primary="Settings" sx={{  }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><ExitToAppIcon sx={{  }} /></ListItemIcon>
            <ListItemText primary="Logout" sx={{  }} />
          </ListItemButton>
        </ListItem>
         <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><DarkModeIcon></DarkModeIcon></ListItemIcon>
           <Switch onChange={handlemode}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

// ---------- Feed ----------
function Feed() {
  const [tasks, setTasks] = React.useState([]);  
   const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [click,setclick] = React.useState(false)
  // همه کارها اینجا نگهداری میشن

  return (
    <Box sx={{ flex: 4, minHeight: "100vh", p: 2 }}>
      {/* فرم اضافه کردن کار */}
      <AddTaskForm tasks={tasks} setTasks={setTasks} title={title} setTitle={setTitle} 
      description={description} setDescription={setDescription} click={click} setclick={setclick}/>

      <Stack display={"flex"} flexDirection={"row"} mt={2} spacing={2}>
        {/* کارهای جدید */}
        <New_Task tasks={tasks} setTasks={setTasks} title={title}
         setTitle={setTitle} description={description} setDescription={setDescription}
         click={click} setclick={setclick}
         />

        {/* کارهای در حال انجام */}
        <Inprogress tasks={tasks} setTasks={setTasks} />

        {/* کارهای تکمیل شده */}
        <Completed tasks={tasks} setTasks={setTasks}  />
      </Stack>
    </Box>
  );
}

const cards = [
  {
    id: 1,
    title: 'Sleeping',
    description: 'Try to Sleep Soon',
  },
 
];
const secondcard = [
    {
    id: 2,
    title: 'Learning',
    description: 'Watching 10 episod of Tutorial per day',
  },
]
function Completed({tasks,setTasks}) {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const donetask = tasks.filter((task) => task.status === "done");

  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {donetask.map((task, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={task === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {task.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {task.description}
              </Typography>
              <br/>
        <Box display="flex" justifyContent="center" mt={2}>
              <TaskIcon color='success' sx={{alignSelf:"flex-end", display:"flex" , size:"larger"}}/>

</Box>
  
              
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

 function Inprogress({ tasks, setTasks }) {
  const inProgressTasks = tasks.filter((task) => task.status === "inprogress");
const[alert,setalert] = React.useState(false)
const handledone = (taskId) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, status: "done" } : t
      )
    );
  };
function handleedit() {
  setalert(true)
   
            setTimeout(() => setalert(false), 3000);
          
}
  return (
       <Box

      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
       {alert && (
        <Box mb={2}>
          <Alert severity="warning">You Couldnt Change your activity While its in progress!</Alert>
        </Box>
      )}
      {inProgressTasks.map((task) => (
        <Card key={task.id}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5">{task.title}</Typography>
              <Typography variant="body2">{task.description}</Typography>
              <Stack display="flex" flexDirection="row" justifyContent="space-around">
                <LoopIcon color="warning" />
                <DeleteIcon
                  color="warning"
                  onClick={() =>
                    setTasks(tasks.filter((t) => t.id !== task.id))
                  }
                />
                <EditIcon color="warning" onClick={handleedit} />
              </Stack>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button variant="contained" onClick={() => handledone(task.id)}
 endIcon={<DoneIcon />}>
                  Done
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

  




function AddTaskForm({ tasks, setTasks ,title ,setTitle, description , setDescription , click , setclick}) {



  const handleAdd = () => {
    if (!title) return; // اگه عنوان خالی بود کاری نکن
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "new"
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setclick(true)
    
  };
 
  return (
    <Card sx={{ mb: 2, p: 2 }}>
      <Typography variant="h6" mb={1}>Add New Task</Typography>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 1 }}
      />
      <Button variant="contained" onClick={handleAdd}>Add Task</Button>
    </Card>
  );
}

function New_Task({ tasks, setTasks }) {
  const [display, setDisplay] = React.useState(true);
  const [alert, setAlert] = React.useState(false);

  // تغییر وضعیت isEditing
  const handleEditToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isEditing: !t.isEditing } : t
      )
    );
  };

  // ذخیره تغییرات عنوان و توضیحات
  const handleSave = (id, newTitle, newDescription) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const hasChanged =
            t.title !== newTitle || t.description !== newDescription;
          if (hasChanged) {
            setAlert(true);
            setTimeout(() => setAlert(false), 3000);
          }
          return {
            ...t,
            title: newTitle,
            description: newDescription,
            isEditing: false,
          };
        }
        return t;
      })
    );
  };

  // شروع کار
  const handleStart = (taskId) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, status: "inprogress" } : t
      )
    );
  };

  // حذف کار
  const handleDelete = (taskId) =>
    setTasks((prev) => prev.filter((t) => t.id !== taskId));

  // فقط کارهای new
  const newTasks = tasks.filter((task) => task.status === "new");
  if (newTasks.length === 0) return null;

  if (!display) return null;

  return (
    <Box sx={{ width: "100%" }}>
      {alert && (
        <Box mb={2}>
          <Alert severity="success">Task updated successfully!</Alert>
        </Box>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}
      >
        {newTasks.map((task) => (
          <Card key={task.id}>
            <CardActionArea sx={{ height: "100%" }}>
              <CardContent sx={{ height: "100%" }}>
                {task.isEditing ? (
                  <>
                    <TextField
                      variant="standard"
                      fullWidth
                      defaultValue={task.title}
                      onBlur={(e) =>
                        handleSave(task.id, e.target.value, task.description)
                      }
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        handleSave(task.id, e.target.value, task.description)
                      }
                    />
                    <TextField
                      variant="standard"
                      fullWidth
                      defaultValue={task.description}
                      onBlur={(e) =>
                        handleSave(task.id, task.title, e.target.value)
                      }
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        handleSave(task.id, task.title, e.target.value)
                      }
                      sx={{ mt: 1 }}
                    />
                  </>
                ) : (
                  <>
                    <Typography variant="h5">{task.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {task.description}
                    </Typography>
                  </>
                )}

                <Stack
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-around"
                  alignItems="center"
                  mt={2}
                >
                  <FiberNewIcon color="primary" />
                  <DeleteIcon
                    onClick={() => handleDelete(task.id)}
                    color="primary"
                  />
                  <IconButton onClick={() => handleEditToggle(task.id)}>
                    <EditIcon color="primary" />
                  </IconButton>
                </Stack>

                <Box display="flex" justifyContent="center" mt={2}>
                  <Button
                    variant="contained"
                    endIcon={<AddBoxIcon />}
                    onClick={() => handleStart(task.id)}
                    sx={{ padding: "16px 32px" }}
                  >
                    Add to progress
                  </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}











    
   


