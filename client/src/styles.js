import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },

      //for the small devices
      [theme.breakpoints.down("sm")]: {
        appBar: {
          flexDirection: 'column',
        },
        mainContainer : {
          flexDirection : "column-reverse",
        }
      }
}));