import "../main.css"
import DraftsIcon from '@mui/icons-material/Drafts';
import { Grid } from "@material-ui/core";


export default function Signin(){
return(
<Grid container lg={12} xs={12}>
<div className="newsletter-subscribe">
<div className="SignInCale">
    <div className="intro">
        <div className="NewsletterIcon"><DraftsIcon fontSize="large"></DraftsIcon></div>
        <h2 className="tytul-newsletter">Zapisz sie do newslettera</h2>
        <p className="BodySignIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <form className="form-inline" method="post">
        <div className="form-group"><input className="EmailInput" type="email" name="email" placeholder="Twój adres email"></input></div>
        <div className="form-group"><button className="btn btn-primary" type="button">Zapisuję się </button></div>
        <div className="SmallText">Administratorem danych lorem ipsum dolor sit am do eiusmod tempor incididunt do eiusmod tempor incididunt ut labore edo eiusmod tempor incididunt ut labore eut labore e</div>
    </form>
    </div>
    
</div>
</div>
</Grid>
)
}