import { styled,Box, InputBase, alpha , Card, Typography} from "@mui/material";

export const PageHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    marginBottom: theme.spacing(2.1),
    alignItems: "center",
  justifyContent: "flex-end",
  [theme.breakpoints.down(750)]: {
    flexDirection: "column"
  },
}));

export const HeaderTitle=styled(Box)(({theme})=>({
    marginRight: "auto",
    marginLeft: "50%",
    transform: "translate(-50%, 0)",
    [theme.breakpoints.down(750)]: {
    margin:"auto"
  },
}))

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  boxShadow: " 0 2px 4px rgba(0, 0, 0, 0.2)",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up(750)]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const BotCard=styled(Card)((({})=>({
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        ':hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 16px rgba(0, 0, 0, 0.2)'}
})))
 export const BotCardLogo=styled(Box)(({theme})=>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(4),
 }))

export const BotCardTitle = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(2.3),
    fontWeight: 700,
    whiteSpace: "nowrap",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
 }))