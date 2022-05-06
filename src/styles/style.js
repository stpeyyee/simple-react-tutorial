import { makeStyles } from '@mui/styles';

export const style = makeStyles((theme) => ({
    roundButton : {
        '&.MuiButton-root' : {
            borderRadius: 20,
            backgroundColor: theme.palette.warning.main,
        }
    }
}
))